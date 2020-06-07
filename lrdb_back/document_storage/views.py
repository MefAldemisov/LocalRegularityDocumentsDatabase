from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import DocumentPostSerializer, DocumentGetSerializer, OwnerSerializer, DocumentHistorySerializer, \
    UserSerializer
from .models import Document, Owner, DocumentHistory
from rest_framework import generics, status
from rest_framework.views import APIView
from .permissions import IsOwnerOrReadOnly

# Create your views here.

class DocumentsList(generics.ListCreateAPIView):
    """
    Create a new document
    """
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    queryset = Document.objects.all()
    serializer_class = DocumentPostSerializer


class DocumentDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a document instance.
    """
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    queryset = Document.objects.all()
    serializer_class = DocumentGetSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

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
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = DocumentGetSerializer
    def get_queryset(self):
        return Document.objects.filter(owner=self.kwargs['pk'])

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
# In development

class HistoryList(generics.ListCreateAPIView):
    """
    Create a new history file
    """
    permission_classes = [IsAuthenticated]

    queryset = DocumentHistory.objects.all()
    serializer_class = DocumentHistorySerializer

class DocumentUpdate(APIView):
    """
    Retrieve all the previous versions of a file
    """
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def put(self, request, pk):
        cur = Document.objects.get(pk=pk)
        hist = DocumentHistory(cur_dock=cur, owner=cur.owner, name=cur.name, doc_size=cur.doc_size,
                               doc_format=cur.doc_format, created=cur.created, last_update=cur.last_update,
                               effect_date=cur.effect_date, expiration_date=cur.expiration_date,
                               department=cur.department, document=cur.document)
        hist.save()
        serializer = DocumentGetSerializer(cur, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk):
        history = DocumentHistory.objects.filter(cur_dock_id__exact=pk)
        serializer = DocumentHistorySerializer(history, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
