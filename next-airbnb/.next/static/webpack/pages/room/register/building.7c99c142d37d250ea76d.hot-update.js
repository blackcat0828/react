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
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-size:14px;font-weight:bold;color:", ";margin-bottom:6px;}.register-room-building-selector-wrapper{width:320px;margin-bottom:32px;}.register-room-room-type-radio{max-width:485px;margin-bottom:50px;}.register-room-is-setup-for-guest-radio{margin-bottom:50px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__.default.gray_76); //* ????????? ???????????? ??? ?????? ?????? ??????

_c = Container;
var disabledLargeBuildingTypeOptions = ["????????? ??????????????????."];

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
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)(); //* ??? ?????? ?????? ?????? ?????? ???

  var onChangeLargeBuildingType = function onChangeLargeBuildingType(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setLargeBuildingType(event.target.value));
  }; //* ?????? ???????????? ?????????


  var onChangeBuildingType = function onChangeBuildingType(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(event.target.value));
  }; //* ?????? ?????? ?????????


  var onChangeRoomType = function onChangeRoomType(value) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setRoomType(value));
  }; //* ????????? ?????? ?????? options


  var detailBuildingOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    switch (largeBuildingType) {
      case "?????????":
        {
          var _require = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts"),
              apartmentBuildingTypeList = _require.apartmentBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(apartmentBuildingTypeList[0]));
          return apartmentBuildingTypeList;
        }

      case "??????":
        {
          var _require2 = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts"),
              houstBuildingTypeList = _require2.houstBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(houstBuildingTypeList[0]));
          return houstBuildingTypeList;
        }

      case "??????":
        {
          var _require3 = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts"),
              secondaryUnitBuildingTypeList = _require3.secondaryUnitBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(secondaryUnitBuildingTypeList[0]));
          return secondaryUnitBuildingTypeList;
        }

      case "????????? ??????":
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

      case "???????????????":
        {
          var _require6 = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts"),
              boutiquesHotelBuildingTypeList = _require6.boutiquesHotelBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__.registerRoomActions.setBuildingType(boutiquesHotelBuildingTypeList[0]));
          return boutiquesHotelBuildingTypeList;
        }

      default:
        return ["?????????"];
    }
  }, [largeBuildingType]); //* ?????? ?????? radio options

  var roomTypeRadioOptions = [{
    label: "??? ??????",
    value: "entire",
    description: "???????????? ?????? ????????? ?????? ????????? ???????????? ?????? ???????????? ???????????????. ??????????????? ??????, ??????, ????????? ???????????????."
  }, {
    label: "?????????",
    value: "private",
    description: "??????????????? ?????? ????????? ???????????????. ?????? ????????? ????????? ????????? ??? ????????????."
  }, {
    label: "?????????",
    value: "public",
    description: "???????????? ?????? ?????? ??????, ?????? ????????? ?????? ?????? ???????????? ?????????????????? ???????????????."
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\uB4F1\uB85D\uD560 \uC219\uC18C \uC885\uB958\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_3__.default, {
        type: "register",
        value: largeBuildingType || undefined,
        defaultValue: "\uD558\uB098\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",
        disabledOptions: disabledLargeBuildingTypeOptions,
        label: "\uC6B0\uC120 \uBC94\uC704\uB97C \uC881\uD600\uBCFC\uAE4C\uC694?",
        options: _lib_staticData__WEBPACK_IMPORTED_MODULE_4__.largeBuildingTypeList,
        onChange: onChangeLargeBuildingType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_3__.default, {
        type: "register",
        value: buildingType || undefined,
        label: "\uAC74\uBB3C \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694.",
        options: detailBuildingOptions,
        onChange: onChangeBuildingType,
        disabled: !largeBuildingType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, _this), buildingType && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "register-room-room-type-radio",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_8__.default, {
        label: "\uAC8C\uC2A4\uD2B8\uAC00 \uBB35\uAC8C \uB420 \uC219\uC18C \uC720\uD615\uC744 \uACE8\uB77C\uC8FC\uC138\uC694.",
        value: undefined,
        options: roomTypeRadioOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJ1aWxkaW5nLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnMiLCJSZWdpc3RlclJvb21CdWlsZGluZyIsImJ1aWxkaW5nVHlwZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyZWdpc3RlclJvb20iLCJyb29tVHlwZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGUiLCJldmVudCIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlQnVpbGRpbmdUeXBlIiwib25DaGFuZ2VSb29tVHlwZSIsImRldGFpbEJ1aWxkaW5nT3B0aW9ucyIsInVzZU1lbW8iLCJyZXF1aXJlIiwiYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdCIsImhvdXN0QnVpbGRpbmdUeXBlTGlzdCIsInNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IiwidW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0IiwiYm5iQnVpbGRpbmdUeXBlTGlzdCIsImJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdCIsInJvb21UeXBlUmFkaW9PcHRpb25zIiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsInVuZGVmaW5lZCIsImxhcmdlQnVpbGRpbmdUeXBlTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdXQVVGQyw0REFWRSxDQUFmLEMsQ0EyQkE7O0tBM0JNRixTO0FBNEJOLElBQU1HLGdDQUFnQyxHQUFH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QUFBLDZCQUNJLDhEQUFDLHFEQUFEO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxhQUFLLEVBQUVSLFlBQVksSUFBSTJCLFNBRjNCO0FBR0ksYUFBSyxFQUFDLGlFQUhWO0FBSUksZUFBTyxFQUFFWixxQkFKYjtBQUtJLGdCQUFRLEVBQUVGLG9CQUxkO0FBTUksZ0JBQVEsRUFBRSxDQUFDUjtBQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEosRUF3QktMLFlBQVksaUJBQ1Q7QUFBSyxlQUFTLEVBQUMsK0JBQWY7QUFBQSw2QkFDSSw4REFBQyx1REFBRDtBQUNJLGFBQUssRUFBQyw4R0FEVjtBQUVJLGFBQUssRUFBRTJCLFNBRlg7QUFHSSxlQUFPLEVBQUVIO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQ0gsQ0F6SUQ7O0dBQU16QixvQjtVQUNtQkUsK0MsRUFDSkEsK0MsRUFDU0EsK0MsRUFFVE0sb0Q7OztNQUxmUixvQjtBQTJJTiwrREFBZUEsb0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9idWlsZGluZy43Yzk5YzE0MmQzN2QyNTBlYTc2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlTWVtb30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBsYXJnZUJ1aWxkaW5nVHlwZUxpc3QgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSBcIi4uLy4uL2NvbW1vbi9SYWRpb0dyb3VwXCI7XHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA2MnB4IDMwcHggMTAwcHg7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tcm9vbS10eXBlLXJhZGlvIHtcclxuICAgIG1heC13aWR0aDogNDg1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1pcy1zZXR1cC1mb3ItZ3Vlc3QtcmFkaW8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbmA7XHJcblxyXG4vLyog7ISg7YOd7J20IOu2iOqwgOuKpe2VnCDtgbAg67KU7JyEIOqxtOusvCDsnKDtmJVcclxuY29uc3QgZGlzYWJsZWRMYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnMgPSBbXCLtlZjrgpjrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiXTtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJ1aWxkaW5nOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmJ1aWxkaW5nVHlwZSk7XHJcbiAgICBjb25zdCByb29tVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLnJvb21UeXBlKTtcclxuICAgIGNvbnN0IGxhcmdlQnVpbGRpbmdUeXBlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ubGFyZ2VCdWlsZGluZ1R5cGUpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gICAgLy8qIO2BsCDrspTsnIQg6rG066y8IOycoO2YlSDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUxhcmdlQnVpbGRpbmdUeXBlID0gKFxyXG4gICAgICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD5cclxuICAgICkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0TGFyZ2VCdWlsZGluZ1R5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qIOyDgeyEuCDqsbTrrLzsnKDtmJUg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJ1aWxkaW5nVHlwZSA9IChcclxuICAgICAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+XHJcbiAgICApID0+IHtcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8qIOyImeyGjCDsnKDtmJUg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZVJvb21UeXBlID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldFJvb21UeXBlKHZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vKiDshKDtg53rkJwg6rG066y8IOycoO2YlSBvcHRpb25zXHJcbiAgICBjb25zdCBkZXRhaWxCdWlsZGluZ09wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGxhcmdlQnVpbGRpbmdUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIuyVhO2MjO2KuFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwi7KO87YOdXCI6IHtcclxuICAgICAgICAgICAgY29uc3QgeyBob3VzdEJ1aWxkaW5nVHlwZUxpc3QgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoaG91c3RCdWlsZGluZ1R5cGVMaXN0WzBdKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBob3VzdEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCLrs4TssYRcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIuuPhe2Kue2VnCDsiJnshoxcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIkImQlwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgYm5iQnVpbGRpbmdUeXBlTGlzdCB9ID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShibmJCdWlsZGluZ1R5cGVMaXN0WzBdKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBibmJCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwi67aA7Yuw7YGs7Zi47YWUXCI6IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBbXCLslYTtjIztirhcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0sIFtsYXJnZUJ1aWxkaW5nVHlwZV0pO1xyXG5cclxuICAgIFxyXG4gICAgLy8qIOyImeyGjCDsnKDtmJUgcmFkaW8gb3B0aW9uc1xyXG4gICAgY29uc3Qgcm9vbVR5cGVSYWRpb09wdGlvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLsp5Eg7KCE7LK0XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcImVudGlyZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLqsozsiqTtirjqsIAg7IiZ7IaMIOyghOyytOulvCDri6Trpbgg7IKs656M6rO8IOqzteycoO2VmOyngCDslYrqs6Ag64uo64+F7Jy866GcIOydtOyaqe2VqeuLiOuLpC4g7J2867CY7KCB7Jy866GcIOy5qOyLpCwg7JqV7IukLCDrtoDsl4zsnbQg7Y+s7ZWo65Cp64uI64ukLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLqsJzsnbjsi6RcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwicHJpdmF0ZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLqsozsiqTtirjsl5Dqsowg6rCc7J24IOy5qOyLpOydtCDsoJzqs7XrkKnri4jri6QuIOy5qOyLpCDsnbTsmbjsnZgg6rO16rCE7J2AIOqzteyaqeydvCDsiJgg7J6I7Iq164uI64ukLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLri6Tsnbjsi6RcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwicHVibGljXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuqyjOyKpO2KuOuKlCDqsJzsnbgg6rO16rCEIOyXhuydtCwg64uk66W4IOyCrOuejOqzvCDtlajqu5gg7JOw64qUIOy5qOyLpOydtOuCmCDqs7Xsmqnqs7XqsITsl5DshJwg7IiZ67CV7ZWp64uI64ukLlwiLFxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGgyPuuTseuhne2VoCDsiJnshowg7KKF66WY64qUIOustOyXh+yduOqwgOyalD88L2gyPlxyXG4gICAgICAgICAgICA8aDM+MeuLqOqzhDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0b3IgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFyZ2VCdWlsZGluZ1R5cGUgfHwgdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIu2VmOuCmOulvCDshKDtg53tlbTso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e2Rpc2FibGVkTGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi7Jqw7ISgIOuylOychOulvCDsooHtmIDrs7zquYzsmpQ/XCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYXJnZUJ1aWxkaW5nVHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvciBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtidWlsZGluZ1R5cGUgfHwgdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6rG066y8IOycoO2YleydhCDshKDtg53tlZjshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtkZXRhaWxCdWlsZGluZ09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGFyZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2J1aWxkaW5nVHlwZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tcm9vbS10eXBlLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6rKM7Iqk7Yq46rCAIOusteqyjCDrkKAg7IiZ7IaMIOycoO2YleydhCDqs6jrnbzso7zshLjsmpQuXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Jvb21UeXBlUmFkaW9PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQnVpbGRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==