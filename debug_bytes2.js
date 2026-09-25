import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');
// Find the problematic area - look for futureQuestions closing
const idx = c.indexOf('futureQuestions: [');
if (idx >= 0) {
  console.log('futureQuestions at index:', idx);
  console.log('Context:', JSON.stringify(c.substring(idx, idx+300)));
}