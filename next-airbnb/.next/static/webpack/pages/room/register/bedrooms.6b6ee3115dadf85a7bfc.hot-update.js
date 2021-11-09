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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _common_Counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Counter */ "./components/common/Counter.tsx");
/* harmony import */ var _lib_api_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/api/utils */ "./lib/api/utils.ts");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBedrooms.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
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
  }; //* 침대 개수 변경 시


  var onChangeBedCount = function onChangeBedCount(value) {
    return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_5__.registerRoomActions.setBedCount(value));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uC219\uC18C\uC5D0 \uC5BC\uB9C8\uB098 \uB9CE\uC740 \uC778\uC6D0\uC774 \uC219\uBC15\uD560 \uC218 \uC788\uB098\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "2\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "room-register-step-info",
      children: "\uBAA8\uB4E0 \uAC8C\uC2A4\uD2B8\uAC00 \uD3B8\uC548\uD558\uAC8C \uC219\uBC15\uD560 \uC218 \uC788\uB3C4\uB85D \uCE68\uB300\uAC00 \uCDA9\uBD84\uD788 \uAD6C\uBE44\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-maximum-guest-count-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Counter__WEBPACK_IMPORTED_MODULE_6__.default, {
        label: "\uCD5C\uB300 \uC219\uBC15 \uC778\uC6D0",
        value: maximumGuestCount,
        onChange: onChangeMaximumGuestCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-bedroom-count-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_8__.default, {
        type: "register",
        value: "\uCE68\uC2E4 ".concat(bedroomCount, "\uAC1C"),
        onChange: onChangeBedroomCount,
        label: "\uAC8C\uC2A4\uD2B8\uAC00 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uCE68\uC2E4\uC740 \uBA87 \uAC1C\uC778\uAC00\uC694?",
        options: bedroomCountList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-bed-count-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Counter__WEBPACK_IMPORTED_MODULE_6__.default, {
        label: "\uCE68\uB300",
        value: bedCount,
        onChange: onChangeBedCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZHJvb21zLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiUmVnaXN0ZXJSb29tQmVkcm9vbXMiLCJiZWRyb29tQ291bnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwibWF4aW11bUd1ZXN0Q291bnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VNYXhpbXVtR3Vlc3RDb3VudCIsInZhbHVlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsIm9uQ2hhbmdlQmVkcm9vbUNvdW50IiwiZXZlbnQiLCJnZXROdW1iZXIiLCJ0YXJnZXQiLCJvbkNoYW5nZUJlZENvdW50IiwiYmVkcm9vbUNvdW50TGlzdCIsImJlZENvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNDFCQVVGQyw0REFWRSxFQXdEYUEsNERBeERiLEVBMERrQkEsNERBMURsQixDQUFmO0tBQU1GLFM7O0FBK0ROLElBQU1HLG9CQUE4QixHQUFHLFNBQWpDQSxvQkFBaUMsR0FBTTtBQUFBOztBQUN6QyxNQUFNQyxZQUFZLEdBQUdDLG1EQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVVBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkgsWUFBN0I7QUFBQSxHQUFELENBQWhDO0FBRUEsTUFBTUksaUJBQWlCLEdBQUdILG1EQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkMsaUJBQTlCO0FBQUEsR0FBRCxDQUFyQztBQUVBLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUIsQ0FMeUMsQ0FPekM7O0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDQyxLQUFELEVBQWtCO0FBQ2hESCxZQUFRLENBQUNJLHlGQUFBLENBQXlDRCxLQUF6QyxDQUFELENBQVI7QUFDSCxHQUZELENBUnlDLENBWXpDOzs7QUFDQSxNQUFNRSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQ7QUFBQSxXQUN6Qk4sUUFBUSxDQUNKSSxvRkFBQSxDQUFvQ0cseURBQVMsQ0FBQ0QsS0FBSyxDQUFDRSxNQUFOLENBQWFMLEtBQWQsQ0FBVCxJQUFpQyxDQUFyRSxDQURJLENBRGlCO0FBQUEsR0FBN0IsQ0FieUMsQ0FtQnpDOzs7QUFDQSxNQUFNTSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNOLEtBQUQ7QUFBQSxXQUFtQkgsUUFBUSxDQUFDSSxnRkFBQSxDQUFnQ0QsS0FBaEMsQ0FBRCxDQUEzQjtBQUFBLEdBQXpCOztBQUVBLHNCQUNJLDhEQUFDLFNBQUQ7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQUcsZUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFNSTtBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLDZCQUNJLDhEQUFDLG9EQUFEO0FBQ0ksYUFBSyxFQUFHLHdDQURaO0FBRUksYUFBSyxFQUFJSixpQkFGYjtBQUdJLGdCQUFRLEVBQUVHO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixlQWFJO0FBQUssZUFBUyxFQUFDLHFDQUFmO0FBQUEsNkJBQ0ksOERBQUMscURBQUQ7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLGFBQUsseUJBQVFQLFlBQVIsV0FGVDtBQUdJLGdCQUFRLEVBQUVVLG9CQUhkO0FBSUksYUFBSyxFQUFDLHFIQUpWO0FBS0ksZUFBTyxFQUFFSztBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkosZUFzQkk7QUFBSyxlQUFTLEVBQUMsaUNBQWY7QUFBQSw2QkFDSSw4REFBQyxvREFBRDtBQUFTLGFBQUssRUFBQyxjQUFmO0FBQW9CLGFBQUssRUFBRUMsUUFBM0I7QUFBcUMsZ0JBQVEsRUFBRUY7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0QkgsQ0FsREQ7O0dBQU1mLG9CO1VBQ21CRSwrQyxFQUVLQSwrQyxFQUVUSyxvRDs7O01BTGZQLG9CO0FBb0ROLCtEQUFlQSxvQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2JlZHJvb21zLjZiNmVlMzExNWRhZGY4NWE3YmZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vLi4vY29tbW9uL0NvdW50ZXJcIjtcclxuaW1wb3J0IHsgZ2V0TnVtYmVyIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hcGkvdXRpbHNcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21tb24vU2VsZWN0b3JcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItcm9vbS1zdGVwLWluZm8ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLW1hbXhpbXVtLWd1ZXN0LWNvdW50LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkcm9vbS1jb3VudC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC1jb3VudC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC1jb3VudC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtbGlzdC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA1NDhweDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZHJvb20ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyOHB4IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CZWRyb29tczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBiZWRyb29tQ291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT4gc3RhdGUucmVnaXN0ZXJSb29tLmJlZHJvb21Db3VudCk7XHJcblxyXG4gICAgY29uc3QgbWF4aW11bUd1ZXN0Q291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5tYXhpbXVtR3Vlc3RDb3VudCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vKiDstZzrjIAg7IiZ67CVIOyduOybkCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZU1heGltdW1HdWVzdENvdW50ID0gKHZhbHVlOm51bWJlcikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0TWF4aW11bUd1ZXN0Q291bnQodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyog7Lmo7IukIOqwnOyImCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJlZHJvb21Db3VudCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiBcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCZWRyb29tQ291bnQoZ2V0TnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkgfHwgMClcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAvLyog7Lmo64yAIOqwnOyImCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJlZENvdW50ID0gKHZhbHVlOiBudW1iZXIpID0+IGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QmVkQ291bnQodmFsdWUpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMj7siJnshozsl5Ag7Ja866eI64KYIOunjuydgCDsnbjsm5DsnbQg7IiZ67CV7ZWgIOyImCDsnojrgpjsmpQ/PC9oMj5cclxuICAgICAgICAgICAgPGgzPjLri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb29tLXJlZ2lzdGVyLXN0ZXAtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAg66qo65OgIOqyjOyKpO2KuOqwgCDtjrjslYjtlZjqsowg7IiZ67CV7ZWgIOyImCDsnojrj4TroZ0g7Lmo64yA6rCAIOy2qeu2hO2eiCDqtazruYTrkJjslrQg7J6I64qU7KeAIO2ZleyduO2VmOyEuOyalC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tbWF4aW11bS1ndWVzdC1jb3VudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRlciBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwi7LWc64yAIOyImeuwlSDsnbjsm5BcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge21heGltdW1HdWVzdENvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU1heGltdW1HdWVzdENvdW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWRyb29tLWNvdW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvciBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtg7Lmo7IukICR7YmVkcm9vbUNvdW50feqwnGB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQmVkcm9vbUNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6rKM7Iqk7Yq46rCAIOyCrOyaqe2VoCDsiJgg7J6I64qUIOy5qOyLpOydgCDrqocg6rCc7J246rCA7JqUP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17YmVkcm9vbUNvdW50TGlzdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLWNvdW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDb3VudGVyIGxhYmVsPVwi7Lmo64yAXCIgdmFsdWU9e2JlZENvdW50fSBvbkNoYW5nZT17b25DaGFuZ2VCZWRDb3VudH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJlZHJvb21zOyJdLCJzb3VyY2VSb290IjoiIn0=