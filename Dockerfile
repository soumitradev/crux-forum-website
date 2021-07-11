FROM node:alpine

WORKDIR /app

COPY package.json .
RUN npm install yarn -g --force

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "dev"]
