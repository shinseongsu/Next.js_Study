module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/todos.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/todos.ts":
/*!****************************!*\
  !*** ./pages/api/todos.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      const todosBuffer = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(\"data/todos.json\");\n      const todoString = todosBuffer.toString();\n\n      if (!todoString) {\n        res.statusCode = 200;\n        res.send([]);\n      }\n\n      const todos = JSON.parse(todoString);\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdG9kb3MudHM/NjE4ZiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2Rvc0J1ZmZlciIsImZzIiwicmVhZEZpbGVTeW5jIiwidG9kb1N0cmluZyIsInRvU3RyaW5nIiwic3RhdHVzQ29kZSIsInNlbmQiLCJ0b2RvcyIsIkpTT04iLCJwYXJzZSIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdlLGdFQUFDQSxHQUFELEVBQXNCQyxHQUF0QixLQUErQztBQUMxRCxNQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFsQixFQUF5QjtBQUNyQixRQUFJO0FBQ0EsWUFBTUMsV0FBVyxHQUFHQyx5Q0FBRSxDQUFDQyxZQUFILENBQWdCLGlCQUFoQixDQUFwQjtBQUNBLFlBQU1DLFVBQVUsR0FBR0gsV0FBVyxDQUFDSSxRQUFaLEVBQW5COztBQUNBLFVBQUcsQ0FBQ0QsVUFBSixFQUFnQjtBQUNaTCxXQUFHLENBQUNPLFVBQUosR0FBaUIsR0FBakI7QUFDQVAsV0FBRyxDQUFDUSxJQUFKLENBQVMsRUFBVDtBQUNIOztBQUNELFlBQU1DLEtBQWtCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixVQUFYLENBQTNCO0FBQ0FMLFNBQUcsQ0FBQ08sVUFBSixHQUFpQixHQUFqQjtBQUNBLGFBQU9QLEdBQUcsQ0FBQ1EsSUFBSixDQUFTQyxLQUFULENBQVA7QUFDSCxLQVZELENBVUUsT0FBT0csQ0FBUCxFQUFVO0FBQ1JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0FaLFNBQUcsQ0FBQ08sVUFBSixHQUFpQixHQUFqQjtBQUNBUCxTQUFHLENBQUNRLElBQUosQ0FBU0ksQ0FBVDtBQUNIO0FBQ0o7QUFDSixDQWxCRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS90b2Rvcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgVG9kb1R5cGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgaWYocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdG9kb3NCdWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMoXCJkYXRhL3RvZG9zLmpzb25cIik7XG4gICAgICAgICAgICBjb25zdCB0b2RvU3RyaW5nID0gdG9kb3NCdWZmZXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmKCF0b2RvU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAgICAgICAgICAgcmVzLnNlbmQoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdG9kb3M6IFRvZG9UeXBlc1tdID0gSlNPTi5wYXJzZSh0b2RvU3RyaW5nKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKHRvZG9zKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIHJlcy5zZW5kKGUpO1xuICAgICAgICB9XG4gICAgfVxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/todos.ts\n");

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