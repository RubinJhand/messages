import { apiCRUD } from './apiCRUD';

const apiCreatePost = (newPost, cb) => {
  apiCRUD('POST', '/posts/create', cb, newPost);
};

export { apiCreatePost };
