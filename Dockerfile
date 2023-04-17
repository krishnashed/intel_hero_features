FROM node:18

WORKDIR /app

COPY package.json /app/
RUN npm install
RUN npm install -g serve

COPY ./ /app/

EXPOSE 3000

RUN npm run build

CMD ["serve", "-s", "build"]