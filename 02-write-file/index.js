const fs = require('fs');
const path = require('path');
const file = fs.createWriteStream(path.join(__dirname, 'file.txt'));
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

output.write('Hello! Please, write your text: \n');

rl.on('line', (line) => {
  (line.trim() === 'exit') ? rl.close() : file.write(line + '\n');
});

rl.on('close', () => output.write('\nGood luck!'));