(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useModal */ "./hooks/useModal.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/auth */ "./store/auth.ts");
/* harmony import */ var _auth_AuthModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/AuthModal */ "./components/auth/AuthModal.tsx");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\Header.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var AirbnbLogoIcon = function AirbnbLogoIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M29.576 22.743c-.162-.385-.323-.801-.485-1.153-.258-.577-.517-1.122-.743-1.634l-.032-.032a333.042 333.042 0 0 0-7.143-14.479l-.097-.192c-.259-.48-.517-.993-.776-1.505-.323-.577-.646-1.185-1.163-1.762C18.102.705 16.616 0 15.032 0c-1.616 0-3.07.705-4.137 1.922-.485.577-.84 1.185-1.164 1.762-.258.512-.517 1.025-.776 1.505l-.096.192c-2.49 4.805-4.913 9.674-7.143 14.479l-.033.064c-.226.512-.484 1.057-.743 1.634-.162.352-.323.736-.485 1.153-.42 1.185-.55 2.306-.388 3.46a6.818 6.818 0 0 0 4.202 5.317A6.69 6.69 0 0 0 6.887 32a8.59 8.59 0 0 0 4.072-1.153c1.325-.737 2.586-1.794 4.008-3.332 1.422 1.538 2.715 2.595 4.008 3.332A8.589 8.589 0 0 0 23.047 32c.905 0 1.81-.16 2.618-.512a6.805 6.805 0 0 0 4.202-5.318c.258-1.121.13-2.242-.291-3.427Zm-14.577 1.665c-1.745-2.178-2.876-4.228-3.264-5.958-.162-.736-.194-1.377-.097-1.953.065-.513.259-.961.517-1.346.614-.865 1.649-1.41 2.844-1.41 1.196 0 2.263.513 2.845 1.41.258.385.452.833.517 1.346.097.576.064 1.249-.097 1.953-.388 1.698-1.52 3.748-3.265 5.958Zm12.896 1.506c-.226 1.666-1.357 3.107-2.94 3.748a4.935 4.935 0 0 1-2.457.32c-.808-.096-1.616-.352-2.457-.833-1.163-.64-2.327-1.634-3.684-3.107 2.133-2.595 3.426-4.965 3.91-7.079.227-.993.26-1.89.162-2.723a5.17 5.17 0 0 0-.872-2.178c-1.002-1.441-2.683-2.274-4.558-2.274-1.874 0-3.555.865-4.557 2.274a5.17 5.17 0 0 0-.872 2.178 6.593 6.593 0 0 0 .161 2.723c.485 2.114 1.81 4.517 3.911 7.111-1.325 1.473-2.521 2.466-3.685 3.107-.84.48-1.648.737-2.456.833a5.212 5.212 0 0 1-2.456-.32c-1.584-.64-2.715-2.082-2.941-3.748a5.259 5.259 0 0 1 .29-2.499c.097-.32.259-.64.42-1.025.227-.512.485-1.057.744-1.601l.032-.064A348.836 348.836 0 0 1 10.7 6.374l.098-.192c.258-.48.517-.993.775-1.473.259-.513.55-.993.905-1.41.68-.768 1.584-1.185 2.586-1.185 1.002 0 1.907.417 2.586 1.185.355.417.646.897.905 1.41.258.48.517.993.775 1.473l.097.192a423.135 423.135 0 0 1 7.079 14.415v.032c.258.512.484 1.089.743 1.601.162.385.323.705.42 1.025.259.833.356 1.634.226 2.467Z",
      fill: "#FF5A5F"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

AirbnbLogoIcon.defaultProps = {
  width: "30",
  height: "32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var AirbnbLogoTextIcon = function AirbnbLogoTextIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M9.84 13.92v-3.48C9.12 9.48 8.16 9 6.96 9c-.88 0-1.6.32-2.16.96-.56.624-.84 1.368-.84 2.232 0 .912.288 1.672.864 2.28.592.592 1.328.888 2.208.888 1.2 0 2.136-.48 2.808-1.44Zm3.12-7.56V18h-3v-.936c-.928.784-2.008 1.176-3.24 1.176-1.792 0-3.256-.656-4.392-1.968C1.336 15.12.84 13.76.84 12.192c0-1.712.552-3.152 1.656-4.32C3.616 6.704 4.968 6.12 6.552 6.12c1.312 0 2.448.392 3.408 1.176V6.36h3Zm5.046 0V18h-3.12V6.36h3.12Zm-3-2.712c-.4-.384-.6-.856-.6-1.416 0-.56.2-1.032.6-1.416.4-.384.88-.576 1.44-.576.56 0 1.04.192 1.44.576.4.384.6.856.6 1.416 0 .56-.2 1.032-.6 1.416-.4.384-.88.576-1.44.576-.56 0-1.04-.192-1.44-.576Zm12.366 2.568-.36 2.904c-.24-.08-.616-.12-1.128-.12-.624 0-1.2.176-1.728.528-.512.352-.88.736-1.104 1.152V18h-3.12V6.36h3v1.176c.768-.944 1.896-1.416 3.384-1.416.256 0 .608.032 1.056.096Zm3.844 4.224v3.48c.672.96 1.608 1.44 2.808 1.44.88 0 1.608-.296 2.184-.888.592-.608.888-1.368.888-2.28 0-.864-.28-1.608-.84-2.232-.56-.64-1.28-.96-2.16-.96-1.2 0-2.16.48-2.88 1.44Zm-.12 7.56h-3V.96h3.12V7.2c.912-.72 2.008-1.08 3.288-1.08 1.584 0 2.928.584 4.032 1.752 1.12 1.168 1.68 2.608 1.68 4.32 0 1.568-.496 2.928-1.488 4.08-1.136 1.312-2.6 1.968-4.392 1.968-1.232 0-2.312-.392-3.24-1.176V18Zm13.206 0h-3.12V6.36h3v.936A5.054 5.054 0 0 1 47.47 6.12c1.648 0 2.992.624 4.032 1.872.8.944 1.2 2.304 1.2 4.08V18h-3.12v-6.168c0-.992-.232-1.72-.696-2.184C48.454 9.216 47.87 9 47.134 9c-.592 0-1.152.152-1.68.456-.512.288-.896.616-1.152.984V18Zm13.202-7.56v3.48c.672.96 1.608 1.44 2.808 1.44.88 0 1.608-.296 2.184-.888.592-.608.888-1.368.888-2.28 0-.864-.28-1.608-.84-2.232-.56-.64-1.28-.96-2.16-.96-1.2 0-2.16.48-2.88 1.44Zm-.12 7.56h-3V.96h3.12V7.2c.912-.72 2.008-1.08 3.288-1.08 1.584 0 2.928.584 4.032 1.752 1.12 1.168 1.68 2.608 1.68 4.32 0 1.568-.496 2.928-1.488 4.08-1.136 1.312-2.6 1.968-4.392 1.968-1.232 0-2.312-.392-3.24-1.176V18Z",
      fill: "#FF395B"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

AirbnbLogoTextIcon.defaultProps = {
  width: "67",
  height: "19",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};




var HamburgerIcon = function HamburgerIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M12 1.6H0V0h12v1.6Zm0 1.6H0v1.6h12V3.2Zm0 3.2H0V8h12V6.4Z",
      fill: "#222"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

HamburgerIcon.defaultProps = {
  width: "12",
  height: "8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Header__Container",
  componentId: "sc-92b6bf-0"
})(["position:sticky;top:0;width:100%;height:80px;display:flex;justify-content:space-between;align-items:center;padding:0 80px;background-color:white;box-shadow:rgba(0,0,0,0.08) 0px 1px 12px;z-index:10;.header-logo-wrapper{display:flex;align-items:center;.header-logo{margin-right:6px;}}.header-auth-buttons{.header-sign-up-button{height:42px;margin-right:8px;padding:0 16px;border:0;border-radius:21px;background-color:white;cursor:pointer;outline:none;font-weight:600;&:hover{background-color:", ";}}.header-login-button{height:42px;padding:0 16px;border:0;box-shadow:0px 1px 2px rgba(0,0,0,0.18);border-radius:21px;background-color:white;cursor:pointer;outline:none;font-weight:600;&:hover{box-shadow:0px 2px 8px rgba(0,0,0,0.12);}}}.header-user-profile{display:flex;align-items:center;height:42px;padding:0 6px 0 16px;border:0;box-shadow:0px 1px 2px rgba(0,0,0,0.18);border-radius:21px;background-color:white;cursor:pointer;outline:none;&:hover{box-shadow:0px 2px 8px rgba(0,0,0,0.12);}.header-user-profile-image{margin-left:8px;width:30px;height:30px;border-radius:50%;}}.header-logo-wrapper + div{position:relative;}.header-usermenu{position:absolute;right:0;top:52px;width:240px;padding:8px 0;box-shadow:0 2px 16px rgba(0,0,0,0.12);border-radius:8px;background-color:white;li{display:flex;align-items:center;width:100%;height:42px;padding:0 16px;cursor:pointer;&:hover{background-color:", ";}}.header-usermenu-divider{width:100%;height:1px;margin:8px 0;background-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_dd);

const Header = () => {
  //모달을 열고 닫을 boolean 값
  const {
    openModal,
    ModalPortal,
    closeModal
  } = (0,_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__.default)();
  const user = (0,_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.user);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "header-logo-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AirbnbLogoIcon, {
          className: "header-logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AirbnbLogoTextIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }, undefined), !user.isLogged && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header-auth-buttons",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: "header-sign-up-button",
        onClick: () => {
          dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_8__.authActions.setAuthMode("signup"));
          openModal();
        },
        children: "\uD68C\uC6D0 \uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: "header-login-button",
        onClick: () => {
          dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_8__.authActions.setAuthMode("login"));
          openModal();
        },
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }, undefined), user.isLogged && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "header-user-profile",
      type: "button",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HamburgerIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: user.profileImage,
        className: "header-user-profile-image",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalPortal, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_AuthModal__WEBPACK_IMPORTED_MODULE_9__.default, {
        closeModal: closeModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/auth/AuthModal.tsx":
/*!***************************************!*\
  !*** ./components/auth/AuthModal.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignUpModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUpModal */ "./components/auth/SignUpModal.tsx");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginModal */ "./components/auth/LoginModal.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\auth\\AuthModal.tsx";





const AuthModal = ({
  closeModal
}) => {
  const authMode = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.auth.authMode);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [authMode === "signup" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignUpModal__WEBPACK_IMPORTED_MODULE_2__.default, {
      closeModal: closeModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 39
    }, undefined), authMode === "login" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginModal__WEBPACK_IMPORTED_MODULE_3__.default, {
      closeModal: closeModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 38
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthModal);

/***/ }),

/***/ "./components/auth/LoginModal.tsx":
/*!****************************************!*\
  !*** ./components/auth/LoginModal.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.ts");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/input */ "./components/common/input.tsx");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\auth\\LoginModal.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CloseXIcon = function CloseXIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m7.667 7.217 6.55-6.55.45.45-6.55 6.55 6.55 6.55-.45.45-6.55-6.55-6.55 6.55-.45-.45 6.55-6.55-6.55-6.55.45-.45 6.55 6.55Z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

