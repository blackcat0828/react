self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/staticData.ts":
/*!***************************!*\
  !*** ./lib/staticData.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monthList": function() { return /* binding */ monthList; },
/* harmony export */   "dayList": function() { return /* binding */ dayList; },
/* harmony export */   "yearList": function() { return /* binding */ yearList; },
/* harmony export */   "largeBuildingTypeList": function() { return /* binding */ largeBuildingTypeList; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
//* 1월부터 12월 까지
var monthList = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]; //* 1부터 31까지

var dayList = Array.from(Array(31), function (_, i) {
  return String(i + 1);
}); //* 2020년부터 1900년까지

var yearList = Array.from(Array(121), function (_, i) {
  return String(2020 - i);
}); //* 숙소 큰 범위의 건물 유형

var largeBuildingTypeList = ["아파트", "주택", "별채", "독특한 숙소", "B&B", "부티크호텔"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3N0YXRpY0RhdGEudHMiXSwibmFtZXMiOlsibW9udGhMaXN0IiwiZGF5TGlzdCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiU3RyaW5nIiwieWVhckxpc3QiLCJsYXJnZUJ1aWxkaW5nVHlwZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxJQUFNQSxTQUFTLEdBQUcsQ0FDckIsSUFEcUIsRUFFckIsSUFGcUIsRUFHckIsSUFIcUIsRUFJckIsSUFKcUIsRUFLckIsSUFMcUIsRUFNckIsSUFOcUIsRUFPckIsSUFQcUIsRUFRckIsSUFScUIsRUFTckIsSUFUcUIsRUFVckIsS0FWcUIsRUFXckIsS0FYcUIsRUFZckIsS0FacUIsQ0FBbEIsQyxDQWVQOztBQUNPLElBQU1DLE9BQU8sR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQyxFQUFELENBQWhCLEVBQXNCLFVBQUNFLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVVDLE1BQU0sQ0FBQ0QsQ0FBQyxHQUFHLENBQUwsQ0FBaEI7QUFBQSxDQUF0QixDQUFoQixDLENBRVA7O0FBQ08sSUFBTUUsUUFBUSxHQUFHTCxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDLEdBQUQsQ0FBaEIsRUFBdUIsVUFBQ0UsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsU0FBU0MsTUFBTSxDQUFDLE9BQU9ELENBQVIsQ0FBZjtBQUFBLENBQXZCLENBQWpCLEMsQ0FFUDs7QUFDTyxJQUFNRyxxQkFBcUIsR0FBRyxDQUNqQyxLQURpQyxFQUVqQyxJQUZpQyxFQUdqQyxJQUhpQyxFQUlqQyxRQUppQyxFQUtqQyxLQUxpQyxFQU1qQyxPQU5pQyxDQUE5QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQxYjc0NGI2YmU1MjZlMDZkNTAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyogMeyblOu2gO2EsCAxMuyblCDquYzsp4BcclxuZXhwb3J0IGNvbnN0IG1vbnRoTGlzdCA9IFtcclxuICAgIFwiMeyblFwiLFxyXG4gICAgXCIy7JuUXCIsXHJcbiAgICBcIjPsm5RcIixcclxuICAgIFwiNOyblFwiLFxyXG4gICAgXCI17JuUXCIsXHJcbiAgICBcIjbsm5RcIixcclxuICAgIFwiN+yblFwiLFxyXG4gICAgXCI47JuUXCIsXHJcbiAgICBcIjnsm5RcIixcclxuICAgIFwiMTDsm5RcIixcclxuICAgIFwiMTHsm5RcIixcclxuICAgIFwiMTLsm5RcIixcclxuXVxyXG5cclxuLy8qIDHrtoDthLAgMzHquYzsp4BcclxuZXhwb3J0IGNvbnN0IGRheUxpc3QgPSBBcnJheS5mcm9tKEFycmF5KDMxKSwgKF8sIGkpID0+IFN0cmluZyhpICsgMSkpO1xyXG5cclxuLy8qIDIwMjDrhYTrtoDthLAgMTkwMOuFhOq5jOyngFxyXG5leHBvcnQgY29uc3QgeWVhckxpc3QgPSBBcnJheS5mcm9tKEFycmF5KDEyMSksIChfLGkpID0+IFN0cmluZygyMDIwIC0gaSkpO1xyXG5cclxuLy8qIOyImeyGjCDtgbAg67KU7JyE7J2YIOqxtOusvCDsnKDtmJVcclxuZXhwb3J0IGNvbnN0IGxhcmdlQnVpbGRpbmdUeXBlTGlzdCA9IFtcclxuICAgIFwi7JWE7YyM7Yq4XCIsXHJcbiAgICBcIuyjvO2DnVwiLFxyXG4gICAgXCLrs4TssYRcIixcclxuICAgIFwi64+F7Yq57ZWcIOyImeyGjFwiLFxyXG4gICAgXCJCJkJcIixcclxuICAgIFwi67aA7Yuw7YGs7Zi47YWUXCIsXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==