To install backend:
	1) In command prompt go to the directory where it was saved
	2) Run "$> python3 -m venv"
	3) Run "$> venv/bin/activate"
	4) Run "$> pip install -r /path/to/requirements.txt"
	5) Run "$> python manage.py startapp"

Documentation to the requests:
	https://documenter.getpostman.com/view/10962051/SzYdRvWC

The database in the folder has been initially populated by:

Users:

    {
        "id": 1,
        "name": "Третьяков Владимир Владимирович",
        "mail": "vvt@user.com"
    },

    {
        "id": 2,
        "name": "Куропаткин Сергей Валерьевич",
        "mail": "ksv@user.com"
    },

    {
        "id": 3,
        "name": "Никольская Екатирина Павловна",
        "mail": "nep@user.com"
    },

    {
        "id": 4,
        "name": "Степанюк Валентин Валерьевич",
        "mail": "svv@user.com"
    }

Documents:

    {
	"id": 2,
        "owner": "Степанюк Валентин Валерьевич",
        "name": "Журнал Учета Заявок",
        "doc_size": 2660601,
        "doc_format": "pdf",
        "created": "2020-04-11T22:40:08.959053Z",
        "last_update": "2020-04-11T22:40:08.959053Z",
        "effect_date": "2020-04-11T22:40:08.959053Z",
        "expiration_date": "2020-04-11T22:40:08.959053Z",
        "department": "Департамент Управления Образованием",
        "mentioned_people": [
            1,
            2,
            4
        ],
        "amount_of_mentioned": 3,
        "document": "OK"
    },

    {
        "id": 3,
        "owner": "Третьяков Владимир Владимирович",
        "name": "Контрольный Пакет Акций",
        "doc_size": 17491,
        "doc_format": "docx",
        "created": "2020-04-11T22:46:42.587449Z",
        "last_update": "2020-04-11T22:46:42.587449Z",
        "effect_date": "2020-04-11T22:46:42.587449Z",
        "expiration_date": "2020-04-11T22:46:42.587449Z",
        "department": "Департамент Управления Образованием",
        "mentioned_people": [
            1,
            3
        ],
        "amount_of_mentioned": 2,
        "document": "OK"
    }
