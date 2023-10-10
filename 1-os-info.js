const os = require('node:os'); // nombre del modulo nativo de antes

console.log(os.platform());
console.log(os.release());
console.log('Free memory: ', os.freemem(), 'bytes');
console.log('Total memory: ', os.totalmem(), 'bytes');