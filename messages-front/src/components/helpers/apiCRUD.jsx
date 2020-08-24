import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

const csrftoken = Cookies.get('csrftoken');

const apiCRUD = (method, endpoint, props, content) => {
  async function fetchData() {
    if (method === 'GET') {
      axios
        .get(`http://localhost:8000/api${endpoint}`)
        .then(function (response) {
          // handle success
          props(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    if (method === 'POST') {
      axios
        .post(`http://localhost:8000/api${endpoint}`, {
          content: content
        })
        .then(function (response) {
          props(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  fetchData();
};

export { apiCRUD };
