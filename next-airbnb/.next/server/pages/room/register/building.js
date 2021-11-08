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
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "radio=list-wrapper",
      children: options.map((option, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "radio",
          checked: value === option.value,
          onChange: () => onChange && onChange(option.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [option.label, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "radio-description",
            children: option.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 25
        }, undefined)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 9
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
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)(); //* 큰 범위 건물 유형 변경 시

  const onChangeLargeBuildingType = event => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setLargeBuildingType(event.target.value));
  }; //* 숙소 유형 변경시


  const onChangeRoomType = event => {
    const selected = event.target.value;
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__.registerRoomActions.setRoomType(selected));
  }; //* 선택된 건물 유형 options


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
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uB4F1\uB85D\uD560 \uC219\uC18C \uC885\uB958\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
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
        onChange: onChangeLargeBuildingType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "register",
        value: undefined,
        disabled: !largeBuildingType,
        label: "\uAC74\uBB3C \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694.",
        options: detailBuildingOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, undefined), buildingType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-room-type-radio",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_9__.default, {
        label: "\uAC8C\uC2A4\uD2B8\uAC00 \uBB35\uAC8C \uB420 \uC219\uC18C \uC720\uD615\uC744 \uACE8\uB77C\uC8FC\uC138\uC694.",
        value: undefined,
        options: roomTypeRadioOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBuilding);

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_common_Selector_tsx-lib_staticData_ts"], function() { return __webpack_exec__("./pages/room/register/building.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvY29tbW9uL1JhZGlvR3JvdXAudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJ1aWxkaW5nLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYnVpbGRpbmcudHN4Iiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwidmFsaWRhdGVNb2RlIiwiaXNWYWxpZCIsImNzcyIsInVuZGVmaW5lZCIsIlJhZGlvR3JvdXAiLCJsYWJlbCIsInZhbHVlIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZXJyb3JNZXNzYWdlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbW1vbiIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJSZWFjdCIsImRpc2FibGVkTGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zIiwiUmVnaXN0ZXJSb29tQnVpbGRpbmciLCJidWlsZGluZ1R5cGUiLCJyZWdpc3RlclJvb20iLCJyb29tVHlwZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGUiLCJldmVudCIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJ0YXJnZXQiLCJvbkNoYW5nZVJvb21UeXBlIiwic2VsZWN0ZWQiLCJkZXRhaWxCdWlsZGluZ09wdGlvbnMiLCJ1c2VNZW1vIiwiYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdCIsInJlcXVpcmUiLCJob3VzdEJ1aWxkaW5nVHlwZUxpc3QiLCJzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCIsInVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdCIsImJuYkJ1aWxkaW5nVHlwZUxpc3QiLCJib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3QiLCJyb29tVHlwZVJhZGlvT3B0aW9ucyIsImxhcmdlQnVpbGRpbmdUeXBlTGlzdCIsImJ1aWxkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLFNBQVMsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdTZCQUlGQyw0REFKRSxFQXFDU0EsNERBckNULEVBMENULENBQUM7QUFBRUMsY0FBRjtBQUFnQkM7QUFBaEIsQ0FBRCxLQUErQjtBQUMvQixNQUFJRCxZQUFKLEVBQWtCO0FBQ2hCLFFBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1osYUFBT0Msc0RBQVAsK0NBQ2tCSCwwREFEbEIsRUFFc0JBLHlEQUZ0QjtBQUlEOztBQUNELFdBQU9HLHNEQUFQLHlCQUNrQkgsOERBRGxCO0FBR0Q7O0FBQ0QsU0FBT0ksU0FBUDtBQUNELENBdkRVLEVBMkRTSiw4REEzRFQsRUE2RkFBLG9FQTdGQSxDQUFmOztBQTJHQSxNQUFNSyxVQUE0QixHQUFHLENBQUM7QUFDbENDLE9BRGtDO0FBRWxDQyxPQUZrQztBQUdsQ0MsU0FBTyxHQUFHLEVBSHdCO0FBSWxDQyxVQUprQztBQUtsQ1AsU0FMa0M7QUFNbENRLGNBQVksR0FBRztBQU5tQixDQUFELEtBTy9CO0FBQ0YsUUFBTVQsWUFBWSxH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RUFBQyw4R0FEVjtBQUVJLGFBQUssRUFBRWpCLFNBRlg7QUFHSSxlQUFPLEVBQUVzQztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW1DSCxDQXRJRDs7QUF3SUEsK0RBQWV0QixvQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakxBO0FBRUE7O0FBRUEsTUFBTXdCLFFBQWtCLEdBQUcsTUFBTTtBQUM3QixzQkFBTyw4REFBQyxtRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxDQUZEOztBQUlBLCtEQUFlQSxRQUFmLEU7Ozs7Ozs7Ozs7O0FDUkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvcm9vbS9yZWdpc3Rlci9idWlsZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCBXYXJuaW5nSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvY29tbW9uL3dhcm5pbmcuc3ZnXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgaXNWYWxpZDogYm9vbGVhbjsgdmFsaWRhdGVNb2RlOiBib29sZWFuIH0+YFxyXG4gIC5yYWRpby1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yYWRpby1saXN0LXdyYXBwZXIge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2IwfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJHsoeyB2YWxpZGF0ZU1vZGUsIGlzVmFsaWQgfSkgPT4ge1xyXG4gICAgICBpZiAodmFsaWRhdGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS50YXdueX07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5zbm93fTtcclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH19XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAucmFkaW8tZGVzY3JpcHRpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjhweDtcclxuICB9XHJcblxyXG4gIC5yYWRpby1ncm91cC13YXJuaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5kYXZpZHNvbl9vcmFuZ2V9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJcHJvcHMgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+e1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICB2YWx1ZT86IGFueTtcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBvcHRpb25zPzogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55OyBkZXNjcmlwdGlvbj86IHN0cmluZ31bXTtcclxuICAgIGlzVmFsaWQ/OiBib29sZWFuO1xyXG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBSYWRpb0dyb3VwOiBSZWFjdC5GQzxJcHJvcHM+ID0gKHtcclxuICAgIGxhYmVsLFxyXG4gICAgdmFsdWUsXHJcbiAgICBvcHRpb25zID0gW10sXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIGlzVmFsaWQsXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBcIuyYteyFmOydhCDshKDtg53tlZjshLjsmpRcIixcclxufSkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhdGVNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24udmFsaWRhdGVNb2RlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgaXNWYWxpZD17ISFpc1ZhbGlkfSB2YWxpZGF0ZU1vZGU9e3ZhbGlkYXRlTW9kZX0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJhZGlvLWxhYmVsXCI+e2xhYmVsfTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpbz1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKG9wdGlvbi52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhZGlvLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFJhZGlvR3JvdXApOyIsImltcG9ydCBSZWFjdCwge3VzZU1lbW99IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21tb24vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgbGFyZ2VCdWlsZGluZ1R5cGVMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCIuLi8uLi9jb21tb24vUmFkaW9Hcm91cFwiO1xyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLXJvb20tdHlwZS1yYWRpbyB7XHJcbiAgICBtYXgtd2lkdGg6IDQ4NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20taXMtc2V0dXAtZm9yLWd1ZXN0LXJhZGlvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8qIOyEoO2DneydtCDrtojqsIDriqXtlZwg7YGwIOuylOychCDqsbTrrLwg7Jyg7ZiVXHJcbmNvbnN0IGRpc2FibGVkTGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zID0gW1wi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIl07XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CdWlsZGluZzogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5idWlsZGluZ1R5cGUpO1xyXG4gICAgY29uc3Qgcm9vbVR5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5yb29tVHlwZSk7XHJcbiAgICBjb25zdCBsYXJnZUJ1aWxkaW5nVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmxhcmdlQnVpbGRpbmdUeXBlKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cclxuICAgIC8vKiDtgbAg67KU7JyEIOqxtOusvCDsnKDtmJUg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSA9IChcclxuICAgICAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+XHJcbiAgICApID0+IHtcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldExhcmdlQnVpbGRpbmdUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vKiDsiJnshowg7Jyg7ZiVIOuzgOqyveyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VSb29tVHlwZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRSb29tVHlwZShcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkIGFzIFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvLyog7ISg7YOd65CcIOqxtOusvCDsnKDtmJUgb3B0aW9uc1xyXG4gICAgY29uc3QgZGV0YWlsQnVpbGRpbmdPcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChsYXJnZUJ1aWxkaW5nVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCLslYTtjIztirhcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIuyjvO2DnVwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaG91c3RCdWlsZGluZ1R5cGVMaXN0IH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGhvdXN0QnVpbGRpbmdUeXBlTGlzdFswXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gaG91c3RCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwi67OE7LGEXCI6IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCLrj4XtirntlZwg7IiZ7IaMXCI6IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZSh1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJCJkJcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7IGJuYkJ1aWxkaW5nVHlwZUxpc3QgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYm5iQnVpbGRpbmdUeXBlTGlzdFswXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYm5iQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIuu2gO2LsO2BrO2YuO2FlFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gW1wi7JWE7YyM7Yq4XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9LCBbbGFyZ2VCdWlsZGluZ1R5cGVdKTtcclxuXHJcbiAgICBcclxuICAgIC8vKiDsiJnshowg7Jyg7ZiVIHJhZGlvIG9wdGlvbnNcclxuICAgIGNvbnN0IHJvb21UeXBlUmFkaW9PcHRpb25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi7KeRIOyghOyytFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJlbnRpcmVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi6rKM7Iqk7Yq46rCAIOyImeyGjCDsoITssrTrpbwg64uk66W4IOyCrOuejOqzvCDqs7XsnKDtlZjsp4Ag7JWK6rOgIOuLqOuPheycvOuhnCDsnbTsmqntlanri4jri6QuIOydvOuwmOyggeycvOuhnCDsuajsi6QsIOyaleyLpCwg67aA7JeM7J20IO2PrO2VqOuQqeuLiOuLpC5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi6rCc7J247IukXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcInByaXZhdGVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi6rKM7Iqk7Yq47JeQ6rKMIOqwnOyduCDsuajsi6TsnbQg7KCc6rO165Cp64uI64ukLiDsuajsi6Qg7J207Jm47J2YIOqzteqwhOydgCDqs7Xsmqnsnbwg7IiYIOyeiOyKteuLiOuLpC5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi64uk7J247IukXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcInB1YmxpY1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLqsozsiqTtirjripQg6rCc7J24IOqzteqwhCDsl4bsnbQsIOuLpOuluCDsgqzrnozqs7wg7ZWo6ruYIOyTsOuKlCDsuajsi6TsnbTrgpgg6rO17Jqp6rO16rCE7JeQ7IScIOyImeuwle2VqeuLiOuLpC5cIixcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMj7rk7HroZ3tlaAg7IiZ7IaMIOyiheulmOuKlCDrrLTsl4fsnbjqsIDsmpQ/PC9oMj5cclxuICAgICAgICAgICAgPGgzPjHri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYnVpbGRpbmctc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhcmdlQnVpbGRpbmdUeXBlIHx8IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLtlZjrgpjrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtkaXNhYmxlZExhcmdlQnVpbGRpbmdUeXBlT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyasOyEoCDrspTsnITrpbwg7KKB7ZiA67O86rmM7JqUP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bGFyZ2VCdWlsZGluZ1R5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUxhcmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0b3IgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGFyZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsbTrrLwg7Jyg7ZiV7J2EIOyEoO2Dne2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RldGFpbEJ1aWxkaW5nT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7YnVpbGRpbmdUeXBlICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1yb29tLXR5cGUtcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsozsiqTtirjqsIAg66y16rKMIOuQoCDsiJnshowg7Jyg7ZiV7J2EIOqzqOudvOyjvOyEuOyalC5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cm9vbVR5cGVSYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21CdWlsZGluZzsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IFJlZ2lzdGVyUm9vbUJ1aWxkaW5nIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Jvb20vcmVnaXN0ZXIvUmVnaXN0ZXJSb29tQnVpbGRpbmdcIjtcclxuXHJcbmNvbnN0IGJ1aWxkaW5nOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiA8UmVnaXN0ZXJSb29tQnVpbGRpbmcgLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1aWxkaW5nOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9