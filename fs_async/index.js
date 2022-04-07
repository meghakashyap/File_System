let fs = require('fs')

fs.readFile('readme.md',(err,data)=>{
    if (err){
        console.log(err)
    }
    console.log(data.toString())
})

// creating file in async way