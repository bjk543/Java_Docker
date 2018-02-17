# Use an official Python runtime as a parent image
FROM beevelop/ionic

RUN mkdir /app
WORKDIR /app
COPY . /app
EXPOSE 8100
CMD [ \
  "./wait-for-it.sh", \
  "mongo_db:27017", \
  "-t", "0", "--", \
]
CMD ["sh", "run.sh"]