(function() {
var exports = {};
exports.id = "pages/room/register/building";
exports.ids = ["pages/room/register/building"];
exports.modules = {

/***/ "./components/common/RadioGroup.tsx":
/*!******************************************!*\
  !*** ./components/common/RadioGroup.tsx ***!
  \******************************************/
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

var _jsxFileName = "C:\\react\\next-airbnb\\components\\common\\RadioGroup.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var WarningIcon = function WarningIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M8 1.333A6.674 6.674 0 0 1 14.667 8 6.674 6.674 0 0 1 8 14.667 6.674 6.674 0 0 1 1.333 8 6.674 6.674 0 0 1 8 1.333ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm-.667 4h1.334v5.333H7.333V4ZM8 12.167a.834.834 0 1 1 0-1.668.834.834 0 0 1 0 1.668Z",
      fill: "#C13515"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

WarningIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RadioGroup__Container",
  componentId: "sc-syhuae-0"
})([".radio-label{font-size:16px;font-weight:600;color:", ";margin-bottom:32px;}.radio-list-wrapper{&:after{display:block;content:\"\";clear:both;}}label{float:left;margin-bottom:24px;font-size:16px;line-height:1.2;cursor:pointer;clear:both;&:last-child{margin-bottom:0;}}input[type=\"radio\"]{width:16px;height:16px;margin:0;position:relative;margin:0;margin-right:12px;flex-shrink:0;font-size:16px;-webkit-appearance:none;border:1px solid ", ";border-radius:50%;outline:none;cursor:pointer;", "}input[type=\"radio\"]:checked{background-color:", ";border:0;}input[type=\"radio\"]:checked:after{content:\"\";width:6px;height:6px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;background-color:white;border-radius:50%;display:block;}.radio-description{display:block;margin-top:5px;margin-left:28px;}.radio-group-warning{margin-top:8px;display:flex;align-items:center;svg{margin-right:4px;}p{font-size:12px;color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_b0, ({
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
}, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.davidson_orange);

const RadioGroup = ({
  label,
  value,
  options = [],
  onChange,
  isValid,
  errorMessage = "옵션을 선택하세요"
}) => {
  const validateMode = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.common.validateMode);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    isValid: !!isValid,
    validateMode: validateMode,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "radio-label",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "radio-list-wrapper",
      children: options.map((option, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "radio",
          checked: value === option.value,
          onChange: () => onChange && onChange(option.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [option.label, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "radio-description",
            children: option.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }, undefined)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }, undefined), validateMode && !isValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "radio-group-warning",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WarningIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(RadioGroup));

/***/ }),

/***/ "./components/room/register/RegisterRoomBuilding.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomBuilding.tsx ***!
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
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_RadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/RadioGroup */ "./components/common/RadioGroup.tsx");
/* harmony import */ var _RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RegisterRoomFooter */ "./components/room/register/RegisterRoomFooter.tsx");


var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBuilding.tsx";










const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RegisterRoomBuilding__Container",
  componentId: "sc-hpubya-0"
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-size:14px;font-weight:bold;color:", ";margin-bottom:6px;}.register-room-building-selector-wrapper{width:320px;margin-bottom:32px;}.register-room-room-type-radio{max-width:485px;margin-bottom:50px;}.register-room-is-setup-for-guest-radio{margin-bottom:50px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_76); //* 선택이 불가능한 큰 범위 건물 유형

const disabledLargeBuildingTypeOptions = ["하나를 선택해주세요."];

