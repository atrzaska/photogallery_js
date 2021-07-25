FROM node:16-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV APP_PORT=80
ENV GALLERY_PATH=/gallery
EXPOSE 80
CMD [ "node", "src/app.js" ]