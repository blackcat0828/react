(function() {
var exports = {};
exports.id = "pages/room/register/bedrooms";
exports.ids = ["pages/room/register/bedrooms"];
exports.modules = {

/***/ "./components/common/Counter.tsx":
/*!***************************************!*\
  !*** ./components/common/Counter.tsx ***!
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
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\common\\Counter.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CounterMinusIcon = function CounterMinusIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M0 0h8v1.5H0V0Z",
      fill: "#008489"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

CounterMinusIcon.defaultProps = {
  width: "8",
  height: "2",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var CounterPlusIcon = function CounterPlusIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M8 3.333H4.667V0H3.333v3.333H0v1.334h3.333V8h1.334V4.667H8V3.333Z",
      fill: "#008489"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

CounterPlusIcon.defaultProps = {
  width: "8",
  height: "8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Counter__Container",
  componentId: "sc-yc4hxj-0"
})(["display:flex;width:100%;justify-content:space-between;align-items:center;.counter-label{font-size:16px;color:", ";font-weight:600;}.counter-description{display:block;font-size:14px;color:", ";}.counter-contents{display:flex;justify-content:space-between;align-items:center;width:120px;button{width:32px;height:32px;display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid ", ";color:", ";background-color:white;outline:none;cursor:pointer;font-size:21px;&:disabled{opacity:0.3;cursor:not-allowed;}}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_48, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_71, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan);

const Counter = ({
  label,
  value = 1,
  minValue = 0,
  increaseNum = 1,
  onChange,
  description
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      className: "counter-label",
      children: [label, description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "counter-description",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "counter-contents",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        disabled: value === minValue,
        onClick: () => {
          if (onChange) {
            onChange(value - increaseNum);
          }
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CounterMinusIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: () => {
          if (onChange) {
            onChange(value + increaseNum);
          }
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CounterPlusIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Counter));

/***/ }),

/***/ "./components/room/register/RegisterRoomBedList.tsx":
/*!**********************************************************!*\
  !*** ./components/room/register/RegisterRoomBedList.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _RegisterRoomBedTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterRoomBedTypes */ "./components/room/register/RegisterRoomBedTypes.tsx");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBedList.tsx";




const RegisterRoomBedList = () => {
  const bedList = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.registerRoom.bedList);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "register-room-bed-type-list-wrapper",
    children: bedList.map(bedroom => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RegisterRoomBedTypes__WEBPACK_IMPORTED_MODULE_3__.default, {
      bedroom: bedroom
    }, bedroom.id, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBedList);

/***/ }),

/***/ "./components/room/register/RegisterRoomBedTypes.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomBedTypes.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_Counter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Counter */ "./components/common/Counter.tsx");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBedTypes.tsx";









