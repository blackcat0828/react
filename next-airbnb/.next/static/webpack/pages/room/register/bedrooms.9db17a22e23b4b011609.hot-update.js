self["webpackHotUpdate_N_E"]("pages/room/register/bedrooms",{

/***/ "./components/room/register/RegisterRoomBedList.tsx":
/*!**********************************************************!*\
  !*** ./components/room/register/RegisterRoomBedList.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _RegisterRoomBedTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterRoomBedTypes */ "./components/room/register/RegisterRoomBedTypes.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBedList.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var RegisterRoomBedList = function RegisterRoomBedList() {
  _s();

  var bedList = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.registerRoom.bedList;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "register-room-bed-type-list-wrapper",
    children: bedList.map(function (bedroom) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RegisterRoomBedTypes__WEBPACK_IMPORTED_MODULE_3__.default, {
        bedroom: bedroom
      }, bedroom.id, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_s(RegisterRoomBedList, "BpcVnWMMfQdEFHREZKaXlryGy1o=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c = RegisterRoomBedList;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBedList);

var _c;

$RefreshReg$(_c, "RegisterRoomBedList");

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _common_Counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Counter */ "./components/common/Counter.tsx");
/* harmony import */ var _lib_api_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/api/utils */ "./lib/api/utils.ts");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _RegisterRoomBedList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RegisterRoomBedList */ "./components/room/register/RegisterRoomBedList.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBedrooms.tsx",
    _this = undefined,
    _s = $RefreshSig$();












var Container = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.div.withConfig({
  displayName: "RegisterRoomBedrooms__Container",
  componentId: "sc-n49nft-0"
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-size:14px;font-weight:bold;color:", ";margin-bottom:6px;}h4{font-size:24px;margin-bottom:6px;}.register-room-step-info{font-size:14px;max-width:400px;margin-bottom:24px;max-width:400px;word-break:keep-all;}.register-room-mamximum-guest-count-wrapper{width:320px;margin-bottom:32px;}.register-room-bedroom-count-wrapper{width:320px;margin-bottom:32px;}.register-room-bed-count-wrapper{width:320px;margin-bottom:50px;}.register-room-bed-count-label{color:#767676;font-weight:600;margin-bottom:8px;}.register-room-bed-type-info{margin-top:6px;margin-bottom:20px;max-width:400px;word-break:keep-all;}.register-room-bed-type-list-wrapper{width:548px;}.register-room-bedroom{width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_dd);
_c = Container;

var RegisterRoomBedrooms = function RegisterRoomBedrooms() {
  _s();

  var bedroomCount = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.registerRoom.bedroomCount;
  });
  var bedCount = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.registerRoom.bedCount;
  });
  var maximumGuestCount = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.registerRoom.maximumGuestCount;
  });
  var bedList = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.registerRoom.bedList;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(); //* 최대 숙박 인원 변경 시

  var onChangeMaximumGuestCount = function onChangeMaximumGuestCount(value) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_5__.registerRoomActions.setMaximumGuestCount(value));
  }; //* 침실 개수 변경 시


  var onChangeBedroomCount = function onChangeBedroomCount(event) {
    return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_5__.registerRoomActions.setBedroomCount((0,_lib_api_utils__WEBPACK_IMPORTED_MODULE_7__.getNumber)(event.target.value) || 0));
  }; //* 침대 개수 변경 시


  var onChangeBedCount = function onChangeBedCount(value) {
    return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_5__.registerRoomActions.setBedCount(value));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uC219\uC18C\uC5D0 \uC5BC\uB9C8\uB098 \uB9CE\uC740 \uC778\uC6D0\uC774 \uC219\uBC15\uD560 \uC218 \uC788\uB098\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "2\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "room-register-step-info",
      children: "\uBAA8\uB4E0 \uAC8C\uC2A4\uD2B8\uAC00 \uD3B8\uC548\uD558\uAC8C \uC219\uBC15\uD560 \uC218 \uC788\uB3C4\uB85D \uCE68\uB300\uAC00 \uCDA9\uBD84\uD788 \uAD6C\uBE44\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-mamximum-guest-count-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Counter__WEBPACK_IMPORTED_MODULE_6__.default, {
        label: "\uCD5C\uB300 \uC219\uBC15 \uC778\uC6D0",
        value: maximumGuestCount,
        onChange: onChangeMaximumGuestCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-bedroom-count-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_8__.default, {
        type: "register",
        value: "\uCE68\uC2E4 ".concat(bedroomCount, "\uAC1C"),
        onChange: onChangeBedroomCount,
        label: "\uAC8C\uC2A4\uD2B8\uAC00 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uCE68\uC2E4\uC740 \uBA87 \uAC1C\uC778\uAC00\uC694?",
        options: _lib_staticData__WEBPACK_IMPORTED_MODULE_9__.bedroomCountList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-bed-count-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Counter__WEBPACK_IMPORTED_MODULE_6__.default, {
        label: "\uCE68\uB300",
        value: bedCount,
        onChange: onChangeBedCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: "\uCE68\uB300 \uC720\uD615"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "register-room-bed-type-info",
      children: "\uAC01 \uCE68\uC2E4\uC5D0 \uB193\uC778 \uCE68\uB300 \uC720\uD615\uC744 \uBA85\uC2DC\uD558\uBA74 \uC219\uC18C\uC5D0 \uCE68\uB300\uAC00 \uC5B4\uB5BB\uAC8C \uAD6C\uBE44\uB418\uC5B4 \uC788\uB294\uC9C0 \uAC8C\uC2A4\uD2B8\uAC00 \uC798 \uD30C\uC545\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RegisterRoomBedList__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBedrooms, "CKLpihTEJ7DKVIjgFzPlkUfPViY=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_4__.useSelector, _store__WEBPACK_IMPORTED_MODULE_4__.useSelector, _store__WEBPACK_IMPORTED_MODULE_4__.useSelector, _store__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch];
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZExpc3QudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Jvb20vcmVnaXN0ZXIvUmVnaXN0ZXJSb29tQmVkcm9vbXMudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyUm9vbUJlZExpc3QiLCJiZWRMaXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlZ2lzdGVyUm9vbSIsIm1hcCIsImJlZHJvb20iLCJpZCIsIkNvbnRhaW5lciIsInN0eWxlZCIsInBhbGV0dGUiLCJSZWdpc3RlclJvb21CZWRyb29tcyIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwibWF4aW11bUd1ZXN0Q291bnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VNYXhpbXVtR3Vlc3RDb3VudCIsInZhbHVlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsIm9uQ2hhbmdlQmVkcm9vbUNvdW50IiwiZXZlbnQiLCJnZXROdW1iZXIiLCJ0YXJnZXQiLCJvbkNoYW5nZUJlZENvdW50IiwiYmVkcm9vbUNvdW50TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsbUJBQTZCLEdBQUcsU0FBaENBLG1CQUFnQyxHQUFNO0FBQUE7O0FBQzFDLE1BQU1DLE9BQU8sR0FBR0MsbURBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CSCxPQUE5QjtBQUFBLEdBQUQsQ0FBM0I7QUFFQSxzQkFDRTtBQUFJLGFBQVMsRUFBQyxxQ0FBZDtBQUFBLGNBQ0dBLE9BQU8sQ0FBQ0ksR0FBUixDQUFZLFVBQUNDLE9BQUQ7QUFBQSwwQkFDWCw4REFBQywwREFBRDtBQUF1QyxlQUFPLEVBQUVBO0FBQWhELFNBQTJCQSxPQUFPLENBQUNDLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QUFBQTtBQUFBO0FBQUEsYUFiSixlQXNCSTtBQUFLLGVBQVMsRUFBQyxpQ0FBZjtBQUFBLDZCQUNJLDhEQUFDLG9EQUFEO0FBQVMsYUFBSyxFQUFDLGNBQWY7QUFBb0IsYUFBSyxFQUFFWixRQUEzQjtBQUFxQyxnQkFBUSxFQUFFVztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCSixlQXlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCSixlQTBCSTtBQUFHLGVBQVMsRUFBQyw2QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCSixlQTZCSSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0NILENBekREOztHQUFNYixvQjtVQUNtQlQsK0MsRUFDSkEsK0MsRUFDU0EsK0MsRUFDVkEsK0MsRUFFQ2Msb0Q7OztNQU5mTCxvQjtBQTJETiwrREFBZUEsb0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9iZWRyb29tcy45ZGIxN2EyMmUyM2I0YjAxMTYwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzIGZyb20gXCIuL1JlZ2lzdGVyUm9vbUJlZFR5cGVzXCI7XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CZWRMaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBiZWRMaXN0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20uYmVkTGlzdCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1saXN0LXdyYXBwZXJcIj5cclxuICAgICAge2JlZExpc3QubWFwKChiZWRyb29tKSA9PiAoXHJcbiAgICAgICAgPFJlZ2lzdGVyUm9vbUJlZFR5cGVzIGtleT17YmVkcm9vbS5pZH0gYmVkcm9vbT17YmVkcm9vbX0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21CZWRMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vLi4vY29tbW9uL0NvdW50ZXJcIjtcclxuaW1wb3J0IHsgZ2V0TnVtYmVyIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hcGkvdXRpbHNcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21tb24vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgYmVkcm9vbUNvdW50TGlzdCB9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBSZWdpc3RlclJvb21CZWRUeXBlcyBmcm9tIFwiLi9SZWdpc3RlclJvb21CZWRUeXBlc1wiO1xyXG5pbXBvcnQgUmVnaXN0ZXJSb29tQmVkTGlzdCBmcm9tIFwiLi9SZWdpc3RlclJvb21CZWRMaXN0XCI7XHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA2MnB4IDMwcHggMTAwcHg7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1yb29tLXN0ZXAtaW5mbyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tbWFteGltdW0tZ3Vlc3QtY291bnQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWRyb29tLWNvdW50LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLWNvdW50LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLWNvdW50LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1saXN0LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDU0OHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkcm9vbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDI4cHggMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJlZHJvb21zOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJlZHJvb21Db3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PiBzdGF0ZS5yZWdpc3RlclJvb20uYmVkcm9vbUNvdW50KTtcclxuICAgIGNvbnN0IGJlZENvdW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20uYmVkQ291bnQpO1xyXG4gICAgY29uc3QgbWF4aW11bUd1ZXN0Q291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5tYXhpbXVtR3Vlc3RDb3VudCk7XHJcbiAgICBjb25zdCBiZWRMaXN0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20uYmVkTGlzdCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vKiDstZzrjIAg7IiZ67CVIOyduOybkCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZU1heGltdW1HdWVzdENvdW50ID0gKHZhbHVlOm51bWJlcikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0TWF4aW11bUd1ZXN0Q291bnQodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyog7Lmo7IukIOqwnOyImCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJlZHJvb21Db3VudCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiBcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCZWRyb29tQ291bnQoZ2V0TnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkgfHwgMClcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAvLyog7Lmo64yAIOqwnOyImCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJlZENvdW50ID0gKHZhbHVlOiBudW1iZXIpID0+IGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QmVkQ291bnQodmFsdWUpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMj7siJnshozsl5Ag7Ja866eI64KYIOunjuydgCDsnbjsm5DsnbQg7IiZ67CV7ZWgIOyImCDsnojrgpjsmpQ/PC9oMj5cclxuICAgICAgICAgICAgPGgzPjLri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb29tLXJlZ2lzdGVyLXN0ZXAtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAg66qo65OgIOqyjOyKpO2KuOqwgCDtjrjslYjtlZjqsowg7IiZ67CV7ZWgIOyImCDsnojrj4TroZ0g7Lmo64yA6rCAIOy2qeu2hO2eiCDqtazruYTrkJjslrQg7J6I64qU7KeAIO2ZleyduO2VmOyEuOyalC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tbWFteGltdW0tZ3Vlc3QtY291bnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPENvdW50ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIuy1nOuMgCDsiJnrsJUg7J247JuQXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHttYXhpbXVtR3Vlc3RDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VNYXhpbXVtR3Vlc3RDb3VudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkcm9vbS1jb3VudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0b3IgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YOy5qOyLpCAke2JlZHJvb21Db3VudH3qsJxgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJlZHJvb21Db3VudH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuqyjOyKpO2KuOqwgCDsgqzsmqntlaAg7IiYIOyeiOuKlCDsuajsi6TsnYAg66qHIOqwnOyduOqwgOyalD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2JlZHJvb21Db3VudExpc3R9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC1jb3VudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRlciBsYWJlbD1cIuy5qOuMgFwiIHZhbHVlPXtiZWRDb3VudH0gb25DaGFuZ2U9e29uQ2hhbmdlQmVkQ291bnR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDQ+7Lmo64yAIOycoO2YlTwvaDQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAg6rCBIOy5qOyLpOyXkCDrhpPsnbgg7Lmo64yAIOycoO2YleydhCDrqoXsi5ztlZjrqbQg7IiZ7IaM7JeQIOy5qOuMgOqwgCDslrTrlrvqsowg6rWs67mE65CY7Ja0IOyeiOuKlOyngCDqsozsiqTtirjqsIAg7J6YIO2MjOyVhe2VoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxSZWdpc3RlclJvb21CZWRMaXN0IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21CZWRyb29tczsiXSwic291cmNlUm9vdCI6IiJ9