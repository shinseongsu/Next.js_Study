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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n\nvar _jsxFileName = \"/Users/mac/Desktop/Nodejs/nextjs/ch3/next-todo/components/TodoList.tsx\";\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1t8agvw-0\"\n})([\"width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-round-color{width:16px;height:16px;border-radius:50%;}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gray);\n\nconst TodoList = ({\n  todos\n}) => {\n  const getTodoColorNums = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(() => {\n    let red = 0;\n    let orange = 0;\n    let yellow = 0;\n    let green = 0;\n    let blue = 0;\n    let navy = 0;\n    todos.forEach(todo => {\n      switch (todo.color) {\n        case \"red\":\n          red += 1;\n          break;\n\n        case \"orange\":\n          orange += 1;\n          break;\n\n        case \"yellow\":\n          yellow += 1;\n          break;\n\n        case \"green\":\n          green += 1;\n          break;\n\n        case \"blue\":\n          blue += 1;\n          break;\n\n        case \"navy\":\n          navy += 1;\n          break;\n\n        default:\n          break;\n      }\n    });\n    return {\n      red,\n      orange,\n      yellow,\n      green,\n      blue,\n      navy\n    };\n  }, [todos]);\n  const todoColorNums = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(getTodoColorNums, [todos]);\n  const todoColorNum2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(() => {\n    const colors = {};\n    todos.forEach(todo => {\n      const value = colors[todo.color];\n\n      if (!value) {\n        colors[`${todo.color}`] = 1;\n      } else {\n        colors[`${todo.color}`] = value + 1;\n      }\n    });\n    return colors;\n  }, [todos]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 166,\n          columnNumber: 29\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums).map((color, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"todo-list-header-color-num\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: `todo-list-round-color bg-${color}`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 171,\n            columnNumber: 29\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [todoColorNums[color], \"\\uAC1C\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 172,\n            columnNumber: 29\n          }, undefined)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 170,\n          columnNumber: 25\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 168,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(todo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        className: \"todo-item\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"todo-left-side\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: `todo-color-block bg-${todo.color}`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 181,\n            columnNumber: 29\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: `todo-text ${todo.checked ? \"checked-todo-text\" : \"\"}`,\n            children: todo.text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 182,\n            columnNumber: 29\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 180,\n          columnNumber: 25\n        }, undefined)\n      }, todo.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 179,\n        columnNumber: 21\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 163,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD8yMmY5Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInBhbGV0dGUiLCJncmF5IiwiYmx1ZSIsImdyZWVuIiwibmF2eSIsIm9yYW5nZSIsInJlZCIsInllbGxvdyIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwidXNlQ2FsbGJhY2siLCJmb3JFYWNoIiwidG9kbyIsImNvbG9yIiwidG9kb0NvbG9yTnVtcyIsInVzZU1lbW8iLCJ0b2RvQ29sb3JOdW0yIiwiY29sb3JzIiwidmFsdWUiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjaGVja2VkIiwidGV4dCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGk5QkFVb0JDLHVEQUFPLENBQUNDLElBVjVCLEVBeUNhRCx1REFBTyxDQUFDRSxJQXpDckIsRUE0Q2FGLHVEQUFPLENBQUNHLEtBNUNyQixFQStDYUgsdURBQU8sQ0FBQ0ksSUEvQ3JCLEVBa0RhSix1REFBTyxDQUFDSyxNQWxEckIsRUFxRGFMLHVEQUFPLENBQUNNLEdBckRyQixFQXdEYU4sdURBQU8sQ0FBQ08sTUF4RHJCLEVBa0V3QlAsdURBQU8sQ0FBQ0MsSUFsRWhDLEVBOEVjRCx1REFBTyxDQUFDQyxJQTlFdEIsQ0FBZjs7QUFrR0EsTUFBTU8sUUFBMEIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBRTlDLFFBQU1DLGdCQUFnQixHQUFHQyx5REFBVyxDQUFDLE1BQU07QUFDdkMsUUFBSUwsR0FBRyxHQUFHLENBQVY7QUFDQSxRQUFJRCxNQUFNLEdBQUcsQ0FBYjtBQUNBLFFBQUlFLE1BQU0sR0FBRyxDQUFiO0FBQ0EsUUFBSUosS0FBSyxHQUFHLENBQVo7QUFDQSxR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SUFBSSxDQUFDWSxPQUFMLEdBQWUsbUJBQWYsR0FBb0MsRUFBRyxFQURuRTtBQUFBLHNCQUVLWixJQUFJLENBQUNhO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUErQmIsSUFBSSxDQUFDYyxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQThCSCxDQXhGRDs7QUEwRmVuQix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9wYWxldHRlXCI7XG5pbXBvcnQgeyBUb2RvVHlwZXMgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLnRvZG8tbnVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxuXG4gICAgLnRvZG8tbGlzdC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG5cbiAgICAgICAgLnRvZG8tbGlzdC1sYXN0LXRvZG8ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudG9kby1saXN0LWhlYWRlci1jb2xvcnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvZG8tbGlzdC1yb3VuZC1jb2xvciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5iZy1ibHVlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJsdWV9O1xuICAgIH1cbiAgICAuYmctZ3JlZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xuICAgIH1cbiAgICAuYmctbmF2eSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcbiAgICB9XG4gICAgLmJnLW9yYW5nZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xuICAgIH1cbiAgICAuYmctcmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XG4gICAgfVxuICAgIC5iZy15ZWxsb3cge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcbiAgICB9XG5cbiAgICAudG9kby1saXN0IHtcbiAgICAgICAgLnRvZG8taXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcblxuICAgICAgICAgICAgLnRvZG8tbGVmdC1zaWRlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIC50b2RvLWNvbG9yLWJsb2NrIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNoZWNrZWQtdG9kby10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50b2RvLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHRvZG9zOiBUb2RvVHlwZXNbXTtcbn1cblxudHlwZSBPYmplY3RJbmRleFR5cGUgPSB7XG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfSkgPT4ge1xuXG4gICAgY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgbGV0IHJlZCA9IDA7XG4gICAgICAgIGxldCBvcmFuZ2UgPSAwO1xuICAgICAgICBsZXQgeWVsbG93ID0gMDtcbiAgICAgICAgbGV0IGdyZWVuID0gMDtcbiAgICAgICAgbGV0IGJsdWUgPSAwO1xuICAgICAgICBsZXQgbmF2eSA9IDA7XG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodG9kby5jb2xvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvcmFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgb3JhbmdlICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcbiAgICAgICAgICAgICAgICAgICAgeWVsbG93ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgICAgICAgICAgICAgICBncmVlbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxuICAgICAgICAgICAgICAgICAgICBibHVlICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJuYXZ5XCI6XG4gICAgICAgICAgICAgICAgICAgIG5hdnkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVkLFxuICAgICAgICAgICAgb3JhbmdlLFxuICAgICAgICAgICAgeWVsbG93LFxuICAgICAgICAgICAgZ3JlZW4sXG4gICAgICAgICAgICBibHVlLFxuICAgICAgICAgICAgbmF2eVxuICAgICAgICB9O1xuICAgIH0sIFt0b2Rvc10pO1xuICAgIGNvbnN0IHRvZG9Db2xvck51bXMgPSB1c2VNZW1vKGdldFRvZG9Db2xvck51bXMsIFt0b2Rvc10pO1xuXG4gICAgY29uc3QgdG9kb0NvbG9yTnVtMiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBjb2xvcnM6IE9iamVjdEluZGV4VHlwZSA9IHt9O1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbG9yc1t0b2RvLmNvbG9yXTtcbiAgICAgICAgICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSB2YWx1ZSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29sb3JzO1xuICAgIH0sIFt0b2Rvc10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1sYXN0LXRvZG9cIj5cbiAgICAgICAgICAgICAgICAgICAg64Ko7J2AIFRPRE8gPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlci1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRvZG9Db2xvck51bXMpLm1hcCgoY29sb3IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWxpc3Qtcm91bmQtY29sb3IgYmctJHtjb2xvcn1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0b2RvQ29sb3JOdW1zW2NvbG9yXX3qsJw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b2RvLWxpc3RcIj5cbiAgICAgICAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0b2RvLWl0ZW1cIiBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxlZnQtc2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1jb2xvci1ibG9jayBiZy0ke3RvZG8uY29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0b2RvLXRleHQgJHt0b2RvLmNoZWNrZWQgPyBcImNoZWNrZWQtdG9kby10ZXh0XCI6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList.tsx\");\n\nvar _jsxFileName = \"/Users/mac/Desktop/Nodejs/nextjs/ch3/next-todo/pages/index.tsx\";\n\n\nconst todos = [{\n  id: 1,\n  text: \"마트 가서 장보기\",\n  color: \"red\",\n  checked: false\n}, {\n  id: 2,\n  text: \"수학 숙제하기\",\n  color: \"orange\",\n  checked: false\n}, {\n  id: 3,\n  text: \"코딩하기\",\n  color: \"yellow\",\n  checked: true\n}, {\n  id: 4,\n  text: \"넥스트 공부하기\",\n  color: \"green\",\n  checked: true\n}, {\n  id: 5,\n  text: \"요리 연습하기\",\n  color: \"blue\",\n  checked: false\n}, {\n  id: 6,\n  text: \"분리수거 하기\",\n  color: \"navy\",\n  checked: false\n}];\n\nconst app = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    todos: todos\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJ0b2RvcyIsImlkIiwidGV4dCIsImNvbG9yIiwiY2hlY2tlZCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBR0EsTUFBTUEsS0FBa0IsR0FBRyxDQUN2QjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsV0FBZjtBQUE0QkMsT0FBSyxFQUFFLEtBQW5DO0FBQTBDQyxTQUFPLEVBQUU7QUFBbkQsQ0FEdUIsRUFFdkI7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFNBQWY7QUFBMEJDLE9BQUssRUFBRSxRQUFqQztBQUEyQ0MsU0FBTyxFQUFFO0FBQXBELENBRnVCLEVBR3ZCO0FBQUVILElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxNQUFmO0FBQXVCQyxPQUFLLEVBQUUsUUFBOUI7QUFBd0NDLFNBQU8sRUFBRTtBQUFqRCxDQUh1QixFQUl2QjtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsVUFBZjtBQUEyQkMsT0FBSyxFQUFFLE9BQWxDO0FBQTJDQyxTQUFPLEVBQUU7QUFBcEQsQ0FKdUIsRUFLdkI7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFNBQWY7QUFBMEJDLE9BQUssRUFBRSxNQUFqQztBQUF5Q0MsU0FBTyxFQUFFO0FBQWxELENBTHVCLEVBTXZCO0FBQUVILElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxPQUFLLEVBQUUsTUFBakM7QUFBeUNDLFNBQU8sRUFBRTtBQUFsRCxDQU51QixDQUEzQjs7QUFTQSxNQUFNQyxHQUFhLEdBQUcsTUFBTTtBQUN4QixzQkFBTyxxRUFBQyw0REFBRDtBQUFVLFNBQUssRUFBRUw7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsQ0FGRDs7QUFJZUssa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcbmltcG9ydCB7IFRvZG9UeXBlcyB9IGZyb20gXCIuLi90eXBlcy90b2RvXCI7XG5cbmNvbnN0IHRvZG9zOiBUb2RvVHlwZXNbXSA9IFtcbiAgICB7IGlkOiAxLCB0ZXh0OiBcIuuniO2KuCDqsIDshJwg7J6l67O06riwXCIsIGNvbG9yOiBcInJlZFwiLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgIHsgaWQ6IDIsIHRleHQ6IFwi7IiY7ZWZIOyImeygnO2VmOq4sFwiLCBjb2xvcjogXCJvcmFuZ2VcIiwgY2hlY2tlZDogZmFsc2UgfSxcbiAgICB7IGlkOiAzLCB0ZXh0OiBcIuy9lOuUqe2VmOq4sFwiLCBjb2xvcjogXCJ5ZWxsb3dcIiwgY2hlY2tlZDogdHJ1ZX0sXG4gICAgeyBpZDogNCwgdGV4dDogXCLrhKXsiqTtirgg6rO167aA7ZWY6riwXCIsIGNvbG9yOiBcImdyZWVuXCIsIGNoZWNrZWQ6IHRydWV9LFxuICAgIHsgaWQ6IDUsIHRleHQ6IFwi7JqU66asIOyXsOyKte2VmOq4sFwiLCBjb2xvcjogXCJibHVlXCIsIGNoZWNrZWQ6IGZhbHNlfSxcbiAgICB7IGlkOiA2LCB0ZXh0OiBcIuu2hOumrOyImOqxsCDtlZjquLBcIiwgY29sb3I6IFwibmF2eVwiLCBjaGVja2VkOiBmYWxzZSB9LFxuXTtcblxuY29uc3QgYXBwOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gPFRvZG9MaXN0IHRvZG9zPXt0b2Rvc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  red: \"#FFAFB0\",\n  orange: \"#FFC282\",\n  yellow: \"#FCFFB0\",\n  green: \"#E2FFAF\",\n  blue: \"#AEE4FF\",\n  navy: \"#B5C7ED\",\n  gray: \"#E5E5E5\",\n  deeo_red: \"#F35456\",\n  deep_green: \"#47E774\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvcGFsZXR0ZS50cz83ZDVjIl0sIm5hbWVzIjpbInJlZCIsIm9yYW5nZSIsInllbGxvdyIsImdyZWVuIiwiYmx1ZSIsIm5hdnkiLCJncmF5IiwiZGVlb19yZWQiLCJkZWVwX2dyZWVuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ1hBLEtBQUcsRUFBRSxTQURNO0FBRVhDLFFBQU0sRUFBRSxTQUZHO0FBR1hDLFFBQU0sRUFBRSxTQUhHO0FBSVhDLE9BQUssRUFBRSxTQUpJO0FBS1hDLE1BQUksRUFBRSxTQUxLO0FBTVhDLE1BQUksRUFBRSxTQU5LO0FBT1hDLE1BQUksRUFBRSxTQVBLO0FBUVhDLFVBQVEsRUFBRSxTQVJDO0FBU1hDLFlBQVUsRUFBRTtBQVRELENBQWYiLCJmaWxlIjoiLi9zdHlsZXMvcGFsZXR0ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICByZWQ6IFwiI0ZGQUZCMFwiLFxuICAgIG9yYW5nZTogXCIjRkZDMjgyXCIsXG4gICAgeWVsbG93OiBcIiNGQ0ZGQjBcIixcbiAgICBncmVlbjogXCIjRTJGRkFGXCIsXG4gICAgYmx1ZTogXCIjQUVFNEZGXCIsXG4gICAgbmF2eTogXCIjQjVDN0VEXCIsXG4gICAgZ3JheTogXCIjRTVFNUU1XCIsXG4gICAgZGVlb19yZWQ6IFwiI0YzNTQ1NlwiLFxuICAgIGRlZXBfZ3JlZW46IFwiIzQ3RTc3NFwiXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/palette.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });