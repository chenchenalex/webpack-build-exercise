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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_jpeg__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_jpeg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__logo_jpeg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);




const text = document.createElement('div');

text.textContent = "Hello world and this is Monday!";

document.body.appendChild(text);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const a = 'source1';

/* unused harmony default export */ var _unused_webpack_default_export = (a);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map