self["webpackHotUpdate_N_E"]("pages/room/register/bedrooms",{

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
    },
    //* 최대 숙박 인원 변경하기
    setMaximumGuestCount: function setMaximumGuestCount(state, action) {
      state.maximumGuestCount = action.payload;
      return state;
    },
    //* 침실 개수 변경하기
    setBedroomCount: function setBedroomCount(state, action) {
      var bedroomCount = action.payload;
      var bedList = state.bedList;
      state.bedroomCount = bedroomCount;

      if (bedroomCount < bedList.length) {
        //* 기존 침대 개수가 더 많으면 초과 부분 잘라내기
        bedList = state.bedList.slice(0, bedroomCount);
      } else {
        //* 변경될 침대 개수가 더 많으면 나머지 침실 채우기
        for (var i = bedList.length + 1; i < bedroomCount + 1; i += 1) {
          bedList.push({
            id: i,
            beds: []
          });
        }
      }

      state.bedList = Array.from(Array(bedroomCount), function (_, index) {
        return {
          id: index + 1,
          beds: []
        };
      });
      return state;
    },
    //* 최대 침실 개수 변경하기
    setBedCount: function setBedCount(state, action) {
      state.bedCount = action.payload;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJyZWdpc3RlclJvb20iLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0QnVpbGRpbmdUeXBlIiwic2V0Um9vbVR5cGUiLCJzZXRJc1NldFVwRm9yR3Vlc3QiLCJzZXRNYXhpbXVtR3Vlc3RDb3VudCIsInNldEJlZHJvb21Db3VudCIsImxlbmd0aCIsInNsaWNlIiwiaSIsInB1c2giLCJpZCIsImJlZHMiLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJzZXRCZWRDb3VudCIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnQkE7QUFDQSxJQUFNQSxZQUErQixHQUFHO0FBQ3BDO0FBQ0FDLG1CQUFpQixFQUFFLElBRmlCO0FBR3BDO0FBQ0FDLGNBQVksRUFBRSxJQUpzQjtBQUtwQztBQUNBQyxVQUFRLEVBQUUsSUFOMEI7QUFPcEM7QUFDQUMsaUJBQWUsRUFBRSxJQVJtQjtBQVNwQztBQUNBQyxtQkFBaUIsRUFBRSxDQVZpQjtBQVdwQztBQUNBQyxjQUFZLEVBQUUsQ0Fac0I7QUFhcEM7QUFDQUMsVUFBUSxFQUFFLENBZDBCO0FBZXBDO0FBQ0FDLFNBQU8sRUFBRSxFQWhCMkI7QUFpQnBDO0FBQ0FDLGVBQWEsRUFBRTtBQWxCcUIsQ0FBeEM7QUFzQkEsSUFBTUMsWUFBWSxHQUFHQyw2REFBVyxDQUFDO0FB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QUFDeUIsT0FBcEIsQ0FBekI7QUFFUCwrREFBZXpCLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9iZWRyb29tcy4xNjRmYjczMmU0NjkxNjQxYTI5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBiZWRyb29tQ291bnRMaXN0IH0gZnJvbSBcIi4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7IEJlZFR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVwiO1xyXG5cclxudHlwZSBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcm9vbVR5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgbWF4aW11bUd1ZXN0Q291bnQ6IG51bWJlcjtcclxuICAgIGJlZHJvb21Db3VudDogbnVtYmVyO1xyXG4gICAgYmVkQ291bnQ6IG51bWJlcjtcclxuICAgIGJlZExpc3Q6IHtpZDpudW1iZXI7IGJlZHM6IHsgdHlwZTogQmVkVHlwZTsgY291bnQ6IG51bWJlcn1bXX1bXTtcclxuICAgIHB1YmxpY0JlZExpc3Q6IHt0eXBlOiBCZWRUeXBlOyBjb3VudDogbnVtYmVyfVtdO1xyXG59XHJcblxyXG4vLyog7LSI6riwIOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgLy8qIOqxtOusvCDsnKDtmJUg7YGwIOuylOyjvFxyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IG51bGwsXHJcbiAgICAvLyog6rG066y8IOycoO2YlVxyXG4gICAgYnVpbGRpbmdUeXBlOiBudWxsLFxyXG4gICAgLy8qIOyImeyGjCDsnKDtmJVcclxuICAgIHJvb21UeXBlOiBudWxsLFxyXG4gICAgLy8qIOqyjOyKpO2KuOunjOydhCDsnITtlbQg66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgFxyXG4gICAgaXNTZXRVcEZvckd1ZXN0OiBudWxsLFxyXG4gICAgLy8qIOy1nOuMgCDsiJnrsJUg7J247JuQXHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDogMSxcclxuICAgIC8vKiDsuajsi6Qg6rCc7IiYXHJcbiAgICBiZWRyb29tQ291bnQ6IDAsXHJcbiAgICAvLyog7Lmo64yAIOqwnOyImFxyXG4gICAgYmVkQ291bnQ6IDEsXHJcbiAgICAvLyog7Lmo64yAIOycoO2YlVxyXG4gICAgYmVkTGlzdDogW10sXHJcbiAgICAvLyog6rO17Jqp6rO16rCEIOy5qOuMgCDsnKDtmJVcclxuICAgIHB1YmxpY0JlZExpc3Q6IFtdLFxyXG5cclxufVxyXG5cclxuY29uc3QgcmVnaXN0ZXJSb29tID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJyZWdpc3RlclJvb21cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgLy8qIO2BsCDqsbTrrLwg7Jyg7ZiVIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldExhcmdlQnVpbGRpbmdUeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc3RhdGUubGFyZ2VCdWlsZGluZ1R5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vKiDqsbTrrLwg7Jyg7ZiVIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmJ1aWxkaW5nVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuYnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vKiDsiJnshowg7Jyg7ZiVIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldFJvb21UeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248XCJlbnRpcmVcIiB8IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5yb29tVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyog6rKM7Iqk7Yq47JqpIOyImeyGjOyduOyngCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRJc1NldFVwRm9yR3Vlc3Qoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2V0VXBGb3JHdWVzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyog7LWc64yAIOyImeuwlSDsnbjsm5Ag67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TWF4aW11bUd1ZXN0Q291bnQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUubWF4aW11bUd1ZXN0Q291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOy5qOyLpCDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkcm9vbUNvdW50KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlZHJvb21Db3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBsZXQgeyBiZWRMaXN0IH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmJlZHJvb21Db3VudCA9IGJlZHJvb21Db3VudDtcclxuXHJcbiAgICAgICAgICAgIGlmKGJlZHJvb21Db3VudCA8IGJlZExpc3QubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIC8vKiDquLDsobQg7Lmo64yAIOqwnOyImOqwgCDrjZQg66eO7Jy866m0IOy0iOqzvCDrtoDrtoQg7J6Y652864K06riwXHJcbiAgICAgICAgICAgICAgICBiZWRMaXN0ID0gc3RhdGUuYmVkTGlzdC5zbGljZSgwLCBiZWRyb29tQ291bnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8qIOuzgOqyveuQoCDsuajrjIAg6rCc7IiY6rCAIOuNlCDrp47snLzrqbQg64KY66i47KeAIOy5qOyLpCDssYTsmrDquLBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBiZWRMaXN0Lmxlbmd0aCArIDE7IGkgPCBiZWRyb29tQ291bnQgKyAxOyBpICs9IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZExpc3QucHVzaCh7aWQ6IGksIGJlZHM6IFtdfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmJlZExpc3QgPSBBcnJheS5mcm9tKEFycmF5KGJlZHJvb21Db3VudCksIChfLCBpbmRleCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICBiZWRzOiBbXSxcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOy1nOuMgCDsuajsi6Qg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZENvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmJlZENvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSb29tQWN0aW9ucyA9IHsuLi5yZWdpc3RlclJvb20uYWN0aW9uc307XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclJvb207Il0sInNvdXJjZVJvb3QiOiIifQ==