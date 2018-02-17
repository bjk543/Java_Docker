# build this dockerFile
docker build -t eth5 .

# 如果要開新的geth，舊的要刪除
rm -rf ~/ethereum/geth/ ~/ethereum/history ~/ethereum/.ethash/
rm -rf ~/ethereum/.ethash ~/ethereum/.ash_history  ~/ethereum/.ethereum/geth/ ~/ethereum/.ethereum/geth.ipc
docker rm -f ethereum-node
# run this container.

#add keystore

#compose 
docker-compose -f docker-compose.yml up --build


#run container
##bjk543/eth
docker run --name ethereum-node -v ~/ethereum:/root    -p 8545:8545 -p 30303:30303    eth5

#bad command for ethereum/client-go
docker run --name ethereum-node -v ~/ethereum:/root    -p 8545:8545 -p 30303:30303    eth5  --mine --minerthreads=1 --rpcapi personal,db,eth,net,web3 --rpc --rpcaddr '172.17.0.2' --rpccorsdomain '*' --rpcport 8545 --networkid='12345' --fast --cache=1024 --nodiscover

# exec
docker exec -it ethereum-node sh

# restart
docker start -ai ethereum-node

# add account 
geth attach
personal.newAccount("testing")

# rpc
curl localhost:8545 --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x133b44fd34f9a69dcd9d84166443941917dd8110", "latest"],"id":1}'
# rpc in another container
curl 192.168.0.102:8545 --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x133b44fd34f9a69dcd9d84166443941917dd8110", "latest"],"id":1}'
curl 192.168.0.102:8545 --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}'


# add peer
admin.nodeInfo.enode
admin.addPeer("enode://c2cb7b2f97106639963258c08ccd41fa81594ed5aa4a94ffa78967ba2f0ec6622893c8292f7e31bce5df3ad3a7d86c4222e486faa8667dbbc6756320d72269b6@192.168.1.102:30303?discport=0")

### to-do
#ADD root /root
