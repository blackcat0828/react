self["webpackHotUpdate_N_E"]("pages/room/register/bedrooms",{

/***/ "./components/room/register/RegisterRoomBedrooms.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomBedrooms.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _common_Counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Counter */ "./components/common/Counter.tsx");
/* harmony import */ var _lib_api_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/api/utils */ "./lib/api/utils.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBedrooms.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div.withConfig({
  displayName: "RegisterRoomBedrooms__Container",
  componentId: "sc-n49nft-0"
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-size:14px;font-weight:bold;color:", ";margin-bottom:6px;}h4{font-size:24px;margin-bottom:6px;}.register-room-step-info{font-size:14px;max-width:400px;margin-bottom:24px;max-width:400px;word-break:keep-all;}.register-room-mamximum-guest-count-wrapper{width:320px;margin-bottom:32px;}.register-room-bedroom-count-wrapper{width:320px;margin-bottom:32px;}.register-room-bed-count-wrapper{width:320px;margin-bottom:50px;}.register-room-bed-count-label{color:#767676;font-weight:600;margin-bottom:8px;}.register-room-bed-type-info{margin-top:6px;margin-bottom:20px;max-width:400px;word-break:keep-all;}.register-room-bed-type-list-wrapper{width:548px;}.register-room-bedroom{width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_dd);
_c = Container;

var RegisterRoomBedrooms = function RegisterRoomBedrooms() {
  _s();

  var bedroomCount = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.registerRoom.bedroomCount;
  });
  var maximumGuestCount = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.registerRoom.maximumGuestCount;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(); //* 최대 숙박 인원 변경 시

  var onChangeMaximumGuestCount = function onChangeMaximumGuestCount(value) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_5__.registerRoomActions.setMaximumGuestCount(value));
  }; //* 침실 개수 변경 시


  var onChangeBedroomCount = function onChangeBedroomCount(event) {
    return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_5__.registerRoomActions.setBedroomCount((0,_lib_api_utils__WEBPACK_IMPORTED_MODULE_7__.getNumber)(event.target.value) || 0));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uC219\uC18C\uC5D0 \uC5BC\uB9C8\uB098 \uB9CE\uC740 \uC778\uC6D0\uC774 \uC219\uBC15\uD560 \uC218 \uC788\uB098\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "2\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "room-register-step-info",
      children: "\uBAA8\uB4E0 \uAC8C\uC2A4\uD2B8\uAC00 \uD3B8\uC548\uD558\uAC8C \uC219\uBC15\uD560 \uC218 \uC788\uB3C4\uB85D \uCE68\uB300\uAC00 \uCDA9\uBD84\uD788 \uAD6C\uBE44\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-maximum-guest-count-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Counter__WEBPACK_IMPORTED_MODULE_6__.default, {
        label: "\uCD5C\uB300 \uC219\uBC15 \uC778\uC6D0",
        value: maximumGuestCount,
        onChange: onChangeMaximumGuestCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBedrooms, "6KYjQWmUkVn/UdS1lOlhLGUTGWo=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_4__.useSelector, _store__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch];
});

_c2 = RegisterRoomBedrooms;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBedrooms);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterRoomBedrooms");

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

/***/ "./lib/api/utils.ts":
/*!**************************!*\
  !*** ./lib/api/utils.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cookieStringToObject": function() { return /* binding */ cookieStringToObject; },
