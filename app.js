// import dari names. untuk require selalu diawali dg ./ untuk local module
const names = require("./2-names");

// import dari names. untuk require selalu diawali dg ./ untuk local module
const sayHi = require("./3-util.js");

const data = require("./4-altexp");

// pada file ./5-funcexp.js tidak menggunakan esport, mari kita cari tau kenapa
require("./5-funcexp");


// memasukkan nama ke dalam function sayHi. karena names adalah objek yg diambil dari file names.js, maka cara memanggilnya sama seperti memanggil objek
sayHi(names.wapek);
sayHi(names.joko);
sayHi(names.wahyu);
console.log(data);