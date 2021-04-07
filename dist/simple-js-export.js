/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	//SimpleJsExport
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"));
	//SimpleJsExport
	else if(typeof define === 'function' && define.amd)
		define(["fs"], factory);
	//SimpleJsExport
	else if(typeof exports === 'object')
		exports["SimpleJsExport"] = factory(require("fs"));
	//SimpleJsExport
	else
		root["SimpleJsExport"] = factory(root["fs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_fs__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/simple-js-export.js":
/*!*********************************!*\
  !*** ./src/simple-js-export.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultOptions\": () => (/* binding */ defaultOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst isNode = typeof window === \"undefined\"\r\nconst isFunction = (item) => {\r\n  return Object.prototype.toString.call(item) === \"[object Function]\"\r\n}\r\n\r\nconst browserDownload = function (csvContent, fileName) {\r\n  let blob = new Blob([csvContent], { type: \"text/csv;charset=utf-8;\" })\r\n  let link = document.createElement(\"a\")\r\n  let url = URL.createObjectURL(blob)\r\n  link.setAttribute(\"href\", url)\r\n  link.setAttribute(\"download\", fileName)\r\n  document.body.appendChild(link)\r\n  link.click()\r\n  document.body.removeChild(link)\r\n}\r\n\r\nconst nodeDownload = function (csvContent, fileName) {\r\n  const fs = __webpack_require__(/*! fs */ \"fs\")\r\n  fs.writeFileSync(fileName, csvContent)\r\n}\r\n\r\nconst download = function (csvContent, fileName) {\r\n  csvContent = \"\\ufeff\" + csvContent\r\n  console.log(isNode)\r\n  if (isNode) {\r\n    nodeDownload(csvContent, fileName)\r\n  } else {\r\n    browserDownload(csvContent, fileName)\r\n  }\r\n}\r\n\r\nconst exportCSV = function ({\r\n  data = [],\r\n  columns = [],\r\n  fileName = \"simple-js-export\",\r\n  delimiter = \",\",\r\n} = {}) {\r\n  if (!Array.isArray(data) || !Array.isArray(columns)) {\r\n    throw new TypeError(\"Data & Columns should be Array type\")\r\n  }\r\n  return {\r\n    options: { data, columns, fileName, delimiter },\r\n    save: function () {\r\n      if (typeof columns[0] == \"string\") {\r\n        let res = data.reduce((acc, item) => {\r\n          return (acc +=\r\n            Object.keys(item)\r\n              .map((i) => item[i])\r\n              .join(delimiter) + \"\\n\")\r\n        }, columns.join(delimiter) + \"\\n\")\r\n        download(res, fileName + \".csv\")\r\n      }\r\n      if (typeof columns[0] == \"object\") {\r\n        let res = data.reduce((acc, item) => {\r\n          columns.forEach((col) => {\r\n            if (isFunction(col.render)) {\r\n              acc = acc + `\"${col.render(item[col.dataIndex])}\"` + delimiter\r\n            } else {\r\n              acc = acc + `\"${item[col.dataIndex] || \"\"}\"` + delimiter\r\n            }\r\n          })\r\n          return (acc += \"\\n\")\r\n        }, columns.map((i) => i.title).join(delimiter) + \"\\n\")\r\n        download(res, fileName + \".csv\")\r\n      }\r\n    },\r\n  }\r\n}\r\n\r\nconst defaultOptions = exportCSV().options\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportCSV);\r\n\n\n//# sourceURL=webpack://SimpleJsExport/./src/simple-js-export.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/simple-js-export.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});