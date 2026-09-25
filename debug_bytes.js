import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');
// Find the problematic area
const idx = c.indexOf('    ],\r\n    }\r\n  },');
if (idx >= 0) {
  console.log('Found at index:', idx);
  console.log('Context:', JSON.stringify(c.substring(idx-50, idx+50)));
} else {
  console.log('Pattern not found, trying without \\r');
  const idx2 = c.indexOf('    ],\n    }\n  },');
  if (idx2 >= 0) {
    console.log('Found at index:', idx2);
    console.log('Context:', JSON.stringify(c.substring(idx2-50, idx2+50)));
  }
}