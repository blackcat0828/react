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
  var roomType = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.registerRoom.roomType;
  });
  var largeBuildingType = (0,_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.registerRoom.largeBuildingType;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)(); //* 큰 범위 건물 유형 변경 시

  var onChangeLargeBuildingType = function onChangeLargeBuildingType(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setLargeBuildingType(event.target.value));
  }; //* 숙소 유형 변경시


  var onChangeRoomType = function onChangeRoomType(event) {
    var selected = event.target.value;
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setRoomType(selected));
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

  var roomTypeRadioOptions = [{
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
      lineNumber: 147,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
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
        onChange: onChangeLargeBuildingType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
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
        lineNumber: 161,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }, _this), buildingType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-room-type-radio",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_8__.default, {
        label: "\uAC8C\uC2A4\uD2B8\uAC00 \uBB35\uAC8C \uB420 \uC219\uC18C \uC720\uD615\uC744 \uACE8\uB77C\uC8FC\uC138\uC694.",
        value: undefined,
        options: roomTypeRadioOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBuilding, "4rTylRvhJTWe+rJm7yyyhjoQJB0=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_5__.useSelector, _store__WEBPACK_IMPORTED_MODULE_5__.useSelector, _store__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJ1aWxkaW5nLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnMiLCJSZWdpc3RlclJvb21CdWlsZGluZyIsImJ1aWxkaW5nVHlwZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyZWdpc3RlclJvb20iLCJyb29tVHlwZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGUiLCJldmVudCIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUm9vbVR5cGUiLCJzZWxlY3RlZCIsImRldGFpbEJ1aWxkaW5nT3B0aW9ucyIsInVzZU1lbW8iLCJyZXF1aXJlIiwiYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdCIsImhvdXN0QnVpbGRpbmdUeXBlTGlzdCIsInNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IiwidW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0IiwiYm5iQnVpbGRpbmdUeXBlTGlzdCIsImJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdCIsInJvb21UeXBlUmFkaW9PcHRpb25zIiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsImxhcmdlQnVpbGRpbmdUeXBlTGlzdCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdXQVVGQyw0REFWRSxDQUFmLEMsQ0EyQkE7O0tBM0JNRixTO0FBNEJOLElBQU1HLGdDQUFnQyxHQUFHLENBQUMsYUFBRCxD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RVU7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKLEVBdUJLZixZQUFZLGlCQUNUO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsNkJBQ0ksOERBQUMsdURBQUQ7QUFDSSxhQUFLLEVBQUMsOEdBRFY7QUFFSSxhQUFLLEVBQUU0QixTQUZYO0FBR0ksZUFBTyxFQUFFSjtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUNILENBMUlEOztHQUFNekIsb0I7VUFDbUJFLCtDLEVBQ0pBLCtDLEVBR1NBLCtDLEVBSVRNLG9EOzs7TUFUZlIsb0I7QUE0SU4sK0RBQWVBLG9CQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYnVpbGRpbmcuZDExYWNlMzJkNWYzYmZjYzI1NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZU1lbW99IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21tb24vU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgbGFyZ2VCdWlsZGluZ1R5cGVMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCIuLi8uLi9jb21tb24vUmFkaW9Hcm91cFwiO1xyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLXJvb20tdHlwZS1yYWRpbyB7XHJcbiAgICBtYXgtd2lkdGg6IDQ4NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20taXMtc2V0dXAtZm9yLWd1ZXN0LXJhZGlvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8qIOyEoO2DneydtCDrtojqsIDriqXtlZwg7YGwIOuylOychCDqsbTrrLwg7Jyg7ZiVXHJcbmNvbnN0IGRpc2FibGVkTGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zID0gW1wi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIl07XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CdWlsZGluZzogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5idWlsZGluZ1R5cGUpO1xyXG4gICAgY29uc3Qgcm9vbVR5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5yb29tVHlwZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGxhcmdlQnVpbGRpbmdUeXBlID0gdXNlU2VsZWN0b3IoXHJcbiAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ubGFyZ2VCdWlsZGluZ1R5cGVcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICAvLyog7YGwIOuylOychCDqsbTrrLwg7Jyg7ZiVIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGUgPSAoXHJcbiAgICAgICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PlxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRMYXJnZUJ1aWxkaW5nVHlwZShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyog7IiZ7IaMIOycoO2YlSDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlUm9vbVR5cGUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0Um9vbVR5cGUoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCBhcyBcImVudGlyZVwiIHwgXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8qIOyEoO2DneuQnCDqsbTrrLwg7Jyg7ZiVIG9wdGlvbnNcclxuICAgIGNvbnN0IGRldGFpbEJ1aWxkaW5nT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobGFyZ2VCdWlsZGluZ1R5cGUpIHtcclxuICAgICAgICBjYXNlIFwi7JWE7YyM7Yq4XCI6IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCLso7ztg51cIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7IGhvdXN0QnVpbGRpbmdUeXBlTGlzdCB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShob3VzdEJ1aWxkaW5nVHlwZUxpc3RbMF0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGhvdXN0QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIuuzhOyxhFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwi64+F7Yq57ZWcIOyImeyGjFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgdW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUodW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiQiZCXCI6IHtcclxuICAgICAgICAgICAgY29uc3QgeyBibmJCdWlsZGluZ1R5cGVMaXN0IH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJuYkJ1aWxkaW5nVHlwZUxpc3RbMF0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJuYkJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCLrtoDti7DtgaztmLjthZRcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIuyVhO2MjO2KuFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSwgW2xhcmdlQnVpbGRpbmdUeXBlXSk7XHJcblxyXG4gICAgXHJcbiAgICAvLyog7IiZ7IaMIOycoO2YlSByYWRpbyBvcHRpb25zXHJcbiAgICBjb25zdCByb29tVHlwZVJhZGlvT3B0aW9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuynkSDsoITssrRcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiZW50aXJlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuqyjOyKpO2KuOqwgCDsiJnshowg7KCE7LK066W8IOuLpOuluCDsgqzrnozqs7wg6rO17Jyg7ZWY7KeAIOyViuqzoCDri6jrj4XsnLzroZwg7J207Jqp7ZWp64uI64ukLiDsnbzrsJjsoIHsnLzroZwg7Lmo7IukLCDsmpXsi6QsIOu2gOyXjOydtCDtj6ztlajrkKnri4jri6QuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuqwnOyduOyLpFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJwcml2YXRlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuqyjOyKpO2KuOyXkOqyjCDqsJzsnbgg7Lmo7Iuk7J20IOygnOqzteuQqeuLiOuLpC4g7Lmo7IukIOydtOyZuOydmCDqs7XqsITsnYAg6rO17Jqp7J28IOyImCDsnojsirXri4jri6QuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuuLpOyduOyLpFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJwdWJsaWNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi6rKM7Iqk7Yq464qUIOqwnOyduCDqs7XqsIQg7JeG7J20LCDri6Trpbgg7IKs656M6rO8IO2VqOq7mCDsk7DripQg7Lmo7Iuk7J2064KYIOqzteyaqeqzteqwhOyXkOyEnCDsiJnrsJXtlanri4jri6QuXCIsXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+65Ox66Gd7ZWgIOyImeyGjCDsooXrpZjripQg66y07JeH7J246rCA7JqUPzwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4x64uo6rOEPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvciBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIu2VmOuCmOulvCDshKDtg53tlbTso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e2Rpc2FibGVkTGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi7Jqw7ISgIOuylOychOulvCDsooHtmIDrs7zquYzsmpQ/XCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYXJnZUJ1aWxkaW5nVHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvciBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXJnZUJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuqxtOusvCDsnKDtmJXsnYQg7ISg7YOd7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGV0YWlsQnVpbGRpbmdPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtidWlsZGluZ1R5cGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLXJvb20tdHlwZS1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuqyjOyKpO2KuOqwgCDrrLXqsowg65CgIOyImeyGjCDsnKDtmJXsnYQg6rOo65287KO87IS47JqULlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyb29tVHlwZVJhZGlvT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJ1aWxkaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=