import { GoogleGenAI, Modality } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: 'AIzaSyBLYzELKAPCYgvmQhHPfk63_3mz5SZD0l0' });

async function main() {
  console.log('Generating OG image...');
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: 'Create a professional Open Graph social media banner image (1200x630 ratio, landscape). The image should feature a warm woodworking workshop scene with beautiful wooden furniture. Overlay text should read "STOLARIJA MIKA" in large elegant serif font, with subtitle "Stolarski obrt s 25 godina iskustva" below in smaller text. Use warm brown and golden tones. The overall feel should be professional, warm, and artisanal. The text should be clearly readable on the image.',
    config: {
      responseModalities: [Modality.IMAGE, Modality.TEXT],
    },
  });

  const parts = response.candidates?.[0]?.content?.parts || [];
  for (const part of parts) {
    if (part.inlineData) {
      const data = Buffer.from(part.inlineData.data, 'base64');
      fs.writeFileSync('public/og-image.png', data);
      console.log(`Saved og-image.png (${(data.length / 1024).toFixed(0)}KB)`);
      return;
    }
  }
  console.log('No image data returned');
}

main().catch(console.error);
