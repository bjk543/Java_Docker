docker build -t blockservice .

docker run --name blockservice  -p 8090:8090 blockservice

docker rm -f blockservice

docker-compose -f docker-compose.yml up --build