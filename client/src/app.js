import React from 'react';
import multipleRender from "react-multiple-render";
import Slider from './components/slider';
import SliderImgs from './components/sliderImgs';
import QuoFixed from './components/quo_fixed';

multipleRender(Slider, '.ra-slider');
multipleRender(QuoFixed, '.ra-quo-fixed');
