self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/registerRoom.ts":
/*!*******************************!*\
  !*** ./store/registerRoom.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoomActions": function() { return /* binding */ registerRoomActions; }
/* harmony export */ });
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


//* 초기 상태
var initialState = {
  //* 건물 유형 큰 범주
  largeBuildingType: null,
  //* 건물 유형
  buildingType: null,
  //* 숙소 유형
  roomType: null,
  //* 게스트만을 위해 만들어진 숙소인가
  isSetUpForGuest: null,
  //* 최대 숙박 인원
  maximumGuestCount: 1,
  //* 침실 개수
  bedroomCount: 0,
  //* 침대 개수
  bedCount: 1,
  //* 침대 유형
  bedList: [],
  //* 공용공간 침대 유형
  publicBedList: []
};
var registerRoom = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: "registerRoom",
  initialState: initialState,
  reducers: {
    //* 큰 건물 유형 변경하기
    setLargeBuildingType: function setLargeBuildingType(state, action) {
      if (action.payload === "") {
        state.largeBuildingType = null;
      }

      state.largeBuildingType = action.payload;
      return state;
    },
    //* 건물 유형 변경하기
    setBuildingType: function setBuildingType(state, action) {
      if (action.payload === "") {
        state.buildingType = null;
      }

      state.buildingType = action.payload;
      return state;
    },
    //* 숙소 유형 변경하기
    setRoomType: function setRoomType(state, action) {
      state.roomType = action.payload;
      return state;
    },
    //* 게스트용 숙소인지 변경하기
    setIsSetUpForGuest: function setIsSetUpForGuest(state, action) {
      state.isSetUpForGuest = action.payload;
      return state;
    }
  }
});
var registerRoomActions = _objectSpread({}, registerRoom.actions);
/* harmony default export */ __webpack_exports__["default"] = (registerRoom);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJyZWdpc3RlclJvb20iLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0QnVpbGRpbmdUeXBlIiwic2V0Um9vbVR5cGUiLCJzZXRJc1NldFVwRm9yR3Vlc3QiLCJyZWdpc3RlclJvb21BY3Rpb25zIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZUE7QUFDQSxJQUFNQSxZQUErQixHQUFHO0FBQ3BDO0FBQ0FDLG1CQUFpQixFQUFFLElBRmlCO0FBR3BDO0FBQ0FDLGNBQVksRUFBRSxJQUpzQjtBQUtwQztBQUNBQyxVQUFRLEVBQUUsSUFOMEI7QUFPcEM7QUFDQUMsaUJBQWUsRUFBRSxJQVJtQjtBQVNwQztBQUNBQyxtQkFBaUIsRUFBRSxDQVZpQjtBQVdwQztBQUNBQyxjQUFZLEVBQUUsQ0Fac0I7QUFhcEM7QUFDQUMsVUFBUSxFQUFFLENBZDBCO0FBZXBDO0FBQ0FDLFNBQU8sRUFBRSxFQWhCMkI7QUFpQnBDO0FBQ0FDLGVBQWEsRUFBRTtBQWxCcUIsQ0FBeEM7QUFzQkEsSUFBTUMsWUFBWSxHQUFHQyw2REFBVyxDQUFDO0FBQzdCQyxNQUFJLEVBQUUsY0FEdUI7QUFFN0JaLGNBQVksRUFBWkEsWUFGNkI7QUFHN0JhLFVBQVEsRUFBRTtBQUNOO0FBQ0FDLHdCQUZNLGdDQUVlQyxLQUZmLEVBRXNCQyxNQUZ0QixFQUVxRDtBQUN2RCxVQUFJQSxNQUFNLENBQUNDLE9BQVAsS0FBbUIsRUFBdkIsRUFBMkI7QUFDM0JGLGFBQUssQ0FBQ2QsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQzs7QUFDRGMsV0FBSyxDQUFDZCxpQkFBTixHQUEwQmUsTUFBTSxDQUFDQyxPQUFqQztBQUNBLGFBQU9GLEtBQVA7QUFDSCxLQVJLO0FBU047QUFDQUcsbUJBVk0sMkJBVVVILEtBVlYsRUFVaUJDLE1BVmpCLEVBVWdEO0FBQ2xELFVBQUlBLE1BQU0sQ0FBQ0MsT0FBUCxLQUFtQixFQUF2QixFQUEyQjtBQUMzQkYsYUFBSyxDQUFDYixZQUFOLEdBQXFCLElBQXJCO0FBQ0M7O0FBQ0RhLFdBQUssQ0FBQ2IsWUFBTixHQUFxQmMsTUFBTSxDQUFDQyxPQUE1QjtBQUNBLGFBQU9GLEtBQVA7QUFDSCxLQWhCSztBQWlCTjtBQUNBSSxlQWxCTSx1QkFrQk1KLEtBbEJOLEVBa0JhQyxNQWxCYixFQWtCb0U7QUFDdEVELFdBQUssQ0FBQ1osUUFBTixHQUFpQmEsTUFBTSxDQUFDQyxPQUF4QjtBQUNBLGFBQU9GLEtBQVA7QUFDSCxLQXJCSztBQXNCTjtBQUNBSyxzQkF2Qk0sOEJBdUJhTCxLQXZCYixFQXVCb0JDLE1BdkJwQixFQXVCbUQ7QUFDckRELFdBQUssQ0FBQ1gsZUFBTixHQUF3QlksTUFBTSxDQUFDQyxPQUEvQjtBQUNBLGFBQU9GLEtBQVA7QUFDSDtBQTFCSztBQUhtQixDQUFELENBQWhDO0FBbUNPLElBQU1NLG1CQUFtQixxQkFBT1gsWUFBWSxDQUFDWSxPQUFwQixDQUF6QjtBQUVQLCtEQUFlWixZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjA1NTk2NDJkYTNmNjM4NjkyNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgQmVkVHlwZSB9IGZyb20gXCIuLi90eXBlcy9yb29tXCI7XHJcblxyXG50eXBlIFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBidWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICByb29tVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGlzU2V0VXBGb3JHdWVzdDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDogbnVtYmVyO1xyXG4gICAgYmVkcm9vbUNvdW50OiBudW1iZXI7XHJcbiAgICBiZWRDb3VudDogbnVtYmVyO1xyXG4gICAgYmVkTGlzdDoge2lkOm51bWJlcjsgYmVkczogeyB0eXBlOiBCZWRUeXBlOyBjb3VudDogbnVtYmVyfVtdfVtdO1xyXG4gICAgcHVibGljQmVkTGlzdDoge3R5cGU6IEJlZFR5cGU7IGNvdW50OiBudW1iZXJ9W107XHJcbn1cclxuXHJcbi8vKiDstIjquLAg7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICAvLyog6rG066y8IOycoO2YlSDtgbAg67KU7KO8XHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogbnVsbCxcclxuICAgIC8vKiDqsbTrrLwg7Jyg7ZiVXHJcbiAgICBidWlsZGluZ1R5cGU6IG51bGwsXHJcbiAgICAvLyog7IiZ7IaMIOycoO2YlVxyXG4gICAgcm9vbVR5cGU6IG51bGwsXHJcbiAgICAvLyog6rKM7Iqk7Yq466eM7J2EIOychO2VtCDrp4zrk6TslrTsp4Qg7IiZ7IaM7J246rCAXHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6IG51bGwsXHJcbiAgICAvLyog7LWc64yAIOyImeuwlSDsnbjsm5BcclxuICAgIG1heGltdW1HdWVzdENvdW50OiAxLFxyXG4gICAgLy8qIOy5qOyLpCDqsJzsiJhcclxuICAgIGJlZHJvb21Db3VudDogMCxcclxuICAgIC8vKiDsuajrjIAg6rCc7IiYXHJcbiAgICBiZWRDb3VudDogMSxcclxuICAgIC8vKiDsuajrjIAg7Jyg7ZiVXHJcbiAgICBiZWRMaXN0OiBbXSxcclxuICAgIC8vKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlVxyXG4gICAgcHVibGljQmVkTGlzdDogW10sXHJcblxyXG59XHJcblxyXG5jb25zdCByZWdpc3RlclJvb20gPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInJlZ2lzdGVyUm9vbVwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICAvLyog7YGwIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TGFyZ2VCdWlsZGluZ1R5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXJnZUJ1aWxkaW5nVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUubGFyZ2VCdWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QnVpbGRpbmdUeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc3RhdGUuYnVpbGRpbmdUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOyImeyGjCDsnKDtmJUg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0Um9vbVR5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxcImVudGlyZVwiIHwgXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiPil7XHJcbiAgICAgICAgICAgIHN0YXRlLnJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vKiDqsozsiqTtirjsmqkg7IiZ7IaM7J247KeAIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldElzU2V0VXBGb3JHdWVzdChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KXtcclxuICAgICAgICAgICAgc3RhdGUuaXNTZXRVcEZvckd1ZXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSb29tQWN0aW9ucyA9IHsuLi5yZWdpc3RlclJvb20uYWN0aW9uc307XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclJvb207Il0sInNvdXJjZVJvb3QiOiIifQ==