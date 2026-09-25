import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');
// Find line 130 area
const lines = c.split('\r\n');
for(let i=125; i<135; i++) {
  console.log(i, JSON.stringify(lines[i]));
}