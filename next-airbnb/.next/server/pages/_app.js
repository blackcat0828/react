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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _HeaderAuths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderAuths */ "./components/HeaderAuths.tsx");
/* harmony import */ var _HeaderUserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeaderUserProfile */ "./components/HeaderUserProfile.tsx");

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




const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Header__Container",
  componentId: "sc-92b6bf-0"
})(["position:sticky;top:0;width:100%;height:80px;display:flex;justify-content:space-between;align-items:center;padding:0 80px;background-color:white;box-shadow:rgba(0,0,0,0.08) 0px 1px 12px;z-index:10;.header-logo-wrapper{display:flex;align-items:center;.header-logo{margin-right:6px;}}.header-auth-buttons{.header-sign-up-button{height:42px;margin-right:8px;padding:0 16px;border:0;border-radius:21px;background-color:white;cursor:pointer;outline:none;font-weight:600;&:hover{background-color:", ";}}.header-login-button{height:42px;padding:0 16px;border:0;box-shadow:0px 1px 2px rgba(0,0,0,0.18);border-radius:21px;background-color:white;cursor:pointer;outline:none;font-weight:600;&:hover{box-shadow:0px 2px 8px rgba(0,0,0,0.12);}}}.header-user-profile{display:flex;align-items:center;height:42px;padding:0 6px 0 16px;border:0;box-shadow:0px 1px 2px rgba(0,0,0,0.18);border-radius:21px;background-color:white;cursor:pointer;outline:none;&:hover{box-shadow:0px 2px 8px rgba(0,0,0,0.12);}.header-user-profile-image{margin-left:8px;width:30px;height:30px;border-radius:50%;}}.header-logo-wrapper + div{position:relative;}.header-usermenu{position:absolute;right:0;top:52px;width:240px;padding:8px 0;box-shadow:0 2px 16px rgba(0,0,0,0.12);border-radius:8px;background-color:white;li{display:flex;align-items:center;width:100%;height:42px;padding:0 16px;cursor:pointer;&:hover{background-color:", ";}}.header-usermenu-divider{width:100%;height:1px;margin:8px 0;background-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_4__.default.gray_dd);

const Header = () => {
  //모달을 열고 닫을 boolean 값
  const isLogged = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user.isLogged);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "header-logo-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AirbnbLogoIcon, {
          className: "header-logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AirbnbLogoTextIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }, undefined), !isLogged && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderAuths__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }, undefined), isLogged && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderUserProfile__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 22
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HeaderAuths.tsx":
/*!************************************!*\
  !*** ./components/HeaderAuths.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useModal */ "./hooks/useModal.tsx");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/auth */ "./store/auth.ts");
/* harmony import */ var _auth_AuthModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/AuthModal */ "./components/auth/AuthModal.tsx");


var _jsxFileName = "C:\\react\\next-airbnb\\components\\HeaderAuths.tsx";






const HeaderAuths = () => {
  const {
    openModal,
    ModalPortal,
    closeModal
  } = (0,_hooks_useModal__WEBPACK_IMPORTED_MODULE_3__.default)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header-auth-buttons",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "header-sign-up-button",
        onClick: () => {
          dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_4__.authActions.setAuthMode("signup"));
          openModal();
        },
        type: "button",
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: "header-login-button",
        onClick: () => {
          dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_4__.authActions.setAuthMode("login"));
          openModal();
        },
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalPortal, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_AuthModal__WEBPACK_IMPORTED_MODULE_5__.default, {
        closeModal: closeModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderAuths);

/***/ }),

/***/ "./components/HeaderUserProfile.tsx":
/*!******************************************!*\
  !*** ./components/HeaderUserProfile.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-outside-click-handler */ "react-outside-click-handler");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api/auth */ "./lib/api/auth.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/user */ "./store/user.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./store/index.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\HeaderUserProfile.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






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




