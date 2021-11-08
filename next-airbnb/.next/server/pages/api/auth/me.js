(function() {
var exports = {};
exports.id = "pages/api/auth/me";
exports.ids = ["pages/api/auth/me"];
exports.modules = {

/***/ "./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./lib/data/user.ts");

const Data = {
  user: _user__WEBPACK_IMPORTED_MODULE_0__.default
};
/* harmony default export */ __webpack_exports__["default"] = (Data);

/***/ }),

/***/ "./lib/data/user.ts":
/*!**************************!*\
  !*** ./lib/data/user.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);


//* 유저 리스트 데이터 불러오기
const getList = () => {
  const usersBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)("data/users.json");
  const usersString = usersBuffer.toString();

  if (!usersString) {
    return [];
  }

  const users = JSON.parse(usersString);
  return users;
}; //* email의 유저가 있는지 확인하기


const exist = ({
  email
}) => {
  console.log("유저비교시 이메일 확인 in data/user.ts   :   " + email);
  const users = getList();
  users.map((user, index) => console.log("유저맵 돌린다  :  " + user.email));
  return users.some(user => user.email === email);
}; //* email 또는 id의 유저 불러오기


const find = ({
  email,
  id
}) => {
  const users = getList();
  return users.find(user => user.email === email || user.id === id);
}; //* 유저 리스트 저장하기


const write = async users => {
  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)("data/users.json", JSON.stringify(users));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getList,
  exist,
  write,
  find
});

/***/ }),

