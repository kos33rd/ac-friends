FROM node:12

ARG BACKEND_URL
ARG PRODUCTION

# Check apps and deps
RUN node -v
RUN npm i -g pm2

# Build application
RUN echo "Building in production: $PRODUCTION"
RUN echo "Backend URL: $BACKEND_URL"

COPY ./package*.json /app/
WORKDIR /app
RUN npm ci

COPY . .
RUN npm run build-prod

# Run static files server
EXPOSE 8000
CMD [ "pm2-runtime", "server.js" ]
