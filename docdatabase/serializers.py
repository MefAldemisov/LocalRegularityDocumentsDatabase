from rest_framework import serializers
from pathlib import Path
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
        fields = ['id', 'owner', 'name', 'doc_size', 'doc_format', 'created', 'last_update', 'effect_date', 'expiration_date', 'department', 'mentioned_people', 'amount_of_mentioned', 'document']

    def to_representation(self, instance):
        """
        This function swaps path from the "document" field
        with 'OK' message
        """
        data = super().to_representation(instance)
        path = data['document']
        path = path.split("/")
        data['document'] = 'OK'
        data['amount_of_mentioned'] = len(data['mentioned_people'])
        data['doc_size'] = Path(os.path.join(MEDIA_ROOT, urllib.parse.unquote(path[-1]))).stat().st_size
        return data


        # pk_list = []
        #
        # for name in data['mentioned_people']:
        #     pk_list.append(Owner.objects.get(name=name)['pk'])
        #
        # print(len(pk_list))
        #
        # if len(pk_list) > 0:
        #     path = data['document']
        #     path = path.split("/")
        #
        #     data['document'] = 'OK'
        #     data['doc_size'] = Path(os.path.join(MEDIA_ROOT, urllib.parse.unquote(path[-1]))).stat().st_size
        #     return data
        # else:
        #     return data

class DocumentGetSerializer(serializers.ModelSerializer):
    """
    Documents getter serializer
    """
    class Meta:
        model = Document
        fields = ['id', 'owner', 'name', 'doc_size', 'doc_format', 'created', 'last_update', 'effect_date', 'expiration_date', 'department', 'mentioned_people', 'amount_of_mentioned', 'document']

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
        data['amount_of_mentioned'] = len(data['mentioned_people'])
        data['doc_size'] = Path(os.path.join(MEDIA_ROOT, urllib.parse.unquote(path[-1]))).stat().st_size
        return data

