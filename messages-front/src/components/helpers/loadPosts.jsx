// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import { findPosts } from './findPosts';

const loadPosts = (props) => {
  findPosts('GET', '/posts/', props);
};

export { loadPosts };
