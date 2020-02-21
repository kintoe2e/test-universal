# Build /dist
FROM node:12-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . /app
ENTRYPOINT ["npm","start"]
