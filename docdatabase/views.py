from .serializers import DocumentPostSerializer, DocumentGetSerializer, OwnerSerializer
from .models import Document, Owner
from rest_framework import generics
from pprint import pprint

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
# class Test(APIView):
#
#     def get(self, request, *args, **kwargs):
#         documents = Document.objects.filter(owner=self.kwargs['pk'])
#         serializer = DocumentSerializer(documents, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#
# @api_view(['GET'])
# def DocumentOwner(request, pk):
#     if request.method == 'GET':
#         owner = Document.objects.get(owner=pk, many=True)
#         documents = owner.file_set
#         serializer = DocumentSerializer(data=documents, many=True)
#         if serializer.is_valid():
#             print(serializer.data)
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)