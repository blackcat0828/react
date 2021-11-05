self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/auth/LoginModal.tsx":
/*!****************************************!*\
  !*** ./components/auth/LoginModal.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.ts");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/input */ "./components/common/input.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\react\\next-airbnb\\components\\auth\\LoginModal.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var CloseXIcon = function CloseXIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m7.667 7.217 6.55-6.55.45.45-6.55 6.55 6.55 6.55-.45.45-6.55-6.55-6.55 6.55-.45-.45 6.55-6.55-6.55-6.55.45-.45 6.55 6.55Z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c3 = CloseXIcon;
CloseXIcon.defaultProps = {
  width: "15",
  height: "15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var MailIcon = function MailIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M.306 0v13.5H22V0H.306Zm5.987 5.947L2.114 10.23V3.137l4.179 2.81ZM2.55 1.5h17.206l-8.603 5.785L2.55 1.5Zm5.147 5.391 3.456 2.324 3.462-2.328L19.688 12H2.713l4.984-5.109Zm8.323-.948 4.172-2.806v7.011L16.02 5.943Z",
      fill: "#222"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c4 = MailIcon;
MailIcon.defaultProps = {
  width: "22",
  height: "14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var OpenedEyeIcon = function OpenedEyeIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      clipPath: "url(#a)",
      fill: "#000",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M15.941 7.81c-.126-.183-3.154-4.477-7.94-4.477-4.108 0-7.768 4.27-7.922 4.452a.335.335 0 0 0 0 .43c.154.182 3.814 4.452 7.921 4.452 4.108 0 7.768-4.27 7.922-4.452a.333.333 0 0 0 .019-.404ZM8.001 12C4.707 12 1.576 8.86.78 8c.794-.86 3.922-4 7.22-4 3.852 0 6.571 3.135 7.235 3.982C14.47 8.815 11.321 12 8 12Z"
      }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M8 5.333A2.67 2.67 0 0 0 5.333 8 2.67 2.67 0 0 0 8 10.667 2.67 2.67 0 0 0 10.667 8 2.67 2.67 0 0 0 8 5.333ZM8 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z"
      }, void 0, false, void 0, this)]
    }, void 0, true, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
        id: "a",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          fill: "#fff",
          d: "M0 0h16v16H0z"
        }, void 0, false, void 0, this)
      }, void 0, false, void 0, this)
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

_c5 = OpenedEyeIcon;
OpenedEyeIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ClosedEyeIcon = function ClosedEyeIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M15.84 8.311a.449.449 0 0 1-.636-.054l-1.181-1.404A8.062 8.062 0 0 1 12.05 8.17l.674 1.634a.45.45 0 1 1-.834.344l-.674-1.634a9.843 9.843 0 0 1-2.893.527v1.745a.45.45 0 0 1-.902 0V9.041a9.945 9.945 0 0 1-2.669-.454l-.644 1.56a.451.451 0 1 1-.834-.343l.634-1.536a8.081 8.081 0 0 1-2.04-1.286L.797 8.257a.45.45 0 1 1-.69-.58L1.22 6.352C.413 5.475.07 4.704.037 4.629a.45.45 0 1 1 .828-.356c.03.07.382.845 1.223 1.683.012.008.024.015.035.024.03.025.054.054.076.084A7.241 7.241 0 0 0 4.63 7.587c.014.005.029.007.043.013l.016.009c.875.326 1.926.54 3.184.54 5.282 0 6.991-3.837 7.008-3.876a.45.45 0 1 1 .829.356c-.03.07-.34.762-1.053 1.578l1.237 1.469a.45.45 0 0 1-.055.635Z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c6 = ClosedEyeIcon;
ClosedEyeIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};



