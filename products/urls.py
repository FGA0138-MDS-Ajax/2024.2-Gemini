from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProdutoViewSet, CategoriaViewSet, BannerViewSet




router = DefaultRouter()
router.register(r'produtos', ProdutoViewSet, basename='produto')
router.register(r'categorias', CategoriaViewSet, basename='categoria')
router.register(r'banners', BannerViewSet, basename='banner')


urlpatterns = [
    path('', include(router.urls)),  # Inclui os endpoints de produtos e categorias
]
