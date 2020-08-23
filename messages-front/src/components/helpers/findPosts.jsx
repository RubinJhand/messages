import axios from 'axios';

const findPosts = (method, endpoint, props) => {
  async function fetchData() {
    if (method === 'GET') {
      const request = await axios.get(
        `http://localhost:8000/api${endpoint}`,
        {}
      );
      props(request.data);
    }
  }
  fetchData();
};

export { findPosts };
