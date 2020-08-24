import React, { useState } from 'react';

import PostList from './PostList';
import { findPosts } from './helpers/findPosts';

function PostForm(props) {
  const textAreaRef = React.createRef();

  const [newPosts, setNewPosts] = useState([]);

  const backendUpdate = (response, status) => {
    let posts = [...newPosts];
    console.log(response);
    posts.unshift(response);
    setNewPosts(posts);
    console.log('bUp:>>', response);
  };

  const createPost = (newPost, cb) => {
    findPosts('POST', '/posts/create', cb, newPost);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = textAreaRef.current.value;
    createPost(newComment, backendUpdate);
    textAreaRef.current.value = '';
  };

  return (
    <div className={props.className}>
      <div className='col-12 mb-3'>
        <form onSubmit={handleSubmit}>
          <textarea
            ref={textAreaRef}
            required={true}
            className='form-control'
            name='post'
          ></textarea>
          <button type='submit' className='btn btn-primary my-3'>
            Post
          </button>
        </form>
      </div>
      <PostList newPosts={newPosts} />
    </div>
  );
}

export default PostForm;
