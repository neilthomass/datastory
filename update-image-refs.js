const fs = require('fs');
const path = require('path');

const srcDir = './src';

function updateImageReferences(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      updateImageReferences(filePath);
    } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Replace image extensions with .webp
      const replacements = [
        [/\/images\/([^"'\s]+)\.(jpg|jpeg|png|gif)/gi, (match, name, ext) => {
          modified = true;
          return `/images/${name}.webp`;
        }]
      ];

      replacements.forEach(([pattern, replacement]) => {
        content = content.replace(pattern, replacement);
      });

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Updated: ${filePath}`);
      }
    }
  });
}

console.log('📝 Updating image references to WebP...\n');
updateImageReferences(srcDir);
console.log('\n✅ Image references updated!');
