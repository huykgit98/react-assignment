import React from 'react';
import PropTypes from 'prop-types';

export default function Posts({ posts }) {
  return (
    <>
      <h2>Posts</h2>
      {posts.map((post, i) =>
        <p key={i} className=''>
          <strong>{post.account_id}</strong>:<br/>
          {post.title}
        </p>
      )}
    </>
  );
}

Posts.propTypes = {
  posts: PropTypes.array
};
