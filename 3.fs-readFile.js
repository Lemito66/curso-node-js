const fs = require("node:fs");

fs.readFile("./archivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log('Primer texto',data);
});

console.log("Hacer cosas mientras lee el archivo");

fs.readFile("./archivo2.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log('Segundo texto', data);
});

