import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { JSDOM } from 'jsdom';
import { join } from 'path';

const logosDir = './public/logos';

// Get all SVG files
const svgFiles = readdirSync(logosDir).filter(f => f.endsWith('.svg'));

for (const file of svgFiles) {
  const filePath = join(logosDir, file);
  const content = readFileSync(filePath, 'utf8');
  
  const dom = new JSDOM(content, { contentType: 'image/svg+xml' });
  const svg = dom.window.document.querySelector('svg');
  
  if (!svg) continue;
  
  // Get all path elements and calculate bounds
  const paths = svg.querySelectorAll('path, rect, circle, ellipse, polygon, polyline, line');
  
  if (paths.length === 0) continue;
  
  console.log(`Processing ${file}...`);
  
  // Parse existing viewBox
  const viewBox = svg.getAttribute('viewBox');
  if (viewBox) {
    const [vx, vy, vw, vh] = viewBox.split(/\s+/).map(Number);
    console.log(`  Current viewBox: ${vx} ${vy} ${vw} ${vh}`);
  }
}