var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.form.withConfig({
  displayName: "LoginModal__Container",
  componentId: "sc-1jtfh77-0"
})(["width:568px;padding:32px;background-color:white;z-index:11;.mordal-close-x-icon{cursor:pointer;display:block;margin:0 0 40px auto;}.login-input-wrapper{position:relative;margin-bottom:16px;}.login-password-input-wrapper{svg{cursor:pointer;}}.login-modal-submit-button-wrapper{margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid ", ";}.login-modal-set-signup{color:", ";margin-left:8px;cursor:pointer;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__.default.gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_5__.default.dark_cyan);
_c = Container;

var LoginModal = function LoginModal(_ref) {
  _s();

  var closeModal = _ref.closeModal;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      isPasswordHided = _useState3[0],
      setIsPasswordHided = _useState3[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(); //*비밀번호 숨김 토글하기

  var togglePasswordHiding = function togglePasswordHiding() {
    setIsPasswordHided(!isPasswordHided);
  }; //* 이메일 주소 변경시


  var onChangeEmail = function onChangeEmail(event) {
    setEmail(event.target.value);
  }; //* 비밀번호 변경 시


  var onChangePassword = function onChangePassword(event) {
    setPassword(event.target.value);
  }; //* 회원가입 모달로 변경하기


  var changeToSignUpModal = function changeToSignUpModal() {
    dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_4__.authActions.setAuthMode("signup"));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseXIcon, {
      className: "mordal-close-x-icon",
      onClick: closeModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "login-input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_7__.default, {
        placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C",
        name: "email",
        type: "email",
        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MailIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 27
        }, _this),
        value: email,
        onChange: onChangeEmail
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "login-input-wrapper login-password-input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_7__.default, {
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC124\uC815\uD558\uAE30",
        type: isPasswordHided ? "password" : "text",
        icon: isPasswordHided ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ClosedEyeIcon, {
          onClick: togglePasswordHiding
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 46
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OpenedEyeIcon, {
          onClick: togglePasswordHiding
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 99
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "login-modal-submit-button-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: ["\uC5D0\uC5B4\uBE44\uC5D4\uBE44 \uACC4\uC815\uC774 \uC5C6\uB098\uC694?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "login-modal-set-signup",
        role: "presentation",
        onClick: changeToSignUpModal,
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, _this);
};

_s(LoginModal, "mjNC9b6FgDA1EoYx+nXA1oWKNcI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch];
});

_c2 = LoginModal;
/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "LoginModal");
$RefreshReg$(_c3, "CloseXIcon");
$RefreshReg$(_c4, "MailIcon");
$RefreshReg$(_c5, "OpenedEyeIcon");
$RefreshReg$(_c6, "ClosedEyeIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luTW9kYWwudHN4Il0sIm5hbWVzIjpbIkNsb3NlWEljb24iLCJNYWlsSWNvbiIsIk9wZW5lZEV5ZUljb24iLCJDbG9zZWRFeWVJY29uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIkxvZ2luTW9kYWwiLCJjbG9zZU1vZGFsIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzUGFzc3dvcmRIaWRlZCIsInNldElzUGFzc3dvcmRIaWRlZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2dnbGVQYXNzd29yZEhpZGluZyIsIm9uQ2hhbmdlRW1haWwiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQYXNzd29yZCIsImNoYW5nZVRvU2lnblVwTW9kYWwiLCJhdXRoQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBQ09BLFUsWUFBQUEsVTs7Ozs7Ozs7Ozs7TUFBQUEsVTtBQUFBQSxVOzs7Ozs7O0lBQ0FDLFEsWUFBQUEsUTs7Ozs7Ozs7O01BQUFBLFE7QUFBQUEsUTs7Ozs7OztJQUNBQyxhLFlBQUFBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsYTtBQUFBQSxhOzs7Ozs7O0lBQ0FDLGEsWUFBQUEsYTs7Ozs7Ozs7O01BQUFBLGE7QUFBQUEsYTs7Ozs7O0FBQ1A7QUFDQTtBQUNBO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSxxYUEwQmdCQyw0REExQmhCLEVBNkJGQSw4REE3QkUsQ0FBZjtLQUFNRixTOztBQXdDTixJQUFNRyxVQUE0QixHQUFHLFNBQS9CQSxVQUErQixPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBQUEsa0JBQzFCQywrQ0FB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NWNkZDZmOWRkY2EwOTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9zdG9yZS9hdXRoXCI7XHJcbmltcG9ydCBDbG9zZVhJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9tb2RhbC9tb2RhbF9jb2xvc2VfeF9pY29uLnN2Z1wiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvbWFpbC5zdmdcIjtcclxuaW1wb3J0IE9wZW5lZEV5ZUljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvb3BlbmVkX2V5ZS5zdmdcIjtcclxuaW1wb3J0IENsb3NlZEV5ZUljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvY2xvc2VkX2V5ZS5zdmdcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbW1vbi9CdXR0b25cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21tb24vaW5wdXRcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiA1NjhweDtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDExO1xyXG5cclxuICAubW9yZGFsLWNsb3NlLXgtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCAwIDQwcHggYXV0bztcclxuICB9XHJcblxyXG4gIC5sb2dpbi1pbnB1dC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcGFzc3dvcmQtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBzdmcge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9naW4tbW9kYWwtc3VibWl0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9lYn07XHJcbiAgfVxyXG4gIC5sb2dpbi1tb2RhbC1zZXQtc2lnbnVwIHtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuY29uc3QgTG9naW5Nb2RhbDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGNsb3NlTW9kYWx9KSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpc1Bhc3N3b3JkSGlkZWQsIHNldElzUGFzc3dvcmRIaWRlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gICAgLy8q67mE67CA67KI7Zi4IOyIqOq5gCDthqDquIDtlZjquLBcclxuICAgIGNvbnN0IHRvZ2dsZVBhc3N3b3JkSGlkaW5nID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzUGFzc3dvcmRIaWRlZCghaXNQYXNzd29yZEhpZGVkKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8qIOydtOuplOydvCDso7zshowg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUVtYWlsID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qIOu5hOuwgOuyiO2YuCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qIO2ajOybkOqwgOyehSDrqqjri6zroZwg67OA6rK97ZWY6riwXHJcbiAgICBjb25zdCBjaGFuZ2VUb1NpZ25VcE1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNldEF1dGhNb2RlKFwic2lnbnVwXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxDbG9zZVhJY29uIGNsYXNzTmFtZT1cIm1vcmRhbC1jbG9zZS14LWljb25cIiBvbkNsaWNrPXtjbG9zZU1vZGFsfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvCDso7zshoxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXs8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4taW5wdXQtd3JhcHBlciBsb2dpbi1wYXNzd29yZC1pbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7ISk7KCV7ZWY6riwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtpc1Bhc3N3b3JkSGlkZWQ/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGljb249e2lzUGFzc3dvcmRIaWRlZCA/ICg8Q2xvc2VkRXllSWNvbiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZEhpZGluZ30gLz4pIDogKDxPcGVuZWRFeWVJY29uIG9uQ2xpY2s9e3RvZ2dsZVBhc3N3b3JkSGlkaW5nfS8+KX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLW1vZGFsLXN1Ym1pdC1idXR0b24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIOyXkOyWtOu5hOyXlOu5hCDqs4TsoJXsnbQg7JeG64KY7JqUP1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW4tbW9kYWwtc2V0LXNpZ251cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlVG9TaWduVXBNb2RhbH1cclxuICAgICAgICAgICAgICAgID7tmozsm5DqsIDsnoU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Nb2RhbDsiXSwic291cmNlUm9vdCI6IiJ9