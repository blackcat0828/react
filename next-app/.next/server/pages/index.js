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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst App = ({ user  })=>{\n    const username = user && user.name;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\react\\\\next-app\\\\pages\\\\index.js\",\n            lineNumber: 6\n        },\n        __self: undefined,\n        children: username\n    }));\n};\nconst getServerSideProps = async ()=>{\n    try {\n        const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(\"https://api.github.com/users/jerrynim\");\n        if (res.status === 200) {\n            const user = await res.json();\n            return {\n                props: {\n                    user\n                }\n            };\n        }\n        return {\n            props: {\n            }\n        };\n    } catch (e) {\n        console.log(e);\n        return {\n            props: {\n            }\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBRXRDLEtBQUssQ0FBQ0MsR0FBRyxJQUFJLENBQUNDLENBQUFBLElBQUksR0FBQyxHQUFLLENBQUM7SUFDckIsS0FBSyxDQUFDQyxRQUFRLEdBQUdELElBQUksSUFBSUEsSUFBSSxDQUFDRSxJQUFJO0lBQ2xDLE1BQU0sc0VBQ0RDLENBQUc7Ozs7OztrQkFBRUYsUUFBUTs7QUFHdEIsQ0FBQztBQUVNLEtBQUssQ0FBQ0csa0JBQWtCLGFBQWUsQ0FBQztJQUMzQyxHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ1AseURBQUssQ0FBQyxDQUF1QztRQUMvRCxFQUFFLEVBQUVPLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQ04sSUFBSSxHQUFHLEtBQUssQ0FBQ0ssR0FBRyxDQUFDRSxJQUFJO1lBQzNCLE1BQU0sQ0FBQyxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQ1I7b0JBQUFBLElBQUk7Z0JBQUEsQ0FBQztZQUFBLENBQUM7UUFDM0IsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDO1lBQUNRLEtBQUssRUFBRSxDQUFDO1lBQUEsQ0FBQztRQUFBLENBQUM7SUFDdkIsQ0FBQyxDQUFDLEtBQUssRUFBRUMsQ0FBQyxFQUFDLENBQUM7UUFDUkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUM7UUFDYixNQUFNLENBQUMsQ0FBQztZQUFDRCxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQUM7UUFBQSxDQUFDO0lBQ3ZCLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVULEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5cclxuY29uc3QgQXBwID0gKHt1c2VyfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VyICYmIHVzZXIubmFtZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj57dXNlcm5hbWV9PC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvamVycnluaW1cIilcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHByb3BzOiB7dXNlcn19XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7fX1cclxuICAgIH0gY2F0Y2ggKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgcmV0dXJuIHsgcHJvcHM6IHt9fVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbImZldGNoIiwiQXBwIiwidXNlciIsInVzZXJuYW1lIiwibmFtZSIsImRpdiIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsInN0YXR1cyIsImpzb24iLCJwcm9wcyIsImUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();