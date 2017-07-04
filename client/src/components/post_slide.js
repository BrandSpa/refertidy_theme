import React, { Component } from 'react';

class PostSlide extends Component {

  openPost = () => {
    window.location = this.props.post.guid;
  }

  render() {
    const { post } = this.props;

    return (
      <div className="post-slide col-lg-3">
        <div
          className="post-slide__media lazyload"
          onClick={this.openPost}
          data-bgset={post.post_thumbnail}
        >
        </div>
        <div className="post-slide__content">
            <h2 className="post-slide__title">{post.post_title}</h2>
            <div className="post-slide__excerpt">
              {post.post_excerpt.substr(0, 150)}
            </div>
            <a href={post.guid} className="btn btn--outline" style={{borderColor: '#6031BA', color: '#6031BA'}}>VER MAS</a>
        </div>
      </div>
    )
  }

}

export default PostSlide;
