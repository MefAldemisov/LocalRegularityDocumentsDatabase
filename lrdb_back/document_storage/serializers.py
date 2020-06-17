from base64 import encodebytes

from django.contrib.auth.models import User
from rest_framework import serializers
from pathlib import Path
import os
import urllib.parse
from lrdb_back.settings import MEDIA_ROOT
from .models import Document, Owner, DocumentHistory
from urllib.parse import unquote

def getpath(data):
    filename = unquote(data['document']).split('/')[-1]
    time = data['created'].split('-')[0:2]
    path = os.path.join(MEDIA_ROOT, time[0], time[1], data['name'], filename)
    return path

# class OwnerSerializer(serializers.ModelSerializer):
#     """
#     Serializer for the test version of the Owners model
#     """
#     class Meta:
#         model = Owner
#         fields = ['id', 'name', 'mail']

class DocumentPostSerializer(serializers.ModelSerializer):
    """
    Documents setter serializer
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:

        model = Document
        fields = ['id', 'owner', 'name', 'doc_size', 'doc_format', 'created', 'last_update', 'effect_date', 'expiration_date', 'department', 'mentioned_people', 'document']

    def to_representation(self, instance):
        """
        This function swaps path from the "document" field
        with 'OK' message
        """
        data = super().to_representation(instance)
        path = getpath(data)
        data['doc_size'] = Path(path).stat().st_size
        data['document'] = 'OK'
        instance.doc_size = Path(path).stat().st_size
        instance.document = path
        instance.save()
        return data

class DocumentGetSerializer(serializers.ModelSerializer):
    """
    Documents getter serializer
    """
    class Meta:
        model = Document
        fields = ['id', 'owner', 'name', 'doc_size', 'doc_format', 'created', 'last_update', 'effect_date', 'expiration_date', 'department', 'mentioned_people', 'document']

    def to_representation(self, instance):
        """
        This function swaps path from the "document" field
        with the binary data of the file, encoded to BASE-64
        """
        data = super().to_representation(instance)
        path = getpath(data)
        f = open(path, "rb")
        f = f.read()
        f = encodebytes(f)
        data['document'] = f
        return data

class DocumentHistorySerializer(serializers.ModelSerializer):
    """
    Serializer for updates
    """
    class Meta:
        model = DocumentHistory
        fields = ['id', 'cur_dock', 'owner', 'name', 'doc_size', 'doc_format', 'created', 'last_update', 'effect_date', 'expiration_date', 'department', 'mentioned_people', 'document']

    def to_representation(self, instance):
        """
        This function swaps path from the "document" field
        with the binary data of the file, encoded to BASE-64
        """
        print(instance.document)
        data = super().to_representation(instance)
        print(list(data))
        path = getpath(data)
        f = open(path, "rb")
        f = f.read()
        f = encodebytes(f)
        data['document'] = f
        return data

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username']