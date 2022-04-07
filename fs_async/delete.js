var fs = require("fs");
  
console.log("deleting an existing file");
fs.unlink('demo.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});