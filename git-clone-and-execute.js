const command = process.argv[2];

// start or config command
switch (command) {
  case 'start':
        const main = require('./main.js');
    break;
  case 'config':
        const config = require('./config.js');
    break;
  default:
    console.log('\x1b[31m', 'Please run "git-clone-and-execute start" or "git-clone-and-execute config"', '\x1b[0m');
    console.log("\x1b[34m", 'https://github.com/etahn-git/git-clone-and-execute', '\x1b[0m')
}