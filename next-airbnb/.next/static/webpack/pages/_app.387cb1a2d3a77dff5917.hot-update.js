self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/HeaderAuths.tsx":
/*!************************************!*\
  !*** ./components/HeaderAuths.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useModal */ "./hooks/useModal.tsx");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/auth */ "./store/auth.ts");
/* harmony import */ var _auth_AuthModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/AuthModal */ "./components/auth/AuthModal.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\react\\next-airbnb\\components\\HeaderAuths.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var HeaderAuths = function HeaderAuths() {
  _s();

  var _useModal = (0,_hooks_useModal__WEBPACK_IMPORTED_MODULE_3__.default)(),
      openModal = _useModal.openModal,
      ModalPortal = _useModal.ModalPortal,
      closeModal = _useModal.closeModal;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header-auth-buttons",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "header-sign-up-button",
        onClick: function onClick() {
          dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_4__.authActions.setAuthMode("signup"));
          openModal();
        },
        type: "button",
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: "header-login-button",
        onClick: function onClick() {
          dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_4__.authActions.setAuthMode("login"));
          openModal();
        },
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalPortal, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_AuthModal__WEBPACK_IMPORTED_MODULE_5__.default, {
        closeModal: closeModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(HeaderAuths, "jF9ABDcaseiI2LOUW3qcdxOhV60=", false, function () {
  return [_hooks_useModal__WEBPACK_IMPORTED_MODULE_3__.default, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
});

_c = HeaderAuths;
/* harmony default export */ __webpack_exports__["default"] = (HeaderAuths);

var _c;

$RefreshReg$(_c, "HeaderAuths");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJBdXRocy50c3giXSwibmFtZXMiOlsiSGVhZGVyQXV0aHMiLCJ1c2VNb2RhbCIsIm9wZW5Nb2RhbCIsIk1vZGFsUG9ydGFsIiwiY2xvc2VNb2RhbCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhdXRoQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFBQTs7QUFBQSxrQkFDZUMsd0RBQVEsRUFEdkI7QUFBQSxNQUN4QkMsU0FEd0IsYUFDeEJBLFNBRHdCO0FBQUEsTUFDYkMsV0FEYSxhQUNiQSxXQURhO0FBQUEsTUFDQUMsVUFEQSxhQUNBQSxVQURBOztBQUVoQyxNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLDhCQUNJO0FBQVEsaUJBQVMsRUFBQyx1QkFBbEI7QUFDSSxlQUFPLEVBQUUsbUJBQUk7QUFDVEQsa0JBQVEsQ0FBQ0UsZ0VBQUEsQ0FBd0IsUUFBeEIsQ0FBRCxDQUFSO0FBQ0FMLG1CQUFTO0FBQ1osU0FKTDtBQUtJLFlBQUksRUFBQyxRQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFVSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUMscUJBQWhDO0FBQ0ksZUFBTyxFQUFFLG1CQUFJO0FBQ1RHLGtCQUFRLENBQUNFLGdFQUFBLENBQXdCLE9BQXhCLENBQUQsQ0FBUjtBQUNBTCxtQkFBUztBQUNaLFNBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQW1CSSw4REFBQyxXQUFEO0FBQUEsNkJBQ0ksOERBQUMsb0RBQUQ7QUFBVyxrQkFBVSxFQUFFRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBLGtCQURKO0FBeUJILENBN0JEOztHQUFNSixXO1VBQzZDQyxvRCxFQUM5Qkssb0Q7OztLQUZmTixXO0FBK0JOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzg3Y2IxYTJkM2E3N2RmZjU5MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjsgXHJcbmltcG9ydCB1c2VNb2RhbCBmcm9tIFwiLi4vaG9va3MvdXNlTW9kYWxcIjtcclxuaW1wb3J0IHsgYXV0aEFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvYXV0aFwiO1xyXG5pbXBvcnQgQXV0aE1vZGFsIGZyb20gXCIuL2F1dGgvQXV0aE1vZGFsXCI7XHJcblxyXG5jb25zdCBIZWFkZXJBdXRoczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG9wZW5Nb2RhbCwgTW9kYWxQb3J0YWwsIGNsb3NlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1hdXRoLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVhZGVyLXNpZ24tdXAtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhdXRoQWN0aW9ucy5zZXRBdXRoTW9kZShcInNpZ251cFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg7ZqM7JuQ6rCA7J6FXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImhlYWRlci1sb2dpbi1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNldEF1dGhNb2RlKFwibG9naW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsUG9ydGFsPlxyXG4gICAgICAgICAgICAgICAgPEF1dGhNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfS8+XHJcbiAgICAgICAgICAgIDwvTW9kYWxQb3J0YWw+ICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQXV0aHM7Il0sInNvdXJjZVJvb3QiOiIifQ==