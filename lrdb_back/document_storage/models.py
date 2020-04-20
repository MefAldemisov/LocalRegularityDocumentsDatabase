from django.db import models
import os

def get_upload_path(instance, filename):
    """
    Makes directories for each files with different names, thus allows to query history
    """
    return os.path.join(
        "%s" % instance.name, filename
    )

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
    department = models.IntegerField()
    mentioned_people = models.ManyToManyField(Owner, blank=True)
    document = models.FileField(upload_to=get_upload_path)

class DocumentHistory(models.Model):
    """
    Model for doc history
    """
    cur_dock = models.ForeignKey(Document, blank=True, on_delete=models.CASCADE)
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
    document = models.FileField(upload_to=get_upload_path)