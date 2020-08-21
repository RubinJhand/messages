from django.shortcuts import render
from django.http import HttpResponse

from .models import Post

# Create your views here.
def home_view(request, *args, **kwargs):
  return HttpResponse("<h1>Hello World</h1>")

def post_detail_view(request, post_id, *args, **kwargs):
  obj = Post.objects.get(id=post_id)
  return HttpResponse(f"<h1>Hello {post_id} - {obj.content}</h1>")