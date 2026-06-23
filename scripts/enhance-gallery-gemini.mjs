import { GoogleGenAI, Modality } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const GALLERY = path.resolve('public/images/gallery');

const files = fs.readdirSync(GALLERY)
  .filter(f => /^mika-\d+\.jpg$/.test(f))
  .sort();

console.log(`Found ${files.length} gallery images to enhance\n`);

async function enhance(filename) {
  const inputPath = path.join(GALLERY, filename);
  const outputPath = path.join(GALLERY, filename); // overwrite

  try {
    const imageData = fs.readFileSync(inputPath);
    const base64 = imageData.toString('base64');

    console.log(`  ⏳ ${filename}...`);

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{
        role: 'user',
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: base64 } },
          { text: 'Enhance this photo for a professional carpentry/woodworking portfolio website. Remove any clutter, trash, tools, bags, bottles, boxes, or mess that is not part of the main furniture or woodwork. Clean up the background. Improve lighting, color balance, contrast and sharpness. Make it look like a professional interior/product photograph. Keep the main woodwork subject exactly as it is. Output the enhanced image.' },
        ],
      }],
      config: { responseModalities: [Modality.IMAGE, Modality.TEXT] },
    });

    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        const data = Buffer.from(part.inlineData.data, 'base64');
        fs.writeFileSync(outputPath, data);
        console.log(`  ✅ ${filename} (${(data.length / 1024).toFixed(0)}KB)`);
        return true;
      }
    }
    console.log(`  ❌ No image: ${filename}`);
    return false;
  } catch (error) {
    console.error(`  ❌ ${filename}: ${error.message?.slice(0, 100)}`);
    return false;
  }
}

async function main() {
  let ok = 0;
  for (const file of files) {
    const success = await enhance(file);
    if (success) ok++;
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log(`\n✅ Enhanced ${ok}/${files.length}`);
}

main();
