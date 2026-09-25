import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\pages\\ResearchPage.tsx';
let c = fs.readFileSync(f, 'utf8');
// Add missing closing div for grid in repositories section
c = c.replace(
  '            </div>\n        </div>\n      </section>',
  '            </div>\n          </div>\n        </div>\n      </section>'
);
fs.writeFileSync(f, c);
console.log('Fixed missing grid div close');