/***/ "./pages/api/auth/me.ts":
/*!******************************!*\
  !*** ./pages/api/auth/me.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data */ "./lib/data/index.ts");


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "GET") {
    try {
      const accessToken = req.headers.cookie;

      if (!accessToken) {
        res.statusCode = 400;
        return res.send("access_token이 없습니다.");
      }

      const userId = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(accessToken, process.env.JWT_SECRET);
      const user = _lib_data__WEBPACK_IMPORTED_MODULE_1__.default.user.find({
        id: Number(userId)
      });

      if (!user) {
        res.statusCode = 404;
        return res.send("해당 유저가 없습니다.");
      }

      const userWithoutPassword = user;
      delete userWithoutPassword.password;
      res.statusCode = 200;
      return res.send(userWithoutPassword);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      return res.send(e);
    }
  }

  res.statusCode = 405;
  return res.end();
});

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/me.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2xpYi9kYXRhL2luZGV4LnRzIiwid2VicGFjazovL25leHQtYWlyYm5iLy4vbGliL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3BhZ2VzL2FwaS9hdXRoL21lLnRzIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIl0sIm5hbWVzIjpbIkRhdGEiLCJ1c2VyIiwiZ2V0TGlzdCIsInVzZXJzQnVmZmVyIiwicmVhZEZpbGVTeW5jIiwidXNlcnNTdHJpbmciLCJ0b1N0cmluZyIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwiZXhpc3QiLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpbmRleCIsInNvbWUiLCJmaW5kIiwiaWQiLCJ3cml0ZSIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJhY2Nlc3NUb2tlbiIsImhlYWRlcnMiLCJjb29raWUiLCJzdGF0dXNDb2RlIiwic2VuZCIsInVzZXJJZCIsImp3dCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiTnVtYmVyIiwidXNlcldpdGhvdXRQYXNzd29yZCIsInBhc3N3b3JkIiwiZSIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxJQUFJLEdBQUc7QUFBQ0MsTUFBSUE7QUFBTCxDQUFiO0FBRUEsK0RBQWVELElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFHQTtBQUNBLE1BQU1FLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU1DLFdBQVcsR0FBR0MsZ0RBQVksQ0FBQyxpQkFBRCxDQUFoQztBQUNBLFFBQU1DLFdBQVcsR0FBR0YsV0FBVyxDQUFDRyxRQUFaLEVBQXBCOztBQUNBLE1BQUksQ0FBQ0QsV0FBTCxFQUFrQjtBQUNoQixX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Q0FBLDBDIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuY29uc3QgRGF0YSA9IHt1c2VyfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGE7IiwiaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IFN0b3JlZFVzZXJUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3VzZXJcIjtcclxuXHJcbi8vKiDsnKDsoIAg66as7Iqk7Yq4IOuNsOydtO2EsCDrtojrn6zsmKTquLBcclxuY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB1c2Vyc0J1ZmZlciA9IHJlYWRGaWxlU3luYyhcImRhdGEvdXNlcnMuanNvblwiKTtcclxuICBjb25zdCB1c2Vyc1N0cmluZyA9IHVzZXJzQnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgaWYgKCF1c2Vyc1N0cmluZykge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBjb25zdCB1c2VyczogU3RvcmVkVXNlclR5cGVbXSA9IEpTT04ucGFyc2UodXNlcnNTdHJpbmcpO1xyXG4gIHJldHVybiB1c2VycztcclxufTtcclxuXHJcbi8vKiBlbWFpbOydmCDsnKDsoIDqsIAg7J6I64qU7KeAIO2ZleyduO2VmOq4sFxyXG5jb25zdCBleGlzdCA9ICh7IGVtYWlsIH06IHsgZW1haWw6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIuycoOyggOu5hOq1kOyLnCDsnbTrqZTsnbwg7ZmV7J24IGluIGRhdGEvdXNlci50cyAgIDogICBcIiArIGVtYWlsKTtcclxuICBjb25zdCB1c2VycyA9IGdldExpc3QoKTtcclxuICB1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgIGNvbnNvbGUubG9nKFwi7Jyg7KCA66e1IOuPjOumsOuLpCAgOiAgXCIgKyB1c2VyLmVtYWlsKVxyXG4gICkpO1xyXG4gIHJldHVybiB1c2Vycy5zb21lKCh1c2VyKSA9PiB1c2VyLmVtYWlsID09PSBlbWFpbCk7XHJcbn07XHJcblxyXG4vLyogZW1haWwg65iQ64qUIGlk7J2YIOycoOyggCDrtojrn6zsmKTquLBcclxuY29uc3QgZmluZCA9ICh7IGVtYWlsLCBpZCB9OiB7IGVtYWlsPzogc3RyaW5nOyBpZD86IG51bWJlciB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcnMgPSBnZXRMaXN0KCk7XHJcbiAgcmV0dXJuIHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGVtYWlsIHx8IHVzZXIuaWQgPT09IGlkKTtcclxufTtcclxuXHJcbi8vKiDsnKDsoIAg66as7Iqk7Yq4IOyggOyepe2VmOq4sFxyXG5jb25zdCB3cml0ZSA9IGFzeW5jICh1c2VyczogU3RvcmVkVXNlclR5cGVbXSkgPT4ge1xyXG4gIHdyaXRlRmlsZVN5bmMoXCJkYXRhL3VzZXJzLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkodXNlcnMpKTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBnZXRMaXN0LCBleGlzdCwgd3JpdGUsIGZpbmQgfTtcclxuIiwiaW1wb3J0IHsgTmV4dEFwaVJlc3BvbnNlLCBOZXh0QXBpUmVxdWVzdCB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGFcIjtcclxuaW1wb3J0IHsgU3RvcmVkVXNlclR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvdXNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIil7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXEuaGVhZGVycy5jb29raWU7XHJcbiAgICAgICAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFwiYWNjZXNzX3Rva2Vu7J20IOyXhuyKteuLiOuLpC5cIilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gand0LnZlcmlmeShhY2Nlc3NUb2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCEpO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gRGF0YS51c2VyLmZpbmQoe2lkOiBOdW1iZXIodXNlcklkKX0pO1xyXG4gICAgICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc2VuZChcIu2VtOuLuSDsnKDsoIDqsIAg7JeG7Iq164uI64ukLlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXNlcldpdGhvdXRQYXNzd29yZDogUGFydGlhbDxQaWNrPFN0b3JlZFVzZXJUeXBlLCBcInBhc3N3b3JkXCI+PiA9IHVzZXI7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB1c2VyV2l0aG91dFBhc3N3b3JkLnBhc3N3b3JkO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZT0yMDA7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc2VuZCh1c2VyV2l0aG91dFBhc3N3b3JkKTtcclxuICAgICAgICB9IGNhdGNoIChlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xyXG4gICAgcmV0dXJuIHJlcy5lbmQoKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyJdLCJzb3VyY2VSb290IjoiIn0=