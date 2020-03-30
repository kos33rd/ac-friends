# Animal Crossing: New Friends

Helps you find a friend to play with.
This app is being made with educational purposes in mind.


# Development

* Pull the repo
* Install `pipenv`
* Open project root directory
* Run `pipenv update`
* Run `docker build --tag ac-friends .` to start database container
* Run `pipenv run python manage.py migrate` to apply migrations
* Run `pipenv run python manage.py createsuperuser` to create admin panel superuser


## Backend architecture

Apps:

* Player registration process and personal profile - `player`
* Public players registry - `registry`


Backend stack:
* Python 3.8
* Django 3
* Django REST framework
* PostgreSQL
* Docker


Models:
    * User (django system model)
    * Player - is User
    * Friends - is unique relation of Player and Player

URLs:
    * /profile (equals to /players/{loggedInUserId})
    * /players
    * /players/{userId} (equal to /{userId})
