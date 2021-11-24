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


const ambilKontak = () => {
    const fileBuffer = fs.readFileSync(filePath, "utf8");
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}

const contacts = ambilKontak()
// console.log(contacts[0]);
const contact = contacts.find((contact) =>
    contact.nama.toLowerCase() !== "nurul".toLowerCase()
);
contacts.splice(contact, 1);
// console.log(contact);
console.log(contacts);