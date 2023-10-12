export SECRET_KEY='django-insecure-l6_c2ow1v=4-*6_qud!^($0-&wr^%#+%ysjx9i#n45zcm2gob7'
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --yes-input