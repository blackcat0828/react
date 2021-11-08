self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/common/input.tsx":
/*!*************************************!*\
  !*** ./components/common/input.tsx ***!
  \*************************************/
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




var _jsxFileName = "C:\\react\\next-airbnb\\components\\common\\input.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "input__Container",
  componentId: "sc-147drp4-0"
})(["label{span{display:block;margin-bottom:8px;}}input{position:relative;width:100%;height:46px;padding:", ";border:1px solid ", ";border-radius:4px;font-size:16px;outline:none;&::placeholder{color:", ";}&:focus{border-color:", ";}}.input-icon-wrapper{position:absolute;top:0;right:11px;height:46px;display:flex;align-items:center;}svg{position:absolute;right:11px;height:46px;top:14px;}.input-error-message{margin-top:8px;font-weight:600;font-size:14px;color:", ";}", " ", ""], function (_ref) {
  var iconExist = _ref.iconExist;
  return iconExist ? "0 44px 0 11px " : "0 11px";
}, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.tawny, function (_ref2) {
  var useValidation = _ref2.useValidation,
      isValid = _ref2.isValid;
  return useValidation && !isValid && (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["input{background-color:", ";border-color:", ";&:focus{border-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.snow, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.orange, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.orange);
}, function (_ref3) {
  var useValidation = _ref3.useValidation,
      isValid = _ref3.isValid;
  return useValidation && isValid && (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["input{border-color:", ";}"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.dark_cyan);
}); //React.InputHTMLAttributes<HTMLInputElement>는 <input> 태그가 가지는 속성들에 대한 타입입니다.
// extends를 사용하여 IProps는 <input> 태그가 가지는 속성을 확장하여 사용하게 됩니다.
//그리고 icon?: JSX.Element;는 타입이 JSX 엘리먼트인 icon 값을 받지 않을 수도 undefined일 수도 있다는 것을 의미합니다.
//결국 icon?:JSX.Element;   icon: JSX.Element | undefined; 는 같은 코드입니다. 하지만 의미상으로
//icon?:JSX.Element는 icon 값을 사용하지 않아도 된다로 사용합니다.
//icon: JSX.Element | undefined;는 icon을 받는데 undefined일 수 있다로 사용합니다.
//<Input icon={undefined} /> 사용하는 의미상 다르기 때문에 어떤 방식을 사용해도 코드상으로는 문제가 없습니다.

_c = Container;

var Input = function Input(_ref4) {
  _s();

  var icon = _ref4.icon,
      _ref4$isValid = _ref4.isValid,
      isValid = _ref4$isValid === void 0 ? false : _ref4$isValid,
      _ref4$useValidation = _ref4.useValidation,
      useValidation = _ref4$useValidation === void 0 ? true : _ref4$useValidation,
      errorMessage = _ref4.errorMessage,
      props = (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref4, ["icon", "isValid", "useValidation", "errorMessage"]);

  var validateMode = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.common.validateMode;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    iconExist: !!icon,
    isValid: isValid,
    useValidation: validateMode && useValidation,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, _this), icon, useValidation && validateMode && !isValid && errorMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      className: "input-error=message",
      children: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }, _this);
};

_s(Input, "3u4UUMx5o2DI04Mt0EhCPD9r7zw=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_5__.useSelector];
});

