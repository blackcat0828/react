self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/HeaderUserProfile.tsx":
/*!******************************************!*\
  !*** ./components/HeaderUserProfile.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-outside-click-handler */ "./node_modules/react-outside-click-handler/index.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api/auth */ "./lib/api/auth.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/user */ "./store/user.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\react\\next-airbnb\\components\\HeaderUserProfile.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var HamburgerIcon = function HamburgerIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M12 1.6H0V0h12v1.6Zm0 1.6H0v1.6h12V3.2Zm0 3.2H0V8h12V6.4Z",
      fill: "#222"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c2 = HamburgerIcon;
HamburgerIcon.defaultProps = {
  width: "12",
  height: "8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};




var HeaderUserProfile = function HeaderUserProfile() {
  _s();

  //* 유저 메뉴 열고, 닫힘 여부
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      isUsermenuOpened = _useState[0],
      setIsUsermenuOpened = _useState[1]; //useSelector는 비교를 할 때 객체의 주소를 비교하게 된다. 유저 정보가 변경되어
  //user가 변경된다면 객체가 새로 만들어져 user 객체를 불러온 모든 컴포넌트는 리랜더될 것이다.
  //useProfileImage와 같이 원시 타입으로 사용한다면 리렌더를 방지할 수 있다.


  var userProfileImage = (0,_store__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (state) {
    return state.user.profileImage;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(); //* 로그아웃 하기

  var logout = /*#__PURE__*/function () {
    var _ref = (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,_lib_api_auth__WEBPACK_IMPORTED_MODULE_8__.logoutAPI)();

            case 3:
              dispatch(_store_user__WEBPACK_IMPORTED_MODULE_9__.userActions.initUser());
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function logout() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5___default()), {
    onOutsideClick: function onOutsideClick() {
      if (isUsermenuOpened) {
        setIsUsermenuOpened(false);
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      className: "header-user-profile",
      type: "button",
      onClick: function onClick() {
        return setIsUsermenuOpened(!isUsermenuOpened);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HamburgerIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: userProfileImage,
        className: "header-user-profile-image",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), isUsermenuOpened && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      className: "header-usermenu",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: "\uC219\uC18C \uAD00\uB9AC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
        href: "/room/register/building",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          role: "presentation",
          onClick: function onClick() {
            setIsUsermenuOpened(false);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: "\uC219\uC18C \uB4F1\uB85D\uD558\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "header-usermenu-divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        role: "presentation",
        onClick: logout,
        children: "\uB85C\uADF8\uC544\uC6C3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, _this);
};

_s(HeaderUserProfile, "PBkzXdk1OX+UY5hBpO6AWYtMYZU=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_10__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch];
});

_c = HeaderUserProfile;
/* harmony default export */ __webpack_exports__["default"] = (HeaderUserProfile);

var _c, _c2;

$RefreshReg$(_c, "HeaderUserProfile");
$RefreshReg$(_c2, "HamburgerIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJVc2VyUHJvZmlsZS50c3giXSwibmFtZXMiOlsiSGFtYnVyZ2VySWNvbiIsIkhlYWRlclVzZXJQcm9maWxlIiwidXNlU3RhdGUiLCJpc1VzZXJtZW51T3BlbmVkIiwic2V0SXNVc2VybWVudU9wZW5lZCIsInVzZXJQcm9maWxlSW1hZ2UiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInByb2ZpbGVJbWFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJsb2dvdXQiLCJsb2dvdXRBUEkiLCJ1c2VyQWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBQ09BLGEsWUFBQUEsYTs7Ozs7Ozs7O01BQUFBLGE7QUFBQUEsYTs7Ozs7O0FBQ1A7QUFDQTtBQUNBOztBQUVBLElBQU1DLGlCQUEyQixHQUFHLFNBQTlCQSxpQkFBOEIsR0FBTTtBQUFBOztBQUN0QztBQURzQyxrQkFFVUMsK0NBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFL0JDLGdCQUYrQjtBQUFBLE1BRWJDLG1CQUZhLGlCQUd0QztBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLGdCQUFnQixHQUFHQyxvREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsWUFBdEI7QUFBQSxHQUFELENBQXBDO0FBRUEsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QixDQVJzQyxDQVV0Qzs7QUFDQSxNQUFNQyxNQUFNO0FBQUEsNlJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFSEMsd0RBQVMsRUFGTjs7QUFBQTtBQUdUSCxzQkFBUSxDQUFDSSw2REFBQSxFQUFELENBQVI7QUFIUztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtUQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBRUMsT0FBZDs7QUFMUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFOTCxNQUFNO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBU0Esc0JBQ0ksOERBQUMsb0VBQUQ7QUFBcUIsa0JBQWMsRUFBRSwwQkFBSTtBQUNyQyxVQUFJVCxnQkFBSixFQUFxQjtBQUNuQkMsMkJBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNEO0FBQ0YsS0FKSDtBQUFBLDRCQUtJO0FBQVEsZUFBUyxFQUFDLHFCQUFsQjtBQUF3QyxVQUFJLEVBQUMsUUFBN0M7QUFDRSxhQUFPLEVBQUU7QUFBQSxlQUFNQSxtQkFBbUIsQ0FBQyxDQUFDRCxnQkFBRixDQUF6QjtBQUFBLE9BRFg7QUFBQSw4QkFHRSw4REFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQUssV0FBRyxFQUFFRSxnQkFBVjtBQUE0QixpQkFBUyxFQUFDLDJCQUF0QztBQUFrRSxXQUFHLEVBQUM7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLEVBV0tGLGdCQUFnQixpQkFDZjtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyx5QkFBWDtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLGNBQVI7QUFBdUIsaUJBQU8sRUFBRSxtQkFBSTtBQUFDQywrQkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQTJCLFdBQWhFO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBT0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBUUU7QUFBSSxZQUFJLEVBQUMsY0FBVDtBQUF3QixlQUFPLEVBQUVRLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0QkgsQ0FoREQ7O0dBQU1YLGlCO1VBTXVCSyxnRCxFQUVSSyxvRDs7O0tBUmZWLGlCO0FBa0ROLCtEQUFlQSxpQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA2YjZkZWNmMDRlY2NmMjMyZTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBPdXRzaWRlQ2xpY2tIYW5kbGVyIGZyb20gXCJyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGFtYnVyZ2VySWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zdmcvaGVhZGVyL2hhbWJ1cmdlci5zdmdcIjtcclxuaW1wb3J0IHsgbG9nb3V0QVBJIH0gZnJvbSBcIi4uL2xpYi9hcGkvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VyQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS91c2VyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBIZWFkZXJVc2VyUHJvZmlsZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICAvLyog7Jyg7KCAIOuplOuJtCDsl7Tqs6AsIOuLq+2emCDsl6zrtoBcclxuICAgIGNvbnN0IFtpc1VzZXJtZW51T3BlbmVkLCBzZXRJc1VzZXJtZW51T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vdXNlU2VsZWN0b3LripQg67mE6rWQ66W8IO2VoCDrlYwg6rCd7LK07J2YIOyjvOyGjOulvCDruYTqtZDtlZjqsowg65Cc64ukLiDsnKDsoIAg7KCV67O06rCAIOuzgOqyveuQmOyWtFxyXG4gICAgLy91c2Vy6rCAIOuzgOqyveuQnOuLpOuptCDqsJ3ssrTqsIAg7IOI66GcIOunjOuTpOyWtOyguCB1c2VyIOqwneyytOulvCDrtojrn6zsmKgg66qo65OgIOy7tO2PrOuEjO2KuOuKlCDrpqzrnpzrjZTrkKAg6rKD7J2064ukLlxyXG4gICAgLy91c2VQcm9maWxlSW1hZ2XsmYAg6rCZ7J20IOybkOyLnCDtg4DsnoXsnLzroZwg7IKs7Jqp7ZWc64uk66m0IOumrOugjOuNlOulvCDrsKnsp4DtlaAg7IiYIOyeiOuLpC5cclxuICAgIGNvbnN0IHVzZXJQcm9maWxlSW1hZ2UgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIucHJvZmlsZUltYWdlKTtcclxuICAgIFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vKiDroZzqt7jslYTsm4Mg7ZWY6riwXHJcbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IGxvZ291dEFQSSgpO1xyXG4gICAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuaW5pdFVzZXIoKSk7XHJcbiAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8T3V0c2lkZUNsaWNrSGFuZGxlciBvbk91dHNpZGVDbGljaz17KCk9PntcclxuICAgICAgICAgICAgaWYgKGlzVXNlcm1lbnVPcGVuZWQpe1xyXG4gICAgICAgICAgICAgIHNldElzVXNlcm1lbnVPcGVuZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFkZXItdXNlci1wcm9maWxlXCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNVc2VybWVudU9wZW5lZCghaXNVc2VybWVudU9wZW5lZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SGFtYnVyZ2VySWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyUHJvZmlsZUltYWdlfSBjbGFzc05hbWU9XCJoZWFkZXItdXNlci1wcm9maWxlLWltYWdlXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtpc1VzZXJtZW51T3BlbmVkICYmIChcclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGVhZGVyLXVzZXJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+7IiZ7IaMIOq0gOumrDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvYnVpbGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cInByZXNlbnRhdGlvblwiIG9uQ2xpY2s9eygpPT57c2V0SXNVc2VybWVudU9wZW5lZChmYWxzZSl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+7IiZ7IaMIOuTseuhne2VmOq4sDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXVzZXJtZW51LWRpdmlkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICDroZzqt7jslYTsm4NcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvT3V0c2lkZUNsaWNrSGFuZGxlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyVXNlclByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==