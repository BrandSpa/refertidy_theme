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
						<div style={{position: 'relative', height: '100vh'}}>
							<div 
							style={{height: '100vh', position: 'absolute', background: `url(${slide.bg_img})`}}></div>
							<div style={{height: '100vh', position: 'absolute', background: `url(${slide.model_img}`}}></div>
							<div style={{height: '100vh', position: 'absolute', background: `url(${slide.object_img}`}}></div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Slider;