import React, { Component } from 'react';
import Post from './post_slide';

class PostsSlider extends Component {
  prev = () => {

  }

  next = () => {

  }

  render() {
    const { posts } = this.props;
    let viewportWidth = '200%';
    let total = posts.length;
    if(window.innerWidth < 768) {
      viewportWidth = `${total * 100}%`;
    }

    return (
      <div className="posts-slider">
        <div className="posts-slider__viewport" style={{width: viewportWidth, position: 'relative', left: '0'}}>
          {posts.map(post =>
            <Post key={post.ID} post={post} total={posts.length} />
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
