geth init genesis.json 
#geth --testnet --fast --cache=512 console
geth --mine --minerthreads=1 --rpcapi personal,db,eth,net,web3 --rpc --rpcaddr '0.0.0.0' --rpccorsdomain '*' --rpcport 8545 --networkid='12345' --fast  --cache=512 --nodiscover
