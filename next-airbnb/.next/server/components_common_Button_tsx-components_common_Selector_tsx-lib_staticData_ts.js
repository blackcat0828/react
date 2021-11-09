exports.id = "components_common_Button_tsx-components_common_Selector_tsx-lib_staticData_ts";
exports.ids = ["components_common_Button_tsx-components_common_Selector_tsx-lib_staticData_ts"];
exports.modules = {

/***/ "./components/common/Button.tsx":
/*!**************************************!*\
  !*** ./components/common/Button.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\common\\Button.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 //* 버튼 색상 구하기

const getButtonColor = color => {
  switch (color) {
    case "dark_cyan":
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background-color:", ""], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan);

    default:
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background-color:", ""], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.bittersweet);
  }
};

const normalButtonStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["width:100%;height:48px;padding:0 15px;border:0;border-radius:4px;background-color:", ";color:white;font-size:16px;font-weight:800;outline:none;cursor:pointer;"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.bittersweet);
const RegisterButtonStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["width:161px;height:45px;border:1px solid ", ";background-color:white;border-radius:4px;color:", ";font-size:18px;font-weight:700;outline:none;cursor:pointer;"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_c4, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_48);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "Button__Container",
  componentId: "sc-1h0fxq-0"
})(["", " ", ""], ({
  styleType
}) => styleType === "register" ? RegisterButtonStyle : normalButtonStyle, props => getButtonColor(props.color || ""));

const Button = (_ref) => {
  let {
    children,
    color,
    styleType = "normal"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "color", "styleType"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, _objectSpread(_objectSpread({}, props), {}, {
    color: color,
    styleType: styleType,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Button));

/***/ }),

/***/ "./components/common/Selector.tsx":
/*!****************************************!*\
  !*** ./components/common/Selector.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.ts");

var _jsxFileName = "C:\\react\\next-airbnb\\components\\common\\Selector.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var WarningIcon = function WarningIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M8 1.333A6.674 6.674 0 0 1 14.667 8 6.674 6.674 0 0 1 8 14.667 6.674 6.674 0 0 1 1.333 8 6.674 6.674 0 0 1 8 1.333ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm-.667 4h1.334v5.333H7.333V4ZM8 12.167a.834.834 0 1 1 0-1.668.834.834 0 0 1 0 1.668Z",
      fill: "#C13515"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

WarningIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

const normalSelectorStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["width:100%;height:46px;select{width:100%;height:100%;background-color:white;border:1px solid ", ";font-size:16px;padding:0 11px;border-radius:4px;outline:none;-webkit-appearance:none;background-image:url(\"/static/svg/common/selector/selector_down_arrow.svg\");background-position:right 11px center;background-repeat:no-repeat;&:focus{border-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan);
const RegisterSelectorStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["width:100%;label{position:relative;}span{display:block;font-size:16px;color:", ";font-weight:600;margin-bottom:8px;}select{width:100%;height:56px;border-radius:8px;border:1px solid ", ";padding:0 14px 0 12px;appearance:none;outline:none;-webkit-appearance:none;background-image:url(\"/static/svg/common/selector/register_selector_down_arrow.svg\");background-position:right 14px center;background-repeat:no-repeat;font-size:16px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_b0);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Selector__Container",
  componentId: "sc-1y4w82y-0"
})(["", ";", ";select{", " &:disabled{background-image:url(\"/static/svg/common/selector/disabled_register_selector_down_arrow.svg\");background-color:", ";border-color:", ";color:", ";cursor:not-allowed;}}.selector-warning{margin-top:8px;display:flex;align-items:center;svg{margin-right:4px;}p{font-size:12px;color:", ";}}"], ({
  type
}) => type === "normal" && normalSelectorStyle, ({
  type
}) => type === "register" && RegisterSelectorStyle, ({
  validateMode,
  isValid
}) => {
  if (validateMode) {
    if (!isValid) {
      return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border-color:", ";background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.tawny, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.snow);
    }

    return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.dark_cyan);
  }

  return undefined;
}, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_e5, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray_e5, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.davidson_orange);

const Selector = (_ref) => {
  let {
    label,
    options = [],
    disabledOptions = [],
    isValid,
    useValidation = true,
    errorMessage = "옵션을 선택하세요.",
    type = "normal"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "options", "disabledOptions", "isValid", "useValidation", "errorMessage", "type"]);

  const validateMode = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.common.validateMode);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    isValid: !!isValid,
    validateMode: validateMode,
    type: type,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: [label && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", _objectSpread(_objectSpread({}, props), {}, {
        children: [disabledOptions.map((option, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: option,
          disabled: true,
          children: option
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 23
        }, undefined)), options.map((option, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: option,
          children: option
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 23
        }, undefined))]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, undefined), useValidation && validateMode && !isValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "selector-warning",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WarningIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Selector));

/***/ }),

/***/ "./lib/staticData.ts":
/*!***************************!*\
  !*** ./lib/staticData.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monthList": function() { return /* binding */ monthList; },
/* harmony export */   "dayList": function() { return /* binding */ dayList; },
/* harmony export */   "yearList": function() { return /* binding */ yearList; },
/* harmony export */   "largeBuildingTypeList": function() { return /* binding */ largeBuildingTypeList; },
/* harmony export */   "apartmentBuildingTypeList": function() { return /* binding */ apartmentBuildingTypeList; },
/* harmony export */   "houstBuildingTypeList": function() { return /* binding */ houstBuildingTypeList; },
/* harmony export */   "secondaryUnitBuildingTypeList": function() { return /* binding */ secondaryUnitBuildingTypeList; },
/* harmony export */   "uniqueSpaceBuildingTypeList": function() { return /* binding */ uniqueSpaceBuildingTypeList; },
/* harmony export */   "bnbBuildingTypeList": function() { return /* binding */ bnbBuildingTypeList; },
/* harmony export */   "boutiquesHotelBuildingTypeList": function() { return /* binding */ boutiquesHotelBuildingTypeList; },
/* harmony export */   "bedroomCountList": function() { return /* binding */ bedroomCountList; },
/* harmony export */   "bedTypes": function() { return /* binding */ bedTypes; },
/* harmony export */   "countryList": function() { return /* binding */ countryList; },
/* harmony export */   "amentityList": function() { return /* binding */ amentityList; },
/* harmony export */   "convinienceList": function() { return /* binding */ convinienceList; }
/* harmony export */ });
//* 1월부터 12월까지
const monthList = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]; //* 1부터 31까지

const dayList = Array.from(Array(31), (_, i) => String(i + 1)); //* 2020년부터 1900년까지

const yearList = Array.from(Array(121), (_, i) => String(2020 - i)); //* 숙소 큰 범위의 건물유형

const largeBuildingTypeList = ["아파트", "주택", "별채", "독특한 숙소", "B&B", "부티크호텔"]; //* 아파트 건물유형

const apartmentBuildingTypeList = ["아파트", "공동주택", "별채", "카사 파르티쿨라르(쿠바)", "로프트", "레지던스"]; //*주택 건물유형

const houstBuildingTypeList = ["주택", "방갈로", "통나무집", "카사", "파르티쿨라르(쿠바)", "살레", "전원주택", "키클라데스", "주택(그리스)", "담무소(이탈리아)", "돔하우스", "땅속의집", "농장 체험 숙박", "하우스 보트", "오두막", "등대", "팬션(한국)", "마차(영국, 프랑스)", "초소형주택", "타운하우스", "트룰로(이탈리아)", "저택"]; //* 별채 건물 유형

const secondaryUnitBuildingTypeList = ["게스트용 별채", "게스트 스위트", "농장 체험 숙박"]; //* 독특한숙소 건물 유형

const uniqueSpaceBuildingTypeList = ["헛간", "보트", "버스", "캠핑카", "캠핑장", "성", "동굴", "돔하우스", "땅속의 집", "농장 체험 숙박", "하우스 보트", "오두막", "이글루", "섬", "등대", "펜션(한국)", "비행기", "마차(영국, 프랑스)", "텐트", "초소형 주택", "티피", "기차", "트리하우스", "풍차", "유르트"]; //* B&B 건물유형

const bnbBuildingTypeList = ["B&B", "카사 파르티쿨라르(쿠바)", "농장 체험 숙박", "민수 (타이완)", "산장", "료칸(일본)"]; //* 부티크 호텔 건물유형

const boutiquesHotelBuildingTypeList = ["부티크 호텔", "아파트 호텔", "헤리티지 호텔(인도)", "호스텔", "호텔", "산장", "리조트", "레지던스", "객잔(중국)"]; //* 침실 개수

const bedroomCountList = Array.from(Array(16), (_, i) => `침실 ${i}개`); //* 침대 유형

const bedTypes = ["소파", "에어 매트릭스", "요와 이불", "싱글", "더블", "퀸", "이층 침대", "바닥용 에어매트릭스", "유아 침대", "유아용 침대", "해먹", "물침대"]; //* 국가 리스트

