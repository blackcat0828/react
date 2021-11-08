self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSelector": function() { return /* binding */ useSelector; },
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./store/user.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./store/common.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ "./store/auth.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.combineReducers)({
  common: _common__WEBPACK_IMPORTED_MODULE_4__.default.reducer,
  user: _user__WEBPACK_IMPORTED_MODULE_3__.default.reducer,
  auth: _auth__WEBPACK_IMPORTED_MODULE_5__.default.reducer
}); //* 스토어 타입

var initialRootState;

var reducer = function reducer(state, action) {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {
    if (state === initialRootState) {
      return _objectSpread(_objectSpread({}, state), action.payload);
    }

    return state;
  }

  return rootReducer(state, action);
}; //* 타입 지원되는 커스텀 useSelector 만들기


var useSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector;

var initStore = function initStore() {
  var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.configureStore)({
    reducer: reducer,
    devTools: true
  });
  initialRootState = store.getState();
  return store;
};

var wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(initStore);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXgudHMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJjb21tb24iLCJ1c2VyIiwiYXV0aCIsInJlZHVjZXIiLCJpbml0aWFsUm9vdFN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VTZWxlY3RvciIsInVzZVJlZHV4U2VsZWN0b3IiLCJpbml0U3RvcmUiLCJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwiZGV2VG9vbHMiLCJnZXRTdGF0ZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxRQUFNLEVBQUVBLG9EQUR3QjtBQUVoQ0MsTUFBSSxFQUFFQSxrREFGMEI7QUFHaENDLE1BQUksRUFBRUEsa0RBQVlDO0FBSGMsQ0FBRCxDQUFuQyxDLENBTUE7O0FBR0EsSUFBSUMsZ0JBQUo7O0FBRUEsSUFBTUQsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0UsS0FBRCxFQUFhQyxNQUFiLEVBQTZCO0FBQ3pDLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQkMsdURBQXBCLEVBQTRCO0FBQ3hCLFFBQUdILEtBQUssS0FBS0QsZ0JBQWIsRUFBOEI7QUFDMUIsNkNBQ09DLEtBRFAsR0FFT0MsTUFBTSxDQUFDRyxPQUZkO0FBSUg7O0FBQ0QsV0FBT0osS0FBUDtBQUNIOztBQUNELFNBQU9QLFdBQVcsQ0FBQ08sS0FBRCxFQUFRQyxNQUFSLENBQWxCO0FBQ0gsQ0FYRCxDLENBYUE7OztBQUNPLElBQU1JLFdBQTRDLEdBQUdDLG9EQUFyRDs7QUFFUCxJQUFNQyxTQUFvQixHQUFHLFNBQXZCQSxTQUF1QixHQUFNO0FBQy9CLE1BQU1DLEtBQUssR0FBR0MsZ0VBQWMsQ0FBQztBQUMzQlgsV0FBTyxFQUFQQSxPQUQyQjtBQUUzQlksWUFBUSxFQUFFO0FBRmlCLEdBQUQsQ0FBNUI7QUFJQVgsa0JBQWdCLEdBQUdTLEtBQUssQ0FBQ0csUUFBTixFQUFuQjtBQUNBLFNBQU9ILEtBQVA7QUFDRCxDQVBIOztBQVNPLElBQU1JLE9BQU8sR0FBR0MsaUVBQWEsQ0FBQ04sU0FBRCxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdlZDBkNTZiYWVmOTVkZmQ5MWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyLCBNYWtlU3RvcmUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZVNlbGVjdG9yIGFzIHVzZVJlZHV4U2VsZWN0b3JcclxufSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi9hdXRoXCI7XHJcbmltcG9ydCByZWdpc3RlclJvb20gZnJvbSBcIi4vcmVnaXN0ZXJSb29tXCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb21tb246IGNvbW1vbi5yZWR1Y2VyLFxyXG4gICAgdXNlcjogdXNlci5yZWR1Y2VyLFxyXG4gICAgYXV0aDogYXV0aC5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbi8vKiDsiqTthqDslrQg7YOA7J6FXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuXHJcbmxldCBpbml0aWFsUm9vdFN0YXRlOiBSb290U3RhdGU7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpe1xyXG4gICAgICAgIGlmKHN0YXRlID09PSBpbml0aWFsUm9vdFN0YXRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb3RSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG59O1xyXG5cclxuLy8qIO2DgOyehSDsp4Dsm5DrkJjripQg7Luk7Iqk7YWAIHVzZVNlbGVjdG9yIOunjOuTpOq4sFxyXG5leHBvcnQgY29uc3QgdXNlU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VSZWR1eFNlbGVjdG9yO1xyXG5cclxuY29uc3QgaW5pdFN0b3JlOiBNYWtlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgICAgcmVkdWNlcixcclxuICAgICAgZGV2VG9vbHM6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGluaXRpYWxSb290U3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG4gIH07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoaW5pdFN0b3JlKTsiXSwic291cmNlUm9vdCI6IiJ9