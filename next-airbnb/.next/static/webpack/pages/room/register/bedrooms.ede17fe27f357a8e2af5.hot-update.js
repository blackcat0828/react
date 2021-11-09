self["webpackHotUpdate_N_E"]("pages/room/register/bedrooms",{

/***/ "./components/room/register/RegisterRoomBedTypes.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomBedTypes.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_Counter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Counter */ "./components/common/Counter.tsx");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\react\\next-airbnb\\components\\room\\register\\RegisterRoomBedTypes.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var Container = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.li.withConfig({
  displayName: "RegisterRoomBedTypes__Container",
  componentId: "sc-e0v542-0"
})(["width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}.register-room-bed-type-top{display:flex;justify-content:space-between;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}.register-room-bed-type-selector-wrapper{margin-top:28px;width:320px;}.register-room-bed-type-counters{width:320px;margin-top:28px;}.register-room-bed-type-counter{width:290px;margin-bottom:18px;}.register-room-bed-type-bedroom-counts{font-size:19px;color:", ";max-width:240px;word-break:keep-all;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_6__.default.gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_6__.default.gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_6__.default.gray_48, _styles_palette__WEBPACK_IMPORTED_MODULE_6__.default.gray_76);
_c = Container;

var RegisterRoomBedTypes = function RegisterRoomBedTypes(_ref) {
  _s();

  var bedroom = _ref.bedroom;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      opened = _useState[0],
      setOpened = _useState[1]; //* 선택된 침대 옵션들


  var initialBedOptions = bedroom.beds.map(function (bed) {
    return bed.type;
  }); //* 선택된 침대 옵션들

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialBedOptions),
      activedBedOptions = _useState2[0],
      setActivedBedOptions = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(); //* 침대 개수 총합

  var totalBedsCount = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    var total = 0;
    bedroom.beds.forEach(function (bed) {
      total += bed.count;
    });
    return total;
  }, [bedroom]); //* 남은 침대 옵션들

  var lastBedOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return _lib_staticData__WEBPACK_IMPORTED_MODULE_4__.bedTypes.filter(function (bedType) {
      return !activedBedOptions.includes(bedType);
    });
  }, [activedBedOptions, bedroom]); //* 침실유형 열고 닫기

  var toggleOpened = function toggleOpened() {
    return setOpened(!opened);
  }; //* 침실 침대 갯수 변경시


  var onChangeBedTypeCount = function onChangeBedTypeCount(value, type) {
    return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_5__.registerRoomActions.setBedTypeCount({
      bedroomId: bedroom.id,
      type: type,
      count: value
    }));
  }; //* 침대 종류 텍스트


  var bedsText = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    var texts = bedroom.beds.map(function (bed) {
      return "".concat(bed.type, " ").concat(bed.count, "\uAC1C");
    });
    return texts.join(",");
  }, [bedroom]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "register-room-bed-type-top",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "register-room-bed-type-bedroom",
          children: [bedroom.id, "\uBC88 \uCE68\uC2E4"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 33
          }, _this), bedsText]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
        onClick: toggleOpened,
        width: "161px",
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this), opened && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "register-room-bed-type-selector-wrapper",
      children: [activedBedOptions.map(function (type) {
        var _bedroom$beds$find;

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "register-room-bed-type-counter",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Counter__WEBPACK_IMPORTED_MODULE_8__.default, {
            label: type,
            value: ((_bedroom$beds$find = bedroom.beds.find(function (bed) {
              return bed.type === type;
            })) === null || _bedroom$beds$find === void 0 ? void 0 : _bedroom$beds$find.count) || 0,
            onChange: function onChange(value) {
              onChangeBedTypeCount(value, type);
            }
          }, type, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, _this)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, _this);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Selector__WEBPACK_IMPORTED_MODULE_9__.default, {
        type: "register",
        options: lastBedOptions,
        defaultValue: "\uB2E4\uB978 \uCE68\uB300 \uCD94\uAC00",
        value: "\uB2E4\uB978 \uCE68\uB300 \uCD94\uAC00",
        disabledOptions: ["다른 침대 추가"],
        useValidation: false,
        onChange: function onChange(e) {
          return setActivedBedOptions([].concat((0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(activedBedOptions), [e.target.value]));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, _this);
};

_s(RegisterRoomBedTypes, "oZuDeA3C+Uz8BZ4x2EG2UwDNOGE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch];
});

_c2 = RegisterRoomBedTypes;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBedTypes);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterRoomBedTypes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiUmVnaXN0ZXJSb29tQmVkVHlwZXMiLCJiZWRyb29tIiwidXNlU3RhdGUiLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJpbml0aWFsQmVkT3B0aW9ucyIsImJlZHMiLCJtYXAiLCJiZWQiLCJ0eXBlIiwiYWN0aXZlZEJlZE9wdGlvbnMiLCJzZXRBY3RpdmVkQmVkT3B0aW9ucyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b3RhbEJlZHNDb3VudCIsInVzZU1lbW8iLCJ0b3RhbCIsImZvckVhY2giLCJjb3VudCIsImxhc3RCZWRPcHRpb25zIiwiYmVkVHlwZXMiLCJiZWRUeXBlIiwiaW5jbHVkZXMiLCJ0b2dnbGVPcGVuZWQiLCJvbkNoYW5nZUJlZFR5cGVDb3VudCIsInZhbHVlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsImJlZHJvb21JZCIsImlkIiwiYmVkc1RleHQiLCJ0ZXh0cyIsImpvaW4iLCJmaW5kIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEscWhCQUdXQyw0REFIWCxFQUtnQkEsNERBTGhCLEVBY0ZBLDREQWRFLEVBK0JGQSw0REEvQkUsQ0FBZjtLQUFNRixTOztBQXlDTixJQUFNRyxvQkFBc0MsR0FBRyxTQUF6Q0Esb0JBQXlDLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUNsQ0MsK0NBQVEsQ0FBQyxLQUFELENBRDBCO0FBQUEsTUFDdkRDLE1BRHVEO0FBQUEsTUFDL0NDLFNBRCtDLGlCQUU5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QUFrR04sK0RBQWVBLG9CQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYmVkcm9vbXMuZWRlMTdmZTI3ZjM1N2E4ZTJhZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBiZWRUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHsgQmVkVHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9yb29tXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbW1vbi9CdXR0b25cIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9Db3VudGVyXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQubGlgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjhweCAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbSB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNDh9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVycyB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyIHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20tY291bnRzIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgYmVkcm9vbTogeyBpZDogbnVtYmVyOyBiZWRzOiB7IHR5cGU6IEJlZFR5cGU7IGNvdW50OiBudW1iZXIgfVtdIH07XHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgYmVkcm9vbSB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyog7ISg7YOd65CcIOy5qOuMgCDsmLXshZjrk6RcclxuICBjb25zdCBpbml0aWFsQmVkT3B0aW9ucyA9IGJlZHJvb20uYmVkcy5tYXAoKGJlZCkgPT4gYmVkLnR5cGUpO1xyXG5cclxuICAvLyog7ISg7YOd65CcIOy5qOuMgCDsmLXshZjrk6RcclxuICBjb25zdCBbYWN0aXZlZEJlZE9wdGlvbnMsIHNldEFjdGl2ZWRCZWRPcHRpb25zXSA9IHVzZVN0YXRlPEJlZFR5cGVbXT4oXHJcbiAgICBpbml0aWFsQmVkT3B0aW9uc1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgLy8qIOy5qOuMgCDqsJzsiJgg7LSd7ZWpXHJcbiAgY29uc3QgdG90YWxCZWRzQ291bnQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICBiZWRyb29tLmJlZHMuZm9yRWFjaCgoYmVkKSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IGJlZC5jb3VudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH0sIFtiZWRyb29tXSk7XHJcblxyXG4gIC8vKiDrgqjsnYAg7Lmo64yAIOyYteyFmOuTpFxyXG4gIGNvbnN0IGxhc3RCZWRPcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gYmVkVHlwZXMuZmlsdGVyKChiZWRUeXBlKSA9PiAhYWN0aXZlZEJlZE9wdGlvbnMuaW5jbHVkZXMoYmVkVHlwZSkpO1xyXG4gIH0sIFthY3RpdmVkQmVkT3B0aW9ucywgYmVkcm9vbV0pO1xyXG5cclxuICAvLyog7Lmo7Iuk7Jyg7ZiVIOyXtOqzoCDri6vquLBcclxuICBjb25zdCB0b2dnbGVPcGVuZWQgPSAoKSA9PiBzZXRPcGVuZWQoIW9wZW5lZCk7XHJcblxyXG4gIC8vKiDsuajsi6Qg7Lmo64yAIOqwr+yImCDrs4Dqsr3si5xcclxuICBjb25zdCBvbkNoYW5nZUJlZFR5cGVDb3VudCA9ICh2YWx1ZTogbnVtYmVyLCB0eXBlOiBCZWRUeXBlKSA9PlxyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QmVkVHlwZUNvdW50KHtcclxuICAgICAgICBiZWRyb29tSWQ6IGJlZHJvb20uaWQsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBjb3VudDogdmFsdWUsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAvLyog7Lmo64yAIOyiheulmCDthY3siqTtirhcclxuICBjb25zdCBiZWRzVGV4dCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dHMgPSBiZWRyb29tLmJlZHMubWFwKChiZWQpID0+IGAke2JlZC50eXBlfSAke2JlZC5jb3VudH3qsJxgKTtcclxuICAgIHJldHVybiB0ZXh0cy5qb2luKFwiLFwiKTtcclxuICB9LCBbYmVkcm9vbV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLXRvcFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb21cIj57YmVkcm9vbS5pZH3rsogg7Lmo7IukPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLWNvdW50c1wiPlxyXG4gICAgICAgICAgICDsuajrjIAge3RvdGFsQmVkc0NvdW50feqwnDxiciAvPlxyXG4gICAgICAgICAgICB7YmVkc1RleHR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVPcGVuZWR9IHdpZHRoPVwiMTYxcHhcIj5cclxuICAgICAgICAgIHtvcGVuZWQgJiYgXCLsmYTro4xcIn1cclxuICAgICAgICAgIHshb3BlbmVkICYmXHJcbiAgICAgICAgICAgICh0b3RhbEJlZHNDb3VudCA9PT0gMCA/IFwi7Lmo64yAIOy2lOqwgO2VmOq4sFwiIDogXCLsuajrjIAg7IiY7KCV7ZWY6riwXCIpfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtvcGVuZWQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICB7YWN0aXZlZEJlZE9wdGlvbnMubWFwKCh0eXBlKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyXCIga2V5PXt0eXBlfT5cclxuICAgICAgICAgICAgICA8Q291bnRlclxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgIGJlZHJvb20uYmVkcy5maW5kKChiZWQpID0+IGJlZC50eXBlID09PSB0eXBlKT8uY291bnQgfHwgMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZUJlZFR5cGVDb3VudCh2YWx1ZSwgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgb3B0aW9ucz17bGFzdEJlZE9wdGlvbnN9XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIuuLpOuluCDsuajrjIAg7LaU6rCAXCJcclxuICAgICAgICAgICAgdmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17W1wi64uk66W4IOy5qOuMgCDstpTqsIBcIl19XHJcbiAgICAgICAgICAgIHVzZVZhbGlkYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgc2V0QWN0aXZlZEJlZE9wdGlvbnMoW1xyXG4gICAgICAgICAgICAgICAgLi4uYWN0aXZlZEJlZE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSBhcyBCZWRUeXBlLFxyXG4gICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQmVkVHlwZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=