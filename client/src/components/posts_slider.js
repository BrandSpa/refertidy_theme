import React, { Component } from 'react';
import Post from './post_slide';

class PostsSlider extends Component {
  render() {
    const { posts } = this.props;
    let viewportWidth = '200%';
    
    if(window.innerWidth < 768) {
      viewportWidth = `${posts.length * 100}%`;
    }

    return (
      <div className="posts-slider">
        <div className="posts-slider__viewport" style={{width: viewportWidth, position: 'relative', left: '0'}}>
          {posts.map(post =>
            <Post key={post.ID} post={post} />
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
