FROM node:16.13.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# how will production differ
# RUN npm run build

# COPY /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["npm", "run", "start"]
