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
    
    // Grammatical fixes
    content = content.replace(/un canalisation/g, 'une canalisation');
    content = content.replace(/Un canalisation/g, 'Une canalisation');
    content = content.replace(/le canalisation/g, 'la canalisation');
    content = content.replace(/Le canalisation/g, 'La canalisation');
    content = content.replace(/du canalisation/g, 'de la canalisation');
    content = content.replace(/Du canalisation/g, 'De la canalisation');
    content = content.replace(/au canalisation/g, 'à la canalisation');
    content = content.replace(/Au canalisation/g, 'À la canalisation');

    if(original !== content) {
        fs.writeFileSync(file, content, 'utf8');
        count++;
        console.log('Updated: ' + file);
    }
});

console.log(`Replaced text in ${count} files.`);
