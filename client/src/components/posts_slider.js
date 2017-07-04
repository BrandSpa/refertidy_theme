import React, { Component } from 'react';
import Post from './post_slide';

class PostsSlider extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="posts-slider">
        <div className="posts-slider__viewport" >
          <div className="row">
          {posts.map(post =>
            <Post key={post.ID} post={post} />
          )}
          </div>
        </div>
      </div>
    )
  }
}

export default PostsSlider;
