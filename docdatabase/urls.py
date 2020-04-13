from django.urls import path
from docdatabase import views

urlpatterns = [
    path('documents/', views.DocumentsList.as_view()),
    path('documents/<int:pk>/', views.DocumentDetails.as_view()),
    path('owners/', views.OwnerList.as_view()),
    path('owners/<int:pk>/', views.OwnerDetails.as_view()),
    path('docowner/<str:pk>/', views.DocumentOwnerView.as_view()),
]