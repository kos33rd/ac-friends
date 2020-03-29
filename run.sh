#!/bin/sh

set -e

echo "Starting AC-Friends service in '${ENVIRONMENT}' environment on node `hostname`"
python manage.py check
python manage.py migrate --noinput --database=default

if [ "${ENVIRONMENT}" = "production" ]; then
    echo "Running production server..."

    # TODO: Run a real production WSGI web server instead of Django's one
    python /app/manage.py runserver 0.0.0.0:${PORT}
#     exec gunicorn wsgi \
#      -w 4 \
#      -b 0.0.0.0:${PORT} \
#      --log-file=- \
#      --log-level ${LOG_LEVEL}
else
    python /app/manage.py runserver 0.0.0.0:${PORT}
fi
