(function() {
var exports = {};
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
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

/***/ "./pages/api/auth/login.ts":
/*!*********************************!*\
  !*** ./pages/api/auth/login.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ "./lib/data/index.ts");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "POST") {
    try {
      const {
        email,
        password
      } = req.body;

      if (!email || !password) {
        res.statusCode = 400;
        return res.send("필수 데이터가 없습니다.");
      }

      const user = _lib_data__WEBPACK_IMPORTED_MODULE_0__.default.user.find({
        email
      });

      if (!user) {
        res.statusCode = 404;
        return res.send("해당 이메일의 유저가 없습니다.");
      }

      const isPasswordMatched = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compareSync(password, user.password);

      if (!isPasswordMatched) {
        res.statusCode = 403;
        return res.send("비밀번호가 일치하지 않습니다.");
      }

      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign(String(user.id), process.env.JWT_SECRET);
      res.setHeader("Set-Cookie", `access_token=${token}; path=/; expires=${new Date(Date.now() + 60 * 60 * 24 * 1000 * 3 //3일
      ).toUTCString()}; httponly`);
      const userWithoutPassword = user;
      delete userWithoutPassword.password;
      res.statusCode = 200;
      return res.send(user);
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

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("bcryptjs");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/login.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2xpYi9kYXRhL2luZGV4LnRzIiwid2VicGFjazovL25leHQtYWlyYm5iLy4vbGliL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLnRzIiwid2VicGFjazovL25leHQtYWlyYm5iL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1haXJibmIvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiJdLCJuYW1lcyI6WyJEYXRhIiwidXNlciIsImdldExpc3QiLCJ1c2Vyc0J1ZmZlciIsInJlYWRGaWxlU3luYyIsInVzZXJzU3RyaW5nIiwidG9TdHJpbmciLCJ1c2VycyIsIkpTT04iLCJwYXJzZSIsImV4aXN0IiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaW5kZXgiLCJzb21lIiwiZmluZCIsImlkIiwid3JpdGUiLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5IiwicmVxIiwicmVzIiwibWV0aG9kIiwicGFzc3dvcmQiLCJib2R5Iiwic3RhdHVzQ29kZSIsInNlbmQiLCJpc1Bhc3N3b3JkTWF0Y2hlZCIsImJjcnlwdCIsInRva2VuIiwiand0IiwiU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJzZXRIZWFkZXIiLCJEYXRlIiwibm93IiwidG9VVENTdHJpbmciLCJ1c2VyV2l0aG91dFBhc3N3b3JkIiwiZSIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxJQUFJLEdBQUc7QUFBQ0MsTUFBSUE7QUFBTCxDQUFiO0FBRUEsK0RBQWVELElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFHQTtBQUNBLE1BQU1FLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU1DLFdBQVcsR0FBR0MsZ0RBQVksQ0FBQyxp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S0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBQWYsR0FBc0IsQ0FESyxDQUNIO0FBREcsUUFFeENDLFdBRndDLEVBRTFCLFlBSnBCO0FBT0EsWUFBTUMsbUJBQThELEdBQUd4QyxJQUF2RTtBQUVBLGFBQU93QyxtQkFBbUIsQ0FBQ2hCLFFBQTNCO0FBQ0FGLFNBQUcsQ0FBQ0ksVUFBSixHQUFpQixHQUFqQjtBQUNBLGFBQU9KLEdBQUcsQ0FBQ0ssSUFBSixDQUFTM0IsSUFBVCxDQUFQO0FBRUgsS0FoQ0QsQ0FnQ0UsT0FBTXlDLENBQU4sRUFBUztBQUNQOUIsYUFBTyxDQUFDQyxHQUFSLENBQVk2QixDQUFaO0FBQ0FuQixTQUFHLENBQUNJLFVBQUosR0FBaUIsR0FBakI7QUFDQSxhQUFPSixHQUFHLENBQUNLLElBQUosQ0FBU2MsQ0FBVCxDQUFQO0FBQ0g7QUFDSjs7QUFDRG5CLEtBQUcsQ0FBQ0ksVUFBSixHQUFpQixHQUFqQjtBQUNBLFNBQU9KLEdBQUcsQ0FBQ29CLEdBQUosRUFBUDtBQUNILENBMUNELEU7Ozs7Ozs7Ozs7O0FDUkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5jb25zdCBEYXRhID0ge3VzZXJ9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiLCJpbXBvcnQgeyByZWFkRmlsZVN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgU3RvcmVkVXNlclR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdXNlclwiO1xyXG5cclxuLy8qIOycoOyggCDrpqzsiqTtirgg642w7J207YSwIOu2iOufrOyYpOq4sFxyXG5jb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJzQnVmZmVyID0gcmVhZEZpbGVTeW5jKFwiZGF0YS91c2Vycy5qc29uXCIpO1xyXG4gIGNvbnN0IHVzZXJzU3RyaW5nID0gdXNlcnNCdWZmZXIudG9TdHJpbmcoKTtcclxuICBpZiAoIXVzZXJzU3RyaW5nKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGNvbnN0IHVzZXJzOiBTdG9yZWRVc2VyVHlwZVtdID0gSlNPTi5wYXJzZSh1c2Vyc1N0cmluZyk7XHJcbiAgcmV0dXJuIHVzZXJzO1xyXG59O1xyXG5cclxuLy8qIGVtYWls7J2YIOycoOyggOqwgCDsnojripTsp4Ag7ZmV7J247ZWY6riwXHJcbmNvbnN0IGV4aXN0ID0gKHsgZW1haWwgfTogeyBlbWFpbDogc3RyaW5nIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwi7Jyg7KCA67mE6rWQ7IucIOydtOuplOydvCDtmZXsnbggaW4gZGF0YS91c2VyLnRzICAgOiAgIFwiICsgZW1haWwpO1xyXG4gIGNvbnN0IHVzZXJzID0gZ2V0TGlzdCgpO1xyXG4gIHVzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IChcclxuICAgICAgY29uc29sZS5sb2coXCLsnKDsoIDrp7Ug64+M66aw64ukICA6ICBcIiArIHVzZXIuZW1haWwpXHJcbiAgKSk7XHJcbiAgcmV0dXJuIHVzZXJzLnNvbWUoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGVtYWlsKTtcclxufTtcclxuXHJcbi8vKiBlbWFpbCDrmJDripQgaWTsnZgg7Jyg7KCAIOu2iOufrOyYpOq4sFxyXG5jb25zdCBmaW5kID0gKHsgZW1haWwsIGlkIH06IHsgZW1haWw/OiBzdHJpbmc7IGlkPzogbnVtYmVyIH0pID0+IHtcclxuICBjb25zdCB1c2VycyA9IGdldExpc3QoKTtcclxuICByZXR1cm4gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5lbWFpbCA9PT0gZW1haWwgfHwgdXNlci5pZCA9PT0gaWQpO1xyXG59O1xyXG5cclxuLy8qIOycoOyggCDrpqzsiqTtirgg7KCA7J6l7ZWY6riwXHJcbmNvbnN0IHdyaXRlID0gYXN5bmMgKHVzZXJzOiBTdG9yZWRVc2VyVHlwZVtdKSA9PiB7XHJcbiAgd3JpdGVGaWxlU3luYyhcImRhdGEvdXNlcnMuanNvblwiLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGdldExpc3QsIGV4aXN0LCB3cml0ZSwgZmluZCB9O1xyXG4iLCJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBTdG9yZWRVc2VyVHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy91c2VyXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICAgICAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFwi7ZWE7IiYIOuNsOydtO2EsOqwgCDsl4bsirXri4jri6QuXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IERhdGEudXNlci5maW5kKHtlbWFpbH0pO1xyXG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFwi7ZW064u5IOydtOuplOydvOydmCDsnKDsoIDqsIAg7JeG7Iq164uI64ukLlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNQYXNzd29yZE1hdGNoZWQgPSBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICBpZiAoIWlzUGFzc3dvcmRNYXRjaGVkKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFwi67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuXCIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oU3RyaW5nKHVzZXIuaWQpLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUISk7XHJcbiAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoXHJcbiAgICAgICAgICAgICAgICBcIlNldC1Db29raWVcIixcclxuICAgICAgICAgICAgICAgIGBhY2Nlc3NfdG9rZW49JHt0b2tlbn07IHBhdGg9LzsgZXhwaXJlcz0ke25ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICBEYXRlLm5vdygpICsgNjAgKiA2MCAqIDI0ICogMTAwMCAqIDMgLy8z7J28XHJcbiAgICAgICAgICAgICAgICApLnRvVVRDU3RyaW5nKCl9OyBodHRwb25seWBcclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXNlcldpdGhvdXRQYXNzd29yZDogUGFydGlhbDxQaWNrPFN0b3JlZFVzZXJUeXBlLCBcInBhc3N3b3JkXCI+PiA9IHVzZXI7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgdXNlcldpdGhvdXRQYXNzd29yZC5wYXNzd29yZDtcclxuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc2VuZCh1c2VyKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xyXG4gICAgcmV0dXJuIHJlcy5lbmQoKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9