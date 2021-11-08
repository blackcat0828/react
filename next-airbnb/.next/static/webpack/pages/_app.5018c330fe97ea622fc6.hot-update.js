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





var WarningIcon = function WarningIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M8 1.333A6.674 6.674 0 0 1 14.667 8 6.674 6.674 0 0 1 8 14.667 6.674 6.674 0 0 1 1.333 8 6.674 6.674 0 0 1 8 1.333ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm-.667 4h1.334v5.333H7.333V4ZM8 12.167a.834.834 0 1 1 0-1.668.834.834 0 0 1 0 1.668Z",
      fill: "#C13515"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c4 = WarningIcon;
WarningIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
      children: [label && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", _objectSpread(_objectSpread({}, props), {}, {
        children: [disabledOptions.map(function (option, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
            value: option,
            disabled: true,
            children: option
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 23
          }, _this);
        }), options.map(function (option, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
            value: option,
            children: option
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 23
          }, _this);
        })]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, _this), useValidation && validateMode && !isValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "selector-warning",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(WarningIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }, _this)]
  }, void 0, true, {
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

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Selector");
$RefreshReg$(_c3, "%default%");
$RefreshReg$(_c4, "WarningIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0b3IudHN4Il0sIm5hbWVzIjpbIldhcm5pbmdJY29uIiwibm9ybWFsU2VsZWN0b3JTdHlsZSIsImNzcyIsInBhbGV0dGUiLCJSZWdpc3RlclNlbGVjdG9yU3R5bGUiLCJDb250YWluZXIiLCJzdHlsZWQiLCJ0eXBlIiwidmFsaWRhdGVNb2RlIiwiaXNWYWxpZCIsInVuZGVmaW5lZCIsIlNlbGVjdG9yIiwibGFiZWwiLCJvcHRpb25zIiwiZGlzYWJsZWRPcHRpb25zIiwidXNlVmFsaWRhdGlvbiIsImVycm9yTWVzc2FnZSIsInByb3BzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbW1vbiIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNPQSxXLFlBQUFBLFc7Ozs7Ozs7OztNQUFBQSxXO0FBQUFBLFc7Ozs7OztBQUNQO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUdDLHNEQUFILDBXQVFEQyw0REFSQyxFQWtCSEEsOERBbEJHLENBQXpCO0FBdUJBLElBQU1DLHFCQUFxQixHQUFHRixzREFBSCxxYkFRZEMsNERBUmMsRUFnQkhBLDREQWhCRyxDQUEzQjtBQWtDQSxJQUFNRSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVVQUNYO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxLQUFLLFFBQVQsSUFBcUJOLG1CQUFuQztBQUFBLENBRFcsRUFFWDtBQUFBLE1BQUdNLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksS0FBSyxVQUFULElBQXVCSCxxQkFBckM7QUFBQSxDQUZXLEVBS1QsaUJBQStCO0FBQUEsTUFBNUJJLFlBQTRCLFNBQTVCQSxZQUE0QjtBQUFBLE1BQWRDLE9BQWMsU0FBZEEsT0FBYzs7QUFDL0IsTUFBSUQsWUFBSixFQUFrQjtBQUNoQixRQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaLGFBQU9QLHNEQUFQLCtDQUNrQkMsMERBRGxCLEVBRXNCQSx5REFGdEI7QUFJRDs7QUFDRCxXQUFPRCxzREFBUCx5QkFDa0JDLDhEQURsQjtBQUdEOztBQUNELFNBQU9PLFNBQVA7QUFDRCxDQWxCVSxFQXNCV1AsNERBdEJYLEVBdUJPQSw0REF2QlAsRUF3QkFBLDREQXhCQSxFQXVDQUEsb0VBdkNBLENBQWY7S0FBTUUsUzs7QUF1RE4sSUFBTU0sUUFBMEIsR0FBRyxTQUE3QkEsUUFBNkIsUUFRakI7QUFBQTs7QUFBQSxNQVBkQyxLQU9jLFNBUGRBLEtBT2M7QUFBQSw0QkFOZEMsT0FNYztBQUFBLE1BTmRBLE9BTWMsOEJBTkosRUFNSTtBQUFBLG9DQUxkQyxlQUtjO0FBQUEsTUFMZEEsZUFLYyxzQ0FMSSxFQUtKO0FBQUEsTUFKZEwsT0FJYyxTQUpkQSxPQUljO0FBQUEsa0NBSGRNLGFBR2M7QUFBQSxNQUhkQSxhQUdjLG9DQUhFLElBR0Y7QUFBQSxpQ0FGZEMsWUFFYztBQUFBLE1BRmRBLFlBRWMsbUNBRkMsWUFFRDtBQUFBLHlCQURkVCxJQUNjO0FBQUEsTUFEZEEsSUFDYywyQkFEUCxRQUNPO0FBQUEsTUFBWFUsS0FBVzs7QUFDZCxNQUFNVCxZQUFZLEdBQUdVLG1EQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsTUFBTixDQUFhWixZQUF4QjtBQUFBLEdBQUQsQ0FBaEM7QUFDQSxzQkFDSSw4REFBQyxTQUFEO0FBQVcsV0FBTyxFQUFFLENBQUMsQ0FBQ0MsT0FBdEI7QUFBK0IsZ0JBQVksRUFBRUQsWUFBN0M7QUFBMkQsUUFBSSxFQUFFRCxJQUFqRTtBQUFBLDRCQUNJO0FBQUEsaUJBQ0dLLEtBQUssaUJBQUk7QUFBQSxrQkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFosZUFFRSx3R0FBWUssS0FBWjtBQUFBLG1CQUNLSCxlQUFlLENBQUNPLEdBQWhCLENBQW9CLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLDhCQUNqQjtBQUFvQixpQkFBSyxFQUFFRCxNQUEzQjtBQUFtQyxvQkFBUSxNQUEzQztBQUFBLHNCQUNLQTtBQURMLGFBQWFDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFwQixDQURMLEVBTUtWLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLDhCQUNUO0FBQW9CLGlCQUFLLEVBQUVELE1BQTNCO0FBQUEsc0JBQ0tBO0FBREwsYUFBYUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTO0FBQUEsU0FBWixDQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBZ0JLUixhQUFhLElBQUlQLFlBQWpCLElBQWlDLENBQUNDLE9BQWxDLGlCQUNDO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsOEJBQ0UsOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLGtCQUFJTztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5QkgsQ0FuQ0Q7O0dBQU1MLFE7VUFTbUJPLCtDOzs7TUFUbkJQLFE7QUFxQ04sK0RBQWUsbUJBQUFhLGlEQUFBLENBQVdiLFFBQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjUwMThjMzMwZmU5N2VhNjIyZmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2NvbW1vbi93YXJuaW5nLnN2Z1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5cclxuY29uc3Qgbm9ybWFsU2VsZWN0b3JTdHlsZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZWJ9O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMCAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvc3ZnL2NvbW1vbi9zZWxlY3Rvci9zZWxlY3Rvcl9kb3duX2Fycm93LnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDExcHggY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyU2VsZWN0b3JTdHlsZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfYjB9O1xyXG4gICAgcGFkZGluZzogMCAxNHB4IDAgMTJweDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9zdmcvY29tbW9uL3NlbGVjdG9yL3JlZ2lzdGVyX3NlbGVjdG9yX2Rvd25fYXJyb3cuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTRweCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0b3JDb250YWluZXJQcm9wcyB7XHJcbiAgaXNWYWxpZDogYm9vbGVhbjtcclxuICB2YWxpZGF0ZU1vZGU6IGJvb2xlYW47XHJcbiAgdHlwZTogXCJyZWdpc3RlclwiIHwgXCJub3JtYWxcIjtcclxufVxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PFNlbGVjdG9yQ29udGFpbmVyUHJvcHM+YFxyXG4gICR7KHsgdHlwZSB9KSA9PiB0eXBlID09PSBcIm5vcm1hbFwiICYmIG5vcm1hbFNlbGVjdG9yU3R5bGV9O1xyXG4gICR7KHsgdHlwZSB9KSA9PiB0eXBlID09PSBcInJlZ2lzdGVyXCIgJiYgUmVnaXN0ZXJTZWxlY3RvclN0eWxlfTtcclxuXHJcbiAgc2VsZWN0IHtcclxuICAgICR7KHsgdmFsaWRhdGVNb2RlLCBpc1ZhbGlkIH0pID0+IHtcclxuICAgICAgaWYgKHZhbGlkYXRlTW9kZSkge1xyXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUudGF3bnl9O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuc25vd307XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9fVxyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL3N2Zy9jb21tb24vc2VsZWN0b3IvZGlzYWJsZWRfcmVnaXN0ZXJfc2VsZWN0b3JfZG93bl9hcnJvdy5zdmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2Y3fTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZ3JheV9lNX07XHJcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV9lNX07XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0b3Itd2FybmluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUuZGF2aWRzb25fb3JhbmdlfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuU2VsZWN0SFRNTEF0dHJpYnV0ZXM8SFRNTFNlbGVjdEVsZW1lbnQ+IHtcclxuICAgIG9wdGlvbnM/OiBzdHJpbmdbXTtcclxuICAgIGRpc2FibGVkT3B0aW9ucz86IHN0cmluZ1tdO1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgICBpc1ZhbGlkPzogYm9vbGVhbjtcclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgdXNlVmFsaWRhdGlvbj86IGJvb2xlYW47XHJcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgICB0eXBlPzogXCJyZWdpc3RlclwiIHwgXCJub3JtYWxcIjtcclxufVxyXG5cclxuY29uc3QgU2VsZWN0b3I6IFJlYWN0LkZDPElQcm9wcz4gPSAoe1xyXG4gICAgbGFiZWwsXHJcbiAgICBvcHRpb25zID0gW10sIFxyXG4gICAgZGlzYWJsZWRPcHRpb25zID0gW10sIFxyXG4gICAgaXNWYWxpZCwgXHJcbiAgICB1c2VWYWxpZGF0aW9uID0gdHJ1ZSxcclxuICAgIGVycm9yTWVzc2FnZSA9IFwi7Ji17IWY7J2EIOyEoO2Dne2VmOyEuOyalC5cIixcclxuICAgIHR5cGUgPSBcIm5vcm1hbFwiLFxyXG4gICAgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBjb25zdCB2YWxpZGF0ZU1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1vbi52YWxpZGF0ZU1vZGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGlzVmFsaWQ9eyEhaXNWYWxpZH0gdmFsaWRhdGVNb2RlPXt2YWxpZGF0ZU1vZGV9IHR5cGU9e3R5cGV9PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAge2xhYmVsICYmIDxzcGFuPntsYWJlbH08L3NwYW4+fVxyXG4gICAgICAgICAgICAgIDxzZWxlY3Qgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgICAgICAge2Rpc2FibGVkT3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e29wdGlvbn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIHt1c2VWYWxpZGF0aW9uICYmIHZhbGlkYXRlTW9kZSAmJiAhaXNWYWxpZCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rvci13YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8V2FybmluZ0ljb24gLz5cclxuICAgICAgICAgICAgICAgIDxwPntlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlbGVjdG9yKTsiXSwic291cmNlUm9vdCI6IiJ9