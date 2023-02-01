// import dependencies
const subProcess = require('child_process');
const process = require('process');
var sleep = require('system-sleep');
const fs = require('fs');

// read config file
const data = fs.readFileSync('config.json');
const config = JSON.parse(data);
const startcommand = config.StartCommand;
const CTRASC = config.CommandsToRunAfterStartCommand;

function startcmd() { // this function starts the program cloned from the git repo
  sleep(1000); // delays the start so the repo can be cloned in time
  console.log("\x1b[32m", 'Starting your program with the command: "' + startcommand + '"', '\x1b[0m');
  CTRASCfunction();
  console.log("\x1b[32m", "Started.", '\x1b[0m');
  console.log("\x1b[35m", '========================================================================', '\x1b[0m');
  console.log(' ')
      try { // changes directory to ./src but if already done, it will skip this
        process.chdir('./src'); // sets directory to ./src
      } catch (err) {
      }
    subProcess.exec(startcommand, (err, stdout, stderr) => { // runs the start command from config.json
      if (err) {
        console.log(err)
        console.log(' ')
        console.log("\x1b[31m", 'Your error was printed above. Here are some possible issues: \x1b[0m')
        console.log("\x1b[31m", 'Error, here are the possible issues: \x1b[0m \n \t-"' + startcommand + '" is not a valid command.\n \t-Error in your script.\n \t-Missing modules(to install modules add the install commands to the "CommandsToRunBeforeStartCommand" in the config.)\n \t-Your github url is invalid.\n \x1b[31m!!! Run "git-clone-and-execute config" to change your settings. !!!', '\x1b[0m')
        process.exit(1)
      } 
      else {

      }
    })
}

function CTRASCfunction() {
    if(CTRASC.length==0){ // checks if should run the commandsToRunAfterStarting function
      console.log("\x1b[36m", "Skipping commands to run after starting", '\x1b[0m');
    } else {
      commandsToRunAfterStarting()
    }
}

function commandsToRunAfterStarting() { // this function runs after the cloned git repo program is started
    console.log("\x1b[34m", 'Running the commands: ' + CTRASC + '', '\x1b[0m')
    subProcess.exec(CTRASC, (err, stdout, stderr) => { // runs the 'CommandsToRunAfterStartCommand' from config.json
      if (err) {
        console.log("\x1b[31m", 'Error, "' + CTRASC + '" is a invalid command.', '\x1b[0m')
        process.exit(1)
      } 
      else {
        console.log(`The stdout Buffer from shell: ${stdout.toString()}`)
      }
    })
}



module.exports = { startcmd }; // exports the startcmd function