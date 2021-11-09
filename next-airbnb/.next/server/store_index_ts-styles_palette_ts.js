exports.id = "store_index_ts-styles_palette_ts";
exports.ids = ["store_index_ts-styles_palette_ts"];
exports.modules = {

/***/ "./store/auth.ts":
/*!***********************!*\
  !*** ./store/auth.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authActions": function() { return /* binding */ authActions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //* 초기 상태

const initialState = {
  authMode: "signup"
};
const auth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "auth",
  initialState,
  reducers: {
    //* 인증 팝업 변경하기
    setAuthMode(state, action) {
      state.authMode = action.payload;
    }

  }
});
const authActions = _objectSpread({}, auth.actions);
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./store/common.ts":
/*!*************************!*\
  !*** ./store/common.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commonActions": function() { return /* binding */ commonActions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


//* 초기 상태
const initialState = {
  validateMode: false
};
const common = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "common",
  initialState,
  reducers: {
    //* validateMode 변경하기
    setValidateMode(state, action) {
      state.validateMode = action.payload;
    }

  }
});
const commonActions = _objectSpread({}, common.actions);
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSelector": function() { return /* binding */ useSelector; },
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./store/user.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./store/common.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ "./store/auth.ts");
/* harmony import */ var _registerRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerRoom */ "./store/registerRoom.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  common: _common__WEBPACK_IMPORTED_MODULE_4__.default.reducer,
  user: _user__WEBPACK_IMPORTED_MODULE_3__.default.reducer,
  auth: _auth__WEBPACK_IMPORTED_MODULE_5__.default.reducer,
  registerRoom: _registerRoom__WEBPACK_IMPORTED_MODULE_6__.default.reducer
}); //* 스토어 타입

let initialRootState;

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE) {
    if (state === initialRootState) {
      return _objectSpread(_objectSpread({}, state), action.payload);
    }

    return state;
  }

  return rootReducer(state, action);
}; //* 타입 지원되는 커스텀 useSelector 만들기


const useSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector;

const initStore = () => {
  const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
    reducer,
    devTools: true
  });
  initialRootState = store.getState();
  return store;
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(initStore);

/***/ }),

/***/ "./store/registerRoom.ts":
/*!*******************************!*\
  !*** ./store/registerRoom.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoomActions": function() { return /* binding */ registerRoomActions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


//* 초기 상태
const initialState = {
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
const registerRoom = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "registerRoom",
  initialState,
  reducers: {
    //* 큰 건물 유형 변경하기
    setLargeBuildingType(state, action) {
      if (action.payload === "") {
        state.largeBuildingType = null;
      }

      state.largeBuildingType = action.payload;
      return state;
    },

    //* 건물 유형 변경하기
    setBuildingType(state, action) {
      if (action.payload === "") {
        state.buildingType = null;
      }

      state.buildingType = action.payload;
      return state;
    },

    //* 숙소 유형 변경하기
    setRoomType(state, action) {
      state.roomType = action.payload;
      return state;
    },

    //* 게스트용 숙소인지 변경하기
    setIsSetUpForGuest(state, action) {
      state.isSetUpForGuest = action.payload;
      return state;
    },

    //* 최대 숙박 인원 변경하기
    setMaximumGuestCount(state, action) {
      state.maximumGuestCount = action.payload;
      return state;
    },

    //* 침실 개수 변경하기
    setBedroomCount(state, action) {
      state.bedroomCount = action.payload;
      return state;
    }

  }
});
const registerRoomActions = _objectSpread({}, registerRoom.actions);
/* harmony default export */ __webpack_exports__["default"] = (registerRoom);

/***/ }),

/***/ "./store/user.ts":
/*!***********************!*\
  !*** ./store/user.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userActions": function() { return /* binding */ userActions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


