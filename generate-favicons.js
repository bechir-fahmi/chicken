const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512
};

async function generateFavicons() {
  const inputSvg = path.join(__dirname, 'src/assets/icons/favicon.svg');
  const outputDir = path.join(__dirname, 'src/assets/icons');

  try {
    await fs.mkdir(outputDir, { recursive: true });

    for (const [filename, size] of Object.entries(sizes)) {
      await sharp(inputSvg)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, filename));
      
      console.log(`Generated ${filename}`);
    }

    // Generate ICO file
    await sharp(inputSvg)
      .resize(32, 32)
      .toFormat('ico')
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    console.log('Generated favicon.ico');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 