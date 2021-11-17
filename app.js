// The fs (file system) module provides a lot of very useful functionality to access and interact with the file system
// salah satu penggunaan fs module:
// untuk readFileSync berguna untuk melihat isi dari argument yg dimasukkan
const fs = require("fs")
console.log(fs.readFileSync("./wpu/first.txt", "utf8"));
console.log(fs.readFileSync("./wpu/second.txt", "utf8"));

// atau dapat menggunakan destructuring assignment
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./wpu/first.txt", "utf8");
const second = readFileSync("./wpu/second.txt", "utf8");
console.log(first, second);

// untuk writeFileSync berguna untuk membuat file pada folder yg dituju, jika file tersebut sudah ada, maka module ini akan meng-overwrite isi dari file tsb
writeFileSync("./wpu/result-sync.txt", `ini adalah hasil dari writeFileSync. dapat digabung dengan file first.txt yaitu: "${first}" dan file dari second.txt yaitu "${second}"`)