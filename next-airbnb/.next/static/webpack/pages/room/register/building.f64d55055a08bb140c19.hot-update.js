self["webpackHotUpdate_N_E"]("pages/room/register/building",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBuilding.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div.withConfig({
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
      lineNumber: 134,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
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
        lineNumber: 137,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
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
        lineNumber: 148,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }, _this), buildingType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-room-type-radio",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RadioGroup, {
        label: "\uAC8C\uC2A4\uD2B8\uAC00 \uBB35\uAC8C \uB420 \uC219\uC18C \uC720\uD615\uC744 \uACE8\uB77C\uC8FC\uC138\uC694.",
        value: undefined,
        options: roomTypeRadioOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJ1aWxkaW5nLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnMiLCJSZWdpc3RlclJvb21CdWlsZGluZyIsImJ1aWxkaW5nVHlwZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyZWdpc3RlclJvb20iLCJsYXJnZUJ1aWxkaW5nVHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNoYW5nZUxhcmdlQnVpbGRpbmdUeXBlIiwiZXZlbnQiLCJyZWdpc3RlclJvb21BY3Rpb25zIiwidGFyZ2V0IiwidmFsdWUiLCJkZXRhaWxCdWlsZGluZ09wdGlvbnMiLCJ1c2VNZW1vIiwicmVxdWlyZSIsImFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3QiLCJob3VzdEJ1aWxkaW5nVHlwZUxpc3QiLCJzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCIsInVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdCIsImJuYkJ1aWxkaW5nVHlwZUxpc3QiLCJib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3QiLCJyb21tVHlwZVJhZGlvT3B0aW9ucyIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJsYXJnZUJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmRlZmluZWQiLCJyb29tVHlwZVJhZGlvT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdXQVVGQyw0REFWRSxDQUFmLEMsQ0EyQkE7O0tBM0JNRixTO0FBNEJOLElBQU1HLGdDQUFnQyxHQUFHLENBQUMsYUFBRCxDQUF6Qzs7QUFFQSxJQUFNQyxvQkFBOEIs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RSwrQyxFQUdLQSwrQyxFQUlUSyxvRDs7O01BUmZQLG9CO0FBaUlOLCtEQUFlQSxvQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2J1aWxkaW5nLmY2NGQ1NTA1NWEwOGJiMTQwYzE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IGxhcmdlQnVpbGRpbmdUeXBlTGlzdCB9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA2MnB4IDMwcHggMTAwcHg7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tcm9vbS10eXBlLXJhZGlvIHtcclxuICAgIG1heC13aWR0aDogNDg1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1pcy1zZXR1cC1mb3ItZ3Vlc3QtcmFkaW8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbmA7XHJcblxyXG4vLyog7ISg7YOd7J20IOu2iOqwgOuKpe2VnCDtgbAg67KU7JyEIOqxtOusvCDsnKDtmJVcclxuY29uc3QgZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnMgPSBbXCLtlZjrgpjrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiXTtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJ1aWxkaW5nOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmJ1aWxkaW5nVHlwZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGxhcmdlQnVpbGRpbmdUeXBlID0gdXNlU2VsZWN0b3IoXHJcbiAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ubGFyZ2VCdWlsZGluZ1R5cGVcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICAvLyog7YGwIOuylOychCDqsbTrrLwg7Jyg7ZiVIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGUgPSAoXHJcbiAgICAgICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PlxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRMYXJnZUJ1aWxkaW5nVHlwZShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyog7ISg7YOd65CcIOqxtOusvCDsnKDtmJUgb3B0aW9uc1xyXG4gICAgY29uc3QgZGV0YWlsQnVpbGRpbmdPcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChsYXJnZUJ1aWxkaW5nVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCLslYTtjIztirhcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIuyjvO2DnVwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaG91c3RCdWlsZGluZ1R5cGVMaXN0IH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGhvdXN0QnVpbGRpbmdUeXBlTGlzdFswXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gaG91c3RCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwi67OE7LGEXCI6IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCLrj4XtirntlZwg7IiZ7IaMXCI6IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZSh1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJCJkJcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7IGJuYkJ1aWxkaW5nVHlwZUxpc3QgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYm5iQnVpbGRpbmdUeXBlTGlzdFswXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYm5iQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIuu2gO2LsO2BrO2YuO2FlFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gW1wi7JWE7YyM7Yq4XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9LCBbbGFyZ2VCdWlsZGluZ1R5cGVdKTtcclxuXHJcbiAgICBcclxuICAgIC8vKiDsiJnshowg7Jyg7ZiVIHJhZGlvIG9wdGlvbnNcclxuICAgIGNvbnN0IHJvbW1UeXBlUmFkaW9PcHRpb25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi7KeRIOyghOyytFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJlbnRpcmVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi6rKM7Iqk7Yq46rCAIOyImeyGjCDsoITssrTrpbwg64uk66W4IOyCrOuejOqzvCDqs7XsnKDtlZjsp4Ag7JWK6rOgIOuLqOuPheycvOuhnCDsnbTsmqntlanri4jri6QuIOydvOuwmOyggeycvOuhnCDsuajsi6QsIOyaleyLpCwg67aA7JeM7J20IO2PrO2VqOuQqeuLiOuLpC5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi6rCc7J247IukXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcInByaXZhdGVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi6rKM7Iqk7Yq47JeQ6rKMIOqwnOyduCDsuajsi6TsnbQg7KCc6rO165Cp64uI64ukLiDsuajsi6Qg7J207Jm47J2YIOqzteqwhOydgCDqs7Xsmqnsnbwg7IiYIOyeiOyKteuLiOuLpC5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi64uk7J247IukXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcInB1YmxpY1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLqsozsiqTtirjripQg6rCc7J24IOqzteqwhCDsl4bsnbQsIOuLpOuluCDsgqzrnozqs7wg7ZWo6ruYIOyTsOuKlCDsuajsi6TsnbTrgpgg6rO17Jqp6rO16rCE7JeQ7IScIOyImeuwle2VqeuLiOuLpC5cIixcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMj7rk7HroZ3tlaAg7IiZ7IaMIOyiheulmOuKlCDrrLTsl4fsnbjqsIDsmpQ/PC9oMj5cclxuICAgICAgICAgICAgPGgzPjHri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYnVpbGRpbmctc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCLtlZjrgpjrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17ZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLsmrDshKAg67KU7JyE66W8IOyige2YgOuzvOq5jOyalD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhcmdlQnVpbGRpbmdUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCk9Pnt9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0b3IgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGFyZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsbTrrLwg7Jyg7ZiV7J2EIOyEoO2Dne2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RldGFpbEJ1aWxkaW5nT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7YnVpbGRpbmdUeXBlICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1yb29tLXR5cGUtcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsozsiqTtirjqsIAg66y16rKMIOuQoCDsiJnshowg7Jyg7ZiV7J2EIOqzqOudvOyjvOyEuOyalC5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cm9vbVR5cGVSYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21CdWlsZGluZzsiXSwic291cmNlUm9vdCI6IiJ9