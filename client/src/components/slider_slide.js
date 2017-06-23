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
			top: '0'
		};

    return (
      <section
        className={`slider__slide ${current == index
          ? "slider__slide--active"
          : ""}`
				}
        style={{ position: "relative", height: "100vh", width: slideWidth, float: 'left' }}
      >
      <div className="container">
       <div className="slider__slide__content" style={{ width: "500px", position: "absolute", zIndex: '998' }}>
         <div dangerouslySetInnerHTML={{__html: slide.slide_content}} />
         <a href={slide.btn_link} className="slider__content__btn" style={{background: slide.btn_color}}>
          {slide.btn_txt}
         </a>
        </div>      
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
            background: `url(${mobile ? slide.model_img_mobile : slide.model_img}) center / cover no-repeat`
          }}
        />

        <div
          className="slider__slide__object"
          style={{
            ...slideStyle,
            background: `url(${mobile ? slide.object_img_mobile : slide.object_img}) center / cover no-repeat`
          }}
        />

      </section>
    );
  }
}

export default SliderSlide;