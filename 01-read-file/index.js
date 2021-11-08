const fs = require('fs');

const dirFile = __dirname +'\\'+'text.txt';

const readStream = fs.createReadStream(dirFile);

readStream.on('data', function(chunk) {
  console.log(chunk.toString());
});