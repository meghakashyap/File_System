const fs = require('fs');
const fd = fs.open('input.txt');
fs.close(fd, function(err) {
    if (err)
      console.error('Failed to close file', err);
    else {
      console.log("\n> File Closed successfully");
    }
  });
