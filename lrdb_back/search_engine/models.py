from django.db import models

# Model of Global history in search engine, may become useful later

class SearchHistory(models.Model):
    """
    Model for storing history of searches to the database
    """
    document_name = models.CharField(blank=True, null=True, max_length=100)
    owner = models.CharField(blank=True, null=True, max_length=100)
    doc_id = models.IntegerField(blank=True, null=True)
    created = models.DateTimeField(blank=True, null=True)
    last_update = models.DateTimeField(blank=True, null=True)
    effect_date = models.DateTimeField(blank=True, null=True)
    expiration_date = models.DateTimeField(blank=True, null=True)
    department = models.CharField(blank=True, null=True, max_length=100)