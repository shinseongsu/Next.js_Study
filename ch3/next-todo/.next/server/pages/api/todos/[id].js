module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/todos/[id].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./lib/data/todo.ts\");\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGF0YS9pbmRleC50cz8yMjNlIl0sIm5hbWVzIjpbIkRhdGEiLCJ0b2RvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxJQUFJLEdBQUc7QUFBRUMscURBQUlBO0FBQU4sQ0FBYjtBQUVlRCxtRUFBZiIsImZpbGUiOiIuL2xpYi9kYXRhL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5jb25zdCBEYXRhID0geyB0b2RvIH07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/data/index.ts\n");

/***/ }),

/***/ "./lib/data/todo.ts":
/*!**************************!*\
  !*** ./lib/data/todo.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getList = () => {\n  const todosBuffer = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"readFileSync\"])(\"data/todos.json\");\n  const todosString = todosBuffer.toString();\n\n  if (!todosString) {\n    return [];\n  }\n\n  const todos = JSON.parse(todosString);\n  return todos;\n};\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList();\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n}; // TodoList 쓰기\n\n\nconst write = async todos => {\n  Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"writeFileSync\"])(\"data/todos.json\", JSON.stringify(todos));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGF0YS90b2RvLnRzPzY3NTgiXSwibmFtZXMiOlsiZ2V0TGlzdCIsInRvZG9zQnVmZmVyIiwicmVhZEZpbGVTeW5jIiwidG9kb3NTdHJpbmciLCJ0b1N0cmluZyIsInRvZG9zIiwiSlNPTiIsInBhcnNlIiwiZXhpc3QiLCJpZCIsInRvZG8iLCJzb21lIiwid3JpdGUiLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNsQixRQUFNQyxXQUFXLEdBQUdDLHVEQUFZLENBQUMsaUJBQUQsQ0FBaEM7QUFDQSxRQUFNQyxXQUFXLEdBQUdGLFdBQVcsQ0FBQ0csUUFBWixFQUFwQjs7QUFDQSxNQUFHLENBQUNELFdBQUosRUFBaUI7QUFDYixXQUFPLEVBQVA7QUFDSDs7QUFDRCxRQUFNRSxLQUFrQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osV0FBWCxDQUEzQjtBQUNBLFNBQU9FLEtBQVA7QUFDSCxDQVJEOztBQVVBLE1BQU1HLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUE2QjtBQUN2QyxRQUFNSixLQUFLLEdBQUdMLE9BQU8sRUFBckI7QUFDQSxRQUFNVSxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sSUFBTixDQUFZRCxJQUFELElBQVVBLElBQUksQ0FBQ0QsRUFBTCxLQUFZQSxFQUFqQyxDQUFiO0FBQ0EsU0FBT0MsSUFBUDtBQUNILENBSkQsQyxDQU1BOzs7QUFDQSxNQUFNRSxLQUFLLEdBQUcsTUFBT1AsS0FBUCxJQUE4QjtBQUN4Q1EsMERBQWEsQ0FBQyxpQkFBRCxFQUFvQlAsSUFBSSxDQUFDUSxTQUFMLENBQWVULEtBQWYsQ0FBcEIsQ0FBYjtBQUNILENBRkQ7O0FBSWU7QUFBRUwsU0FBRjtBQUFXUSxPQUFYO0FBQWtCSTtBQUFsQixDQUFmIiwiZmlsZSI6Ii4vbGliL2RhdGEvdG9kby50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgVG9kb1R5cGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3RvZG9cIjtcblxuY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB0b2Rvc0J1ZmZlciA9IHJlYWRGaWxlU3luYyhcImRhdGEvdG9kb3MuanNvblwiKTtcbiAgICBjb25zdCB0b2Rvc1N0cmluZyA9IHRvZG9zQnVmZmVyLnRvU3RyaW5nKCk7XG4gICAgaWYoIXRvZG9zU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgdG9kb3M6IFRvZG9UeXBlc1tdID0gSlNPTi5wYXJzZSh0b2Rvc1N0cmluZyk7XG4gICAgcmV0dXJuIHRvZG9zO1xufTtcblxuY29uc3QgZXhpc3QgPSAoeyBpZCB9IDogeyBpZCA6IG51bWJlcn0pID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IGdldExpc3QoKTtcbiAgICBjb25zdCB0b2RvID0gdG9kb3Muc29tZSgodG9kbykgPT4gdG9kby5pZCA9PT0gaWQpO1xuICAgIHJldHVybiB0b2RvO1xufVxuXG4vLyBUb2RvTGlzdCDsk7DquLBcbmNvbnN0IHdyaXRlID0gYXN5bmMgKHRvZG9zOiBUb2RvVHlwZXNbXSkgPT4ge1xuICAgIHdyaXRlRmlsZVN5bmMoXCJkYXRhL3RvZG9zLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBnZXRMaXN0LCBleGlzdCwgd3JpdGUgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/data/todo.ts\n");

/***/ }),

/***/ "./pages/api/todos/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"./lib/data/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === \"PATCH\") {\n    try {\n      const todoId = Number(req.query.id);\n      const todo = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.exist({\n        id: todoId\n      });\n\n      if (!todo) {\n        res.statusCode = 404;\n        res.end();\n      }\n\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      const changedTodos = todos.map(todo => {\n        if (todo.id === todoId) {\n          return _objectSpread(_objectSpread({}, todo), {}, {\n            checked: !todo.checked\n          });\n        }\n\n        return todo;\n      });\n      _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write(changedTodos);\n      res.statusCode = 200;\n      res.end();\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  res.statusCode = 405;\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdG9kb3MvLnRzPzk3ZWQiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwidG9kb0lkIiwiTnVtYmVyIiwicXVlcnkiLCJpZCIsInRvZG8iLCJEYXRhIiwiZXhpc3QiLCJzdGF0dXNDb2RlIiwiZW5kIiwidG9kb3MiLCJnZXRMaXN0IiwiY2hhbmdlZFRvZG9zIiwibWFwIiwiY2hlY2tlZCIsIndyaXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBRWUsc0VBQU9BLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2hFLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE9BQWxCLEVBQTJCO0FBQ3ZCLFFBQUk7QUFDQSxZQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0osR0FBRyxDQUFDSyxLQUFKLENBQVVDLEVBQVgsQ0FBckI7QUFDQSxZQUFNQyxJQUFJLEdBQUdDLGlEQUFJLENBQUNELElBQUwsQ0FBVUUsS0FBVixDQUFnQjtBQUFFSCxVQUFFLEVBQUdIO0FBQVAsT0FBaEIsQ0FBYjs7QUFDQSxVQUFJLENBQUNJLElBQUwsRUFBVztBQUNQTixXQUFHLENBQUNTLFVBQUosR0FBaUIsR0FBakI7QUFDQVQsV0FBRyxDQUFDVSxHQUFKO0FBQ0g7O0FBRUQsWUFBTUMsS0FBSyxHQUFHSixpREFBSSxDQUFDRCxJQUFMLENBQVVNLE9BQVYsRUFBZDtBQUNBLFlBQU1DLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVdSLElBQUQsSUFBVTtBQUNyQyxZQUFHQSxJQUFJLENBQUNELEVBQUwsS0FBWUgsTUFBZixFQUF1QjtBQUNuQixpREFBWUksSUFBWjtBQUFrQlMsbUJBQU8sRUFBRSxDQUFDVCxJQUFJLENBQUNTO0FBQWpDO0FBQ0g7O0FBQ0QsZUFBT1QsSUFBUDtBQUNILE9BTG9CLENBQXJCO0FBTUFDLHVEQUFJLENBQUNELElBQUwsQ0FBVVUsS0FBVixDQUFnQkgsWUFBaEI7QUFDQWIsU0FBRyxDQUFDUyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FULFNBQUcsQ0FBQ1UsR0FBSjtBQUVILEtBbkJELENBbUJFLE9BQU9PLENBQVAsRUFBVTtBQUNSQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBakIsU0FBRyxDQUFDUyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FULFNBQUcsQ0FBQ29CLElBQUosQ0FBU0gsQ0FBVDtBQUNIO0FBQ0o7O0FBQ0RqQixLQUFHLENBQUNTLFVBQUosR0FBaUIsR0FBakI7QUFDQSxTQUFPVCxHQUFHLENBQUNVLEdBQUosRUFBUDtBQUNILENBN0JEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3RvZG9zL1tpZF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICBpZihyZXEubWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IE51bWJlcihyZXEucXVlcnkuaWQpO1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IERhdGEudG9kby5leGlzdCh7IGlkIDogdG9kb0lkIH0pO1xuICAgICAgICAgICAgaWYgKCF0b2RvKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XG4gICAgICAgICAgICAgICAgcmVzLmVuZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0b2RvcyA9IERhdGEudG9kby5nZXRMaXN0KCk7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VkVG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBpZih0b2RvLmlkID09PSB0b2RvSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4udG9kbywgY2hlY2tlZDogIXRvZG8uY2hlY2tlZH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0b2RvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBEYXRhLnRvZG8ud3JpdGUoY2hhbmdlZFRvZG9zKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgICAgICAgcmVzLmVuZCgpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICByZXMuc2VuZChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcbiAgICByZXR1cm4gcmVzLmVuZCgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/todos/[id].ts\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ })

/******/ });