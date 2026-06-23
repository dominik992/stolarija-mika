import OpenAI, { toFile } from 'openai';
import fs from 'fs';
import { config } from 'dotenv';
config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const testImage = '/tmp/kitchen-test.png';
const outputPath = '/Users/dominikdragicevic/projects/stolarija-mika/public/images/gallery/test-enhanced.png';

async function main() {
  console.log('Testing OpenAI image edit on kitchen photo...');

  try {
    const file = await toFile(fs.createReadStream(testImage), 'kitchen.png', { type: 'image/png' });

    const response = await openai.images.edit({
      model: 'gpt-image-1',
      image: file,
      prompt: 'Remove all clutter from this kitchen photo: remove the backpack on the counter, the green bottle, the cardboard box with items on the floor in front of the island, and any other mess or construction debris. Make the kitchen counters completely clean and empty. Keep the kitchen cabinets, appliances, island, and lighting exactly as they are. The result should look like a clean, professional real estate or portfolio photograph.',
      size: '1024x1024',
    });

    if (response.data[0]?.b64_json) {
      const data = Buffer.from(response.data[0].b64_json, 'base64');
      fs.writeFileSync(outputPath, data);
      console.log(`✅ Saved (${(data.length / 1024).toFixed(0)}KB)`);
    } else if (response.data[0]?.url) {
      const res = await fetch(response.data[0].url);
      const data = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(outputPath, data);
      console.log(`✅ Saved from URL (${(data.length / 1024).toFixed(0)}KB)`);
    } else {
      console.log('No image in response:', JSON.stringify(response.data, null, 2));
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
