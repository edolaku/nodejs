// kita sudah menginstal package validator pada folder ini
// validator => package untuk memvalidasi/mensanitasi sebuah string yg kita kirimkan

// panggil package validator
const validator = require("validator");

// contoh penggunaan validator, dia bisa mengecek apakah string yg dimasukkan email atau bukan, jika email akan bernilai true, dan false jika sebaliknya
console.log(validator.isEmail("edolaku@gmail.com"));