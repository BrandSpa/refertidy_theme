import React, { Component } from "react";

class SliderSlide extends Component {

  render() {
		const { slide, current, index } = this.props;
    return (
      <section
        className={`slider__slide ${current == index
          ? "slider__slide--active"
          : ""}`
				}
        style={{ position: "relative", height: "100vh" }}
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