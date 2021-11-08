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
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(RadioGroup));

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RadioGroup");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vUmFkaW9Hcm91cC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsInZhbGlkYXRlTW9kZSIsImlzVmFsaWQiLCJjc3MiLCJ1bmRlZmluZWQiLCJSYWRpb0dyb3VwIiwibGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImVycm9yTWVzc2FnZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb21tb24iLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImRlc2NyaXB0aW9uIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSx1NkJBSUZDLDREQUpFLEVBcUNTQSw0REFyQ1QsRUEwQ1QsZ0JBQStCO0FBQUEsTUFBNUJDLFlBQTRCLFFBQTVCQSxZQUE0QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDL0IsTUFBSUQsWUFBSixFQUFrQjtBQUNoQixRQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaLGFBQU9DLHNEQUFQLCtDQUNrQkgsMERBRGxCLEVBRXNCQSx5REFGdEI7QUFJRDs7QUFDRCxXQUFPRyxzREFBUCx5QkFDa0JILDhEQURsQjtBQUdEOztBQUNELFNBQU9JLFNBQVA7QUFDRCxDQXZEVSxFQTJEU0osOERBM0RULEVBNkZBQSxvRUE3RkEsQ0FBZjtLQUFNRixTOztBQTJHTixJQUFNTyxVQUE0QixHQUFHLFNBQS9CQSxVQUErQixRQU8vQjtBQUFBOztBQUFBLE1BTkZDLEtBTUUsU0FORkEsS0FNRTtBQUFBLE1BTEZDLEtBS0UsU0FMRkEsS0FLRTtBQUFBLDRCQUpGQyxPQUlFO0FBQUEsTUFKRkEsT0FJRSw4QkFKUSxFQUlSO0FBQUEsTUFIRkMsU0FHRSxTQUhGQSxRQUdFO0FBQUEsTUFGRlAsT0FFRSxTQUZGQSxPQUVFO0FBQUEsaUNBREZRLFlBQ0U7QUFBQSxNQURGQSxZQUNFLG1DQURhLFdBQ2I7QUFDRixNQUFNVCxZQUFZLEdBQUdVLG1EQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsTUFBTixDQUFhWixZQUF4QjtBQUFBLEdBQUQsQ0FBaEM7QUFFQSxzQkFDSSw4REFBQyxTQUFEO0FBQVcsV0FBTyxFQUFFLENBQUMsQ0FBQ0MsT0FBdEI7QUFBK0IsZ0JBQVksRUFBRUQsWUFBN0M7QUFBQSw0QkFDSTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUEsZ0JBQTRCSztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLGdCQUNLRSxPQUFPLENBQUNNLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSw0QkFDVDtBQUFBLGtDQUNJO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLG1CQUFPLEVBQUVULEtBQUssS0FBS1EsTUFBTSxDQUFDUixLQUE5QztBQUNJLG9CQUFRLEVBQUU7QUFBQSxxQkFBTUUsU0FBUSxJQUFJQSxTQUFRLENBQUNNLE1BQU0sQ0FBQ1IsS0FBUixDQUExQjtBQUFBO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJO0FBQUEsdUJBQ0tRLE1BQU0sQ0FBQ1QsS0FEWixlQUVJO0FBQU0sdUJBQVMsRUFBQyxtQkFBaEI7QUFBQSx3QkFDS1MsTUFBTSxDQUFDRTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUEsV0FBWUQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBWjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQS9CRDs7R0FBTVgsVTtVQVFtQk0sK0M7OztNQVJuQk4sVTtBQWlDTiwrREFBZSxtQkFBQWEsaURBQUEsQ0FBV2IsVUFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYnVpbGRpbmcuNmYzZTg2MWExNzUwZmVmOTg2YzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCBXYXJuaW5nSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvY29tbW9uL3dhcm5pbmcuc3ZnXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgaXNWYWxpZDogYm9vbGVhbjsgdmFsaWRhdGVNb2RlOiBib29sZWFuIH0+YFxyXG4gIC5yYWRpby1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yYWRpby1saXN0LXdyYXBwZXIge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2IwfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJHsoeyB2YWxpZGF0ZU1vZGUsIGlzVmFsaWQgfSkgPT4ge1xyXG4gICAgICBpZiAodmFsaWRhdGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS50YXdueX07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5zbm93fTtcclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH19XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAucmFkaW8tZGVzY3JpcHRpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjhweDtcclxuICB9XHJcblxyXG4gIC5yYWRpby1ncm91cC13YXJuaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5kYXZpZHNvbl9vcmFuZ2V9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJcHJvcHMgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+e1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICB2YWx1ZT86IGFueTtcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBvcHRpb25zPzogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55OyBkZXNjcmlwdGlvbj86IHN0cmluZ31bXTtcclxuICAgIGlzVmFsaWQ/OiBib29sZWFuO1xyXG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBSYWRpb0dyb3VwOiBSZWFjdC5GQzxJcHJvcHM+ID0gKHtcclxuICAgIGxhYmVsLFxyXG4gICAgdmFsdWUsXHJcbiAgICBvcHRpb25zID0gW10sXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIGlzVmFsaWQsXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBcIuyYteyFmOydhCDshKDtg53tlZjshLjsmpRcIixcclxufSkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhdGVNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24udmFsaWRhdGVNb2RlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgaXNWYWxpZD17ISFpc1ZhbGlkfSB2YWxpZGF0ZU1vZGU9e3ZhbGlkYXRlTW9kZX0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJhZGlvLWxhYmVsXCI+e2xhYmVsfTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpbz1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3ZhbHVlID09PSBvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UgJiYgb25DaGFuZ2Uob3B0aW9uLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmFkaW8tZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUmFkaW9Hcm91cCk7Il0sInNvdXJjZVJvb3QiOiIifQ==