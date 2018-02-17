# Use an official Python runtime as a parent image
FROM bjk543/eth
#FROM ethereum/client-go


# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

#RUN geth init genesis.json

# Make port 80 available to the world outside this container
EXPOSE 8545  
EXPOSE 30303 

# Define environment variable
ENV NAME World

#ENTRYPOINT [/user/bin/geth]
#CMD ["cp","-f", "root/.ethereum/keystore/*","/root/.ethereum/keystore/"]
CMD ["sh", "run.sh"]
#CMD ["geth","--mine","--minerthreads=1","--rpcapi","personal,db,eth,net,web3","--rpc","--rpcaddr","0.0.0.0","--rpccorsdomain","*","--rpcport","8545","--networkid=12345","--fast","--cache=512","--nodiscover"]
#cp -f root/.ethereum/keystore/* /root/.ethereum/keystore/