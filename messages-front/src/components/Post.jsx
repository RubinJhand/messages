import React from 'react';

function Post(props) {
  const { post } = props;
  const className = props.className
    ? props.className
    : 'col-10 mx-auto col-md-6';
  return (
    <div className={className}>
      <p>
        {post.id} - {post.content}
      </p>
    </div>
  );
}

export default Post;
