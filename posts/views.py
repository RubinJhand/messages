import random
from django.conf import settings
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url
from django.http import HttpResponse, Http404, JsonResponse

from .forms import PostForm
from .models import Post

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

# Create your views here.
def home_view(request, *args, **kwargs):
  # return HttpResponse("<h1>Hello World</h1>")
  return render(request, "pages/home.html", context={}, status=200)

def post_create_view(request, *args, **kwargs):
  form = PostForm(request.POST or None)
  next_url = request.POST.get("next") or None
  if form.is_valid():
    obj = form.save(commit=False)
    obj.save()
    if request.is_ajax():
      return JsonResponse(obj.serialize(), status=201)

    if next_url != None and is_safe_url(next_url, ALLOWED_HOSTS):
      return redirect(next_url)
    form = PostForm()

  if form.errors:
    if request.is_ajax():
      return JsonResponse(form.errors, status=400)

  return render(request, 'components/form.html', context={"form": form})

def post_list_view(request, *args, **kwargs):
  qs = Post.objects.all()
  posts_list = [x.serialize() for x in qs]
  data = {
    "isUser": False,
    "response": posts_list
  }
  return JsonResponse(data)

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