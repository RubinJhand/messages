// import React, { useEffect, useState } from 'react';
import axios from 'axios';

const loadPosts = (props) => {
  async function fetchData() {
    const request = await axios.get('http://localhost:8000/api/posts', {});

    props(request.data);
  }
  fetchData();
};

export { loadPosts };
