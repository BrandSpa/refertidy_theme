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
		let slideBg = {...slideStyle, background: `url(${slide.bg_img}) no-repeat`};
		let slideModel = {...slideStyle, background: `url(${slide.model_img}) no-repeat`};
		let slideObject = {...slideStyle, background: `url(${slide.object_img}) no-repeat`};

		return (
			<div>
				{slides.map(slide => {
					return (
						<div style={{position: 'relative', height: '100vh'}}>
							<div style={slideBg}></div>
							<div style={slideModel}></div>
							<div style={slideObject}></div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Slider;