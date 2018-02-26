geth init genesis.json 
#geth --testnet --fast --cache=512 console
sudo cp  .ethereum/keystore/UTC--2016-12-21T08-18-15.996092664Z--133b44fd34f9a69dcd9d84166443941917dd8110 /root/.ethereum/keystore/
# sudo cp  .ethereum/keystore/key /root/.ethereum/keystore/
#geth --rpcapi personal,db,eth,net,web3 --rpc --rpcaddr '0.0.0.0' --rpccorsdomain '*' --rpcport 8545 --networkid='12345' --fast  --cache=512 --nodiscover
geth --mine --minerthreads=1 --rpcapi personal,db,eth,net,web3 --rpc --rpcaddr '0.0.0.0' --rpccorsdomain '*' --rpcport 8545 --networkid='12345' --fast  --cache=512 --nodiscover
