from django.db import models
from LocalRegulatoryDocumentDB.settings import MEDIA_ROOT

# Create your models here.
class Owner(models.Model):
    """
    Test model, will be reimplemented late
    """
    name = models.TextField()
    mail = models.TextField()


class Document(models.Model):
    """
    Documents model
    """
    owner = models.TextField()
    name = models.TextField()
    doc_size = models.IntegerField()
    doc_format = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now_add=True)
    effect_date = models.DateTimeField(auto_now_add=True)
    expiration_date = models.DateTimeField(auto_now_add=True)
    department = models.TextField()
    mentioned_people = models.ManyToManyField(Owner)
    amount_of_mentioned = models.IntegerField()
    document = models.FileField(upload_to=MEDIA_ROOT)