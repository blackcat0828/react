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
/* harmony import */ var C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
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
var registerRoom = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
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

      state.bedList = bedList;
      return state;
    },
    //* 최대 침실 개수 변경하기
    setBedCount: function setBedCount(state, action) {
      state.bedCount = action.payload;
      return state;
    },
    //* 침대 유형 갯수 변경하기
    setBedTypeCount: function setBedTypeCount(state, action) {
      var _action$payload = action.payload,
          bedroomId = _action$payload.bedroomId,
          type = _action$payload.type,
          count = _action$payload.count;
      var bedroom = state.bedList[bedroomId - 1];
      var prevBeds = bedroom.beds;
      var index = prevBeds.findIndex(function (bed) {
        return bed.type === type;
      });

      if (index === -1) {
        //* 타입이 없다면
        state.bedList[bedroomId - 1].beds = [].concat((0,C_react_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prevBeds), [{
          type: type,
          count: count
        }]);
        return state;
      } //* 타입이 존재한다면


      if (count === 0) {
        state.bedList[bedroomId - 1].beds.splice(index, 1);
      } else {
        state.bedList[bedroomId - 1].beds[index].count = count;
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJyZWdpc3RlclJvb20iLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0QnVpbGRpbmdUeXBlIiwic2V0Um9vbVR5cGUiLCJzZXRJc1NldFVwRm9yR3Vlc3QiLCJzZXRNYXhpbXVtR3Vlc3RDb3VudCIsInNldEJlZHJvb21Db3VudCIsImxlbmd0aCIsInNsaWNlIiwiaSIsInB1c2giLCJpZCIsImJlZHMiLCJzZXRCZWRDb3VudCIsInNldEJlZFR5cGVDb3VudCIsImJlZHJvb21JZCIsInR5cGUiLCJjb3VudCIsImJlZHJvb20iLCJwcmV2QmVkcyIsImluZGV4IiwiZmluZEluZGV4IiwiYmVkIiwic3BsaWNlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0JBO0FBQ0EsSUFBTUEsWUFBK0IsR0FBRztBQUNwQztBQUNBQyxtQkFBaUIsRUFBRSxJQUZpQjtBQUdwQztBQUNBQyxjQUFZLEVBQUUsSUFKc0I7QUFLcEM7QUFDQUMsVUFBUSxFQUFFLElBTjBCO0FBT3BDO0FBQ0FDLGlCQUFlLEVBQUUsSUFSbUI7QUFTcEM7QUFDQUMsbUJBQWlCLEVBQUUsQ0FWaUI7QUFXcEM7QUFDQUMsY0FBWSxFQUFFLENBWnNCO0FBYXBDO0FBQ0FDLFVBQVEsRUFBRSxDQWQwQjtBQWVwQztBQUNBQyxTQUFPLEVBQUUsRUFo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LElBRG5CO0FBQUEsVUFDeUJDLEtBRHpCLG1CQUN5QkEsS0FEekI7QUFHQSxVQUFNQyxPQUFPLEdBQUduQixLQUFLLENBQUNQLE9BQU4sQ0FBY3VCLFNBQVMsR0FBRyxDQUExQixDQUFoQjtBQUVBLFVBQU1JLFFBQVEsR0FBR0QsT0FBTyxDQUFDTixJQUF6QjtBQUNBLFVBQU1RLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxTQUFULENBQW1CLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNOLElBQUosS0FBYUEsSUFBdEI7QUFBQSxPQUFuQixDQUFkOztBQUNBLFVBQUlJLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEI7QUFDQXJCLGFBQUssQ0FBQ1AsT0FBTixDQUFjdUIsU0FBUyxHQUFHLENBQTFCLEVBQTZCSCxJQUE3QixxSkFBd0NPLFFBQXhDLElBQWtEO0FBQUVILGNBQUksRUFBSkEsSUFBRjtBQUFRQyxlQUFLLEVBQUxBO0FBQVIsU0FBbEQ7QUFDQSxlQUFPbEIsS0FBUDtBQUNELE9BWEQsQ0FZQTs7O0FBQ0EsVUFBSWtCLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZsQixhQUFLLENBQUNQLE9BQU4sQ0FBY3VCLFNBQVMsR0FBRyxDQUExQixFQUE2QkgsSUFBN0IsQ0FBa0NXLE1BQWxDLENBQXlDSCxLQUF6QyxFQUFnRCxDQUFoRDtBQUNELE9BRkQsTUFFTztBQUNMckIsYUFBSyxDQUFDUCxPQUFOLENBQWN1QixTQUFTLEdBQUcsQ0FBMUIsRUFBNkJILElBQTdCLENBQWtDUSxLQUFsQyxFQUF5Q0gsS0FBekMsR0FBaURBLEtBQWpEO0FBQ0Q7O0FBQ0QsYUFBT2xCLEtBQVA7QUFDRDtBQWpGSztBQUhtQixDQUFELENBQWhDO0FBMEZPLElBQU15QixtQkFBbUIscUJBQU85QixZQUFZLENBQUMrQixPQUFwQixDQUF6QjtBQUVQLCtEQUFlL0IsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2JlZHJvb21zLjg2OGI4YTIzNmZmMWM2OGZmMjc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGJlZHJvb21Db3VudExpc3QgfSBmcm9tIFwiLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHsgQmVkVHlwZSB9IGZyb20gXCIuLi90eXBlcy9yb29tXCI7XHJcblxyXG50eXBlIFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBidWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICByb29tVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGlzU2V0VXBGb3JHdWVzdDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDogbnVtYmVyO1xyXG4gICAgYmVkcm9vbUNvdW50OiBudW1iZXI7XHJcbiAgICBiZWRDb3VudDogbnVtYmVyO1xyXG4gICAgYmVkTGlzdDoge2lkOm51bWJlcjsgYmVkczogeyB0eXBlOiBCZWRUeXBlOyBjb3VudDogbnVtYmVyfVtdfVtdO1xyXG4gICAgcHVibGljQmVkTGlzdDoge3R5cGU6IEJlZFR5cGU7IGNvdW50OiBudW1iZXJ9W107XHJcbn1cclxuXHJcbi8vKiDstIjquLAg7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICAvLyog6rG066y8IOycoO2YlSDtgbAg67KU7KO8XHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogbnVsbCxcclxuICAgIC8vKiDqsbTrrLwg7Jyg7ZiVXHJcbiAgICBidWlsZGluZ1R5cGU6IG51bGwsXHJcbiAgICAvLyog7IiZ7IaMIOycoO2YlVxyXG4gICAgcm9vbVR5cGU6IG51bGwsXHJcbiAgICAvLyog6rKM7Iqk7Yq466eM7J2EIOychO2VtCDrp4zrk6TslrTsp4Qg7IiZ7IaM7J246rCAXHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6IG51bGwsXHJcbiAgICAvLyog7LWc64yAIOyImeuwlSDsnbjsm5BcclxuICAgIG1heGltdW1HdWVzdENvdW50OiAxLFxyXG4gICAgLy8qIOy5qOyLpCDqsJzsiJhcclxuICAgIGJlZHJvb21Db3VudDogMCxcclxuICAgIC8vKiDsuajrjIAg6rCc7IiYXHJcbiAgICBiZWRDb3VudDogMSxcclxuICAgIC8vKiDsuajrjIAg7Jyg7ZiVXHJcbiAgICBiZWRMaXN0OiBbXSxcclxuICAgIC8vKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlVxyXG4gICAgcHVibGljQmVkTGlzdDogW10sXHJcblxyXG59XHJcblxyXG5jb25zdCByZWdpc3RlclJvb20gPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInJlZ2lzdGVyUm9vbVwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICAvLyog7YGwIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TGFyZ2VCdWlsZGluZ1R5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXJnZUJ1aWxkaW5nVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUubGFyZ2VCdWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QnVpbGRpbmdUeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc3RhdGUuYnVpbGRpbmdUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOyImeyGjCDsnKDtmJUg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0Um9vbVR5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxcImVudGlyZVwiIHwgXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiPil7XHJcbiAgICAgICAgICAgIHN0YXRlLnJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vKiDqsozsiqTtirjsmqkg7IiZ7IaM7J247KeAIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldElzU2V0VXBGb3JHdWVzdChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KXtcclxuICAgICAgICAgICAgc3RhdGUuaXNTZXRVcEZvckd1ZXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vKiDstZzrjIAg7IiZ67CVIOyduOybkCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRNYXhpbXVtR3Vlc3RDb3VudChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5tYXhpbXVtR3Vlc3RDb3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyog7Lmo7IukIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRyb29tQ291bnQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgY29uc3QgYmVkcm9vbUNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGxldCB7IGJlZExpc3QgfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuYmVkcm9vbUNvdW50ID0gYmVkcm9vbUNvdW50O1xyXG5cclxuICAgICAgICAgICAgaWYoYmVkcm9vbUNvdW50IDwgYmVkTGlzdC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgLy8qIOq4sOyhtCDsuajrjIAg6rCc7IiY6rCAIOuNlCDrp47snLzrqbQg7LSI6rO8IOu2gOu2hCDsnpjrnbzrgrTquLBcclxuICAgICAgICAgICAgICAgIGJlZExpc3QgPSBzdGF0ZS5iZWRMaXN0LnNsaWNlKDAsIGJlZHJvb21Db3VudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyog67OA6rK965CgIOy5qOuMgCDqsJzsiJjqsIAg642UIOunjuycvOuptCDrgpjrqLjsp4Ag7Lmo7IukIOyxhOyasOq4sFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGJlZExpc3QubGVuZ3RoICsgMTsgaSA8IGJlZHJvb21Db3VudCArIDE7IGkgKz0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVkTGlzdC5wdXNoKHtpZDogaSwgYmVkczogW119KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUuYmVkTGlzdCA9IGJlZExpc3Q7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyog7LWc64yAIOy5qOyLpCDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgc3RhdGUuYmVkQ291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOy5qOuMgCDsnKDtmJUg6rCv7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZFR5cGVDb3VudChcclxuICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgYmVkcm9vbUlkOiBudW1iZXI7IHR5cGU6IEJlZFR5cGU7IGNvdW50OiBudW1iZXIgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IHsgYmVkcm9vbUlkLCB0eXBlLCBjb3VudCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBcclxuICAgICAgICAgIGNvbnN0IGJlZHJvb20gPSBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdO1xyXG4gICAgXHJcbiAgICAgICAgICBjb25zdCBwcmV2QmVkcyA9IGJlZHJvb20uYmVkcztcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJldkJlZHMuZmluZEluZGV4KChiZWQpID0+IGJlZC50eXBlID09PSB0eXBlKTtcclxuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgLy8qIO2DgOyeheydtCDsl4bri6TrqbRcclxuICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzID0gWy4uLnByZXZCZWRzLCB7IHR5cGUsIGNvdW50IH1dO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyog7YOA7J6F7J20IOyhtOyerO2VnOuLpOuptFxyXG4gICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV0uYmVkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzW2luZGV4XS5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSb29tQWN0aW9ucyA9IHsuLi5yZWdpc3RlclJvb20uYWN0aW9uc307XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclJvb207Il0sInNvdXJjZVJvb3QiOiIifQ==