const fs = require("fs");
// console.log(fs)

// write the file
fs.appendFileSync("read.txt","Hey Its node Fs\n")
fs.appendFileSync("read.txt","I am Megha")

// read the file
const read = fs.readFileSync('read.txt');
console.log(read.toString());

// rename the file
fs.renameSync("read.txt","read_write.txt");