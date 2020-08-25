import React, { useState } from 'react';

// import PostList from './PostList';
// import Feed from './Feed';
import { apiCreatePost } from './helpers/apiCreatePost';

function PostForm(props) {
  const textAreaRef = React.createRef();

  const [newPosts, setNewPosts] = useState([]);

  const backendUpdate = (response) => {
    let posts = [...newPosts];
    posts.unshift(response);
    setNewPosts(posts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = textAreaRef.current.value;

    apiCreatePost(newComment, backendUpdate);
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
      {/* <PostList newPosts={newPosts} /> */}
      {/* <Feed newPosts={newPosts} /> */}
    </div>
  );
}

export default PostForm;
