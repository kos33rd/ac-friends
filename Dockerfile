# Dockerfile
# Pull base image
FROM python:3.8-buster

# Set environment variables
ENV PYTHONUNBUFFERED 1
ENV ENVIRONMENT production

# Install system dependencies
RUN printf "\ndeb http://httpredir.debian.org/debian buster main non-free contrib \
    \ndeb-src http://httpredir.debian.org/debian buster main non-free contrib" > \
    /etc/apt/sources.list.d/backports.list \
    && apt-get update \
    && apt-get build-dep -yq python3-psycopg2
RUN pip install pipenv

# Copy project files
COPY . /app

# Set work directory
WORKDIR /app

# Install python dependencies
RUN pipenv install --system --deploy

CMD ["/app/run.sh"]
