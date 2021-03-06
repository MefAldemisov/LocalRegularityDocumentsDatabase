from django.urls import path
from document_storage import views

urlpatterns = [
    path('documents/', views.DocumentsList.as_view()),
    path('documents/<int:pk>/', views.DocumentDetails.as_view()),
    # path('owners/', views.OwnerList.as_view()),
    # path('owners/<int:pk>/', views.OwnerDetails.as_view()),
    path('docowner/', views.DocumentOwnerView.as_view()),
    path('update/<int:pk>/', views.DocumentUpdate.as_view()),
    path('update/', views.HistoryList.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
]