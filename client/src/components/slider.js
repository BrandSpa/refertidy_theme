import React, { Component } from 'react';

class Slider extends Component {
	state = {
		slide: 0
	}

	render() {
		const { slides } = this.props;
		const slideStyle = {
			height: '100vh', 
			width: '100%', 
			position: 'absolute',
			top: '0'
		};
		const viewportStyle = {
			width: `${100 * slides.length}%`
		};

		return (
			<div className="slider">
				<div className="slider__viewport" style={viewportStyle}>
					{slides.map((slide, i) =>
							<Slide slide={slide} current={this.state.slide} index={i} />
					)}
					</div>
			</div>
		)
	}
}

export default Slider;