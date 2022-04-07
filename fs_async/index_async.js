const fs = require('fs');

fs.writeFile("demo.txt",'Today I am learning FS :)',(err)=> {
    console.log("File is created");
console.log(err);
});

// append 

fs.appendFile("demo.txt","Its checking ",(err)=> {
    console.log("Task complete");
});

// read file data
fs.readFile("demo.txt",'UTF-8',(err,data)=>{
    console.log(data)
});

// used UTF-8 for not getting buffer data (its convert buffer data into string)

