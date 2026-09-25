import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\pages\\ResearchPage.tsx';
let c = fs.readFileSync(f, 'utf8');
// Fix the outer div closing indentation - match exact whitespace
c = c.replace(/<\/section>\n        <\/div>\n      <\/div>\n    \);/g, '</section>\n    </div>\n  );');
fs.writeFileSync(f, c);
console.log('Done');