// <!-- READLINE MODULE DAN MASUKKAN KE FILE JSON-->
// readline module => digunakan untuk membaca apa yg kita tuliskan nanti di command propmpt-nya (terminal)
const readline = require("readline");

const fs = require("fs");


// buat interface-nya dulu
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// buat perintah masukkan nama dan nomor hp
rl.question("Nama:", (nama) => {
    // membuat nested question
    rl.question("Bagian:", (bagian) => {
        const pegawai = {
            // karena key dari Object dan argumen sama, maka bisa dipersingkat, tidak perlu menggunakan "nama = nama"
            nama,
            bagian,
        };

        // baca file yg ada pd file contacts.json
        const file = fs.readFileSync("wpu/subfolder/pegawai.json", "utf8");

        // parsing file yg di read untuk dapat digunakan oleh javascript (JSON)
        const dataPeg = JSON.parse(file);

        // push ke dalam contacts yg telah diparsing ke json
        dataPeg.push(pegawai);

        // masukkan ke dalam file json.tp jangan lupa dijadikan string dulu. null dan 2 untuk memberikan 2 baris ke file json sehingga mudah dibaca
        fs.writeFileSync("wpu/subfolder/pegawai.json", JSON.stringify(dataPeg, null, 2));

        console.log("Terimakasih sudah mengisi");
        // rl.close agar keluar dari terminalnya
        rl.close();
    });
});