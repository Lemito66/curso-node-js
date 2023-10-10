const fs = require("node:fs/promises");

fs.readFile("./archivo.txt", "utf-8")
  .then((data) => {
    console.log("Primer texto", data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Hacer cosas mientras lee el archivo");

fs.readFile("./archivo2.txt", "utf-8")
  .then((data) => {
    console.log("Segundo texto", data);
  })
  .catch((err) => {
    console.log(err);
  });
