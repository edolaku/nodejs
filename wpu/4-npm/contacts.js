const fs = require("fs");
const dirPath = "./data";
const validator = require("validator");

// membuat folder data. jika dirPath tidak exist, maka buat directory pada dirPath
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const filePath = "./data/contacts.json"
// membuat file json. jika contacts.json didalam folder data blm dibuat, maka buat file contacts.json
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf8");
}


const ambilKontak = () => {
    const fileBuffer = fs.readFileSync(filePath, "utf8");
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}

const simpanKontak = (nama, email, noHP) => {
    const contact = { nama, email, noHP };

    // const fileBuffer = fs.readFileSync(filePath, "utf8"); // karena variabel ini sering digunakan, maka kita keluarkan dari scope, jadikan global
    // const contacts = JSON.parse(fileBuffer);

    const contacts = ambilKontak();

    // cari duplikat pd contacts.json, jika nama yg diinput sudah pernah diinput, maka hasil dari const duplikat adalah true, dan jika tidak ada, hasilnya adalah undefined
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log("Nama sudah terdaftar!");
        // jika const duplikat true, maka fungsi hanya sampai sini, perintah di bawahnya tidak akan dijalankan
        return false;
    }

    // jika email dimasukkan, maka cek apakah email yg dimasukkan valid atau tidak
    if (contact.email) {
        if (!validator.isEmail(contact.email)) {
            console.log("Email tidak valid!");
            // jika !validator.isEmail = true, maka fungsi hanya sampai sini, perintah di bawahnya tidak akan dijalankan
            return false;
        };
    };

    if (!validator.isMobilePhone(contact.noHP, "id-ID")) {
        console.log("Nomor handphone tidak valid!");
        // jika !validator.isMobilePhone = true, maka fungsi hanya sampai sini, perintah di bawahnya tidak akan dijalankan
        return false;
    }

    contacts.push(contact);
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
    console.log("Terimakasih sudah mengisi");

};

const daftarKontak = () => {
    const contacts = ambilKontak();
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    });
};

const detailKontak = (nama) => {
    const contacts = ambilKontak();

    const contact = contacts.find((contact) => { contact.nama === nama });

    if (!contact) {
        console.log(`${nama} tidak ditemukan`);
    }

}

// export fungsi simpanKontak dan tulisPertanyaan ke app.js, karena pd objek, key dan valuenya sama jadi tulis satu saja
module.exports = { simpanKontak, daftarKontak, detailKontak };