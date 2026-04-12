const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = './public/images';
const outputDir = './public/images-optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
function getAllImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip 'replaced images' directory
      if (!file.includes('replaced')) {
        getAllImageFiles(filePath, fileList);
      }
    } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

async function optimizeImage(inputPath) {
  const relativePath = path.relative(imagesDir, inputPath);
  const outputPath = path.join(outputDir, relativePath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp'));
  const outputDirPath = path.dirname(outputPath);

  // Create subdirectories if needed
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }

  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${relativePath} → ${path.basename(outputPath)} (${savings}% smaller)`);
  } catch (error) {
    console.error(`✗ Error processing ${relativePath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  const imageFiles = getAllImageFiles(imagesDir);
  console.log(`Found ${imageFiles.length} images to optimize\n`);

  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath);
  }

  console.log('\n✅ Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${outputDir}`);
}

main().catch(console.error);
