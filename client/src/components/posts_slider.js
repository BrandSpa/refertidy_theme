import React, { Component } from 'react';
import Post from './post_slide';

class PostsSlider extends Component {
  render() {
    const { posts } = this.props;
    const postWidth = `${100 / 3}%`;

    return (
      <div className="posts-slider">
        <div className="posts-slider__viewport" >
          {posts.map(post =>
            <Post key={post.ID} post={post} postWidth={postWidth} />
          )}
        </div>
        <div className="posts-slider__btns">
          <a className="slider__btns__left" href="#" onClick={this.prev}>{'<'}</a>
					<a className="slider__btns__right" href="#" onClick={this.next}>{'>'}</a>
        </div>
      </div>
    )
  }
}

export default PostsSlider;
