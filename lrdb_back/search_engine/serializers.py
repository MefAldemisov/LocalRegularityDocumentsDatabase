from rest_framework import serializers
from search_engine.models import SearchHistory

class SearchSerializer(serializers.Serializer):
    """Serializer for search engine requests"""

    class Meta:
        model = SearchHistory
        fields = ['document_name', 'owner', 'doc_id', 'created', 'last_update', 'effect_date', 'expiration_date', 'department']
