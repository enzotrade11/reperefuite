import fs from 'fs';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if(file === 'node_modules' || file === '.next' || file === '.git' || file === 'public') return;
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.mjs') || file.endsWith('.json')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Links & URLs
    content = content.replace(/\/recherche-fuite-reseau-enterre/g, '/recherche-fuite-canalisation-enterree');
    content = content.replace(/recherche-fuite-reseau-enterre/g, 'recherche-fuite-canalisation-enterree');
    content = content.replace(/reseau-enterre/g, 'canalisation-enterree');
    
    // Text: Singular Upper
    content = content.replace(/Réseau enterré/g, 'Canalisation enterrée');
    content = content.replace(/Réseau Enterré/g, 'Canalisation Enterrée');
    
    // Text: Singular Lower
    content = content.replace(/réseau enterré/g, 'canalisation enterrée');
    content = content.replace(/Réseau enterre/g, 'Canalisation enterree');
    
    // Text: Plural Upper
    content = content.replace(/Réseaux enterrés/g, 'Canalisations enterrées');
    content = content.replace(/Réseaux Enterrés/g, 'Canalisations Enterrées');
    
    // Text: Plural Lower
    content = content.replace(/réseaux enterrés/g, 'canalisations enterrées');
    content = content.replace(/reseaux enterres/g, 'canalisations enterrees');
    
    // Component Names / IDs if any
    content = content.replace(/ReseauEnterrePage/g, 'CanalisationEnterreePage');

    if(original !== content) {
        fs.writeFileSync(file, content, 'utf8');
        count++;
        console.log('Updated: ' + file);
    }
});

console.log(`Replaced text in ${count} files.`);
