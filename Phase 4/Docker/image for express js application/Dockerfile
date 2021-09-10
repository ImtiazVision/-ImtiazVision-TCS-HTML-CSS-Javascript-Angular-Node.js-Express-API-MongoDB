#pull the node/image based upon alpine
FROM node:latest 
#create app directory
RUN mkdir /app
#go to working directory
WORKDIR /app
# copy package.json file 
COPY package.json /app/
# run npm install 
RUN npm install
# copy app.js file
COPY app.js /app/
# command line terminal 
CMD ["node","app.js"]