const countryList = ["가나", "가봉", "가이아나", "감비아", "건지", "과들루프", "과테말라", "괌", "그레나다", "그루지야", "그리스", "그린란드", "기네비쏘", "기니", "까뽀베르데", "나미비아", "나우루", "나이지리아", "남수단", "남아프리카", "네덜란드", "네덜란드령 카리브", "네팔", "노르웨이", "노퍽섬", "뉴 칼레도니아", "뉴질랜드", "니우에", "니제르", "니카라과", "대만", "덴마크", "도미니카", "도미니카 공화국", "독일", "동티모르", "라오스", "라이베리아", "라트비아", "러시아", "레바논", "레소토", "루마니아", "룩셈부르크", "르완다", "리비아", "리유니온", "리투아니아", "리히텐슈타인", "마다가스카르", "마샬 군도", "마요티", "마카오", "말라위", "말레이시아", "말리", "말티니크", "맨 섬", "멕시코", "모나코", "모로코", "모리셔스", "모리타니", "모잠비크", "몬테네그로", "몬트세라트", "몰도바", "몰디브", "몰타", "몽골", "미국", "미국령 버진 아일랜드", "미얀마", "미크로네시아", "바누아투", "바레인", "바베이도스", "바티칸", "바하마", "방글라데시", "버뮤다", "베냉", "베네수엘라", "베트남", "벨기에", "벨라루스", "벨리즈", "보스니아 헤르체고비나", "보츠와나", "볼리비아", "부룬디", "부르키나파소", "부탄", "북마리아나제도", "북마케도니아", "불가리아", "브라질", "브루나이", "사모아", "사우디아라비아", "사우스조지아 사우스샌드위치 제도", "사이프러스", "산마리노", "상투메 프린시페", "생 마르탱", "생 바르텔르미", "서사하라", "세네갈", "세르비아", "세인트루시아", "세인트빈센트그레나딘", "세인트크리스토퍼 네비스", "세인트피에르-미케롱", "세인트헬레나", "소말리아", "솔로몬 제도", "수단", "수리남", "쉐이쉘", "스리랑카", "스발바르제도-얀마웬섬", "스와질랜드", "스웨덴", "스위스", "스페인", "슬로바키아", "슬로베니아", "시에라리온", "신트마르턴", "싱가포르", "아랍에미리트 연합", "아루바", "아르메니아", "아르헨티나", "아메리칸 사모아", "아이슬란드", "아이티", "아일랜드", "아제르바이잔", "아프가니스탄", "안길라", "안도라", "알바니아", "알제리", "앙골라", "앤티가 바부다", "에리트리아", "에스토니아", "에콰도르", "엘살바도르", "영국", "영국령 버진 아일랜드", "영국령인도양식민지", "예멘", "오만", "오스트레일리아", "오스트리아", "온두라스", "올란드 제도", "왈리스-푸투나 제도", "요르단", "우간다", "우루과이", "우즈베키스탄", "우크라이나", "이디오피아", "이라크", "이스라엘", "이집트", "이탈리아", "인도", "인도네시아", "일본", "자메이카", "잠비아", "저지", "적도 기니", "중국", "중앙 아프리카 공화국", "지부티", "지브롤터", "짐바브웨", "차드", "체코", "칠레", "카메룬", "카자흐스탄", "카타르", "캄보디아", "캐나다", "케냐", "케이맨제도", "코모로스", "코소보", "코스타리카", "코코스제도", "코트디부아르", "콜롬비아", "콩고", "콩고 민주 공화국", "쿠바", "쿠웨이트", "쿡제도", "퀴라소", "크로아티아", "크리스마스섬", "키르기스스탄", "키리바시", "타지키스탄", "탄자니아", "태국", "터크스케이커스제도", "터키", "토고", "토켈라우", "통가", "투르크메니스탄", "투발루", "튀니지", "트리니다드 토바고", "파나마", "파라과이", "파키스탄", "파푸아뉴기니", "팔라우", "팔레스타인 지구", "페로제도", "페루", "포르투갈", "포클랜드 제도(말비나스 군도)", "폴란드", "푸에르토리코", "프랑스", "프랑스령 기아나", "프랑스령 폴리네시아", "피지", "핀란드", "필리핀", "핏케언섬", "대한민국", "헝가리", "홍콩"]; //* 편의 시설

const amentityList = ["무선 인터넷", "TV", "난방", "에어컨", "다리미", "샴푸", "헤어 드라이어", "조식, 커피, 차", "업무가능 공간/책상", "벽난로", "옷장/서랍장", "게스트 전용 출입문"]; //* 편의 공간

const convinienceList = ["주방", "세탁 공간 - 세탁기", "주차", "헬스장", "수영장", "자쿠지"];

