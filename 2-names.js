// ini tidak akan saya share (local)
const secret = "super secret";

// ini variabel yg akan di-share (global)
const wapek = "wapek";
const joko = "joko";
const wahyu = "wahyu";

const cobaObjek = {
    nama: "wapek",
    bagian: "umum",
    jabatan: "staf",
    greet() {
        return `halo, nama saya ${this.nama}, bekerja pada bagian ${this.bagian} sebagai ${this.jabatan}`;
    }
}

// export
module.exports = {
    joko,
    wahyu,
    wapek
};

//export cobaObjek yg berisi objek
module.exports.cobaObjek = cobaObjek;