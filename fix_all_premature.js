import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');

// Fix all premature ]; that close the researchTopics array early
// Pattern: topic object closes (  }\r\n), then ];\r\n, then next topic starts (  {\r\n)
// Should be: topic object closes, array element closes (},\r\n), next topic starts

// Fix line 214 area
c = c.replace(/\n  }\r\n\];\r\n\r\n  \{/g, '\n  }\r\n},\r\n\r\n  {');

// Fix line 251 area  
c = c.replace(/\n  }\r\n\];\r\n\r\n  \{/g, '\n  }\r\n},\r\n\r\n  {');

// Fix line 288 area
c = c.replace(/\n  }\r\n\];\r\n\r\n  \{/g, '\n  }\r\n},\r\n\r\n  {');

// Also fix any remaining double ];
c = c.replace(/\];\r\n\];/g, '];');

fs.writeFileSync(f, c);
console.log('Fixed all premature array closures');