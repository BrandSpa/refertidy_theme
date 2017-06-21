import React, { Component } from 'react';

class Slider extends Component {
	state = {
		slide: 1
	}

	render() {
		const { slides } = this.props;
		const slideStyle = {
			height: '100vh', 
			width: '100%', 
			position: 'absolute',
			top: '0',
			backgroundPosition: 'center center',
			backgroundSize: 'cover'
		};

		return (
			<div>
				{slides.map(slide => {
					return (
						<div style={{position: 'relative', height: '100vh'}}>
							<div style={{...slideStyle, background: `url(${slide.bg_img}) no-repeat`}}></div>
							<div style={{...slideStyle, background: `url(${slide.model_img}) no-repeat`}}></div>
							<div style={{...slideStyle, background: `url(${slide.object_img}) no-repeat`}}></div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Slider;