CloseXIcon.defaultProps = {
  width: "15",
  height: "15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var MailIcon = function MailIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M.306 0v13.5H22V0H.306Zm5.987 5.947L2.114 10.23V3.137l4.179 2.81ZM2.55 1.5h17.206l-8.603 5.785L2.55 1.5Zm5.147 5.391 3.456 2.324 3.462-2.328L19.688 12H2.713l4.984-5.109Zm8.323-.948 4.172-2.806v7.011L16.02 5.943Z",
      fill: "#222"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

MailIcon.defaultProps = {
  width: "22",
  height: "14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var OpenedEyeIcon = function OpenedEyeIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      clipPath: "url(#a)",
      fill: "#000",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M15.941 7.81c-.126-.183-3.154-4.477-7.94-4.477-4.108 0-7.768 4.27-7.922 4.452a.335.335 0 0 0 0 .43c.154.182 3.814 4.452 7.921 4.452 4.108 0 7.768-4.27 7.922-4.452a.333.333 0 0 0 .019-.404ZM8.001 12C4.707 12 1.576 8.86.78 8c.794-.86 3.922-4 7.22-4 3.852 0 6.571 3.135 7.235 3.982C14.47 8.815 11.321 12 8 12Z"
      }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M8 5.333A2.67 2.67 0 0 0 5.333 8 2.67 2.67 0 0 0 8 10.667 2.67 2.67 0 0 0 10.667 8 2.67 2.67 0 0 0 8 5.333ZM8 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z"
      }, void 0, false, void 0, this)]
    }, void 0, true, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
        id: "a",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          fill: "#fff",
          d: "M0 0h16v16H0z"
        }, void 0, false, void 0, this)
      }, void 0, false, void 0, this)
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

OpenedEyeIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ClosedEyeIcon = function ClosedEyeIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M15.84 8.311a.449.449 0 0 1-.636-.054l-1.181-1.404A8.062 8.062 0 0 1 12.05 8.17l.674 1.634a.45.45 0 1 1-.834.344l-.674-1.634a9.843 9.843 0 0 1-2.893.527v1.745a.45.45 0 0 1-.902 0V9.041a9.945 9.945 0 0 1-2.669-.454l-.644 1.56a.451.451 0 1 1-.834-.343l.634-1.536a8.081 8.081 0 0 1-2.04-1.286L.797 8.257a.45.45 0 1 1-.69-.58L1.22 6.352C.413 5.475.07 4.704.037 4.629a.45.45 0 1 1 .828-.356c.03.07.382.845 1.223 1.683.012.008.024.015.035.024.03.025.054.054.076.084A7.241 7.241 0 0 0 4.63 7.587c.014.005.029.007.043.013l.016.009c.875.326 1.926.54 3.184.54 5.282 0 6.991-3.837 7.008-3.876a.45.45 0 1 1 .829.356c-.03.07-.34.762-1.053 1.578l1.237 1.469a.45.45 0 0 1-.055.635Z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

ClosedEyeIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().form.withConfig({
  displayName: "LoginModal__Container",
  componentId: "sc-1jtfh77-0"
})(["width:568px;padding:32px;background-color:white;z-index:11;.mordal-close-x-icon{cursor:pointer;display:block;margin:0 0 40px auto;}.login-input-wrapper{position:relative;margin-bottom:16px;}.login-password-input-wrapper{svg{cursor:pointer;}}.login-modal-submit-button-wrapper{margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid ", ";}.login-modal-set-signup{color:", ";margin-left:8px;cursor:pointer;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__.default.gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_5__.default.dark_cyan);

const LoginModal = ({
  closeModal
}) => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: isPasswordHided,
    1: setIsPasswordHided
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(); //*비밀번호 숨김 토글하기

  const togglePasswordHiding = () => {
    setIsPasswordHided(!isPasswordHided);
  }; //* 이메일 주소 변경시


  const onChangeEmail = event => {
    setEmail(event.target.value);
  }; //* 비밀번호 변경 시


  const onChangePassword = event => {
    setPassword(event.target.value);
  }; //* 회원가입 모달로 변경하기


  const changeToSignUpModal = () => {
    dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_4__.authActions.setAuthMode("signup"));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CloseXIcon, {
      className: "mordal-close-x-icon",
      onClick: closeModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "login-input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_7__.default, {
        placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C",
        name: "email",
        type: "email",
        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 27
        }, undefined),
        value: email,
        onChange: onChangeEmail
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "login-input-wrapper login-password-input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_7__.default, {
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC124\uC815\uD558\uAE30",
        type: isPasswordHided ? "password" : "text",
        icon: isPasswordHided ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ClosedEyeIcon, {
          onClick: togglePasswordHiding
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 46
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OpenedEyeIcon, {
          onClick: togglePasswordHiding
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 99
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "login-modal-submit-button-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["\uC5D0\uC5B4\uBE44\uC5D4\uBE44 \uACC4\uC815\uC774 \uC5C6\uB098\uC694?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "login-modal-set-signup",
        role: "presentation",
        onClick: changeToSignUpModal,
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./components/auth/PasswordWarning.tsx":
/*!*********************************************!*\
  !*** ./components/auth/PasswordWarning.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\auth\\PasswordWarning.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var RedXIcon = function RedXIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 6.55 13.55 0l.45.45L7.45 7 14 13.55l-.45.45L7 7.45.45 14 0 13.55 6.55 7 0 .45.45 0 7 6.55Z",
      fill: "#D93900"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

RedXIcon.defaultProps = {
  width: "14",
  height: "14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var GreenCheckIcon = function GreenCheckIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 .4 4.476 10.5 0 5.218l.444-.378 4.054 4.786L13.575 0 14 .4Z",
      fill: "#008A05"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

GreenCheckIcon.defaultProps = {
  width: "14",
  height: "11",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "PasswordWarning__Container",
  componentId: "sc-184ncz8-0"
})(["color:", ";line-height:1.5;display:flex;align-items:center;svg{margin-right:8px;}"], ({
  isValid
}) => isValid ? _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.davidson_orange : _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.green);

const PasswordWarning = ({
  isValid,
  text
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    isValid: isValid,
    children: [isValid ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RedXIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 24
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GreenCheckIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 39
    }, undefined), text]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordWarning);

/***/ }),

/***/ "./components/auth/SignUpModal.tsx":
/*!*****************************************!*\
  !*** ./components/auth/SignUpModal.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/input */ "./components/common/input.tsx");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api/auth */ "./lib/api/auth.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/user */ "./store/user.ts");
/* harmony import */ var _hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useValidateMode */ "./hooks/useValidateMode.ts");
/* harmony import */ var _PasswordWarning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PasswordWarning */ "./components/auth/PasswordWarning.tsx");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.ts");


var _jsxFileName = "C:\\react\\next-airbnb\\components\\auth\\SignUpModal.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CloseXIcon = function CloseXIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m7.667 7.217 6.55-6.55.45.45-6.55 6.55 6.55 6.55-.45.45-6.55-6.55-6.55 6.55-.45-.45 6.55-6.55-6.55-6.55.45-.45 6.55 6.55Z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

CloseXIcon.defaultProps = {
  width: "15",
  height: "15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var MailIcon = function MailIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M.306 0v13.5H22V0H.306Zm5.987 5.947L2.114 10.23V3.137l4.179 2.81ZM2.55 1.5h17.206l-8.603 5.785L2.55 1.5Zm5.147 5.391 3.456 2.324 3.462-2.328L19.688 12H2.713l4.984-5.109Zm8.323-.948 4.172-2.806v7.011L16.02 5.943Z",
      fill: "#222"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

MailIcon.defaultProps = {
  width: "22",
  height: "14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var PersonIcon = function PersonIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M8 1.333a3.337 3.337 0 0 1 3.333 3.334A3.338 3.338 0 0 1 8 8.001a3.338 3.338 0 0 1-3.333-3.334A3.337 3.337 0 0 1 8 1.333ZM8 0a4.667 4.667 0 1 0 0 9.334A4.667 4.667 0 0 0 8 0Zm4.246 8.902c-.331.332-.705.62-1.105.868 1.914 1.25 2.918 3.389 3.314 4.897H1.531C1.912 13.141 2.903 11 4.846 9.762a6.005 6.005 0 0 1-1.105-.875C.902 10.935 0 14.558 0 16h16c0-1.428-.96-5.038-3.754-7.098Z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

PersonIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var OpenedEyeIcon = function OpenedEyeIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      clipPath: "url(#a)",
      fill: "#000",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M15.941 7.81c-.126-.183-3.154-4.477-7.94-4.477-4.108 0-7.768 4.27-7.922 4.452a.335.335 0 0 0 0 .43c.154.182 3.814 4.452 7.921 4.452 4.108 0 7.768-4.27 7.922-4.452a.333.333 0 0 0 .019-.404ZM8.001 12C4.707 12 1.576 8.86.78 8c.794-.86 3.922-4 7.22-4 3.852 0 6.571 3.135 7.235 3.982C14.47 8.815 11.321 12 8 12Z"
      }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M8 5.333A2.67 2.67 0 0 0 5.333 8 2.67 2.67 0 0 0 8 10.667 2.67 2.67 0 0 0 10.667 8 2.67 2.67 0 0 0 8 5.333ZM8 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z"
      }, void 0, false, void 0, this)]
    }, void 0, true, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
        id: "a",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          fill: "#fff",
          d: "M0 0h16v16H0z"
        }, void 0, false, void 0, this)
      }, void 0, false, void 0, this)
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

OpenedEyeIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ClosedEyeIcon = function ClosedEyeIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M15.84 8.311a.449.449 0 0 1-.636-.054l-1.181-1.404A8.062 8.062 0 0 1 12.05 8.17l.674 1.634a.45.45 0 1 1-.834.344l-.674-1.634a9.843 9.843 0 0 1-2.893.527v1.745a.45.45 0 0 1-.902 0V9.041a9.945 9.945 0 0 1-2.669-.454l-.644 1.56a.451.451 0 1 1-.834-.343l.634-1.536a8.081 8.081 0 0 1-2.04-1.286L.797 8.257a.45.45 0 1 1-.69-.58L1.22 6.352C.413 5.475.07 4.704.037 4.629a.45.45 0 1 1 .828-.356c.03.07.382.845 1.223 1.683.012.008.024.015.035.024.03.025.054.054.076.084A7.241 7.241 0 0 0 4.63 7.587c.014.005.029.007.043.013l.016.009c.875.326 1.926.54 3.184.54 5.282 0 6.991-3.837 7.008-3.876a.45.45 0 1 1 .829.356c-.03.07-.34.762-1.053 1.578l1.237 1.469a.45.45 0 0 1-.055.635Z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

ClosedEyeIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};










