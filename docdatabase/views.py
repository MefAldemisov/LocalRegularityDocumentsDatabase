from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import DocumentPostSerializer, DocumentGetSerializer, OwnerSerializer
from .models import Document, Owner
from rest_framework import generics, status

# Create your views here.

class DocumentsList(generics.ListCreateAPIView):
    """
    Create a new document
    """
    queryset = Document.objects.all()
    serializer_class = DocumentPostSerializer


class DocumentDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a document instance.
    """
    queryset = Document.objects.all()
    serializer_class = DocumentGetSerializer

class OwnerList(generics.ListCreateAPIView):
    """
    Create a new owner
    """
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer

class OwnerDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an owner instance.
    """
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer

"""
Some of the unused methods just for fun
"""
class Test(APIView):

    def get(self, request, *args, **kwargs):
        documents = Document.objects.filter(owner=self.kwargs['pk'])
        serializer = DocumentGetSerializer(documents, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class DocumentOwnerView(generics.ListAPIView):
    serializer_class = DocumentGetSerializer
    def get_queryset(self):
        return Document.objects.filter(owner=self.kwargs['pk'])
