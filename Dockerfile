FROM node:18
WORKDIR /project

COPY package*.json ./

RUN npm install

COPY . .
#t
#h
#test
EXPOSE 5000
CMD [ "node", "index.js" ]