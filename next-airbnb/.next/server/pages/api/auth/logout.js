(function() {
var exports = {};
exports.id = "pages/api/auth/logout";
exports.ids = ["pages/api/auth/logout"];
exports.modules = {

/***/ "./pages/api/auth/logout.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/logout.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  try {
    //* 로그아웃 하기
    if (req.method === "DELETE") {
      res.setHeader("Set-Cookie", "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly");
      res.statusCode = 204;
      return res.end();
    }
  } catch (e) {
    console.log(e);
    return res.send(e.message);
  }

  res.statusCode = 405;
  return res.end();
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/logout.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3BhZ2VzL2FwaS9hdXRoL2xvZ291dC50cyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzdGF0dXNDb2RlIiwiZW5kIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSwrREFBZSxDQUFDQSxHQUFELEVBQXNCQyxHQUF0QixLQUErQztBQUMxRCxNQUFJO0FBQ0E7QUFDQSxRQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxRQUFsQixFQUEyQjtBQUN2QkQsU0FBRyxDQUFDRSxTQUFKLENBQ0ksWUFESixFQUVJLHdFQUZKO0FBSUFGLFNBQUcsQ0FBQ0csVUFBSixHQUFpQixHQUFqQjtBQUNBLGFBQU9ILEdBQUcsQ0FBQ0ksR0FBSixFQUFQO0FBQ0g7QUFDSixHQVZELENBVUMsT0FBT0MsQ0FBUCxFQUFTO0FBQ05DLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0EsV0FBT0wsR0FBRyxDQUFDUSxJQUFKLENBQVNILENBQUMsQ0FBQ0ksT0FBWCxDQUFQO0FBQ0g7O0FBRURULEtBQUcsQ0FBQ0csVUFBSixHQUFpQixHQUFqQjtBQUNBLFNBQU9ILEdBQUcsQ0FBQ0ksR0FBSixFQUFQO0FBQ0gsQ0FsQkQsRSIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9sb2dvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyog66Gc6re47JWE7JuDIO2VmOq4sFxyXG4gICAgICAgIGlmKHJlcS5tZXRob2QgPT09IFwiREVMRVRFXCIpe1xyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKFxyXG4gICAgICAgICAgICAgICAgXCJTZXQtQ29va2llXCIsXHJcbiAgICAgICAgICAgICAgICBcImFjY2Vzc190b2tlbj07IHBhdGg9LzsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVDsgaHR0cG9ubHlcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjA0O1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmVuZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfWNhdGNoIChlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoZS5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcclxuICAgIHJldHVybiByZXMuZW5kKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9