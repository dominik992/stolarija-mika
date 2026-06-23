import { GoogleGenAI, Modality } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const DOWNLOADS = '/Users/dominikdragicevic/Downloads';
const OUTPUT = '/Users/dominikdragicevic/projects/stolarija-mika/public/images/gallery';

// Find all recent WhatsApp images
const files = fs.readdirSync(DOWNLOADS)
  .filter(f => f.startsWith('WhatsApp Image 2026-06-23'))
  .sort();

console.log(`Found ${files.length} WhatsApp images\n`);

async function enhanceImage(inputPath, outputName) {
  const outputPath = path.join(OUTPUT, outputName);

  if (fs.existsSync(outputPath)) {
    console.log(`  ⏭ Skip (exists): ${outputName}`);
    return true;
  }

  try {
    const imageData = fs.readFileSync(inputPath);
    const base64 = imageData.toString('base64');
    const mimeType = 'image/jpeg';

    console.log(`  ⏳ Enhancing: ${outputName}...`);

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [
        {
          role: 'user',
          parts: [
            {
              inlineData: {
                mimeType,
                data: base64,
              },
            },
            {
              text: 'Enhance this photo for a professional carpentry portfolio website. Improve lighting, color balance, and contrast. Clean up the background - remove any clutter, mess, tools on the floor, garbage, or distracting elements that are not part of the main furniture/woodwork piece. Make it look like a professional interior/product photograph. Keep the main subject (the furniture/woodwork) exactly as it is - only improve the surroundings and photo quality. Output the enhanced image.',
            },
          ],
        },
      ],
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        const data = Buffer.from(part.inlineData.data, 'base64');
        fs.writeFileSync(outputPath, data);
        console.log(`  ✅ Saved: ${outputName} (${(data.length / 1024).toFixed(0)}KB)`);
        return true;
      }
    }
    console.log(`  ❌ No image returned for ${outputName}`);
    return false;
  } catch (error) {
    console.error(`  ❌ Error: ${outputName}:`, error.message?.slice(0, 100));
    return false;
  }
}

async function main() {
  console.log('🖼️  Enhancing Mika\'s photos with AI...\n');

  // Remove old AI-generated gallery images
  const oldFiles = fs.readdirSync(OUTPUT).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  for (const f of oldFiles) {
    fs.unlinkSync(path.join(OUTPUT, f));
    console.log(`  🗑 Removed old: ${f}`);
  }
  console.log('');

  let count = 0;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(DOWNLOADS, file);
    const outputName = `mika-${String(i + 1).padStart(2, '0')}.jpg`;

    const ok = await enhanceImage(inputPath, outputName);
    if (ok) count++;

    // Rate limiting
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log(`\n✅ Done! Enhanced ${count}/${files.length} images.`);
}

main().catch(console.error);
