var fs = require("fs");
  
console.log("writing into existing file");
fs.writeFile('user.txt', 'Geeks For Geeks', function(err) {
   if (err) {
      return console.error(err);
   }
     
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
     
   fs.readFile('user.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});

// writing and reading in async way