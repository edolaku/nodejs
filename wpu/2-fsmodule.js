// menuliskan file ke folder
const fs = require("fs");

// untuk menulis file secara synchronous, dapat menggunakan writeFileSync seperti yg sudah dipelajari pada file 10-fsmodule.js diluar folder. dengan perintahnya dapat menggunakan contoh berikut:
// fs.writeFileSync("test.txt", "ini adalah isi dari contoh penggunaan writeFileSync"); untuk perintah ini akan membuatkan file test.txt pada folder yg sama pd file ini jika file-nya belum dibuat, namun jika file sudah dibuat maka isi dari file tersebut akan di-overwrite

// untuk menampilkan error, perintah writeFileSync secara synchronous seperti diatas dapat dilakukan dengan menggunakan try and catch seperti contoh berikut:
// try {
//     fs.writeFileSync("data/test.txt", "ini adalah isi dari contoh penggunaan writeFileSync");
// } catch (error) {
//     console.log(error);
// } untuk kode ini akan error karena folder data belum dibuat dan catch akan menangkap error-nya

// ini adalaha writeFile dengan menggunakan asynchronous, jadi kode ini non-blocking, dapat berjalan sembari melanjutkan kode dibawahnya
fs.writeFile("data/test.txt", "Hello World! isi dari writeFile secara asynchronous", (error) => {
    console.log(error);
});

// sama saja dengan writeFile, untuk readFile juga terdapat synchronous dan asynchronous