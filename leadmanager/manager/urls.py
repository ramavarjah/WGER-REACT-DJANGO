from rest_framework import routers
from .api import DayViewSet

router = routers.DefaultRouter()
router.register('api/manager', DayViewSet, 'manager')

urlpatterns = router.urls