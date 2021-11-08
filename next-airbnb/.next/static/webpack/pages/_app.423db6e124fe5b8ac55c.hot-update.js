self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/user.ts":
/*!***********************!*\
  !*** ./store/user.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userActions": function() { return /* binding */ userActions; }
/* harmony export */ });
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


//* 초기 상태
var initialState = {
  id: 0,
  email: "",
  lastname: "",
  firstname: "",
  birthday: "",
  isLogged: false,
  profileImage: ""
};
var user = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: "user",
  initialState: initialState,
  reducers: {
    //* 로그인한 유저 변경하기
    setLoggedUser: function setLoggedUser(state, action) {
      state = _objectSpread(_objectSpread({}, action.payload), {}, {
        isLogged: true
      });
      return state;
    },
    //* 유저 초기화 하기
    initUser: function initUser(state) {
      state = initialState;
      return state;
    }
  }
});
var userActions = _objectSpread({}, user.actions);
/* harmony default export */ __webpack_exports__["default"] = (user);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdXNlci50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpZCIsImVtYWlsIiwibGFzdG5hbWUiLCJmaXJzdG5hbWUiLCJiaXJ0aGRheSIsImlzTG9nZ2VkIiwicHJvZmlsZUltYWdlIiwidXNlciIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0TG9nZ2VkVXNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImluaXRVc2VyIiwidXNlckFjdGlvbnMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBLElBQU1BLFlBQXVCLEdBQUc7QUFDNUJDLElBQUUsRUFBRSxDQUR3QjtBQUU1QkMsT0FBSyxFQUFFLEVBRnFCO0FBRzVCQyxVQUFRLEVBQUUsRUFIa0I7QUFJNUJDLFdBQVMsRUFBRSxFQUppQjtBQUs1QkMsVUFBUSxFQUFFLEVBTGtCO0FBTTVCQyxVQUFRLEVBQUUsS0FOa0I7QUFPNUJDLGNBQVksRUFBRTtBQVBjLENBQWhDO0FBVUEsSUFBTUMsSUFBSSxHQUFHQyw2REFBVyxDQUFDO0FBQ3JCQyxNQUFJLEVBQUUsTUFEZTtBQUVyQlYsY0FBWSxFQUFaQSxZQUZxQjtBQUdyQlcsVUFBUSxFQUFFO0FBQ047QUFDQUMsaUJBRk0seUJBRVFDLEtBRlIsRUFFZUMsTUFGZixFQUUrQztBQUNqREQsV0FBSyxtQ0FBT0MsTUFBTSxDQUFDQyxPQUFkO0FBQXVCVCxnQkFBUSxFQUFFO0FBQWpDLFFBQUw7QUFDQSxhQUFPTyxLQUFQO0FBQ0gsS0FMSztBQU1OO0FBQ0FHLFlBUE0sb0JBT0dILEtBUEgsRUFPVTtBQUNaQSxXQUFLLEdBQUdiLFlBQVI7QUFDQSxhQUFPYSxLQUFQO0FBQ0g7QUFWSztBQUhXLENBQUQsQ0FBeEI7QUFpQk8sSUFBTUksV0FBVyxxQkFBT1QsSUFBSSxDQUFDVSxPQUFaLENBQWpCO0FBQ1AsK0RBQWVWLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MjNkYjZlMTI0ZmU1YjhhYzU1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBVc2VyVHlwZSB9IGZyb20gXCIuLi90eXBlcy91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gXCIuLi90eXBlcy9yZWR1eFN0YXRlXCI7XHJcblxyXG4vLyog7LSI6riwIOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJTdGF0ZSA9IHtcclxuICAgIGlkOiAwLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBsYXN0bmFtZTogXCJcIixcclxuICAgIGZpcnN0bmFtZTogXCJcIixcclxuICAgIGJpcnRoZGF5OiBcIlwiLFxyXG4gICAgaXNMb2dnZWQ6IGZhbHNlLFxyXG4gICAgcHJvZmlsZUltYWdlOiBcIlwiLFxyXG59O1xyXG5cclxuY29uc3QgdXNlciA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICAvLyog66Gc6re47J247ZWcIOycoOyggCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMb2dnZWRVc2VyKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlclR5cGU+KXtcclxuICAgICAgICAgICAgc3RhdGUgPSB7Li4uYWN0aW9uLnBheWxvYWQsIGlzTG9nZ2VkOiB0cnVlfTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOycoOyggCDstIjquLDtmZQg7ZWY6riwXHJcbiAgICAgICAgaW5pdFVzZXIoc3RhdGUpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJBY3Rpb25zID0gey4uLnVzZXIuYWN0aW9uc307XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==