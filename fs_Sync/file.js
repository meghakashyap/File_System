
//  wriitng
const fs =require('fs');
console.log("writing file");
fs.writeFileSync("data.txt","Its Demo file")


// opening 
console.log("opening file");
fs.openSync("data.txt","r+")


// appending in file
console.log("appending in file");
fs.appendFileSync("data.txt","\nI am graduated","UTF-8")
console.log("append Successfully");


// rename the file
fs.renameSync("data.txt","demo.txt")
console.log("Rename successfully")




  
