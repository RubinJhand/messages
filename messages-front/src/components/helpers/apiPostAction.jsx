import { apiCRUD } from './apiCRUD';

const apiPostAction = (postId, action, callback) => {
  const data = { id: postId, action: action };
  apiCRUD('POST', '/posts/action', callback, data);
};

export { apiPostAction };
