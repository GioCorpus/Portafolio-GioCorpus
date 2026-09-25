import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');
// Find the area around the fix
const idx = c.indexOf('  }\r\n},\r\n\r\n  {');
if (idx >= 0) {
  console.log('Found at index:', idx);
  console.log('Context:', JSON.stringify(c.substring(idx-50, idx+100)));
} else {
  console.log('Pattern not found');
  // Try without \r
  const idx2 = c.indexOf('  }\n},\n\n  {');
  if (idx2 >= 0) {
    console.log('Found at index (no \\r):', idx2);
    console.log('Context:', JSON.stringify(c.substring(idx2-50, idx2+100)));
  }
}