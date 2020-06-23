This is the restful backend for the project for Software Project course in Innopolis University

You can find the full documentation with the examples of backend usage here:
https://documenter.getpostman.com/view/10962051/SzYdRvWC


## Steps to run the system:

1. Install all deps (`requirements.txt`)
2. Create venv (`python3 -m venv venv`)
3. in root folder (`rep_name/lrdb_back`) run   

```
python3 manage.py makemigrations search_engine
python3 manage.py makemigrations document_storage
python3 manage.py migrate
python3 manage.py runserver ip:port
```

***Warning!***
Initially folders `lrdb_back/search_engine/migrations` and `lrdb_back/document_storage/migrations` should be removed

4. Load database from the given file to the root directory (`rep_name/lrdb_back`)