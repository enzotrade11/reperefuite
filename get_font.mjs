import fs from 'fs';
const html = fs.readFileSync('scratch.html', 'utf8');

const googleFonts = html.match(/fonts\.googleapis\.com[^"'>]+/g);
console.log("Google Fonts:", googleFonts);

const cssLinks = html.match(/href="([^"]+\.css[^"]*)"/g);
console.log("CSS Links:", cssLinks);

const fontFamilies = html.match(/font-family:[^;}]+/g);
console.log("Inline Font Families:", fontFamilies);
