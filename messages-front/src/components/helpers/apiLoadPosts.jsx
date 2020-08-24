import { apiCRUD } from './apiCRUD';

const apiLoadPosts = (props) => {
  apiCRUD('GET', '/posts/', props);
};

export { apiLoadPosts };
