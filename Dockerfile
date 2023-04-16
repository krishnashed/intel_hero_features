FROM node:18

WORKDIR /app

COPY ./ /app/

RUN npm install

EXPOSE 3000

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build"]