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
  }, [largeBuildingType]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uB4F1\uB85D\uD560 \uC219\uC18C \uC885\uB958\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
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
        lineNumber: 115,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
        lineNumber: 126,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBuilding, "T9jePwcXf25qWOj+WXeHiV3o2Uc=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJ1aWxkaW5nLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnMiLCJSZWdpc3RlclJvb21CdWlsZGluZyIsImxhcmdlQnVpbGRpbmdUeXBlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlZ2lzdGVyUm9vbSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNoYW5nZUxhcmdlQnVpbGRpbmdUeXBlIiwiZXZlbnQiLCJyZWdpc3RlclJvb21BY3Rpb25zIiwidGFyZ2V0IiwidmFsdWUiLCJkZXRhaWxCdWlsZGluZ09wdGlvbnMiLCJ1c2VNZW1vIiwicmVxdWlyZSIsImFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3QiLCJob3VzdEJ1aWxkaW5nVHlwZUxpc3QiLCJzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCIsInVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdCIsImJuYkJ1aWxkaW5nVHlwZUxpc3QiLCJib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3QiLCJsYXJnZUJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnV0FVRkMsNERBVkUsQ0FBZixDLENBMkJBOztLQTNCTUYsUztBQTRCTixJQUFNRyxnQ0FBZ0MsR0FBRyxDQUFDLGFBQUQsQ0FBekM7O0FBRUEsSUFBTUMsb0JBQThCLEdBQUcsU0FBakNBLG9CQUFpQyxHQUFNO0FBQUE7O0FBQ3pDLE1BQU1DLGlCQUFpQixHQUFHQyxtREFBVyxDQUNqQyxVQUFDQyxLQUFEO0FBQUEs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STtBQUFLLGVBQVMsRUFBQyx5Q0FBZjtBQUFBLDZCQUNJLDhEQUFDLHFEQUFEO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxhQUFLLEVBQUVDLFNBRlg7QUFHSSxnQkFBUSxFQUFFLENBQUNyQixpQkFIZjtBQUlJLGFBQUssRUFBQyxpRUFKVjtBQUtJLGVBQU8sRUFBRVc7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEJILENBaEdEOztHQUFNWixvQjtVQUN3QkUsK0MsRUFJVEksb0Q7OztNQUxmTixvQjtBQWtHTiwrREFBZUEsb0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9idWlsZGluZy4yMjM2YTYxYjU1YjNkY2E4MmE4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlTWVtb30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBsYXJnZUJ1aWxkaW5nVHlwZUxpc3QgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLXJvb20tdHlwZS1yYWRpbyB7XHJcbiAgICBtYXgtd2lkdGg6IDQ4NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20taXMtc2V0dXAtZm9yLWd1ZXN0LXJhZGlvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8qIOyEoO2DneydtCDrtojqsIDriqXtlZwg7YGwIOuylOychCDqsbTrrLwg7Jyg7ZiVXHJcbmNvbnN0IGRpc2FibGVkTGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zID0gW1wi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIl07XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CdWlsZGluZzogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsYXJnZUJ1aWxkaW5nVHlwZSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgICAgIChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmxhcmdlQnVpbGRpbmdUeXBlXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gICAgLy8qIO2BsCDrspTsnIQg6rG066y8IOycoO2YlSDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUxhcmdlQnVpbGRpbmdUeXBlID0gKFxyXG4gICAgICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD5cclxuICAgICkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0TGFyZ2VCdWlsZGluZ1R5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qIOyEoO2DneuQnCDqsbTrrLwg7Jyg7ZiVIG9wdGlvbnNcclxuICAgIGNvbnN0IGRldGFpbEJ1aWxkaW5nT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobGFyZ2VCdWlsZGluZ1R5cGUpIHtcclxuICAgICAgICBjYXNlIFwi7JWE7YyM7Yq4XCI6IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCLso7ztg51cIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7IGhvdXN0QnVpbGRpbmdUeXBlTGlzdCB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShob3VzdEJ1aWxkaW5nVHlwZUxpc3RbMF0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGhvdXN0QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIuuzhOyxhFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwi64+F7Yq57ZWcIOyImeyGjFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgdW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUodW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiQiZCXCI6IHtcclxuICAgICAgICAgICAgY29uc3QgeyBibmJCdWlsZGluZ1R5cGVMaXN0IH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJuYkJ1aWxkaW5nVHlwZUxpc3RbMF0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJuYkJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCLrtoDti7DtgaztmLjthZRcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIuyVhO2MjO2KuFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSwgW2xhcmdlQnVpbGRpbmdUeXBlXSk7XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMj7rk7HroZ3tlaAg7IiZ7IaMIOyiheulmOuKlCDrrLTsl4fsnbjqsIDsmpQ/PC9oMj5cclxuICAgICAgICAgICAgPGgzPjHri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYnVpbGRpbmctc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCLtlZjrgpjrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17ZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLsmrDshKAg67KU7JyE66W8IOyige2YgOuzvOq5jOyalD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhcmdlQnVpbGRpbmdUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCk9Pnt9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0b3IgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGFyZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsbTrrLwg7Jyg7ZiV7J2EIOyEoO2Dne2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RldGFpbEJ1aWxkaW5nT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21CdWlsZGluZzsiXSwic291cmNlUm9vdCI6IiJ9