module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ \"react-icons/io\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/mac/Desktop/Nodejs/nextjs/ch2/next-app2/components/Header.jsx\";\n\n\n\n\nconst HeaderCss = new String(\".header-wrapper.jsx-1922051808{padding:14px 14px;background-color:#24292e;line-height:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-search-form.jsx-1922051808 input.jsx-1922051808{margin:0px 16px;background-color:hsla(0,0%,100%,0.125);width:300px;height:28px;border:none;border-radius:5px;outline:none;color:white;padding:0px 12px;font-size:14px;font-weight:bold;}.header-navagations.jsx-1922051808 a.jsx-1922051808{color:white;margin-right:16px;font-size:14px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9Ob2RlanMvbmV4dGpzL2NoMi9uZXh0LWFwcDIvY29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtxQixBQUd1QixBQVFGLEFBY0osWUFDTSxJQWR3QixFQVJqQixZQXVCVixhQXRCRCxFQXVCRyxVQWZMLEVBUEMsS0F1QlEsS0FmVCxZQUNBLFlBQ00sa0JBQ0wsR0FhZixVQVpjLFNBWE8sR0FZRixpQkFDRixlQUNFLGlCQUNuQix5Q0FkQSIsImZpbGUiOiIvVXNlcnMvbWFjL0Rlc2t0b3AvTm9kZWpzL25leHRqcy9jaDIvbmV4dC1hcHAyL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuaW1wb3J0IHsgSW9Mb2dvR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIZWFkZXJDc3MgPSBjc3NgXG4gIC5oZWFkZXItd3JhcHBlciB7XG4gICAgcGFkZGluZzogMTRweCAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmhlYWRlci1zZWFyY2gtZm9ybSBpbnB1dCB7XG4gICAgbWFyZ2luOiAwcHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjEyNSk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5oZWFkZXItbmF2YWdhdGlvbnMgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByb3V0ZXIucHVzaChgL3VzZXJzLyR7dXNlcm5hbWV9YCk7XG4gICAgc2V0VXNlcm5hbWUoJycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cbiAgICAgICAgPElvTG9nb0dpdGh1YiBjb2xvcj1cIndoaXRlXCIgc2l6ZT17MzZ9IC8+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2gtZm9ybVwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmFnYXRpb25zXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wdWxsc1wiPlB1bGwgcmVxdWVzdHM8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pc3N1ZXNcIj5Jc3N1ZXM8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZXRwbGFjZVwiPk1hcmtldHBsYWNlPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZXhwbG9yZVwiPkV4cGxvcmU8L2E+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntIZWFkZXJDc3N9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\\n/*@ sourceURL=/Users/mac/Desktop/Nodejs/nextjs/ch2/next-app2/components/Header.jsx */\");\nHeaderCss.__hash = \"1922051808\";\n\nconst Header = () => {\n  const {\n    0: username,\n    1: setUsername\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  const onSubmit = e => {\n    e.preventDefault();\n    router.push(`/users/${username}`);\n    setUsername('');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: `jsx-${HeaderCss.__hash}`,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: `jsx-${HeaderCss.__hash}` + \" \" + \"header-wrapper\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_3__[\"IoLogoGithub\"], {\n        color: \"white\",\n        size: 36\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: onSubmit,\n        className: `jsx-${HeaderCss.__hash}` + \" \" + \"header-search-form\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          value: username,\n          onChange: e => setUsername(e.target.value),\n          className: `jsx-${HeaderCss.__hash}`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: `jsx-${HeaderCss.__hash}` + \" \" + \"header-navagations\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/pulls\",\n          className: `jsx-${HeaderCss.__hash}`,\n          children: \"Pull requests\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/issues\",\n          className: `jsx-${HeaderCss.__hash}`,\n          children: \"Issues\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/marketplace\",\n          className: `jsx-${HeaderCss.__hash}`,\n          children: \"Marketplace\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/explore\",\n          className: `jsx-${HeaderCss.__hash}`,\n          children: \"Explore\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: HeaderCss.__hash,\n      children: HeaderCss\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qc3g/MGEwOCJdLCJuYW1lcyI6WyJIZWFkZXJDc3MiLCJIZWFkZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLGttSEFBZjs7O0FBZ0NBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxRQUFNQyxRQUFRLEdBQUlDLENBQUQsSUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FKLFVBQU0sQ0FBQ0ssSUFBUCxDQUFhLFVBQVNSLFFBQVMsRUFBL0I7QUFDQUMsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBQTtBQUFBLDRCQUNFO0FBQUEsbURBQWUsZ0JBQWY7QUFBQSw4QkFDRSxxRUFBQywyREFBRDtBQUFjLGFBQUssRUFBQyxPQUFwQjtBQUE0QixZQUFJLEVBQUU7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQXFDLGdCQUFRLEVBQUVJLFFBQS9DO0FBQUEscURBQWdCLG9CQUFoQjtBQUFBLCtCQUNFO0FBQ0UsZUFBSyxFQUFFTCxRQURUO0FBRUUsa0JBQVEsRUFBR00sQ0FBRCxJQUFPTCxXQUFXLENBQUNLLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVFFO0FBQUEscURBQWUsb0JBQWY7QUFBQSxnQ0FDRTtBQUFHLGNBQUksRUFBQywwQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBRyxjQUFJLEVBQUMsMkJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUcsY0FBSSxFQUFDLGdDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRTtBQUFHLGNBQUksRUFBQyw0QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsQ0E3QkQ7O0FBK0JlWCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuaW1wb3J0IHsgSW9Mb2dvR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIZWFkZXJDc3MgPSBjc3NgXG4gIC5oZWFkZXItd3JhcHBlciB7XG4gICAgcGFkZGluZzogMTRweCAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmhlYWRlci1zZWFyY2gtZm9ybSBpbnB1dCB7XG4gICAgbWFyZ2luOiAwcHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjEyNSk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5oZWFkZXItbmF2YWdhdGlvbnMgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByb3V0ZXIucHVzaChgL3VzZXJzLyR7dXNlcm5hbWV9YCk7XG4gICAgc2V0VXNlcm5hbWUoJycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cbiAgICAgICAgPElvTG9nb0dpdGh1YiBjb2xvcj1cIndoaXRlXCIgc2l6ZT17MzZ9IC8+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2gtZm9ybVwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmFnYXRpb25zXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wdWxsc1wiPlB1bGwgcmVxdWVzdHM8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pc3N1ZXNcIj5Jc3N1ZXM8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZXRwbGFjZVwiPk1hcmtldHBsYWNlPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZXhwbG9yZVwiPkV4cGxvcmU8L2E+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntIZWFkZXJDc3N9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n\n\nvar _jsxFileName = \"/Users/mac/Desktop/Nodejs/nextjs/ch2/next-app2/pages/_app.jsx\";\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n      className: \"jsx-903634984\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"903634984\",\n      children: \"body{margin:0;font-family:Noto Sans,Noto Sans KR;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9Ob2RlanMvbmV4dGpzL2NoMi9uZXh0LWFwcDIvcGFnZXMvX2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVMsQUFHc0IsU0FDMkIsbUNBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy9tYWMvRGVza3RvcC9Ob2RlanMvbmV4dGpzL2NoMi9uZXh0LWFwcDIvcGFnZXMvX2FwcC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE5vdG8gU2FucywgTm90byBTYW5zIEtSO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdfQ== */\\n/*@ sourceURL=/Users/mac/Desktop/Nodejs/nextjs/ch2/next-app2/pages/_app.jsx */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD82MGQzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQzFDLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLFNBQUQsa0NBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQWNELENBZkQ7O0FBaUJlRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMsIE5vdG8gU2FucyBLUjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/io\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiPzc0NTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/io\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });