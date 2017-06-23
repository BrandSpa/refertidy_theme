webpackJsonp([0],{

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(62);

var _react2 = _interopRequireDefault(_react);

var _reactMultipleRender = __webpack_require__(199);

var _reactMultipleRender2 = _interopRequireDefault(_reactMultipleRender);

var _slider = __webpack_require__(509);

var _slider2 = _interopRequireDefault(_slider);

var _sliderImgs = __webpack_require__(511);

var _sliderImgs2 = _interopRequireDefault(_sliderImgs);

var _quo_fixed = __webpack_require__(512);

var _quo_fixed2 = _interopRequireDefault(_quo_fixed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactMultipleRender2.default)(_slider2.default, '.ra-slider');
(0, _reactMultipleRender2.default)(_quo_fixed2.default, '.ra-quo-fixed');

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(62);

var _react2 = _interopRequireDefault(_react);

var _slider_slide = __webpack_require__(510);

var _slider_slide2 = _interopRequireDefault(_slider_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
	_inherits(Slider, _Component);

	function Slider() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Slider);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			slide: 0
		}, _this.next = function (e) {
			if (e) e.preventDefault();
			var total = _this.props.slides.length - 1;
			var current = _this.state.slide;
			var slide = current < total ? current + 1 : 0;
			_this.setState({ slide: slide });
		}, _this.prev = function (e) {
			if (e) e.preventDefault();
			var total = _this.props.slides.length;
			var current = _this.state.slide;
			var slide = current > 0 ? current - 1 : 0;
			_this.setState({ slide: slide });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Slider, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var slides = this.props.slides;


			var viewportStyle = {
				width: 100 * slides.length + '%',
				transform: 'translate3d( -' + 100 / slides.length * this.state.slide + '%, 0, 0 )',
				transition: 'transform 500ms'
			};

			var slideWidth = 100 / slides.length + '%';

			return _react2.default.createElement(
				'div',
				{ className: 'slider', style: { position: 'relative', overflow: 'hidden' } },
				_react2.default.createElement(
					'div',
					{ className: 'slider__viewport', style: viewportStyle },
					slides.map(function (slide, i) {
						return _react2.default.createElement(_slider_slide2.default, {
							slide: slide,
							current: _this2.state.slide,
							index: i,
							slideWidth: slideWidth
						});
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'slider__btns' },
					_react2.default.createElement(
						'a',
						{ className: 'slider__btns__left', href: '#', onClick: this.prev },
						'<'
					),
					_react2.default.createElement(
						'a',
						{ className: 'slider__btns__right', href: '#', onClick: this.next },
						'>'
					)
				)
			);
		}
	}]);

	return Slider;
}(_react.Component);

exports.default = Slider;

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(62);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderSlide = function (_Component) {
  _inherits(SliderSlide, _Component);

  function SliderSlide() {
    _classCallCheck(this, SliderSlide);

    return _possibleConstructorReturn(this, (SliderSlide.__proto__ || Object.getPrototypeOf(SliderSlide)).apply(this, arguments));
  }

  _createClass(SliderSlide, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          slide = _props.slide,
          slideWidth = _props.slideWidth,
          current = _props.current,
          index = _props.index;


      var slideStyle = {
        height: '100vh',
        width: '100%',
        position: 'absolute',
        top: '0'
      };

      return _react2.default.createElement(
        'section',
        {
          className: 'slider__slide ' + (current == index ? "slider__slide--active" : ""),
          style: { position: "relative", height: "100vh", width: slideWidth, float: 'left' }
        },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'slider__slide__content', style: { width: "500px", position: "absolute", zIndex: '998' } },
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: slide.slide_content } }),
            _react2.default.createElement(
              'a',
              { href: slide.btn_link, className: 'slider__content__btn', style: { background: slide.btn_color } },
              slide.btn_txt
            )
          )
        ),
        _react2.default.createElement('div', {
          style: _extends({}, slideStyle, {
            background: 'url(' + slide.bg_img + ') center / cover no-repeat'
          })
        }),
        _react2.default.createElement('div', {
          className: 'slider__slide__model',
          style: _extends({}, slideStyle, {
            background: 'url(' + slide.model_img + ') right / cover no-repeat'
          })
        }),
        _react2.default.createElement('div', {
          className: 'slider__slide__object',
          style: _extends({}, slideStyle, {
            background: 'url(' + slide.object_img + ') right / cover no-repeat'
          })
        })
      );
    }
  }]);

  return SliderSlide;
}(_react.Component);

exports.default = SliderSlide;

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(62);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderImgs = function (_Component) {
	_inherits(SliderImgs, _Component);

	function SliderImgs() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, SliderImgs);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SliderImgs.__proto__ || Object.getPrototypeOf(SliderImgs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			slide: 1
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(SliderImgs, [{
		key: 'render',
		value: function render() {
			var slides = this.props.slides;

			var slideStyle = {
				height: '100vh',
				width: '100%',
				position: 'absolute',
				top: '0'
			};

			return _react2.default.createElement(
				'div',
				null,
				slides.map(function (slide) {
					return _react2.default.createElement(
						'div',
						{ style: { position: 'relative', height: '100vh' } },
						_react2.default.createElement(
							'div',
							{ style: slideStyle },
							_react2.default.createElement('img', { src: slide.bg_img, style: { width: '100%' } })
						),
						_react2.default.createElement(
							'div',
							{ style: slideStyle },
							_react2.default.createElement('img', { src: slide.model_img, style: { width: '100%' } })
						),
						_react2.default.createElement(
							'div',
							{ style: slideStyle },
							_react2.default.createElement('img', { src: slide.object_img, style: { width: '100%' } })
						),
						_react2.default.createElement(
							'div',
							{ style: { width: '30%', position: 'absolute', left: '0' } },
							_react2.default.createElement(
								'h2',
								null,
								slide.slide_content
							)
						)
					);
				})
			);
		}
	}]);

	return SliderImgs;
}(_react.Component);

exports.default = SliderImgs;

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (20:62)\n\n\u001b[0m \u001b[90m 18 | \u001b[39m\thandleSubmit \u001b[33m=\u001b[39m e \u001b[33m=>\u001b[39m {\n \u001b[90m 19 | \u001b[39m\t\t\u001b[36mconst\u001b[39m data \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdata\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 20 | \u001b[39m\t\t\u001b[36mconst\u001b[39m reqData \u001b[33m=\u001b[39m qs\u001b[33m.\u001b[39mstringify({action\u001b[33m:\u001b[39m \u001b[32m'store_contact'\u001b[39m\u001b[33m,\u001b[39m data}\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m\t\t                                                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 21 | \u001b[39m\n \u001b[90m 22 | \u001b[39m\t\trequest\u001b[33m.\u001b[39mpost(enpoint\u001b[33m,\u001b[39m reqData)\n \u001b[90m 23 | \u001b[39m\t\t\t\u001b[33m.\u001b[39mthen(({data}) \u001b[33m=>\u001b[39m {\u001b[0m\n");

/***/ })

},[508]);