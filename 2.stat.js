const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

// fs.writeFile(file, data[, options], callback)
console.log('Inicio', new Date().toLocaleString());

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
);