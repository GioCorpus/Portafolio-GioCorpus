import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\components\\tamayo\\TamayoArchitecture.tsx';
let c = fs.readFileSync(f, 'utf8');
// Fix missing closing divs for prose sections
// Each prose section should close before the next one starts
c = c.replace(
  '            </div>\n          </div>\n        </div>\n      </section>',
  '            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </section>'
);
// Also fix the missing closing divs between prose sections
c = c.replace(/<\/pre>\n          <\/div>\n<div className="prose prose-invert max-w-none">/g, '</pre>\n          </div>\n        </div>\n        <div className="prose prose-invert max-w-none">');
c = c.replace(/<\/table>\n          <\/div>\n<div className="prose prose-invert max-w-none">/g, '</table>\n          </div>\n        </div>\n        <div className="prose prose-invert max-w-none">');
c = c.replace(/<\/pre>\n          <\/div>\n<div className="prose prose-invert max-w-none">/g, '</pre>\n          </div>\n        </div>\n        <div className="prose prose-invert max-w-none">');
c = c.replace(/<\/ul>\n          <\/div>\n<div className="prose prose-invert max-w-none">/g, '</ul>\n          </div>\n        </div>\n        <div className="prose prose-invert max-w-none">');
fs.writeFileSync(f, c);
console.log('Fixed TamayoArchitecture closing tags');