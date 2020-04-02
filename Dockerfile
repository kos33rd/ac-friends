# Dockerfile
# Pull base image
FROM python:3.8-buster

# Set environment variables
ENV PYTHONUNBUFFERED 1
ENV ENVIRONMENT production

ENV SECRET_KEY 'Do not edit this key in Dockerfile, you bloody monkey! Go for appropriate docker-compose'
ENV SOCIAL_AUTH_GOOGLE_OAUTH2_KEY 'Do not edit this key in Dockerfile, you bloody monkey! Go for appropriate docker-compose'
ENV SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET 'Do not edit this key in Dockerfile, you bloody monkey! Go for appropriate docker-compose'

# Install system dependencies
RUN printf "\ndeb http://httpredir.debian.org/debian buster main non-free contrib \
    \ndeb-src http://httpredir.debian.org/debian buster main non-free contrib" > \
    /etc/apt/sources.list.d/backports.list \
    && apt-get update \
    && apt-get build-dep -yq python3-psycopg2
RUN pip install pipenv

# Install python dependencies
COPY Pipfile* /app/
WORKDIR /app
RUN pipenv install --system --deploy

# Copy project files
COPY . /app

CMD ["/app/run.sh"]
