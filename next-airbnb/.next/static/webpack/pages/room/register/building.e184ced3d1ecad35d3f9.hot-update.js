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

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RadioGroup");

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


/***/ }),

/***/ "./components/room/register/RegisterRoomBuilding.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomBuilding.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _common_RadioGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/RadioGroup */ "./components/common/RadioGroup.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBuilding.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "RegisterRoomBuilding__Container",
  componentId: "sc-hpubya-0"
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-size:14px;font-weight:bold;color:", ";margin-bottom:6px;}.register-room-building-selector-wrapper{width:320px;margin-bottom:32px;}.register-room-room-type-radio{max-width:485px;margin-bottom:50px;}.register-room-is-setup-for-guest-radio{margin-bottom:50px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_76); //* 선택이 불가능한 큰 범위 건물 유형

_c = Container;
var disabledLargeBuildingTypeOptions = ["하나를 선택해주세요."];

var RegisterRoomBuilding = function RegisterRoomBuilding() {
  _s();

  var buildingType = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.registerRoom.buildingType;
  });
  var largeBuildingType = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.registerRoom.largeBuildingType;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)(); //* 큰 범위 건물 유형 변경 시

  var onChangeLargeBuildingType = function onChangeLargeBuildingType(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setLargeBuildingType(event.target.value));
  }; //* 선택된 건물 유형 options


  var detailBuildingOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    switch (largeBuildingType) {
      case "아파트":
        {
          var _require = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts"),
              apartmentBuildingTypeList = _require.apartmentBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(apartmentBuildingTypeList[0]));
          return apartmentBuildingTypeList;
        }

      case "주택":
        {
          var _require2 = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts"),
              houstBuildingTypeList = _require2.houstBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(houstBuildingTypeList[0]));
          return houstBuildingTypeList;
        }

      case "별채":
        {
          var _require3 = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts"),
              secondaryUnitBuildingTypeList = _require3.secondaryUnitBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(secondaryUnitBuildingTypeList[0]));
          return secondaryUnitBuildingTypeList;
        }

      case "독특한 숙소":
        {
          var _require4 = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts"),
              uniqueSpaceBuildingTypeList = _require4.uniqueSpaceBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(uniqueSpaceBuildingTypeList[0]));
          return uniqueSpaceBuildingTypeList;
        }

      case "B&B":
        {
          var _require5 = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts"),
              bnbBuildingTypeList = _require5.bnbBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(bnbBuildingTypeList[0]));
          return bnbBuildingTypeList;
        }

      case "부티크호텔":
        {
          var _require6 = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts"),
              boutiquesHotelBuildingTypeList = _require6.boutiquesHotelBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(boutiquesHotelBuildingTypeList[0]));
          return boutiquesHotelBuildingTypeList;
        }

      default:
        return ["아파트"];
    }
  }, [largeBuildingType]); //* 숙소 유형 radio options

  var rommTypeRadioOptions = [{
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
      lineNumber: 136,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_3__.default, {
        type: "register",
        value: "\uD558\uB098\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",
        defaultValue: "\uD558\uB098\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",
        disabledOptions: disabledLargeBuildingTypeOptions,
        label: "\uC6B0\uC120 \uBC94\uC704\uB97C \uC881\uD600\uBCFC\uAE4C\uC694?",
        options: _lib_staticData__WEBPACK_IMPORTED_MODULE_4__.largeBuildingTypeList,
        onChange: function onChange() {}
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_3__.default, {
        type: "register",
        value: undefined,
        disabled: !largeBuildingType,
        label: "\uAC74\uBB3C \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694.",
        options: detailBuildingOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }, _this), buildingType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-room-type-radio",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_8__.default, {
        label: "\uAC8C\uC2A4\uD2B8\uAC00 \uBB35\uAC8C \uB420 \uC219\uC18C \uC720\uD615\uC744 \uACE8\uB77C\uC8FC\uC138\uC694.",
        value: undefined,
        options: roomTypeRadioOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBuilding, "XMsraK7MufHjpMqZobjDcWR45wU=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_5__.useSelector, _store__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch];
});

