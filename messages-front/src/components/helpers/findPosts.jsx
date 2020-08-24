import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

const csrftoken = Cookies.get('csrftoken');

const findPosts = (method, endpoint, props, content) => {
  async function fetchData() {
    if (method === 'GET') {
      const request = await axios.get(
        `http://localhost:8000/api${endpoint}`,
        {}
      );
      props(request.data);
    }
    if (method === 'POST') {
      const request = await axios.post(`http://localhost:8000/api${endpoint}`, {
        // headers: {
        //   'X-CSRFToken': csrftoken
        // }
      });
      props({ ...request.data, content: content });
      console.log({ ...request.data, content: content });
    }
  }
  fetchData();
};

export { findPosts };
