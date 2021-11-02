"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./lib/data/todo.ts\");\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0FBQUVELEVBQUFBLElBQUlBLCtDQUFBQTtBQUFOLENBQWI7QUFFQSxpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL2xpYi9kYXRhL2luZGV4LnRzP2EyNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuY29uc3QgRGF0YSA9IHsgdG9kb307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhOyJdLCJuYW1lcyI6WyJ0b2RvIiwiRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/data/index.ts\n");

/***/ }),

/***/ "./lib/data/todo.ts":
/*!**************************!*\
  !*** ./lib/data/todo.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getList = () => {\n  const todosBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(\"data/todos.json\");\n  const todosString = todosBuffer.toString();\n\n  if (!todosString) {\n    return [];\n  }\n\n  const todos = JSON.parse(todosString);\n  return todos;\n};\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList();\n  const todo = todos.some(todo => todo.id === id); //some 함수는 일치하는 값이 있으면 true 없으면 false\n\n  return todo;\n};\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(\"data/todos.json\", JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGF0YS90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUdBLE1BQU1FLE9BQU8sR0FBRyxNQUFNO0FBQ2xCLFFBQU1DLFdBQVcsR0FBR0gsZ0RBQVksQ0FBQyxpQkFBRCxDQUFoQztBQUNBLFFBQU1JLFdBQVcsR0FBR0QsV0FBVyxDQUFDRSxRQUFaLEVBQXBCOztBQUNBLE1BQUcsQ0FBQ0QsV0FBSixFQUFnQjtBQUNaLFdBQU8sRUFBUDtBQUNIOztBQUNELFFBQU1FLEtBQWlCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixXQUFYLENBQTFCO0FBQ0EsU0FBT0UsS0FBUDtBQUNILENBUkQ7O0FBVUEsTUFBTUcsS0FBSyxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQXVCO0FBQ2pDLFFBQU1KLEtBQUssR0FBR0osT0FBTyxFQUFyQjtBQUNBLFFBQU1TLElBQUksR0FBR0wsS0FBSyxDQUFDTSxJQUFOLENBQVlELElBQUQsSUFBVUEsSUFBSSxDQUFDRCxFQUFMLEtBQVlBLEVBQWpDLENBQWIsQ0FGaUMsQ0FHakM7O0FBQ0EsU0FBT0MsSUFBUDtBQUNILENBTEQ7O0FBT0EsTUFBTUUsS0FBSyxHQUFHLE1BQU9QLEtBQVAsSUFBNkI7QUFDdkNMLEVBQUFBLGlEQUFhLENBQUMsaUJBQUQsRUFBb0JNLElBQUksQ0FBQ08sU0FBTCxDQUFlUixLQUFmLENBQXBCLENBQWI7QUFDSCxDQUZEOztBQUlBLGlFQUFlO0FBQUNKLEVBQUFBLE9BQUQ7QUFBVU8sRUFBQUEsS0FBVjtBQUFpQkksRUFBQUE7QUFBakIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL2xpYi9kYXRhL3RvZG8udHM/Y2Q3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luY30gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7VG9kb1R5cGV9IGZyb20gXCIuLi8uLi90eXBlcy90b2RvXCI7XHJcblxyXG5jb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3NCdWZmZXIgPSByZWFkRmlsZVN5bmMoXCJkYXRhL3RvZG9zLmpzb25cIik7XHJcbiAgICBjb25zdCB0b2Rvc1N0cmluZyA9IHRvZG9zQnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgICBpZighdG9kb3NTdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRvZG9zOiBUb2RvVHlwZVtdID0gSlNPTi5wYXJzZSh0b2Rvc1N0cmluZyk7XHJcbiAgICByZXR1cm4gdG9kb3M7XHJcbn07XHJcblxyXG5jb25zdCBleGlzdCA9ICh7aWR9OiB7aWQ6bnVtYmVyfSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3MgPSBnZXRMaXN0KCk7XHJcbiAgICBjb25zdCB0b2RvID0gdG9kb3Muc29tZSgodG9kbykgPT4gdG9kby5pZCA9PT0gaWQpO1xyXG4gICAgLy9zb21lIO2VqOyImOuKlCDsnbzsuZjtlZjripQg6rCS7J20IOyeiOycvOuptCB0cnVlIOyXhuycvOuptCBmYWxzZVxyXG4gICAgcmV0dXJuIHRvZG87XHJcbn1cclxuXHJcbmNvbnN0IHdyaXRlID0gYXN5bmMgKHRvZG9zOiBUb2RvVHlwZVtdKSA9PiB7XHJcbiAgICB3cml0ZUZpbGVTeW5jKFwiZGF0YS90b2Rvcy5qc29uXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtnZXRMaXN0LCBleGlzdCwgd3JpdGV9OyJdLCJuYW1lcyI6WyJyZWFkRmlsZVN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwiZ2V0TGlzdCIsInRvZG9zQnVmZmVyIiwidG9kb3NTdHJpbmciLCJ0b1N0cmluZyIsInRvZG9zIiwiSlNPTiIsInBhcnNlIiwiZXhpc3QiLCJpZCIsInRvZG8iLCJzb21lIiwid3JpdGUiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/data/todo.ts\n");

/***/ }),