//* 초기 상태
const initialState = {
  id: 0,
  email: "",
  lastname: "",
  firstname: "",
  birthday: "",
  isLogged: false,
  profileImage: ""
};
const user = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  initialState,
  reducers: {
    //* 로그인한 유저 변경하기
    setLoggedUser(state, action) {
      state = _objectSpread(_objectSpread({}, action.payload), {}, {
        isLogged: true
      });
      return state;
    },

    //* 유저 초기화 하기
    initUser(state) {
      state = initialState;
      return state;
    }

  }
});
const userActions = _objectSpread({}, user.actions);
/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  cardinal: "#a41850",
  davidson_orange: "#c13515",
  tawny: "#d93900",
  amaranth: "#E51E53",
  orange: "#fc642d",
  main_pink: "#FF385C",
  bittersweet: "#ff5a5f",
  black: "#222222",
  charcoal: "#484848",
  snow: "#FFF8F6",
  gray_48: "#484848",
  gray_71: "#717171",
  gray_76: "#767676",
  gray_80: "#808080",
  gray_85: "#858585",
  gray_aa: "#aaa",
  gray_bb: "#bbb",
  gray_b0: "#b0b0b0",
  gray_c4: "#c4c4c4",
  gray_dd: "#ddd",
  gray_eb: "#ebebeb",
  gray_e5: "#e5e5e5",
  gray_f7: "#f7f7f7",
  dark_cyan: "#008489",
  green: "#008A05"
});

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3N0b3JlL2F1dGgudHMiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9zdG9yZS9jb21tb24udHMiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3N0b3JlL3JlZ2lzdGVyUm9vbS50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3N0b3JlL3VzZXIudHMiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9zdHlsZXMvcGFsZXR0ZS50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJhdXRoTW9kZSIsImF1dGgiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEF1dGhNb2RlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYXV0aEFjdGlvbnMiLCJhY3Rpb25zIiwidmFsaWRhdGVNb2RlIiwiY29tbW9uIiwic2V0VmFsaWRhdGVNb2RlIiwiY29tbW9uQWN0aW9ucyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInJlZ2lzdGVyUm9vbSIsInJlZHVjZXIiLCJpbml0aWFsUm9vdFN0YXRlIiwidHlwZSIsIkhZRFJBVEUiLCJ1c2VTZWxlY3RvciIsInVzZVJlZHV4U2VsZWN0b3IiLCJpbml0U3RvcmUiLCJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwiZGV2VG9vbHMiLCJnZXRTdGF0ZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwibGFyZ2VCdWlsZGluZ1R5cGUiLCJidWlsZGluZ1R5cGUiLCJyb29tVHlwZSIsImlzU2V0VXBGb3JHdWVzdCIsIm1heGltdW1HdWVzdENvdW50IiwiYmVkcm9vbUNvdW50IiwiYmVkQ291bnQiLCJiZWRMaXN0IiwicHVibGljQmVkTGlzdCIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwic2V0QnVpbGRpbmdUeXBlIiwic2V0Um9vbVR5cGUiLCJzZXRJc1NldFVwRm9yR3Vlc3QiLCJzZXRNYXhpbXVtR3Vlc3RDb3VudCIsInNldEJlZHJvb21Db3VudCIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJpZCIsImVtYWlsIiwibGFzdG5hbWUiLCJmaXJzdG5hbWUiLCJiaXJ0aGRheSIsImlzTG9nZ2VkIiwicHJvZmlsZUltYWdlIiwic2V0TG9nZ2VkVXNlciIsImluaXRVc2VyIiwidXNlckFjdGlvbnMiLCJjYXJkaW5hbCIsImRhdmlkc29uX29yYW5nZSIsInRhd255IiwiYW1hcmFudGgiLCJvcmFuZ2UiLCJtYWluX3BpbmsiLCJiaXR0ZXJzd2VldCIsImJsYWNrIiwiY2hhcmNvYWwiLCJzbm93IiwiZ3JheV80OCIsImdyYXlfNzEiLCJncmF5Xzc2IiwiZ3JheV84MCIsImdyYXlfODUiLCJncmF5X2FhIiwiZ3JheV9iYiIsImdyYXlfYjAiLCJncmF5X2M0IiwiZ3JheV9kZCIsImdyYXlfZWIiLCJncmF5X2U1IiwiZ3JheV9mNyIsImRhcmtfY3lhbiIsImdyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLE1BQU1BLFlBQTRDLEdBQUc7QUFDakRDLFVBQVEsRUFBRTtBQUR1QyxDQUFyRDtBQUlBLE1BQU1DLElBQUksR0FBR0MsNkRBQVcsQ0FBQztBQUNyQkMsTUFBSSxFQUFFLE1BRGU7QUFFckJKLGNBRnFCO0FBR3JCSyxVQUFRLEVBQUU7QUFDTjtBQUNBQyxlQUFXLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFrRDtBQUN6REQsV0FBSyxDQUFDTixRQUFOLEdBQWlCTyxNQUFNLENBQUNDLE9BQXhCO0FBQ0g7O0FBSks7QUFIVyxDQUFELENBQXhCO0FBV08sTUFBTUMsV0FBVyxxQkFBT1IsSUFBSSxDQUFDUyxPQUFaLENBQWpCO0FBQ1AsK0RBQWVULElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFHQTtBQUNBLE1BQU1GLFlBQXlCLEdBQUc7QUFDOUJZLGNBQVksRUFBRTtBQURnQixDQUFsQztBQUlBLE1BQU1DLE1B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QUUsU0F4QkU7QUF5QmJDLE9BQUssRUFBRTtBQXpCTSxDQUFmLEUiLCJmaWxlIjoic3RvcmVfaW5kZXhfdHMtc3R5bGVzX3BhbGV0dGVfdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG4vLyog7LSI6riwIOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IHthdXRoTW9kZTogXCJzaWdudXBcIiB8IFwibG9naW5cIn0gPSB7XHJcbiAgICBhdXRoTW9kZTogXCJzaWdudXBcIixcclxufVxyXG5cclxuY29uc3QgYXV0aCA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwiYXV0aFwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICAvLyog7J247KadIO2MneyXhSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRBdXRoTW9kZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFwic2lnbnVwXCIgfCBcImxvZ2luXCI+KXtcclxuICAgICAgICAgICAgc3RhdGUuYXV0aE1vZGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhBY3Rpb25zID0gey4uLmF1dGguYWN0aW9uc307XHJcbmV4cG9ydCBkZWZhdWx0IGF1dGg7IiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBDb21tb25TdGF0ZX0gZnJvbSBcIi4uL3R5cGVzL3JlZHV4U3RhdGVcIjtcclxuXHJcbi8vKiDstIjquLAg7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogQ29tbW9uU3RhdGUgPSB7XHJcbiAgICB2YWxpZGF0ZU1vZGU6IGZhbHNlLFxyXG59XHJcblxyXG5jb25zdCBjb21tb24gPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcImNvbW1vblwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICAvLyogdmFsaWRhdGVNb2RlIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldFZhbGlkYXRlTW9kZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KXtcclxuICAgICAgICAgICAgc3RhdGUudmFsaWRhdGVNb2RlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25BY3Rpb25zID0gey4uLmNvbW1vbi5hY3Rpb25zfTtcclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsImltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIsIE1ha2VTdG9yZSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlU2VsZWN0b3IgYXMgdXNlUmVkdXhTZWxlY3RvclxyXG59IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBjb21tb24gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCBhdXRoIGZyb20gXCIuL2F1dGhcIjtcclxuaW1wb3J0IHJlZ2lzdGVyUm9vbSBmcm9tIFwiLi9yZWdpc3RlclJvb21cIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvbW1vbjogY29tbW9uLnJlZHVjZXIsXHJcbiAgICB1c2VyOiB1c2VyLnJlZHVjZXIsXHJcbiAgICBhdXRoOiBhdXRoLnJlZHVjZXIsXHJcbiAgICByZWdpc3RlclJvb206IHJlZ2lzdGVyUm9vbS5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbi8vKiDsiqTthqDslrQg7YOA7J6FXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuXHJcbmxldCBpbml0aWFsUm9vdFN0YXRlOiBSb290U3RhdGU7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpe1xyXG4gICAgICAgIGlmKHN0YXRlID09PSBpbml0aWFsUm9vdFN0YXRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb3RSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG59O1xyXG5cclxuLy8qIO2DgOyehSDsp4Dsm5DrkJjripQg7Luk7Iqk7YWAIHVzZVNlbGVjdG9yIOunjOuTpOq4sFxyXG5leHBvcnQgY29uc3QgdXNlU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VSZWR1eFNlbGVjdG9yO1xyXG5cclxuY29uc3QgaW5pdFN0b3JlOiBNYWtlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgICAgcmVkdWNlcixcclxuICAgICAgZGV2VG9vbHM6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGluaXRpYWxSb290U3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG4gIH07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoaW5pdFN0b3JlKTsiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IEJlZFR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVwiO1xyXG5cclxudHlwZSBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcm9vbVR5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgbWF4aW11bUd1ZXN0Q291bnQ6IG51bWJlcjtcclxuICAgIGJlZHJvb21Db3VudDogbnVtYmVyO1xyXG4gICAgYmVkQ291bnQ6IG51bWJlcjtcclxuICAgIGJlZExpc3Q6IHtpZDpudW1iZXI7IGJlZHM6IHsgdHlwZTogQmVkVHlwZTsgY291bnQ6IG51bWJlcn1bXX1bXTtcclxuICAgIHB1YmxpY0JlZExpc3Q6IHt0eXBlOiBCZWRUeXBlOyBjb3VudDogbnVtYmVyfVtdO1xyXG59XHJcblxyXG4vLyog7LSI6riwIOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgLy8qIOqxtOusvCDsnKDtmJUg7YGwIOuylOyjvFxyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IG51bGwsXHJcbiAgICAvLyog6rG066y8IOycoO2YlVxyXG4gICAgYnVpbGRpbmdUeXBlOiBudWxsLFxyXG4gICAgLy8qIOyImeyGjCDsnKDtmJVcclxuICAgIHJvb21UeXBlOiBudWxsLFxyXG4gICAgLy8qIOqyjOyKpO2KuOunjOydhCDsnITtlbQg66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgFxyXG4gICAgaXNTZXRVcEZvckd1ZXN0OiBudWxsLFxyXG4gICAgLy8qIOy1nOuMgCDsiJnrsJUg7J247JuQXHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDogMSxcclxuICAgIC8vKiDsuajsi6Qg6rCc7IiYXHJcbiAgICBiZWRyb29tQ291bnQ6IDAsXHJcbiAgICAvLyog7Lmo64yAIOqwnOyImFxyXG4gICAgYmVkQ291bnQ6IDEsXHJcbiAgICAvLyog7Lmo64yAIOycoO2YlVxyXG4gICAgYmVkTGlzdDogW10sXHJcbiAgICAvLyog6rO17Jqp6rO16rCEIOy5qOuMgCDsnKDtmJVcclxuICAgIHB1YmxpY0JlZExpc3Q6IFtdLFxyXG5cclxufVxyXG5cclxuY29uc3QgcmVnaXN0ZXJSb29tID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJyZWdpc3RlclJvb21cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgLy8qIO2BsCDqsbTrrLwg7Jyg7ZiVIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldExhcmdlQnVpbGRpbmdUeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc3RhdGUubGFyZ2VCdWlsZGluZ1R5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vKiDqsbTrrLwg7Jyg7ZiVIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmJ1aWxkaW5nVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuYnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vKiDsiJnshowg7Jyg7ZiVIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldFJvb21UeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248XCJlbnRpcmVcIiB8IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5yb29tVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyog6rKM7Iqk7Yq47JqpIOyImeyGjOyduOyngCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRJc1NldFVwRm9yR3Vlc3Qoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2V0VXBGb3JHdWVzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyog7LWc64yAIOyImeuwlSDsnbjsm5Ag67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TWF4aW11bUd1ZXN0Q291bnQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUubWF4aW11bUd1ZXN0Q291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOy5qOyLpCDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkcm9vbUNvdW50KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmJlZHJvb21Db3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm9vbUFjdGlvbnMgPSB7Li4ucmVnaXN0ZXJSb29tLmFjdGlvbnN9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJSb29tOyIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgVXNlclR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU3RhdGUgfSBmcm9tIFwiLi4vdHlwZXMvcmVkdXhTdGF0ZVwiO1xyXG5cclxuLy8qIOy0iOq4sCDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSB7XHJcbiAgICBpZDogMCxcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbGFzdG5hbWU6IFwiXCIsXHJcbiAgICBmaXJzdG5hbWU6IFwiXCIsXHJcbiAgICBiaXJ0aGRheTogXCJcIixcclxuICAgIGlzTG9nZ2VkOiBmYWxzZSxcclxuICAgIHByb2ZpbGVJbWFnZTogXCJcIixcclxufTtcclxuXHJcbmNvbnN0IHVzZXIgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgLy8qIOuhnOq3uOyduO2VnCDsnKDsoIAg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TG9nZ2VkVXNlcihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXJUeXBlPil7XHJcbiAgICAgICAgICAgIHN0YXRlID0gey4uLmFjdGlvbi5wYXlsb2FkLCBpc0xvZ2dlZDogdHJ1ZX07XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vKiDsnKDsoIAg7LSI6riw7ZmUIO2VmOq4sFxyXG4gICAgICAgIGluaXRVc2VyKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyQWN0aW9ucyA9IHsuLi51c2VyLmFjdGlvbnN9O1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2FyZGluYWw6IFwiI2E0MTg1MFwiLFxuICBkYXZpZHNvbl9vcmFuZ2U6IFwiI2MxMzUxNVwiLFxuICB0YXdueTogXCIjZDkzOTAwXCIsXG4gIGFtYXJhbnRoOiBcIiNFNTFFNTNcIixcbiAgb3JhbmdlOiBcIiNmYzY0MmRcIixcbiAgbWFpbl9waW5rOiBcIiNGRjM4NUNcIixcbiAgYml0dGVyc3dlZXQ6IFwiI2ZmNWE1ZlwiLFxuICBibGFjazogXCIjMjIyMjIyXCIsXG4gIGNoYXJjb2FsOiBcIiM0ODQ4NDhcIixcbiAgc25vdzogXCIjRkZGOEY2XCIsXG4gIGdyYXlfNDg6IFwiIzQ4NDg0OFwiLFxuICBncmF5XzcxOiBcIiM3MTcxNzFcIixcbiAgZ3JheV83NjogXCIjNzY3Njc2XCIsXG4gIGdyYXlfODA6IFwiIzgwODA4MFwiLFxuICBncmF5Xzg1OiBcIiM4NTg1ODVcIixcbiAgZ3JheV9hYTogXCIjYWFhXCIsXG4gIGdyYXlfYmI6IFwiI2JiYlwiLFxuICBncmF5X2IwOiBcIiNiMGIwYjBcIixcbiAgZ3JheV9jNDogXCIjYzRjNGM0XCIsXG4gIGdyYXlfZGQ6IFwiI2RkZFwiLFxuICBncmF5X2ViOiBcIiNlYmViZWJcIixcbiAgZ3JheV9lNTogXCIjZTVlNWU1XCIsXG4gIGdyYXlfZjc6IFwiI2Y3ZjdmN1wiLFxuICBkYXJrX2N5YW46IFwiIzAwODQ4OVwiLFxuICBncmVlbjogXCIjMDA4QTA1XCIsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==