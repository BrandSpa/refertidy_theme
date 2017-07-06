import React, { Component } from "react";

class SliderSlide extends Component {
  state = {
    mobile: false
  }

  componentDidMount() {
    if(window.innerWidth < 768) {
      this.setState({mobile: true});
    }
  }

  render() {
    const { mobile } = this.state;
		const { slide, slideWidth, current, index } = this.props;

    const slideStyle = {
			height: '100vh',
			width: '100%',
			position: 'absolute',
			top: '0',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
		};

    return (
      <section
        className={`slider__slide ${current == index
          ? "slider__slide--active"
          : ""}`
				}
        style={{ position: "relative", height: "100vh", width: slideWidth, float: 'left', backgroundColor: slide.bg_color }}
      >

      <div className="container ra-vertical-center ra-full-height ra-remove-vertical-center">
       <div className="slider__slide__content">
         <div dangerouslySetInnerHTML={{__html: slide.slide_content}} />
         <a href={slide.btn_link} className="slider__content__btn" style={{background: slide.btn_color}}>
          {slide.btn_txt}
         </a>
        </div>
      </div>

        <div
          className="lazyload"
          style={slideStyle}
          data-bgset={slide.bg_img}
        />

        <div
          className="slider__slide__model lazyload blur-up"
          style={slideStyle}
          data-bgset={`${slide.model_img_mobile} [(max-width: 767px)] | ${slide.model_img}`}
        />

        <div
          className="slider__slide__object lazyload blur-up"
          style={slideStyle}
          data-bgset={`${slide.object_img_mobile} [(max-width: 767px)] | ${slide.object_img}`}
        />

      </section>
    );
  }
}

export default SliderSlide;
