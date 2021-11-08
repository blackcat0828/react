self["webpackHotUpdate_N_E"]("pages/room/register/building",{

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
  reducers: {
    //* 큰 범위 건물 유형 변경
    setBuildingType: function setBuildingType(state, action) {
      if (action.payload === "") {
        state.buildingType = null;
      }

      state.buildingType = action.payload;
      return state;
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJyZWdpc3RlclJvb20iLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEJ1aWxkaW5nVHlwZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBLElBQU1BLFlBQStCLEdBQUc7QUFDcEM7QUFDQUMsbUJBQWlCLEVBQUUsSUFGaUI7QUFHcEM7QUFDQUMsY0FBWSxFQUFFLElBSnNCO0FBS3BDO0FBQ0FDLFVBQVEsRUFBRSxJQU4wQjtBQU9wQztBQUNBQyxpQkFBZSxFQUFFO0FBUm1CLENBQXhDO0FBV0EsSUFBTUMsWUFBWSxHQUFHQyw2REFBVyxDQUFDO0FBQzdCQyxNQUFJLEVBQUUsY0FEdUI7QUFFN0JQLGNBQVksRUFBWkEsWUFGNkI7QUFHN0JRLFVBQVEsRUFBRTtBQUNOO0FBQ0FDLG1CQUZNLDJCQUVVQyxLQUZWLEVBRWlCQyxNQUZqQixFQUUrQztBQUNqRCxVQUFJQSxNQUFNLENBQUNDLE9BQVAsS0FBbUIsRUFBdkIsRUFBMEI7QUFDdEJGLGFBQUssQ0FBQ1IsWUFBTixHQUFxQixJQUFyQjtBQUNIOztBQUNEUSxXQUFLLENBQUNSLFlBQU4sR0FBcUJTLE1BQU0sQ0FBQ0MsT0FBNUI7QUFDQSxhQUFPRixLQUFQO0FBQ0g7QUFSSztBQUhtQixDQUFELENBQWhDO0FBZ0JPLElBQU1HLG1CQUFtQixxQkFBT1IsWUFBWSxDQUFDUyxPQUFwQixDQUF6QjtBQUVQLCtEQUFlVCxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYnVpbGRpbmcuYzdiMjJiYzZkYjQ5YjAyY2MzMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbnR5cGUgUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJvb21UeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgaXNTZXRVcEZvckd1ZXN0OiBib29sZWFuIHwgbnVsbDtcclxufVxyXG5cclxuLy8qIOy0iOq4sCDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIC8vKiDqsbTrrLwg7Jyg7ZiVIO2BsCDrspTso7xcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBudWxsLFxyXG4gICAgLy8qIOqxtOusvCDsnKDtmJVcclxuICAgIGJ1aWxkaW5nVHlwZTogbnVsbCxcclxuICAgIC8vKiDsiJnshowg7Jyg7ZiVXHJcbiAgICByb29tVHlwZTogbnVsbCxcclxuICAgIC8vKiDqsozsiqTtirjrp4zsnYQg7JyE7ZW0IOunjOuTpOyWtOynhCDsiJnshozsnbjqsIBcclxuICAgIGlzU2V0VXBGb3JHdWVzdDogbnVsbCxcclxufVxyXG5cclxuY29uc3QgcmVnaXN0ZXJSb29tID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJyZWdpc3RlclJvb21cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgLy8qIO2BsCDrspTsnIQg6rG066y8IOycoO2YlSDrs4Dqsr1cclxuICAgICAgICBzZXRCdWlsZGluZ1R5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KXtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJ1aWxkaW5nVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuYnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSb29tQWN0aW9ucyA9IHsuLi5yZWdpc3RlclJvb20uYWN0aW9uc307XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclJvb207Il0sInNvdXJjZVJvb3QiOiIifQ==