const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().li.withConfig({
  displayName: "RegisterRoomBedTypes__Container",
  componentId: "sc-e0v542-0"
})(["width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}.register-room-bed-type-top{display:flex;justify-content:space-between;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}.register-room-bed-type-selector-wrapper{margin-top:28px;width:320px;}.register-room-bed-type-counters{width:320px;margin-top:28px;}.register-room-bed-type-counter{width:290px;margin-bottom:18px;}.register-room-bed-type-bedroom-counts{font-size:19px;color:", ";max-width:240px;word-break:keep-all;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_6__.default.gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_6__.default.gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_6__.default.gray_48, _styles_palette__WEBPACK_IMPORTED_MODULE_6__.default.gray_76);

const RegisterRoomBedTypes = ({
  bedroom
}) => {
  const {
    0: opened,
    1: setOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); //* 선택된 침대 옵션들

  const initialBedOptions = bedroom.beds.map(bed => bed.type); //* 선택된 침대 옵션들

  const {
    0: activedBedOptions,
    1: setActivedBedOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialBedOptions);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(); //* 침대 개수 총합

  const totalBedsCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    let total = 0;
    bedroom.beds.forEach(bed => {
      total += bed.count;
    });
    return total;
  }, [bedroom]); //* 남은 침대 옵션들

  const lastBedOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return _lib_staticData__WEBPACK_IMPORTED_MODULE_4__.bedTypes.filter(bedType => !activedBedOptions.includes(bedType));
  }, [activedBedOptions, bedroom]); //* 침실유형 열고 닫기

  const toggleOpened = () => setOpened(!opened); //* 침실 침대 갯수 변경시


  const onChangeBedTypeCount = (value, type) => dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_5__.registerRoomActions.setBedTypeCount({
    bedroomId: bedroom.id,
    type,
    count: value
  })); //* 침대 종류 텍스트


  const bedsText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const texts = bedroom.beds.map(bed => `${bed.type} ${bed.count}개`);
    return texts.join(",");
  }, [bedroom]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-bed-type-top",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "register-room-bed-type-bedroom",
          children: [bedroom.id, "\uBC88 \uCE68\uC2E4"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 33
          }, undefined), bedsText]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
        onClick: toggleOpened,
        width: "161px",
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, undefined), opened && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-bed-type-selector-wrapper",
      children: [activedBedOptions.map(type => {
        var _bedroom$beds$find;

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "register-room-bed-type-counter",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Counter__WEBPACK_IMPORTED_MODULE_8__.default, {
            label: type,
            value: ((_bedroom$beds$find = bedroom.beds.find(bed => bed.type === type)) === null || _bedroom$beds$find === void 0 ? void 0 : _bedroom$beds$find.count) || 0,
            onChange: value => {
              onChangeBedTypeCount(value, type);
            }
          }, type, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, undefined)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, undefined);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_9__.default, {
        type: "register",
        options: lastBedOptions,
        defaultValue: "\uB2E4\uB978 \uCE68\uB300 \uCD94\uAC00",
        value: "\uB2E4\uB978 \uCE68\uB300 \uCD94\uAC00",
        disabledOptions: ["다른 침대 추가"],
        useValidation: false,
        onChange: e => setActivedBedOptions([...activedBedOptions, e.target.value])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBedTypes);

/***/ }),

/***/ "./components/room/register/RegisterRoomBedrooms.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomBedrooms.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _common_Counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Counter */ "./components/common/Counter.tsx");
/* harmony import */ var _lib_api_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../lib/api/utils */ "./lib/api/utils.ts");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _RegisterRoomBedList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RegisterRoomBedList */ "./components/room/register/RegisterRoomBedList.tsx");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBedrooms.tsx";











