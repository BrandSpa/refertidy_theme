import React, { Component } from 'react';

class SliderImgs extends Component {
	state = {
		slide: 1
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
				{slides.map(slide => {
					return (
						<div style={{position: 'relative', height: '100vh'}}>

							<div style={slideStyle}>
								<img src={slide.bg_img} style={{width: '100%'}}/>
							</div>
							<div style={slideStyle}>
								<img src={slide.model_img} style={{width: '100%'}}/>
							</div>
								<div style={slideStyle}>
								<img src={slide.object_img} style={{width: '100%'}}/>
							</div>

							<div style={{width: '30%', position: 'absolute', left: '0'}}>
								<h2>{slide.slide_content}</h2>
							</div>

						</div>
					)
				})}
			</div>
		)
	}
}

export default SliderImgs;
