import React, { Component } from 'react';

class Slider extends Component {
	state = {
		slide: 1
	}

	render() {
		const { slides } = this.props;

		return (
			<div>
				{slides.map(slide => {
					return (
						<div>
							<div style={{background: slide.bg_img}}></div>
							<div style={{background: slide.model_img}}></div>
							<div style={{background: slide.object_img}}></div>
						</div>
					)
				})}
			</div>
		)
	}
}

