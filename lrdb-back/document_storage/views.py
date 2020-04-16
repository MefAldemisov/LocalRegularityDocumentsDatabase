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

class DocumentOwnerView(generics.ListAPIView):
    """
    Retrieve all documents of the user by specifying user name
    """
    serializer_class = DocumentGetSerializer
    def get_queryset(self):
        return Document.objects.filter(owner=self.kwargs['pk'])
