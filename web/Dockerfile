FROM node:12

# Check apps and deps
RUN node -v
RUN npm i -g pm2

# Build application
WORKDIR /app

COPY ./package*.json ./
COPY . .
RUN npm ci
RUN npm run build-prod

# Run static files server
EXPOSE 8000
CMD [ "pm2-runtime", "server.js" ]
