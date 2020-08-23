from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

# Create your models here.
class PostLike(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  post = models.ForeignKey("Post", on_delete=models.CASCADE)
  timestamp = models.DateTimeField(auto_now_add=True)

class Post(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  likes = models.ManyToManyField(User, related_name='post_user', blank=True, through=PostLike)
  content = models.TextField(blank=True, null=True)
  image = models.FileField(upload_to='images/', blank=True, null=True)

  timestamp = models.DateTimeField(auto_now_add=True)

  class Meta:
        ordering = ['-id']

  def serialize(self):
    return {
      "id": self.id,
      "content": self.content,
      "likes": 0

    }