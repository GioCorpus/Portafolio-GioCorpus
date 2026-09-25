import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');
const lines = c.split('\r\n');
for(let i=95; i<130; i++) {
  console.log(i, JSON.stringify(lines[i]));
}