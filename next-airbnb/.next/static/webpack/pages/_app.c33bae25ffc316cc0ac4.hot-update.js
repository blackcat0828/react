self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/common/Selector.tsx":
/*!****************************************!*\
  !*** ./components/common/Selector.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\react\\next-airbnb\\components\\common\\Selector.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var normalSelectorStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["width:100%;height:46px;select{width:100%;height:100%;background-color:white;border:1px solid ", ";font-size:16px;padding:0 11px;border-radius:4px;outline:none;-webkit-appearance:none;background-image:url(\"/static/svg/common/selector/selector_down_arrow.svg\");background-position:right 11px center;background-repeat:no-repeat;&:focus{border-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.dark_cyan);
var RegisterSelectorStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["width:100%;label{position:relative;}span{display:block;font-size:16px;color:", ";font-weight:600;margin-bottom:8px;}select{width:100%;height:56px;border-radius:8px;border:1px solid ", ";padding:0 14px 0 12px;appearance:none;outline:none;-webkit-appearance:none;background-image:url(\"/static/svg/common/selector/register_selector_down_arrow.svg\");background-position:right 14px center;background-repeat:no-repeat;font-size:16px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_b0);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "Selector__Container",
  componentId: "sc-1y4w82y-0"
})(["", ";", ";select{", " &:disabled{background-image:url(\"/static/svg/common/selector/disabled_register_selector_down_arrow.svg\");background-color:", ";border-color:", ";color:", ";cursor:not-allowed;}}.selector-warning{margin-top:8px;display:flex;align-items:center;svg{margin-right:4px;}p{font-size:12px;color:", ";}}"], function (_ref) {
  var type = _ref.type;
  return type === "normal" && normalSelectorStyle;
}, function (_ref2) {
  var type = _ref2.type;
  return type === "register" && RegisterSelectorStyle;
}, function (_ref3) {
  var validateMode = _ref3.validateMode,
      isValid = _ref3.isValid;

  if (validateMode) {
    if (!isValid) {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["border-color:", ";background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.tawny, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.snow);
    }

    return (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["border-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.dark_cyan);
  }

  return undefined;
}, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_e5, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_e5, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.davidson_orange);
_c = Container;

var Selector = function Selector(_ref4) {
  _s();

  var label = _ref4.label,
      _ref4$options = _ref4.options,
      options = _ref4$options === void 0 ? [] : _ref4$options,
      _ref4$disabledOptions = _ref4.disabledOptions,
      disabledOptions = _ref4$disabledOptions === void 0 ? [] : _ref4$disabledOptions,
      isValid = _ref4.isValid,
      _ref4$useValidation = _ref4.useValidation,
      useValidation = _ref4$useValidation === void 0 ? true : _ref4$useValidation,
      _ref4$errorMessage = _ref4.errorMessage,
      errorMessage = _ref4$errorMessage === void 0 ? "옵션을 선택하세요." : _ref4$errorMessage,
      _ref4$type = _ref4.type,
      type = _ref4$type === void 0 ? "normal" : _ref4$type,
      props = (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref4, ["label", "options", "disabledOptions", "isValid", "useValidation", "errorMessage", "type"]);

  var validateMode = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.common.validateMode;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    isValid: !!isValid,
    validateMode: validateMode,
    type: type,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", _objectSpread(_objectSpread({}, props), {}, {
      children: [disabledOptions.map(function (option, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
          value: option,
          disabled: true,
          children: option
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, _this);
      }), options.map(function (option, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
          value: option,
          children: option
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, _this);
      })]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 9
  }, _this);
};

_s(Selector, "3u4UUMx5o2DI04Mt0EhCPD9r7zw=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_5__.useSelector];
});

_c2 = Selector;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(Selector));

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Selector");
$RefreshReg$(_c3, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0b3IudHN4Il0sIm5hbWVzIjpbIm5vcm1hbFNlbGVjdG9yU3R5bGUiLCJjc3MiLCJwYWxldHRlIiwiUmVnaXN0ZXJTZWxlY3RvclN0eWxlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwidHlwZSIsInZhbGlkYXRlTW9kZSIsImlzVmFsaWQiLCJ1bmRlZmluZWQiLCJTZWxlY3RvciIsImxhYmVsIiwib3B0aW9ucyIsImRpc2FibGVkT3B0aW9ucyIsInVzZVZhbGlkYXRpb24iLCJlcnJvck1lc3NhZ2UiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb21tb24iLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsbUJBQW1CLEdBQUdDLHNEQUFILDBXQVFEQyw0REFSQyxFQWtCSEEsOERBbEJHLENBQXpCO0FBdUJBLElBQU1DLHFCQUFxQixHQUFHRixzREFBSCxxYkFRZEMsNERBUmMsRUFnQkhBLDREQWhCRyxDQUEzQjtBQWtDQSxJQUFNRSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVVQUNYO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxLQUFLLFFBQVQsSUFBcUJOLG1CQUFuQztBQUFBLENBRFcsRUFFWDtBQUFBLE1BQUdNLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksS0FBSyxVQUFULElBQXVCSCxxQkFBckM7QUFBQSxDQUZXLEVBS1QsaUJBQStCO0FBQUEsTUFBNUJJLFlBQTRCLFNBQTVCQSxZQUE0QjtBQUFBLE1BQWRDLE9BQWMsU0FBZEEsT0FBYzs7QUFDL0IsTUFBSUQsWUFBSixFQUFrQjtBQUNoQixRQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaLGFBQU9QLHNEQUFQLCtDQUNrQkMsMERBRGxCLEVBRXNCQSx5REFGdEI7QUFJRDs7QUFDRCxXQUFPRCxzREFBUCx5QkFDa0JDLDhEQURsQjtBQUdEOztBQUNELFNBQU9PLFNBQVA7QUFDRCxDQWxCVSxFQXNCV1AsNERBdEJYLEVBdUJPQSw0REF2QlAsRUF3QkFBLDREQXhCQSxFQXVDQUEsb0VBdkNBLENBQWY7S0FBTUUsUzs7QUF1RE4sSUFBTU0sUUFBMEIsR0FBRyxTQUE3QkEsUUFBNkIsUUFRakI7QUFBQTs7QUFBQSxNQVBkQyxLQU9jLFNBUGRBLEtBT2M7QUFBQSw0QkFOZEMsT0FNYztBQUFBLE1BTmRBLE9BTWMsOEJBTkosRUFNSTtBQUFBLG9DQUxkQyxlQUtjO0FBQUEsTUFMZEEsZUFLYyxzQ0FMSSxFQUtKO0FBQUEsTUFKZEwsT0FJYyxTQUpkQSxPQUljO0FBQUEsa0NBSGRNLGFBR2M7QUFBQSxNQUhkQSxhQUdjLG9DQUhFLElBR0Y7QUFBQSxpQ0FGZEMsWUFFYztBQUFBLE1BRmRBLFlBRWMsbUNBRkMsWUFFRDtBQUFBLHlCQURkVCxJQUNjO0FBQUEsTUFEZEEsSUFDYywyQkFEUCxRQUNPO0FBQUEsTUFBWFUsS0FBVzs7QUFDZCxNQUFNVCxZQUFZLEdBQUdVLG1EQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsTUFBTixDQUFhWixZQUF4QjtBQUFBLEdBQUQsQ0FBaEM7QUFDQSxzQkFDSSw4REFBQyxTQUFEO0FBQVcsV0FBTyxFQUFFLENBQUMsQ0FBQ0MsT0FBdEI7QUFBK0IsZ0JBQVksRUFBRUQsWUFBN0M7QUFBMkQsUUFBSSxFQUFFRCxJQUFqRTtBQUFBLDJCQUNJLHdHQUFZVSxLQUFaO0FBQUEsaUJBQ0tILGVBQWUsQ0FBQ08sR0FBaEIsQ0FBb0IsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsNEJBQ2pCO0FBQW9CLGVBQUssRUFBRUQsTUFBM0I7QUFBbUMsa0JBQVEsTUFBM0M7QUFBQSxvQkFDS0E7QUFETCxXQUFhQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBcEIsQ0FETCxFQU1LVixPQUFPLENBQUNRLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSw0QkFDVDtBQUFvQixlQUFLLEVBQUVELE1BQTNCO0FBQUEsb0JBQ0tBO0FBREwsV0FBYUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBWixDQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQTFCRDs7R0FBTVosUTtVQVNtQk8sK0M7OztNQVRuQlAsUTtBQTRCTiwrREFBZSxtQkFBQWEsaURBQUEsQ0FBV2IsUUFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzMzYmFlMjVmZmMzMTZjYzBhYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCBXYXJuaW5nSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvY29tbW9uL3dhcm5pbmcuc3ZnXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBub3JtYWxTZWxlY3RvclN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDZweDtcclxuXHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9lYn07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9zdmcvY29tbW9uL3NlbGVjdG9yL3NlbGVjdG9yX2Rvd25fYXJyb3cuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTFweCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJTZWxlY3RvclN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9iMH07XHJcbiAgICBwYWRkaW5nOiAwIDE0cHggMCAxMnB4O1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL3N2Zy9jb21tb24vc2VsZWN0b3IvcmVnaXN0ZXJfc2VsZWN0b3JfZG93bl9hcnJvdy5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxNHB4IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmludGVyZmFjZSBTZWxlY3RvckNvbnRhaW5lclByb3BzIHtcclxuICBpc1ZhbGlkOiBib29sZWFuO1xyXG4gIHZhbGlkYXRlTW9kZTogYm9vbGVhbjtcclxuICB0eXBlOiBcInJlZ2lzdGVyXCIgfCBcIm5vcm1hbFwiO1xyXG59XHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8U2VsZWN0b3JDb250YWluZXJQcm9wcz5gXHJcbiAgJHsoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwibm9ybWFsXCIgJiYgbm9ybWFsU2VsZWN0b3JTdHlsZX07XHJcbiAgJHsoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwicmVnaXN0ZXJcIiAmJiBSZWdpc3RlclNlbGVjdG9yU3R5bGV9O1xyXG5cclxuICBzZWxlY3Qge1xyXG4gICAgJHsoeyB2YWxpZGF0ZU1vZGUsIGlzVmFsaWQgfSkgPT4ge1xyXG4gICAgICBpZiAodmFsaWRhdGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS50YXdueX07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5zbm93fTtcclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH19XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvc3ZnL2NvbW1vbi9zZWxlY3Rvci9kaXNhYmxlZF9yZWdpc3Rlcl9zZWxlY3Rvcl9kb3duX2Fycm93LnN2Z1wiKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmdyYXlfZjd9O1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2U1fTtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2U1fTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3Rvci13YXJuaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5kYXZpZHNvbl9vcmFuZ2V9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5TZWxlY3RIVE1MQXR0cmlidXRlczxIVE1MU2VsZWN0RWxlbWVudD4ge1xyXG4gICAgb3B0aW9ucz86IHN0cmluZ1tdO1xyXG4gICAgZGlzYWJsZWRPcHRpb25zPzogc3RyaW5nW107XHJcbiAgICB2YWx1ZT86IHN0cmluZztcclxuICAgIGlzVmFsaWQ/OiBib29sZWFuO1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICB1c2VWYWxpZGF0aW9uPzogYm9vbGVhbjtcclxuICAgIGVycm9yTWVzc2FnZT86IHN0cmluZztcclxuICAgIHR5cGU/OiBcInJlZ2lzdGVyXCIgfCBcIm5vcm1hbFwiO1xyXG59XHJcblxyXG5jb25zdCBTZWxlY3RvcjogUmVhY3QuRkM8SVByb3BzPiA9ICh7XHJcbiAgICBsYWJlbCxcclxuICAgIG9wdGlvbnMgPSBbXSwgXHJcbiAgICBkaXNhYmxlZE9wdGlvbnMgPSBbXSwgXHJcbiAgICBpc1ZhbGlkLCBcclxuICAgIHVzZVZhbGlkYXRpb24gPSB0cnVlLFxyXG4gICAgZXJyb3JNZXNzYWdlID0gXCLsmLXshZjsnYQg7ISg7YOd7ZWY7IS47JqULlwiLFxyXG4gICAgdHlwZSA9IFwibm9ybWFsXCIsXHJcbiAgICAuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRlTW9kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbW9uLnZhbGlkYXRlTW9kZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgaXNWYWxpZD17ISFpc1ZhbGlkfSB2YWxpZGF0ZU1vZGU9e3ZhbGlkYXRlTW9kZX0gdHlwZT17dHlwZX0+XHJcbiAgICAgICAgICAgIDxzZWxlY3Qgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgICAgIHtkaXNhYmxlZE9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9ufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZWxlY3Rvcik7Il0sInNvdXJjZVJvb3QiOiIifQ==