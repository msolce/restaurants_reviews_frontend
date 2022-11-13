FROM node:16.15.1
WORKDIR /frontend
COPY package*.json /frontend
RUN npm install
COPY . /frontend
EXPOSE 3000
CMD ["npm", "run", "start"]