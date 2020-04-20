from django.urls import path
from search_engine import views

urlpatterns = [
    path('', views.SearchEngineView.as_view()),
    ]