import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\components\\tamayo\\TamayoScene.tsx';
let c = fs.readFileSync(f, 'utf8');

// Fix TypeScript generics in code tags - escape < and >
c = c.replace(/<code>std::shared_ptr<Layer><\/code>/g, '<code>std::shared_ptr<Layer></code>');
c = c.replace(/<code>std::vector<std::shared_ptr<Layer>><\/code>/g, '<code>std::vector<std::shared_ptr<Layer>></code>');
c = c.replace(/<code>Layer<\/code>/g, '<code>Layer</code>'); // This might not be needed

// Fix generics in template literals - these are in JS expressions so they're OK as strings
// But the parser might still choke on them. Let's escape them in the template literals too.
c = c.replace(/std::shared_ptr<Layer>/g, 'std::shared_ptr<Layer>');
c = c.replace(/std::vector<std::shared_ptr<Layer>>/g, 'std::vector<std::shared_ptr<Layer>>');

// Fix missing indentation for line 94
c = c.replace('\n<div className="prose prose-invert max-w-none">\n            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Playback Control</h3>', '\n        <div className="prose prose-invert max-w-none">\n            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Playback Control</h3>');

// Fix missing closing divs at the end
c = c.replace(
  '          </div>\n      </div>\n    </section>',
  '          </div>\n        </div>\n      </div>\n    </section>'
);

fs.writeFileSync(f, c);
console.log('Fixed TamayoScene');