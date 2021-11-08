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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./store/user.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./store/common.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ "./store/auth.ts");
/* harmony import */ var _registerRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerRoom */ "./store/registerRoom.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({
  common: _common__WEBPACK_IMPORTED_MODULE_4__.default.reducer,
  user: _user__WEBPACK_IMPORTED_MODULE_3__.default.reducer,
  auth: _auth__WEBPACK_IMPORTED_MODULE_5__.default.reducer,
  registerRoom: _registerRoom__WEBPACK_IMPORTED_MODULE_6__.default.reducer
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
  var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.configureStore)({
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


/***/ }),

/***/ "./store/registerRoom.ts":
/*!*******************************!*\
  !*** ./store/registerRoom.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoomActions": function() { return /* binding */ registerRoomActions; }
/* harmony export */ });
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


//* 초기 상태
var initialState = {
  //* 건물 유형 큰 범주
  largeBuildingType: null,
  //* 건물 유형
  buildingType: null,
  //* 숙소 유형
  roomType: null,
  //* 게스트만을 위해 만들어진 숙소인가
  isSetUpForGuest: null
};
var registerRoom = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: "registerRoom",
  initialState: initialState,
  reducers: {}
});
var registerRoomActions = _objectSpread({}, registerRoom.actions);
/* harmony default export */ __webpack_exports__["default"] = (registerRoom);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZ2lzdGVyUm9vbS50cyJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNvbW1vbiIsInVzZXIiLCJhdXRoIiwicmVnaXN0ZXJSb29tIiwicmVkdWNlciIsImluaXRpYWxSb290U3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZVNlbGVjdG9yIiwidXNlUmVkdXhTZWxlY3RvciIsImluaXRTdG9yZSIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJkZXZUb29scyIsImdldFN0YXRlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJpbml0aWFsU3RhdGUiLCJsYXJnZUJ1aWxkaW5nVHlwZSIsImJ1aWxkaW5nVHlwZSIsInJvb21UeXBlIiwiaXNTZXRVcEZvckd1ZXN0IiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJyZWdpc3RlclJvb21BY3Rpb25zIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsUUFBTSxFQUFFQSxvREFEd0I7QUFFaENDLE1BQUksRUFBRUEsa0RBRjBCO0FBR2hDQyxNQUFJLEVBQUVBLGtEQUgwQjtBQUloQ0MsY0FBWSxFQUFFQSwwREFBb0JDO0FBSkYsQ0FBRCxDQUFuQyxDLENBT0E7O0FBR0EsSUFBSUMsZ0JBQUo7O0FBRUEsSUFBTUQsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0UsS0FBRCxFQUFhQyxNQUFiLEVBQTZCO0FBQ3pDLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQkMsdURBQXBCLEVBQTRCO0FBQ3hCLFFBQUdILEtBQUssS0FBS0QsZ0JBQWIsRUFBOEI7QUFDMUIsNkNBQ09DLEtBRFAsR0FFT0MsTUFBTSxDQUFDRyxPQUZkO0FBSUg7O0FBQ0QsV0FBT0osS0FBUDtBQUNIOztBQUNELFNBQU9SLFdBQVcsQ0FBQ1EsS0FBRCxFQUFRQyxNQUFSLENBQWxCO0FBQ0gsQ0FYRCxDLENBYUE7OztBQUNPLElBQU1JLFdBQTRDLEdBQUdDLG9EQUFyRDs7QUFFUCxJQUFNQyxTQUFvQixHQUFHLFNBQXZCQSxTQUF1QixHQUFNO0FBQy9CLE1BQU1DLEtBQUssR0FBR0MsZ0VBQWMsQ0FBQztBQUMzQlgsV0FBTyxFQUFQQSxPQUQyQjtBQUUzQlksWUFBUSxFQUFFO0FBRmlCLEdBQUQsQ0FBNUI7QUFJQVgsa0JBQWdCLEdBQUdTLEtBQUssQ0FBQ0csUUFBTixFQUFuQjtBQUNBLFNBQU9ILEtBQVA7QUFDRCxDQVBIOztBQVNPLElBQU1JLE9BQU8sR0FBR0MsaUVBQWEsQ0FBQ04sU0FBRCxDQUE3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ1A7QUFTQTtBQUNBLElBQU1PLFlBQStCLEdBQUc7QUFDcEM7QUFDQUMsbUJBQWlCLEVBQUUsSUFGaUI7QUFHcEM7QUFDQUMsY0FBWSxFQUFFLElBSnNCO0FBS3BDO0FBQ0FDLFVBQVEsRUFBRSxJQU4wQjtBQU9wQztBQUNBQyxpQkFBZSxFQUFFO0FBUm1CLENBQXhDO0FBV0EsSUFBTXJCLFlBQVksR0FBR3NCLDZEQUFXLENBQUM7QUFDN0JDLE1BQUksRUFBRSxjQUR1QjtBQUU3Qk4sY0FBWSxFQUFaQSxZQUY2QjtBQUc3Qk8sVUFBUSxFQUFFO0FBSG1CLENBQUQsQ0FBaEM7QUFNTyxJQUFNQyxtQkFBbUIscUJBQU96QixZQUFZLENBQUMwQixPQUFwQixDQUF6QjtBQUVQLCtEQUFlMUIsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE5MmRjOWU1OThlYjVlNDY3MTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyLCBNYWtlU3RvcmUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZVNlbGVjdG9yIGFzIHVzZVJlZHV4U2VsZWN0b3JcclxufSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi9hdXRoXCI7XHJcbmltcG9ydCByZWdpc3RlclJvb20gZnJvbSBcIi4vcmVnaXN0ZXJSb29tXCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb21tb246IGNvbW1vbi5yZWR1Y2VyLFxyXG4gICAgdXNlcjogdXNlci5yZWR1Y2VyLFxyXG4gICAgYXV0aDogYXV0aC5yZWR1Y2VyLFxyXG4gICAgcmVnaXN0ZXJSb29tOiByZWdpc3RlclJvb20ucmVkdWNlcixcclxufSk7XHJcblxyXG4vLyog7Iqk7Yag7Ja0IO2DgOyehVxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XHJcblxyXG5sZXQgaW5pdGlhbFJvb3RTdGF0ZTogUm9vdFN0YXRlO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogYW55LCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKXtcclxuICAgICAgICBpZihzdGF0ZSA9PT0gaW5pdGlhbFJvb3RTdGF0ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgIHJldHVybiByb290UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxufTtcclxuXHJcbi8vKiDtg4DsnoUg7KeA7JuQ65CY64qUIOy7pOyKpO2FgCB1c2VTZWxlY3RvciDrp4zrk6TquLBcclxuZXhwb3J0IGNvbnN0IHVzZVNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlUmVkdXhTZWxlY3RvcjtcclxuXHJcbmNvbnN0IGluaXRTdG9yZTogTWFrZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICAgIHJlZHVjZXIsXHJcbiAgICAgIGRldlRvb2xzOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBpbml0aWFsUm9vdFN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRTdG9yZSk7IiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxudHlwZSBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcm9vbVR5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6IGJvb2xlYW4gfCBudWxsO1xyXG59XHJcblxyXG4vLyog7LSI6riwIOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgLy8qIOqxtOusvCDsnKDtmJUg7YGwIOuylOyjvFxyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IG51bGwsXHJcbiAgICAvLyog6rG066y8IOycoO2YlVxyXG4gICAgYnVpbGRpbmdUeXBlOiBudWxsLFxyXG4gICAgLy8qIOyImeyGjCDsnKDtmJVcclxuICAgIHJvb21UeXBlOiBudWxsLFxyXG4gICAgLy8qIOqyjOyKpO2KuOunjOydhCDsnITtlbQg66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgFxyXG4gICAgaXNTZXRVcEZvckd1ZXN0OiBudWxsLFxyXG59XHJcblxyXG5jb25zdCByZWdpc3RlclJvb20gPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInJlZ2lzdGVyUm9vbVwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHt9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm9vbUFjdGlvbnMgPSB7Li4ucmVnaXN0ZXJSb29tLmFjdGlvbnN9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJSb29tOyJdLCJzb3VyY2VSb290IjoiIn0=