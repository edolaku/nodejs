const {
    command,
    describe,
    demand,
    demandOption
} = require("yargs");
const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
        // masukkan perintah
        command: "tambah",
        // deskripsi dari perintah
        describe: "Menambahkan kontak baru",
        //masukkan buildernya. isinya adalah objek, dimana kita menuliskan item2 yg kita butuhkan, terdapat option2nya
        builder: {
            nama: {
                describe: "Nama lengkap",
                // apakah ini wajib diisi? jika ya, masukkan true. jika tidak, masukkan false
                demandOption: true,
                type: "string",
            },
            email: {
                describe: "Alamat email",
                // apakah ini wajib diisi? jika ya, masukkan true. jika tidak, masukkan false
                demandOption: false,
                type: "string",
            },
            noHP: {
                describe: "Nomor handphone",
                // apakah ini wajib diisi? jika ya, masukkan true. jika tidak, masukkan false
                demandOption: true,
                type: "string",
            }
        },
        // handler => bentuknya function, akan menerima argumen, sehingga kita dapat menerima argumen
        handler: (argv) => {
            contacts.simpanKontak(argv.nama, argv.email, argv.noHP)
        },
    })
    // agar ketika masukkan node app pada terminal, ada fungsi yg dijalankan
    .demandCommand();

// menampilkan list kontak
yargs.command({
    // masukkan perintah
    command: "list",
    // deskripsi dari perintah
    describe: "Menampilkan kontak yg sudah terdaftar",
    // builder: {
    //     nama: {
    //         describe: "Nama lengkap",
    //         // apakah ini wajib diisi? jika ya, masukkan true. jika tidak, masukkan false
    //         demandOption: true,
    //         type: "string",
    //     },
    // },
    // handler => bentuknya function
    handler() {
        contacts.daftarKontak();
    },
})

// menampilkan list kontak
yargs.command({
    // masukkan perintah
    command: "detail",
    // deskripsi dari perintah
    describe: "Menampilkan detail kontak",
    // handler => bentuknya function, 
    handler(argv) {
        contacts.detailKontak(argv.nama);
    },
})

// menghapus kontak berdasarkan nama
yargs.command({
    // masukkan perintah
    command: "hapus",
    // deskripsi dari perintah
    describe: "menghapus kontak berdasarkan nama",
    // handler => bentuknya function, 
    handler(argv) {
        contacts.hapusKontak(argv.nama);
    },
})

yargs.parse();

// pada terminal dapat isikan node app --help untuk mengetahui fungsi apa saja yg tersedia