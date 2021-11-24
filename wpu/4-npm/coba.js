const fs = require("fs");
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

const hapusKontak = (nama) => {
    const ambilKontak = () => {
        const fileBuffer = fs.readFileSync(filePath, "utf8");
        const contacts = JSON.parse(fileBuffer);
        return contacts;
    }

    const contacts = ambilKontak()
    // console.log(contacts[0]);
    const contact = contacts.find((contact) =>
        contact.nama.toLowerCase() === nama.toLowerCase()
    );

    if (!contact) {
        console.log(`${nama} tidak ditemukan`);
        return false;
    }

    const index = contacts.indexOf(contact);
    // if (index >= 0) {
    contacts.splice(index, 1);
    // }
    // console.log(contacts.splice.call(contact, 1));
    console.log(contacts);
    console.log(contact);
    // console.log(contacts.nama);



    // const array = [2, 5, 9];

    // console.log(array);

    // const index = array.indexOf(9);
    // if (index > -1) {
    //     array.splice(index, 1);
    // }

    // // array = [2, 9]
    // // console.log(array);
    // console.log(index);
};
hapusKontak("laka")
