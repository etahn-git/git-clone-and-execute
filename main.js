// import dependencies
const path = require('path');
var github = require('git-clone');
const lignator = require('lignator');
const fs = require('fs');
const subProcess = require('child_process');
const process = require('process');
const start = require("./start.js");
// read config file
const data = fs.readFileSync('config.json');
const config = JSON.parse(data);
const CTRBSC = config.CommandsToRunBeforeStartCommand;

console.clear(); // clears console
console.log("\x1b[35m", '========================= Gitclone and execute =========================', '\x1b[0m');

lignator.remove('src', false); // removes directory if it exists
const targetPath = path.resolve(__dirname, './src'); // sets the directory to ./src
github(config.GithubRepo, targetPath); // clones the repository to ./src
console.log("\x1b[32m", 'Cloned repository!', '\x1b[0m')


if(CTRBSC.length==0){ // checks if should run the commandToRunBeforeStarting function
    console.log("\x1b[36m", "Skipping commands to run before starting", '\x1b[0m');
} else {
    commandToRunBeforeStarting();
    }

function commandToRunBeforeStarting() { // this function runs before the cloned git repo program is started
    var dir = './src';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    process.chdir('./src', false); // sets directory to ./src
    console.log("\x1b[34m", 'Running the commands: ' + CTRBSC + '', '\x1b[0m')
    subProcess.exec(CTRBSC, (err, stdout, stderr) => { // runs the 'CommandsToRunBeforeStartCommand' from config.json
        if (err) {
        console.log("\x1b[31m", 'Error, "' + CTRASC + '" is a invalid command.', '\x1b[0m')
        process.exit(1)
        } 
        else {
        }
    })
}

        start.startcmd(); // triggers the startcmd function from start.js