const HeaderUserProfile = () => {
  //* 유저 메뉴 열고, 닫힘 여부
  const {
    0: isUsermenuOpened,
    1: setIsUsermenuOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); //useSelector는 비교를 할 때 객체의 주소를 비교하게 된다. 유저 정보가 변경되어
  //user가 변경된다면 객체가 새로 만들어져 user 객체를 불러온 모든 컴포넌트는 리랜더될 것이다.
  //useProfileImage와 같이 원시 타입으로 사용한다면 리렌더를 방지할 수 있다.

  const userProfileImage = (0,_store__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.user.profileImage);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(); //* 로그아웃 하기

  const logout = async () => {
    try {
      await (0,_lib_api_auth__WEBPACK_IMPORTED_MODULE_5__.logoutAPI)();
      dispatch(_store_user__WEBPACK_IMPORTED_MODULE_6__.userActions.initUser());
    } catch (e) {
      console.log(e.message);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2___default()), {
    onOutsideClick: () => {
      if (isUsermenuOpened) {
        setIsUsermenuOpened(false);
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "header-user-profile",
      type: "button",
      onClick: () => setIsUsermenuOpened(!isUsermenuOpened),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HamburgerIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: userProfileImage,
        className: "header-user-profile-image",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined), isUsermenuOpened && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "header-usermenu",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "\uC219\uC18C \uAD00\uB9AC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/room/register/building",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          role: "presentation",
          onClick: () => {
            setIsUsermenuOpened(false);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\uC219\uC18C \uB4F1\uB85D\uD558\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header-usermenu-divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        role: "presentation",
        onClick: logout,
        children: "\uB85C\uADF8\uC544\uC6C3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderUserProfile);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignUpModal */ "./components/auth/SignUpModal.tsx");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginModal */ "./components/auth/LoginModal.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./store/index.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\auth\\AuthModal.tsx";





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "AuthModal__Container",
  componentId: "sc-dsq4lv-0"
})(["z-index:11;"]);

const AuthModal = ({
  closeModal
}) => {
  const authMode = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.auth.authMode);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [authMode === "signup" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignUpModal__WEBPACK_IMPORTED_MODULE_3__.default, {
      closeModal: closeModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 39
    }, undefined), authMode === "login" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginModal__WEBPACK_IMPORTED_MODULE_4__.default, {
      closeModal: closeModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 38
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api/auth */ "./lib/api/auth.ts");
/* harmony import */ var _hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useValidateMode */ "./hooks/useValidateMode.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/user */ "./store/user.ts");

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
  const {
    setValidateMode
  } = (0,_hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_9__.default)();
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
  }; //* 로그인 클릭 시


  const onSubmitLogin = async event => {
    event.preventDefault();
    setValidateMode(true);

    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해 주세요.");
    } else {
      const loginBody = {
        email,
        password
      };

      try {
        const {
          data
        } = await (0,_lib_api_auth__WEBPACK_IMPORTED_MODULE_8__.loginAPI)(loginBody);
        console.log(data);
        dispatch(_store_user__WEBPACK_IMPORTED_MODULE_10__.userActions.setLoggedUser(data));
        closeModal();
      } catch (e) {
        console.log(e);
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    onSubmit: onSubmitLogin,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CloseXIcon, {
      className: "mordal-close-x-icon",
      onClick: closeModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "login-input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_7__.default, {
        placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C",
        name: "email",
        type: "email",
        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 27
        }, undefined),
        value: email,
        onChange: onChangeEmail,
        isValid: email !== "",
        errorMessage: "\uC774\uBA54\uC77C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
          lineNumber: 130,
          columnNumber: 46
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OpenedEyeIcon, {
          onClick: togglePasswordHiding
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 99
        }, undefined),
        isValid: password !== "",
        value: password,
        onChange: onChangePassword,
        errorMessage: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "login-modal-submit-button-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["\uC5D0\uC5B4\uBE44\uC5D4\uBE44 \uACC4\uC815\uC774 \uC5C6\uB098\uC694?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "login-modal-set-signup",
        role: "presentation",
        onClick: changeToSignUpModal,
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
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
  } = (0,_hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_11__.default)(); //* 선택할 수 없는 월 option

  const disabledMoths = ["월"]; //* 선택할 수 없는 일 option

  const disabledDays = ["일"]; //* 선택할 수 없는 월 option

  const disabledYears = ["년"]; //* 이메일 주소 변경 시

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
  }; //* 로그인 모달로 변경하기


  const changeToLoginModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_13__.authActions.setAuthMode("login"));
  }, []); //* 언마운트시 발리데이트모드 끄기

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
      lineNumber: 265,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_4__.default, {
        placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C",
        type: "email",
        name: "email",
        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MailIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 23
        }, undefined),
        value: email,
        onChange: onChangeEmail,
        useValidation: true,
        isValid: !!email,
        errorMessage: "\uC774\uBA54\uC77C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "input-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_input__WEBPACK_IMPORTED_MODULE_4__.default, {
        placeholder: "\uC774\uB984(\uC608:\uAE38\uB3D9)",
        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PersonIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 23
        }, undefined),
        value: lastname,
        onChange: onChangeLastname,
        useValidation: true,
        isValid: !!lastname,
        errorMessage: "\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."
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
        placeholder: "\uC131(\uC608: \uD64D)",
        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PersonIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 23
        }, undefined),
        value: firstname,
        onChange: onChangeFirstname,
        useValidation: true,
        isValid: !!firstname,
        errorMessage: "\uC131\uC744 \uC785\uB825\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
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
          lineNumber: 299,
          columnNumber: 39
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OpenedEyeIcon, {
          onClick: toggleHidePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
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
        lineNumber: 298,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }, undefined), passwordFocused && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PasswordWarning__WEBPACK_IMPORTED_MODULE_12__.default, {
        isValid: isPasswordHasNameOrEmail,
        text: "\uBE44\uBC00\uBC88\uD638\uC5D0 \uBCF8\uC778 \uC774\uB984\uC774\uB098 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uD3EC\uD568\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PasswordWarning__WEBPACK_IMPORTED_MODULE_12__.default, {
        isValid: !isPasswordOverMinLength,
        text: "\uCD5C\uC18C 8\uC790"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PasswordWarning__WEBPACK_IMPORTED_MODULE_12__.default, {
        isValid: isPasswordHasNumberOrSymbol,
        text: "\uC22B\uC790\uB098 \uAE30\uD638\uB97C \uD3EC\uD568\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 17
      }, undefined)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "sign-up-birthdat-label",
      children: "\uC0DD\uC77C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "sign-up-modal-birthday-info",
      children: "\uB9CC 18\uC138 \uC774\uC0C1\uC758 \uC131\uC778\uB9CC \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0DD\uC77C\uC740 \uB2E4\uB978 \uC5D0\uC5B4\uBE44\uC564\uBE44 \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uAC1C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sign-up-modal-birthday-selectors",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sign-up-modal-birthday-month-selector",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_6__.default, {
          options: _lib_staticData__WEBPACK_IMPORTED_MODULE_5__.monthList,
          disabledOptions: disabledMoths,
          defaultValue: "\uC6D4",
          value: birthMonth,
          onChange: onChangeBirthMonth,
          isValid: !!birthMonth
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
        className: "sign-up-modal-birthday-day-selector",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_6__.default, {
          options: _lib_staticData__WEBPACK_IMPORTED_MODULE_5__.dayList,
          disabledOptions: disabledDays,
          defaultValue: "\uC77C",
          value: birthDay,
          onChange: onChangeBirthDay,
          isValid: !!birthDay
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sign-up-modal-birthday-year-selector",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_6__.default, {
          options: _lib_staticData__WEBPACK_IMPORTED_MODULE_5__.yearList,
          disabledOptions: disabledYears,
          defaultValue: "\uB144",
          value: birthYear,
          onChange: onChangeBirthYear,
          isValid: !!birthYear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sign-up-modal-submit-button-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
        type: "submit",
        children: "\uAC00\uC785\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["\uC774\uBBF8 \uC5D0\uC5B4\uBE44\uC564\uBE44 \uACC4\uC815\uC774 \uC788\uB098\uC694?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "sign-up-modal-set-login",
        role: "presentation",
        onClick: changeToLoginModal,
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 264,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignUpModal);

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
})(["label{span{display:block;margin-bottom:8px;}}input{position:relative;width:100%;height:46px;padding:", ";border:1px solid ", ";border-radius:4px;font-size:16px;outline:none;&::placeholder{color:", ";}&:focus{border-color:", ";}}.input-icon-wrapper{position:absolute;top:0;right:11px;height:46px;display:flex;align-items:center;}svg{position:absolute;right:11px;height:46px;top:14px;}.input-error-message{margin-top:8px;font-weight:600;font-size:14px;color:", ";}", " ", ""], ({
  iconExist
}) => iconExist ? "0 44px 0 11px " : "0 11px", _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.tawny, ({
  useValidation,
  isValid
}) => useValidation && !isValid && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["input{background-color:", ";border-color:", ";&:focus{border-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.snow, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.orange, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.orange), ({
  useValidation,
  isValid
}) => useValidation && isValid && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["input{border-color:", ";}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan)); //React.InputHTMLAttributes<HTMLInputElement>는 <input> 태그가 가지는 속성들에 대한 타입입니다.
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
      lineNumber: 104,
      columnNumber: 13
    }, undefined), icon, useValidation && validateMode && !isValid && errorMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "input-error=message",
      children: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Input));

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
/* harmony export */   "signupAPI": function() { return /* binding */ signupAPI; },
/* harmony export */   "loginAPI": function() { return /* binding */ loginAPI; },
/* harmony export */   "meAPI": function() { return /* binding */ meAPI; },
/* harmony export */   "logoutAPI": function() { return /* binding */ logoutAPI; }
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./lib/api/index.ts");

//* 회원가입 api
const signupAPI = body => ___WEBPACK_IMPORTED_MODULE_0__.default.post("/api/auth/signup", body); //* 로그인 api

const loginAPI = body => ___WEBPACK_IMPORTED_MODULE_0__.default.post("/api/auth/login", body); //* 쿠키의 access_token의 유저 정보 받아오는 api

const meAPI = () => ___WEBPACK_IMPORTED_MODULE_0__.default.get("/api/auth/me"); //* 로그아웃 api

const logoutAPI = () => ___WEBPACK_IMPORTED_MODULE_0__.default.delete("/api/auth/logout");

/***/ }),

/***/ "./lib/api/index.ts":
/*!**************************!*\
  !*** ./lib/api/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:3000"
});
/* harmony default export */ __webpack_exports__["default"] = (axios);

/***/ }),

/***/ "./lib/api/utils.ts":
/*!**************************!*\
  !*** ./lib/api/utils.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cookieStringToObject": function() { return /* binding */ cookieStringToObject; },
/* harmony export */   "getNumber": function() { return /* binding */ getNumber; }
/* harmony export */ });
//* "token=value"를 {token:"value"}로 바꾸는 함수
const cookieStringToObject = cookieString => {
  const cookies = {};

  if (cookieString) {
    //* "token=value"
    const itemString = cookieString === null || cookieString === void 0 ? void 0 : cookieString.split(/\s*;\s*/);
    itemString.forEach(pairs => {
      //* ["token", "value"]
      const pair = pairs.split(/\s*=\s*/);
      cookies[pair[0]] = pair.splice(1).join("=");
    });
  }

  return cookies;
}; //* string에서 number만 return 하는 함수

const getNumber = string => {
  var _string$match;

  const numbers = (_string$match = string.match(/\d/g)) === null || _string$match === void 0 ? void 0 : _string$match.join("");

  if (numbers) {
    return Number(numbers);
  }

  return null;
};

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
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/GlobalStyle */ "./styles/GlobalStyle.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _lib_api_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api/utils */ "./lib/api/utils.ts");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api */ "./lib/api/index.ts");
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/api/auth */ "./lib/api/auth.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/user */ "./store/user.ts");


var _jsxFileName = "C:\\react\\next-airbnb\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const app = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "root-modal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

app.getInitialProps = async context => {
  var _context$ctx$req;

  const appInitialProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(context);
  const cookieObject = (0,_lib_api_utils__WEBPACK_IMPORTED_MODULE_5__.cookieStringToObject)((_context$ctx$req = context.ctx.req) === null || _context$ctx$req === void 0 ? void 0 : _context$ctx$req.headers.cookie);
  const {
    store
  } = context.ctx;
  const {
    isLogged
  } = store.getState().user;
  console.log(cookieObject);

  try {
    if (!isLogged && cookieObject.access_token) {
      _lib_api__WEBPACK_IMPORTED_MODULE_6__.default.defaults.headers.cookie = cookieObject.access_token;
      const {
        data
      } = await (0,_lib_api_auth__WEBPACK_IMPORTED_MODULE_7__.meAPI)();
      store.dispatch(_store_user__WEBPACK_IMPORTED_MODULE_8__.userActions.setLoggedUser(data));
    }
  } catch (e) {
    console.log(e.message);
  }

  return _objectSpread({}, appInitialProps);
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_4__.wrapper.withRedux(app));

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



const globalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["", ";*{box-sizing:border-box;}body{font-family:Noto Sans,Noto Sans KR;color:", ";}a{text-decoration:none;color:", ";}"], (styled_reset__WEBPACK_IMPORTED_MODULE_0___default()), _palette__WEBPACK_IMPORTED_MODULE_2__.default.black, _palette__WEBPACK_IMPORTED_MODULE_2__.default.black);
const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["", ";"], globalStyle);
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

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