const RegisterRoomBuilding = () => {
  const buildingType = (0,_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.registerRoom.buildingType);
  const roomType = (0,_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.registerRoom.roomType);
  const largeBuildingType = (0,_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.registerRoom.largeBuildingType);
  const isSetUpForGuest = (0,_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.registerRoom.isSetUpForGuest);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)(); //* 큰 범위 건물 유형 변경 시

  const onChangeLargeBuildingType = event => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setLargeBuildingType(event.target.value));
  }; //* 상세 건물유형 변경시


  const onChangeBuildingType = event => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setBuildingType(event.target.value));
  }; //* 숙소 유형 변경시


  const onChangeRoomType = value => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setRoomType(value));
  }; //* 게스트용 숙소인지 변경 시


  const onChangeIsSetUpForGuest = value => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setIsSetUpForGuest(value));
  }; //* 게스트만 사용하도록 만들어진 숙소인지 라디오 options


  const isSetUpForGuestOptions = [{
    label: "예, 게스트용으로 따로 마련된 숙소입니다.",
    value: true
  }, {
    label: "아니요, 제 개인 물건이 숙소에 있습니다.",
    value: false
  }]; //* 선택된 건물 유형 options

  const detailBuildingOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    switch (largeBuildingType) {
      case "아파트":
        {
          const {
            apartmentBuildingTypeList
          } = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setBuildingType(apartmentBuildingTypeList[0]));
          return apartmentBuildingTypeList;
        }

      case "주택":
        {
          const {
            houstBuildingTypeList
          } = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setBuildingType(houstBuildingTypeList[0]));
          return houstBuildingTypeList;
        }

      case "별채":
        {
          const {
            secondaryUnitBuildingTypeList
          } = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setBuildingType(secondaryUnitBuildingTypeList[0]));
          return secondaryUnitBuildingTypeList;
        }

      case "독특한 숙소":
        {
          const {
            uniqueSpaceBuildingTypeList
          } = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setBuildingType(uniqueSpaceBuildingTypeList[0]));
          return uniqueSpaceBuildingTypeList;
        }

      case "B&B":
        {
          const {
            bnbBuildingTypeList
          } = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setBuildingType(bnbBuildingTypeList[0]));
          return bnbBuildingTypeList;
        }

      case "부티크호텔":
        {
          const {
            boutiquesHotelBuildingTypeList
          } = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setBuildingType(boutiquesHotelBuildingTypeList[0]));
          return boutiquesHotelBuildingTypeList;
        }

      default:
        return ["아파트"];
    }
  }, [largeBuildingType]); //* 숙소 유형 radio options

  const roomTypeRadioOptions = [{
    label: "집 전체",
    value: "entire",
    description: "게스트가 숙소 전체를 다른 사람과 공유하지 않고 단독으로 이용합니다. 일반적으로 침실, 욕실, 부엌이 포함됩니다."
  }, {
    label: "개인실",
    value: "private",
    description: "게스트에게 개인 침실이 제공됩니다. 침실 이외의 공간은 공용일 수 있습니다."
  }, {
    label: "다인실",
    value: "public",
    description: "게스트는 개인 공간 없이, 다른 사람과 함께 쓰는 침실이나 공용공간에서 숙박합니다."
  }]; //* 모든 값이 있는지 확인하기

  const isValid = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!largeBuildingType || !buildingType || !roomType || isSetUpForGuest === null) {
      return false;
    }
  }, [largeBuildingType, buildingType, roomType, isSetUpForGuest]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uB4F1\uB85D\uD560 \uC219\uC18C \uC885\uB958\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "register",
        value: largeBuildingType || undefined,
        defaultValue: "\uD558\uB098\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",
        disabledOptions: disabledLargeBuildingTypeOptions,
        label: "\uC6B0\uC120 \uBC94\uC704\uB97C \uC881\uD600\uBCFC\uAE4C\uC694?",
        options: _lib_staticData__WEBPACK_IMPORTED_MODULE_5__.largeBuildingTypeList,
        onChange: onChangeLargeBuildingType,
        isValid: !!largeBuildingType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "register",
        value: buildingType || undefined,
        label: "\uAC74\uBB3C \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694.",
        options: detailBuildingOptions,
        onChange: onChangeBuildingType,
        disabled: !largeBuildingType,
        isValid: !!buildingType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }, undefined), buildingType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "register-room-room-type-radio",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "\uAC8C\uC2A4\uD2B8\uAC00 \uBB35\uAC8C \uB420 \uC219\uC18C \uC720\uD615\uC744 \uACE8\uB77C\uC8FC\uC138\uC694.",
          value: roomType || undefined,
          options: roomTypeRadioOptions,
          onChange: onChangeRoomType,
          isValid: !!roomType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "register-room-is-setup-for-guest-radio",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "\uAC8C\uC2A4\uD2B8\uB9CC \uC0AC\uC6A9\uD558\uB3C4\uB85D \uB9CC\uB4E4\uC5B4\uC9C4 \uC219\uC18C\uC778\uAC00\uC694?",
          value: isSetUpForGuest,
          onChange: onChangeIsSetUpForGuest,
          options: isSetUpForGuestOptions,
          isValid: isSetUpForGuest !== null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }, undefined)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_10__.default, {
      isValid: isValid,
      prevHref: "/",
      nextHref: "/room/register/bedrooms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBuilding);

/***/ }),

