import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\components\\tamayo\\TamayoArchitecture.tsx';
let c = fs.readFileSync(f, 'utf8');
const lines = c.split('\n');
for(let i=20; i<125; i++) {
  if (lines[i].includes('prose') || lines[i].trim() === '</div>' || lines[i].includes('space-y-10') || lines[i].includes('max-w-7xl')) {
    console.log(i+1, JSON.stringify(lines[i]));
  }
}