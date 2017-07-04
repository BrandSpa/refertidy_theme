import React from 'react';
import 'lazysizes/lazysizes.min.js';
import 'lazysizes/plugins/bgset/ls.bgset.min.js';
import multipleRender from "react-multiple-render";
import Slider from './components/slider';
import SliderImgs from './components/sliderImgs';
import QuoFixed from './components/quo_fixed';
import Contact from './components/contact';
import PostsSlider from './components/posts_slider';

multipleRender(Slider, '.ra-slider');
multipleRender(QuoFixed, '.ra-quo-fixed');
multipleRender(Contact, '.ra-contact');
multipleRender(PostsSlider, '.ra-posts-slider');
