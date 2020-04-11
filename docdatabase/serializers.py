from rest_framework import serializers
import os
import urllib.parse
from base64 import encodebytes
from LocalRegulatoryDocumentDB.settings import MEDIA_ROOT
from .models import Document, Owner

class OwnerSerializer(serializers.ModelSerializer):
    """
    Serializer for the test version of the Owners model
    """
    class Meta:
        model = Owner
        fields = ['id', 'name', 'mail']

class DocumentPostSerializer(serializers.ModelSerializer):
    """
    Documents setter serializer
    """
    class Meta:
        model = Document
        fields = ['id', 'owner', 'name', 'type', 'created', 'last_update', 'effect_date', 'expiration_date', 'document']

    def to_representation(self, instance):
        """
        This function swaps path from the "document" field
        with 'OK' message
        """
        data = super().to_representation(instance)
        data['document'] = 'OK'
        return data

class DocumentGetSerializer(serializers.ModelSerializer):
    """
    Documents getter serializer
    """
    class Meta:
        model = Document
        fields = ['id', 'owner', 'name', 'type', 'created', 'last_update', 'effect_date', 'expiration_date', 'document']

    def to_representation(self, instance):
        """
        This function swaps path from the "document" field
        with the binary data of the file, encoded to BASE-64
        """
        data = super().to_representation(instance)
        path = data['document']
        path = path.split("/")
        f = open(os.path.join(MEDIA_ROOT, urllib.parse.unquote(path[-1])), "rb")
        f = f.read()
        f = encodebytes(f)
        data['document'] = f
        return data

