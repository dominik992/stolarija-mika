import { GoogleGenAI, Modality } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const OUTPUT = path.resolve('public/images/services');

const images = [
  {
    name: 'vrata.jpg',
    prompt: 'Professional interior photograph of beautiful solid wood interior doors installed in a modern European home hallway. Warm oak wood doors with minimalist black hardware handles. Clean white walls, warm lighting, polished floor. The doors are the focal point. No people. Professional real estate photography style, sharp focus, well-lit.',
  },
  {
    name: 'prozori.jpg',
    prompt: 'Professional photograph of high-quality wooden window frames in a European house. The windows are made of warm-toned natural wood (oak or pine), with double glazing. Shot from inside showing the beautiful wood grain detail and craftsmanship. Green garden visible outside. Natural daylight streaming in. Professional architectural photography, sharp and well-composed.',
  },
  {
    name: 'stepenice.jpg',
    prompt: 'Professional interior photograph of elegant modern wooden staircase in a contemporary home. Solid oak wood steps with LED strip lighting underneath each step creating a warm glow. Metal and wood railing. Stone accent wall beside the stairs. The staircase is the hero of the shot. Professional interior design photography, warm tones, sharp focus.',
  },
  {
    name: 'podovi.jpg',
    prompt: 'Professional close-up photograph of beautiful herringbone pattern solid oak hardwood parquet flooring in a bright modern living room. Warm natural wood tones, visible grain texture. Sunlight casting soft shadows across the floor. Minimal furniture visible at edges. Professional flooring photography, sharp detail, warm color grading.',
  },
  {
    name: 'pergole.jpg',
    prompt: 'Professional outdoor photograph of a beautiful wooden pergola over a terrace in a European garden. The pergola is made of treated pine or larch wood with clean construction. Outdoor dining furniture underneath. Green garden surroundings, blue sky. Summer golden hour lighting. Professional landscape architecture photography.',
  },
  {
    name: 'restauracija.jpg',
    prompt: 'Professional photograph of a beautifully restored antique wooden cabinet or wardrobe. The piece shows rich dark wood grain, ornate carved details, and a perfect glossy finish after restoration. Shot in a clean, well-lit workshop or showroom setting. The craftsmanship and wood quality are the focus. Professional furniture photography, warm tones.',
  },
];

async function generateImage(prompt, outputName) {
  const outputPath = path.join(OUTPUT, outputName);

  try {
    console.log(`  ⏳ Generating: ${outputName}...`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: prompt,
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
        return;
      }
    }
    console.log(`  ❌ No image data for ${outputName}`);
  } catch (error) {
    console.error(`  ❌ Error ${outputName}:`, error.message?.slice(0, 120));
  }
}

async function main() {
  console.log('Generating service images...\n');
  for (const img of images) {
    await generateImage(img.prompt, img.name);
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log('\nDone!');
}

main();
