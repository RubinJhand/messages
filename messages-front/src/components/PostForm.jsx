import React, { useState } from 'react';

import PostList from './PostList';

function PostForm(props) {
  const textAreaRef = React.createRef();

  const [newPosts, setNewPosts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = textAreaRef.current.value;
    let tempNewPosts = [...newPosts];
    tempNewPosts.unshift({
      content: newComment,
      likes: 0,
      id: 12313
    });
    setNewPosts(tempNewPosts);

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