/***/ "./components/room/register/RegisterRoomFooter.tsx":
/*!*********************************************************!*\
  !*** ./components/room/register/RegisterRoomFooter.tsx ***!
  \*********************************************************/
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
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useValidateMode */ "./hooks/useValidateMode.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomFooter.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BackArrowIcon = function BackArrowIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "m.18 8.44 7.388 7.388a.616.616 0 0 0 .87-.87L1.487 8.005l6.953-6.953a.616.616 0 0 0-.87-.87L.18 7.57c-.24.24-.24.63 0 .87Z",
      fill: "#008489"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

BackArrowIcon.defaultProps = {
  width: "9",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().footer.withConfig({
  displayName: "RegisterRoomFooter__Container",
  componentId: "sc-34944s-0"
})(["position:fixed;bottom:0;display:flex;justify-content:space-between;align-items:center;width:548px;height:82px;padding:14px 30px 20px;background-color:white;z-index:10;border-top:1px solid ", ";.register-room-footer-back{display:flex;align-items:center;color:", ";cursor:pointer;svg{margin-right:8px;}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__.default.gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_5__.default.dark_cyan);

const RegisterRoomFooter = ({
  prevHref,
  nextHref,
  isValid = true
}) => {
  const {
    setValidateMode
  } = (0,_hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_6__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      setValidateMode(false);
    };
  }); //* 계속 버튼 클릭 시

  const onClickNext = event => {
    if (!isValid) {
      event.preventDefault();
      setValidateMode(true);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: prevHref || "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "register-room-footer-back",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackArrowIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined), "\uB4A4\uB85C"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: nextHref || "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_4__.default, {
          color: "dark_cyan",
          onClick: onClickNext,
          children: "\uACC4\uC18D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomFooter);

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

/***/ "./pages/room/register/building.tsx":
/*!******************************************!*\
  !*** ./pages/room/register/building.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_room_register_RegisterRoomBuilding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/room/register/RegisterRoomBuilding */ "./components/room/register/RegisterRoomBuilding.tsx");

var _jsxFileName = "C:\\react\\next-airbnb\\pages\\room\\register\\building.tsx";



const building = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_room_register_RegisterRoomBuilding__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (building);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_common_Button_tsx-components_common_Selector_tsx-lib_staticData_ts"], function() { return __webpack_exec__("./pages/room/register/building.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvY29tbW9uL1JhZGlvR3JvdXAudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJ1aWxkaW5nLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvcm9vbS9yZWdpc3Rlci9SZWdpc3RlclJvb21Gb290ZXIudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iLy4vaG9va3MvdXNlVmFsaWRhdGVNb2RlLnRzIiwid2VicGFjazovL25leHQtYWlyYm5iLy4vcGFnZXMvcm9vbS9yZWdpc3Rlci9idWlsZGluZy50c3giLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9pZ25vcmVkfEM6XFxyZWFjdFxcbmV4dC1haXJibmJcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJXYXJuaW5nSWNvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsInBhbGV0dGUiLCJ2YWxpZGF0ZU1vZGUiLCJpc1ZhbGlkIiwiY3NzIiwidW5kZWZpbmVkIiwiUmFkaW9Hcm91cCIsImxhYmVsIiwidmFsdWUiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJlcnJvck1lc3NhZ2UiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY29tbW9uIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsIlJlYWN0IiwiZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnMiLCJSZWdpc3RlclJvb21CdWlsZGluZyIsImJ1aWxkaW5nVHlwZSIsInJlZ2lzdGVyUm9vbSIsInJvb21UeXBlIiwibGFyZ2VCdWlsZGluZ1R5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSIsImV2ZW50IiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInRhcmdldCIsIm9uQ2hhbmdlQnVpbGRpbmdUeXBlIiwib25DaGFuZ2VSb29tVHlwZSIsIm9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0IiwiaXNTZXRVcEZvckd1ZXN0T3B0aW9ucyIsImRldGFpbEJ1aWxkaW5nT3B0aW9ucyIsInVzZU1lbW8iLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwicmVxdWlyZSIsImhvdXN0QnVpbGRpbmdUeXBlTGlzdCIsInNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IiwidW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0IiwiYm5iQnVpbGRpbmdUeXBlTGlzdCIsImJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdCIsInJvb21UeXBlUmFkaW9PcHRpb25zIiwibGFyZ2VCdWlsZGluZ1R5cGVMaXN0IiwiQmFja0Fycm93SWNvbiIsIlJlZ2lzdGVyUm9vbUZvb3RlciIsInByZXZIcmVmIiwibmV4dEhyZWYiLCJzZXRWYWxpZGF0ZU1vZGUiLCJ1c2VWYWxpZGF0ZU1vZGUiLCJ1c2VFZmZlY3QiLCJvbkNsaWNrTmV4dCIsInByZXZlbnREZWZhdWx0IiwiY29tbW9uQWN0aW9ucyIsImJ1aWxkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBQ09BLFcsWUFBQUEsVzs7Ozs7Ozs7O0FBQUFBLFc7Ozs7OztBQUVQLE1BQU1DLFNBQVMsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdTZCQUlGQyw0REFKRSxFQXFDU0EsNERBckNULEVBMENULENBQUM7QUFBRUMsY0FBRjtBQUFnQkM7QUFBaEIsQ0FBRCxLQUErQjtBQUMvQixNQUFJRCxZQUFKLEVBQWtCO0FBQ2hCLFFBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1osYUFBT0Msc0RBQVAsK0NBQ2tCSCwwREFEbEIsRUFFc0JBLHlEQUZ0QjtBQUlEOztBQUNELFdBQU9HLHNEQUFQLHlCQUNrQkgsOERBRGxCO0FBR0Q7O0FBQ0QsU0FBT0ksU0FBUDtBQUNELENBdkRVLEVBMkRTSiw4REEzRFQsRUE2RkFBLG9FQTdGQSxDQUFmOztBQTJHQSxNQUFNSyxVQUE0QixHQUFHLENBQUM7QUFDbENDLE9BRGtDO0FBRWxDQyxPQUZrQztBQUdsQ0MsU0FBTyxHQUFHLEVBSHdCO0FBSWxDQyxVQUprQztBQUtsQ1AsU0FMa0M7QUFNbENRLGNBQVksR0FBRztBQU5tQixDQUFELEtBTy9CO0FBQ0YsUUFBTVQsWUFBWSxHQUFHVSxtREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsTUFBTixDQUFhWixZQUF6QixDQUFoQztBQUVBLHNCQUNFLDhEQUFDLFNBQUQ7QUFBVyxXQUFPLEVBQUUsQ0FBQyxDQUFDQyxPQUF0QjtB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LENBQThCakQsS0FBOUIsQ0FBRCxDQUFSO0FBQ0gsR0FGRDs7QUFJQSxTQUFPO0FBQUVOLGdCQUFGO0FBQWdCa0Q7QUFBaEIsR0FBUDtBQUNILENBVEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBRUE7O0FBRUEsTUFBTU0sUUFBa0IsR0FBRyxNQUFNO0FBQzdCLHNCQUFPLDhEQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILENBRkQ7O0FBSUEsK0RBQWVBLFFBQWYsRTs7Ozs7Ozs7Ozs7QUNSQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvcm9vbS9yZWdpc3Rlci9idWlsZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCBXYXJuaW5nSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvY29tbW9uL3dhcm5pbmcuc3ZnXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgaXNWYWxpZDogYm9vbGVhbjsgdmFsaWRhdGVNb2RlOiBib29sZWFuIH0+YFxyXG4gIC5yYWRpby1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yYWRpby1saXN0LXdyYXBwZXIge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2IwfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJHsoeyB2YWxpZGF0ZU1vZGUsIGlzVmFsaWQgfSkgPT4ge1xyXG4gICAgICBpZiAodmFsaWRhdGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS50YXdueX07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5zbm93fTtcclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH19XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAucmFkaW8tZGVzY3JpcHRpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjhweDtcclxuICB9XHJcblxyXG4gIC5yYWRpby1ncm91cC13YXJuaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5kYXZpZHNvbl9vcmFuZ2V9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJcHJvcHMgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+e1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICB2YWx1ZT86IGFueTtcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBvcHRpb25zPzogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55OyBkZXNjcmlwdGlvbj86IHN0cmluZ31bXTtcclxuICAgIGlzVmFsaWQ/OiBib29sZWFuO1xyXG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBSYWRpb0dyb3VwOiBSZWFjdC5GQzxJcHJvcHM+ID0gKHtcclxuICAgIGxhYmVsLFxyXG4gICAgdmFsdWUsXHJcbiAgICBvcHRpb25zID0gW10sXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIGlzVmFsaWQsXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBcIuyYteyFmOydhCDshKDtg53tlZjshLjsmpRcIixcclxufSkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhdGVNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24udmFsaWRhdGVNb2RlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyIGlzVmFsaWQ9eyEhaXNWYWxpZH0gdmFsaWRhdGVNb2RlPXt2YWxpZGF0ZU1vZGV9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInJhZGlvLWxhYmVsXCI+e2xhYmVsfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKG9wdGlvbi52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpby1kZXNjcmlwdGlvblwiPntvcHRpb24uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt2YWxpZGF0ZU1vZGUgJiYgIWlzVmFsaWQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1ncm91cC13YXJuaW5nXCI+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nSWNvbiAvPlxyXG4gICAgICAgICAgICA8cD57ZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFJhZGlvR3JvdXApOyIsImltcG9ydCBSZWFjdCwge3VzZU1lbW99IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21tb24vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgbGFyZ2VCdWlsZGluZ1R5cGVMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCIuLi8uLi9jb21tb24vUmFkaW9Hcm91cFwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJSb29tRm9vdGVyIGZyb20gXCIuL1JlZ2lzdGVyUm9vbUZvb3RlclwiO1xyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLXJvb20tdHlwZS1yYWRpbyB7XHJcbiAgICBtYXgtd2lkdGg6IDQ4NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20taXMtc2V0dXAtZm9yLWd1ZXN0LXJhZGlvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8qIOyEoO2DneydtCDrtojqsIDriqXtlZwg7YGwIOuylOychCDqsbTrrLwg7Jyg7ZiVXHJcbmNvbnN0IGRpc2FibGVkTGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zID0gW1wi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIl07XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CdWlsZGluZzogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5idWlsZGluZ1R5cGUpO1xyXG4gICAgY29uc3Qgcm9vbVR5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5yb29tVHlwZSk7XHJcbiAgICBjb25zdCBsYXJnZUJ1aWxkaW5nVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmxhcmdlQnVpbGRpbmdUeXBlKTtcclxuICAgIGNvbnN0IGlzU2V0VXBGb3JHdWVzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmlzU2V0VXBGb3JHdWVzdCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICAvLyog7YGwIOuylOychCDqsbTrrLwg7Jyg7ZiVIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGUgPSAoXHJcbiAgICAgICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PlxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRMYXJnZUJ1aWxkaW5nVHlwZShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyog7IOB7IS4IOqxtOusvOycoO2YlSDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQnVpbGRpbmdUeXBlID0gKFxyXG4gICAgICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD5cclxuICAgICkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyog7IiZ7IaMIOycoO2YlSDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlUm9vbVR5cGUgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0Um9vbVR5cGUodmFsdWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8qIOqyjOyKpO2KuOyaqSDsiJnshozsnbjsp4Ag67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VJc1NldFVwRm9yR3Vlc3QgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0SXNTZXRVcEZvckd1ZXN0KHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qIOqyjOyKpO2KuOunjCDsgqzsmqntlZjrj4TroZ0g66eM65Ok7Ja07KeEIOyImeyGjOyduOyngCDrnbzrlJTsmKQgb3B0aW9uc1xyXG4gICAgY29uc3QgaXNTZXRVcEZvckd1ZXN0T3B0aW9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuyYiCwg6rKM7Iqk7Yq47Jqp7Jy866GcIOuUsOuhnCDrp4jroKjrkJwg7IiZ7IaM7J6F64uI64ukLlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi7JWE64uI7JqULCDsoJwg6rCc7J24IOusvOqxtOydtCDsiJnshozsl5Ag7J6I7Iq164uI64ukLlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIC8vKiDshKDtg53rkJwg6rG066y8IOycoO2YlSBvcHRpb25zXHJcbiAgICBjb25zdCBkZXRhaWxCdWlsZGluZ09wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGxhcmdlQnVpbGRpbmdUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIuyVhO2MjO2KuFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwi7KO87YOdXCI6IHtcclxuICAgICAgICAgICAgY29uc3QgeyBob3VzdEJ1aWxkaW5nVHlwZUxpc3QgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoaG91c3RCdWlsZGluZ1R5cGVMaXN0WzBdKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBob3VzdEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCLrs4TssYRcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIuuPhe2Kue2VnCDsiJnshoxcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIkImQlwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgYm5iQnVpbGRpbmdUeXBlTGlzdCB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShibmJCdWlsZGluZ1R5cGVMaXN0WzBdKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBibmJCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwi67aA7Yuw7YGs7Zi47YWUXCI6IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBbXCLslYTtjIztirhcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0sIFtsYXJnZUJ1aWxkaW5nVHlwZV0pO1xyXG5cclxuICAgIFxyXG4gICAgLy8qIOyImeyGjCDsnKDtmJUgcmFkaW8gb3B0aW9uc1xyXG4gICAgY29uc3Qgcm9vbVR5cGVSYWRpb09wdGlvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLsp5Eg7KCE7LK0XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcImVudGlyZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLqsozsiqTtirjqsIAg7IiZ7IaMIOyghOyytOulvCDri6Trpbgg7IKs656M6rO8IOqzteycoO2VmOyngCDslYrqs6Ag64uo64+F7Jy866GcIOydtOyaqe2VqeuLiOuLpC4g7J2867CY7KCB7Jy866GcIOy5qOyLpCwg7JqV7IukLCDrtoDsl4zsnbQg7Y+s7ZWo65Cp64uI64ukLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLqsJzsnbjsi6RcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwicHJpdmF0ZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLqsozsiqTtirjsl5Dqsowg6rCc7J24IOy5qOyLpOydtCDsoJzqs7XrkKnri4jri6QuIOy5qOyLpCDsnbTsmbjsnZgg6rO16rCE7J2AIOqzteyaqeydvCDsiJgg7J6I7Iq164uI64ukLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLri6Tsnbjsi6RcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwicHVibGljXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuqyjOyKpO2KuOuKlCDqsJzsnbgg6rO16rCEIOyXhuydtCwg64uk66W4IOyCrOuejOqzvCDtlajqu5gg7JOw64qUIOy5qOyLpOydtOuCmCDqs7Xsmqnqs7XqsITsl5DshJwg7IiZ67CV7ZWp64uI64ukLlwiLFxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG5cclxuICAgIC8vKiDrqqjrk6Ag6rCS7J20IOyeiOuKlOyngCDtmZXsnbjtlZjquLBcclxuICAgIGNvbnN0IGlzVmFsaWQgPSB1c2VNZW1vKCgpPT4ge1xyXG4gICAgICAgIGlmKCFsYXJnZUJ1aWxkaW5nVHlwZSB8fCAhYnVpbGRpbmdUeXBlIHx8ICFyb29tVHlwZSB8fCBpc1NldFVwRm9yR3Vlc3QgPT09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xhcmdlQnVpbGRpbmdUeXBlLCBidWlsZGluZ1R5cGUsIHJvb21UeXBlLCBpc1NldFVwRm9yR3Vlc3RdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+65Ox66Gd7ZWgIOyImeyGjCDsooXrpZjripQg66y07JeH7J246rCA7JqUPzwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4x64uo6rOEPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvciBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYXJnZUJ1aWxkaW5nVHlwZSB8fCB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17ZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLsmrDshKAg67KU7JyE66W8IOyige2YgOuzvOq5jOyalD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhcmdlQnVpbGRpbmdUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWxhcmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0b3IgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnVpbGRpbmdUeXBlIHx8IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuqxtOusvCDsnKDtmJXsnYQg7ISg7YOd7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGV0YWlsQnVpbGRpbmdPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxhcmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9eyEhYnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtidWlsZGluZ1R5cGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLXJvb20tdHlwZS1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6rKM7Iqk7Yq46rCAIOusteqyjCDrkKAg7IiZ7IaMIOycoO2YleydhCDqs6jrnbzso7zshLjsmpQuXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm9vbVR5cGUgfHwgdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cm9vbVR5cGVSYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9eyEhcm9vbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWlzLXNldHVwLWZvci1ndWVzdC1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6rKM7Iqk7Yq466eMIOyCrOyaqe2VmOuPhOuhnSDrp4zrk6TslrTsp4Qg7IiZ7IaM7J246rCA7JqUP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXNTZXRVcEZvckd1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17aXNTZXRVcEZvckd1ZXN0T3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e2lzU2V0VXBGb3JHdWVzdCAhPT0gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUZvb3RlciBcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ9e2lzVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwcmV2SHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgbmV4dEhyZWY9XCIvcm9vbS9yZWdpc3Rlci9iZWRyb29tc1wiICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJ1aWxkaW5nOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQmFja0Fycm93SWNvbiBmcm9tIFwiLi4vLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvcmVnaXN0ZXIvcmVnaXN0ZXJfcm9vbV9mb290ZXJfYmFja19hcnJvdy5zdmdcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHVzZVZhbGlkYXRlTW9kZSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlVmFsaWRhdGVNb2RlXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTQ4cHg7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMzBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcblxyXG4gIC5yZWdpc3Rlci1yb29tLWZvb3Rlci1iYWNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBwcmV2SHJlZj86IHN0cmluZztcclxuICAgIG5leHRIcmVmPzogc3RyaW5nO1xyXG4gICAgaXNWYWxpZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUZvb3RlcjogUmVhY3QuRkM8SVByb3BzPiA9ICh7cHJldkhyZWYsIG5leHRIcmVmLCBpc1ZhbGlkID0gdHJ1ZSx9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBzZXRWYWxpZGF0ZU1vZGUgfSA9IHVzZVZhbGlkYXRlTW9kZSgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHJldHVybiAoKT0+IHsgc2V0VmFsaWRhdGVNb2RlKGZhbHNlKX07XHJcbiAgICB9KVxyXG5cclxuICAgIC8vKiDqs4Tsho0g67KE7Yq8IO2BtOumrSDsi5xcclxuICAgIGNvbnN0IG9uQ2xpY2tOZXh0ID0gKFxyXG4gICAgICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0VmFsaWRhdGVNb2RlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcmV2SHJlZiB8fCBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tZm9vdGVyLWJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFja0Fycm93SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIOuSpOuhnFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e25leHRIcmVmIHx8IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImRhcmtfY3lhblwiIG9uQ2xpY2s9e29uQ2xpY2tOZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6rOE7IaNXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tRm9vdGVyOyIsImltcG9ydCB7IHVzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3J9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBjb21tb25BY3Rpb25zfSBmcm9tIFwiLi4vc3RvcmUvY29tbW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB2YWxpZGF0ZU1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1vbi52YWxpZGF0ZU1vZGUpO1xyXG5cclxuICAgIGNvbnN0IHNldFZhbGlkYXRlTW9kZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGNvbW1vbkFjdGlvbnMuc2V0VmFsaWRhdGVNb2RlKHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgdmFsaWRhdGVNb2RlLCBzZXRWYWxpZGF0ZU1vZGV9O1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBSZWdpc3RlclJvb21CdWlsZGluZyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJ1aWxkaW5nXCI7XHJcblxyXG5jb25zdCBidWlsZGluZzogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFJlZ2lzdGVyUm9vbUJ1aWxkaW5nIC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidWlsZGluZzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=