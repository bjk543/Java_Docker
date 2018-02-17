

資料夾to domain name 只允許英文小寫
docker compose service name 不限制
#sudo if ubuntu
## sudo docker-compose
## sudo docker

# start
docker-compose -f docker-compose.yml up --build


# delete all container
docker rm -f $(docker ps -a -q)

# port
## nodejs
postgres:32769
mongodb:32768
mongo-api:8096
## java
BlockchainServices:8090
BlockchainAPI:8081

#需要更改IP

### database connection
DataServicesAPI/src/com/asi/config/configDS.xml
value="jdbc:postgresql://192.168.0.102:5432/postgres
### RPCUrlIp
BlockchainAPI/src/main/resources/resources/config.properties
RPCUrlIp=192.168.0.102
PostUrlIp=192.168.0.102 
### inonic
mySideMenu/src/pages/globals.ts