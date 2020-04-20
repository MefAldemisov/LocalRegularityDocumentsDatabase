from rest_framework.response import Response
from .serializers import DocumentPostSerializer, DocumentGetSerializer, OwnerSerializer, DocumentHistorySerializer
from .models import Document, Owner, DocumentHistory
from rest_framework import generics, status
from rest_framework.views import APIView

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
# In development

class HistoryList(generics.ListCreateAPIView):
    """
    Create a new history file
    """
    queryset = DocumentHistory.objects.all()
    serializer_class = DocumentHistorySerializer

class DocumentUpdate(APIView):
    """
    Retrieve all the previous versions of a file
    """

    def put(self, request, pk):
        print(pk)
        prev = Document.objects.get(pk=pk)
        hist = DocumentHistory(cur_dock=prev, owner=prev.owner, name=prev.name, doc_size=prev.doc_size,
                               doc_format=prev.doc_format, created=prev.created, last_update=prev.last_update,
                               effect_date=prev.effect_date, expiration_date=prev.expiration_date,
                               department=prev.department, document=prev.document)
        hist.save()

        # hist.mentioned_people.set(prev.mentioned_people)
        serializer = DocumentGetSerializer(prev, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk):
        history = DocumentHistory.objects.filter(cur_dock_id__exact=pk)
        serializer = DocumentHistorySerializer(history, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
