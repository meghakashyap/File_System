// async wriitng
const fs =require('fs');
fs.writeFile("data.txt","Hey Its me Megha Kashyap\n I  am from delhi",(err)=>{
    if (err){
        console.log(err)
    }
    console.log("Writing Successfully")

});

// opening reading
console.log("Opening  file")
fs.open("data.txt","r+",(err,data)=>{
    if (err){
        console.log(err);
    }
    console.log("file open successfully");
})

// appending in file
console.log("appending in file");
fs.appendFile("data.txt","\nI am graduated","UTF-8",(err)=>{
    if (err){
        console.log(err)
    }
    console.log("Append successfully")
})

// closing the file
// fd = fs.open("data.txt")
// fs.close(fd,(err)=>{
//     if (err){
//         console.log(err)
//     }
//     console.log("file close properly")
// });




  
// delete file
fs.unlink("data.txt",(err)=>{
    if (err){
        console.log(err)
    }
    console.log("Delete Successfully")
})