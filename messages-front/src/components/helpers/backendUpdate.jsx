import React, { useState } from 'react';

import { findPosts } from './findPosts';

// const backendUpdate = () => {
//   const textAreaRef = React.createRef();
//   const [newPosts, setNewPosts] = useState([]);

//   let posts = [...newPosts];
//   if (status === 201) {
//     posts.unshift(response);
//     setNewPosts(posts);
//   } else {
//     console.log(response);
//     alert('An error occured please try again');
//   }
// };

// const createPost = (newPost, cb) => {
//   findPosts('Post', '/posts/create/', cb, { content: newPost });
// };

// export { createPost };
