FROM node:9-alpine

ENV NODE_ENV=production HOST=0.0.0.0

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN yarn install && yarn cache clean
RUN yarn run build

EXPOSE 3000

CMD ["yarn", "run", "start"]
