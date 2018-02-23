docker build -t blockservice .

docker run --name blockservice  -p 8090:8090 blockservice

docker rm -f blockservice

docker-compose -f docker-compose.yml up --build

curl 192.168.0.102:8545 --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x133b44fd34f9a69dcd9d84166443941917dd8110", "latest"],"id":1}'
curl localhost:8545 --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x133b44fd34f9a69dcd9d84166443941917dd8110", "latest"],"id":1}'

http://localhost:8094/upsertDocument/MaxBlockSync/{ "idx" : 0}/{ "blockNumber" : 4 }
http://localhost:8094/findOne/MaxBlockSync/{ "idx" : 0}

