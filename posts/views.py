from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse

from .models import Post

# Create your views here.
def home_view(request, *args, **kwargs):
  return HttpResponse("<h1>Hello World</h1>")

def post_detail_view(request, post_id, *args, **kwargs):
  
  data = {
    "id": post_id,
    # "image_path": obj.image.url
  }
  status = 200
  try:
    obj = Post.objects.get(id=post_id)
    data['content'] = obj.content
  except:
    data['message'] = "Not found"
    status = 404


  return JsonResponse(data, status=status)