import io
from rest_framework import views
from rest_framework.parsers import FormParser, JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer, HTMLFormRenderer
from document_storage.models import Document
from rest_framework.response import Response
from rest_framework import status
from document_storage.serializers import DocumentGetSerializer

# Create your views here.

class SearchEngineView(views.APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        json = JSONRenderer().render(request.POST)
        stream = io.BytesIO(json)
        data = JSONParser().parse(stream)
        documents = Document.objects.all()
        i = 0 #Checks that at least one field is passed to the backend (Will be fixed once more smart solution comes to mind)
              #There are 8 searching filters in total
        try:
            documents = documents.filter(name__contains=data['name'])
        except KeyError:
            i=i+1

        try:
            documents = documents.filter(owner__username__startswith=data['owner'])
        except KeyError:
            i=i+1

        try:
            documents = documents.filter(pk=data['id'])
        except KeyError:
            i=i+1

        try:
            documents = documents.filter(created__gte=data['created_day'])
        except KeyError:
            i = i+1

        try:
            documents = documents.filter(last_update__gte=data['last_update'])
        except KeyError:
            i = i+1

        try:
            documents = documents.filter(effect_date__gte=data['effect_date'])
        except KeyError:
            i = i+1

        try:
            documents = documents.filter(expiration_date__lte=data['expiration_date'])
        except KeyError:
            i = i+1

        try:
            documents = documents.filter(department__contains=data['department'])
        except KeyError:
            i = i+1
        if i == 8:
            return Response(status=status.HTTP_400_BAD_REQUEST) # No fields were passed
        else:
            for doc in documents:
                print(doc.document)
            serializer = DocumentGetSerializer(documents, many=True)
            return Response(serializer.data)