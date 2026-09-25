import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');
// Fix the premature array closure - remove the extra ];
// The pattern is: \n  }\r\n];\r\n];\r\n}, -> should be \n  }\r\n},\r\n
c = c.replace(/\n  }\r\n\];\r\n\];\r\n\},/, '\n  }\r\n},\r\n');
fs.writeFileSync(f, c);
console.log('Fixed premature array closure');