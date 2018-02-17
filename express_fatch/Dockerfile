# Use an official Python runtime as a parent image
FROM node

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Make port 80 available to the world outside this container
EXPOSE 8084

# Define environment variable
ENV NAME World

#ENTRYPOINT [/app/run.sh]
#CMD ["cp","-f", "root/.ethereum/keystore/*","/root/.ethereum/keystore/"]
CMD [ \
  "./wait-for-it.sh", \
  "db:27017", \
  "-t", "0", "--", \
]
CMD ["sh", "run.sh"]
#cp -f root/.ethereum/keystore/* /root/.ethereum/keystore/