/***/ "react-outside-click-handler":
/*!**********************************************!*\
  !*** external "react-outside-click-handler" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-outside-click-handler");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_app_js","components_common_Button_tsx-components_common_Selector_tsx-lib_staticData_ts"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvSGVhZGVyQXV0aHMudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iLy4vY29tcG9uZW50cy9IZWFkZXJVc2VyUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9jb21wb25lbnRzL2F1dGgvQXV0aE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvYXV0aC9Mb2dpbk1vZGFsLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvYXV0aC9QYXNzd29yZFdhcm5pbmcudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iLy4vY29tcG9uZW50cy9hdXRoL1NpZ25VcE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvY29tbW9uL2lucHV0LnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2hvb2tzL3VzZU1vZGFsLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2hvb2tzL3VzZVZhbGlkYXRlTW9kZS50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2xpYi9hcGkvYXV0aC50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2xpYi9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9saWIvYXBpL3V0aWxzLnRzIiwid2VicGFjazovL25leHQtYWlyYm5iLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9zdHlsZXMvR2xvYmFsU3R5bGUudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInJlYWN0LW91dHNpZGUtY2xpY2staGFuZGxlclwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInN0eWxlZC1yZXNldFwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2lnbm9yZWR8QzpcXHJlYWN0XFxuZXh0LWFpcmJuYlxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkFpcmJuYkxvZ29JY29uIiwiQWlyYm5iTG9nb1RleHRJY29uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIkhlYWRlciIsImlzTG9nZ2VkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJIZWFkZXJBdXRocyIsIm9wZW5Nb2RhbCIsIk1vZGFsUG9ydGFsIiwiY2xvc2VNb2RhbCIsInVzZU1vZGFsIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImF1dGhBY3Rpb25zIiwiSGFtYnVyZ2VySWNvbiIsIkhlYWRlclVzZXJQcm9maWxlIiwiaXNVc2VybWVudU9wZW5lZCIsInNldElzVXNlcm1lbnVPcGVuZWQiLCJ1c2VTdGF0ZSIsInVzZXJQcm9maWxlSW1hZ2UiLCJwcm9maWxlSW1hZ2UiLCJsb2dvdXQiLCJsb2dvdXRBUEkiLCJ1c2VyQWN0aW9ucyIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIkF1dGhNb2RhbCIsImF1dGhNb2RlIiwiYXV0aCIsIkNsb3NlWEljb24iLCJNYWlsSWNvbiIsIk9wZW5lZEV5ZUljb24iLCJDbG9zZWRFeWVJY29uIiwiTG9naW5Nb2RhbCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNQYXNzd29yZEhpZGVkIiwic2V0SXNQYXNzd29yZEhpZGVkIiwic2V0VmFsaWRhdGVNb2RlIiwidXNlVmFsaWRhdGVNb2RlIiwidG9nZ2xlUGFzc3dvcmRIaWRpbmciLCJvbkNoYW5nZUVtYWlsIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJjaGFuZ2VUb1NpZ25VcE1vZGFsIiwib25TdWJtaXRMb2dpbiIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJsb2dpbkJvZHkiLCJkYXRhIiwibG9naW5BUEkiLCJ1c2VFZmZlY3QiLCJSZWRYSWNvbiIsIkdyZWVuQ2hlY2tJY29uIiwiaXNWYWxpZCIsInBhbGxldGUiLCJQYXNzd29yZFdhcm5pbmciLCJ0ZXh0IiwiUGVyc29uSWNvbiIsIlBBU1NXT1JEX01JTl9MRU5HVEgiLCJTaWduVXBNb2RhbCIsImxhc3RuYW1lIiwic2V0TGFzdG5hbWUiLCJmaXJzdG5hbWUiLCJzZXRGaXJzdG5hbWUiLCJoaWRlUGFzc3dvcmQiLCJzZXRIaWRlUGFzc3dvcmQiLCJiaXJ0aFllYXIiLCJzZXRCaXJ0aFllYXIiLCJiaXJ0aERheSIsInNldEJpcnRoRGF5IiwiYmlydGhNb250aCIsInNldEJpcnRoTW9udGgiLCJwYXNzd29yZEZvY3VzZWQiLCJzZXRQYXNzd29yZEZvY3VzZWQiLCJkaXNhYmxlZE1vdGhzIiwiZGlzYWJsZWREYXlzIiwiZGlzYWJsZWRZZWFycyIsIm9uQ2hhbmdlTGFzdG5hbWUiLCJvbkNoYW5nZUZpcnN0bmFtZSIsInRvZ2dsZUhpZGVQYXNzd29yZCIsIm9uQ2hhbmdlQmlydGhNb250aCIsIm9uQ2hhbmdlQmlydGhEYXkiLCJvbkNoYW5nZUJpcnRoWWVhciIsIm9uU3VibWl0U2lnblVwIiwidmFsaWRhdGVTaWduVXBGb3JtIiwicmVwbGFjZSIsInNpZ25VcEJvZHkiLCJiaXJ0aGRheSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNpZ251cEFQSSIsIm9uRm9jdXNQYXNzd29yZCIsImlzUGFzc3dvcmRIYXNOYW1lT3JFbWFpbCIsInVzZU1lbW8iLCJpbmNsdWRlcyIsInNwbGl0IiwiaXNQYXNzd29yZE92ZXJNaW5MZW5ndGgiLCJsZW5ndGgiLCJpc1Bhc3N3b3JkSGFzTnVtYmVyT3JTeW1ib2wiLCJ0ZXN0IiwiY2hhbmdlVG9Mb2dpbk1vZGFsIiwidXNlQ2FsbGJhY2siLCJtb250aExpc3QiLCJkYXlMaXN0IiwieWVhckxpc3QiLCJpY29uRXhpc3QiLCJ1c2VWYWxpZGF0aW9uIiwiY3NzIiwiSW5wdXQiLCJpY29uIiwiZXJyb3JNZXNzYWdlIiwicHJvcHMiLCJ2YWxpZGF0ZU1vZGUiLCJjb21tb24iLCJSZWFjdCIsIm1vZGFsT3BlbmVkIiwic2V0TW9kYWxPcGVuZWQiLCJjaGlsZHJlbiIsInJlZiIsInVzZVJlZiIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwiZG9jdW1lbnQiLCJkb20iLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNyZWF0ZVBvcnRhbCIsImNvbW1vbkFjdGlvbnMiLCJib2R5IiwiYXhpb3MiLCJtZUFQSSIsIkF4aW9zIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiY29va2llU3RyaW5nVG9PYmplY3QiLCJjb29raWVTdHJpbmciLCJjb29raWVzIiwiaXRlbVN0cmluZyIsImZvckVhY2giLCJwYWlycyIsInBhaXIiLCJzcGxpY2UiLCJqb2luIiwiZ2V0TnVtYmVyIiwic3RyaW5nIiwibnVtYmVycyIsIm1hdGNoIiwiTnVtYmVyIiwiYXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImFwcEluaXRpYWxQcm9wcyIsIkFwcCIsImNvb2tpZU9iamVjdCIsImN0eCIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJzdG9yZSIsImdldFN0YXRlIiwiYWNjZXNzX3Rva2VuIiwid3JhcHBlciIsImdsb2JhbFN0eWxlIiwicmVzZXQiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDT0EsYyxZQUFBQSxjOzs7Ozs7Ozs7QUFBQUEsYzs7Ozs7OztJQUNBQyxrQixZQUFBQSxrQjs7Ozs7Ozs7O0FBQUFBLGtCOzs7Ozs7QUFDUDtBQUVBO0FBRUE7QUFDQTtBQUVBLE1BQU1DLFNBQVMsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsZzlDQStCYUMsNERBL0JiLEVBNkZhQSw0REE3RmIsRUFvR1dBLDREQXBHWCxDQUFmOztBQTRHQSxNQUFNQyxNQUFnQixHQUFHLE1BQU07QUFDM0I7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLG1EQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdILFFBQXZCLENBQTVCO0FBS0Ysc0JBQ0UsOERBQUMsU0FBRDtBQUFBLDRCQUNJLDhEQUFDLGtEQUFE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QUNYMkQscURBRFcsRUFPQTdLLG1EQVBBLEVBWUFBLG1EQVpBLENBQWpCO0FBZ0JBLE1BQU04SyxXQUFXLEdBQUdDLG9FQUFILFlBQ1hILFdBRFcsQ0FBakI7QUFJQSwrREFBZUUsV0FBZixFOzs7Ozs7Ozs7OztBQ3hCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQWlyYm5iTG9nb0ljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvc3ZnL2xvZ28vbG9nby5zdmdcIjtcclxuaW1wb3J0IEFpcmJuYkxvZ29UZXh0SWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zdmcvbG9nby9sb2dvX3RleHQuc3ZnXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgdXNlTW9kYWwgZnJvbSBcIi4uL2hvb2tzL3VzZU1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBIZWFkZXJBdXRocyBmcm9tIFwiLi9IZWFkZXJBdXRoc1wiXHJcbmltcG9ydCBIZWFkZXJVc2VyUHJvZmlsZSBmcm9tIFwiLi9IZWFkZXJVc2VyUHJvZmlsZVwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMXB4IDEycHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgLmhlYWRlci1sb2dvLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuaGVhZGVyLWxvZ28ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlci1hdXRoLWJ1dHRvbnMge1xyXG4gICAgLmhlYWRlci1zaWduLXVwLWJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JheV9mN307XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZWFkZXItbG9naW4tYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaGVhZGVyLXVzZXItcHJvZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHBhZGRpbmc6IDAgNnB4IDAgMTZweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXVzZXItcHJvZmlsZS1pbWFnZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiByZWFjdC1vdXNpZGUtY2xpY2staGFuZGxlciBkaXYgKi9cclxuICAuaGVhZGVyLWxvZ28td3JhcHBlciArIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXVzZXJtZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MnB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2Y3fTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhlYWRlci11c2VybWVudS1kaXZpZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIC8v66qo64us7J2EIOyXtOqzoCDri6vsnYQgYm9vbGVhbiDqsJJcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmlzTG9nZ2VkKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbG9nby13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlyYm5iTG9nb0ljb24gY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFpcmJuYkxvZ29UZXh0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICB7IWlzTG9nZ2VkICYmIDxIZWFkZXJBdXRocyAvPn1cclxuICAgICAgICB7aXNMb2dnZWQgJiYgPEhlYWRlclVzZXJQcm9maWxlIC8+fVxyXG4gICAgICAgIFxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiOyBcclxuaW1wb3J0IHVzZU1vZGFsIGZyb20gXCIuLi9ob29rcy91c2VNb2RhbFwiO1xyXG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9hdXRoXCI7XHJcbmltcG9ydCBBdXRoTW9kYWwgZnJvbSBcIi4vYXV0aC9BdXRoTW9kYWxcIjtcclxuXHJcbmNvbnN0IEhlYWRlckF1dGhzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgb3Blbk1vZGFsLCBNb2RhbFBvcnRhbCwgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWF1dGgtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFkZXItc2lnbi11cC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNldEF1dGhNb2RlKFwic2lnbnVwXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ2luLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYXV0aEFjdGlvbnMuc2V0QXV0aE1vZGUoXCJsb2dpblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWxQb3J0YWw+XHJcbiAgICAgICAgICAgICAgICA8QXV0aE1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9Lz5cclxuICAgICAgICAgICAgPC9Nb2RhbFBvcnRhbD4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJBdXRoczsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBPdXRzaWRlQ2xpY2tIYW5kbGVyIGZyb20gXCJyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGFtYnVyZ2VySWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zdmcvaGVhZGVyL2hhbWJ1cmdlci5zdmdcIjtcclxuaW1wb3J0IHsgbG9nb3V0QVBJIH0gZnJvbSBcIi4uL2xpYi9hcGkvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VyQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS91c2VyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBIZWFkZXJVc2VyUHJvZmlsZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICAvLyog7Jyg7KCAIOuplOuJtCDsl7Tqs6AsIOuLq+2emCDsl6zrtoBcclxuICAgIGNvbnN0IFtpc1VzZXJtZW51T3BlbmVkLCBzZXRJc1VzZXJtZW51T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vdXNlU2VsZWN0b3LripQg67mE6rWQ66W8IO2VoCDrlYwg6rCd7LK07J2YIOyjvOyGjOulvCDruYTqtZDtlZjqsowg65Cc64ukLiDsnKDsoIAg7KCV67O06rCAIOuzgOqyveuQmOyWtFxyXG4gICAgLy91c2Vy6rCAIOuzgOqyveuQnOuLpOuptCDqsJ3ssrTqsIAg7IOI66GcIOunjOuTpOyWtOyguCB1c2VyIOqwneyytOulvCDrtojrn6zsmKgg66qo65OgIOy7tO2PrOuEjO2KuOuKlCDrpqzrnpzrjZTrkKAg6rKD7J2064ukLlxyXG4gICAgLy91c2VQcm9maWxlSW1hZ2XsmYAg6rCZ7J20IOybkOyLnCDtg4DsnoXsnLzroZwg7IKs7Jqp7ZWc64uk66m0IOumrOugjOuNlOulvCDrsKnsp4DtlaAg7IiYIOyeiOuLpC5cclxuICAgIGNvbnN0IHVzZXJQcm9maWxlSW1hZ2UgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIucHJvZmlsZUltYWdlKTtcclxuICAgIFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vKiDroZzqt7jslYTsm4Mg7ZWY6riwXHJcbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IGxvZ291dEFQSSgpO1xyXG4gICAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuaW5pdFVzZXIoKSk7XHJcbiAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8T3V0c2lkZUNsaWNrSGFuZGxlciBvbk91dHNpZGVDbGljaz17KCk9PntcclxuICAgICAgICAgICAgaWYgKGlzVXNlcm1lbnVPcGVuZWQpe1xyXG4gICAgICAgICAgICAgIHNldElzVXNlcm1lbnVPcGVuZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFkZXItdXNlci1wcm9maWxlXCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNVc2VybWVudU9wZW5lZCghaXNVc2VybWVudU9wZW5lZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SGFtYnVyZ2VySWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyUHJvZmlsZUltYWdlfSBjbGFzc05hbWU9XCJoZWFkZXItdXNlci1wcm9maWxlLWltYWdlXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtpc1VzZXJtZW51T3BlbmVkICYmIChcclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGVhZGVyLXVzZXJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+7IiZ7IaMIOq0gOumrDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvYnVpbGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cInByZXNlbnRhdGlvblwiIG9uQ2xpY2s9eygpPT57c2V0SXNVc2VybWVudU9wZW5lZChmYWxzZSl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+7IiZ7IaMIOuTseuhne2VmOq4sDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXVzZXJtZW51LWRpdmlkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICDroZzqt7jslYTsm4NcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvT3V0c2lkZUNsaWNrSGFuZGxlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyVXNlclByb2ZpbGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgU2lnblVwTW9kYWwgZnJvbSBcIi4vU2lnblVwTW9kYWxcIjtcclxuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSBcIi4vTG9naW5Nb2RhbFwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yLCBSb290U3RhdGV9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB6LWluZGV4OiAxMTtcclxuYDtcclxuXHJcbmNvbnN0IEF1dGhNb2RhbDogUmVhY3QuRkM8SVByb3BzPiA9ICh7Y2xvc2VNb2RhbH0pID0+IHtcclxuICAgIGNvbnN0IGF1dGhNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmF1dGguYXV0aE1vZGUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIHthdXRoTW9kZSA9PT0gXCJzaWdudXBcIiAmJiA8U2lnblVwTW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gLz59XHJcbiAgICAgICAgICAgIHthdXRoTW9kZSA9PT0gXCJsb2dpblwiICYmIDxMb2dpbk1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IC8+fVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoTW9kYWw7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYXV0aEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYXV0aFwiO1xyXG5pbXBvcnQgQ2xvc2VYSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvbW9kYWwvbW9kYWxfY29sb3NlX3hfaWNvbi5zdmdcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL21haWwuc3ZnXCI7XHJcbmltcG9ydCBPcGVuZWRFeWVJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL29wZW5lZF9leWUuc3ZnXCI7XHJcbmltcG9ydCBDbG9zZWRFeWVJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL2Nsb3NlZF9leWUuc3ZnXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tbW9uL2lucHV0XCI7XHJcbmltcG9ydCB7bG9naW5BUEl9IGZyb20gXCIuLi8uLi9saWIvYXBpL2F1dGhcIjtcclxuaW1wb3J0IHVzZVZhbGlkYXRlTW9kZSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVmFsaWRhdGVNb2RlXCI7XHJcbmltcG9ydCB7IHVzZXJBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3VzZXJcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiA1NjhweDtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDExO1xyXG5cclxuICAubW9yZGFsLWNsb3NlLXgtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCAwIDQwcHggYXV0bztcclxuICB9XHJcblxyXG4gIC5sb2dpbi1pbnB1dC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcGFzc3dvcmQtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBzdmcge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9naW4tbW9kYWwtc3VibWl0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9lYn07XHJcbiAgfVxyXG4gIC5sb2dpbi1tb2RhbC1zZXQtc2lnbnVwIHtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuY29uc3QgTG9naW5Nb2RhbDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGNsb3NlTW9kYWx9KSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpc1Bhc3N3b3JkSGlkZWQsIHNldElzUGFzc3dvcmRIaWRlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IHtzZXRWYWxpZGF0ZU1vZGV9ID0gdXNlVmFsaWRhdGVNb2RlKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cclxuICAgIC8vKuu5hOuwgOuyiO2YuCDsiKjquYAg7Yag6riA7ZWY6riwXHJcbiAgICBjb25zdCB0b2dnbGVQYXNzd29yZEhpZGluZyA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc1Bhc3N3b3JkSGlkZWQoIWlzUGFzc3dvcmRIaWRlZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vKiDsnbTrqZTsnbwg7KO87IaMIOuzgOqyveyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VFbWFpbCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKiDruYTrsIDrsojtmLgg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKiDtmozsm5DqsIDsnoUg66qo64us66GcIOuzgOqyve2VmOq4sFxyXG4gICAgY29uc3QgY2hhbmdlVG9TaWduVXBNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhdXRoQWN0aW9ucy5zZXRBdXRoTW9kZShcInNpZ251cFwiKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vKiDroZzqt7jsnbgg7YG066atIOyLnFxyXG4gICAgY29uc3Qgb25TdWJtaXRMb2dpbiA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFZhbGlkYXRlTW9kZSh0cnVlKTtcclxuICAgICAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi7J2066mU7J286rO8IOu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqULlwiKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luQm9keSA9IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgbG9naW5BUEkobG9naW5Cb2R5KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuc2V0TG9nZ2VkVXNlcihkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFZhbGlkYXRlTW9kZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBvblN1Ym1pdD17b25TdWJtaXRMb2dpbn0+XHJcbiAgICAgICAgICAgIDxDbG9zZVhJY29uIGNsYXNzTmFtZT1cIm1vcmRhbC1jbG9zZS14LWljb25cIiBvbkNsaWNrPXtjbG9zZU1vZGFsfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvCDso7zshoxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXs8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e2VtYWlsICE9PSBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIuydtOuplOydvOydtCDtlYTsmpTtlanri4jri6QuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWlucHV0LXdyYXBwZXIgbG9naW4tcGFzc3dvcmQtaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IOyEpOygle2VmOq4sFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aXNQYXNzd29yZEhpZGVkPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtpc1Bhc3N3b3JkSGlkZWQgPyAoPENsb3NlZEV5ZUljb24gb25DbGljaz17dG9nZ2xlUGFzc3dvcmRIaWRpbmd9IC8+KSA6ICg8T3BlbmVkRXllSWNvbiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZEhpZGluZ30vPil9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17cGFzc3dvcmQgIT09IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlZjshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLW1vZGFsLXN1Ym1pdC1idXR0b24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIOyXkOyWtOu5hOyXlOu5hCDqs4TsoJXsnbQg7JeG64KY7JqUP1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW4tbW9kYWwtc2V0LXNpZ251cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlVG9TaWduVXBNb2RhbH1cclxuICAgICAgICAgICAgICAgID7tmozsm5DqsIDsnoU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Nb2RhbDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWRYSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvYXV0aC9yZWRfeF9pY29uLnN2Z1wiO1xyXG5pbXBvcnQgR3JlZW5DaGVja0ljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvZ3JlZW5fY2hlY2tfaWNvbi5zdmdcIjtcclxuaW1wb3J0IHBhbGxldGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQucDx7IGlzVmFsaWQ6IGJvb2xlYW4gfT5gXHJcbiAgY29sb3I6ICR7KHsgaXNWYWxpZCB9KSA9PlxyXG4gICAgaXNWYWxpZCA/IHBhbGxldGUuZGF2aWRzb25fb3JhbmdlIDogcGFsbGV0ZS5ncmVlbn07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgaXNWYWxpZDogYm9vbGVhbjtcclxuICAgIHRleHQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUGFzc3dvcmRXYXJuaW5nOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgaXNWYWxpZCwgdGV4dH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBpc1ZhbGlkPXtpc1ZhbGlkfT5cclxuICAgICAgICAgICAge2lzVmFsaWQgPyA8UmVkWEljb24gLz4gOiA8R3JlZW5DaGVja0ljb24gLz59XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZFdhcm5pbmc7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ2xvc2VYSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvbW9kYWwvbW9kYWxfY29sb3NlX3hfaWNvbi5zdmdcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL21haWwuc3ZnXCI7XHJcbmltcG9ydCBQZXJzb25JY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL3BlcnNvbi5zdmdcIjtcclxuaW1wb3J0IE9wZW5lZEV5ZUljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvb3BlbmVkX2V5ZS5zdmdcIjtcclxuaW1wb3J0IENsb3NlZEV5ZUljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvY2xvc2VkX2V5ZS5zdmdcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21tb24vaW5wdXRcIjtcclxuaW1wb3J0IHttb250aExpc3QsIGRheUxpc3QsIHllYXJMaXN0fSBmcm9tIFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi9jb21tb24vU2VsZWN0b3JcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBzaWdudXBBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaS9hdXRoXCI7XHJcbmltcG9ydCBzaWdudXAgZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9hdXRoL3NpZ251cFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VyQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9zdG9yZS91c2VyXCI7XHJcbmltcG9ydCB7IGNvbW1vbkFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvY29tbW9uXCI7XHJcbmltcG9ydCB1c2VWYWxpZGF0ZU1vZGUgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVZhbGlkYXRlTW9kZVwiO1xyXG5pbXBvcnQgUGFzc3dvcmRXYXJuaW5nIGZyb20gXCIuL1Bhc3N3b3JkV2FybmluZ1wiO1xyXG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9zdG9yZS9hdXRoXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZm9ybWBcclxuICB3aWR0aDogNTY4cHg7XHJcbiAgcGFkZGluZzogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxMTtcclxuXHJcbiAgLm1vcmRhbC1jbG9zZS14LWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCA0MHB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICAuc2lnbi11cC1wYXNzd29yZC1pbnB1dC13cmFwcGVyIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaWduLXVwLWJpcnRoZGF0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZ24tdXAtbW9kYWwtYmlydGhkYXktaW5mbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5jaGFyY29hbH07XHJcbiAgfVxyXG4gIC5zaWduLXVwLW1vZGFsLWJpcnRoZGF5LXNlbGVjdG9ycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIC5zaWduLXVwLW1vZGFsLWJpcnRoZGF5LW1vbnRoLXNlbGVjdG9yIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgICAuc2lnbi11cC1tb2RhbC1iaXJ0aGRheS1kYXktc2VsZWN0b3Ige1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgICAuc2lnbi11cC1tb2RhbC1iaXJ0aGRheS15ZWFyLXNlbGVjdG9yIHtcclxuICAgICAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2lnbi11cC1tb2RhbC1zdWJtaXQtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2VifTtcclxuICB9XHJcbiAgLnNpZ24tdXAtbW9kYWwtc2V0LWxvZ2luIHtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG4vLyrruYTrsIDrsojtmLgg7LWc7IaMIOyekOumv+yImFxyXG5jb25zdCBQQVNTV09SRF9NSU5fTEVOR1RIID0gODtcclxuXHJcbmNvbnN0IFNpZ25VcE1vZGFsOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtjbG9zZU1vZGFsfSkgPT4ge1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsYXN0bmFtZSwgc2V0TGFzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZmlyc3RuYW1lLCBzZXRGaXJzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2hpZGVQYXNzd29yZCwgc2V0SGlkZVBhc3N3b3JkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2JpcnRoWWVhciwgc2V0QmlydGhZZWFyXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKTtcclxuICAgIGNvbnN0IFtiaXJ0aERheSwgc2V0QmlydGhEYXldID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG4gICAgY29uc3QgW2JpcnRoTW9udGgsIHNldEJpcnRoTW9udGhdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRm9jdXNlZCwgc2V0UGFzc3dvcmRGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHtzZXRWYWxpZGF0ZU1vZGV9ID0gdXNlVmFsaWRhdGVNb2RlKCk7XHJcblxyXG4gICAgLy8qIOyEoO2Dne2VoCDsiJgg7JeG64qUIOyblCBvcHRpb25cclxuICAgIGNvbnN0IGRpc2FibGVkTW90aHMgPSBbXCLsm5RcIl07XHJcblxyXG4gICAgLy8qIOyEoO2Dne2VoCDsiJgg7JeG64qUIOydvCBvcHRpb25cclxuICAgIGNvbnN0IGRpc2FibGVkRGF5cyA9IFtcIuydvFwiXTtcclxuICAgIFxyXG4gICAgLy8qIOyEoO2Dne2VoCDsiJgg7JeG64qUIOyblCBvcHRpb25cclxuICAgIGNvbnN0IGRpc2FibGVkWWVhcnMgPSBbXCLrhYRcIl07XHJcblxyXG4gICAgLy8qIOydtOuplOydvCDso7zshowg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VFbWFpbCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8qIOydtOumhCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUxhc3RuYW1lID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICBzZXRMYXN0bmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyog7ISxIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlRmlyc3RuYW1lID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICBzZXRGaXJzdG5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8qIOu5hOuwgOuyiO2YuCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyrruYTrsIDrsojtmLgg7Iio6rmAIO2GoOq4gO2VmOq4sFxyXG4gICAgY29uc3QgdG9nZ2xlSGlkZVBhc3N3b3JkID0gKCkgPT4ge1xyXG4gICAgICBzZXRIaWRlUGFzc3dvcmQoIWhpZGVQYXNzd29yZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vKiDsg53rhYTsm5Tsnbwg7JuUIOuzgOqyveyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VCaXJ0aE1vbnRoID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgIHNldEJpcnRoTW9udGgoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgY29uc29sZS5sb2coXCLsm5Trs4Dqsr0g7J2067Kk7Yq4IOuPmeyekVwiICsgYmlydGhNb250aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qIOyDneuFhOyblOydvCDsnbwg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJpcnRoRGF5ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgIHNldEJpcnRoRGF5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi7J2867OA6rK9IOydtOuypO2KuCDrj5nsnpFcIiArIGJpcnRoRGF5KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8qIOyDneuFhOyblOydvCDrhYQg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJpcnRoWWVhciA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHNldEJpcnRoWWVhcihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuuFhOuzgOqyvSDsnbTrsqTtirgg64+Z7J6RXCIgKyBiaXJ0aFllYXIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyog7ZqM7JuQIOqwgOyehSDtj7wg7KCc7Lac7ZWY6riwXHJcbiAgICBjb25zdCBvblN1Ym1pdFNpZ25VcCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHNldFZhbGlkYXRlTW9kZSh0cnVlKTtcclxuICAgICAgY29uc29sZS5sb2codmFsaWRhdGVTaWduVXBGb3JtKCkpO1xyXG5cclxuICAgICAgaWYodmFsaWRhdGVTaWduVXBGb3JtKCkpe1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7YmlydGhZZWFyfS0ke2JpcnRoTW9udGghLnJlcGxhY2UoXCLsm5RcIiwgXCJcIil9LSR7YmlydGhEYXl9YCk7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc2lnblVwQm9keSA9IHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIGxhc3RuYW1lLFxyXG4gICAgICAgICAgICBmaXJzdG5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBiaXJ0aGRheTogbmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgYCR7YmlydGhZZWFyfS0ke2JpcnRoTW9udGghLnJlcGxhY2UoXCLsm5RcIiwgXCJcIil9LSR7YmlydGhEYXl9YFxyXG4gICAgICAgICAgICApLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IHNpZ251cEFQSShzaWduVXBCb2R5KTtcclxuICAgICAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb25zLnNldExvZ2dlZFVzZXIoZGF0YSkpO1xyXG4gICAgICAgICAgY2xvc2VNb2RhbCgpXHJcblxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8qIOu5hOuwgOuyiO2YuCDsnbjtkosg7Y+s7Luk7IqkIOuQmOyXiOydhCDrlYxcclxuICAgIGNvbnN0IG9uRm9jdXNQYXNzd29yZCA9ICgpID0+IHtcclxuICAgICAgc2V0UGFzc3dvcmRGb2N1c2VkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKiBwYXNzd29yZOqwgCDsnbTrpoTsnbTrgpgg7J2066mU7J287J2EIO2PrO2VqO2VmOuKlOyngFxyXG4gICAgY29uc3QgaXNQYXNzd29yZEhhc05hbWVPckVtYWlsID0gdXNlTWVtbyhcclxuICAgICAgKCkgPT4gXHJcbiAgICAgICAgIXBhc3N3b3JkIHx8XHJcbiAgICAgICAgIWxhc3RuYW1lIHx8XHJcbiAgICAgICAgcGFzc3dvcmQuaW5jbHVkZXMobGFzdG5hbWUpIHx8XHJcbiAgICAgICAgcGFzc3dvcmQuaW5jbHVkZXMoZW1haWwuc3BsaXQoXCJAXCIpWzBdKSxcclxuICAgICAgICBbcGFzc3dvcmQsIGxhc3RuYW1lLCBlbWFpbF1cclxuICAgIClcclxuXHJcbiAgICAvLyog67mE67CA67KI7Zi46rCAIOy1nOyGjCDsnpDrpr/siJgg7J207IOB7J247KeAXHJcbiAgICBjb25zdCBpc1Bhc3N3b3JkT3Zlck1pbkxlbmd0aCA9IHVzZU1lbW8oXHJcbiAgICAgICgpID0+ICEhcGFzc3dvcmQgJiYgcGFzc3dvcmQubGVuZ3RoID49IFBBU1NXT1JEX01JTl9MRU5HVEgsXHJcbiAgICAgIFtwYXNzd29yZF1cclxuICAgIClcclxuICAgIFxyXG4gICAgLy8qIOu5hOuwgOuyiO2YuOqwgCDsiKvsnpDrgpgg7Yq57IiY6riw7Zi466W8IO2PrO2VqO2VmOuKlOyngFxyXG4gICAgY29uc3QgaXNQYXNzd29yZEhhc051bWJlck9yU3ltYm9sID0gdXNlTWVtbyhcclxuICAgICAgKCkgPT5cclxuICAgICAgICAhKFxyXG4gICAgICAgICAgL1t7fVtcXF0vPy4sOzp8KSp+YCFeXFwtXys8PkAjJCUmXFxcXD0oJ1wiXS9nLnRlc3QocGFzc3dvcmQpIHx8XHJcbiAgICAgICAgICAvWzAtOV0vZy50ZXN0KHBhc3N3b3JkKVxyXG4gICAgICAgICksXHJcbiAgICAgIFtwYXNzd29yZF1cclxuICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAvLyog7ZqM7JuQ6rCA7J6FIO2PvCDsnoXroKUg6rCSIO2ZleyduO2VmOq4sFxyXG4gICAgY29uc3QgdmFsaWRhdGVTaWduVXBGb3JtID0gKCkgPT4ge1xyXG4gICAgICAvLyog7J247ZKLIOqwkuydtCDsl4bri6TrqbRcclxuICAgICAgaWYoIWVtYWlsIHx8ICFsYXN0bmFtZSB8fCAhZmlyc3RuYW1lIHx8ICFwYXNzd29yZCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vKiDruYTrsIDrsojtmLjqsIAg7Jis67CU66W07KeAIOyViuuLpOuptFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaXNQYXNzd29yZEhhc05hbWVPckVtYWlsIHx8XHJcbiAgICAgICAgIWlzUGFzc3dvcmRPdmVyTWluTGVuZ3RoIHx8XHJcbiAgICAgICAgaXNQYXNzd29yZEhhc051bWJlck9yU3ltYm9sXHJcbiAgICAgICl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyog7IOd64WE7JuU7J28IOyFgOugie2EsCDqsJLsnbQg7JeG64uk66m0XHJcbiAgICAgIGlmICghYmlydGhEYXkgfHwgIWJpcnRoTW9udGggfHwgIWJpcnRoWWVhcil7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyog66Gc6re47J24IOuqqOuLrOuhnCDrs4Dqsr3tlZjquLBcclxuICAgIGNvbnN0IGNoYW5nZVRvTG9naW5Nb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goYXV0aEFjdGlvbnMuc2V0QXV0aE1vZGUoXCJsb2dpblwiKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIC8vKiDslrjrp4jsmrTtirjsi5wg67Cc66as642w7J207Yq466qo65OcIOuBhOq4sFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzZXRWYWxpZGF0ZU1vZGUoZmFsc2UpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBvblN1Ym1pdD17b25TdWJtaXRTaWduVXB9PlxyXG4gICAgICAgICAgICA8Q2xvc2VYSWNvbiBjbGFzc05hbWU9XCJtb3JkYWwtY2xvc2UteC1pY29uXCIgb25DbGljaz17Y2xvc2VNb2RhbH0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuydtOuplOydvCDso7zshoxcIiB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgaWNvbj17PE1haWxJY29uIC8+fSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgICAgIHVzZVZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ9eyEhZW1haWx9XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U9XCLsnbTrqZTsnbzsnbQg7ZWE7JqU7ZWp64uI64ukLlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLsnbTrpoQo7JiIOuq4uOuPmSlcIiBcclxuICAgICAgICAgICAgICAgIGljb249ezxQZXJzb25JY29uIC8+fSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsYXN0bmFtZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VMYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgIHVzZVZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ9eyEhbGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U9XCLsnbTrpoTsnYQg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLshLEo7JiIOiDtmY0pXCIgXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8UGVyc29uSWNvbiAvPn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zmlyc3RuYW1lfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUZpcnN0bmFtZX0gXHJcbiAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIuyEseydhCDsnoXroKXtlZjshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDshKTsoJXtlZjquLBcIiB0eXBlPXtoaWRlUGFzc3dvcmQgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIn1cclxuICAgICAgICAgICAgICAgIGljb249e2hpZGVQYXNzd29yZCA/ICg8Q2xvc2VkRXllSWNvbiBvbkNsaWNrPXt0b2dnbGVIaWRlUGFzc3dvcmR9IC8+KTooPE9wZW5lZEV5ZUljb24gb25DbGljaz17dG9nZ2xlSGlkZVBhc3N3b3JkfSAvPil9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgdXNlVmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICFpc1Bhc3N3b3JkSGFzTmFtZU9yRW1haWwgJiZcclxuICAgICAgICAgICAgICAgICAgaXNQYXNzd29yZE92ZXJNaW5MZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgIWlzUGFzc3dvcmRIYXNOdW1iZXJPclN5bWJvbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1c1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwYXNzd29yZEZvY3VzZWQgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRXYXJuaW5nIGlzVmFsaWQ9e2lzUGFzc3dvcmRIYXNOYW1lT3JFbWFpbH0gdGV4dD1cIuu5hOuwgOuyiO2YuOyXkCDrs7jsnbgg7J2066aE7J2064KYIOydtOuplOydvCDso7zshozrpbwg7Y+s7ZWo7ZWgIOyImCDsl4bsirXri4jri6QuXCIvPlxyXG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkV2FybmluZyBpc1ZhbGlkPXshaXNQYXNzd29yZE92ZXJNaW5MZW5ndGh9IHRleHQ9XCLstZzshowgOOyekFwiLz5cclxuICAgICAgICAgICAgICAgIDxQYXNzd29yZFdhcm5pbmcgaXNWYWxpZD17aXNQYXNzd29yZEhhc051bWJlck9yU3ltYm9sfSB0ZXh0PVwi7Iir7J6Q64KYIOq4sO2YuOulvCDtj6ztlajtlZjshLjsmpQuXCIvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaWduLXVwLWJpcnRoZGF0LWxhYmVsXCI+7IOd7J28PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaWduLXVwLW1vZGFsLWJpcnRoZGF5LWluZm9cIj5cclxuICAgICAgICAgICAgICDrp4wgMTjshLgg7J207IOB7J2YIOyEseyduOunjCDtmozsm5DsnLzroZwg6rCA7J6F7ZWgIOyImCDsnojsirXri4jri6QuIOyDneydvOydgCDri6TrpbhcclxuICAgICAgICAgICAgICDsl5DslrTruYTslaTruYQg7J207Jqp7J6Q7JeQ6rKMIOqzteqwnOuQmOyngCDslYrsirXri4jri6QuXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbi11cC1tb2RhbC1iaXJ0aGRheS1zZWxlY3RvcnNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtbW9kYWwtYmlydGhkYXktbW9udGgtc2VsZWN0b3JcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXttb250aExpc3R9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17ZGlzYWJsZWRNb3Roc31cclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi7JuUXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2JpcnRoTW9udGh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJpcnRoTW9udGh9XHJcbiAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9eyEhYmlydGhNb250aH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLW1vZGFsLWJpcnRoZGF5LWRheS1zZWxlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RheUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17ZGlzYWJsZWREYXlzfVxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLsnbxcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YmlydGhEYXl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJpcnRoRGF5fVxyXG4gICAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWJpcnRoRGF5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtbW9kYWwtYmlydGhkYXkteWVhci1zZWxlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3llYXJMaXN0fVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e2Rpc2FibGVkWWVhcnN9XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIuuFhFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtiaXJ0aFllYXJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJpcnRoWWVhcn1cclxuICAgICAgICAgICAgICAgICAgaXNWYWxpZD17ISFiaXJ0aFllYXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLW1vZGFsLXN1Ym1pdC1idXR0b24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAg7J2066+4IOyXkOyWtOu5hOyVpOu5hCDqs4TsoJXsnbQg7J6I64KY7JqUP1xyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWduLXVwLW1vZGFsLXNldC1sb2dpblwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZVRvTG9naW5Nb2RhbH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXBNb2RhbDtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwge2Nzc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuXHJcblxyXG50eXBlIElucHV0Q29udGFpbmVyUHJvcHMgPSB7XHJcbiAgaWNvbkV4aXN0OiBib29sZWFuO1xyXG4gIGlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgdXNlVmFsaWRhdGlvbjogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxJbnB1dENvbnRhaW5lclByb3BzPmBcclxuICBsYWJlbCB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBwYWRkaW5nOiAkeyh7IGljb25FeGlzdCB9KSA9PiAoaWNvbkV4aXN0ID8gXCIwIDQ0cHggMCAxMXB4IFwiIDogXCIwIDExcHhcIil9O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZWJ9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgICYgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICB9XHJcbiAgICAmIDpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbnB1dC1pY29uLXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDExcHg7XHJcbiAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMXB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gIH1cclxuICAuaW5wdXQtZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS50YXdueX07XHJcbiAgfVxyXG4gICR7KHsgdXNlVmFsaWRhdGlvbiwgaXNWYWxpZCB9KSA9PlxyXG4gICAgdXNlVmFsaWRhdGlvbiAmJlxyXG4gICAgIWlzVmFsaWQgJiZcclxuICAgIGNzc2BcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5zbm93fTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xyXG4gICAgICAgICYgOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gICR7KHsgdXNlVmFsaWRhdGlvbiwgaXNWYWxpZCB9KSA9PlxyXG4gICAgdXNlVmFsaWRhdGlvbiAmJlxyXG4gICAgaXNWYWxpZCAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgICAgfVxyXG4gICAgYH1cclxuXHJcbmA7XHJcblxyXG4vL1JlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD7ripQgPGlucHV0PiDtg5zqt7jqsIAg6rCA7KeA64qUIOyGjeyEseuTpOyXkCDrjIDtlZwg7YOA7J6F7J6F64uI64ukLlxyXG4vLyBleHRlbmRz66W8IOyCrOyaqe2VmOyXrCBJUHJvcHPripQgPGlucHV0PiDtg5zqt7jqsIAg6rCA7KeA64qUIOyGjeyEseydhCDtmZXsnqXtlZjsl6wg7IKs7Jqp7ZWY6rKMIOuQqeuLiOuLpC5cclxuLy/qt7jrpqzqs6AgaWNvbj86IEpTWC5FbGVtZW50O+uKlCDtg4DsnoXsnbQgSlNYIOyXmOumrOuovO2KuOyduCBpY29uIOqwkuydhCDrsJvsp4Ag7JWK7J2EIOyImOuPhCB1bmRlZmluZWTsnbwg7IiY64+EIOyeiOuLpOuKlCDqsoPsnYQg7J2Y66+47ZWp64uI64ukLlxyXG4vL+qysOq1rSBpY29uPzpKU1guRWxlbWVudDsgICBpY29uOiBKU1guRWxlbWVudCB8IHVuZGVmaW5lZDsg64qUIOqwmeydgCDsvZTrk5zsnoXri4jri6QuIO2VmOyngOunjCDsnZjrr7jsg4HsnLzroZxcclxuLy9pY29uPzpKU1guRWxlbWVudOuKlCBpY29uIOqwkuydhCDsgqzsmqntlZjsp4Ag7JWK7JWE64+EIOuQnOuLpOuhnCDsgqzsmqntlanri4jri6QuXHJcbi8vaWNvbjogSlNYLkVsZW1lbnQgfCB1bmRlZmluZWQ764qUIGljb27snYQg67Cb64qU642wIHVuZGVmaW5lZOydvCDsiJgg7J6I64uk66GcIOyCrOyaqe2VqeuLiOuLpC5cclxuLy88SW5wdXQgaWNvbj17dW5kZWZpbmVkfSAvPiDsgqzsmqntlZjripQg7J2Y66+47IOBIOuLpOultOq4sCDrlYzrrLjsl5Ag7Ja065akIOuwqeyLneydhCDsgqzsmqntlbTrj4Qg7L2U65Oc7IOB7Jy866Gc64qUIOusuOygnOqwgCDsl4bsirXri4jri6QuXHJcbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICAgIGljb24/OiBKU1guRWxlbWVudDtcclxuICAgIGlzVmFsaWQ/OiBib29sZWFuO1xyXG4gICAgdXNlVmFsaWRhdGlvbj86IGJvb2xlYW47XHJcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IElucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtpY29uLFxyXG4gIGlzVmFsaWQgPSBmYWxzZSxcclxuICB1c2VWYWxpZGF0aW9uID0gdHJ1ZSxcclxuICBlcnJvck1lc3NhZ2UsXHJcbiAgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBjb25zdCB2YWxpZGF0ZU1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1vbi52YWxpZGF0ZU1vZGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIFxyXG4gICAgICAgICAgaWNvbkV4aXN0PXshIWljb259XHJcbiAgICAgICAgICBpc1ZhbGlkPXtpc1ZhbGlkfVxyXG4gICAgICAgICAgdXNlVmFsaWRhdGlvbj17dmFsaWRhdGVNb2RlICYmIHVzZVZhbGlkYXRpb259PlxyXG4gICAgICAgICAgICA8aW5wdXQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAge3VzZVZhbGlkYXRpb24gJiYgdmFsaWRhdGVNb2RlICYmICFpc1ZhbGlkICYmIGVycm9yTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3I9bWVzc2FnZVwiPntlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSW5wdXQpOyIsImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgLm1vZGFsLWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHVzZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGFsT3BlbmVkLCBzZXRNb2RhbE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsT3BlbmVkKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsT3BlbmVkKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSVByb3BzIHtcclxuICAgICAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IE1vZGFsUG9ydGFsOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgICAgICBjb25zdCByZWYgPSB1c2VSZWY8RWxlbWVudCB8IG51bGw+KCk7XHJcbiAgICAgICAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgICAgc2V0TW91bnRlZCh0cnVlKTtcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290LW1vZGFsXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBkb207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgIGlmKHJlZi5jdXJyZW50ICYmIG1vdW50ZWQgJiYgbW9kYWxPcGVuZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlID0gXCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPixcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wZW5Nb2RhbCxcclxuICAgICAgICBjbG9zZU1vZGFsLFxyXG4gICAgICAgIE1vZGFsUG9ydGFsLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kYWw7IiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3Rvcn0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IGNvbW1vbkFjdGlvbnN9IGZyb20gXCIuLi9zdG9yZS9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHZhbGlkYXRlTW9kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbW9uLnZhbGlkYXRlTW9kZSk7XHJcblxyXG4gICAgY29uc3Qgc2V0VmFsaWRhdGVNb2RlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goY29tbW9uQWN0aW9ucy5zZXRWYWxpZGF0ZU1vZGUodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyB2YWxpZGF0ZU1vZGUsIHNldFZhbGlkYXRlTW9kZX07XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcIi5cIjtcclxuaW1wb3J0IHtVc2VyVHlwZX0gZnJvbSBcIi4uLy4uL3R5cGVzL3VzZXJcIjtcclxuXHJcbi8v7IKs7Jqp7J6QIOyduOymneyXkCDqtIDroKjrkJwgYXBp66W8IOuqqOyVhOuRoFxyXG5cclxuLy8q7ZqM7JuQIOqwgOyehSBib2R5XHJcblxyXG5pbnRlcmZhY2UgU2lnblVwQVBJQm9keSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgZmlyc3RuYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0bmFtZTogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGJpcnRoZGF5OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vKiDtmozsm5DqsIDsnoUgYXBpXHJcbmV4cG9ydCBjb25zdCBzaWdudXBBUEkgPSAoYm9keTogU2lnblVwQVBJQm9keSkgPT4gYXhpb3MucG9zdDxVc2VyVHlwZT4oXCIvYXBpL2F1dGgvc2lnbnVwXCIsIGJvZHkpO1xyXG5cclxuLy8qIOuhnOq3uOyduCBhcGlcclxuZXhwb3J0IGNvbnN0IGxvZ2luQVBJID0gKGJvZHk6IHtlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nfSkgPT4gYXhpb3MucG9zdDxVc2VyVHlwZT4oXCIvYXBpL2F1dGgvbG9naW5cIiwgYm9keSk7XHJcblxyXG4vLyog7L+g7YKk7J2YIGFjY2Vzc190b2tlbuydmCDsnKDsoIAg7KCV67O0IOuwm+yVhOyYpOuKlCBhcGlcclxuZXhwb3J0IGNvbnN0IG1lQVBJID0gKCkgPT4gYXhpb3MuZ2V0PFVzZXJUeXBlPihcIi9hcGkvYXV0aC9tZVwiKTtcclxuXHJcblxyXG4vLyog66Gc6re47JWE7JuDIGFwaVxyXG5leHBvcnQgY29uc3QgbG9nb3V0QVBJID0gKCkgPT4gYXhpb3MuZGVsZXRlKFwiL2FwaS9hdXRoL2xvZ291dFwiKTsiLCJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBheGlvcyA9IEF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zOyIsIi8vKiBcInRva2VuPXZhbHVlXCLrpbwge3Rva2VuOlwidmFsdWVcIn3roZwg67CU6r6464qUIO2VqOyImFxyXG5leHBvcnQgY29uc3QgY29va2llU3RyaW5nVG9PYmplY3QgPSAoY29va2llU3RyaW5nOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XHJcbiAgICBpZiAoY29va2llU3RyaW5nKSB7XHJcbiAgICAgICAgLy8qIFwidG9rZW49dmFsdWVcIlxyXG4gICAgICAgIGNvbnN0IGl0ZW1TdHJpbmcgPSBjb29raWVTdHJpbmc/LnNwbGl0KC9cXHMqO1xccyovKTtcclxuICAgICAgICBpdGVtU3RyaW5nLmZvckVhY2goKHBhaXJzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vKiBbXCJ0b2tlblwiLCBcInZhbHVlXCJdXHJcbiAgICAgICAgICAgIGNvbnN0IHBhaXIgPSBwYWlycy5zcGxpdCgvXFxzKj1cXHMqLyk7XHJcbiAgICAgICAgICAgIGNvb2tpZXNbcGFpclswXV0gPSBwYWlyLnNwbGljZSgxKS5qb2luKFwiPVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb29raWVzO1xyXG59XHJcblxyXG4vLyogc3RyaW5n7JeQ7IScIG51bWJlcuunjCByZXR1cm4g7ZWY64qUIO2VqOyImFxyXG5leHBvcnQgY29uc3QgZ2V0TnVtYmVyID0gKHN0cmluZzogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBudW1iZXJzID0gc3RyaW5nLm1hdGNoKC9cXGQvZyk/LmpvaW4oXCJcIik7XHJcbiAgICBpZiAobnVtYmVycyl7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihudW1iZXJzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59IiwiaW1wb3J0IEFwcCwge0FwcFByb3BzLCBBcHBDb250ZXh0fSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvR2xvYmFsU3R5bGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBjb29raWVTdHJpbmdUb09iamVjdCB9IGZyb20gXCIuLi9saWIvYXBpL3V0aWxzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vbGliL2FwaVwiO1xyXG5pbXBvcnQgeyBtZUFQSSB9IGZyb20gXCIuLi9saWIvYXBpL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlckFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvdXNlclwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicm9vdC1tb2RhbFwiIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dDogQXBwQ29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgYXBwSW5pdGlhbFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjb250ZXh0KTtcclxuICAgIGNvbnN0IGNvb2tpZU9iamVjdCA9IGNvb2tpZVN0cmluZ1RvT2JqZWN0KGNvbnRleHQuY3R4LnJlcT8uaGVhZGVycy5jb29raWUpO1xyXG4gICAgY29uc3QgeyBzdG9yZSB9ID0gY29udGV4dC5jdHg7XHJcbiAgICBjb25zdCB7IGlzTG9nZ2VkIH0gPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXI7XHJcbiAgICBjb25zb2xlLmxvZyhjb29raWVPYmplY3QpO1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGlmKCFpc0xvZ2dlZCAmJiBjb29raWVPYmplY3QuYWNjZXNzX3Rva2VuKXtcclxuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb29raWUgPSBjb29raWVPYmplY3QuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IG1lQVBJKCk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHVzZXJBY3Rpb25zLnNldExvZ2dlZFVzZXIoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsuLi5hcHBJbml0aWFsUHJvcHN9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChhcHApOyIsImltcG9ydCByZXNldCBmcm9tIFwic3R5bGVkLXJlc2V0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4vcGFsZXR0ZVwiO1xyXG5cclxuY29uc3QgZ2xvYmFsU3R5bGUgPSBjc3NgXHJcbiAgICAke3Jlc2V0fTtcclxuICAgICp7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMsIE5vdG8gU2FucyBLUjtcclxuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcclxuICAgIH1cclxuXHJcbiAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgICAke2dsb2JhbFN0eWxlfTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtcmVzZXRcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=