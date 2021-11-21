// menyambung dengan file 6-app.js


const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const dirPath = "./data";
// membuat folder data. jika dirPath tidak exist, maka buat directory pada dirPath
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const filePath = "./data/contacts.json"
// membuat file json. jika contacts.json didalam folder data blm dibuat, maka buat file contacts.json
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf8");
}


// membuat rl.question menggunakan asynchronous
const tulisPertanyaan = (pertanyaan) => {
    // inisiasi promise untuk fungsi tulisPertanyaan
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (value) => {
            resolve(value);
        });
    });
};

const simpanKontak = (nama, email, noHP) => {
    const contact = { nama, email, noHP };
    const fileBuffer = fs.readFileSync(filePath, "utf8");
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
    console.log("Terimakasih sudah mengisi");

    rl.close();
};

// export fungsi simpanKontak dan tulisPertanyaan ke app.js, karena pd objek, key dan valuenya sama jadi tulis satu saja
module.exports = { tulisPertanyaan, simpanKontak };