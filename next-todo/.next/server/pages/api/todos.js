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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
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

/***/ "./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"./lib/data/index.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  res.statusCode = 405;\n  console.log(res.statusCode);\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQW9EO0FBQy9ELE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQXlCO0FBQ3JCLFFBQUk7QUFDRyxZQUFNQyxLQUFLLEdBQUdKLDhEQUFBLEVBQWQ7QUFDQ0UsTUFBQUEsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsYUFBT0wsR0FBRyxDQUFDTSxJQUFKLENBQVNKLEtBQVQsQ0FBUDtBQUVQLEtBTEQsQ0FLQyxPQUFNSyxDQUFOLEVBQVE7QUFDTEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQVAsTUFBQUEsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FMLE1BQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxDQUFUO0FBQ0g7QUFDSjs7QUFFRFAsRUFBQUEsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxHQUFHLENBQUNLLFVBQWhCO0FBRUEsU0FBT0wsR0FBRyxDQUFDVSxHQUFKLEVBQVA7QUFDSCxDQWxCRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL2FwaS90b2Rvcy9pbmRleC50cz8wMmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGFcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICBjb25zdCB0b2RvcyA9IERhdGEudG9kby5nZXRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc2VuZCh0b2Rvcyk7XHJcblxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgICAgICByZXMuc2VuZChlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXNDb2RlKTtcclxuXHJcbiAgICByZXR1cm4gcmVzLmVuZCgpO1xyXG59Il0sIm5hbWVzIjpbIkRhdGEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2RvcyIsInRvZG8iLCJnZXRMaXN0Iiwic3RhdHVzQ29kZSIsInNlbmQiLCJlIiwiY29uc29sZSIsImxvZyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/todos/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();