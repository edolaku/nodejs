
// path module menyediakan jalan untuk bekerja dengan direktori dan jalur file
// path.sep => returns the segment separator specified for the platform
const path = require("path");
console.log(path.sep);

const filePath = path.join("/wpu/", "subfolder", "text.txt")
console.log(filePath);

//  method returns the last portion of a path
const base = path.basename(filePath);
console.log(base);

// mengetahui lokasi file secara lengkap
const absolute = path.resolve(__dirname, "wpu", "subfolder", "test.txt");
console.log(absolute);

const absolute2 = path.resolve(__filename, "wpu", "subfolder", "test.txt");
console.log(absolute2);