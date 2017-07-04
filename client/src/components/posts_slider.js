import React, { Component } from 'react';
import Post from './post_slide';

class PostsSlider extends Component {
  state = {
		slide: 0,
    mobile: false
	}

  componentDidMount = () => {
    window.addEventListener('resize', this.isMobile);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.isMobile);
  }

  isMobile = () => {
    if(window.innerWidth < 768) {
      this.setState({mobile: true});
    } else {
      this.setState({mobile: false});
    }
  }

	next = e => {
		if(e) e.preventDefault();
	  let total = (this.props.posts.length / 3) - 1;

    if(this.state.mobile) {
      total = this.props.posts.length - 1;
    }

		const current = this.state.slide;
		const slide = current < total ? current + 1 : 0;
		this.setState({ slide });
	}

	prev = e => {
		if(e) e.preventDefault();
    let total = (this.props.posts.length / 3) - 1;

    if(this.state.mobile) {
      total = this.props.posts.length - 1;
    }

		const current = this.state.slide;
		const slide = current > 0 ? current - 1 : 0;
		this.setState({ slide });
	}

  render() {
    const { posts } = this.props;
    let total = posts.length;
    let viewportWidth = `${total / 3 * 100}%`;
    let viewportLeft = `-${this.state.slide * 100}%`;

    if(this.state.mobile) {
      viewportWidth = `${total * 100}%`;
    }

    return (
      <div className="posts-slider">
        <div className="posts-slider__viewport" style={{width: viewportWidth,  left: viewportLeft}}>
          {posts.map(post =>
            <Post key={post.ID} post={post} total={posts.length} mobile={this.state.mobile} />
          )}
        </div>
        <div className="posts-slider__btns">
          <a className="posts-slider__btns__left" href="#" onClick={this.prev}>{'<'}</a>
					<a className="posts-slider__btns__right" href="#" onClick={this.next}>{'>'}</a>
        </div>
      </div>
    )
  }
}

export default PostsSlider;
