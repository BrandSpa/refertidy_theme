import React, { Component } from "react";
import anime from 'animejs';

// from http://www.quirksmode.org/js/events_properties.html#position
const getMousePos = function(ev) {
  let posx = 0;
  let posy = 0;
  if (!ev) ev = window.event;
  if (ev.pageX || ev.pageY) 	{
    posx = ev.pageX;
    posy = ev.pageY;
  }
  else if (ev.clientX || ev.clientY) 	{
    posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  console.log({ x : posx, y : posy });
  return { x : posx, y : posy };
};

class SliderSlide extends Component {
  state = {
    mobile: false
  }

  componentDidMount() {
    if(window.innerWidth < 768) {
      this.setState({mobile: true});
    }

    const docScrolls = {
			left : document.body.scrollLeft + document.documentElement.scrollLeft,
			top : document.body.scrollTop + document.documentElement.scrollTop
		};

    const x = 30;
    const y = 50;

    this.el.addEventListener('mousemove', () => {
      requestAnimationFrame(() => {
        let mousepos = getMousePos(this.obj_img);
        const bounds = this.obj_img.getBoundingClientRect();
        const relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top };
        const moveX = ( -1 * x - x ) / bounds.width * relmousepos.x + x;
        const moveY = ( -1 * y - y ) / bounds.height * relmousepos.y + y;
        console.log(mousepos, relmousepos);
        this.obj_img.style.transform = `translate(${moveX}px, ${moveY}px)`;
      })

    });


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
        ref={el => this.el = el}
        className={`slider__slide ${current == index
          ? "slider__slide--active"
          : ""}`
				}
        style={{ position: "relative", height: "100vh", width: slideWidth, float: 'left', backgroundColor: slide.bg_color }}
      >

      <div className="container ra-vertical-center ra-full-height ra-remove-vertical-center">
       <div className="slider__slide__content">
         <div dangerouslySetInnerHTML={{__html: slide.slide_content}} />
         <a href={slide.btn_link} className="btn" style={{background: slide.btn_color}}>
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
          ref={obj_img => this.obj_img = obj_img}
          className="slider__slide__object lazyload blur-up"
          style={slideStyle}
          data-bgset={`${slide.object_img_mobile} [(max-width: 767px)] | ${slide.object_img}`}
        />

      </section>
    );
  }
}

export default SliderSlide;
