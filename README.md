# Animal Crossing: New Friends

Helps you find a friend to play with.
This app is being made with educational purposes in mind.


# Development

* Pull the repo
* Install `pipenv` and docker runtime
* Open project root directory
* Run `docker-compose -f docker-compose.yml -f docker-compose.develop.yml up -d --build` to start database container
* Run `pipenv update`
* Run `pipenv run python manage.py createsuperuser` to create admin panel superuser


# Production

* Run `docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d --build`


## Backend tech stack

* Python 3.8
* Django 3
* Django REST framework
* [Django REST Framework Social OAuth2](https://github.com/RealmTeam/django-rest-framework-social-oauth2)
* PostgreSQL
* Docker

## Frontend tech stack

* Webpack
* Babel
* React + Effector
* Material UI