/***/ "./pages/api/todos/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"./lib/data/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"PATCH\") {\n    try {\n      const todoId = Number(req.query.id);\n      const todo = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.exist({\n        id: todoId\n      });\n\n      if (!todo) {\n        res.statusCode = 404;\n        res.end();\n      }\n\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      const changedTodos = todos.map(todo => {\n        if (todo.id === todoId) {\n          return _objectSpread(_objectSpread({}, todo), {}, {\n            checked: !todo.checked\n          });\n        }\n\n        return todo;\n      });\n      _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write(changedTodos);\n      console.log(req.query);\n      res.statusCode = 200;\n      return res.end();\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  res.statusCode = 405;\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDaEUsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsT0FBbkIsRUFBMkI7QUFDdkIsUUFBRztBQUNDLFlBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBWCxDQUFyQjtBQUNBLFlBQU1DLElBQUksR0FBR1IsNERBQUEsQ0FBZ0I7QUFBQ08sUUFBQUEsRUFBRSxFQUFFSDtBQUFMLE9BQWhCLENBQWI7O0FBQ0EsVUFBRyxDQUFDSSxJQUFKLEVBQVM7QUFDTE4sUUFBQUEsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FSLFFBQUFBLEdBQUcsQ0FBQ1MsR0FBSjtBQUNIOztBQUVELFlBQU1DLEtBQUssR0FBR1osOERBQUEsRUFBZDtBQUNBLFlBQU1jLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVdQLElBQUQsSUFBVTtBQUNyQyxZQUFHQSxJQUFJLENBQUNELEVBQUwsS0FBWUgsTUFBZixFQUFzQjtBQUNsQixpREFBV0ksSUFBWDtBQUFpQlEsWUFBQUEsT0FBTyxFQUFFLENBQUNSLElBQUksQ0FBQ1E7QUFBaEM7QUFDSDs7QUFDRCxlQUFPUixJQUFQO0FBQ0gsT0FMb0IsQ0FBckI7QUFNQVIsTUFBQUEsNERBQUEsQ0FBZ0JjLFlBQWhCO0FBQ0FJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbEIsR0FBRyxDQUFDSyxLQUFoQjtBQUNBSixNQUFBQSxHQUFHLENBQUNRLFVBQUosR0FBaUIsR0FBakI7QUFDQSxhQUFPUixHQUFHLENBQUNTLEdBQUosRUFBUDtBQUNILEtBbkJELENBbUJDLE9BQU1TLENBQU4sRUFBUTtBQUNMRixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsQ0FBWjtBQUNBbEIsTUFBQUEsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FSLE1BQUFBLEdBQUcsQ0FBQ21CLElBQUosQ0FBU0QsQ0FBVDtBQUNIO0FBQ0o7O0FBRURsQixFQUFBQSxHQUFHLENBQUNRLFVBQUosR0FBaUIsR0FBakI7QUFDQSxTQUFPUixHQUFHLENBQUNTLEdBQUosRUFBUDtBQUNILENBOUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vcGFnZXMvYXBpL3RvZG9zL1tpZF0udHM/N2I5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBBVENIXCIpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gTnVtYmVyKHJlcS5xdWVyeS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBEYXRhLnRvZG8uZXhpc3Qoe2lkOiB0b2RvSWR9KTtcclxuICAgICAgICAgICAgaWYoIXRvZG8pe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XHJcbiAgICAgICAgICAgICAgICByZXMuZW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zID0gRGF0YS50b2RvLmdldExpc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgY2hhbmdlZFRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0b2RvLmlkID09PSB0b2RvSWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4udG9kbywgY2hlY2tlZDogIXRvZG8uY2hlY2tlZH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kbztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgRGF0YS50b2RvLndyaXRlKGNoYW5nZWRUb2Rvcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5xdWVyeSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmVuZCgpO1xyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgICAgICByZXMuc2VuZChlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDU7XHJcbiAgICByZXR1cm4gcmVzLmVuZCgpO1xyXG59Il0sIm5hbWVzIjpbIkRhdGEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2RvSWQiLCJOdW1iZXIiLCJxdWVyeSIsImlkIiwidG9kbyIsImV4aXN0Iiwic3RhdHVzQ29kZSIsImVuZCIsInRvZG9zIiwiZ2V0TGlzdCIsImNoYW5nZWRUb2RvcyIsIm1hcCIsImNoZWNrZWQiLCJ3cml0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/todos/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos/[id].ts"));
module.exports = __webpack_exports__;

})();