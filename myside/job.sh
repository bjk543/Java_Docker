#!/bin/bash

sudo service mongod start
cd ~/workspace/BlockchainAPI; sh localRun.sh
cd ~/workspace/mySideMenu; ionic upload
echo 'IP is localhost'
# localhost 192.168.17.94
#cd ~/workspace/mySideMenu; ionic serve --address localhost

cd ~/workspace/mySideMenu; nohup npm run ionic:serve --address localhost &