import React, { Component } from 'react';
import Slide from './slider_slide';

class Slider extends Component {
	state = {
		slide: 0
	}

	next = e => {
		if(e) e.preventDefault();
		const total = this.props.slides.length - 1;
		const current = this.state.slide;
		const slide = current < total ? current + 1 : 0;
		this.setState({ slide });
	}

	prev = e => {
		if(e) e.preventDefault();
		const total = this.props.slides.length;
		const current = this.state.slide;
		const slide = current > 0 ? current - 1 : 0;
		this.setState({ slide });
	}

	render() {
		const { slides } = this.props;

		const viewportStyle = {
			width: `${100 * slides.length}%`,
			transform: `translate3d( -${100 / slides.length * this.state.slide}%, 0, 0 )`,

		};

		const slideWidth = `${100 / slides.length}%`;

		return (
			<div className="slider">
				<div className="slider__viewport" style={viewportStyle}>
					{slides.map((slide, i) =>
							<Slide
								key={i}
								slide={slide}
								current={this.state.slide}
								index={i}
								slideWidth={slideWidth}
							/>
					)}
				</div>
				<div className="slider__btns">
					<a className="slider__btns__left" href="#" onClick={this.prev}>
						<svg width="24px" height="44px" viewBox="0 0 24 44" version="1.1">
						    <defs></defs>
						    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
						        <g id="Desktop-Home-Copy-5" transform="translate(-48.000000, -408.000000)" stroke="#6031BA" strokeWidth="4">
						            <g id="Group-17" transform="translate(50.000000, 410.000000)">
						                <polyline id="Path-2" transform="translate(10.000000, 20.000000) rotate(90.000000) translate(-10.000000, -20.000000) " points="-10 10 10.261839 30 30 10.5169106"></polyline>
						            </g>
						        </g>
						    </g>
						</svg>
					</a>
					<a className="slider__btns__right" href="#" onClick={this.next}>

						<svg width="24px" height="44px" viewBox="0 0 24 44" version="1.1">
						    <defs></defs>
						    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
						        <g id="Desktop-Home-Copy-5" transform="translate(-1344.000000, -408.000000)" stroke="#6031BA" strokeWidth="4">
						            <g id="Group-17" transform="translate(50.000000, 410.000000)">
						                <polyline id="Path-2-Copy" transform="translate(1306.000000, 20.000000) scale(-1, 1) rotate(90.000000) translate(-1306.000000, -20.000000) " points="1286 10 1306.26184 30 1326 10.5169106"></polyline>
						            </g>
						        </g>
						    </g>
						</svg>
					</a>
				</div>
			</div>
		)
	}
}

export default Slider;
