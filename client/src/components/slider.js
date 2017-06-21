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
						<div style={{position: 'relative'}}>
							<div style={{height: '100hv', position: 'absolute', background: slide.bg_img}}></div>
							<div style={{height: '100hv', position: 'absolute', background: slide.model_img}}></div>
							<div style={{height: '100hv', position: 'absolute', background: slide.object_img}}></div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Slider;