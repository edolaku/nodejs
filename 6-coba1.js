const cobaObjek = {
    nama: "wapek",
    bagian: "umum",
    jabatan: "staf",
    greet() {
        return `halo, nama saya ${this.nama}, bekerja pada bagian ${this.bagian} sebagai ${this.jabatan}`;
    },
}

// module.exports.cobaObjek = cobaObjek;
console.log(cobaObjek.greet());