const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().form.withConfig({
  displayName: "SignUpModal__Container",
  componentId: "sc-102epsj-0"
})(["width:568px;padding:32px;background-color:white;z-index:11;.mordal-close-x-icon{cursor:pointer;display:block;margin:0 0 40px auto;}.input-wrapper{position:relative;margin-bottom:16px;}.sign-up-password-input-wrapper{svg{cursor:pointer;}}.sign-up-birthdat-label{font-size:16px;font-weight:600;margin-top:16px;margin-bottom:8px;}.sign-up-modal-birthday-info{margin-bottom:16px;color:", ";}.sign-up-modal-birthday-selectors{display:flex;margin-bottom:24px;.sign-up-modal-birthday-month-selector{margin-right:16px;flex-grow:1;}.sign-up-modal-birthday-day-selector{margin-right:16px;width:25%;}.sign-up-modal-birthday-year-selector{width:33.3333%;}}.sign-up-modal-submit-button-wrapper{margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid ", ";}.sign-up-modal-set-login{color:", ";margin-left:8px;cursor:pointer;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.charcoal, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.dark_cyan);
//*비밀번호 최소 자릿수
const PASSWORD_MIN_LENGTH = 8;

const SignUpModal = ({
  closeModal
}) => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: lastname,
    1: setLastname
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: firstname,
    1: setFirstname
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: hidePassword,
    1: setHidePassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: birthYear,
    1: setBirthYear
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: birthDay,
    1: setBirthDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: birthMonth,
    1: setBirthMonth
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: passwordFocused,
    1: setPasswordFocused
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  const {
    setValidateMode
  } = (0,_hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_11__.default)();

  const changeToLoginModal = () => {
    dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_13__.authActions.setAuthMode("login"));
  }; //* 이메일 주소 변경 시


  const onChangeEmail = event => {
    setEmail(event.target.value);
  }; //* 이름 변경 시


  const onChangeLastname = event => {
    setLastname(event.target.value);
  }; //* 성 변경 시


  const onChangeFirstname = event => {
    setFirstname(event.target.value);
  }; //* 비밀번호 변경 시


  const onChangePassword = event => {
    setPassword(event.target.value);
  }; //*비밀번호 숨김 토글하기


  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  }; //* 생년월일 월 변경시


  const onChangeBirthMonth = event => {
    console.log(event.target.value);
    setBirthMonth(event.target.value);
    console.log("월변경 이벤트 동작" + birthMonth);
  }; //* 생년월일 일 변경시


  const onChangeBirthDay = event => {
    console.log(event.target.value);
    setBirthDay(event.target.value);
    console.log("일변경 이벤트 동작" + birthDay);
  }; //* 생년월일 년 변경시


  const onChangeBirthYear = event => {
    console.log(event.target.value);
    setBirthYear(event.target.value);
    console.log("년변경 이벤트 동작" + birthYear);
  }; //* 회원 가입 폼 제출하기


  const onSubmitSignUp = async event => {
    event.preventDefault();
    setValidateMode(true);
    console.log(validateSignUpForm());

    if (validateSignUpForm()) {
      try {
        console.log(`${birthYear}-${birthMonth.replace("월", "")}-${birthDay}`);
        const signUpBody = {
          email,
          lastname,
          firstname,
          password,
          birthday: new Date(`${birthYear}-${birthMonth.replace("월", "")}-${birthDay}`).toISOString()
        };
        const {
          data
        } = await (0,_lib_api_auth__WEBPACK_IMPORTED_MODULE_8__.signupAPI)(signUpBody);
        dispatch(_store_user__WEBPACK_IMPORTED_MODULE_10__.userActions.setLoggedUser(data));
        closeModal();
      } catch (e) {
        console.log(e);
      }
    }
  }; //* 비밀번호 인풋 포커스 되었을 때


  const onFocusPassword = () => {
    setPasswordFocused(true);
  }; //* password가 이름이나 이메일을 포함하는지


  const isPasswordHasNameOrEmail = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => !password || !lastname || password.includes(lastname) || password.includes(email.split("@")[0]), [password, lastname, email]); //* 비밀번호가 최소 자릿수 이상인지

  const isPasswordOverMinLength = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => !!password && password.length >= PASSWORD_MIN_LENGTH, [password]); //* 비밀번호가 숫자나 특수기호를 포함하는지

  const isPasswordHasNumberOrSymbol = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => !(/[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g.test(password) || /[0-9]/g.test(password)), [password]); //* 회원가입 폼 입력 값 확인하기

  const validateSignUpForm = () => {
    //* 인풋 값이 없다면
    if (!email || !lastname || !firstname || !password) {
      return false;
    } //* 비밀번호가 올바르지 않다면


    if (isPasswordHasNameOrEmail || !isPasswordOverMinLength || isPasswordHasNumberOrSymbol) {
      return false;
    } //* 생년월일 셀렉터 값이 없다면


    if (!birthDay || !birthMonth || !birthYear) {
      return false;
    }

    return true;
  }; //* 언마운트시 발리데이트모드 끄기


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    onSubmit: onSubmitSignUp,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CloseXIcon, {
      className: "mordal-close-x-icon",
      onClick: closeModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_4__.default, {
        placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C",
        type: "email",
        name: "email",
        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 23
        }, undefined),
        value: email,
        onChange: onChangeEmail,
        useValidation: true,
        isValid: !!email,
        errorMessage: "\uC774\uBA54\uC77C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_4__.default, {
        placeholder: "\uC774\uB984(\uC608:\uAE38\uB3D9)",
        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PersonIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 23
        }, undefined),
        value: lastname,
        onChange: onChangeLastname,
        useValidation: true,
        isValid: !!lastname,
        errorMessage: "\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_4__.default, {
        placeholder: "\uC131(\uC608: \uD64D)",
        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PersonIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 23
        }, undefined),
        value: firstname,
        onChange: onChangeFirstname,
        useValidation: true,
        isValid: !!firstname,
        errorMessage: "\uC131\uC744 \uC785\uB825\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_4__.default, {
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC124\uC815\uD558\uAE30",
        type: hidePassword ? "password" : "text",
        icon: hidePassword ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ClosedEyeIcon, {
          onClick: toggleHidePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 39
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OpenedEyeIcon, {
          onClick: toggleHidePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 88
        }, undefined),
        value: password,
        onChange: onChangePassword,
        useValidation: true,
        isValid: !isPasswordHasNameOrEmail && isPasswordOverMinLength && !isPasswordHasNumberOrSymbol,
        errorMessage: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.",
        onFocus: onFocusPassword
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }, undefined), passwordFocused && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PasswordWarning__WEBPACK_IMPORTED_MODULE_12__.default, {
        isValid: isPasswordHasNameOrEmail,
        text: "\uBE44\uBC00\uBC88\uD638\uC5D0 \uBCF8\uC778 \uC774\uB984\uC774\uB098 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uD3EC\uD568\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PasswordWarning__WEBPACK_IMPORTED_MODULE_12__.default, {
        isValid: !isPasswordOverMinLength,
        text: "\uCD5C\uC18C 8\uC790"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PasswordWarning__WEBPACK_IMPORTED_MODULE_12__.default, {
        isValid: isPasswordHasNumberOrSymbol,
        text: "\uC22B\uC790\uB098 \uAE30\uD638\uB97C \uD3EC\uD568\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }, undefined)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "sign-up-birthdat-label",
      children: "\uC0DD\uC77C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "sign-up-modal-birthday-info",
      children: "\uB9CC 18\uC138 \uC774\uC0C1\uC758 \uC131\uC778\uB9CC \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0DD\uC77C\uC740 \uB2E4\uB978 \uC5D0\uC5B4\uBE44\uC564\uBE44 \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uAC1C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sign-up-modal-birthday-selectors",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sign-up-modal-birthday-month-selector",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_6__.default, {
          options: _lib_staticData__WEBPACK_IMPORTED_MODULE_5__.monthList,
          disabledOptions: ["월"],
          defaultValue: "\uC6D4",
          value: birthMonth,
          onChange: onChangeBirthMonth,
          isValid: !!birthMonth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sign-up-modal-birthday-day-selector",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_6__.default, {
          options: _lib_staticData__WEBPACK_IMPORTED_MODULE_5__.dayList,
          disabledOptions: ["일"],
          defaultValue: "\uC77C",
          value: birthDay,
          onChange: onChangeBirthDay,
          isValid: !!birthDay
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sign-up-modal-birthday-year-selector",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_6__.default, {
          options: _lib_staticData__WEBPACK_IMPORTED_MODULE_5__.yearList,
          disabledOptions: ["년"],
          defaultValue: "\uB144",
          value: birthYear,
          onChange: onChangeBirthYear,
          isValid: !!birthYear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sign-up-modal-submit-button-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
        type: "submit",
        children: "\uAC00\uC785\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["\uC774\uBBF8 \uC5D0\uC5B4\uBE44\uC564\uBE44 \uACC4\uC815\uC774 \uC788\uB098\uC694?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "sign-up-modal-set-login",
        role: "presentation",
        onClick: () => {},
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 254,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignUpModal);

/***/ }),

/***/ "./components/common/Button.tsx":
/*!**************************************!*\
  !*** ./components/common/Button.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\common\\Button.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "Button__Container",
  componentId: "sc-1h0fxq-0"
})(["width:100%;height:48px;border:0;border-radius:4px;background-color:", ";color:white;font-size:16px;font-weight:800;outline:none;cursor:pointer;"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.bittersweet);

const Button = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/common/Selector.tsx":
/*!****************************************!*\
  !*** ./components/common/Selector.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\common\\Selector.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const normalSelectorStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["width:100%;height:46px;select{width:100%;height:100%;background-color:white;border:1px solid ", ";font-size:16px;padding:0 11px;border-radius:4px;outline:none;-webkit-appearance:none;background-image:url(\"/static/svg/common/selector/selector_down_arrow.svg\");background-position:right 11px center;background-repeat:no-repeat;&:focus{border-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan);
const RegisterSelectorStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["width:100%;label{position:relative;}span{display:block;font-size:16px;color:", ";font-weight:600;margin-bottom:8px;}select{width:100%;height:56px;border-radius:8px;border:1px solid ", ";padding:0 14px 0 12px;appearance:none;outline:none;-webkit-appearance:none;background-image:url(\"/static/svg/common/selector/register_selector_down_arrow.svg\");background-position:right 14px center;background-repeat:no-repeat;font-size:16px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_b0);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Selector__Container",
  componentId: "sc-1y4w82y-0"
})(["", ";", ";select{", " &:disabled{background-image:url(\"/static/svg/common/selector/disabled_register_selector_down_arrow.svg\");background-color:", ";border-color:", ";color:", ";cursor:not-allowed;}}.selector-warning{margin-top:8px;display:flex;align-items:center;svg{margin-right:4px;}p{font-size:12px;color:", ";}}"], ({
  type
}) => type === "normal" && normalSelectorStyle, ({
  type
}) => type === "register" && RegisterSelectorStyle, ({
  validateMode,
  isValid
}) => {
  if (validateMode) {
    if (!isValid) {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border-color:", ";background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.tawny, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.snow);
    }

    return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan);
  }

  return undefined;
}, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_e5, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_e5, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.davidson_orange);

const Selector = (_ref) => {
  let {
    options = [],
    disabledOptions = [],
    isValid
  } = _ref,
      props = _objectWithoutProperties(_ref, ["options", "disabledOptions", "isValid"]);

  const validateMode = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.common.validateMode);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    isValid: !!isValid,
    validateMode: validateMode,
    type: "register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", _objectSpread(_objectSpread({}, props), {}, {
      children: [disabledOptions.map((option, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: option,
        disabled: true,
        children: option
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }, undefined)), options.map((option, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: option,
        children: option
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }, undefined))]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Selector);

/***/ }),

