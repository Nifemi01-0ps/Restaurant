/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\r\n    const content = document.querySelector(\"#content\");\r\n    content.textContent = \"\";\r\n\r\n    const firstHeading = document.createElement(\"h1\");\r\n    firstHeading.textContent = \"About us\";\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.textContent = \"My Restaurant was founded with one mission to bring joy through food and craft dishes that delight your taste buds\";\r\n\r\n    const note = document.createElement(\"p\");\r\n    note.textContent = \"we can't wait to welcome you to my restaurant\";\r\n\r\n    content.appendChild(firstHeading);\r\n    content.appendChild(para);\r\n    content.appendChild(note);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _photo_2025_09_23_13_21_21_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo_2025-09-23_13-21-21.jpg */ \"./src/photo_2025-09-23_13-21-21.jpg\");\n\r\nfunction loadHome() {\r\n    const content = document.querySelector(\"#content\");\r\n    content.textContent = \"\";\r\n    //  first Heading\r\n    const firstHeading = document.createElement(\"h1\");\r\n    firstHeading.textContent = \"Welcome to my Restaurant page\";\r\n    // image\r\n    const image = document.createElement(\"img\");\r\n    image.src = _photo_2025_09_23_13_21_21_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    image.alt = \"image of restaurant\";\r\n    // paragraph\r\n    const para = document.createElement(\"p\");\r\n    para.textContent = \"At my restaurant we serve the finest dishes crafted with love , fresh ingredient and a touch of creativity\";\r\n\r\n    //  add them to content\r\n    content.appendChild(firstHeading);\r\n    content.appendChild(image);\r\n    content.appendChild(para);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\nalert(\"index.js is running\");\r\n\r\n\r\n\r\n\r\nfunction init() {\r\n    const homeBtn = document.querySelector(\"#home-btn\");\r\n    const menuBtn = document.querySelector(\"#menu-btn\");\r\n    const aboutBtn = document.querySelector(\"#about-btn\");\r\n    //  Default page\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    // Event listner \r\n    homeBtn.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    menuBtn.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n    aboutBtn.addEventListener(\"click\", _about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n    const content = document.querySelector(\"#content\");\r\n    content.textContent = \"\";\r\n    const firstHeading = document.createElement(\"h1\");\r\n    firstHeading.textContent = \"Our Menu\";\r\n    const list = document.createElement(\"ul\");\r\n\r\n    const items = [\"Spaghetti\", \"Vegetable\", \"Rice\", \"Bean\", \"Yam\"];\r\n    items.forEach((dish) => {\r\n        const li = document.createElement(\"li\");\r\n        li.textContent = dish;\r\n        list.appendChild(li);\r\n    });\r\n     content.appendChild(firstHeading);\r\n     content.appendChild(list);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/photo_2025-09-23_13-21-21.jpg":
/*!*******************************************!*\
  !*** ./src/photo_2025-09-23_13-21-21.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"42bd9b7d424ab434eceb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/photo_2025-09-23_13-21-21.jpg?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;