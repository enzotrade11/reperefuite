import fs from 'fs';
import path from 'path';
import https from 'https';

const baseUrl = 'https://www.serrurier-urgence-centre.fr';
const outDir = path.join(process.cwd(), 'public', 'images', 'assurances');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const images = [
  'maif.png', 'macif.png', 'axa.png', 'allianz.png', 
  'groupama.png', 'gmf.png', 'maaf.png', 'matmut.png', 
  'mma.jpg', 'generali.png', 'credit-agricole.png', 
  'direct-assurance.png', 'covea.png'
];

async function downloadImage(filename) {
  const url = `${baseUrl}/assurances/${filename}`;
  const outPath = path.join(outDir, filename);
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to get ${filename}: ${res.statusCode}`);
        res.resume();
        return resolve();
      }
      const writeStream = fs.createWriteStream(outPath);
      res.pipe(writeStream);
      writeStream.on('finish', () => {
        writeStream.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${filename}: ${err.message}`);
      fs.unlink(outPath, () => resolve());
    });
  });
}

async function main() {
  for (const img of images) {
    await downloadImage(img);
  }
  console.log('All downloads finished');
}

main();