/***/ "./components/common/input.tsx":
/*!*************************************!*\
  !*** ./components/common/input.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\common\\input.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "input__Container",
  componentId: "sc-147drp4-0"
})(["label{span{display:block;margin-bottom:8px;}}input{position:relative;width:100%;height:46px;padding:", ";border:1px solid ", ";border-radius:4px;font-size:16px;outline:none;&::placeholder{color:", ";}&:focus{border-color:", ";}}.input-icon-wrapper{position:absolute;top:0;right:11px;height:46px;display:flex;align-items:center;}svg{position:absolute;right:11px;height:46px;}.input-error-message{margin-top:8px;font-weight:600;font-size:14px;color:", ";}", " ", ""], ({
  iconExist
}) => iconExist ? "0 44px 0 11px " : "0 11px", _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.tawny, ({
  useValidation,
  isValid
}) => useValidation && !isValid && styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      input {
        background-color: ${_styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.snow};
        border-color: ${_styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.orange};
        & :focus {
          border-color: ${_styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.orange};
        }
      }
    `, ({
  useValidation,
  isValid
}) => useValidation && isValid && styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      input {
        border-color: ${_styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan};
      }
    `); //React.InputHTMLAttributes<HTMLInputElement>는 <input> 태그가 가지는 속성들에 대한 타입입니다.
// extends를 사용하여 IProps는 <input> 태그가 가지는 속성을 확장하여 사용하게 됩니다.
//그리고 icon?: JSX.Element;는 타입이 JSX 엘리먼트인 icon 값을 받지 않을 수도 undefined일 수도 있다는 것을 의미합니다.
//결국 icon?:JSX.Element;   icon: JSX.Element | undefined; 는 같은 코드입니다. 하지만 의미상으로
//icon?:JSX.Element는 icon 값을 사용하지 않아도 된다로 사용합니다.
//icon: JSX.Element | undefined;는 icon을 받는데 undefined일 수 있다로 사용합니다.
//<Input icon={undefined} /> 사용하는 의미상 다르기 때문에 어떤 방식을 사용해도 코드상으로는 문제가 없습니다.

const Input = (_ref) => {
  let {
    icon,
    isValid = false,
    useValidation = true,
    errorMessage
  } = _ref,
      props = _objectWithoutProperties(_ref, ["icon", "isValid", "useValidation", "errorMessage"]);

  const validateMode = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.common.validateMode);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    iconExist: !!icon,
    isValid: isValid,
    useValidation: validateMode && useValidation,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, undefined), icon, useValidation && validateMode && !isValid && errorMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "input-error=message",
      children: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./hooks/useModal.tsx":
/*!****************************!*\
  !*** ./hooks/useModal.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\react\\next-airbnb\\hooks\\useModal.tsx";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "useModal__Container",
  componentId: "sc-1oqnzbe-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;z-index:11;.modal-background{position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,0.75);}"]);

const useModal = () => {
  const {
    0: modalOpened,
    1: setModalOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const ModalPortal = ({
    children
  }) => {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const {
      0: mounted,
      1: setMounted
    } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      setMounted(true);

      if (document) {
        const dom = document.querySelector("#root-modal");
        ref.current = dom;
      }
    }, []);

    if (ref.current && mounted && modalOpened) {
      return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modal-background",
          role: "presentation",
          onClick: closeModal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined), ",", children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined), ref.current);
    }

    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useModal);

/***/ }),

/***/ "./hooks/useValidateMode.ts":
/*!**********************************!*\
  !*** ./hooks/useValidateMode.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _store_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/common */ "./store/common.ts");



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  const validateMode = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.common.validateMode);

  const setValidateMode = value => {
    dispatch(_store_common__WEBPACK_IMPORTED_MODULE_2__.commonActions.setValidateMode(value));
  };

  return {
    validateMode,
    setValidateMode
  };
});

/***/ }),

/***/ "./lib/api/auth.ts":
/*!*************************!*\
  !*** ./lib/api/auth.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signupAPI": function() { return /* binding */ signupAPI; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

//* 회원가입 api
const signupAPI = body => axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/auth/signup", body);

/***/ }),

/***/ "./lib/staticData.ts":
/*!***************************!*\
  !*** ./lib/staticData.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monthList": function() { return /* binding */ monthList; },
/* harmony export */   "dayList": function() { return /* binding */ dayList; },
/* harmony export */   "yearList": function() { return /* binding */ yearList; }
/* harmony export */ });
//* 1월부터 12월 까지
const monthList = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]; //* 1부터 31까지

const dayList = Array.from(Array(31), (_, i) => String(i + 1)); //* 2020년부터 1900년까지

const yearList = Array.from(Array(121), (_, i) => String(2020 - i));

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/GlobalStyle */ "./styles/GlobalStyle.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store/index.ts");


var _jsxFileName = "C:\\react\\next-airbnb\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const app = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "root-modal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_3__.wrapper.withRedux(app));

/***/ }),

/***/ "./store/auth.ts":
/*!***********************!*\
  !*** ./store/auth.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authActions": function() { return /* binding */ authActions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //* 초기 상태

const initialState = {
  authMode: "signup"
};
const auth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "auth",
  initialState,
  reducers: {
    //* 인증 팝업 변경하기
    setAuthMode(state, action) {
      state.authMode = action.payload;
    }

  }
});
const authActions = _objectSpread({}, auth.actions);
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./store/common.ts":
/*!*************************!*\
  !*** ./store/common.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commonActions": function() { return /* binding */ commonActions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


//* 초기 상태
const initialState = {
  validateMode: false
};
const common = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "common",
  initialState,
  reducers: {
    //* validateMode 변경하기
    setValidateMode(state, action) {
      state.validateMode = action.payload;
    }

  }
});
const commonActions = _objectSpread({}, common.actions);
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSelector": function() { return /* binding */ useSelector; },
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./store/user.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./store/common.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ "./store/auth.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  common: _common__WEBPACK_IMPORTED_MODULE_4__.default.reducer,
  user: _user__WEBPACK_IMPORTED_MODULE_3__.default.reducer,
  auth: _auth__WEBPACK_IMPORTED_MODULE_5__.default.reducer
}); //* 스토어 타입

let initialRootState;

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE) {
    if (state === initialRootState) {
      return _objectSpread(_objectSpread({}, state), action.payload);
    }

    return state;
  }

  return rootReducer(state, action);
}; //* 타입 지원되는 커스텀 useSelector 만들기


const useSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector;

const initStore = () => {
  const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
    reducer,
    devTools: true
  });
  initialRootState = store.getState();
  return store;
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(initStore);

/***/ }),

/***/ "./store/user.ts":
/*!***********************!*\
  !*** ./store/user.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userActions": function() { return /* binding */ userActions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


//* 초기 상태
const initialState = {
  id: 0,
  email: "",
  lastname: "",
  firstname: "",
  birthday: "",
  isLogged: false,
  profileImage: ""
};
const user = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  initialState,
  reducers: {
    //* 로그인한 유저 변경하기
    setLoggedUser(state, action) {
      state = _objectSpread(_objectSpread({}, action.payload), {}, {
        isLogged: true
      });
      return state;
    }

  }
});
const userActions = _objectSpread({}, user.actions);
/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./styles/GlobalStyle.tsx":
/*!********************************!*\
  !*** ./styles/GlobalStyle.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-reset */ "styled-reset");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette */ "./styles/palette.ts");



const globalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["", ";*{box-sizing:border-box;}body{font-family:Noto Sans,Noto Sans KR;color:", ";}"], (styled_reset__WEBPACK_IMPORTED_MODULE_0___default()), _palette__WEBPACK_IMPORTED_MODULE_2__.default.black);
const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["", ";"], globalStyle);
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  cardinal: "#a41850",
  davidson_orange: "#c13515",
  tawny: "#d93900",
  amaranth: "#E51E53",
  orange: "#fc642d",
  main_pink: "#FF385C",
  bittersweet: "#ff5a5f",
  black: "#222222",
  charcoal: "#484848",
  snow: "#FFF8F6",
  gray_48: "#484848",
  gray_71: "#717171",
  gray_76: "#767676",
  gray_80: "#808080",
  gray_85: "#858585",
  gray_aa: "#aaa",
  gray_bb: "#bbb",
  gray_b0: "#b0b0b0",
  gray_c4: "#c4c4c4",
  gray_dd: "#ddd",
  gray_eb: "#ebebeb",
  gray_e5: "#e5e5e5",
  gray_f7: "#f7f7f7",
  dark_cyan: "#008489",
  green: "#008A05"
});

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-reset");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvYXV0aC9BdXRoTW9kYWwudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luTW9kYWwudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iLy4vY29tcG9uZW50cy9hdXRoL1Bhc3N3b3JkV2FybmluZy50c3giLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9jb21wb25lbnRzL2F1dGgvU2lnblVwTW9kYWwudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iLy4vY29tcG9uZW50cy9jb21tb24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvY29tbW9uL1NlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvY29tbW9uL2lucHV0LnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2hvb2tzL3VzZU1vZGFsLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2hvb2tzL3VzZVZhbGlkYXRlTW9kZS50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2xpYi9hcGkvYXV0aC50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2xpYi9zdGF0aWNEYXRhLnRzIiwid2VicGFjazovL25leHQtYWlyYm5iLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9zdG9yZS9hdXRoLnRzIiwid2VicGFjazovL25leHQtYWlyYm5iLy4vc3RvcmUvY29tbW9uLnRzIiwid2VicGFjazovL25leHQtYWlyYm5iLy4vc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9zdG9yZS91c2VyLnRzIiwid2VicGFjazovL25leHQtYWlyYm5iLy4vc3R5bGVzL0dsb2JhbFN0eWxlLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3N0eWxlcy9wYWxldHRlLnRzIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJzdHlsZWQtcmVzZXRcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9pZ25vcmVkfEM6XFxyZWFjdFxcbmV4dC1haXJibmJcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBaXJibmJMb2dvSWNvbiIsIkFpcmJuYkxvZ29UZXh0SWNvbiIsIkhhbWJ1cmdlckljb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiSGVhZGVyIiwib3Blbk1vZGFsIiwiTW9kYWxQb3J0YWwiLCJjbG9zZU1vZGFsIiwidXNlTW9kYWwiLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpc0xvZ2dlZCIsImF1dGhBY3Rpb25zIiwicHJvZmlsZUltYWdlIiwiQXV0aE1vZGFsIiwiYXV0aE1vZGUiLCJhdXRoIiwiQ2xvc2VYSWNvbiIsIk1haWxJY29uIiwiT3BlbmVkRXllSWNvbiIsIkNsb3NlZEV5ZUljb24iLCJMb2dpbk1vZGFsIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzUGFzc3dvcmRIaWRlZCIsInNldElzUGFzc3dvcmRIaWRlZCIsInRvZ2dsZVBhc3N3b3JkSGlkaW5nIiwib25DaGFuZ2VFbWFpbCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVBhc3N3b3JkIiwiY2hhbmdlVG9TaWduVXBNb2RhbCIsIlJlZFhJY29uIiwiR3JlZW5DaGVja0ljb24iLCJpc1ZhbGlkIiwicGFsbGV0ZSIsIlBhc3N3b3JkV2FybmluZyIsInRleHQiLCJQZXJzb25JY29uIiwiUEFTU1dPUkRfTUlOX0xFTkdUSCIsIlNpZ25VcE1vZGFsIiwibGFzdG5hbWUiLCJzZXRMYXN0bmFtZSIsImZpcnN0bmFtZSIsInNldEZpcnN0bmFtZSIsImhpZGVQYXNzd29yZCIsInNldEhpZGVQYXNzd29yZCIsImJpcnRoWWVhciIsInNldEJpcnRoWWVhciIsImJpcnRoRGF5Iiwic2V0QmlydGhEYXkiLCJiaXJ0aE1vbnRoIiwic2V0QmlydGhNb250aCIsInBhc3N3b3JkRm9jdXNlZCIsInNldFBhc3N3b3JkRm9jdXNlZCIsInNldFZhbGlkYXRlTW9kZSIsInVzZVZhbGlkYXRlTW9kZSIsImNoYW5nZVRvTG9naW5Nb2RhbCIsIm9uQ2hhbmdlTGFzdG5hbWUiLCJvbkNoYW5nZUZpcnN0bmFtZSIsInRvZ2dsZUhpZGVQYXNzd29yZCIsIm9uQ2hhbmdlQmlydGhNb250aCIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZUJpcnRoRGF5Iiwib25DaGFuZ2VCaXJ0aFllYXIiLCJvblN1Ym1pdFNpZ25VcCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVTaWduVXBGb3JtIiwicmVwbGFjZSIsInNpZ25VcEJvZHkiLCJiaXJ0aGRheSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImRhdGEiLCJzaWdudXBBUEkiLCJ1c2VyQWN0aW9ucyIsImUiLCJvbkZvY3VzUGFzc3dvcmQiLCJpc1Bhc3N3b3JkSGFzTmFtZU9yRW1haWwiLCJ1c2VNZW1vIiwiaW5jbHVkZXMiLCJzcGxpdCIsImlzUGFzc3dvcmRPdmVyTWluTGVuZ3RoIiwibGVuZ3RoIiwiaXNQYXNzd29yZEhhc051bWJlck9yU3ltYm9sIiwidGVzdCIsInVzZUVmZmVjdCIsIm1vbnRoTGlzdCIsImRheUxpc3QiLCJ5ZWFyTGlzdCIsIkJ1dHRvbiIsImNoaWxkcmVuIiwicHJvcHMiLCJub3JtYWxTZWxlY3RvclN0eWxlIiwiY3NzIiwiUmVnaXN0ZXJTZWxlY3RvclN0eWxlIiwidHlwZSIsInZhbGlkYXRlTW9kZSIsInVuZGVmaW5lZCIsIlNlbGVjdG9yIiwib3B0aW9ucyIsImRpc2FibGVkT3B0aW9ucyIsImNvbW1vbiIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiaWNvbkV4aXN0IiwidXNlVmFsaWRhdGlvbiIsIklucHV0IiwiaWNvbiIsImVycm9yTWVzc2FnZSIsIm1vZGFsT3BlbmVkIiwic2V0TW9kYWxPcGVuZWQiLCJyZWYiLCJ1c2VSZWYiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImRvY3VtZW50IiwiZG9tIiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjcmVhdGVQb3J0YWwiLCJjb21tb25BY3Rpb25zIiwiYm9keSIsImF4aW9zIiwiQXJyYXkiLCJmcm9tIiwiXyIsImkiLCJTdHJpbmciLCJhcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3cmFwcGVyIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRBdXRoTW9kZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1Y2VyIiwiaW5pdGlhbFJvb3RTdGF0ZSIsIkhZRFJBVEUiLCJ1c2VSZWR1eFNlbGVjdG9yIiwiaW5pdFN0b3JlIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImRldlRvb2xzIiwiZ2V0U3RhdGUiLCJjcmVhdGVXcmFwcGVyIiwiaWQiLCJzZXRMb2dnZWRVc2VyIiwiZ2xvYmFsU3R5bGUiLCJyZXNldCIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJjYXJkaW5hbCIsImRhdmlkc29uX29yYW5nZSIsInRhd255IiwiYW1hcmFudGgiLCJvcmFuZ2UiLCJtYWluX3BpbmsiLCJiaXR0ZXJzd2VldCIsImJsYWNrIiwiY2hhcmNvYWwiLCJzbm93IiwiZ3JheV80OCIsImdyYXlfNzEiLCJncmF5Xzc2IiwiZ3JheV84MCIsImdyYXlfODUiLCJncmF5X2FhIiwiZ3JheV9iYiIsImdyYXlfYjAiLCJncmF5X2M0IiwiZ3JheV9kZCIsImdyYXlfZWIiLCJncmF5X2U1IiwiZ3JheV9mNyIsImRhcmtfY3lhbiIsImdyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDT0EsYyxZQUFBQSxjOzs7Ozs7Ozs7QUFBQUEsYzs7Ozs7OztJQUNBQyxrQixZQUFBQSxrQjs7Ozs7Ozs7O0FBQUFBLGtCOzs7Ozs7QUFDUDtBQUVBO0FBQ0E7O0lBQ09DLGEsWUFBQUEsYTs7Ozs7Ozs7O0FBQUFBLGE7Ozs7OztBQUNQO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLFNBQVMsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsZzlDQStC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Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBaXJibmJMb2dvSWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zdmcvbG9nby9sb2dvLnN2Z1wiO1xyXG5pbXBvcnQgQWlyYm5iTG9nb1RleHRJY29uIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3N2Zy9sb2dvL2xvZ29fdGV4dC5zdmdcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCBTaWduVXBNb2RhbCBmcm9tIFwiLi9hdXRoL1NpZ25VcE1vZGFsXCI7XHJcbmltcG9ydCB1c2VNb2RhbCBmcm9tIFwiLi4vaG9va3MvdXNlTW9kYWxcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IEhhbWJ1cmdlckljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvc3ZnL2hlYWRlci9oYW1idXJnZXIuc3ZnXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF1dGhBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL2F1dGhcIjtcclxuaW1wb3J0IEF1dGhNb2RhbCBmcm9tIFwiLi9hdXRoL0F1dGhNb2RhbFwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDEycHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgLmhlYWRlci1sb2dvLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuaGVhZGVyLWxvZ28ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlci1hdXRoLWJ1dHRvbnMge1xyXG4gICAgLmhlYWRlci1zaWduLXVwLWJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JheV9mN307XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZWFkZXItbG9naW4tYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaGVhZGVyLXVzZXItcHJvZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHBhZGRpbmc6IDAgNnB4IDAgMTZweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXVzZXItcHJvZmlsZS1pbWFnZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiByZWFjdC1vdXNpZGUtY2xpY2staGFuZGxlciBkaXYgKi9cclxuICAuaGVhZGVyLWxvZ28td3JhcHBlciArIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXVzZXJtZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MnB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2Y3fTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhlYWRlci11c2VybWVudS1kaXZpZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIC8v66qo64us7J2EIOyXtOqzoCDri6vsnYQgYm9vbGVhbiDqsJJcclxuICAgIGNvbnN0IHtvcGVuTW9kYWwsIE1vZGFsUG9ydGFsLCBjbG9zZU1vZGFsfSA9IHVzZU1vZGFsKCk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxBaXJibmJMb2dvSWNvbiBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8QWlyYm5iTG9nb1RleHRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIHshdXNlci5pc0xvZ2dlZCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYXV0aC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImhlYWRlci1zaWduLXVwLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKT0+e2Rpc3BhdGNoKGF1dGhBY3Rpb25zLnNldEF1dGhNb2RlKFwic2lnbnVwXCIpKTsgXHJcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICDtmozsm5Ag6rCA7J6FXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJoZWFkZXItbG9naW4tYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goYXV0aEFjdGlvbnMuc2V0QXV0aE1vZGUoXCJsb2dpblwiKSk7XHJcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHt1c2VyLmlzTG9nZ2VkICYmIChcclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVhZGVyLXVzZXItcHJvZmlsZVwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgPEhhbWJ1cmdlckljb24gLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIucHJvZmlsZUltYWdlfSBjbGFzc05hbWU9XCJoZWFkZXItdXNlci1wcm9maWxlLWltYWdlXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxNb2RhbFBvcnRhbD5cclxuICAgICAgICAgICAgPEF1dGhNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfS8+XHJcbiAgICAgICAgPC9Nb2RhbFBvcnRhbD5cclxuICAgICAgICBcclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZ25VcE1vZGFsIGZyb20gXCIuL1NpZ25VcE1vZGFsXCI7XHJcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gXCIuL0xvZ2luTW9kYWxcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3RvciwgUm9vdFN0YXRlfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGNsb3NlTW9kYWw6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEF1dGhNb2RhbDogUmVhY3QuRkM8SVByb3BzPiA9ICh7Y2xvc2VNb2RhbH0pID0+IHtcclxuICAgIGNvbnN0IGF1dGhNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmF1dGguYXV0aE1vZGUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHthdXRoTW9kZSA9PT0gXCJzaWdudXBcIiAmJiA8U2lnblVwTW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gLz59XHJcbiAgICAgICAgICAgIHthdXRoTW9kZSA9PT0gXCJsb2dpblwiICYmIDxMb2dpbk1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoTW9kYWw7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYXV0aEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYXV0aFwiO1xyXG5pbXBvcnQgQ2xvc2VYSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvbW9kYWwvbW9kYWxfY29sb3NlX3hfaWNvbi5zdmdcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL21haWwuc3ZnXCI7XHJcbmltcG9ydCBPcGVuZWRFeWVJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL29wZW5lZF9leWUuc3ZnXCI7XHJcbmltcG9ydCBDbG9zZWRFeWVJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL2Nsb3NlZF9leWUuc3ZnXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tbW9uL2lucHV0XCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZm9ybWBcclxuICB3aWR0aDogNTY4cHg7XHJcbiAgcGFkZGluZzogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxMTtcclxuXHJcbiAgLm1vcmRhbC1jbG9zZS14LWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCA0MHB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAubG9naW4taW5wdXQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXBhc3N3b3JkLWlucHV0LXdyYXBwZXIge1xyXG4gICAgc3ZnIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ2luLW1vZGFsLXN1Ym1pdC1idXR0b24td3JhcHBlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZWJ9O1xyXG4gIH1cclxuICAubG9naW4tbW9kYWwtc2V0LXNpZ251cCB7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbmNvbnN0IExvZ2luTW9kYWw6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBjbG9zZU1vZGFsfSkgPT4ge1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaXNQYXNzd29yZEhpZGVkLCBzZXRJc1Bhc3N3b3JkSGlkZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cclxuICAgIC8vKuu5hOuwgOuyiO2YuCDsiKjquYAg7Yag6riA7ZWY6riwXHJcbiAgICBjb25zdCB0b2dnbGVQYXNzd29yZEhpZGluZyA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc1Bhc3N3b3JkSGlkZWQoIWlzUGFzc3dvcmRIaWRlZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vKiDsnbTrqZTsnbwg7KO87IaMIOuzgOqyveyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VFbWFpbCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKiDruYTrsIDrsojtmLgg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKiDtmozsm5DqsIDsnoUg66qo64us66GcIOuzgOqyve2VmOq4sFxyXG4gICAgY29uc3QgY2hhbmdlVG9TaWduVXBNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhdXRoQWN0aW9ucy5zZXRBdXRoTW9kZShcInNpZ251cFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q2xvc2VYSWNvbiBjbGFzc05hbWU9XCJtb3JkYWwtY2xvc2UteC1pY29uXCIgb25DbGljaz17Y2xvc2VNb2RhbH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1pbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbwg7KO87IaMXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17PE1haWxJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWlucHV0LXdyYXBwZXIgbG9naW4tcGFzc3dvcmQtaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IOyEpOygle2VmOq4sFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aXNQYXNzd29yZEhpZGVkPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtpc1Bhc3N3b3JkSGlkZWQgPyAoPENsb3NlZEV5ZUljb24gb25DbGljaz17dG9nZ2xlUGFzc3dvcmRIaWRpbmd9IC8+KSA6ICg8T3BlbmVkRXllSWNvbiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZEhpZGluZ30vPil9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1tb2RhbC1zdWJtaXQtYnV0dG9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPuuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICDsl5DslrTruYTsl5TruYQg6rOE7KCV7J20IOyXhuuCmOyalD9cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luLW1vZGFsLXNldC1zaWdudXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZVRvU2lnblVwTW9kYWx9XHJcbiAgICAgICAgICAgICAgICA+7ZqM7JuQ6rCA7J6FPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luTW9kYWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVkWEljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvcmVkX3hfaWNvbi5zdmdcIjtcclxuaW1wb3J0IEdyZWVuQ2hlY2tJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL2dyZWVuX2NoZWNrX2ljb24uc3ZnXCI7XHJcbmltcG9ydCBwYWxsZXRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnA8eyBpc1ZhbGlkOiBib29sZWFuIH0+YFxyXG4gIGNvbG9yOiAkeyh7IGlzVmFsaWQgfSkgPT5cclxuICAgIGlzVmFsaWQgPyBwYWxsZXRlLmRhdmlkc29uX29yYW5nZSA6IHBhbGxldGUuZ3JlZW59O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBhc3N3b3JkV2FybmluZzogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGlzVmFsaWQsIHRleHR9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgaXNWYWxpZD17aXNWYWxpZH0+XHJcbiAgICAgICAgICAgIHtpc1ZhbGlkID8gPFJlZFhJY29uIC8+IDogPEdyZWVuQ2hlY2tJY29uIC8+fVxyXG4gICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRXYXJuaW5nOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ2xvc2VYSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvbW9kYWwvbW9kYWxfY29sb3NlX3hfaWNvbi5zdmdcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL21haWwuc3ZnXCI7XHJcbmltcG9ydCBQZXJzb25JY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL3BlcnNvbi5zdmdcIjtcclxuaW1wb3J0IE9wZW5lZEV5ZUljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvb3BlbmVkX2V5ZS5zdmdcIjtcclxuaW1wb3J0IENsb3NlZEV5ZUljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvY2xvc2VkX2V5ZS5zdmdcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21tb24vaW5wdXRcIjtcclxuaW1wb3J0IHttb250aExpc3QsIGRheUxpc3QsIHllYXJMaXN0fSBmcm9tIFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi9jb21tb24vU2VsZWN0b3JcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBzaWdudXBBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaS9hdXRoXCI7XHJcbmltcG9ydCBzaWdudXAgZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9hdXRoL3NpZ251cFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VyQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9zdG9yZS91c2VyXCI7XHJcbmltcG9ydCB7IGNvbW1vbkFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvY29tbW9uXCI7XHJcbmltcG9ydCB1c2VWYWxpZGF0ZU1vZGUgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVZhbGlkYXRlTW9kZVwiO1xyXG5pbXBvcnQgUGFzc3dvcmRXYXJuaW5nIGZyb20gXCIuL1Bhc3N3b3JkV2FybmluZ1wiO1xyXG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9zdG9yZS9hdXRoXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZm9ybWBcclxuICB3aWR0aDogNTY4cHg7XHJcbiAgcGFkZGluZzogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxMTtcclxuXHJcbiAgLm1vcmRhbC1jbG9zZS14LWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCA0MHB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICAuc2lnbi11cC1wYXNzd29yZC1pbnB1dC13cmFwcGVyIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaWduLXVwLWJpcnRoZGF0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZ24tdXAtbW9kYWwtYmlydGhkYXktaW5mbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5jaGFyY29hbH07XHJcbiAgfVxyXG4gIC5zaWduLXVwLW1vZGFsLWJpcnRoZGF5LXNlbGVjdG9ycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIC5zaWduLXVwLW1vZGFsLWJpcnRoZGF5LW1vbnRoLXNlbGVjdG9yIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgICAuc2lnbi11cC1tb2RhbC1iaXJ0aGRheS1kYXktc2VsZWN0b3Ige1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgICAuc2lnbi11cC1tb2RhbC1iaXJ0aGRheS15ZWFyLXNlbGVjdG9yIHtcclxuICAgICAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2lnbi11cC1tb2RhbC1zdWJtaXQtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2VifTtcclxuICB9XHJcbiAgLnNpZ24tdXAtbW9kYWwtc2V0LWxvZ2luIHtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG4vLyrruYTrsIDrsojtmLgg7LWc7IaMIOyekOumv+yImFxyXG5jb25zdCBQQVNTV09SRF9NSU5fTEVOR1RIID0gODtcclxuXHJcbmNvbnN0IFNpZ25VcE1vZGFsOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtjbG9zZU1vZGFsfSkgPT4ge1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsYXN0bmFtZSwgc2V0TGFzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZmlyc3RuYW1lLCBzZXRGaXJzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2hpZGVQYXNzd29yZCwgc2V0SGlkZVBhc3N3b3JkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2JpcnRoWWVhciwgc2V0QmlydGhZZWFyXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKTtcclxuICAgIGNvbnN0IFtiaXJ0aERheSwgc2V0QmlydGhEYXldID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG4gICAgY29uc3QgW2JpcnRoTW9udGgsIHNldEJpcnRoTW9udGhdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRm9jdXNlZCwgc2V0UGFzc3dvcmRGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHtzZXRWYWxpZGF0ZU1vZGV9ID0gdXNlVmFsaWRhdGVNb2RlKCk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlVG9Mb2dpbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChhdXRoQWN0aW9ucy5zZXRBdXRoTW9kZShcImxvZ2luXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyog7J2066mU7J28IOyjvOyGjCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUVtYWlsID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyog7J2066aEIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlTGFzdG5hbWUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgIHNldExhc3RuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vKiDshLEg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VGaXJzdG5hbWUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgIHNldEZpcnN0bmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyog67mE67CA67KI7Zi4IOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgIHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vKuu5hOuwgOuyiO2YuCDsiKjquYAg7Yag6riA7ZWY6riwXHJcbiAgICBjb25zdCB0b2dnbGVIaWRlUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICAgIHNldEhpZGVQYXNzd29yZCghaGlkZVBhc3N3b3JkKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8qIOyDneuFhOyblOydvCDsm5Qg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJpcnRoTW9udGggPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBcclxuICAgICAgc2V0QmlydGhNb250aChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuyblOuzgOqyvSDsnbTrsqTtirgg64+Z7J6RXCIgKyBiaXJ0aE1vbnRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyog7IOd64WE7JuU7J28IOydvCDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQmlydGhEYXkgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBcclxuICAgICAgc2V0QmlydGhEYXkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgY29uc29sZS5sb2coXCLsnbzrs4Dqsr0g7J2067Kk7Yq4IOuPmeyekVwiICsgYmlydGhEYXkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyog7IOd64WE7JuU7J28IOuFhCDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQmlydGhZZWFyID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgc2V0QmlydGhZZWFyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi64WE67OA6rK9IOydtOuypO2KuCDrj5nsnpFcIiArIGJpcnRoWWVhcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vKiDtmozsm5Ag6rCA7J6FIO2PvCDsoJzstpztlZjquLBcclxuICAgIGNvbnN0IG9uU3VibWl0U2lnblVwID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgc2V0VmFsaWRhdGVNb2RlKHRydWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWxpZGF0ZVNpZ25VcEZvcm0oKSk7XHJcblxyXG4gICAgICBpZih2YWxpZGF0ZVNpZ25VcEZvcm0oKSl7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtiaXJ0aFllYXJ9LSR7YmlydGhNb250aCEucmVwbGFjZShcIuyblFwiLCBcIlwiKX0tJHtiaXJ0aERheX1gKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzaWduVXBCb2R5ID0ge1xyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgbGFzdG5hbWUsXHJcbiAgICAgICAgICAgIGZpcnN0bmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGJpcnRoZGF5OiBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICBgJHtiaXJ0aFllYXJ9LSR7YmlydGhNb250aCEucmVwbGFjZShcIuyblFwiLCBcIlwiKX0tJHtiaXJ0aERheX1gXHJcbiAgICAgICAgICAgICkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgc2lnbnVwQVBJKHNpZ25VcEJvZHkpO1xyXG4gICAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuc2V0TG9nZ2VkVXNlcihkYXRhKSk7XHJcbiAgICAgICAgICBjbG9zZU1vZGFsKClcclxuXHJcbiAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvLyog67mE67CA67KI7Zi4IOyduO2SiyDtj6zsu6TsiqQg65CY7JeI7J2EIOuVjFxyXG4gICAgY29uc3Qgb25Gb2N1c1Bhc3N3b3JkID0gKCkgPT4ge1xyXG4gICAgICBzZXRQYXNzd29yZEZvY3VzZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qIHBhc3N3b3Jk6rCAIOydtOumhOydtOuCmCDsnbTrqZTsnbzsnYQg7Y+s7ZWo7ZWY64qU7KeAXHJcbiAgICBjb25zdCBpc1Bhc3N3b3JkSGFzTmFtZU9yRW1haWwgPSB1c2VNZW1vKFxyXG4gICAgICAoKSA9PiBcclxuICAgICAgICAhcGFzc3dvcmQgfHxcclxuICAgICAgICAhbGFzdG5hbWUgfHxcclxuICAgICAgICBwYXNzd29yZC5pbmNsdWRlcyhsYXN0bmFtZSkgfHxcclxuICAgICAgICBwYXNzd29yZC5pbmNsdWRlcyhlbWFpbC5zcGxpdChcIkBcIilbMF0pLFxyXG4gICAgICAgIFtwYXNzd29yZCwgbGFzdG5hbWUsIGVtYWlsXVxyXG4gICAgKVxyXG5cclxuICAgIC8vKiDruYTrsIDrsojtmLjqsIAg7LWc7IaMIOyekOumv+yImCDsnbTsg4Hsnbjsp4BcclxuICAgIGNvbnN0IGlzUGFzc3dvcmRPdmVyTWluTGVuZ3RoID0gdXNlTWVtbyhcclxuICAgICAgKCkgPT4gISFwYXNzd29yZCAmJiBwYXNzd29yZC5sZW5ndGggPj0gUEFTU1dPUkRfTUlOX0xFTkdUSCxcclxuICAgICAgW3Bhc3N3b3JkXVxyXG4gICAgKVxyXG4gICAgXHJcbiAgICAvLyog67mE67CA67KI7Zi46rCAIOyIq+yekOuCmCDtirnsiJjquLDtmLjrpbwg7Y+s7ZWo7ZWY64qU7KeAXHJcbiAgICBjb25zdCBpc1Bhc3N3b3JkSGFzTnVtYmVyT3JTeW1ib2wgPSB1c2VNZW1vKFxyXG4gICAgICAoKSA9PlxyXG4gICAgICAgICEoXHJcbiAgICAgICAgICAvW3t9W1xcXS8/Liw7OnwpKn5gIV5cXC1fKzw+QCMkJSZcXFxcPSgnXCJdL2cudGVzdChwYXNzd29yZCkgfHxcclxuICAgICAgICAgIC9bMC05XS9nLnRlc3QocGFzc3dvcmQpXHJcbiAgICAgICAgKSxcclxuICAgICAgW3Bhc3N3b3JkXVxyXG4gICAgKTtcclxuICAgICAgICBcclxuICAgIC8vKiDtmozsm5DqsIDsnoUg7Y+8IOyeheugpSDqsJIg7ZmV7J247ZWY6riwXHJcbiAgICBjb25zdCB2YWxpZGF0ZVNpZ25VcEZvcm0gPSAoKSA9PiB7XHJcbiAgICAgIC8vKiDsnbjtkosg6rCS7J20IOyXhuuLpOuptFxyXG4gICAgICBpZighZW1haWwgfHwgIWxhc3RuYW1lIHx8ICFmaXJzdG5hbWUgfHwgIXBhc3N3b3JkKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLy8qIOu5hOuwgOuyiO2YuOqwgCDsmKzrsJTrpbTsp4Ag7JWK64uk66m0XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc1Bhc3N3b3JkSGFzTmFtZU9yRW1haWwgfHxcclxuICAgICAgICAhaXNQYXNzd29yZE92ZXJNaW5MZW5ndGggfHxcclxuICAgICAgICBpc1Bhc3N3b3JkSGFzTnVtYmVyT3JTeW1ib2xcclxuICAgICAgKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vKiDsg53rhYTsm5Tsnbwg7IWA66CJ7YSwIOqwkuydtCDsl4bri6TrqbRcclxuICAgICAgaWYgKCFiaXJ0aERheSB8fCAhYmlydGhNb250aCB8fCAhYmlydGhZZWFyKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyog7Ja466eI7Jq07Yq47IucIOuwnOumrOuNsOydtO2KuOuqqOuTnCDrgYTquLBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsaWRhdGVNb2RlKGZhbHNlKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgb25TdWJtaXQ9e29uU3VibWl0U2lnblVwfT5cclxuICAgICAgICAgICAgPENsb3NlWEljb24gY2xhc3NOYW1lPVwibW9yZGFsLWNsb3NlLXgtaWNvblwiIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbwg7KO87IaMXCIgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgIGljb249ezxNYWlsSWNvbiAvPn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWVtYWlsfVxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwi7J2066mU7J287J20IO2VhOyalO2VqeuLiOuLpC5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi7J2066aEKOyYiDrquLjrj5kpXCIgXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8UGVyc29uSWNvbiAvPn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGFzdG5hbWV9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwi7J2066aE7J2EIOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi7ISxKOyYiDog7ZmNKVwiIFxyXG4gICAgICAgICAgICAgICAgaWNvbj17PFBlcnNvbkljb24gLz59IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpcnN0bmFtZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VGaXJzdG5hbWV9IFxyXG4gICAgICAgICAgICAgICAgdXNlVmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZD17ISFmaXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U9XCLshLHsnYQg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7ISk7KCV7ZWY6riwXCIgdHlwZT17aGlkZVBhc3N3b3JkID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICBpY29uPXtoaWRlUGFzc3dvcmQgPyAoPENsb3NlZEV5ZUljb24gb25DbGljaz17dG9nZ2xlSGlkZVBhc3N3b3JkfSAvPik6KDxPcGVuZWRFeWVJY29uIG9uQ2xpY2s9e3RvZ2dsZUhpZGVQYXNzd29yZH0gLz4pfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHVzZVZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAhaXNQYXNzd29yZEhhc05hbWVPckVtYWlsICYmXHJcbiAgICAgICAgICAgICAgICAgIGlzUGFzc3dvcmRPdmVyTWluTGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICFpc1Bhc3N3b3JkSGFzTnVtYmVyT3JTeW1ib2xcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlZjshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXNQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cGFzc3dvcmRGb2N1c2VkICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkV2FybmluZyBpc1ZhbGlkPXtpc1Bhc3N3b3JkSGFzTmFtZU9yRW1haWx9IHRleHQ9XCLruYTrsIDrsojtmLjsl5Ag67O47J24IOydtOumhOydtOuCmCDsnbTrqZTsnbwg7KO87IaM66W8IO2PrO2VqO2VoCDsiJgg7JeG7Iq164uI64ukLlwiLz5cclxuICAgICAgICAgICAgICAgIDxQYXNzd29yZFdhcm5pbmcgaXNWYWxpZD17IWlzUGFzc3dvcmRPdmVyTWluTGVuZ3RofSB0ZXh0PVwi7LWc7IaMIDjsnpBcIi8+XHJcbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRXYXJuaW5nIGlzVmFsaWQ9e2lzUGFzc3dvcmRIYXNOdW1iZXJPclN5bWJvbH0gdGV4dD1cIuyIq+yekOuCmCDquLDtmLjrpbwg7Y+s7ZWo7ZWY7IS47JqULlwiLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2lnbi11cC1iaXJ0aGRhdC1sYWJlbFwiPuyDneydvDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2lnbi11cC1tb2RhbC1iaXJ0aGRheS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAg66eMIDE47IS4IOydtOyDgeydmCDshLHsnbjrp4wg7ZqM7JuQ7Jy866GcIOqwgOyehe2VoCDsiJgg7J6I7Iq164uI64ukLiDsg53snbzsnYAg64uk66W4XHJcbiAgICAgICAgICAgICAg7JeQ7Ja067mE7JWk67mEIOydtOyaqeyekOyXkOqyjCDqs7XqsJzrkJjsp4Ag7JWK7Iq164uI64ukLlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtbW9kYWwtYmlydGhkYXktc2VsZWN0b3JzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLW1vZGFsLWJpcnRoZGF5LW1vbnRoLXNlbGVjdG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bW9udGhMaXN0fVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e1tcIuyblFwiXX1cclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi7JuUXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2JpcnRoTW9udGh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJpcnRoTW9udGh9XHJcbiAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9eyEhYmlydGhNb250aH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLW1vZGFsLWJpcnRoZGF5LWRheS1zZWxlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RheUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17W1wi7J28XCJdfVxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLsnbxcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YmlydGhEYXl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJpcnRoRGF5fVxyXG4gICAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWJpcnRoRGF5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtbW9kYWwtYmlydGhkYXkteWVhci1zZWxlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3llYXJMaXN0fVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e1tcIuuFhFwiXX1cclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi64WEXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2JpcnRoWWVhcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQmlydGhZZWFyfVxyXG4gICAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWJpcnRoWWVhcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtbW9kYWwtc3VibWl0LWJ1dHRvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+6rCA7J6F7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICDsnbTrr7gg7JeQ7Ja067mE7JWk67mEIOqzhOygleydtCDsnojrgpjsmpQ/XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZ24tdXAtbW9kYWwtc2V0LWxvZ2luXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwTW9kYWw7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJpdHRlcnN3ZWV0fTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+e1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtjaGlsZHJlbiwgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gPENvbnRhaW5lciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0NvbnRhaW5lcj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2NvbW1vbi93YXJuaW5nLnN2Z1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5cclxuY29uc3Qgbm9ybWFsU2VsZWN0b3JTdHlsZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZWJ9O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMCAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvc3ZnL2NvbW1vbi9zZWxlY3Rvci9zZWxlY3Rvcl9kb3duX2Fycm93LnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDExcHggY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyU2VsZWN0b3JTdHlsZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfYjB9O1xyXG4gICAgcGFkZGluZzogMCAxNHB4IDAgMTJweDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9zdmcvY29tbW9uL3NlbGVjdG9yL3JlZ2lzdGVyX3NlbGVjdG9yX2Rvd25fYXJyb3cuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTRweCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0b3JDb250YWluZXJQcm9wcyB7XHJcbiAgaXNWYWxpZDogYm9vbGVhbjtcclxuICB2YWxpZGF0ZU1vZGU6IGJvb2xlYW47XHJcbiAgdHlwZTogXCJyZWdpc3RlclwiIHwgXCJub3JtYWxcIjtcclxufVxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PFNlbGVjdG9yQ29udGFpbmVyUHJvcHM+YFxyXG4gICR7KHsgdHlwZSB9KSA9PiB0eXBlID09PSBcIm5vcm1hbFwiICYmIG5vcm1hbFNlbGVjdG9yU3R5bGV9O1xyXG4gICR7KHsgdHlwZSB9KSA9PiB0eXBlID09PSBcInJlZ2lzdGVyXCIgJiYgUmVnaXN0ZXJTZWxlY3RvclN0eWxlfTtcclxuXHJcbiAgc2VsZWN0IHtcclxuICAgICR7KHsgdmFsaWRhdGVNb2RlLCBpc1ZhbGlkIH0pID0+IHtcclxuICAgICAgaWYgKHZhbGlkYXRlTW9kZSkge1xyXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUudGF3bnl9O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuc25vd307XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9fVxyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL3N2Zy9jb21tb24vc2VsZWN0b3IvZGlzYWJsZWRfcmVnaXN0ZXJfc2VsZWN0b3JfZG93bl9hcnJvdy5zdmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2Y3fTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZ3JheV9lNX07XHJcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV9lNX07XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0b3Itd2FybmluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUuZGF2aWRzb25fb3JhbmdlfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuU2VsZWN0SFRNTEF0dHJpYnV0ZXM8SFRNTFNlbGVjdEVsZW1lbnQ+IHtcclxuICAgIG9wdGlvbnM/OiBzdHJpbmdbXTtcclxuICAgIGRpc2FibGVkT3B0aW9ucz86IHN0cmluZ1tdO1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgICBpc1ZhbGlkPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU2VsZWN0b3I6IFJlYWN0LkZDPElQcm9wcz4gPSAoe29wdGlvbnMgPSBbXSwgZGlzYWJsZWRPcHRpb25zID0gW10sIGlzVmFsaWQsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhdGVNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24udmFsaWRhdGVNb2RlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBpc1ZhbGlkPXshIWlzVmFsaWR9IHZhbGlkYXRlTW9kZT17dmFsaWRhdGVNb2RlfSB0eXBlPVwicmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgPHNlbGVjdCB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgICAge2Rpc2FibGVkT3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvcHRpb259IGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQsIHtjc3N9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcblxyXG5cclxudHlwZSBJbnB1dENvbnRhaW5lclByb3BzID0ge1xyXG4gIGljb25FeGlzdDogYm9vbGVhbjtcclxuICBpc1ZhbGlkOiBib29sZWFuO1xyXG4gIHVzZVZhbGlkYXRpb246IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8SW5wdXRDb250YWluZXJQcm9wcz5gXHJcbiAgbGFiZWwge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgcGFkZGluZzogJHsoeyBpY29uRXhpc3QgfSkgPT4gKGljb25FeGlzdCA/IFwiMCA0NHB4IDAgMTFweCBcIiA6IFwiMCAxMXB4XCIpfTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2VifTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAmIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgfVxyXG4gICAgJiA6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5wdXQtaWNvbi13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAxMXB4O1xyXG4gICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIHN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTFweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICB9XHJcbiAgLmlucHV0LWVycm9yLW1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUudGF3bnl9O1xyXG4gIH1cclxuICAkeyh7IHVzZVZhbGlkYXRpb24sIGlzVmFsaWQgfSkgPT5cclxuICAgIHVzZVZhbGlkYXRpb24gJiZcclxuICAgICFpc1ZhbGlkICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuc25vd307XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcclxuICAgICAgICAmIDpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYH1cclxuICAkeyh7IHVzZVZhbGlkYXRpb24sIGlzVmFsaWQgfSkgPT5cclxuICAgIHVzZVZhbGlkYXRpb24gJiZcclxuICAgIGlzVmFsaWQgJiZcclxuICAgIGNzc2BcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICAgIH1cclxuICAgIGB9XHJcblxyXG5gO1xyXG5cclxuLy9SZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+64qUIDxpbnB1dD4g7YOc6re46rCAIOqwgOyngOuKlCDsho3shLHrk6Tsl5Ag64yA7ZWcIO2DgOyeheyeheuLiOuLpC5cclxuLy8gZXh0ZW5kc+ulvCDsgqzsmqntlZjsl6wgSVByb3Bz64qUIDxpbnB1dD4g7YOc6re46rCAIOqwgOyngOuKlCDsho3shLHsnYQg7ZmV7J6l7ZWY7JesIOyCrOyaqe2VmOqyjCDrkKnri4jri6QuXHJcbi8v6re466as6rOgIGljb24/OiBKU1guRWxlbWVudDvripQg7YOA7J6F7J20IEpTWCDsl5jrpqzrqLztirjsnbggaWNvbiDqsJLsnYQg67Cb7KeAIOyViuydhCDsiJjrj4QgdW5kZWZpbmVk7J28IOyImOuPhCDsnojri6TripQg6rKD7J2EIOydmOuvuO2VqeuLiOuLpC5cclxuLy/qsrDqta0gaWNvbj86SlNYLkVsZW1lbnQ7ICAgaWNvbjogSlNYLkVsZW1lbnQgfCB1bmRlZmluZWQ7IOuKlCDqsJnsnYAg7L2U65Oc7J6F64uI64ukLiDtlZjsp4Drp4wg7J2Y66+47IOB7Jy866GcXHJcbi8vaWNvbj86SlNYLkVsZW1lbnTripQgaWNvbiDqsJLsnYQg7IKs7Jqp7ZWY7KeAIOyViuyVhOuPhCDrkJzri6TroZwg7IKs7Jqp7ZWp64uI64ukLlxyXG4vL2ljb246IEpTWC5FbGVtZW50IHwgdW5kZWZpbmVkO+uKlCBpY29u7J2EIOuwm+uKlOuNsCB1bmRlZmluZWTsnbwg7IiYIOyeiOuLpOuhnCDsgqzsmqntlanri4jri6QuXHJcbi8vPElucHV0IGljb249e3VuZGVmaW5lZH0gLz4g7IKs7Jqp7ZWY64qUIOydmOuvuOyDgSDri6TrpbTquLAg65WM66y47JeQIOyWtOuWpCDrsKnsi53snYQg7IKs7Jqp7ZW064+EIOy9lOuTnOyDgeycvOuhnOuKlCDrrLjsoJzqsIAg7JeG7Iq164uI64ukLlxyXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XHJcbiAgICBpY29uPzogSlNYLkVsZW1lbnQ7XHJcbiAgICBpc1ZhbGlkPzogYm9vbGVhbjtcclxuICAgIHVzZVZhbGlkYXRpb24/OiBib29sZWFuO1xyXG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9ICh7aWNvbixcclxuICBpc1ZhbGlkID0gZmFsc2UsXHJcbiAgdXNlVmFsaWRhdGlvbiA9IHRydWUsXHJcbiAgZXJyb3JNZXNzYWdlLFxyXG4gIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhdGVNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24udmFsaWRhdGVNb2RlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBcclxuICAgICAgICAgIGljb25FeGlzdD17ISFpY29ufVxyXG4gICAgICAgICAgaXNWYWxpZD17aXNWYWxpZH1cclxuICAgICAgICAgIHVzZVZhbGlkYXRpb249e3ZhbGlkYXRlTW9kZSAmJiB1c2VWYWxpZGF0aW9ufT5cclxuICAgICAgICAgICAgPGlucHV0IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgIHt1c2VWYWxpZGF0aW9uICYmIHZhbGlkYXRlTW9kZSAmJiAhaXNWYWxpZCAmJiBlcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlucHV0LWVycm9yPW1lc3NhZ2VcIj57ZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIC5tb2RhbC1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB1c2VNb2RhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttb2RhbE9wZW5lZCwgc2V0TW9kYWxPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb2RhbE9wZW5lZCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb2RhbE9wZW5lZChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICAgICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBNb2RhbFBvcnRhbDogUmVhY3QuRkM8SVByb3BzPiA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdXNlUmVmPEVsZW1lbnQgfCBudWxsPigpO1xyXG4gICAgICAgIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICAgIHNldE1vdW50ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50KXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdC1tb2RhbFwiKTtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gZG9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgICBpZihyZWYuY3VycmVudCAmJiBtb3VudGVkICYmIG1vZGFsT3BlbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZSA9IFwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAvPixcclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj4sXHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcGVuTW9kYWwsXHJcbiAgICAgICAgY2xvc2VNb2RhbCxcclxuICAgICAgICBNb2RhbFBvcnRhbCxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZU1vZGFsOyIsImltcG9ydCB7IHVzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3J9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBjb21tb25BY3Rpb25zfSBmcm9tIFwiLi4vc3RvcmUvY29tbW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB2YWxpZGF0ZU1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1vbi52YWxpZGF0ZU1vZGUpO1xyXG5cclxuICAgIGNvbnN0IHNldFZhbGlkYXRlTW9kZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGNvbW1vbkFjdGlvbnMuc2V0VmFsaWRhdGVNb2RlKHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgdmFsaWRhdGVNb2RlLCBzZXRWYWxpZGF0ZU1vZGV9O1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1VzZXJUeXBlfSBmcm9tIFwiLi4vLi4vdHlwZXMvdXNlclwiO1xyXG5cclxuLy/sgqzsmqnsnpAg7J247Kad7JeQIOq0gOugqOuQnCBhcGnrpbwg66qo7JWE65GgXHJcblxyXG4vLyrtmozsm5Ag6rCA7J6FIGJvZHlcclxuXHJcbmludGVyZmFjZSBTaWduVXBBUElCb2R5IHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBmaXJzdG5hbWU6IHN0cmluZztcclxuICAgIGxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgYmlydGhkYXk6IHN0cmluZztcclxufVxyXG5cclxuLy8qIO2ajOybkOqwgOyehSBhcGlcclxuZXhwb3J0IGNvbnN0IHNpZ251cEFQSSA9IChib2R5OiBTaWduVXBBUElCb2R5KSA9PiBheGlvcy5wb3N0PFVzZXJUeXBlPihcIi9hcGkvYXV0aC9zaWdudXBcIiwgYm9keSk7IiwiLy8qIDHsm5TrtoDthLAgMTLsm5Qg6rmM7KeAXHJcbmV4cG9ydCBjb25zdCBtb250aExpc3QgPSBbXHJcbiAgICBcIjHsm5RcIixcclxuICAgIFwiMuyblFwiLFxyXG4gICAgXCIz7JuUXCIsXHJcbiAgICBcIjTsm5RcIixcclxuICAgIFwiNeyblFwiLFxyXG4gICAgXCI27JuUXCIsXHJcbiAgICBcIjfsm5RcIixcclxuICAgIFwiOOyblFwiLFxyXG4gICAgXCI57JuUXCIsXHJcbiAgICBcIjEw7JuUXCIsXHJcbiAgICBcIjEx7JuUXCIsXHJcbiAgICBcIjEy7JuUXCIsXHJcbl1cclxuXHJcbi8vKiAx67aA7YSwIDMx6rmM7KeAXHJcbmV4cG9ydCBjb25zdCBkYXlMaXN0ID0gQXJyYXkuZnJvbShBcnJheSgzMSksIChfLCBpKSA9PiBTdHJpbmcoaSArIDEpKTtcclxuXHJcbi8vKiAyMDIw64WE67aA7YSwIDE5MDDrhYTquYzsp4BcclxuZXhwb3J0IGNvbnN0IHllYXJMaXN0ID0gQXJyYXkuZnJvbShBcnJheSgxMjEpLCAoXyxpKSA9PiBTdHJpbmcoMjAyMCAtIGkpKTsiLCJpbXBvcnQge0FwcFByb3BzfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvR2xvYmFsU3R5bGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuXHJcbmNvbnN0IGFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicm9vdC1tb2RhbFwiIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KGFwcCk7IiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuLy8qIOy0iOq4sCDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiB7YXV0aE1vZGU6IFwic2lnbnVwXCIgfCBcImxvZ2luXCJ9ID0ge1xyXG4gICAgYXV0aE1vZGU6IFwic2lnbnVwXCIsXHJcbn1cclxuXHJcbmNvbnN0IGF1dGggPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcImF1dGhcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgLy8qIOyduOymnSDtjJ3sl4Ug67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QXV0aE1vZGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxcInNpZ251cFwiIHwgXCJsb2dpblwiPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmF1dGhNb2RlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoQWN0aW9ucyA9IHsuLi5hdXRoLmFjdGlvbnN9O1xyXG5leHBvcnQgZGVmYXVsdCBhdXRoOyIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgQ29tbW9uU3RhdGV9IGZyb20gXCIuLi90eXBlcy9yZWR1eFN0YXRlXCI7XHJcblxyXG4vLyog7LSI6riwIOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IENvbW1vblN0YXRlID0ge1xyXG4gICAgdmFsaWRhdGVNb2RlOiBmYWxzZSxcclxufVxyXG5cclxuY29uc3QgY29tbW9uID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJjb21tb25cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgLy8qIHZhbGlkYXRlTW9kZSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRWYWxpZGF0ZU1vZGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPil7XHJcbiAgICAgICAgICAgIHN0YXRlLnZhbGlkYXRlTW9kZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY29tbW9uQWN0aW9ucyA9IHsuLi5jb21tb24uYWN0aW9uc307XHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbjsiLCJpbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyLCBNYWtlU3RvcmUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZVNlbGVjdG9yIGFzIHVzZVJlZHV4U2VsZWN0b3JcclxufSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi9hdXRoXCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb21tb246IGNvbW1vbi5yZWR1Y2VyLFxyXG4gICAgdXNlcjogdXNlci5yZWR1Y2VyLFxyXG4gICAgYXV0aDogYXV0aC5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbi8vKiDsiqTthqDslrQg7YOA7J6FXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuXHJcbmxldCBpbml0aWFsUm9vdFN0YXRlOiBSb290U3RhdGU7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpe1xyXG4gICAgICAgIGlmKHN0YXRlID09PSBpbml0aWFsUm9vdFN0YXRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb3RSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG59O1xyXG5cclxuLy8qIO2DgOyehSDsp4Dsm5DrkJjripQg7Luk7Iqk7YWAIHVzZVNlbGVjdG9yIOunjOuTpOq4sFxyXG5leHBvcnQgY29uc3QgdXNlU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VSZWR1eFNlbGVjdG9yO1xyXG5cclxuY29uc3QgaW5pdFN0b3JlOiBNYWtlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgICAgICByZWR1Y2VyLFxyXG4gICAgICAgIGRldlRvb2xzOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBpbml0aWFsUm9vdFN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRTdG9yZSk7IiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBVc2VyVHlwZSB9IGZyb20gXCIuLi90eXBlcy91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gXCIuLi90eXBlcy9yZWR1eFN0YXRlXCI7XHJcblxyXG4vLyog7LSI6riwIOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJTdGF0ZSA9IHtcclxuICAgIGlkOiAwLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBsYXN0bmFtZTogXCJcIixcclxuICAgIGZpcnN0bmFtZTogXCJcIixcclxuICAgIGJpcnRoZGF5OiBcIlwiLFxyXG4gICAgaXNMb2dnZWQ6IGZhbHNlLFxyXG4gICAgcHJvZmlsZUltYWdlOiBcIlwiLFxyXG59O1xyXG5cclxuY29uc3QgdXNlciA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICAvLyog66Gc6re47J247ZWcIOycoOyggCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMb2dnZWRVc2VyKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlclR5cGU+KXtcclxuICAgICAgICAgICAgc3RhdGUgPSB7Li4uYWN0aW9uLnBheWxvYWQsIGlzTG9nZ2VkOiB0cnVlfTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJBY3Rpb25zID0gey4uLnVzZXIuYWN0aW9uc307XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXI7IiwiaW1wb3J0IHJlc2V0IGZyb20gXCJzdHlsZWQtcmVzZXRcIjtcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi9wYWxldHRlXCI7XHJcblxyXG5jb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcclxuICAgICR7cmVzZXR9O1xyXG4gICAgKntcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE5vdG8gU2FucywgTm90byBTYW5zIEtSO1xyXG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuYmxhY2t9O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgICR7Z2xvYmFsU3R5bGV9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBjYXJkaW5hbDogXCIjYTQxODUwXCIsXG4gIGRhdmlkc29uX29yYW5nZTogXCIjYzEzNTE1XCIsXG4gIHRhd255OiBcIiNkOTM5MDBcIixcbiAgYW1hcmFudGg6IFwiI0U1MUU1M1wiLFxuICBvcmFuZ2U6IFwiI2ZjNjQyZFwiLFxuICBtYWluX3Bpbms6IFwiI0ZGMzg1Q1wiLFxuICBiaXR0ZXJzd2VldDogXCIjZmY1YTVmXCIsXG4gIGJsYWNrOiBcIiMyMjIyMjJcIixcbiAgY2hhcmNvYWw6IFwiIzQ4NDg0OFwiLFxuICBzbm93OiBcIiNGRkY4RjZcIixcbiAgZ3JheV80ODogXCIjNDg0ODQ4XCIsXG4gIGdyYXlfNzE6IFwiIzcxNzE3MVwiLFxuICBncmF5Xzc2OiBcIiM3Njc2NzZcIixcbiAgZ3JheV84MDogXCIjODA4MDgwXCIsXG4gIGdyYXlfODU6IFwiIzg1ODU4NVwiLFxuICBncmF5X2FhOiBcIiNhYWFcIixcbiAgZ3JheV9iYjogXCIjYmJiXCIsXG4gIGdyYXlfYjA6IFwiI2IwYjBiMFwiLFxuICBncmF5X2M0OiBcIiNjNGM0YzRcIixcbiAgZ3JheV9kZDogXCIjZGRkXCIsXG4gIGdyYXlfZWI6IFwiI2ViZWJlYlwiLFxuICBncmF5X2U1OiBcIiNlNWU1ZTVcIixcbiAgZ3JheV9mNzogXCIjZjdmN2Y3XCIsXG4gIGRhcmtfY3lhbjogXCIjMDA4NDg5XCIsXG4gIGdyZWVuOiBcIiMwMDhBMDVcIixcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1yZXNldFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==