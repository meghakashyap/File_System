var fs = require('fs');
   
var data = "\nLearn Node.js";
   
// Append data to file
fs.appendFile('input.txt', data, 'utf8',
  
    // Callback function
    function(err) { 
        if (err) throw err;
  
        //  If no error
        console.log("Data is appended to file successfully.")
});