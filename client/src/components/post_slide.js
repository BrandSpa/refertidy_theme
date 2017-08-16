import React, { Component } from 'react';

class PostSlide extends Component {

  openPost = () => {
    window.location = this.props.post.guid;
  }

  render() {
    const { post, total } = this.props;
    let postWidth = `${200 / (total * 2)}%`;

    if(this.props.mobile) {
      postWidth = `${100 / total}%`;
    }

    return (
      <div className="post-slide" style={{width: postWidth, float: 'left'}}>
        <div className="post-slide__content">
          <a href={post.guid}>
            <h4 className="post-slide__title">{post.post_title}</h4>
          </a>

            <a href={post.guid} className="post-slide__link">VER MÁS</a>
        </div>
      </div>
    )
  }

}

export default PostSlide;