_c2 = Input;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(Input));

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Input");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vaW5wdXQudHN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImljb25FeGlzdCIsInBhbGV0dGUiLCJ1c2VWYWxpZGF0aW9uIiwiaXNWYWxpZCIsImNzcyIsIklucHV0IiwiaWNvbiIsImVycm9yTWVzc2FnZSIsInByb3BzIiwidmFsaWRhdGVNb2RlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbW1vbiIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnZUFXQTtBQUFBLE1BQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFNBQW9CQSxTQUFTLEdBQUcsZ0JBQUgsR0FBc0IsUUFBbkQ7QUFBQSxDQVhBLEVBWVNDLDREQVpULEVBaUJBQSw0REFqQkEsRUFvQk9BLDhEQXBCUCxFQXlDRkEsMERBekNFLEVBMkNYO0FBQUEsTUFBR0MsYUFBSCxTQUFHQSxhQUFIO0FBQUEsTUFBa0JDLE9BQWxCLFNBQWtCQSxPQUFsQjtBQUFBLFNBQ0FELGFBQWEsSUFDYixDQUFDQyxPQURELElBRUFDLHNEQUZBLGlGQUl3QkgseURBSnhCLEVBS29CQSwyREFMcEIsRUFPc0JBLDJEQVB0QixDQURBO0FBQUEsQ0EzQ1csRUF1RFg7QUFBQSxNQUFHQyxhQUFILFNBQUdBLGFBQUg7QUFBQSxNQUFrQkMsT0FBbEIsU0FBa0JBLE9BQWxCO0FBQUEsU0FDQUQsYUFBYSxJQUNiQyxPQURBLElBRUFDLHNEQUZBLGdDQUlvQkgsOERBSnBCLENBREE7QUFBQSxDQXZEVyxDQUFmLEMsQ0FrRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBeEVNSCxTOztBQWdGTixJQUFNTyxLQUF1QixHQUFHLFNBQTFCQSxLQUEwQixRQUloQjtBQUFBOztBQUFBLE1BSmtCQyxJQUlsQixTQUprQkEsSUFJbEI7QUFBQSw0QkFIZEgsT0FHYztBQUFBLE1BSGRBLE9BR2MsOEJBSEosS0FHSTtBQUFBLGtDQUZkRCxhQUVjO0FBQUEsTUFGZEEsYUFFYyxvQ0FGRSxJQUVGO0FBQUEsTUFEZEssWUFDYyxTQURkQSxZQUNjO0FBQUEsTUFBWEMsS0FBVzs7QUFDWixNQUFNQyxZQUFZLEdBQUdDLG1EQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSCxZQUF4QjtBQUFBLEdBQUQsQ0FBaEM7QUFDQSxzQkFDSSw4REFBQyxTQUFEO0FBQ0UsYUFBUyxFQUFFLENBQUMsQ0FBQ0gsSUFEZjtBQUVFLFdBQU8sRUFBRUgsT0FGWDtBQUdFLGlCQUFhLEVBQUVNLFlBQVksSUFBSVAsYUFIakM7QUFBQSw0QkFJSSx5RkFBV00sS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosRUFLS0YsSUFMTCxFQU1LSixhQUFhLElBQUlPLFlBQWpCLElBQWlDLENBQUNOLE9BQWxDLElBQTZDSSxZQUE3QyxpQkFDQztBQUFHLGVBQVMsRUFBQyxxQkFBYjtBQUFBLGdCQUFvQ0E7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBWUgsQ0FsQkQ7O0dBQU1GLEs7VUFLbUJLLCtDOzs7TUFMbkJMLEs7QUFvQk4sK0RBQWUsbUJBQUFRLGlEQUFBLENBQVdSLEtBQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFhOGQ1ODAxZGU1ZTJkODAyYWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQsIHtjc3N9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcblxyXG5cclxudHlwZSBJbnB1dENvbnRhaW5lclByb3BzID0ge1xyXG4gIGljb25FeGlzdDogYm9vbGVhbjtcclxuICBpc1ZhbGlkOiBib29sZWFuO1xyXG4gIHVzZVZhbGlkYXRpb246IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8SW5wdXRDb250YWluZXJQcm9wcz5gXHJcbiAgbGFiZWwge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgcGFkZGluZzogJHsoeyBpY29uRXhpc3QgfSkgPT4gKGljb25FeGlzdCA/IFwiMCA0NHB4IDAgMTFweCBcIiA6IFwiMCAxMXB4XCIpfTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2VifTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAmIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgfVxyXG4gICAgJiA6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5wdXQtaWNvbi13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAxMXB4O1xyXG4gICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIHN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTFweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIHRvcDogMTRweDtcclxuICB9XHJcbiAgLmlucHV0LWVycm9yLW1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUudGF3bnl9O1xyXG4gIH1cclxuICAkeyh7IHVzZVZhbGlkYXRpb24sIGlzVmFsaWQgfSkgPT5cclxuICAgIHVzZVZhbGlkYXRpb24gJiZcclxuICAgICFpc1ZhbGlkICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuc25vd307XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcclxuICAgICAgICAmIDpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYH1cclxuICAkeyh7IHVzZVZhbGlkYXRpb24sIGlzVmFsaWQgfSkgPT5cclxuICAgIHVzZVZhbGlkYXRpb24gJiZcclxuICAgIGlzVmFsaWQgJiZcclxuICAgIGNzc2BcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICAgIH1cclxuICAgIGB9XHJcblxyXG5gO1xyXG5cclxuLy9SZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+64qUIDxpbnB1dD4g7YOc6re46rCAIOqwgOyngOuKlCDsho3shLHrk6Tsl5Ag64yA7ZWcIO2DgOyeheyeheuLiOuLpC5cclxuLy8gZXh0ZW5kc+ulvCDsgqzsmqntlZjsl6wgSVByb3Bz64qUIDxpbnB1dD4g7YOc6re46rCAIOqwgOyngOuKlCDsho3shLHsnYQg7ZmV7J6l7ZWY7JesIOyCrOyaqe2VmOqyjCDrkKnri4jri6QuXHJcbi8v6re466as6rOgIGljb24/OiBKU1guRWxlbWVudDvripQg7YOA7J6F7J20IEpTWCDsl5jrpqzrqLztirjsnbggaWNvbiDqsJLsnYQg67Cb7KeAIOyViuydhCDsiJjrj4QgdW5kZWZpbmVk7J28IOyImOuPhCDsnojri6TripQg6rKD7J2EIOydmOuvuO2VqeuLiOuLpC5cclxuLy/qsrDqta0gaWNvbj86SlNYLkVsZW1lbnQ7ICAgaWNvbjogSlNYLkVsZW1lbnQgfCB1bmRlZmluZWQ7IOuKlCDqsJnsnYAg7L2U65Oc7J6F64uI64ukLiDtlZjsp4Drp4wg7J2Y66+47IOB7Jy866GcXHJcbi8vaWNvbj86SlNYLkVsZW1lbnTripQgaWNvbiDqsJLsnYQg7IKs7Jqp7ZWY7KeAIOyViuyVhOuPhCDrkJzri6TroZwg7IKs7Jqp7ZWp64uI64ukLlxyXG4vL2ljb246IEpTWC5FbGVtZW50IHwgdW5kZWZpbmVkO+uKlCBpY29u7J2EIOuwm+uKlOuNsCB1bmRlZmluZWTsnbwg7IiYIOyeiOuLpOuhnCDsgqzsmqntlanri4jri6QuXHJcbi8vPElucHV0IGljb249e3VuZGVmaW5lZH0gLz4g7IKs7Jqp7ZWY64qUIOydmOuvuOyDgSDri6TrpbTquLAg65WM66y47JeQIOyWtOuWpCDrsKnsi53snYQg7IKs7Jqp7ZW064+EIOy9lOuTnOyDgeycvOuhnOuKlCDrrLjsoJzqsIAg7JeG7Iq164uI64ukLlxyXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XHJcbiAgICBpY29uPzogSlNYLkVsZW1lbnQ7XHJcbiAgICBpc1ZhbGlkPzogYm9vbGVhbjtcclxuICAgIHVzZVZhbGlkYXRpb24/OiBib29sZWFuO1xyXG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9ICh7aWNvbixcclxuICBpc1ZhbGlkID0gZmFsc2UsXHJcbiAgdXNlVmFsaWRhdGlvbiA9IHRydWUsXHJcbiAgZXJyb3JNZXNzYWdlLFxyXG4gIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhdGVNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24udmFsaWRhdGVNb2RlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBcclxuICAgICAgICAgIGljb25FeGlzdD17ISFpY29ufVxyXG4gICAgICAgICAgaXNWYWxpZD17aXNWYWxpZH1cclxuICAgICAgICAgIHVzZVZhbGlkYXRpb249e3ZhbGlkYXRlTW9kZSAmJiB1c2VWYWxpZGF0aW9ufT5cclxuICAgICAgICAgICAgPGlucHV0IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgIHt1c2VWYWxpZGF0aW9uICYmIHZhbGlkYXRlTW9kZSAmJiAhaXNWYWxpZCAmJiBlcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlucHV0LWVycm9yPW1lc3NhZ2VcIj57ZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKElucHV0KTsiXSwic291cmNlUm9vdCI6IiJ9