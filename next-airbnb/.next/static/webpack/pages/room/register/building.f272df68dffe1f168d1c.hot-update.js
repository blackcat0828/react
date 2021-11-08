self["webpackHotUpdate_N_E"]("pages/room/register/building",{

/***/ "./components/common/RadioGroup.tsx":
/*!******************************************!*\
  !*** ./components/common/RadioGroup.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\react\\next-airbnb\\components\\common\\RadioGroup.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "RadioGroup__Container",
  componentId: "sc-syhuae-0"
})([".radio-label{font-size:16px;font-weight:600;color:", ";margin-bottom:32px;}.radio-list-wrapper{&:after{display:block;content:\"\";clear:both;}}label{float:left;margin-bottom:24px;font-size:16px;line-height:1.2;cursor:pointer;clear:both;&:last-child{margin-bottom:0;}}input[type=\"radio\"]{width:16px;height:16px;margin:0;position:relative;margin:0;margin-right:12px;flex-shrink:0;font-size:16px;-webkit-appearance:none;border:1px solid ", ";border-radius:50%;outline:none;cursor:pointer;", "}input[type=\"radio\"]:checked{background-color:", ";border:0;}input[type=\"radio\"]:checked:after{content:\"\";width:6px;height:6px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;background-color:white;border-radius:50%;display:block;}.radio-description{display:block;margin-top:5px;margin-left:28px;}.radio-group-warning{margin-top:8px;display:flex;align-items:center;svg{margin-right:4px;}p{font-size:12px;color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_b0, function (_ref) {
  var validateMode = _ref.validateMode,
      isValid = _ref.isValid;

  if (validateMode) {
    if (!isValid) {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)(["border-color:", ";background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.tawny, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.snow);
    }

    return (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)(["border-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.dark_cyan);
  }

  return undefined;
}, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.davidson_orange);
_c = Container;

var RadioGroup = function RadioGroup(_ref2) {
  _s();

  var label = _ref2.label,
      value = _ref2.value,
      _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? [] : _ref2$options,
      _onChange = _ref2.onChange,
      isValid = _ref2.isValid,
      _ref2$errorMessage = _ref2.errorMessage,
      errorMessage = _ref2$errorMessage === void 0 ? "옵션을 선택하세요" : _ref2$errorMessage;
  var validateMode = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.common.validateMode;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    isValid: !!isValid,
    validateMode: validateMode,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "radio-label",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "radio=list-wrapper",
      children: options.map(function (option, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "radio",
            checked: value === option.value,
            onChange: function onChange() {
              return _onChange && _onChange(option.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: [option.label, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "radio-description",
              children: option.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 9
  }, _this);
};

_s(RadioGroup, "3u4UUMx5o2DI04Mt0EhCPD9r7zw=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c2 = RadioGroup;
/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RadioGroup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vUmFkaW9Hcm91cC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsInZhbGlkYXRlTW9kZSIsImlzVmFsaWQiLCJjc3MiLCJ1bmRlZmluZWQiLCJSYWRpb0dyb3VwIiwibGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImVycm9yTWVzc2FnZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb21tb24iLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsdTZCQUlGQyw0REFKRSxFQXFDU0EsNERBckNULEVBMENULGdCQUErQjtBQUFBLE1BQTVCQyxZQUE0QixRQUE1QkEsWUFBNEI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQy9CLE1BQUlELFlBQUosRUFBa0I7QUFDaEIsUUFBSSxDQUFDQyxPQUFMLEVBQWM7QUFDWixhQUFPQyxzREFBUCwrQ0FDa0JILDBEQURsQixFQUVzQkEseURBRnRCO0FBSUQ7O0FBQ0QsV0FBT0csc0RBQVAseUJBQ2tCSCw4REFEbEI7QUFHRDs7QUFDRCxTQUFPSSxTQUFQO0FBQ0QsQ0F2RFUsRUEyRFNKLDhEQTNEVCxFQTZGQUEsb0VBN0ZBLENBQWY7S0FBTUYsUzs7QUEyR04sSUFBTU8sVUFBNEIsR0FBRyxTQUEvQkEsVUFBK0IsUUFPL0I7QUFBQTs7QUFBQSxNQU5GQyxLQU1FLFNBTkZBLEtBTUU7QUFBQSxNQUxGQyxLQUtFLFNBTEZBLEtBS0U7QUFBQSw0QkFKRkMsT0FJRTtBQUFBLE1BSkZBLE9BSUUsOEJBSlEsRUFJUjtBQUFBLE1BSEZDLFNBR0UsU0FIRkEsUUFHRTtBQUFBLE1BRkZQLE9BRUUsU0FGRkEsT0FFRTtBQUFBLGlDQURGUSxZQUNFO0FBQUEsTUFERkEsWUFDRSxtQ0FEYSxXQUNiO0FBQ0YsTUFBTVQsWUFBWSxHQUFHVSxtREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE1BQU4sQ0FBYVosWUFBeEI7QUFBQSxHQUFELENBQWhDO0FBRUEsc0JBQ0ksOERBQUMsU0FBRDtBQUFXLFdBQU8sRUFBRSxDQUFDLENBQUNDLE9BQXRCO0FBQStCLGdCQUFZLEVBQUVELFlBQTdDO0FBQUEsNEJBQ0k7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUFBLGdCQUE0Qks7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSxnQkFDS0UsT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsNEJBQ1Q7QUFBQSxrQ0FDSTtBQUFPLGdCQUFJLEVBQUMsT0FBWjtBQUFvQixtQkFBTyxFQUFFVCxLQUFLLEtBQUtRLE1BQU0sQ0FBQ1IsS0FBOUM7QUFDSSxvQkFBUSxFQUFFO0FBQUEscUJBQU1FLFNBQVEsSUFBSUEsU0FBUSxDQUFDTSxNQUFNLENBQUNSLEtBQVIsQ0FBMUI7QUFBQTtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSTtBQUFBLHVCQUNLUSxNQUFNLENBQUNULEtBRFosZUFFSTtBQUFNLHVCQUFTLEVBQUMsbUJBQWhCO0FBQUEsd0JBQ0tTLE1BQU0sQ0FBQ0U7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBLFdBQVlELEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0EvQkQ7O0dBQU1YLFU7VUFRbUJNLCtDOzs7TUFSbkJOLFU7QUFpQ04sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9idWlsZGluZy5mMjcyZGY2OGRmZmUxZjE2OGQxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IFdhcm5pbmdJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9jb21tb24vd2FybmluZy5zdmdcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBpc1ZhbGlkOiBib29sZWFuOyB2YWxpZGF0ZU1vZGU6IGJvb2xlYW4gfT5gXHJcbiAgLnJhZGlvLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB9XHJcbiAgLnJhZGlvLWxpc3Qtd3JhcHBlciB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgfVxyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfYjB9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAkeyh7IHZhbGlkYXRlTW9kZSwgaXNWYWxpZCB9KSA9PiB7XHJcbiAgICAgIGlmICh2YWxpZGF0ZU1vZGUpIHtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLnRhd255fTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnNub3d9O1xyXG4gICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICAgICAgYDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfX1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5yYWRpby1kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLnJhZGlvLWdyb3VwLXdhcm5pbmcge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogJHtwYWxldHRlLmRhdmlkc29uX29yYW5nZX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElwcm9wcyBleHRlbmRzIFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD57XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIHZhbHVlPzogYW55O1xyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuICAgIG9wdGlvbnM/OiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBhbnk7IGRlc2NyaXB0aW9uPzogc3RyaW5nfVtdO1xyXG4gICAgaXNWYWxpZD86IGJvb2xlYW47XHJcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXA6IFJlYWN0LkZDPElwcm9wcz4gPSAoe1xyXG4gICAgbGFiZWwsXHJcbiAgICB2YWx1ZSxcclxuICAgIG9wdGlvbnMgPSBbXSxcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgaXNWYWxpZCxcclxuICAgIGVycm9yTWVzc2FnZSA9IFwi7Ji17IWY7J2EIOyEoO2Dne2VmOyEuOyalFwiLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCB2YWxpZGF0ZU1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1vbi52YWxpZGF0ZU1vZGUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBpc1ZhbGlkPXshIWlzVmFsaWR9IHZhbGlkYXRlTW9kZT17dmFsaWRhdGVNb2RlfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmFkaW8tbGFiZWxcIj57bGFiZWx9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvPWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17dmFsdWUgPT09IG9wdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZSAmJiBvbkNoYW5nZShvcHRpb24udmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpby1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9Hcm91cDsiXSwic291cmNlUm9vdCI6IiJ9