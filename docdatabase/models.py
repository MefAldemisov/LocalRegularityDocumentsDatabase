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
    owner = models.CharField() # Changed to Charfield
    name = models.TextField()
    type = models.TextField() # There is no need in this field, will be deleted on the next sprint
    created = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now_add=True)
    effect_date = models.DateTimeField(auto_now_add=True)
    expiration_date = models.DateTimeField(auto_now_add=True)
    document = models.FileField(upload_to=MEDIA_ROOT)