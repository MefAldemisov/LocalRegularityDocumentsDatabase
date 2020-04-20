from django.db import models
from lrdb_back.settings import MEDIA_ROOT

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
    doc_size = models.IntegerField(blank=True, null=True)
    doc_format = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now_add=True)
    effect_date = models.DateTimeField(auto_now_add=True)
    expiration_date = models.DateTimeField(auto_now_add=True)
    department = models.TextField()
    mentioned_people = models.ManyToManyField(Owner, blank=True)
    document = models.FileField(upload_to=MEDIA_ROOT)