import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');

// Fix pattern: }\r\n];\r\n},\r\n  { -> }\r\n},\r\n  {
c = c.replace(/\n  }\r\n\];\r\n\},/g, '\n  }\r\n},\r\n');

// Also fix any remaining double ];
c = c.replace(/\];\r\n\];/g, '];');

fs.writeFileSync(f, c);
console.log('Fixed premature array closures v2');