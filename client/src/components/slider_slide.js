import React, { Component } from "react";

class SliderSlide extends Component {

  render() {
		const { slide, slideWidth, current, index } = this.props;
    const slideStyle = {
			height: '100vh', 
			width: '100%',
			position: 'absolute',
			top: '0'
		};

    return (
      <section
        className={`slider__slide ${current == index
          ? "slider__slide--active"
          : ""}`
				}
        style={{ position: "relative", height: "100vh", width: slideWidth }}
      >
        <div style={{ paddingTop: "200px", width: "500px" }}>
          {slide.slide_content}
        </div>

        <div
          style={{
            ...slideStyle,
            background: `url(${slide.bg_img}) center / cover no-repeat`
          }}
        />

        <div
          className="slider__slide__model"
          style={{
            ...slideStyle,
            background: `url(${slide.model_img}) right / cover no-repeat`
          }}
        />

        <div
          className="slider__slide__object"
          style={{
            ...slideStyle,
            background: `url(${slide.object_img}) right / cover no-repeat`
          }}
        />

      </section>
    );
  }
}

export default SliderSlide;