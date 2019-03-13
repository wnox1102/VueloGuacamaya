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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/argon.js":
/*!****************************!*\
  !*** ./public/js/argon.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!

=========================================================
* Argon Design System - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2018 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


$(document).ready(function () {
  // Collapse navigation
  $('.navbar-main .collapse').on('hide.bs.collapse', function () {
    var $this = $(this);
    $this.addClass('collapsing-out');
  });
  $('.navbar-main .collapse').on('hidden.bs.collapse', function () {
    var $this = $(this);
    $this.removeClass('collapsing-out');
  });
  $('.navbar-main .dropdown').on('hide.bs.dropdown', function () {
    var $this = $(this).find('.dropdown-menu');
    $this.addClass('close');
    setTimeout(function () {
      $this.removeClass('close');
    }, 200);
  }); // Headroom - show/hide navbar on scroll

  if ($('.headroom')[0]) {
    var headroom = new Headroom(document.querySelector("#navbar-main"), {
      offset: 300,
      tolerance: {
        up: 30,
        down: 30
      }
    });
    headroom.init();
  } // Datepicker


  $('.datepicker')[0] && $('.datepicker').each(function () {
    $('.datepicker').datepicker({
      disableTouchKeyboard: true,
      autoclose: false
    });
  }); // Tooltip

  $('[data-toggle="tooltip"]').tooltip(); // Popover

  $('[data-toggle="popover"]').each(function () {
    var popoverClass = '';

    if ($(this).data('color')) {
      popoverClass = 'popover-' + $(this).data('color');
    }

    $(this).popover({
      trigger: 'focus',
      template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
  }); // Additional .focus class on form-groups

  $('.form-control').on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('focused', e.type === 'focus' || this.value.length > 0);
  }).trigger('blur'); // NoUI Slider

  if ($(".input-slider-container")[0]) {
    $('.input-slider-container').each(function () {
      var slider = $(this).find('.input-slider');
      var sliderId = slider.attr('id');
      var minValue = slider.data('range-value-min');
      var maxValue = slider.data('range-value-max');
      var sliderValue = $(this).find('.range-slider-value');
      var sliderValueId = sliderValue.attr('id');
      var startValue = sliderValue.data('range-value-low');
      var c = document.getElementById(sliderId),
          d = document.getElementById(sliderValueId);
      noUiSlider.create(c, {
        start: [parseInt(startValue)],
        connect: [true, false],
        //step: 1000,
        range: {
          'min': [parseInt(minValue)],
          'max': [parseInt(maxValue)]
        }
      });
      c.noUiSlider.on('update', function (a, b) {
        d.textContent = a[b];
      });
    });
  }

  if ($("#input-slider-range")[0]) {
    var c = document.getElementById("input-slider-range"),
        d = document.getElementById("input-slider-range-value-low"),
        e = document.getElementById("input-slider-range-value-high"),
        f = [d, e];
    noUiSlider.create(c, {
      start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
      connect: !0,
      range: {
        min: parseInt(c.getAttribute('data-range-value-min')),
        max: parseInt(c.getAttribute('data-range-value-max'))
      }
    }), c.noUiSlider.on("update", function (a, b) {
      f[b].textContent = a[b];
    });
  } // When in viewport


  $('[data-toggle="on-screen"]')[0] && $('[data-toggle="on-screen"]').onScreen({
    container: window,
    direction: 'vertical',
    doIn: function doIn() {//alert();
    },
    doOut: function doOut() {// Do something to the matched elements as they get off scren
    },
    tolerance: 200,
    throttle: 50,
    toggleClass: 'on-screen',
    debug: false
  }); // Scroll to anchor with scroll animation

  $('[data-toggle="scroll"]').on('click', function (event) {
    var hash = $(this).attr('href');
    var offset = $(this).data('offset') ? $(this).data('offset') : 0; // Animate scroll to the selected section

    $('html, body').stop(true, true).animate({
      scrollTop: $(hash).offset().top - offset
    }, 600);
    event.preventDefault();
  });
});

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ "./public/sass/styles.scss");
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _argon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./argon */ "./public/js/argon.js");
/* harmony import */ var _argon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_argon__WEBPACK_IMPORTED_MODULE_1__);


console.log("Hello");

/***/ }),

/***/ "./public/sass/styles.scss":
/*!*********************************!*\
  !*** ./public/sass/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map