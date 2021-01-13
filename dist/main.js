/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  //seletor\n  $('select').niceSelect(); // Sticky Menu\n\n  $(window).on('scroll', function () {\n    var scroll = $(window).scrollTop();\n\n    if (scroll < 5) {\n      $(\".header-bottom\").removeClass(\"sticky\");\n    } else {\n      $(\".header-bottom\").addClass(\"sticky\");\n    }\n  }); //testimonial_slider\n\n  $('.features-active').slick({\n    infinite: true,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    autoplay: true,\n    arrows: true,\n    autoplaySpeed: 2000,\n    prevArrow: '.features-wrapper .prev-arrow',\n    nextArrow: '.features-wrapper .next-arrow',\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  }); //Customersreview Slider\n\n  $('.customersreview-active').slick({\n    infinite: true,\n    slidesToShow: 2,\n    slidesToScroll: 1,\n    autoplay: false,\n    arrows: true,\n    autoplaySpeed: 2000,\n    prevArrow: '.customersreview-wrapper .prev-arrow',\n    nextArrow: '.customersreview-wrapper .next-arrow',\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  }); //Number Picker\n\n  $(\".wan-spinner-4\").WanSpinner({\n    inputWidth: 100\n  }).css(\"border-color\", \"#C0392B\"); //Product Details Slider\n\n  $(\"#exzoom\").exzoom({\n    // thumbnail nav options\n    \"navWidth\": 60,\n    \"navHeight\": 60,\n    \"navItemNum\": 5,\n    \"navItemMargin\": 7,\n    \"navBorder\": 0,\n    // autoplay\n    \"autoPlay\": false,\n    // autoplay interval in milliseconds\n    \"autoPlayTimeout\": 2000\n  }); //Active size\n\n  $('#sizes li').on('click', function () {\n    $(this).addClass('active').siblings().removeClass('active');\n  }); //Active color\n\n  $('#colors li').on('click', function () {\n    $(this).addClass('active').siblings().removeClass('active');\n  }); // sticky menu \n\n  var $window = $(window);\n  var $fh = $('header'); // Sticky Menu\n\n  $window.on('scroll', function () {\n    var $offset = $(this).scrollTop();\n\n    if ($offset > .5) {\n      $fh.addClass('sticky');\n    } else {\n      $fh.removeClass('sticky');\n    }\n  }); // scrollToTop\n\n  $.scrollUp({\n    scrollName: 'scrollUp',\n    // Element ID\n    topDistance: '300',\n    // Distance from top before showing element (px)\n    topSpeed: 300,\n    // Speed back to top (ms)\n    animation: 'fade',\n    // Fade, slide, none\n    animationInSpeed: 200,\n    // Animation in speed (ms)\n    animationOutSpeed: 200,\n    // Animation out speed (ms)\n    scrollText: '<i class=\"fas fa-angle-up\"></i>',\n    // Text for element\n    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'\n\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/main.scss */\"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/scss/main.scss?");

/***/ })

/******/ });