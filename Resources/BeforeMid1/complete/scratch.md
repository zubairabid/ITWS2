---- node installation ----

* download node from nodejs.com;
* extract folder
* cd node-*/bin
* export PATH=$PATH:$(pwd)

  ---- or ----

* curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
* sudo apt-get install -y nodejs

---- Lab resources link ----

* https://web.iiit.ac.in/~vishal.kaja/

---- Lab setup instructions ----

* download complete.zip
* cd complete
* npm install

---- Running tests ----

Change 'questions' to 'solutions' in package.json to run solution tests.

remove 'x' from 'xit()' and run the below cmd.

* npm run test