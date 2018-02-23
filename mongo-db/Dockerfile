# Use an official Python runtime as a parent image
FROM node

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8094
CMD [ \
  "./wait-for-it.sh", \
  "mongo_db:27017", \
  "-t", "0", "--", \
]
CMD ["npm", "start"]