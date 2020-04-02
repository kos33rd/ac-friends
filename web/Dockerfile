FROM node:12

ARG BACKEND_URL
ARG GOOGLE_CLIENT_ID
ARG API_CLIENT_ID
ARG API_CLIENT_SECRET
ARG PRODUCTION

# Check apps and deps
RUN node -v
RUN npm i -g pm2

COPY ./package*.json /app/
WORKDIR /app
RUN npm ci

# Build application
RUN echo "Building in production: $PRODUCTION"
RUN echo "Backend URL: $BACKEND_URL"
RUN echo "API_CLIENT_ID: $API_CLIENT_ID"
RUN echo "GOOGLE_CLIENT_ID: $GOOGLE_CLIENT_ID"

COPY . .
RUN npm run build-prod

# Run static files server
EXPOSE 8000
CMD [ "pm2-runtime", "server.js" ]
