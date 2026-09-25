import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');
// Find the SECOND futureQuestions
const first = c.indexOf('futureQuestions: [');
const second = c.indexOf('futureQuestions: [', first + 1);
if (second >= 0) {
  console.log('Second futureQuestions at index:', second);
  console.log('Context:', JSON.stringify(c.substring(second, second+400)));
}