/***/ }),

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
      const bedroomCount = action.payload;
      let {
        bedList
      } = state;
      state.bedroomCount = bedroomCount;

      if (bedroomCount < bedList.length) {
        //* 기존 침대 개수가 더 많으면 초과 부분 잘라내기
        bedList = state.bedList.slice(0, bedroomCount);
      } else {
        //* 변경될 침대 개수가 더 많으면 나머지 침실 채우기
        for (let i = bedList.length + 1; i < bedroomCount + 1; i += 1) {
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
    setBedCount(state, action) {
      state.bedCount = action.payload;
      return state;
    },

    //* 침대 유형 갯수 변경하기
    setBedTypeCount(state, action) {
      const {
        bedroomId,
        type,
        count
      } = action.payload;
      const bedroom = state.bedList[bedroomId - 1];
      const prevBeds = bedroom.beds;
      const index = prevBeds.findIndex(bed => bed.type === type);

      if (index === -1) {
        //* 타입이 없다면
        state.bedList[bedroomId - 1].beds = [...prevBeds, {
          type,
          count
        }];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9jb21wb25lbnRzL2NvbW1vbi9TZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9saWIvc3RhdGljRGF0YS50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3N0b3JlL2F1dGgudHMiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9zdG9yZS9jb21tb24udHMiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3N0b3JlL3JlZ2lzdGVyUm9vbS50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3N0b3JlL3VzZXIudHMiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvLi9zdHlsZXMvcGFsZXR0ZS50cyJdLCJuYW1lcyI6WyJnZXRCdXR0b25Db2xvciIsImNvbG9yIiwiY3NzIiwicGFsZXR0ZSIsIm5vcm1hbEJ1dHRvblN0eWxlIiwiUmVnaXN0ZXJCdXR0b25TdHlsZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsInN0eWxlVHlwZSIsInByb3BzIiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJSZWFjdCIsIldhcm5pbmdJY29uIiwibm9ybWFsU2VsZWN0b3JTdHlsZSIsIlJlZ2lzdGVyU2VsZWN0b3JTdHlsZSIsInR5cGUiLCJ2YWxpZGF0ZU1vZGUiLCJpc1ZhbGlkIiwidW5kZWZpbmVkIiwiU2VsZWN0b3IiLCJsYWJlbCIsIm9wdGlvbnMiLCJkaXNhYmxlZE9wdGlvbnMiLCJ1c2VWYWxpZGF0aW9uIiwiZXJyb3JNZXNzYWdlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbW1vbiIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwibW9udGhMaXN0IiwiZGF5TGlzdCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiU3RyaW5nIiwieWVhckxpc3QiLCJsYXJnZUJ1aWxkaW5nVHlwZUxpc3QiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwiaG91c3RCdWlsZGluZ1R5cGVMaXN0Iiwic2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QiLCJibmJCdWlsZGluZ1R5cGVMaXN0IiwiYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0IiwiYmVkcm9vbUNvdW50TGlzdCIsImJlZFR5cGVzIiwiY291bnRyeUxpc3QiLCJhbWVudGl0eUxpc3QiLCJjb252aW5pZW5jZUxpc3QiLCJpbml0aWFsU3RhdGUiLCJhdXRoTW9kZSIsImF1dGgiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEF1dGhNb2RlIiwiYWN0aW9uIiwicGF5bG9hZCIsImF1dGhBY3Rpb25zIiwiYWN0aW9ucyIsInNldFZhbGlkYXRlTW9kZSIsImNvbW1vbkFjdGlvbnMiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJyZWdpc3RlclJvb20iLCJyZWR1Y2VyIiwiaW5pdGlhbFJvb3RTdGF0ZSIsIkhZRFJBVEUiLCJ1c2VSZWR1eFNlbGVjdG9yIiwiaW5pdFN0b3JlIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImRldlRvb2xzIiwiZ2V0U3RhdGUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJzZXRMYXJnZUJ1aWxkaW5nVHlwZSIsInNldEJ1aWxkaW5nVHlwZSIsInNldFJvb21UeXBlIiwic2V0SXNTZXRVcEZvckd1ZXN0Iiwic2V0TWF4aW11bUd1ZXN0Q291bnQiLCJzZXRCZWRyb29tQ291bnQiLCJsZW5ndGgiLCJzbGljZSIsInB1c2giLCJpZCIsImJlZHMiLCJzZXRCZWRDb3VudCIsInNldEJlZFR5cGVDb3VudCIsImJlZHJvb21JZCIsImNvdW50IiwiYmVkcm9vbSIsInByZXZCZWRzIiwiZmluZEluZGV4IiwiYmVkIiwic3BsaWNlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsImVtYWlsIiwibGFzdG5hbWUiLCJmaXJzdG5hbWUiLCJiaXJ0aGRheSIsImlzTG9nZ2VkIiwicHJvZmlsZUltYWdlIiwic2V0TG9nZ2VkVXNlciIsImluaXRVc2VyIiwidXNlckFjdGlvbnMiLCJjYXJkaW5hbCIsImRhdmlkc29uX29yYW5nZSIsInRhd255IiwiYW1hcmFudGgiLCJvcmFuZ2UiLCJtYWluX3BpbmsiLCJiaXR0ZXJzd2VldCIsImJsYWNrIiwiY2hhcmNvYWwiLCJzbm93IiwiZ3JheV80OCIsImdyYXlfNzEiLCJncmF5Xzc2IiwiZ3JheV84MCIsImdyYXlfODUiLCJncmF5X2FhIiwiZ3JheV9iYiIsImdyYXlfYjAiLCJncmF5X2M0IiwiZ3JheV9kZCIsImdyYXlfZWIiLCJncmF5X2U1IiwiZ3JheV9mNyIsImRhcmtfY3lhbiIsImdyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FJQTs7QUFDQSxNQUFNQSxjQUFjLEdBQUlDLEtBQUQsSUFBbUI7QUFDdEMsVUFBUUEsS0FBUjtBQUNJLFNBQUssV0FBTDtBQUNJLGFBQU9DLHNEQUFQLDRCQUErQkMsOERBQS9COztBQUVKO0FBQ0ksYUFBT0Qsc0RBQVAsNEJBQStCQyxnRUFBL0I7QUFMUjtBQU9ILENBUkQ7O0FBVUEsTUFBTUMsaUJBQWlCLEdBQUdGLHNEQUFILHFLQU1DQyxnRUFORCxDQUF2QjtBQWNBLE1BQU1FLG1CQUFtQixHQUFHSCxzREFBSCxvS0FHREMsNERBSEMsRUFNWkEsNERBTlksQ0FBekI7QUFjQSxNQUFNRyxTQUFTLEdBQUdDLDBFQUFIO0FBQUE7QUFBQTtBQUFBLGtCQUNULENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQ0VBLFNB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LGdCQUFRLEVBQUU7QUFBakMsUUFBTDtBQUNBLGFBQU92RixLQUFQO0FBQ0gsS0FMSzs7QUFNTjtBQUNBMEYsWUFBUSxDQUFDMUYsS0FBRCxFQUFRO0FBQ1pBLFdBQUssR0FBR3lCLFlBQVI7QUFDQSxhQUFPekIsS0FBUDtBQUNIOztBQVZLO0FBSFcsQ0FBRCxDQUF4QjtBQWlCTyxNQUFNMkYsV0FBVyxxQkFBT25ELElBQUksQ0FBQ0wsT0FBWixDQUFqQjtBQUNQLCtEQUFlSyxJQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pDQSwrREFBZTtBQUNib0QsVUFBUSxFQUFFLFNBREc7QUFFYkMsaUJBQWUsRUFBRSxTQUZKO0FBR2JDLE9BQUssRUFBRSxTQUhNO0FBSWJDLFVBQVEsRUFBRSxTQUpHO0FBS2JDLFFBQU0sRUFBRSxTQUxLO0FBTWJDLFdBQVMsRUFBRSxTQU5FO0FBT2JDLGFBQVcsRUFBRSxTQVBBO0FBUWJDLE9BQUssRUFBRSxTQVJNO0FBU2JDLFVBQVEsRUFBRSxTQVRHO0FBVWJDLE1BQUksRUFBRSxTQVZPO0FBV2JDLFNBQU8sRUFBRSxTQVhJO0FBWWJDLFNBQU8sRUFBRSxTQVpJO0FBYWJDLFNBQU8sRUFBRSxTQWJJO0FBY2JDLFNBQU8sRUFBRSxTQWRJO0FBZWJDLFNBQU8sRUFBRSxTQWZJO0FBZ0JiQyxTQUFPLEVBQUUsTUFoQkk7QUFpQmJDLFNBQU8sRUFBRSxNQWpCSTtBQWtCYkMsU0FBTyxFQUFFLFNBbEJJO0FBbUJiQyxTQUFPLEVBQUUsU0FuQkk7QUFvQmJDLFNBQU8sRUFBRSxNQXBCSTtBQXFCYkMsU0FBTyxFQUFFLFNBckJJO0FBc0JiQyxTQUFPLEVBQUUsU0F0Qkk7QUF1QmJDLFNBQU8sRUFBRSxTQXZCSTtBQXdCYkMsV0FBUyxFQUFFLFNBeEJFO0FBeUJiQyxPQUFLLEVBQUU7QUF6Qk0sQ0FBZixFIiwiZmlsZSI6ImNvbXBvbmVudHNfY29tbW9uX0J1dHRvbl90c3gtY29tcG9uZW50c19jb21tb25fU2VsZWN0b3JfdHN4LWxpYl9zdGF0aWNEYXRhX3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuXHJcblxyXG4vLyog67KE7Yq8IOyDieyDgSDqtaztlZjquLBcclxuY29uc3QgZ2V0QnV0dG9uQ29sb3IgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgc3dpdGNoIChjb2xvcil7XHJcbiAgICAgICAgY2FzZSBcImRhcmtfY3lhblwiOlxyXG4gICAgICAgICAgICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYml0dGVyc3dlZXR9YDtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgbm9ybWFsQnV0dG9uU3R5bGUgPSBjc3NgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5iaXR0ZXJzd2VldH07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyQnV0dG9uU3R5bGUgPSBjc3NgXHJcbiAgICB3aWR0aDogMTYxcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9jNH07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV80OH07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuYnV0dG9uPHtzdHlsZVR5cGU6IFwibm9ybWFsXCIgfCBcInJlZ2lzdGVyXCIgfT5gXHJcbiAgICAkeyh7c3R5bGVUeXBlfSk9PlxyXG4gICAgICAgIHN0eWxlVHlwZSA9PT0gXCJyZWdpc3RlclwiID8gUmVnaXN0ZXJCdXR0b25TdHlsZSA6IG5vcm1hbEJ1dHRvblN0eWxlfVxyXG4gICAgJHsocHJvcHMpID0+IGdldEJ1dHRvbkNvbG9yKHByb3BzLmNvbG9yIHx8IFwiXCIpfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PntcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBjb2xvcj86IFwiZGFya19jeWFuXCIgfCBcIndoaXRlXCI7XHJcbiAgICBzdHlsZVR5cGU/OiBcIm5vcm1hbFwiIHwgXCJyZWdpc3RlclwiO1xyXG5cclxufVxyXG5cclxuY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgY29sb3IsXHJcbiAgICBzdHlsZVR5cGUgPSBcIm5vcm1hbFwiLFxyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIHsuLi5wcm9wc30gY29sb3I9e2NvbG9yfSBzdHlsZVR5cGU9e3N0eWxlVHlwZX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCdXR0b24pOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCBXYXJuaW5nSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvY29tbW9uL3dhcm5pbmcuc3ZnXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBub3JtYWxTZWxlY3RvclN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDZweDtcclxuXHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9lYn07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9zdmcvY29tbW9uL3NlbGVjdG9yL3NlbGVjdG9yX2Rvd25fYXJyb3cuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTFweCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJTZWxlY3RvclN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9iMH07XHJcbiAgICBwYWRkaW5nOiAwIDE0cHggMCAxMnB4O1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL3N2Zy9jb21tb24vc2VsZWN0b3IvcmVnaXN0ZXJfc2VsZWN0b3JfZG93bl9hcnJvdy5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxNHB4IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmludGVyZmFjZSBTZWxlY3RvckNvbnRhaW5lclByb3BzIHtcclxuICBpc1ZhbGlkOiBib29sZWFuO1xyXG4gIHZhbGlkYXRlTW9kZTogYm9vbGVhbjtcclxuICB0eXBlOiBcInJlZ2lzdGVyXCIgfCBcIm5vcm1hbFwiO1xyXG59XHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8U2VsZWN0b3JDb250YWluZXJQcm9wcz5gXHJcbiAgJHsoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwibm9ybWFsXCIgJiYgbm9ybWFsU2VsZWN0b3JTdHlsZX07XHJcbiAgJHsoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwicmVnaXN0ZXJcIiAmJiBSZWdpc3RlclNlbGVjdG9yU3R5bGV9O1xyXG5cclxuICBzZWxlY3Qge1xyXG4gICAgJHsoeyB2YWxpZGF0ZU1vZGUsIGlzVmFsaWQgfSkgPT4ge1xyXG4gICAgICBpZiAodmFsaWRhdGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS50YXdueX07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5zbm93fTtcclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH19XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvc3ZnL2NvbW1vbi9zZWxlY3Rvci9kaXNhYmxlZF9yZWdpc3Rlcl9zZWxlY3Rvcl9kb3duX2Fycm93LnN2Z1wiKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmdyYXlfZjd9O1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2U1fTtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2U1fTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3Rvci13YXJuaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5kYXZpZHNvbl9vcmFuZ2V9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5TZWxlY3RIVE1MQXR0cmlidXRlczxIVE1MU2VsZWN0RWxlbWVudD4ge1xyXG4gICAgb3B0aW9ucz86IHN0cmluZ1tdO1xyXG4gICAgZGlzYWJsZWRPcHRpb25zPzogc3RyaW5nW107XHJcbiAgICB2YWx1ZT86IHN0cmluZztcclxuICAgIGlzVmFsaWQ/OiBib29sZWFuO1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICB1c2VWYWxpZGF0aW9uPzogYm9vbGVhbjtcclxuICAgIGVycm9yTWVzc2FnZT86IHN0cmluZztcclxuICAgIHR5cGU/OiBcInJlZ2lzdGVyXCIgfCBcIm5vcm1hbFwiO1xyXG59XHJcblxyXG5jb25zdCBTZWxlY3RvcjogUmVhY3QuRkM8SVByb3BzPiA9ICh7XHJcbiAgICBsYWJlbCxcclxuICAgIG9wdGlvbnMgPSBbXSwgXHJcbiAgICBkaXNhYmxlZE9wdGlvbnMgPSBbXSwgXHJcbiAgICBpc1ZhbGlkLCBcclxuICAgIHVzZVZhbGlkYXRpb24gPSB0cnVlLFxyXG4gICAgZXJyb3JNZXNzYWdlID0gXCLsmLXshZjsnYQg7ISg7YOd7ZWY7IS47JqULlwiLFxyXG4gICAgdHlwZSA9IFwibm9ybWFsXCIsXHJcbiAgICAuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRlTW9kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbW9uLnZhbGlkYXRlTW9kZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgaXNWYWxpZD17ISFpc1ZhbGlkfSB2YWxpZGF0ZU1vZGU9e3ZhbGlkYXRlTW9kZX0gdHlwZT17dHlwZX0+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICB7bGFiZWwgJiYgPHNwYW4+e2xhYmVsfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICB7ZGlzYWJsZWRPcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9ufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAge3VzZVZhbGlkYXRpb24gJiYgdmFsaWRhdGVNb2RlICYmICFpc1ZhbGlkICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdG9yLXdhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgIDxXYXJuaW5nSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+e2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2VsZWN0b3IpOyIsImltcG9ydCB7IEJlZFR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVwiO1xyXG5cclxuLy8qIDHsm5TrtoDthLAgMTLsm5TquYzsp4BcclxuZXhwb3J0IGNvbnN0IG1vbnRoTGlzdCA9IFtcclxuICBcIjHsm5RcIixcclxuICBcIjLsm5RcIixcclxuICBcIjPsm5RcIixcclxuICBcIjTsm5RcIixcclxuICBcIjXsm5RcIixcclxuICBcIjbsm5RcIixcclxuICBcIjfsm5RcIixcclxuICBcIjjsm5RcIixcclxuICBcIjnsm5RcIixcclxuICBcIjEw7JuUXCIsXHJcbiAgXCIxMeyblFwiLFxyXG4gIFwiMTLsm5RcIixcclxuXTtcclxuXHJcbi8vKiAx67aA7YSwIDMx6rmM7KeAXHJcbmV4cG9ydCBjb25zdCBkYXlMaXN0ID0gQXJyYXkuZnJvbShBcnJheSgzMSksIChfLCBpKSA9PiBTdHJpbmcoaSArIDEpKTtcclxuXHJcbi8vKiAyMDIw64WE67aA7YSwIDE5MDDrhYTquYzsp4BcclxuZXhwb3J0IGNvbnN0IHllYXJMaXN0ID0gQXJyYXkuZnJvbShBcnJheSgxMjEpLCAoXywgaSkgPT4gU3RyaW5nKDIwMjAgLSBpKSk7XHJcblxyXG4vLyog7IiZ7IaMIO2BsCDrspTsnITsnZgg6rG066y87Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBsYXJnZUJ1aWxkaW5nVHlwZUxpc3QgPSBbXHJcbiAgXCLslYTtjIztirhcIixcclxuICBcIuyjvO2DnVwiLFxyXG4gIFwi67OE7LGEXCIsXHJcbiAgXCLrj4XtirntlZwg7IiZ7IaMXCIsXHJcbiAgXCJCJkJcIixcclxuICBcIuu2gO2LsO2BrO2YuO2FlFwiLFxyXG5dO1xyXG5cclxuLy8qIOyVhO2MjO2KuCDqsbTrrLzsnKDtmJVcclxuZXhwb3J0IGNvbnN0IGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3QgPSBbXHJcbiAgXCLslYTtjIztirhcIixcclxuICBcIuqzteuPmeyjvO2DnVwiLFxyXG4gIFwi67OE7LGEXCIsXHJcbiAgXCLsubTsgqwg7YyM66W07Yuw7L+o652866W0KOy/oOuwlClcIixcclxuICBcIuuhnO2UhO2KuFwiLFxyXG4gIFwi66CI7KeA642Y7IqkXCIsXHJcbl07XHJcblxyXG4vLyrso7ztg50g6rG066y87Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBob3VzdEJ1aWxkaW5nVHlwZUxpc3QgPSBbXHJcbiAgXCLso7ztg51cIixcclxuICBcIuuwqeqwiOuhnFwiLFxyXG4gIFwi7Ya164KY66y07KeRXCIsXHJcbiAgXCLsubTsgqxcIixcclxuICBcIu2MjOultO2LsOy/qOudvOultCjsv6DrsJQpXCIsXHJcbiAgXCLsgrTroIhcIixcclxuICBcIuyghOybkOyjvO2DnVwiLFxyXG4gIFwi7YKk7YG06528642w7IqkXCIsXHJcbiAgXCLso7ztg50o6re466as7IqkKVwiLFxyXG4gIFwi64u066y07IaMKOydtO2DiOumrOyVhClcIixcclxuICBcIuuPlO2VmOyasOyKpFwiLFxyXG4gIFwi65WF7IaN7J2Y7KeRXCIsXHJcbiAgXCLrho3snqUg7LK07ZeYIOyImeuwlVwiLFxyXG4gIFwi7ZWY7Jqw7IqkIOuztO2KuFwiLFxyXG4gIFwi7Jik65GQ66eJXCIsXHJcbiAgXCLrk7HrjIBcIixcclxuICBcIu2MrOyFmCjtlZzqta0pXCIsXHJcbiAgXCLrp4jssKgo7JiB6rWtLCDtlITrnpHsiqQpXCIsXHJcbiAgXCLstIjshoztmJXso7ztg51cIixcclxuICBcIu2DgOyatO2VmOyasOyKpFwiLFxyXG4gIFwi7Yq466Ow66GcKOydtO2DiOumrOyVhClcIixcclxuICBcIuyggO2DnVwiLFxyXG5dO1xyXG5cclxuLy8qIOuzhOyxhCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCA9IFtcclxuICBcIuqyjOyKpO2KuOyaqSDrs4TssYRcIixcclxuICBcIuqyjOyKpO2KuCDsiqTsnITtirhcIixcclxuICBcIuuGjeyepSDssrTtl5gg7IiZ67CVXCIsXHJcbl07XHJcblxyXG4vLyog64+F7Yq57ZWc7IiZ7IaMIOqxtOusvCDsnKDtmJVcclxuZXhwb3J0IGNvbnN0IHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdCA9IFtcclxuICBcIu2Xm+qwhFwiLFxyXG4gIFwi67O07Yq4XCIsXHJcbiAgXCLrsoTsiqRcIixcclxuICBcIuy6oO2Vkey5tFwiLFxyXG4gIFwi7Lqg7ZWR7J6lXCIsXHJcbiAgXCLshLFcIixcclxuICBcIuuPmeq1tFwiLFxyXG4gIFwi64+U7ZWY7Jqw7IqkXCIsXHJcbiAgXCLrlYXsho3snZgg7KeRXCIsXHJcbiAgXCLrho3snqUg7LK07ZeYIOyImeuwlVwiLFxyXG4gIFwi7ZWY7Jqw7IqkIOuztO2KuFwiLFxyXG4gIFwi7Jik65GQ66eJXCIsXHJcbiAgXCLsnbTquIDro6hcIixcclxuICBcIuyErFwiLFxyXG4gIFwi65Ox64yAXCIsXHJcbiAgXCLtjpzshZgo7ZWc6rWtKVwiLFxyXG4gIFwi67mE7ZaJ6riwXCIsXHJcbiAgXCLrp4jssKgo7JiB6rWtLCDtlITrnpHsiqQpXCIsXHJcbiAgXCLthZDtirhcIixcclxuICBcIuy0iOyGjO2YlSDso7ztg51cIixcclxuICBcIu2LsO2UvFwiLFxyXG4gIFwi6riw7LCoXCIsXHJcbiAgXCLtirjrpqztlZjsmrDsiqRcIixcclxuICBcIu2SjeywqFwiLFxyXG4gIFwi7Jyg66W07Yq4XCIsXHJcbl07XHJcblxyXG4vLyogQiZCIOqxtOusvOycoO2YlVxyXG5leHBvcnQgY29uc3QgYm5iQnVpbGRpbmdUeXBlTGlzdCA9IFtcclxuICBcIkImQlwiLFxyXG4gIFwi7Lm07IKsIO2MjOultO2LsOy/qOudvOultCjsv6DrsJQpXCIsXHJcbiAgXCLrho3snqUg7LK07ZeYIOyImeuwlVwiLFxyXG4gIFwi66+87IiYICjtg4DsnbTsmYQpXCIsXHJcbiAgXCLsgrDsnqVcIixcclxuICBcIuujjOy5uCjsnbzrs7gpXCIsXHJcbl07XHJcblxyXG4vLyog67aA7Yuw7YGsIO2YuO2FlCDqsbTrrLzsnKDtmJVcclxuZXhwb3J0IGNvbnN0IGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdCA9IFtcclxuICBcIuu2gO2LsO2BrCDtmLjthZRcIixcclxuICBcIuyVhO2MjO2KuCDtmLjthZRcIixcclxuICBcIu2XpOumrO2LsOyngCDtmLjthZQo7J2464+EKVwiLFxyXG4gIFwi7Zi47Iqk7YWUXCIsXHJcbiAgXCLtmLjthZRcIixcclxuICBcIuyCsOyepVwiLFxyXG4gIFwi66as7KGw7Yq4XCIsXHJcbiAgXCLroIjsp4DrjZjsiqRcIixcclxuICBcIuqwneyelCjspJHqta0pXCIsXHJcbl07XHJcblxyXG4vLyog7Lmo7IukIOqwnOyImFxyXG5leHBvcnQgY29uc3QgYmVkcm9vbUNvdW50TGlzdCA9IEFycmF5LmZyb20oQXJyYXkoMTYpLCAoXywgaSkgPT4gYOy5qOyLpCAke2l96rCcYCk7XHJcblxyXG4vLyog7Lmo64yAIOycoO2YlVxyXG5leHBvcnQgY29uc3QgYmVkVHlwZXM6IEJlZFR5cGVbXSA9IFtcclxuICBcIuyGjO2MjFwiLFxyXG4gIFwi7JeQ7Ja0IOunpO2KuOumreyKpFwiLFxyXG4gIFwi7JqU7JmAIOydtOu2iFwiLFxyXG4gIFwi7Iux6riAXCIsXHJcbiAgXCLrjZTruJRcIixcclxuICBcIu2AuFwiLFxyXG4gIFwi7J207Li1IOy5qOuMgFwiLFxyXG4gIFwi67CU64ul7JqpIOyXkOyWtOunpO2KuOumreyKpFwiLFxyXG4gIFwi7Jyg7JWEIOy5qOuMgFwiLFxyXG4gIFwi7Jyg7JWE7JqpIOy5qOuMgFwiLFxyXG4gIFwi7ZW066i5XCIsXHJcbiAgXCLrrLzsuajrjIBcIixcclxuXTtcclxuXHJcbi8vKiDqta3qsIAg66as7Iqk7Yq4XHJcbmV4cG9ydCBjb25zdCBjb3VudHJ5TGlzdCA9IFtcclxuICBcIuqwgOuCmFwiLFxyXG4gIFwi6rCA67SJXCIsXHJcbiAgXCLqsIDsnbTslYTrgphcIixcclxuICBcIuqwkOu5hOyVhFwiLFxyXG4gIFwi6rG07KeAXCIsXHJcbiAgXCLqs7zrk6Tro6jtlIRcIixcclxuICBcIuqzvO2FjOunkOudvFwiLFxyXG4gIFwi6rSMXCIsXHJcbiAgXCLqt7jroIjrgpjri6RcIixcclxuICBcIuq3uOujqOyngOyVvFwiLFxyXG4gIFwi6re466as7IqkXCIsXHJcbiAgXCLqt7jrprDrnoDrk5xcIixcclxuICBcIuq4sOuEpOu5hOyPmFwiLFxyXG4gIFwi6riw64uIXCIsXHJcbiAgXCLquYzrvYDrsqDrpbTrjbBcIixcclxuICBcIuuCmOuvuOu5hOyVhFwiLFxyXG4gIFwi64KY7Jqw66OoXCIsXHJcbiAgXCLrgpjsnbTsp4DrpqzslYRcIixcclxuICBcIuuCqOyImOuLqFwiLFxyXG4gIFwi64Ko7JWE7ZSE66as7Lm0XCIsXHJcbiAgXCLrhKTrjZzrnoDrk5xcIixcclxuICBcIuuEpOuNnOuegOuTnOuguSDsubTrpqzruIxcIixcclxuICBcIuuEpO2MlFwiLFxyXG4gIFwi64W466W07Juo7J20XCIsXHJcbiAgXCLrhbjtjb3shKxcIixcclxuICBcIuuJtCDsubzroIjrj4Tri4jslYRcIixcclxuICBcIuuJtOyniOuenOuTnFwiLFxyXG4gIFwi64uI7Jqw7JeQXCIsXHJcbiAgXCLri4jsoJzrpbRcIixcclxuICBcIuuLiOy5tOudvOqzvFwiLFxyXG4gIFwi64yA66eMXCIsXHJcbiAgXCLrjbTrp4jtgaxcIixcclxuICBcIuuPhOuvuOuLiOy5tFwiLFxyXG4gIFwi64+E66+464uI7Lm0IOqzte2ZlOq1rVwiLFxyXG4gIFwi64+F7J28XCIsXHJcbiAgXCLrj5nti7DrqqjrpbRcIixcclxuICBcIuudvOyYpOyKpFwiLFxyXG4gIFwi65287J2067Kg66as7JWEXCIsXHJcbiAgXCLrnbztirjruYTslYRcIixcclxuICBcIuufrOyLnOyVhFwiLFxyXG4gIFwi66CI67CU64W8XCIsXHJcbiAgXCLroIjshozthqBcIixcclxuICBcIuujqOuniOuLiOyVhFwiLFxyXG4gIFwi66Op7IWI67aA66W07YGsXCIsXHJcbiAgXCLrpbTsmYTri6RcIixcclxuICBcIuumrOu5hOyVhFwiLFxyXG4gIFwi66as7Jyg64uI7JioXCIsXHJcbiAgXCLrpqztiKzslYTri4jslYRcIixcclxuICBcIuumrO2eiO2FkOyKiO2DgOyduFwiLFxyXG4gIFwi66eI64uk6rCA7Iqk7Lm066W0XCIsXHJcbiAgXCLrp4jsg6wg6rWw64+EXCIsXHJcbiAgXCLrp4jsmpTti7BcIixcclxuICBcIuuniOy5tOyYpFwiLFxyXG4gIFwi66eQ65287JyEXCIsXHJcbiAgXCLrp5DroIjsnbTsi5zslYRcIixcclxuICBcIuunkOumrFwiLFxyXG4gIFwi66eQ7Yuw64uI7YGsXCIsXHJcbiAgXCLrp6gg7ISsXCIsXHJcbiAgXCLrqZXsi5zsvZRcIixcclxuICBcIuuqqOuCmOy9lFwiLFxyXG4gIFwi66qo66Gc7L2UXCIsXHJcbiAgXCLrqqjrpqzshZTsiqRcIixcclxuICBcIuuqqOumrO2DgOuLiFwiLFxyXG4gIFwi66qo7J6g67mE7YGsXCIsXHJcbiAgXCLrqqzthYzrhKTqt7jroZxcIixcclxuICBcIuuqrO2KuOyEuOudvO2KuFwiLFxyXG4gIFwi66qw64+E67CUXCIsXHJcbiAgXCLrqrDrlJTruIxcIixcclxuICBcIuuqsO2DgFwiLFxyXG4gIFwi66q96rOoXCIsXHJcbiAgXCLrr7jqta1cIixcclxuICBcIuuvuOq1reuguSDrsoTsp4Qg7JWE7J28656c65OcXCIsXHJcbiAgXCLrr7jsloDrp4hcIixcclxuICBcIuuvuO2BrOuhnOuEpOyLnOyVhFwiLFxyXG4gIFwi67CU64iE7JWE7YisXCIsXHJcbiAgXCLrsJTroIjsnbhcIixcclxuICBcIuuwlOuyoOydtOuPhOyKpFwiLFxyXG4gIFwi67CU7Yuw7Lm4XCIsXHJcbiAgXCLrsJTtlZjrp4hcIixcclxuICBcIuuwqeq4gOudvOuNsOyLnFwiLFxyXG4gIFwi67KE666k64ukXCIsXHJcbiAgXCLrsqDrg4lcIixcclxuICBcIuuyoOuEpOyImOyXmOudvFwiLFxyXG4gIFwi67Kg7Yq464KoXCIsXHJcbiAgXCLrsqjquLDsl5BcIixcclxuICBcIuuyqOudvOujqOyKpFwiLFxyXG4gIFwi67Ko66as7KaIXCIsXHJcbiAgXCLrs7TsiqTri4jslYQg7Zek66W07LK06rOg67mE64KYXCIsXHJcbiAgXCLrs7TsuKDsmYDrgphcIixcclxuICBcIuuzvOumrOu5hOyVhFwiLFxyXG4gIFwi67aA66Os65SUXCIsXHJcbiAgXCLrtoDrpbTtgqTrgpjtjIzshoxcIixcclxuICBcIuu2gO2DhFwiLFxyXG4gIFwi67aB66eI66as7JWE64KY7KCc64+EXCIsXHJcbiAgXCLrtoHrp4jsvIDrj4Tri4jslYRcIixcclxuICBcIuu2iOqwgOumrOyVhFwiLFxyXG4gIFwi67iM65287KeIXCIsXHJcbiAgXCLruIzro6jrgpjsnbRcIixcclxuICBcIuyCrOuqqOyVhFwiLFxyXG4gIFwi7IKs7Jqw65SU7JWE652867mE7JWEXCIsXHJcbiAgXCLsgqzsmrDsiqTsobDsp4DslYQg7IKs7Jqw7Iqk7IOM65Oc7JyE7LmYIOygnOuPhFwiLFxyXG4gIFwi7IKs7J207ZSE65+s7IqkXCIsXHJcbiAgXCLsgrDrp4jrpqzrhbhcIixcclxuICBcIuyDge2IrOuplCDtlITrprDsi5ztjphcIixcclxuICBcIuyDnSDrp4jrpbTtg7FcIixcclxuICBcIuyDnSDrsJTrpbTthZTrpbTrr7hcIixcclxuICBcIuyEnOyCrO2VmOudvFwiLFxyXG4gIFwi7IS464Sk6rCIXCIsXHJcbiAgXCLshLjrpbTruYTslYRcIixcclxuICBcIuyEuOyduO2KuOujqOyLnOyVhFwiLFxyXG4gIFwi7IS47J247Yq467mI7IS87Yq46re466CI64KY65SYXCIsXHJcbiAgXCLshLjsnbjtirjtgazrpqzsiqTthqDtjbwg64Sk67mE7IqkXCIsXHJcbiAgXCLshLjsnbjtirjtlLzsl5DrpbQt66+47LyA66GxXCIsXHJcbiAgXCLshLjsnbjtirjtl6zroIjrgphcIixcclxuICBcIuyGjOunkOumrOyVhFwiLFxyXG4gIFwi7IaU66Gc66qsIOygnOuPhFwiLFxyXG4gIFwi7IiY64uoXCIsXHJcbiAgXCLsiJjrpqzrgqhcIixcclxuICBcIuyJkOydtOyJmFwiLFxyXG4gIFwi7Iqk66as656R7Lm0XCIsXHJcbiAgXCLsiqTrsJzrsJTrpbTsoJzrj4Qt7JaA66eI7Jus7ISsXCIsXHJcbiAgXCLsiqTsmYDsp4jrnpzrk5xcIixcclxuICBcIuyKpOybqOuNtFwiLFxyXG4gIFwi7Iqk7JyE7IqkXCIsXHJcbiAgXCLsiqTtjpjsnbhcIixcclxuICBcIuyKrOuhnOuwlO2CpOyVhFwiLFxyXG4gIFwi7Iqs66Gc67Kg64uI7JWEXCIsXHJcbiAgXCLsi5zsl5DrnbzrpqzsmKhcIixcclxuICBcIuyLoO2KuOuniOultO2EtFwiLFxyXG4gIFwi7Iux6rCA7Y+s66W0XCIsXHJcbiAgXCLslYTrno3sl5Drr7jrpqztirgg7Jew7ZWpXCIsXHJcbiAgXCLslYTro6jrsJRcIixcclxuICBcIuyVhOultOuplOuLiOyVhFwiLFxyXG4gIFwi7JWE66W07Zeo7Yuw64KYXCIsXHJcbiAgXCLslYTrqZTrpqzsubgg7IKs66qo7JWEXCIsXHJcbiAgXCLslYTsnbTsiqzrnoDrk5xcIixcclxuICBcIuyVhOydtO2LsFwiLFxyXG4gIFwi7JWE7J28656c65OcXCIsXHJcbiAgXCLslYTsoJzrpbTrsJTsnbTsnpRcIixcclxuICBcIuyVhO2UhOqwgOuLiOyKpO2DhFwiLFxyXG4gIFwi7JWI6ri46528XCIsXHJcbiAgXCLslYjrj4TrnbxcIixcclxuICBcIuyVjOuwlOuLiOyVhFwiLFxyXG4gIFwi7JWM7KCc66asXCIsXHJcbiAgXCLslZnqs6jrnbxcIixcclxuICBcIuyVpO2LsOqwgCDrsJTrtoDri6RcIixcclxuICBcIuyXkOumrO2KuOumrOyVhFwiLFxyXG4gIFwi7JeQ7Iqk7Yag64uI7JWEXCIsXHJcbiAgXCLsl5DsvbDrj4TrpbRcIixcclxuICBcIuyXmOyCtOuwlOuPhOultFwiLFxyXG4gIFwi7JiB6rWtXCIsXHJcbiAgXCLsmIHqta3roLkg67KE7KeEIOyVhOydvOuenOuTnFwiLFxyXG4gIFwi7JiB6rWt66C57J2464+E7JaR7Iud66+87KeAXCIsXHJcbiAgXCLsmIjrqZhcIixcclxuICBcIuyYpOunjFwiLFxyXG4gIFwi7Jik7Iqk7Yq466CI7J2866as7JWEXCIsXHJcbiAgXCLsmKTsiqTtirjrpqzslYRcIixcclxuICBcIuyYqOuRkOudvOyKpFwiLFxyXG4gIFwi7Jis656A65OcIOygnOuPhFwiLFxyXG4gIFwi7JmI66as7IqkLe2RuO2IrOuCmCDsoJzrj4RcIixcclxuICBcIuyalOultOuLqFwiLFxyXG4gIFwi7Jqw6rCE64ukXCIsXHJcbiAgXCLsmrDro6jqs7zsnbRcIixcclxuICBcIuyasOymiOuyoO2CpOyKpO2DhFwiLFxyXG4gIFwi7Jqw7YGs65287J2064KYXCIsXHJcbiAgXCLsnbTrlJTsmKTtlLzslYRcIixcclxuICBcIuydtOudvO2BrFwiLFxyXG4gIFwi7J207Iqk65287JeYXCIsXHJcbiAgXCLsnbTsp5HtirhcIixcclxuICBcIuydtO2DiOumrOyVhFwiLFxyXG4gIFwi7J2464+EXCIsXHJcbiAgXCLsnbjrj4TrhKTsi5zslYRcIixcclxuICBcIuydvOuzuFwiLFxyXG4gIFwi7J6Q66mU7J207Lm0XCIsXHJcbiAgXCLsnqDruYTslYRcIixcclxuICBcIuyggOyngFwiLFxyXG4gIFwi7KCB64+EIOq4sOuLiFwiLFxyXG4gIFwi7KSR6rWtXCIsXHJcbiAgXCLspJHslZkg7JWE7ZSE66as7Lm0IOqzte2ZlOq1rVwiLFxyXG4gIFwi7KeA67aA7YuwXCIsXHJcbiAgXCLsp4DruIzroaTthLBcIixcclxuICBcIuynkOuwlOu4jOybqFwiLFxyXG4gIFwi7LCo65OcXCIsXHJcbiAgXCLssrTsvZRcIixcclxuICBcIuy5oOugiFwiLFxyXG4gIFwi7Lm066mU66OsXCIsXHJcbiAgXCLsubTsnpDtnZDsiqTtg4RcIixcclxuICBcIuy5tO2DgOultFwiLFxyXG4gIFwi7LqE67O065SU7JWEXCIsXHJcbiAgXCLsupDrgpjri6RcIixcclxuICBcIuy8gOuDkFwiLFxyXG4gIFwi7LyA7J2066eo7KCc64+EXCIsXHJcbiAgXCLsvZTrqqjroZzsiqRcIixcclxuICBcIuy9lOyGjOuztFwiLFxyXG4gIFwi7L2U7Iqk7YOA66as7Lm0XCIsXHJcbiAgXCLsvZTsvZTsiqTsoJzrj4RcIixcclxuICBcIuy9lO2KuOuUlOu2gOyVhOultFwiLFxyXG4gIFwi7L2c66Gs67mE7JWEXCIsXHJcbiAgXCLsvanqs6BcIixcclxuICBcIuy9qeqzoCDrr7zso7wg6rO17ZmU6rWtXCIsXHJcbiAgXCLsv6DrsJRcIixcclxuICBcIuy/oOybqOydtO2KuFwiLFxyXG4gIFwi7L+h7KCc64+EXCIsXHJcbiAgXCLtgLTrnbzshoxcIixcclxuICBcIu2BrOuhnOyVhO2LsOyVhFwiLFxyXG4gIFwi7YGs66as7Iqk66eI7Iqk7ISsXCIsXHJcbiAgXCLtgqTrpbTquLDsiqTsiqTtg4RcIixcclxuICBcIu2CpOumrOuwlOyLnFwiLFxyXG4gIFwi7YOA7KeA7YKk7Iqk7YOEXCIsXHJcbiAgXCLtg4TsnpDri4jslYRcIixcclxuICBcIu2DnOq1rVwiLFxyXG4gIFwi7YSw7YGs7Iqk7LyA7J207Luk7Iqk7KCc64+EXCIsXHJcbiAgXCLthLDtgqRcIixcclxuICBcIu2GoOqzoFwiLFxyXG4gIFwi7Yag7LyI65287JqwXCIsXHJcbiAgXCLthrXqsIBcIixcclxuICBcIu2IrOultO2BrOuplOuLiOyKpO2DhFwiLFxyXG4gIFwi7Yis67Cc66OoXCIsXHJcbiAgXCLtioDri4jsp4BcIixcclxuICBcIu2KuOumrOuLiOuLpOuTnCDthqDrsJTqs6BcIixcclxuICBcIu2MjOuCmOuniFwiLFxyXG4gIFwi7YyM65286rO87J20XCIsXHJcbiAgXCLtjIztgqTsiqTtg4RcIixcclxuICBcIu2MjO2RuOyVhOuJtOq4sOuLiFwiLFxyXG4gIFwi7YyU65287JqwXCIsXHJcbiAgXCLtjJTroIjsiqTtg4Dsnbgg7KeA6rWsXCIsXHJcbiAgXCLtjpjroZzsoJzrj4RcIixcclxuICBcIu2OmOujqFwiLFxyXG4gIFwi7Y+s66W07Yis6rCIXCIsXHJcbiAgXCLtj6ztgbTrnpzrk5wg7KCc64+EKOunkOu5hOuCmOyKpCDqtbDrj4QpXCIsXHJcbiAgXCLtj7TrnoDrk5xcIixcclxuICBcIu2RuOyXkOultO2GoOumrOy9lFwiLFxyXG4gIFwi7ZSE656R7IqkXCIsXHJcbiAgXCLtlITrnpHsiqTroLkg6riw7JWE64KYXCIsXHJcbiAgXCLtlITrnpHsiqTroLkg7Y+066as64Sk7Iuc7JWEXCIsXHJcbiAgXCLtlLzsp4BcIixcclxuICBcIu2VgOuegOuTnFwiLFxyXG4gIFwi7ZWE66as7ZWAXCIsXHJcbiAgXCLtlY/svIDslrjshKxcIixcclxuICBcIuuMgO2VnOuvvOq1rVwiLFxyXG4gIFwi7Zed6rCA66asXCIsXHJcbiAgXCLtmY3svalcIixcclxuXTtcclxuXHJcbi8vKiDtjrjsnZgg7Iuc7ISkXHJcbmV4cG9ydCBjb25zdCBhbWVudGl0eUxpc3QgPSBbXHJcbiAgXCLrrLTshKAg7J247YSw64S3XCIsXHJcbiAgXCJUVlwiLFxyXG4gIFwi64Kc67CpXCIsXHJcbiAgXCLsl5DslrTsu6hcIixcclxuICBcIuuLpOumrOuvuFwiLFxyXG4gIFwi7IO07ZG4XCIsXHJcbiAgXCLtl6TslrQg65Oc65287J207Ja0XCIsXHJcbiAgXCLsobDsi50sIOy7pO2UvCwg7LCoXCIsXHJcbiAgXCLsl4XrrLTqsIDriqUg6rO16rCEL+yxheyDgVwiLFxyXG4gIFwi67K964Kc66GcXCIsXHJcbiAgXCLsmLfsnqUv7ISc656N7J6lXCIsXHJcbiAgXCLqsozsiqTtirgg7KCE7JqpIOy2nOyeheusuFwiLFxyXG5dO1xyXG5cclxuLy8qIO2OuOydmCDqs7XqsIRcclxuZXhwb3J0IGNvbnN0IGNvbnZpbmllbmNlTGlzdCA9IFtcclxuICBcIuyjvOuwqVwiLFxyXG4gIFwi7IS47YOBIOqzteqwhCAtIOyEuO2Dgeq4sFwiLFxyXG4gIFwi7KO87LCoXCIsXHJcbiAgXCLtl6zsiqTsnqVcIixcclxuICBcIuyImOyYgeyepVwiLFxyXG4gIFwi7J6Q7L+g7KeAXCIsXHJcbl07XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbi8vKiDstIjquLAg7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZToge2F1dGhNb2RlOiBcInNpZ251cFwiIHwgXCJsb2dpblwifSA9IHtcclxuICAgIGF1dGhNb2RlOiBcInNpZ251cFwiLFxyXG59XHJcblxyXG5jb25zdCBhdXRoID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJhdXRoXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIC8vKiDsnbjspp0g7Yyd7JeFIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEF1dGhNb2RlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248XCJzaWdudXBcIiB8IFwibG9naW5cIj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5hdXRoTW9kZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEFjdGlvbnMgPSB7Li4uYXV0aC5hY3Rpb25zfTtcclxuZXhwb3J0IGRlZmF1bHQgYXV0aDsiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IENvbW1vblN0YXRlfSBmcm9tIFwiLi4vdHlwZXMvcmVkdXhTdGF0ZVwiO1xyXG5cclxuLy8qIOy0iOq4sCDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiBDb21tb25TdGF0ZSA9IHtcclxuICAgIHZhbGlkYXRlTW9kZTogZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IGNvbW1vbiA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwiY29tbW9uXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIC8vKiB2YWxpZGF0ZU1vZGUg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0VmFsaWRhdGVNb2RlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS52YWxpZGF0ZU1vZGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vbkFjdGlvbnMgPSB7Li4uY29tbW9uLmFjdGlvbnN9O1xyXG5leHBvcnQgZGVmYXVsdCBjb21tb247IiwiaW1wb3J0IHsgSFlEUkFURSwgY3JlYXRlV3JhcHBlciwgTWFrZVN0b3JlIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHtcclxuICAgIFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VTZWxlY3RvciBhcyB1c2VSZWR1eFNlbGVjdG9yXHJcbn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IGF1dGggZnJvbSBcIi4vYXV0aFwiO1xyXG5pbXBvcnQgcmVnaXN0ZXJSb29tIGZyb20gXCIuL3JlZ2lzdGVyUm9vbVwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY29tbW9uOiBjb21tb24ucmVkdWNlcixcclxuICAgIHVzZXI6IHVzZXIucmVkdWNlcixcclxuICAgIGF1dGg6IGF1dGgucmVkdWNlcixcclxuICAgIHJlZ2lzdGVyUm9vbTogcmVnaXN0ZXJSb29tLnJlZHVjZXIsXHJcbn0pO1xyXG5cclxuLy8qIOyKpO2GoOyWtCDtg4DsnoVcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxubGV0IGluaXRpYWxSb290U3RhdGU6IFJvb3RTdGF0ZTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSl7XHJcbiAgICAgICAgaWYoc3RhdGUgPT09IGluaXRpYWxSb290U3RhdGUpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcm9vdFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbn07XHJcblxyXG4vLyog7YOA7J6FIOyngOybkOuQmOuKlCDsu6TsiqTthYAgdXNlU2VsZWN0b3Ig66eM65Ok6riwXHJcbmV4cG9ydCBjb25zdCB1c2VTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVJlZHV4U2VsZWN0b3I7XHJcblxyXG5jb25zdCBpbml0U3RvcmU6IE1ha2VTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgICByZWR1Y2VyLFxyXG4gICAgICBkZXZUb29sczogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgaW5pdGlhbFJvb3RTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpOyIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgYmVkcm9vbUNvdW50TGlzdCB9IGZyb20gXCIuLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgeyBCZWRUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL3Jvb21cIjtcclxuXHJcbnR5cGUgUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJvb21UeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgaXNTZXRVcEZvckd1ZXN0OiBib29sZWFuIHwgbnVsbDtcclxuICAgIG1heGltdW1HdWVzdENvdW50OiBudW1iZXI7XHJcbiAgICBiZWRyb29tQ291bnQ6IG51bWJlcjtcclxuICAgIGJlZENvdW50OiBudW1iZXI7XHJcbiAgICBiZWRMaXN0OiB7aWQ6bnVtYmVyOyBiZWRzOiB7IHR5cGU6IEJlZFR5cGU7IGNvdW50OiBudW1iZXJ9W119W107XHJcbiAgICBwdWJsaWNCZWRMaXN0OiB7dHlwZTogQmVkVHlwZTsgY291bnQ6IG51bWJlcn1bXTtcclxufVxyXG5cclxuLy8qIOy0iOq4sCDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIC8vKiDqsbTrrLwg7Jyg7ZiVIO2BsCDrspTso7xcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBudWxsLFxyXG4gICAgLy8qIOqxtOusvCDsnKDtmJVcclxuICAgIGJ1aWxkaW5nVHlwZTogbnVsbCxcclxuICAgIC8vKiDsiJnshowg7Jyg7ZiVXHJcbiAgICByb29tVHlwZTogbnVsbCxcclxuICAgIC8vKiDqsozsiqTtirjrp4zsnYQg7JyE7ZW0IOunjOuTpOyWtOynhCDsiJnshozsnbjqsIBcclxuICAgIGlzU2V0VXBGb3JHdWVzdDogbnVsbCxcclxuICAgIC8vKiDstZzrjIAg7IiZ67CVIOyduOybkFxyXG4gICAgbWF4aW11bUd1ZXN0Q291bnQ6IDEsXHJcbiAgICAvLyog7Lmo7IukIOqwnOyImFxyXG4gICAgYmVkcm9vbUNvdW50OiAwLFxyXG4gICAgLy8qIOy5qOuMgCDqsJzsiJhcclxuICAgIGJlZENvdW50OiAxLFxyXG4gICAgLy8qIOy5qOuMgCDsnKDtmJVcclxuICAgIGJlZExpc3Q6IFtdLFxyXG4gICAgLy8qIOqzteyaqeqzteqwhCDsuajrjIAg7Jyg7ZiVXHJcbiAgICBwdWJsaWNCZWRMaXN0OiBbXSxcclxuXHJcbn1cclxuXHJcbmNvbnN0IHJlZ2lzdGVyUm9vbSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwicmVnaXN0ZXJSb29tXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIC8vKiDtgbAg6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMYXJnZUJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5sYXJnZUJ1aWxkaW5nVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyog6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCdWlsZGluZ1R5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlLmJ1aWxkaW5nVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyog7IiZ7IaMIOycoO2YlSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRSb29tVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCI+KXtcclxuICAgICAgICAgICAgc3RhdGUucm9vbVR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOqyjOyKpO2KuOyaqSDsiJnshozsnbjsp4Ag67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0SXNTZXRVcEZvckd1ZXN0KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NldFVwRm9yR3Vlc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8qIOy1nOuMgCDsiJnrsJUg7J247JuQIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldE1heGltdW1HdWVzdENvdW50KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLm1heGltdW1HdWVzdENvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vKiDsuajsi6Qg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZHJvb21Db3VudChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBjb25zdCBiZWRyb29tQ291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgbGV0IHsgYmVkTGlzdCB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5iZWRyb29tQ291bnQgPSBiZWRyb29tQ291bnQ7XHJcblxyXG4gICAgICAgICAgICBpZihiZWRyb29tQ291bnQgPCBiZWRMaXN0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAvLyog6riw7KG0IOy5qOuMgCDqsJzsiJjqsIAg642UIOunjuycvOuptCDstIjqs7wg67aA67aEIOyemOudvOuCtOq4sFxyXG4gICAgICAgICAgICAgICAgYmVkTGlzdCA9IHN0YXRlLmJlZExpc3Quc2xpY2UoMCwgYmVkcm9vbUNvdW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vKiDrs4Dqsr3rkKAg7Lmo64yAIOqwnOyImOqwgCDrjZQg66eO7Jy866m0IOuCmOuouOyngCDsuajsi6Qg7LGE7Jqw6riwXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gYmVkTGlzdC5sZW5ndGggKyAxOyBpIDwgYmVkcm9vbUNvdW50ICsgMTsgaSArPSAxKXtcclxuICAgICAgICAgICAgICAgICAgICBiZWRMaXN0LnB1c2goe2lkOiBpLCBiZWRzOiBbXX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5iZWRMaXN0ID0gYmVkTGlzdDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vKiDstZzrjIAg7Lmo7IukIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5iZWRDb3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyog7Lmo64yAIOycoO2YlSDqsK/siJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkVHlwZUNvdW50KFxyXG4gICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBiZWRyb29tSWQ6IG51bWJlcjsgdHlwZTogQmVkVHlwZTsgY291bnQ6IG51bWJlciB9PlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY29uc3QgeyBiZWRyb29tSWQsIHR5cGUsIGNvdW50IH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIFxyXG4gICAgICAgICAgY29uc3QgYmVkcm9vbSA9IHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV07XHJcbiAgICBcclxuICAgICAgICAgIGNvbnN0IHByZXZCZWRzID0gYmVkcm9vbS5iZWRzO1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwcmV2QmVkcy5maW5kSW5kZXgoKGJlZCkgPT4gYmVkLnR5cGUgPT09IHR5cGUpO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAvLyog7YOA7J6F7J20IOyXhuuLpOuptFxyXG4gICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHMgPSBbLi4ucHJldkJlZHMsIHsgdHlwZSwgY291bnQgfV07XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vKiDtg4DsnoXsnbQg7KG07J6s7ZWc64uk66m0XHJcbiAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHNbaW5kZXhdLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclJvb21BY3Rpb25zID0gey4uLnJlZ2lzdGVyUm9vbS5hY3Rpb25zfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyUm9vbTsiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFVzZXJUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclN0YXRlIH0gZnJvbSBcIi4uL3R5cGVzL3JlZHV4U3RhdGVcIjtcclxuXHJcbi8vKiDstIjquLAg7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclN0YXRlID0ge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIGxhc3RuYW1lOiBcIlwiLFxyXG4gICAgZmlyc3RuYW1lOiBcIlwiLFxyXG4gICAgYmlydGhkYXk6IFwiXCIsXHJcbiAgICBpc0xvZ2dlZDogZmFsc2UsXHJcbiAgICBwcm9maWxlSW1hZ2U6IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCB1c2VyID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIC8vKiDroZzqt7jsnbjtlZwg7Jyg7KCAIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldExvZ2dlZFVzZXIoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxVc2VyVHlwZT4pe1xyXG4gICAgICAgICAgICBzdGF0ZSA9IHsuLi5hY3Rpb24ucGF5bG9hZCwgaXNMb2dnZWQ6IHRydWV9O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyog7Jyg7KCAIOy0iOq4sO2ZlCDtlZjquLBcclxuICAgICAgICBpbml0VXNlcihzdGF0ZSkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckFjdGlvbnMgPSB7Li4udXNlci5hY3Rpb25zfTtcclxuZXhwb3J0IGRlZmF1bHQgdXNlcjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNhcmRpbmFsOiBcIiNhNDE4NTBcIixcbiAgZGF2aWRzb25fb3JhbmdlOiBcIiNjMTM1MTVcIixcbiAgdGF3bnk6IFwiI2Q5MzkwMFwiLFxuICBhbWFyYW50aDogXCIjRTUxRTUzXCIsXG4gIG9yYW5nZTogXCIjZmM2NDJkXCIsXG4gIG1haW5fcGluazogXCIjRkYzODVDXCIsXG4gIGJpdHRlcnN3ZWV0OiBcIiNmZjVhNWZcIixcbiAgYmxhY2s6IFwiIzIyMjIyMlwiLFxuICBjaGFyY29hbDogXCIjNDg0ODQ4XCIsXG4gIHNub3c6IFwiI0ZGRjhGNlwiLFxuICBncmF5XzQ4OiBcIiM0ODQ4NDhcIixcbiAgZ3JheV83MTogXCIjNzE3MTcxXCIsXG4gIGdyYXlfNzY6IFwiIzc2NzY3NlwiLFxuICBncmF5XzgwOiBcIiM4MDgwODBcIixcbiAgZ3JheV84NTogXCIjODU4NTg1XCIsXG4gIGdyYXlfYWE6IFwiI2FhYVwiLFxuICBncmF5X2JiOiBcIiNiYmJcIixcbiAgZ3JheV9iMDogXCIjYjBiMGIwXCIsXG4gIGdyYXlfYzQ6IFwiI2M0YzRjNFwiLFxuICBncmF5X2RkOiBcIiNkZGRcIixcbiAgZ3JheV9lYjogXCIjZWJlYmViXCIsXG4gIGdyYXlfZTU6IFwiI2U1ZTVlNVwiLFxuICBncmF5X2Y3OiBcIiNmN2Y3ZjdcIixcbiAgZGFya19jeWFuOiBcIiMwMDg0ODlcIixcbiAgZ3JlZW46IFwiIzAwOEEwNVwiLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=