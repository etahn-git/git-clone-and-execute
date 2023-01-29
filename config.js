// import dependencies
const fs = require('fs');
const readline = require('readline');

// create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear(); // clears console
const filepath = 'config.json'; // config path
fs.readFile(filepath, 'utf8', (err, data) => {
  if (err) throw err;

  // parse the JSON
  let jsonData = JSON.parse(data); // parse the JSON

  // create an object to map field names to corresponding numbers
  let fields = {
    1: 'GithubRepo',
    2: 'StartCommand',
    3: 'CommandsToRunBeforeStartCommand',
    4: 'CommandsToRunAfterStartCommand'
  };

  console.log("\x1b[34m", 'Current Values:', '\x1b[0m' + "\x1b[36m", '\n GithubRepo: ', '\x1b[0m' + jsonData.GithubRepo + "\x1b[36m", '\n StartCommand: ', '\x1b[0m'  + jsonData.StartCommand + "\x1b[36m", '\n CommandsToRunBeforeStartCommand: ', '\x1b[0m'  + jsonData.CommandsToRunBeforeStartCommand + "\x1b[36m", '\n CommandsToRunAfterStartCommand: ', '\x1b[0m'  + jsonData.CommandsToRunAfterStartCommand + '\n', '\x1b[0m');
  console.log(' For help with config go here: https://github.com/etahn-git/git-clone-and-execute/wiki/config')
  // prompt the user for the field number they want to edit
  rl.question('\x1b[36m' + 'Which field do you want to edit? (Enter a number 1-4) (ctrl + c | to exit)' + '\x1b[0m' + '\n 1. Github Repo  |  2. Start Command  |  3. Commands To Run Before Start Command  |  4. Commands To Run After Start Command: \n \x1b[34m', (fieldNum) => {

    let field = fields[fieldNum - 0];
    if (!field) {
      console.log("\x1b[31m", "Invalid field number", "\x1b[0m");
      rl.close();
      return;
    }

    if (field === "GithubRepo") {
      rl.question('Enter new value for GithubRepo: \x1b[0m', "\x1b[0m", (GithubRepo) => {
        // check if the entered value is a valid URL
        if(/^(http|https):\/\/[^ "]+$/.test(GithubRepo)){
          jsonData.GithubRepo = GithubRepo;
          updateFile();
        } else {
          console.log("\x1b[31m", "Invalid URL, please enter a valid URL for the GithubRepo field", '\x1b[0m');
          rl.close();
        }
      });
    } else {
        rl.question(`Enter new value for ${field} : \x1b[0m`, (newValue) => {
          jsonData[field] = newValue;
          updateFile();
        });
    }
  });

  function updateFile() {
    // stringify the JSON
    let jsonString = JSON.stringify(jsonData, null, 2);

    // write the file
    fs.writeFile(filepath, jsonString, 'utf8', (err) => {
      if (err) throw err;
      console.log("\x1b[32m", `Successfully updated config`, '\x1b[0m');
      rl.close();
    });
  }
});
