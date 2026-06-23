import { GoogleGenAI, Modality } from '@google/genai';
import fs from 'fs';
import path from 'path';

const GEMINI_API_KEY = 'AIzaSyBLYzELKAPCYgvmQhHPfk63_3mz5SZD0l0';
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const OUTPUT_DIR = path.resolve('public/images');

const imagePrompts = [
  {
    name: 'hero/workshop.png',
    prompt: 'Professional photograph of a traditional woodworking workshop interior, warm lighting, wooden workbench with hand tools, wood shavings on the floor, shelves with various wood types, natural light coming through windows, craftsmanship atmosphere, high quality, photorealistic',
  },
  {
    name: 'services/kuhinje.png',
    prompt: 'Beautiful custom wooden kitchen in a modern Croatian home, warm oak wood cabinets, marble countertop, natural light, clean and elegant design, professional interior photography, high quality',
  },
  {
    name: 'services/namjestaj.png',
    prompt: 'Handcrafted wooden bookshelf and cabinet in a cozy living room, solid walnut wood, elegant design, warm lighting, professional furniture photography, high quality',
  },
  {
    name: 'services/vrata.png',
    prompt: 'Beautiful solid wood interior doors in a hallway, warm cherry wood, glass inserts, elegant hardware, professional architectural photography, natural light, high quality',
  },
  {
    name: 'services/prozori.png',
    prompt: 'Traditional wooden window frames in a European-style house, open wooden shutters, warm wood tones, view of a green garden, natural light, professional architecture photography, high quality',
  },
  {
    name: 'services/stepenice.png',
    prompt: 'Elegant wooden staircase in a modern home, solid oak L-shaped stairs with handcrafted railing, warm lighting, professional interior photography, high quality',
  },
  {
    name: 'services/podovi.png',
    prompt: 'Beautiful herringbone pattern oak hardwood floor in a bright living room, warm wood tones, natural sunlight, professional interior photography, high quality',
  },
  {
    name: 'services/pergole.png',
    prompt: 'Wooden pergola over a terrace in a European garden, warm wood construction, climbing plants, outdoor dining set underneath, summer atmosphere, professional outdoor photography, high quality',
  },
  {
    name: 'services/restauracija.png',
    prompt: 'Antique wooden cabinet being restored in a workshop, half-restored showing before and after, wood refinishing tools nearby, warm workshop lighting, professional craft photography, high quality',
  },
  {
    name: 'gallery/kuhinja-1.jpg',
    prompt: 'Custom white and oak wood kitchen, modern minimalist design, island with wooden top, integrated appliances, bright natural light, professional kitchen photography, high quality',
  },
  {
    name: 'gallery/stepenice-1.jpg',
    prompt: 'Modern wooden floating staircase, dark walnut wood, glass railing, contemporary home interior, professional architecture photography, warm tones, high quality',
  },
  {
    name: 'gallery/ormar-1.jpg',
    prompt: 'Custom built-in wardrobe with sliding wooden doors, beech wood, bedroom interior, organized interior shelving, warm lighting, professional furniture photography, high quality',
  },
  {
    name: 'gallery/pergola-1.jpg',
    prompt: 'Large wooden pergola with outdoor seating area, pine wood construction, cozy garden setting, string lights, professional outdoor photography, golden hour light, high quality',
  },
  {
    name: 'gallery/restauracija-1.jpg',
    prompt: 'Beautifully restored antique oak wardrobe, rich wood grain visible, ornate carved details, professional furniture photography on clean background, high quality',
  },
  {
    name: 'gallery/parket-1.jpg',
    prompt: 'Freshly installed oak herringbone parquet floor, close-up showing beautiful wood grain pattern, warm natural tones, professional flooring photography, high quality',
  },
];

async function generateImage(prompt, outputPath) {
  const fullPath = path.join(OUTPUT_DIR, outputPath);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (fs.existsSync(fullPath)) {
    console.log(`  ⏭ Skipping (already exists): ${outputPath}`);
    return;
  }

  try {
    console.log(`  ⏳ Generating: ${outputPath}...`);
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
        const imageData = Buffer.from(part.inlineData.data, 'base64');
        fs.writeFileSync(fullPath, imageData);
        console.log(`  ✅ Saved: ${outputPath} (${(imageData.length / 1024).toFixed(0)}KB)`);
        return;
      }
    }
    console.log(`  ❌ No image data in response for: ${outputPath}`);
  } catch (error) {
    console.error(`  ❌ Error generating ${outputPath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Generating images for Stolarija Mika...\n');

  for (const img of imagePrompts) {
    await generateImage(img.prompt, img.name);
    // Rate limiting
    await new Promise((r) => setTimeout(r, 1500));
  }

  console.log('\n✅ Image generation complete!');
}

main();
