import React, { Component } from 'react';
import Slide from './slider_slide';

class Slider extends Component {
	state = {
		slide: 0
	}

	render() {
		const { slides } = this.props;

		const viewportStyle = {
			width: `${100 * slides.length}%`
		};

		const slideWidth = `${100 / slides.length}%`;

		return (
			<div className="slider">
				<div className="slider__viewport" style={viewportStyle}>
					{slides.map((slide, i) =>
							<Slide 
								slide={slide} 
								current={this.state.slide} 
								index={i} 
								slideWidth={slideWidth}
							/>
					)}
					</div>
			</div>
		)
	}
}

export default Slider;