_c2 = RegisterRoomBuilding;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBuilding);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterRoomBuilding");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vUmFkaW9Hcm91cC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcm9vbS9yZWdpc3Rlci9SZWdpc3RlclJvb21CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwicGFsZXR0ZSIsInZhbGlkYXRlTW9kZSIsImlzVmFsaWQiLCJjc3MiLCJ1bmRlZmluZWQiLCJSYWRpb0dyb3VwIiwibGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImVycm9yTWVzc2FnZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb21tb24iLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImRlc2NyaXB0aW9uIiwiZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnMiLCJSZWdpc3RlclJvb21CdWlsZGluZyIsImJ1aWxkaW5nVHlwZSIsInJlZ2lzdGVyUm9vbSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGUiLCJldmVudCIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJ0YXJnZXQiLCJkZXRhaWxCdWlsZGluZ09wdGlvbnMiLCJ1c2VNZW1vIiwicmVxdWlyZSIsImFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3QiLCJob3VzdEJ1aWxkaW5nVHlwZUxpc3QiLCJzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCIsInVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdCIsImJuYkJ1aWxkaW5nVHlwZUxpc3QiLCJib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3QiLCJyb21tVHlwZVJhZGlvT3B0aW9ucyIsImxhcmdlQnVpbGRpbmdUeXBlTGlzdCIsInJvb21UeXBlUmFkaW9PcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFD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c3Rlci9idWlsZGluZy5lMTg0Y2VkM2QxZWNhZDM1ZDNmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IFdhcm5pbmdJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9jb21tb24vd2FybmluZy5zdmdcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBpc1ZhbGlkOiBib29sZWFuOyB2YWxpZGF0ZU1vZGU6IGJvb2xlYW4gfT5gXHJcbiAgLnJhZGlvLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB9XHJcbiAgLnJhZGlvLWxpc3Qtd3JhcHBlciB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgfVxyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfYjB9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAkeyh7IHZhbGlkYXRlTW9kZSwgaXNWYWxpZCB9KSA9PiB7XHJcbiAgICAgIGlmICh2YWxpZGF0ZU1vZGUpIHtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLnRhd255fTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnNub3d9O1xyXG4gICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICAgICAgYDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfX1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5yYWRpby1kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLnJhZGlvLWdyb3VwLXdhcm5pbmcge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogJHtwYWxldHRlLmRhdmlkc29uX29yYW5nZX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElwcm9wcyBleHRlbmRzIFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD57XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIHZhbHVlPzogYW55O1xyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuICAgIG9wdGlvbnM/OiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBhbnk7IGRlc2NyaXB0aW9uPzogc3RyaW5nfVtdO1xyXG4gICAgaXNWYWxpZD86IGJvb2xlYW47XHJcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXA6IFJlYWN0LkZDPElwcm9wcz4gPSAoe1xyXG4gICAgbGFiZWwsXHJcbiAgICB2YWx1ZSxcclxuICAgIG9wdGlvbnMgPSBbXSxcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgaXNWYWxpZCxcclxuICAgIGVycm9yTWVzc2FnZSA9IFwi7Ji17IWY7J2EIOyEoO2Dne2VmOyEuOyalFwiLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCB2YWxpZGF0ZU1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1vbi52YWxpZGF0ZU1vZGUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBpc1ZhbGlkPXshIWlzVmFsaWR9IHZhbGlkYXRlTW9kZT17dmFsaWRhdGVNb2RlfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmFkaW8tbGFiZWxcIj57bGFiZWx9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvPWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17dmFsdWUgPT09IG9wdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZSAmJiBvbkNoYW5nZShvcHRpb24udmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpby1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwge3VzZU1lbW99IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21tb24vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgbGFyZ2VCdWlsZGluZ1R5cGVMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCIuLi8uLi9jb21tb24vUmFkaW9Hcm91cFwiO1xyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLXJvb20tdHlwZS1yYWRpbyB7XHJcbiAgICBtYXgtd2lkdGg6IDQ4NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20taXMtc2V0dXAtZm9yLWd1ZXN0LXJhZGlvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8qIOyEoO2DneydtCDrtojqsIDriqXtlZwg7YGwIOuylOychCDqsbTrrLwg7Jyg7ZiVXHJcbmNvbnN0IGRpc2FibGVkTGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zID0gW1wi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIl07XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CdWlsZGluZzogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5idWlsZGluZ1R5cGUpO1xyXG5cclxuXHJcbiAgICBjb25zdCBsYXJnZUJ1aWxkaW5nVHlwZSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgICAgIChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmxhcmdlQnVpbGRpbmdUeXBlXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gICAgLy8qIO2BsCDrspTsnIQg6rG066y8IOycoO2YlSDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUxhcmdlQnVpbGRpbmdUeXBlID0gKFxyXG4gICAgICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD5cclxuICAgICkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0TGFyZ2VCdWlsZGluZ1R5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qIOyEoO2DneuQnCDqsbTrrLwg7Jyg7ZiVIG9wdGlvbnNcclxuICAgIGNvbnN0IGRldGFpbEJ1aWxkaW5nT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobGFyZ2VCdWlsZGluZ1R5cGUpIHtcclxuICAgICAgICBjYXNlIFwi7JWE7YyM7Yq4XCI6IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCLso7ztg51cIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7IGhvdXN0QnVpbGRpbmdUeXBlTGlzdCB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShob3VzdEJ1aWxkaW5nVHlwZUxpc3RbMF0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGhvdXN0QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIuuzhOyxhFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwi64+F7Yq57ZWcIOyImeyGjFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgdW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUodW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiQiZCXCI6IHtcclxuICAgICAgICAgICAgY29uc3QgeyBibmJCdWlsZGluZ1R5cGVMaXN0IH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJuYkJ1aWxkaW5nVHlwZUxpc3RbMF0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJuYkJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCLrtoDti7DtgaztmLjthZRcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIuyVhO2MjO2KuFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSwgW2xhcmdlQnVpbGRpbmdUeXBlXSk7XHJcblxyXG4gICAgXHJcbiAgICAvLyog7IiZ7IaMIOycoO2YlSByYWRpbyBvcHRpb25zXHJcbiAgICBjb25zdCByb21tVHlwZVJhZGlvT3B0aW9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuynkSDsoITssrRcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiZW50aXJlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuqyjOyKpO2KuOqwgCDsiJnshowg7KCE7LK066W8IOuLpOuluCDsgqzrnozqs7wg6rO17Jyg7ZWY7KeAIOyViuqzoCDri6jrj4XsnLzroZwg7J207Jqp7ZWp64uI64ukLiDsnbzrsJjsoIHsnLzroZwg7Lmo7IukLCDsmpXsi6QsIOu2gOyXjOydtCDtj6ztlajrkKnri4jri6QuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuqwnOyduOyLpFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJwcml2YXRlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuqyjOyKpO2KuOyXkOqyjCDqsJzsnbgg7Lmo7Iuk7J20IOygnOqzteuQqeuLiOuLpC4g7Lmo7IukIOydtOyZuOydmCDqs7XqsITsnYAg6rO17Jqp7J28IOyImCDsnojsirXri4jri6QuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuuLpOyduOyLpFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJwdWJsaWNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi6rKM7Iqk7Yq464qUIOqwnOyduCDqs7XqsIQg7JeG7J20LCDri6Trpbgg7IKs656M6rO8IO2VqOq7mCDsk7DripQg7Lmo7Iuk7J2064KYIOqzteyaqeqzteqwhOyXkOyEnCDsiJnrsJXtlanri4jri6QuXCIsXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+65Ox66Gd7ZWgIOyImeyGjCDsooXrpZjripQg66y07JeH7J246rCA7JqUPzwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4x64uo6rOEPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvciBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIu2VmOuCmOulvCDshKDtg53tlbTso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e2Rpc2FibGVkTGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi7Jqw7ISgIOuylOychOulvCDsooHtmIDrs7zquYzsmpQ/XCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYXJnZUJ1aWxkaW5nVHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT57fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYnVpbGRpbmctc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxhcmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6rG066y8IOycoO2YleydhCDshKDtg53tlZjshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtkZXRhaWxCdWlsZGluZ09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2J1aWxkaW5nVHlwZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tcm9vbS10eXBlLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6rKM7Iqk7Yq46rCAIOusteqyjCDrkKAg7IiZ7IaMIOycoO2YleydhCDqs6jrnbzso7zshLjsmpQuXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Jvb21UeXBlUmFkaW9PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQnVpbGRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==