/* harmony export */   "getNumber": function() { return /* binding */ getNumber; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
//* "token=value"를 {token:"value"}로 바꾸는 함수
var cookieStringToObject = function cookieStringToObject(cookieString) {
  var cookies = {};

  if (cookieString) {
    //* "token=value"
    var itemString = cookieString === null || cookieString === void 0 ? void 0 : cookieString.split(/\s*;\s*/);
    itemString.forEach(function (pairs) {
      //* ["token", "value"]
      var pair = pairs.split(/\s*=\s*/);
      cookies[pair[0]] = pair.splice(1).join("=");
    });
  }

  return cookies;
}; //* string에서 number만 return 하는 함수

var getNumber = function getNumber(string) {
  var _string$match;

  var numbers = (_string$match = string.match(/\d/g)) === null || _string$match === void 0 ? void 0 : _string$match.join("");

  if (numbers) {
    return Number(numbers);
  }

  return null;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZHJvb21zLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS91dGlscy50cyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiUmVnaXN0ZXJSb29tQmVkcm9vbXMiLCJiZWRyb29tQ291bnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwibWF4aW11bUd1ZXN0Q291bnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VNYXhpbXVtR3Vlc3RDb3VudCIsInZhbHVlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsIm9uQ2hhbmdlQmVkcm9vbUNvdW50IiwiZXZlbnQiLCJnZXROdW1iZXIiLCJ0YXJnZXQiLCJjb29raWVTdHJpbmdUb09iamVjdCIsImNvb2tpZVN0cmluZyIsImNvb2tpZXMiLCJpdGVtU3RyaW5nIiwic3BsaXQiLCJmb3JFYWNoIiwicGFpcnMiLCJwYWlyIiwic3BsaWNlIiwiam9pbiIsInN0cmluZyIsIm51bWJlcnMiLCJtYXRjaCIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDQxQkFVRkMsNERBVkUsRUF3RGFBLDREQXhEYixFQTBEa0JBLDREQTFEbEIsQ0FBZjtLQUFNRixTOztBQStETixJQUFNRyxvQkFBOEIsR0FBRyxTQUFqQ0Esb0JBQWlDLEdBQU07QUFBQTs7QUFDekMsTUFBTUMsWUFBWSxHQUFHQyxtREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFVQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJILFlBQTdCO0FBQUEsR0FBRCxDQUFoQztBQUVBLE1BQU1JLGlCQUFpQixHQUFHSCxtREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLGlCQUE5QjtBQUFBLEdBQUQsQ0FBckM7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCLENBTHlDLENBT3pDOztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQ0MsS0FBRCxFQUFrQjtBQUNoREgsWUFBUSxDQUFDSSx5RkFBQSxDQUF5Q0QsS0FBekMsQ0FBRCxDQUFSO0FBQ0gsR0FGRCxDQVJ5QyxDQVl6Qzs7O0FBQ0EsTUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFEO0FBQUEsV0FDekJOLFFBQVEsQ0FDSkksb0ZBQUEsQ0FBb0NHLHlEQUFTLENBQUNELEtBQUssQ0FBQ0UsTUFBTixDQUFhTCxLQUFkLENBQVQsSUFBaUMsQ0FBckUsQ0FESSxDQURpQjtBQUFBLEdBQTdCOztBQUtBLHNCQUNJLDhEQUFDLFNBQUQ7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQUcsZUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFNSTtBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLDZCQUNJLDhEQUFDLG9EQUFEO0FBQ0ksYUFBSyxFQUFHLHdDQURaO0FBRUksYUFBSyxFQUFJSixpQkFGYjtBQUdJLGdCQUFRLEVBQUVHO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQWxDRDs7R0FBTVIsb0I7VUFDbUJFLCtDLEVBRUtBLCtDLEVBRVRLLG9EOzs7TUFMZlAsb0I7QUFvQ04sK0RBQWVBLG9CQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFDTyxJQUFNZSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLFlBQUQsRUFBc0M7QUFDdEUsTUFBTUMsT0FBZ0MsR0FBRyxFQUF6Qzs7QUFDQSxNQUFJRCxZQUFKLEVBQWtCO0FBQ2Q7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLFlBQUgsYUFBR0EsWUFBSCx1QkFBR0EsWUFBWSxDQUFFRyxLQUFkLENBQW9CLFNBQXBCLENBQW5CO0FBQ0FELGNBQVUsQ0FBQ0UsT0FBWCxDQUFtQixVQUFDQyxLQUFELEVBQVc7QUFDMUI7QUFDQSxVQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0YsS0FBTixDQUFZLFNBQVosQ0FBYjtBQUNBRixhQUFPLENBQUNLLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBUCxHQUFtQkEsSUFBSSxDQUFDQyxNQUFMLENBQVksQ0FBWixFQUFlQyxJQUFmLENBQW9CLEdBQXBCLENBQW5CO0FBQ0gsS0FKRDtBQUtIOztBQUNELFNBQU9QLE9BQVA7QUFDSCxDQVpNLEMsQ0FjUDs7QUFDTyxJQUFNSixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDWSxNQUFELEVBQW9CO0FBQUE7O0FBQ3pDLE1BQU1DLE9BQU8sb0JBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEtBQWIsQ0FBSCxrREFBRyxjQUFxQkgsSUFBckIsQ0FBMEIsRUFBMUIsQ0FBaEI7O0FBQ0EsTUFBSUUsT0FBSixFQUFZO0FBQ1IsV0FBT0UsTUFBTSxDQUFDRixPQUFELENBQWI7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSCxDQU5NIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYmVkcm9vbXMuNWVjNGI1ZWM5NTI4MGM2ODJjODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi8uLi9jb21tb24vQ291bnRlclwiO1xyXG5pbXBvcnQgeyBnZXROdW1iZXIgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwaS91dGlsc1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA2MnB4IDMwcHggMTAwcHg7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1yb29tLXN0ZXAtaW5mbyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tbWFteGltdW0tZ3Vlc3QtY291bnQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWRyb29tLWNvdW50LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLWNvdW50LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLWNvdW50LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1saXN0LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDU0OHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkcm9vbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDI4cHggMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJlZHJvb21zOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJlZHJvb21Db3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PiBzdGF0ZS5yZWdpc3RlclJvb20uYmVkcm9vbUNvdW50KTtcclxuXHJcbiAgICBjb25zdCBtYXhpbXVtR3Vlc3RDb3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLm1heGltdW1HdWVzdENvdW50KTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8qIOy1nOuMgCDsiJnrsJUg7J247JuQIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlTWF4aW11bUd1ZXN0Q291bnQgPSAodmFsdWU6bnVtYmVyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRNYXhpbXVtR3Vlc3RDb3VudCh2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKiDsuajsi6Qg6rCc7IiYIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQmVkcm9vbUNvdW50ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IFxyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJlZHJvb21Db3VudChnZXROdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSB8fCAwKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+7IiZ7IaM7JeQIOyWvOuniOuCmCDrp47snYAg7J247JuQ7J20IOyImeuwle2VoCDsiJgg7J6I64KY7JqUPzwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4y64uo6rOEPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicm9vbS1yZWdpc3Rlci1zdGVwLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIOuqqOuToCDqsozsiqTtirjqsIAg7Y647JWI7ZWY6rKMIOyImeuwle2VoCDsiJgg7J6I64+E66GdIOy5qOuMgOqwgCDstqnrtoTtnogg6rWs67mE65CY7Ja0IOyeiOuKlOyngCDtmZXsnbjtlZjshLjsmpQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLW1heGltdW0tZ3Vlc3QtY291bnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPENvdW50ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIuy1nOuMgCDsiJnrsJUg7J247JuQXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHttYXhpbXVtR3Vlc3RDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VNYXhpbXVtR3Vlc3RDb3VudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21CZWRyb29tczsiLCIvLyogXCJ0b2tlbj12YWx1ZVwi66W8IHt0b2tlbjpcInZhbHVlXCJ966GcIOuwlOq+uOuKlCDtlajsiJhcclxuZXhwb3J0IGNvbnN0IGNvb2tpZVN0cmluZ1RvT2JqZWN0ID0gKGNvb2tpZVN0cmluZzogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICBjb25zdCBjb29raWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xyXG4gICAgaWYgKGNvb2tpZVN0cmluZykge1xyXG4gICAgICAgIC8vKiBcInRva2VuPXZhbHVlXCJcclxuICAgICAgICBjb25zdCBpdGVtU3RyaW5nID0gY29va2llU3RyaW5nPy5zcGxpdCgvXFxzKjtcXHMqLyk7XHJcbiAgICAgICAgaXRlbVN0cmluZy5mb3JFYWNoKChwYWlycykgPT4ge1xyXG4gICAgICAgICAgICAvLyogW1widG9rZW5cIiwgXCJ2YWx1ZVwiXVxyXG4gICAgICAgICAgICBjb25zdCBwYWlyID0gcGFpcnMuc3BsaXQoL1xccyo9XFxzKi8pO1xyXG4gICAgICAgICAgICBjb29raWVzW3BhaXJbMF1dID0gcGFpci5zcGxpY2UoMSkuam9pbihcIj1cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29va2llcztcclxufVxyXG5cclxuLy8qIHN0cmluZ+yXkOyEnCBudW1iZXLrp4wgcmV0dXJuIO2VmOuKlCDtlajsiJhcclxuZXhwb3J0IGNvbnN0IGdldE51bWJlciA9IChzdHJpbmc6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbnVtYmVycyA9IHN0cmluZy5tYXRjaCgvXFxkL2cpPy5qb2luKFwiXCIpO1xyXG4gICAgaWYgKG51bWJlcnMpe1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIobnVtYmVycyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=