import React, { Component } from 'react';
import Post from './post_slide';
class PostsSlider extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.map(post =>
          <Post key={post.ID} post={post} />
        )}
      </div>
    )
  }
}

export default PostsSlider;
