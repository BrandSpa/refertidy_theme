import React, { Component } from 'react';

class PostSlide extends Component {

  render() {
    const { post } = this.props;

    return (
      <div className="post-slide col-lg-3">
        <div className="post-slide__media lazyload" data-bgset={post.post_thumbnail}></div>
        <div className="post-slide__content">
            <h2 className="post-slide__title">{post.post_title}</h2>
            <div className="post-slide__excerpt">
              {post.post_excerpt}
            </div>
            <button className="btn btn--outline" style={{borderColor: '#6031BA', color: '#6031BA'}}>VER MAS</button>
        </div>
      </div>
    )
  }

}

export default PostSlide;
