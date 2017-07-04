import React from 'react';

import 'lazysizes/lazysizes.min.js';
import 'lazysizes/plugins/bgset/ls.bgset.min.js';

import multipleRender from "react-multiple-render";
import Slider from './components/slider';
import SliderImgs from './components/sliderImgs';
import QuotationFormFixed from './components/quotation_form_fixed';
import Contact from './components/contact';
import PostsSlider from './components/posts_slider';

multipleRender(Slider, '.ra-slider');

multipleRender(QuotationFormFixed, '.ra-quotation-form-fixed');

multipleRender(Contact, '.ra-contact');

multipleRender(PostsSlider, '.ra-posts-slider');
