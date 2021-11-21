// mengambil function yg telah diexport dari contacts.js. ini jg dapat menggunakan metode object distructuring
const contacts = require("./contacts.js");

// ini adalah main function-nya ketika pertanyaan telah dijawab, maka jalankan kode dibawahnya
const main = async () => {
    // masukkan argument pada fungsi tulisPertanyaan
    // karena contacs termasuk fungsi dalam objek, maka harus menggunakan contacts.tulisPertanyaan()
    const nama = await contacts.tulisPertanyaan("Masukkan nama anda: ");
    const email = await contacts.tulisPertanyaan("Masukkan email anda: ");

    contacts.simpanKontak(nama, email);
};



main();