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

		return (
			<div>
				{slides.map((slide, i) => {
					return (
						<div 
							className={`slider__slide ${this.state.slide == i ?  'slider__slide--active' : ''}`} 
							style={{position: 'relative', height: '100vh'}}>
							<div style={{paddingTop: '200px', width: '500px'}}>
								{slide.slide_content}
							</div>
							<div style={{
								...slideStyle, 
								background: `url(${slide.bg_img}) center / cover no-repeat`,
			
							}}></div>
							<div className="slider__slide__model" style={{
								...slideStyle, 
								background: `url(${slide.model_img}) right / cover no-repeat`
							}}></div>
							<div className="slider__slide__object" style={{
								...slideStyle, 
								background: `url(${slide.object_img}) right / cover no-repeat`
							}}></div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Slider;