#  Git Clone And Execute




## Quick run threw on what it does:
This program clones a github repository of your choice(public repos only for now).  Then after its cloned with the set start command in the `config.json` it will run the command that starts your program. `Example: node index.js`
- Downsides: any output from the files you run in the program will not be printed to console.

##### [Heres an example of this program in use](http://github.com/etahn-git "Heres an example of this program in use")



## How to use? - docker 
Project on docker.com can be found [here](https://hub.docker.com/r/etahn/git-clone-and-execute "here")
- Clone the docker image with this command: `docker pull etahn/git-clone-and-execute`
- Run the command, `docker run -p <port>:<port> -it etahn/git-clone-and-execute /bin/bash -c "cd git-clone-and-execute && node git-clone-and-execute; /bin/bash"` and replace `<port>` with the port you want to use for your project, if not needed remove `<port>:<port>` 
- You will not be in the dockers bash, you should see a prompt saying `Please run "git-clone-and-execute start" or "git-clone-and-execute config"`
- Next run `node git-clone-and-execute config`, and follow this [wiki](https://github.com/etahn-git/git-clone-and-execute/wiki/config "wiki") to config it properly
- After that install any depencies your project needs (this is a ubuntu linux console)
- Then you can run `node git-clone-and-execute start`
- And you are done!


<br>

## How to use? - windows/linux
- Clone this repository.
- Open `config.json` and fill out the information [(read this to fill it out)](http://https://github.com/etahn-git/git-clone-and-execute/wiki "(read this to fill it out)")
- Then run `node git-clone-and-execute.js`