const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RegisterRoomBedrooms__Container",
  componentId: "sc-n49nft-0"
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-size:14px;font-weight:bold;color:", ";margin-bottom:6px;}h4{font-size:24px;margin-bottom:6px;}.register-room-step-info{font-size:14px;max-width:400px;margin-bottom:24px;max-width:400px;word-break:keep-all;}.register-room-mamximum-guest-count-wrapper{width:320px;margin-bottom:32px;}.register-room-bedroom-count-wrapper{width:320px;margin-bottom:32px;}.register-room-bed-count-wrapper{width:320px;margin-bottom:50px;}.register-room-bed-count-label{color:#767676;font-weight:600;margin-bottom:8px;}.register-room-bed-type-info{margin-top:6px;margin-bottom:20px;max-width:400px;word-break:keep-all;}.register-room-bed-type-list-wrapper{width:548px;}.register-room-bedroom{width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_dd);

const RegisterRoomBedrooms = () => {
  const bedroomCount = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.registerRoom.bedroomCount);
  const bedCount = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.registerRoom.bedCount);
  const maximumGuestCount = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.registerRoom.maximumGuestCount);
  const bedList = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.registerRoom.bedList);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(); //* 최대 숙박 인원 변경 시

  const onChangeMaximumGuestCount = value => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setMaximumGuestCount(value));
  }; //* 침실 개수 변경 시


  const onChangeBedroomCount = event => dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBedroomCount((0,_lib_api_utils__WEBPACK_IMPORTED_MODULE_8__.getNumber)(event.target.value) || 0)); //* 침대 개수 변경 시


  const onChangeBedCount = value => dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBedCount(value));

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uC219\uC18C\uC5D0 \uC5BC\uB9C8\uB098 \uB9CE\uC740 \uC778\uC6D0\uC774 \uC219\uBC15\uD560 \uC218 \uC788\uB098\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "2\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "room-register-step-info",
      children: "\uBAA8\uB4E0 \uAC8C\uC2A4\uD2B8\uAC00 \uD3B8\uC548\uD558\uAC8C \uC219\uBC15\uD560 \uC218 \uC788\uB3C4\uB85D \uCE68\uB300\uAC00 \uCDA9\uBD84\uD788 \uAD6C\uBE44\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-mamximum-guest-count-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Counter__WEBPACK_IMPORTED_MODULE_7__.default, {
        label: "\uCD5C\uB300 \uC219\uBC15 \uC778\uC6D0",
        value: maximumGuestCount,
        onChange: onChangeMaximumGuestCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-bedroom-count-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_9__.default, {
        type: "register",
        value: `침실 ${bedroomCount}개`,
        onChange: onChangeBedroomCount,
        label: "\uAC8C\uC2A4\uD2B8\uAC00 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uCE68\uC2E4\uC740 \uBA87 \uAC1C\uC778\uAC00\uC694?",
        options: _lib_staticData__WEBPACK_IMPORTED_MODULE_10__.bedroomCountList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-bed-count-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Counter__WEBPACK_IMPORTED_MODULE_7__.default, {
        label: "\uCE68\uB300",
        value: bedCount,
        onChange: onChangeBedCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: "\uCE68\uB300 \uC720\uD615"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "register-room-bed-type-info",
      children: "\uAC01 \uCE68\uC2E4\uC5D0 \uB193\uC778 \uCE68\uB300 \uC720\uD615\uC744 \uBA85\uC2DC\uD558\uBA74 \uC219\uC18C\uC5D0 \uCE68\uB300\uAC00 \uC5B4\uB5BB\uAC8C \uAD6C\uBE44\uB418\uC5B4 \uC788\uB294\uC9C0 \uAC8C\uC2A4\uD2B8\uAC00 \uC798 \uD30C\uC545\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RegisterRoomBedList__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBedrooms);

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

/***/ "./pages/room/register/bedrooms.tsx":
/*!******************************************!*\
  !*** ./pages/room/register/bedrooms.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_room_register_RegisterRoomBedrooms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/room/register/RegisterRoomBedrooms */ "./components/room/register/RegisterRoomBedrooms.tsx");

var _jsxFileName = "C:\\react\\next-airbnb\\pages\\room\\register\\bedrooms.tsx";



const bedrooms = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_room_register_RegisterRoomBedrooms__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (bedrooms);

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_common_Button_tsx-components_common_Selector_tsx-lib_staticData_ts"], function() { return __webpack_exec__("./pages/room/register/bedrooms.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvY29tbW9uL0NvdW50ZXIudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZExpc3QudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvcm9vbS9yZWdpc3Rlci9SZWdpc3RlclJvb21CZWRyb29tcy50c3giLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9saWIvYXBpL3V0aWxzLnRzIiwid2VicGFjazovL25leHQtYWlyYm5iLy4vcGFnZXMvcm9vbS9yZWdpc3Rlci9iZWRyb29tcy50c3giLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNvdW50ZXJNaW51c0ljb24iLCJDb3VudGVyUGx1c0ljb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiQ291bnRlciIsImxhYmVsIiwidmFsdWUiLCJtaW5WYWx1ZSIsImluY3JlYXNlTnVtIiwib25DaGFuZ2UiLCJkZXNjcmlwdGlvbiIsIlJlYWN0IiwiUmVnaXN0ZXJSb29tQmVkTGlzdCIsImJlZExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwibWFwIiwiYmVkcm9vbSIsImlkIiwiUmVnaXN0ZXJSb29tQmVkVHlwZXMiLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJ1c2VTdGF0ZSIsImluaXRpYWxCZWRPcHRpb25zIiwiYmVkcyIsImJlZCIsInR5cGUiLCJhY3RpdmVkQmVkT3B0aW9ucyIsInNldEFjdGl2ZWRCZWRPcHRpb25zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvdGFsQmVkc0NvdW50IiwidXNlTWVtbyIsInRvdGFsIiwiZm9yRWFjaCIsImNvdW50IiwibGFzdEJlZE9wdGlvbnMiLCJiZWRUeXBlcyIsImJlZFR5cGUiLCJpbmNsdWRlcyIsInRvZ2dsZU9wZW5lZCIsIm9uQ2hhbmdlQmVkVHlwZUNvdW50IiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsImJlZHJvb21JZCIsImJlZHNUZXh0IiwidGV4dHMiLCJqb2luIiwiZmluZCIsImUiLCJ0YXJnZXQiLCJSZWdpc3RlclJvb21CZWRyb29tcyIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwibWF4aW11bUd1ZXN0Q291bnQiLCJvbkNoYW5nZU1heGltdW1HdWVzdENvdW50Iiwib25DaGFuZ2VCZWRyb29tQ291bnQiLCJldmVudCIsImdldE51bWJlciIsIm9uQ2hhbmdlQmVkQ291bnQiLCJiZWRyb29tQ291bnRMaXN0IiwiY29va2llU3RyaW5nVG9PYmplY3QiLCJjb29raWVTdHJpbmciLCJjb29raWVzIiwiaXRlbVN0cmluZyIsInNwbGl0IiwicGFpcnMiLCJwYWlyIiwic3BsaWNlIiwic3RyaW5nIiwibnVtYmVycyIsIm1hdGNoIiwiTnVtYmVyIiwiYmVkcm9vbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDT0EsZ0IsWUFBQUEsZ0I7Ozs7Ozs7OztBQUFBQSxnQjs7Ozs7OztJQUNBQyxlLFlBQUFBLGU7Ozs7Ozs7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LHVCQUFHQSxZQUFZLENBQUVHLEtBQWQsQ0FBb0IsU0FBcEIsQ0FBbkI7QUFDQUQsY0FBVSxDQUFDN0IsT0FBWCxDQUFvQitCLEtBQUQsSUFBVztBQUMxQjtBQUNBLFlBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRCxLQUFOLENBQVksU0FBWixDQUFiO0FBQ0FGLGFBQU8sQ0FBQ0ksSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFQLEdBQW1CQSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxDQUFaLEVBQWVyQixJQUFmLENBQW9CLEdBQXBCLENBQW5CO0FBQ0gsS0FKRDtBQUtIOztBQUNELFNBQU9nQixPQUFQO0FBQ0gsQ0FaTSxDLENBY1A7O0FBQ08sTUFBTUwsU0FBUyxHQUFJVyxNQUFELElBQW9CO0FBQUE7O0FBQ3pDLFFBQU1DLE9BQU8sb0JBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEtBQWIsQ0FBSCxrREFBRyxjQUFxQnhCLElBQXJCLENBQTBCLEVBQTFCLENBQWhCOztBQUNBLE1BQUl1QixPQUFKLEVBQVk7QUFDUixXQUFPRSxNQUFNLENBQUNGLE9BQUQsQ0FBYjtBQUNIOztBQUNELFNBQU8sSUFBUDtBQUNILENBTk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUDtBQUVBOztBQUVBLE1BQU1HLFFBQWtCLEdBQUcsTUFBTTtBQUM3QixzQkFBTyw4REFBQyxtRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxDQUZEOztBQUlBLCtEQUFlQSxRQUFmLEU7Ozs7Ozs7Ozs7O0FDUkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvcm9vbS9yZWdpc3Rlci9iZWRyb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCBDb3VudGVyTWludXNJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9jb21tb24vY291bnRlci9jb3VudGVyX21pbnVzLnN2Z1wiO1xyXG5pbXBvcnQgQ291bnRlclBsdXNJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9jb21tb24vY291bnRlci9jb3VudGVyX3BsdXMuc3ZnXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmNvdW50ZXItbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5XzQ4fTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5jb3VudGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5XzcxfTtcclxuICB9XHJcbiAgLmNvdW50ZXItY29udGVudHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgIHZhbHVlPzogbnVtYmVyO1xyXG4gICAgbWluVmFsdWU/OiBudW1iZXI7XHJcbiAgICBpbmNyZWFzZU51bT86IG51bWJlcjtcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IENvdW50ZXI6IFJlYWN0LkZDPElQcm9wcz4gPSAoe1xyXG4gICAgbGFiZWwsXHJcbiAgICB2YWx1ZSA9IDEsXHJcbiAgICBtaW5WYWx1ZSA9IDAsXHJcbiAgICBpbmNyZWFzZU51bSA9IDEsXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG59KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY291bnRlci1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGVyLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRlci1jb250ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt2YWx1ZSA9PT0gbWluVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHVlIC0gaW5jcmVhc2VOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q291bnRlck1pbnVzSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8cD57dmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUgKyBpbmNyZWFzZU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvdW50ZXJQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENvdW50ZXIpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBSZWdpc3RlclJvb21CZWRUeXBlcyBmcm9tIFwiLi9SZWdpc3RlclJvb21CZWRUeXBlc1wiO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tQmVkTGlzdDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYmVkTGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmJlZExpc3QpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtbGlzdC13cmFwcGVyXCI+XHJcbiAgICAgIHtiZWRMaXN0Lm1hcCgoYmVkcm9vbSkgPT4gKFxyXG4gICAgICAgIDxSZWdpc3RlclJvb21CZWRUeXBlcyBrZXk9e2JlZHJvb20uaWR9IGJlZHJvb209e2JlZHJvb219IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQmVkTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGJlZFR5cGVzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgeyBCZWRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3Jvb21cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vLi4vY29tbW9uL0NvdW50ZXJcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21tb24vU2VsZWN0b3JcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5saWBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyOHB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLXRvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV80OH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJzIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXIge1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbS1jb3VudHMge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBiZWRyb29tOiB7IGlkOiBudW1iZXI7IGJlZHM6IHsgdHlwZTogQmVkVHlwZTsgY291bnQ6IG51bWJlciB9W10gfTtcclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tQmVkVHlwZXM6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBiZWRyb29tIH0pID0+IHtcclxuICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vKiDshKDtg53rkJwg7Lmo64yAIOyYteyFmOuTpFxyXG4gIGNvbnN0IGluaXRpYWxCZWRPcHRpb25zID0gYmVkcm9vbS5iZWRzLm1hcCgoYmVkKSA9PiBiZWQudHlwZSk7XHJcblxyXG4gIC8vKiDshKDtg53rkJwg7Lmo64yAIOyYteyFmOuTpFxyXG4gIGNvbnN0IFthY3RpdmVkQmVkT3B0aW9ucywgc2V0QWN0aXZlZEJlZE9wdGlvbnNdID0gdXNlU3RhdGU8QmVkVHlwZVtdPihcclxuICAgIGluaXRpYWxCZWRPcHRpb25zXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyog7Lmo64yAIOqwnOyImCDstJ3tlalcclxuICBjb25zdCB0b3RhbEJlZHNDb3VudCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIGJlZHJvb20uYmVkcy5mb3JFYWNoKChiZWQpID0+IHtcclxuICAgICAgdG90YWwgKz0gYmVkLmNvdW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbiAgfSwgW2JlZHJvb21dKTtcclxuXHJcbiAgLy8qIOuCqOydgCDsuajrjIAg7Ji17IWY65OkXHJcbiAgY29uc3QgbGFzdEJlZE9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiBiZWRUeXBlcy5maWx0ZXIoKGJlZFR5cGUpID0+ICFhY3RpdmVkQmVkT3B0aW9ucy5pbmNsdWRlcyhiZWRUeXBlKSk7XHJcbiAgfSwgW2FjdGl2ZWRCZWRPcHRpb25zLCBiZWRyb29tXSk7XHJcblxyXG4gIC8vKiDsuajsi6TsnKDtmJUg7Je06rOgIOuLq+q4sFxyXG4gIGNvbnN0IHRvZ2dsZU9wZW5lZCA9ICgpID0+IHNldE9wZW5lZCghb3BlbmVkKTtcclxuXHJcbiAgLy8qIOy5qOyLpCDsuajrjIAg6rCv7IiYIOuzgOqyveyLnFxyXG4gIGNvbnN0IG9uQ2hhbmdlQmVkVHlwZUNvdW50ID0gKHZhbHVlOiBudW1iZXIsIHR5cGU6IEJlZFR5cGUpID0+XHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCZWRUeXBlQ291bnQoe1xyXG4gICAgICAgIGJlZHJvb21JZDogYmVkcm9vbS5pZCxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIGNvdW50OiB2YWx1ZSxcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIC8vKiDsuajrjIAg7KKF66WYIO2FjeyKpO2KuFxyXG4gIGNvbnN0IGJlZHNUZXh0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0cyA9IGJlZHJvb20uYmVkcy5tYXAoKGJlZCkgPT4gYCR7YmVkLnR5cGV9ICR7YmVkLmNvdW50feqwnGApO1xyXG4gICAgcmV0dXJuIHRleHRzLmpvaW4oXCIsXCIpO1xyXG4gIH0sIFtiZWRyb29tXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtdG9wXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbVwiPntiZWRyb29tLmlkfeuyiCDsuajsi6Q8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20tY291bnRzXCI+XHJcbiAgICAgICAgICAgIOy5qOuMgCB7dG90YWxCZWRzQ291bnR96rCcPGJyIC8+XHJcbiAgICAgICAgICAgIHtiZWRzVGV4dH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU9wZW5lZH0gd2lkdGg9XCIxNjFweFwiPlxyXG4gICAgICAgICAge29wZW5lZCAmJiBcIuyZhOujjFwifVxyXG4gICAgICAgICAgeyFvcGVuZWQgJiZcclxuICAgICAgICAgICAgKHRvdGFsQmVkc0NvdW50ID09PSAwID8gXCLsuajrjIAg7LaU6rCA7ZWY6riwXCIgOiBcIuy5qOuMgCDsiJjsoJXtlZjquLBcIil9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge29wZW5lZCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgIHthY3RpdmVkQmVkT3B0aW9ucy5tYXAoKHR5cGUpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJcIiBrZXk9e3R5cGV9PlxyXG4gICAgICAgICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17dHlwZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgYmVkcm9vbS5iZWRzLmZpbmQoKGJlZCkgPT4gYmVkLnR5cGUgPT09IHR5cGUpPy5jb3VudCB8fCAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQmVkVHlwZUNvdW50KHZhbHVlLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtsYXN0QmVkT3B0aW9uc31cclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi64uk66W4IOy5qOuMgCDstpTqsIBcIlxyXG4gICAgICAgICAgICB2YWx1ZT1cIuuLpOuluCDsuajrjIAg7LaU6rCAXCJcclxuICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtbXCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXX1cclxuICAgICAgICAgICAgdXNlVmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBzZXRBY3RpdmVkQmVkT3B0aW9ucyhbXHJcbiAgICAgICAgICAgICAgICAuLi5hY3RpdmVkQmVkT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlIGFzIEJlZFR5cGUsXHJcbiAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21CZWRUeXBlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9Db3VudGVyXCI7XHJcbmltcG9ydCB7IGdldE51bWJlciB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXBpL3V0aWxzXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGJlZHJvb21Db3VudExpc3QgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJSb29tQmVkVHlwZXMgZnJvbSBcIi4vUmVnaXN0ZXJSb29tQmVkVHlwZXNcIjtcclxuaW1wb3J0IFJlZ2lzdGVyUm9vbUJlZExpc3QgZnJvbSBcIi4vUmVnaXN0ZXJSb29tQmVkTGlzdFwiO1xyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItcm9vbS1zdGVwLWluZm8ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLW1hbXhpbXVtLWd1ZXN0LWNvdW50LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkcm9vbS1jb3VudC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC1jb3VudC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC1jb3VudC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtbGlzdC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA1NDhweDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZHJvb20ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyOHB4IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CZWRyb29tczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBiZWRyb29tQ291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT4gc3RhdGUucmVnaXN0ZXJSb29tLmJlZHJvb21Db3VudCk7XHJcbiAgICBjb25zdCBiZWRDb3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmJlZENvdW50KTtcclxuICAgIGNvbnN0IG1heGltdW1HdWVzdENvdW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ubWF4aW11bUd1ZXN0Q291bnQpO1xyXG4gICAgY29uc3QgYmVkTGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmJlZExpc3QpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyog7LWc64yAIOyImeuwlSDsnbjsm5Ag67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VNYXhpbXVtR3Vlc3RDb3VudCA9ICh2YWx1ZTpudW1iZXIpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldE1heGltdW1HdWVzdENvdW50KHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qIOy5qOyLpCDqsJzsiJgg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VCZWRyb29tQ291bnQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4gXHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QmVkcm9vbUNvdW50KGdldE51bWJlcihldmVudC50YXJnZXQudmFsdWUpIHx8IDApXHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgLy8qIOy5qOuMgCDqsJzsiJgg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VCZWRDb3VudCA9ICh2YWx1ZTogbnVtYmVyKSA9PiBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldEJlZENvdW50KHZhbHVlKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+7IiZ7IaM7JeQIOyWvOuniOuCmCDrp47snYAg7J247JuQ7J20IOyImeuwle2VoCDsiJgg7J6I64KY7JqUPzwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4y64uo6rOEPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicm9vbS1yZWdpc3Rlci1zdGVwLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIOuqqOuToCDqsozsiqTtirjqsIAg7Y647JWI7ZWY6rKMIOyImeuwle2VoCDsiJgg7J6I64+E66GdIOy5qOuMgOqwgCDstqnrtoTtnogg6rWs67mE65CY7Ja0IOyeiOuKlOyngCDtmZXsnbjtlZjshLjsmpQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLW1hbXhpbXVtLWd1ZXN0LWNvdW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDb3VudGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCLstZzrjIAg7IiZ67CVIOyduOybkFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bWF4aW11bUd1ZXN0Q291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTWF4aW11bUd1ZXN0Q291bnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZHJvb20tY291bnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Dsuajsi6QgJHtiZWRyb29tQ291bnR96rCcYH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VCZWRyb29tQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsozsiqTtirjqsIAg7IKs7Jqp7ZWgIOyImCDsnojripQg7Lmo7Iuk7J2AIOuqhyDqsJzsnbjqsIDsmpQ/XCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtiZWRyb29tQ291bnRMaXN0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtY291bnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPENvdW50ZXIgbGFiZWw9XCLsuajrjIBcIiB2YWx1ZT17YmVkQ291bnR9IG9uQ2hhbmdlPXtvbkNoYW5nZUJlZENvdW50fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg0Puy5qOuMgCDsnKDtmJU8L2g0PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIOqwgSDsuajsi6Tsl5Ag64aT7J24IOy5qOuMgCDsnKDtmJXsnYQg66qF7Iuc7ZWY66m0IOyImeyGjOyXkCDsuajrjIDqsIAg7Ja065a76rKMIOq1rOu5hOuQmOyWtCDsnojripTsp4Ag6rKM7Iqk7Yq46rCAIOyemCDtjIzslYXtlaAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8UmVnaXN0ZXJSb29tQmVkTGlzdCAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQmVkcm9vbXM7IiwiLy8qIFwidG9rZW49dmFsdWVcIuulvCB7dG9rZW46XCJ2YWx1ZVwifeuhnCDrsJTqvrjripQg7ZWo7IiYXHJcbmV4cG9ydCBjb25zdCBjb29raWVTdHJpbmdUb09iamVjdCA9IChjb29raWVTdHJpbmc6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcclxuICAgIGlmIChjb29raWVTdHJpbmcpIHtcclxuICAgICAgICAvLyogXCJ0b2tlbj12YWx1ZVwiXHJcbiAgICAgICAgY29uc3QgaXRlbVN0cmluZyA9IGNvb2tpZVN0cmluZz8uc3BsaXQoL1xccyo7XFxzKi8pO1xyXG4gICAgICAgIGl0ZW1TdHJpbmcuZm9yRWFjaCgocGFpcnMpID0+IHtcclxuICAgICAgICAgICAgLy8qIFtcInRva2VuXCIsIFwidmFsdWVcIl1cclxuICAgICAgICAgICAgY29uc3QgcGFpciA9IHBhaXJzLnNwbGl0KC9cXHMqPVxccyovKTtcclxuICAgICAgICAgICAgY29va2llc1twYWlyWzBdXSA9IHBhaXIuc3BsaWNlKDEpLmpvaW4oXCI9XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvb2tpZXM7XHJcbn1cclxuXHJcbi8vKiBzdHJpbmfsl5DshJwgbnVtYmVy66eMIHJldHVybiDtlZjripQg7ZWo7IiYXHJcbmV4cG9ydCBjb25zdCBnZXROdW1iZXIgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IG51bWJlcnMgPSBzdHJpbmcubWF0Y2goL1xcZC9nKT8uam9pbihcIlwiKTtcclxuICAgIGlmIChudW1iZXJzKXtcclxuICAgICAgICByZXR1cm4gTnVtYmVyKG51bWJlcnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IFJlZ2lzdGVyUm9vbUJlZHJvb21zIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Jvb20vcmVnaXN0ZXIvUmVnaXN0ZXJSb29tQmVkcm9vbXNcIjtcclxuXHJcbmNvbnN0IGJlZHJvb21zOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiA8UmVnaXN0ZXJSb29tQmVkcm9vbXMgLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJlZHJvb21zOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9