FROM node:18

WORKDIR /home/app

COPY ./dist /home/app

RUN yarn install

CMD ["yarn", "start"]