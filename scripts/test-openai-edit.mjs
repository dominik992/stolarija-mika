import OpenAI, { toFile } from 'openai';
import fs from 'fs';
import { execSync } from 'child_process';
import { config } from 'dotenv';
config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const INPUT = 'public/images/gallery/mika-14.jpg';
const RESIZED = '/tmp/openai-input.png';
const OUTPUT = '/tmp/openai-result.png';

// Resize to max 1024px and convert to PNG (OpenAI requirement)
console.log('Resizing image...');
execSync(`sips -Z 1024 -s format png "${INPUT}" --out "${RESIZED}" 2>/dev/null`);
console.log('Resized:', (fs.statSync(RESIZED).size / 1024).toFixed(0), 'KB');

async function main() {
  console.log('Sending to OpenAI gpt-image-1...');

  const file = await toFile(fs.createReadStream(RESIZED), 'photo.png', { type: 'image/png' });

  const response = await openai.images.edit({
    model: 'gpt-image-1',
    image: file,
    prompt: 'Clean up this interior photo for a professional carpentry portfolio. Remove the trash bin, dog bowl, and any clutter from the floor. Keep the wooden shelf, the decorative wooden wall frame/arch with LED lighting, the clock, and doors exactly as they are. Make the space look clean and tidy like a professional interior design photograph. Improve lighting balance and color warmth.',
    size: '1024x1024',
  });

  if (response.data[0]?.b64_json) {
    const data = Buffer.from(response.data[0].b64_json, 'base64');
    fs.writeFileSync(OUTPUT, data);
    console.log(`✅ Saved: ${OUTPUT} (${(data.length / 1024).toFixed(0)}KB)`);
  } else if (response.data[0]?.url) {
    const res = await fetch(response.data[0].url);
    const data = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(OUTPUT, data);
    console.log(`✅ Saved from URL: ${OUTPUT} (${(data.length / 1024).toFixed(0)}KB)`);
  } else {
    console.log('No image returned');
  }
}

main().catch(e => console.error('Error:', e.message));
