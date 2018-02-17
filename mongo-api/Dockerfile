# Use an official Python runtime as a parent image
FROM node

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8096

#ENTRYPOINT [/app/run.sh]
#CMD ["cp","-f", "root/.ethereum/keystore/*","/root/.ethereum/keystore/"]
CMD [ \
  "./wait-for-it.sh", \
  "db:27017", \
  "-t", "0", "--", \
]
CMD [ \
  "./wait-for-it.sh", \
  "eth:8545", \
  "-t", "0", "--", \
]
#CMD ["sh", "run.sh"]
CMD ["npm", "start"]
#cp -f root/.ethereum/keystore/* /root/.ethereum/keystore/
