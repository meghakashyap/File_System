var fs = require("fs");
var buf = new Buffer(1024);
  


fs.writeFile("input.txt",'Today I am learning FS :)',(err)=> {
    console.log("File is created");
console.log(err);

});
console.log("opening an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("reading the file");
     
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
        
      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});
// read and const fs = require('fs').promises;

async function moveFile(source, destination) {
   try {
     await fs.rename(source, destination);
     console.log(`Moved file from ${source} to ${destination}`);
   } catch (error) {
     console.error(`Got an error trying to move the file: ${error.message}`);
   }
 }
 
 moveFile('greetings-2.txt', 'test-data/salutations.txt');
 
 // read and write