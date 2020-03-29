# Dockerfile
# Pull base image
FROM python:3.8-buster

# Set environment variables
ENV PYTHONUNBUFFERED 1
ENV ENVIRONMENT production

# Set work directory
WORKDIR /app

# Install system dependencies
RUN printf "\ndeb http://httpredir.debian.org/debian buster main non-free contrib \
    \ndeb-src http://httpredir.debian.org/debian buster main non-free contrib" > \
    /etc/apt/sources.list.d/backports.list \
    && apt-get update \
    && apt-get build-dep -yq python3-psycopg2

# Creating isolated user for application maintenance
RUN groupadd --gid 1001 app
RUN useradd --uid 2001 --gid app --shell /bin/sh --create-home app

# Install python dependencies
RUN pip install pipenv
COPY Pipfile Pipfile.lock /app/
RUN pipenv install --system

# Copy project files
COPY --chown=app:app . /app/

USER app
ENTRYPOINT ["/app/run.sh"]
