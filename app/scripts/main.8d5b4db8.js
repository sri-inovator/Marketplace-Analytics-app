(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 41993:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 41993;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 86327:
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
var Constants = {
  APP_HOME: 'APP_HOME',
  APP_INITIALIZATION: {
    SCRIPT_URL: 'https://cdn.freshdev.io/assets/app-client@2.js'
  },
  NOTIFICATION_TYPES: {
    DANGER: 'danger',
    ERROR: 'error',
    SUCCESS: 'success'
  },
  NOTIFICATION_MESSAGES: {
    APP_INITIALIZATION_ERROR: 'Error initializing freshsales app:',
    SETHOME_ERROR: 'Error setting home in freshsales app:',
    FETCH_REWARD_ERROR: "Error occurred while fetching rewards activities",
    FETCH_USER_ERROR: "Error fetching user data in freshsales app:",
    WENT_WRONG_ERROR: "Something went wrong!",
    COPY_SUCCESS: "Link is copied!",
    COPY_FAIL: "Failed to copy link!",
    NOTE_VALIDATION: "This field cannot be empty",
    ERROR_MSG_ONLY_INTEGERS: "Please enter only positive integer values",
    ADD_POINTS_SUCCESS_MESSAGE: "Points added successfully",
    ADD_POINTS_ERROR_MESSAGE: "Error occurred while adding points",
    REMOVE_POINTS_SUCCESS_MESSAGE: "Points removed successfully",
    REMOVE_POINTS_ERROR_MESSAGE: "Error occurred while removing points",
    ACCESS_TOKEN_ERROR: "Error fetching access token",
    ACCESS_TOKEN_ERROR_MESSAGE: "Error occured while fetching access token",
    DISABLE_STATE: "Loading... Please wait for the previous action to complete."
  }
};

/***/ }),

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _state_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/Loader */ 25984);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ 86327);
/* harmony import */ var _hooks_useScript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useScript */ 99605);
/* harmony import */ var _components_ChartComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ChartComponent */ 35954);
/* harmony import */ var _components_AppHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AppHome */ 44908);
/* harmony import */ var _components_DetailsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DetailsPage */ 89324);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var App = function App() {
  //app loading state and child component state
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_state_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], null)),
    _useState2 = _slicedToArray(_useState, 2),
    child = _useState2[0],
    setChild = _useState2[1];
  var scriptUrl = _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.APP_INITIALIZATION.SCRIPT_URL;
  var isScriptLoaded = (0,_hooks_useScript__WEBPACK_IMPORTED_MODULE_3__["default"])(scriptUrl);
  var isInstalled;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    if (!isScriptLoaded) return;
    var initializeApp = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var client;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return app.initialized();
            case 3:
              client = _context.sent;
              setHome(client);
              client.events.on("app.activated", function () {
                setHome(client);
              });
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error("error", _context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }));
      return function initializeApp() {
        return _ref.apply(this, arguments);
      };
    }();
    initializeApp();
  }, [isScriptLoaded]);
  window.addEventListener("message", function (event) {
    if (event.data.type === "getLocalStorage") {
      var localStorageValue = localStorage.getItem(event.data.key);
      event.source.postMessage({
        type: "localStorageValue",
        value: localStorageValue
      }, event.origin);
    }
  });
  var setHome = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(client) {
      var _yield$client$instanc, location, _yield$client$instanc2, instanceData, modalID;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_state_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], null));
            _context2.next = 4;
            return client.instance.context();
          case 4:
            _yield$client$instanc = _context2.sent;
            location = _yield$client$instanc.location;
            _yield$client$instanc2 = _yield$client$instanc.data;
            instanceData = _yield$client$instanc2 === void 0 ? {} : _yield$client$instanc2;
            modalID = (instanceData === null || instanceData === void 0 ? void 0 : instanceData.modalID) || "";
            if (["chat_conversation_sidebar", "conversation_user_info"].includes(location)) {
              client.instance.receive(function (_ref3) {
                var data = _ref3.data;
                if (data !== null && data !== void 0 && data.refreshSidebar) {
                  setHome(client);
                }
              });
              client.instance.resize({
                height: '568px'
              });
              isInstalled = true;
              if (["chat_conversation_sidebar", "conversation_user_info"].includes(location)) {
                setChild(isInstalled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AppHome__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  client: client,
                  isFreshchat: true
                }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChartComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  client: client
                }));
              } else {
                setChild(isInstalled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AppHome__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  client: client,
                  isFreshchat: true
                }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChartComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  client: client
                }));
              }
            } else if (["ticket_sidebar"].includes(location)) {
              client.instance.receive(function (_ref4) {
                var data = _ref4.data;
                if (data !== null && data !== void 0 && data.refreshSidebar) {
                  setHome(client);
                }
              });
              client.instance.resize({
                height: '610px'
              });
              isInstalled = true;
              setChild(isInstalled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AppHome__WEBPACK_IMPORTED_MODULE_5__["default"], {
                client: client
              }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChartComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
                client: client
              }));
            }
            if (location === 'overlay' || location === 'modal') {
              if (modalID === "viewMoreModal") {
                setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DetailsPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  client: client,
                  contact: instanceData.contact,
                  chartType: instanceData.chartType,
                  selectedData: instanceData.selectedData
                }));
              }
            }
            _context2.next = 16;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.error("ERROR", _context2.t0);
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return function setHome(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, child);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 44908:
/*!***********************************!*\
  !*** ./src/components/AppHome.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @freshworks/crayons/react */ 25843);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @freshworks/crayons/react */ 19785);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @freshworks/crayons/react */ 66905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _ChartComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartComponent */ 35954);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ 37337);
/* harmony import */ var _assets_itemsBoxArrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/itemsBoxArrow.svg */ 69843);
/* harmony import */ var _assets_itemsBoxArrow_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_itemsBoxArrow_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_showModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/showModal */ 16597);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ChatFreq = [{
  month: "Dec",
  year: "2024",
  count: 23
}, {
  month: "Jan",
  year: "2025",
  count: 92
}, {
  month: "Feb",
  year: "2025",
  count: 23
}, {
  month: "Mar",
  year: "2025",
  count: 92
}, {
  month: "Apr",
  year: "2025",
  count: 23
}, {
  month: "Jun",
  year: "2025",
  count: 92
}];
var TopicsFreq = [{
  month: "Mar",
  year: "2024",
  count: 67
}, {
  month: "Oct",
  year: "2023",
  count: 81
}];
var AppHome = function AppHome(_ref) {
  var client = _ref.client,
    isFreshchat = _ref.isFreshchat;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("bar"),
    _useState2 = _slicedToArray(_useState, 2),
    chartType = _useState2[0],
    setChartType = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ChatFreq),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedData = _useState4[0],
    setSelectedData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    contactEmail = _useState6[0],
    setContactEmail = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    mobile = _useState8[0],
    setMobile = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    contactId = _useState10[0],
    setContactId = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    ticketsFreq = _useState12[0],
    setTicketsFreq = _useState12[1]; // State for dynamic ticket data
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    url = _useState14[0],
    setUrl = _useState14[1]; // State for dynamic ticket data
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    emailNotFound = _useState16[0],
    setEmailNotFound = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState18 = _slicedToArray(_useState17, 2),
    contact = _useState18[0],
    setContact = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState20 = _slicedToArray(_useState19, 2),
    issues = _useState20[0],
    setIssues = _useState20[1]; // Store all issues
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      id: "",
      text: ""
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    firstIssue = _useState22[0],
    setFirstIssue = _useState22[1];
  var chatRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var ticketRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var topicRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var chatPopRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var ticketPopRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var topicPopRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var iconDataSource = [{
    id: "bar",
    name: "BarChart"
  }, {
    id: "pie",
    name: "PieChart"
  }, {
    id: "line",
    name: "LineChart"
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    if (client) {
      var fetchData = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _client$data, _data$contact, data, _data$contact2, _data$contact3, _data$contact4;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return client === null || client === void 0 || (_client$data = client.data) === null || _client$data === void 0 ? void 0 : _client$data.get("contact");
              case 3:
                data = _context.sent;
                console.log(data);
                setContact(data);
                if (data !== null && data !== void 0 && (_data$contact = data.contact) !== null && _data$contact !== void 0 && _data$contact.email) {
                  setContactEmail(data === null || data === void 0 || (_data$contact2 = data.contact) === null || _data$contact2 === void 0 ? void 0 : _data$contact2.email);
                  setMobile(data === null || data === void 0 || (_data$contact3 = data.contact) === null || _data$contact3 === void 0 ? void 0 : _data$contact3.mobile);
                  setContactId(data === null || data === void 0 || (_data$contact4 = data.contact) === null || _data$contact4 === void 0 ? void 0 : _data$contact4.id);
                } else {
                  setEmailNotFound(true);
                }
                _context.next = 13;
                break;
              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.error("Email Not Found", _context.t0);
                setEmailNotFound(true);
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 9]]);
        }));
        return function fetchData() {
          return _ref2.apply(this, arguments);
        };
      }();
      fetchData();
    }
  }, [client]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchTicketsData = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _client$request, response, data, formattedData, issueDataMap, firstIssueKey, firstIssueValue, _url;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (contactId) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              _context2.prev = 2;
              _context2.next = 5;
              return client === null || client === void 0 || (_client$request = client.request) === null || _client$request === void 0 ? void 0 : _client$request.invokeTemplate("getTicketsDetails", {
                context: {
                  userId: contactId,
                  product: "freshdesk"
                }
              });
            case 5:
              response = _context2.sent;
              data = JSON.parse(response.response);
              formattedData = data.conv_data_graph_list.map(function (item) {
                return {
                  month: new Date(2025, item.month - 1).toLocaleString("en-US", {
                    month: "short"
                  }),
                  year: item.year.toString(),
                  count: item.count
                };
              }); // Extract issue data
              issueDataMap = data.issue_data_list.issue_data_map || {}; // Store all issues
              firstIssueKey = Object.keys(issueDataMap)[0]; // Get first issue ID
              firstIssueValue = issueDataMap[firstIssueKey]; // Get first issue description
              _url = data.issue_data_list.url;
              console.log(formattedData);
              console.log(response);
              if (!(!response.status === 200)) {
                _context2.next = 16;
                break;
              }
              throw new Error("Failed to fetch ticket data");
            case 16:
              // Assuming API returns an array of { month, year, count }
              console.log(formattedData);
              setTicketsFreq(formattedData);
              setIssues(issueDataMap); // Store all issues in state
              setFirstIssue({
                id: firstIssueKey,
                text: firstIssueValue
              });
              setUrl(_url);
              _context2.next = 26;
              break;
            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](2);
              console.error("Error fetching ticket details:", _context2.t0);
            case 26:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 23]]);
      }));
      return function fetchTicketsData() {
        return _ref3.apply(this, arguments);
      };
    }();
    fetchTicketsData();
  }, [contactId, contactEmail, mobile]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (chatRef.current) chatRef.current.options = iconDataSource;
    if (ticketRef.current) ticketRef.current.options = iconDataSource;
    if (topicRef.current) topicRef.current.options = iconDataSource;
  }, []);
  var OrderInfo = function OrderInfo(_ref4) {
    var item = _ref4.item;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemPriceText, null, "Ticket Id - 121212");
  };
  var handleViewMoreClick = function handleViewMoreClick() {
    console.log(selectedData);
    (0,_utils_showModal__WEBPACK_IMPORTED_MODULE_4__["default"])(client, "showModal", "Insights", "index.html", {
      modalID: "viewMoreModal",
      contact: contact,
      chartType: chartType,
      selectedData: selectedData
    });
  };
  var handleChartSelection = function handleChartSelection(type, data) {
    console.log("kkaaa   " + data);
    console.log(data);
    setChartType(type);
    setSelectedData(data);
  };
  var handleMouseLeave = function handleMouseLeave(popoverRef) {
    var _popoverRef$current;
    popoverRef === null || popoverRef === void 0 || (_popoverRef$current = popoverRef.current) === null || _popoverRef$current === void 0 || _popoverRef$current.hide();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-6 flex flex-col items-center space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Head, null, "Insights dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_5__.FwPopover, {
    ref: chatPopRef,
    "same-width": "false"
  }, isFreshchat && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_6__.FwButton, {
    slot: "popover-trigger"
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_7__.FwListOptions, {
    onMouseLeave: function onMouseLeave() {
      return handleMouseLeave(chatPopRef);
    },
    ref: chatRef,
    slot: "popover-content",
    "option-label-path": "name",
    "option-value-path": "id",
    onFwChange: function onFwChange(e) {
      return handleChartSelection(e.detail.value, ChatFreq);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_5__.FwPopover, {
    ref: ticketPopRef,
    "same-width": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_6__.FwButton, {
    slot: "popover-trigger"
  }, "Tickets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_7__.FwListOptions, {
    onMouseLeave: function onMouseLeave() {
      return handleMouseLeave(ticketPopRef);
    },
    ref: ticketRef,
    slot: "popover-content",
    "option-label-path": "name",
    "option-value-path": "id",
    onFwChange: function onFwChange(e) {
      return handleChartSelection(e.detail.value, ticketsFreq);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_5__.FwPopover, {
    ref: topicPopRef,
    "same-width": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_6__.FwButton, {
    slot: "popover-trigger"
  }, "Topics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_7__.FwListOptions, {
    onMouseLeave: function onMouseLeave() {
      return handleMouseLeave(topicPopRef);
    },
    ref: topicRef,
    slot: "popover-content",
    "option-label-path": "name",
    "option-value-path": "id",
    onFwChange: function onFwChange(e) {
      return handleChartSelection(e.detail.value, TopicsFreq);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChartComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    chartType: chartType,
    data: selectedData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Head1, null, "Top Issues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SubscriptionInfoDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RectangleBox, {
    onClick: function onClick() {
      return window.open(url + "/a/tickets/" + firstIssue.id, "_blank");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconsAppIconsChevronRight, {
    src: (_assets_itemsBoxArrow_svg__WEBPACK_IMPORTED_MODULE_3___default())
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemFrame, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemName, null, firstIssue.text || "No issue available"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemPrice, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemPriceText, null, "Ticket Id - ", firstIssue.id || "N/A")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewAll, {
    onClick: function onClick() {
      return handleViewMoreClick();
    }
  }, "View more info"));
};
var ViewAll = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  color: var(--A800, #2c5cc5);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 16px; /* 133.333% */\n  cursor: pointer;\n  text-align: center; /* Ensures it's centered */\n  margin-top: 12px; /* Pushes it to the bottom */\n"])));
var Head = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h4(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: bold;\n  font-size: clamp(1rem, 2vw, 1.5rem); /* Dynamically adjusts size based on screen width */\n  white-space: nowrap; /* Prevents wrapping in small spaces */\n"])));
var Head1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h3(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  font-size: 1.3rem;\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var ItemName = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  font-size: 10px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n  display: block;\n  width: 100%;\n"])));
var IconsAppIconsChevronRight = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n  object-fit: cover;\n  position: absolute;\n  top: 88%;\n  right: 8%;\n  transform: translateY(-50%);\n"])));
var ItemPrice = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n"])));
var ItemPriceText = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: #12344d;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.07px;\n  text-align: left;\n  display: block;\n  width: 100%;\n"])));
var ItemFrame = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: none;\n  gap: 8px;\n  width: 100%;\n"])));
var ItemInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 300px;\n  position: relative;\n"])));
var RectangleBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  background: rgb(255, 255, 255);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border: solid 1px rgb(235, 239, 243);\n  border-radius: 12px;\n  width: 98%;\n  \n  min-width: 80%; /* Prevents it from getting too small */\n  padding: 12px;\n  transition: background 0.3s ease;\n\n  &:hover {\n    background: #f5f7f9;\n    cursor: pointer;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 300px; /* Keeps it stable on larger screens */\n  }\n"])));
var SubscriptionInfoDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 90%;\n"])));
var ButtonDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 20px;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppHome);

/***/ }),

/***/ 35954:
/*!******************************************!*\
  !*** ./src/components/ChartComponent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartkick */ 47341);
/* harmony import */ var chartkick_chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartkick/chart.js */ 89630);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ 37337);
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // Import Chart.js for rendering

var AnalyticsDashboard = function AnalyticsDashboard(_ref) {
  var chartType = _ref.chartType,
    data = _ref.data;
  console.log("ss  " + data + chartType);
  var formattedData = data.map(function (entry) {
    return ["".concat(entry.month, " ").concat(entry.year), entry.count];
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RootContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-full h-[400px] flex justify-center items-center bg-gray-100 rounded-xl p-4 shadow-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), chartType === "bar" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartkick__WEBPACK_IMPORTED_MODULE_1__.ColumnChart, {
    data: formattedData
  }), chartType === "pie" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartkick__WEBPACK_IMPORTED_MODULE_1__.PieChart, {
    data: formattedData
  }), chartType === "line" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartkick__WEBPACK_IMPORTED_MODULE_1__.LineChart, {
    data: formattedData
  })));
};
var RootContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnalyticsDashboard);

/***/ }),

/***/ 89324:
/*!***************************************!*\
  !*** ./src/components/DetailsPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 58061);
/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartkick */ 47341);
/* harmony import */ var chartkick_chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartkick/chart.js */ 89630);
/* harmony import */ var _css_util_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/util.css */ 98302);
/* harmony import */ var _css_util_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_util_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_itemsBoxArrow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/itemsBoxArrow.svg */ 69843);
/* harmony import */ var _assets_itemsBoxArrow_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_itemsBoxArrow_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ 37337);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @freshworks/crayons/react */ 43776);
/* harmony import */ var _css_Style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/Style */ 93745);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @freshworks/crayons/react */ 3913);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // Import Chart.js for rendering






var DetailsPage = function DetailsPage(_ref) {
  var client = _ref.client,
    contact = _ref.contact,
    chartType = _ref.chartType,
    selectedData = _ref.selectedData;
  function ShowSubscriptionItemInfo(_ref2) {
    var contact = _ref2.contact;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SubscriptionInfoDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RectangleBox, {
      className: "hoverable-rectangle-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_8__.FwAvatar, {
      id: "avatar",
      size: "xlarge",
      image: contact.contact.avatar,
      "fallback-text": contact.contact.first_name[0]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemInfo1, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemFrame1, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemName1, null, contact.contact.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemPrice1, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemPriceText, null, contact.contact.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemPrice2, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemPriceText, null, contact.contact.phone)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemPrice3, null)));
  }
  var OrderInfo = function OrderInfo(_ref3) {
    var item = _ref3.item;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemPriceText, null, "Ticket Id - 121212");
  };
  var InsightsPage = function InsightsPage() {
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];
    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedData),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedDatas = _useState4[0],
      setSelectedData = _useState4[1];
    var groups = ["Billing", "Revenue", "tech", "support"];
    var apiFetchFunction = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page) {
        var mockData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              mockData = [[{
                month: "Jan",
                year: "2025",
                count: 92
              }, {
                month: "Feb",
                year: "2025",
                count: 23
              }, {
                month: "Mar",
                year: "2025",
                count: 92
              }, {
                month: "Apr",
                year: "2025",
                count: 23
              }, {
                month: "May",
                year: "2025",
                count: 75
              }, {
                month: "Jun",
                year: "2025",
                count: 92
              }], [{
                month: "Jul",
                year: "2025",
                count: 65
              }, {
                month: "Aug",
                year: "2025",
                count: 34
              }, {
                month: "Sep",
                year: "2025",
                count: 48
              }, {
                month: "Oct",
                year: "2025",
                count: 29
              }, {
                month: "Nov",
                year: "2025",
                count: 57
              }, {
                month: "Dec",
                year: "2025",
                count: 81
              }]];
              return _context.abrupt("return", mockData[page - 1] || []);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function apiFetchFunction(_x) {
        return _ref4.apply(this, arguments);
      };
    }();
    var formattedData = selectedDatas.map(function (entry) {
      return ["".concat(entry.month, " ").concat(entry.year), entry.count];
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      var fetchData = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return apiFetchFunction(currentPage);
              case 2:
                data = _context2.sent;
                setSelectedData(data);
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function fetchData() {
          return _ref5.apply(this, arguments);
        };
      }();
      fetchData();
    }, [currentPage]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RootContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Head, null, "Insights"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "w-full max-w-4xl h-[400px] bg-gray-100 rounded-xl p-4 shadow-lg flex justify-center items-center"
    }, chartType === "bar" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartkick__WEBPACK_IMPORTED_MODULE_2__.ColumnChart, {
      data: formattedData,
      width: "550px"
    }), chartType === "pie" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartkick__WEBPACK_IMPORTED_MODULE_2__.PieChart, {
      data: formattedData,
      width: "600px"
    }), chartType === "line" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartkick__WEBPACK_IMPORTED_MODULE_2__.LineChart, {
      data: formattedData,
      width: "600px"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: function onClick() {
        return setCurrentPage(function (prev) {
          return Math.max(prev - 1, 1);
        });
      },
      className: "bg-gray-700 text-white px-4 py-2 rounded-md shadow-md disabled:opacity-50",
      disabled: currentPage === 1
    }, "\u25C0 Prev"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: function onClick() {
        return setCurrentPage(function (prev) {
          return prev + 1;
        });
      },
      className: "bg-gray-700 text-white px-4 py-2 rounded-md shadow-md",
      disabled: currentPage >= 2 // Only two pages in mock data
    }, "Next \u25B6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RootContainer1, null, groups && groups.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RootWrapperTab, null, groups.map(function (tab, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_9__.FwTab, {
        key: index,
        active: true,
        onClick: function onClick() {
          return console.log("akjdfajkhf");
        }
      }, tab);
    })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SubscriptionInfoDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RectangleBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconsAppIconsChevronRight, {
      src: (_assets_itemsBoxArrow_svg__WEBPACK_IMPORTED_MODULE_5___default())
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemFrame, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemName, null, "Login Issues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_css_Style__WEBPACK_IMPORTED_MODULE_7__.ItemPrice, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OrderInfo, null)))))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ShowSubscriptionItemInfo, {
    contact: contact
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InsightsPage, null));
};
var RectangleBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: rgb(255, 255, 255);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border: solid 1px rgb(235, 239, 243);\n  border-radius: 12px;\n  width: 100%;\n  min-height: 150px; /* Ensures consistent height */\n  max-width: 300px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; /* Ensures content is evenly spaced */\n  transition: background 0.3s ease;\n\n  &:hover {\n    background: #f5f7f9;\n    cursor: pointer;\n  }\n\n  @media (max-width: 768px) {\n    max-width: 100%; /* Makes it responsive */\n  }\n"])));
var ItemName = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n  display: block;\n  width: 100%;\n"])));
var SubscriptionInfoDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var Head = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].h4(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: bold;\n  font-size: clamp(1rem, 2vw, 1.5rem); /* Dynamically adjusts size based on screen width */\n  white-space: nowrap; /* Prevents wrapping in small spaces */\n"])));
var RootContainer1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center; /* Centers the tabs */\n  align-items: center;\n  position: relative;\n  padding: 20px 0;\n"])));
var ViewAll = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  color: var(--A800, #2c5cc5);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 16px;\n  cursor: pointer;\n  text-align: center;\n  margin-top: auto; /* Pushes it to the bottom */\n  margin-bottom: 20px;\n"])));
var RootWrapperTab = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; /* Allows it to adjust based on content */\n  gap: 10px;\n  width: 100%;\n  background: rgb(255, 255, 255);\n  padding: 10px;\n  box-shadow: 0px 1px 0px rgb(235, 239, 243);\n  border-radius: 8px;\n"])));
var IconsAppIconsChevronRight = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].img(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n  object-fit: cover;\n  position: absolute;\n  top: 50%;\n  right: 8%;\n  transform: translateY(-50%);\n"])));
var ButtonDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 20px;\n"])));
var RootContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailsPage);

/***/ }),

/***/ 58061:
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
var Constants = {
  APP_HOME: 'APP_HOME',
  APP_INITIALIZATION: {
    SCRIPT_URL: 'https://cdn.freshdev.io/assets/app-client@2.js'
  },
  NOTIFICATION_TYPES: {
    DANGER: 'danger',
    ERROR: 'error',
    SUCCESS: 'success'
  },
  NOTIFICATION_MESSAGES: {
    APP_INITIALIZATION_ERROR: 'Error initializing freshsales app:',
    SETHOME_ERROR: 'Error setting home in freshsales app:',
    FETCH_REWARD_ERROR: "Error occurred while fetching rewards activities",
    FETCH_USER_ERROR: "Error fetching user data in freshsales app:",
    WENT_WRONG_ERROR: "Something went wrong!",
    COPY_SUCCESS: "Link is copied!",
    COPY_FAIL: "Failed to copy link!",
    NOTE_VALIDATION: "This field cannot be empty",
    ERROR_MSG_ONLY_INTEGERS: "Please enter only positive integer values",
    ADD_POINTS_SUCCESS_MESSAGE: "Points added successfully",
    ADD_POINTS_ERROR_MESSAGE: "Error occurred while adding points",
    REMOVE_POINTS_SUCCESS_MESSAGE: "Points removed successfully",
    REMOVE_POINTS_ERROR_MESSAGE: "Error occurred while removing points",
    ACCESS_TOKEN_ERROR: "Error fetching access token",
    ACCESS_TOKEN_ERROR_MESSAGE: "Error occured while fetching access token",
    DISABLE_STATE: "Loading... Please wait for the previous action to complete."
  }
};

/***/ }),

/***/ 93745:
/*!**************************!*\
  !*** ./src/css/Style.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveTag": () => (/* binding */ ActiveTag),
/* harmony export */   "BackButton": () => (/* binding */ BackButton),
/* harmony export */   "BackButtonFrame": () => (/* binding */ BackButtonFrame),
/* harmony export */   "BackButtonFrame1": () => (/* binding */ BackButtonFrame1),
/* harmony export */   "BackIcon": () => (/* binding */ BackIcon),
/* harmony export */   "BackText": () => (/* binding */ BackText),
/* harmony export */   "BottomFrame": () => (/* binding */ BottomFrame),
/* harmony export */   "BottomFrame1": () => (/* binding */ BottomFrame1),
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "ButtonText": () => (/* binding */ ButtonText),
/* harmony export */   "ButtonText_0001": () => (/* binding */ ButtonText_0001),
/* harmony export */   "ButtonWrapper": () => (/* binding */ ButtonWrapper),
/* harmony export */   "Button_0001": () => (/* binding */ Button_0001),
/* harmony export */   "CancelReason": () => (/* binding */ CancelReason),
/* harmony export */   "CancelReasonHeaderLabel": () => (/* binding */ CancelReasonHeaderLabel),
/* harmony export */   "CancelReasonLabel": () => (/* binding */ CancelReasonLabel),
/* harmony export */   "CancelReasonOptionGroup": () => (/* binding */ CancelReasonOptionGroup),
/* harmony export */   "CancelReasonOptionalLabel": () => (/* binding */ CancelReasonOptionalLabel),
/* harmony export */   "CancelReasonOptionalMaxLenthLabel": () => (/* binding */ CancelReasonOptionalMaxLenthLabel),
/* harmony export */   "CancelReasonSection": () => (/* binding */ CancelReasonSection),
/* harmony export */   "CancelReasons": () => (/* binding */ CancelReasons),
/* harmony export */   "CancelSubscriptionButtonText": () => (/* binding */ CancelSubscriptionButtonText),
/* harmony export */   "CancelledTag": () => (/* binding */ CancelledTag),
/* harmony export */   "Columns": () => (/* binding */ Columns),
/* harmony export */   "CopyLink": () => (/* binding */ CopyLink),
/* harmony export */   "Created_Date": () => (/* binding */ Created_Date),
/* harmony export */   "CurrentSubscriptionDiv": () => (/* binding */ CurrentSubscriptionDiv),
/* harmony export */   "CurrentSubscriptionInfo": () => (/* binding */ CurrentSubscriptionInfo),
/* harmony export */   "CustomerPortalDiv": () => (/* binding */ CustomerPortalDiv),
/* harmony export */   "CustomerPortalLink": () => (/* binding */ CustomerPortalLink),
/* harmony export */   "DetailsContent": () => (/* binding */ DetailsContent),
/* harmony export */   "DetailsInfo": () => (/* binding */ DetailsInfo),
/* harmony export */   "DetailsTitle": () => (/* binding */ DetailsTitle),
/* harmony export */   "ExpiredTag": () => (/* binding */ ExpiredTag),
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "IconsAppIconsChevronRight": () => (/* binding */ IconsAppIconsChevronRight),
/* harmony export */   "IconsAppIconsCopy": () => (/* binding */ IconsAppIconsCopy),
/* harmony export */   "IconsAppIconsOpenNewTab": () => (/* binding */ IconsAppIconsOpenNewTab),
/* harmony export */   "InfoContent": () => (/* binding */ InfoContent),
/* harmony export */   "InfoDiv": () => (/* binding */ InfoDiv),
/* harmony export */   "InfoTitle": () => (/* binding */ InfoTitle),
/* harmony export */   "ItemCount": () => (/* binding */ ItemCount),
/* harmony export */   "ItemCountDiv": () => (/* binding */ ItemCountDiv),
/* harmony export */   "ItemFrame": () => (/* binding */ ItemFrame),
/* harmony export */   "ItemFrame1": () => (/* binding */ ItemFrame1),
/* harmony export */   "ItemInfo": () => (/* binding */ ItemInfo),
/* harmony export */   "ItemInfo1": () => (/* binding */ ItemInfo1),
/* harmony export */   "ItemInfoDiv": () => (/* binding */ ItemInfoDiv),
/* harmony export */   "ItemInfoDiv1": () => (/* binding */ ItemInfoDiv1),
/* harmony export */   "ItemName": () => (/* binding */ ItemName),
/* harmony export */   "ItemName1": () => (/* binding */ ItemName1),
/* harmony export */   "ItemPrice": () => (/* binding */ ItemPrice),
/* harmony export */   "ItemPrice1": () => (/* binding */ ItemPrice1),
/* harmony export */   "ItemPrice2": () => (/* binding */ ItemPrice2),
/* harmony export */   "ItemPrice3": () => (/* binding */ ItemPrice3),
/* harmony export */   "ItemPriceText": () => (/* binding */ ItemPriceText),
/* harmony export */   "LinkAndBack": () => (/* binding */ LinkAndBack),
/* harmony export */   "LinkView": () => (/* binding */ LinkView),
/* harmony export */   "MainContent": () => (/* binding */ MainContent),
/* harmony export */   "MessageWrapper": () => (/* binding */ MessageWrapper),
/* harmony export */   "ModelCancelSubscription": () => (/* binding */ ModelCancelSubscription),
/* harmony export */   "ModelNotNowButton": () => (/* binding */ ModelNotNowButton),
/* harmony export */   "ModelNotNowButtonText": () => (/* binding */ ModelNotNowButtonText),
/* harmony export */   "NoSubs": () => (/* binding */ NoSubs),
/* harmony export */   "Option": () => (/* binding */ Option),
/* harmony export */   "PauseSubscriptionButtonText": () => (/* binding */ PauseSubscriptionButtonText),
/* harmony export */   "PausedTag": () => (/* binding */ PausedTag),
/* harmony export */   "Price": () => (/* binding */ Price),
/* harmony export */   "PriceDetails": () => (/* binding */ PriceDetails),
/* harmony export */   "ProductImage": () => (/* binding */ ProductImage),
/* harmony export */   "ProductInfo": () => (/* binding */ ProductInfo),
/* harmony export */   "ProductInfoDiv": () => (/* binding */ ProductInfoDiv),
/* harmony export */   "QuantityDetails": () => (/* binding */ QuantityDetails),
/* harmony export */   "ReactivateSubscriptionText": () => (/* binding */ ReactivateSubscriptionText),
/* harmony export */   "RectangleBox": () => (/* binding */ RectangleBox),
/* harmony export */   "RectangleBox1": () => (/* binding */ RectangleBox1),
/* harmony export */   "RectangleBox2": () => (/* binding */ RectangleBox2),
/* harmony export */   "RectangleBoxHover": () => (/* binding */ RectangleBoxHover),
/* harmony export */   "RootContainer": () => (/* binding */ RootContainer),
/* harmony export */   "RootWrapperSlider": () => (/* binding */ RootWrapperSlider),
/* harmony export */   "SKUDetails": () => (/* binding */ SKUDetails),
/* harmony export */   "SealView": () => (/* binding */ SealView),
/* harmony export */   "Status": () => (/* binding */ Status),
/* harmony export */   "Status1": () => (/* binding */ Status1),
/* harmony export */   "StatusBox": () => (/* binding */ StatusBox),
/* harmony export */   "StatusButton": () => (/* binding */ StatusButton),
/* harmony export */   "StatusText": () => (/* binding */ StatusText),
/* harmony export */   "SubsNotFound": () => (/* binding */ SubsNotFound),
/* harmony export */   "SubsText": () => (/* binding */ SubsText),
/* harmony export */   "SubscriptionBox": () => (/* binding */ SubscriptionBox),
/* harmony export */   "SubscriptionBox1": () => (/* binding */ SubscriptionBox1),
/* harmony export */   "SubscriptionDetails": () => (/* binding */ SubscriptionDetails),
/* harmony export */   "SubscriptionFrame": () => (/* binding */ SubscriptionFrame),
/* harmony export */   "SubscriptionInfo1": () => (/* binding */ SubscriptionInfo1),
/* harmony export */   "SubscriptionInfoDiv": () => (/* binding */ SubscriptionInfoDiv),
/* harmony export */   "SubscriptionInfoDiv1": () => (/* binding */ SubscriptionInfoDiv1),
/* harmony export */   "SubscriptionItem": () => (/* binding */ SubscriptionItem),
/* harmony export */   "Tab": () => (/* binding */ Tab),
/* harmony export */   "TagText": () => (/* binding */ TagText)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ 37337);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RootContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var Footer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 600px;\n  padding: 12px 16px 12px 12px;\n  justify-content: flex-end;\n  align-items: flex-end;\n  gap: 12px;\n  border-radius: 0px 0px 4px 4px;\n  background: #f5f7f9;\n  position: absolute;\n"])));
var Columns = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: 16px;\n  background: rgb(255, 255, 255);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid lightgray;\n  padding: 0px 12px;\n  position: absolute;\n  left: 0px;\n  top: 4px;\n  width: 640px;\n  height: 39px;\n"])));
var Tab = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: rgb(71, 88, 103);\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 400;\n  line-height: 20px;\n  text-align: left;\n"])));
var MainContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 28px;\n  width: 540px;\n  height: 708px;\n  position: absolute;\n  left: 16px;\n  top: 71px;\n"])));
var SubscriptionInfo1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  left: 0px;\n  top: 0px;\n  position: relative;\n"])), function (props) {
  return props.showStatus ? "64px" : "50px";
});
var SubscriptionItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n  position: absolute;\n  left: 12px;\n  top: 8px;\n  &:hover {\n    color: #2c5cc5;\n    cursor: pointer;\n  }\n"])));
var Price = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: rgb(71, 88, 103);\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 400;\n  line-height: 16px;\n  text-align: left;\n  width: 208px;\n  position: absolute;\n  left: 12px;\n  top: 36px;\n"])));
var Status = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: rgb(44, 92, 197);\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 16px;\n  text-align: left;\n  position: relative;\n  padding-right: 10px;\n  left: 12px;\n  top: 56px;\n  &:hover {\n    cursor: pointer;\n  }\n"])));
var Status1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  color: rgb(44, 92, 197);\n  text-overflow: ellipsis;\n  font-size: 13px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 16px;\n  text-align: right;\n  position: relative;\n  left: 80px;\n  top: 52px;\n  &:hover {\n    cursor: pointer;\n  }\n"])));
var MessageWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  font-size: 15px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: initial;\n  line-height: 20px;\n  text-align: left;\n"])));
var ButtonWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 12px;\n  padding-top: 25px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n"])));
var ModelNotNowButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  gap: 10px;\n  border: solid 1px #cfd7df;\n  border-radius: 4px;\n  padding: 6px 12px;\n  cursor: pointer;\n  &:hover {\n    background: linear-gradient(180deg, #f5f7f9 0%, #ebf0f4 100%);\n  }\n  background: var(\n    --secondary-fill,\n    linear-gradient(180deg, #fff 0%, #f5f7f9 100%)\n  );\n"])));
var ModelNotNowButtonText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  color: #12344d;\n  text-overflow: ellipsis;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n"])));
var ModelCancelSubscription = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n  flex: none;\n  gap: 10px;\n  border: solid 1px rgb(18, 52, 77);\n  border-radius: 4px;\n  box-sizing: border-box;\n  padding: 6px 12px;\n  cursor: pointer;\n  background: linear-gradient(-180deg, rgb(38, 73, 102), rgb(18, 52, 77));\n  &:hover {\n    background: linear-gradient(-180deg, rgb(26, 61, 85), rgb(8, 37, 52));\n  }\n"])));
var CancelSubscriptionButtonText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  color: white;\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n"])));
var RootWrapperSlider = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  background: rgb(255, 255, 255);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  position: relative;\n"])));
var ItemInfoDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n  box-sizing: border-box;\n  position: absolute;\n  left: 8px;\n  top: 92px;\n"])));
var ProductInfoDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 85px;\n  height: 20px;\n  position: relative;\n"])));
var ProductInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n"])));
var SubscriptionDetails = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 160px;\n  height: 280px;\n  position: relative;\n"])));
var DetailsInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n"])));
var PriceDetails = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 41px;\n  height: 40px;\n  position: relative;\n"])));
var DetailsTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  color: rgb(71, 88, 103);\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 400;\n  line-height: 16px;\n  text-align: left;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n"])));
var DetailsContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n  position: absolute;\n  left: 0px;\n  top: 20px;\n"])));
var QuantityDetails = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  width: 120px;\n  height: 40px;\n  position: relative;\n"])));
var SKUDetails = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  width: 55px;\n  height: 40px;\n  position: relative;\n"])));
var CurrentSubscriptionDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 484px;\n  position: relative;\n"])));
var CopyLink = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 4px;\n\tbox-sizing: border-box;\n\tposition: absolute;\n\tleft: 0px;\n\ttop: 0px;\n\tcursor: pointer;\n\t&:hover {\n    text-decoration: underline;\n"])));
var SealView = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 4px;\n\tbox-sizing: border-box;\n\tposition: absolute;\n\tleft: 8px;\n\ttop: 4px;\n\tcursor: pointer;\n"])));
var LinkView = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  color: rgb(44, 92, 197);\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n"])));
var IconsAppIconsOpenNewTab = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 12px;\n  object-fit: cover;\n"])));
var CurrentSubscriptionInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 32px;\n  box-sizing: border-box;\n  position: absolute;\n  padding-bottom: 100px;\n  left: 8px;\n  top: 92px;\n  width: 620px;\n"])));
var SubscriptionFrame = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: none;\n  gap: 20px;\n  box-sizing: border-box;\n"])));
var ItemFrame = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: none;\n  gap: 8px;\n  box-sizing: border-box;\n"])));
var ItemFrame1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n"])));
var StatusBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  color: rgb(71, 88, 103);\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 400;\n  line-height: 16px;\n  text-align: left;\n"])));
var ActiveTag = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  flex: none;\n  gap: 10px;\n  border: solid 1px rgb(180, 229, 218);\n  border-radius: 4px;\n  background: rgb(224, 245, 241);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  box-sizing: border-box;\n  padding: 5px 8px;\n"])));
var BackIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 12px;\n  object-fit: cover;\n"])));
var LinkAndBack = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  height: 68px;\n  position: fixed;\n  top: 0px;\n  width: 635px;\n  background-color: white;\n  padding: 0px 10px 14px 15px;\n  z-index: 2;\n"])));
var PausedTag = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  flex: none;\n  gap: 10px;\n  border: solid 1px rgb(253, 219, 181);\n  border-radius: 4px;\n  background: rgb(254, 241, 225);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  box-sizing: border-box;\n  padding: 5px 8px;\n"])));
var BackButtonFrame = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  width: 62px;\n  height: 24px;\n  position: absolute;\n  left: 8px;\n  top: 44px;\n"])));
var BackButtonFrame1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  width: 62px;\n  height: 24px;\n  position: absolute;\n  left: 8px;\n  top: 10px;\n"])));
var BackButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n  border-radius: 4px;\n  background-color: #f5f7f9;\n  box-sizing: border-box;\n  padding: 5px 8px 5px 8px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 62px;\n  height: 24px;\n  transform: translateY(2px);\n  transition: transform 0.3s;\n  &:active {\n    transform: translateY(3px);\n  }\n  &:hover {\n    background-color: rgb(218, 222, 227);\n  }\t\n"])));
var BackText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  color: #12344d;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  text-align: left;\n  color: ", ";\n"])), function (props) {
  return props.isHovered ? "#2C5CC5" : "#12344D";
});
var ExpiredTag = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  flex: none;\n  gap: 10px;\n  border: solid 1px rgb(128, 128, 128);\n  border-radius: 4px;\n  background: rgb(128, 128, 128);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  box-sizing: border-box;\n  padding: 5px 8px;\n"])));
var CancelledTag = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  flex: none;\n  gap: 10px;\n  border: solid 1px rgb(255, 208, 214);\n  border-radius: 4px;\n  background: rgb(255, 236, 240);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  box-sizing: border-box;\n  padding: 5px 8px;\n"])));
var TagText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  color: ", ";\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  text-align: left;\n"])), function (props) {
  return props.tagColor || "rgb(0, 121, 91)";
});
var InfoDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  width: 260px;\n  height: 40px;\n  position: relative;\n"])));
var ItemCountDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  width: 69px;\n  height: 24px;\n  position: relative;\n"])));
var InfoTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  color: rgb(71, 88, 103);\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 400;\n  line-height: 16px;\n  text-align: left;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n"])));
var InfoContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n  position: absolute;\n  left: 0px;\n  top: 20px;\n  width: 300px;\n"])));
var CustomerPortalDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  width: 134px;\n  height: 40px;\n  position: relative;\n"])));
var CustomerPortalLink = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  width: 129px;\n  height: 20px;\n  position: absolute;\n  left: 0px;\n  top: 20px;\n"])));
var IconsAppIconsCopy = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  width: 16px;\n  height: 16px;\n  object-fit: cover;\n"])));
var SubscriptionBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: none;\n  gap: 16px;\n  width: 520px;\n  box-sizing: border-box;\n  margin-top: 12px;\n"])));
var SubscriptionBox1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: none;\n  gap: 32px;\n  width: 520px;\n  box-sizing: border-box;\n  margin-top: 12px;\n"])));
var ItemCount = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  width: 200px;\n  font-size: 16px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 24px;\n  text-align: left;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n"])));
var SubscriptionInfoDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n  width: 630px;\n  height: 68px;\n  position: relative;\n"])));
var SubscriptionInfoDiv1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 88px;\n  position: relative;\n  top: -16px;\n"])));
var RectangleBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n  height: 68px;\n  background: rgb(255, 255, 255);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border: solid 1px rgb(235, 239, 243);\n  border-radius: 12px;\n  position: absolute;\n  left: 60px;\n  right: 32px;\n  top: 460px;\n  &:hover {\n    background: #f5f7f9;\n    cursor: pointer;\n  }\n"])));
var RectangleBox2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n  height: 68px;\n  background: rgb(255, 255, 255);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border: solid 1px rgb(235, 239, 243);\n  border-radius: 12px;\n  position: absolute;\n  left: 60px;\n  right: 32px;\n  top: 520px;\n"])));
var RectangleBox1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n  height: 109px;\n  width: 648px;\n  background: rgb(255, 255, 255);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border: solid 1px rgb(235, 239, 243);\n  border-radius: 12px;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 30px;\n"])));
var RectangleBoxHover = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n  width: 630px;\n  height: ", ";\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  position: absolute;\n  left: -12px;\n  top: -8px;\n  &:hover {\n    background: #f5f7f9;\n    border-radius: 8px;\n    cursor: auto;\n  }\n"])), function (props) {
  return props.showStatus ? "88px" : "64px";
});
var IconsAppIconsChevronRight = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n  object-fit: cover;\n  position: absolute;\n  top: 22px;\n  right: 24px;\n"])));
var ProductImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  left: 8px;\n  top: 22px;\n  border-radius: 8px;\n"])));
var ItemInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n  width: 299px;\n  height: 72px;\n  position: absolute;\n  left: 16px;\n  top: 12px;\n"])));
var ItemInfo1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n  width: 269px;\n  height: 118px;\n  position: absolute;\n  left: 122px;\n  top: 22px;\n"])));
var ItemName = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n"])));
var ItemName1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  width: 200px;\n  font-size: 16px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 24px;\n  text-align: left;\n  text-align: left;\n"])));
var ItemPrice = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n  width: 196px;\n  height: 16px;\n  position: relative;\n"])));
var ItemPrice1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n  width: 196px;\n  height: 16px;\n  position: relative;\n  top: 0px;\n"])));
var ItemPrice2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n  width: 196px;\n  height: 16px;\n  position: relative;\n  top: 8px;\n"])));
var ItemPrice3 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["\n  width: 196px;\n  height: 16px;\n  position: relative;\n  top: 16px;\n"])));
var ItemPriceText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["\n  color: #12344d;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.07px;\n  text-align: left;\n  width: 390px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n"])));
var BottomFrame = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  align-items: flex-end;\n  gap: 12px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  box-sizing: border-box;\n  padding-bottom: 0px;\n  padding-top: 12px;\n  padding-left: 12px;\n  padding-right: 0px;\n  width: 635px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  border-radius: 0px 0px 4px 4px;\n  background: #fff;\n"])));
var BottomFrame1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  align-items: flex-end;\n  gap: 12px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  box-sizing: border-box;\n  padding-bottom: 0px;\n  padding-top: 12px;\n  padding-left: 12px;\n  padding-right: 0px;\n  width: 658px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  border-radius: 0px 0px 4px 4px;\n  background: #fff;\n"])));
var Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n  flex: none;\n  gap: 10px;\n  border: solid 1px rgb(207, 215, 223);\n  border-radius: 4px;\n  background: linear-gradient(-180deg, white, rgb(245, 247, 249));\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  box-sizing: border-box;\n  padding: 6px 12px;\n  cursor: pointer;\n  &:hover {\n    background: #f5f7f9;\n  }\n"])));
var ButtonText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n"])));
var Button_0001 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n  flex: none;\n  gap: 10px;\n  border: solid 1px rgb(18, 52, 77);\n  border-radius: 4px;\n  background: linear-gradient(-180deg, rgb(38, 73, 102), rgb(18, 52, 77));\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  box-sizing: border-box;\n  padding: 6px 12px;\n  cursor: pointer;\n"])));
var ButtonText_0001 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["\n  color: white;\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n"])));
var Created_Date = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["\ncolor: #475867;\nfont-feature-settings: 'clig' off, 'liga' off;\nfont-size: 14px;\nfont-style: italic;\nfont-weight: 400;\nline-height: 20px;\n"])));
var ItemInfoDiv1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n  box-sizing: border-box;\n  position: absolute;\n  left: 8px;\n  top: ", ";\n  width: 90%;\n"])), function (props) {
  return props.top === true ? "4px" : "52px";
});
var StatusButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n  flex: none;\n  gap: 10px;\n  border: solid 1px rgb(18, 52, 77);\n  border-radius: 4px;\n  background: linear-gradient(-180deg, rgb(38, 73, 102), rgb(18, 52, 77));\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  box-sizing: border-box;\n  padding: 6px 12px;\n  cursor: pointer;\n  &:hover {\n    background: linear-gradient(-180deg, rgb(26, 61, 85), rgb(8, 37, 52));\n  }\n"])));
var StatusText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["\n  color: white;\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n"])));
var PauseSubscriptionButtonText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["\n  color: white;\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n"])));
var ReactivateSubscriptionText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["\n  color: white;\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n"])));
var NoSubs = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  width: 100px;\n  height: 100px;\n"])));
var SubsNotFound = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  width: 152px;\n  height: 128px;\n  gap: 8px;\n  top: 140px;\n  left: 220px;\n  position: absolute;\n"])));
var SubsText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-family: \"SF Pro Text\", sans-serif;\n  color: rgb(71, 88, 103);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px; /* 142.857% */\n  letter-spacing: -0.08px;\n"])));
var CancelReason = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n"])));
var CancelReasons = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"])));
var CancelReasonSection = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  gap: 12px;\n"])));
var CancelReasonHeaderLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["\n  height: 20px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n  top: 88px;\n  color: rgb(18, 52, 77);\n"])));
var CancelReasonLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].label(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["\n  height: 20px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  color: rgb(18, 52, 77);\n  display: flex;\n  gap: 5px;\n"])));
var CancelReasonOptionGroup = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["\n  width: 544px;\n  height: 132px;\n  position: relative;\n  left: 8px;\n  top: 0px;\n"])));
var CancelReasonOptionalLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["\n  color: rgb(18, 52, 77);\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: left;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n"])));
var Option = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["\n  color: #475867;\n  font-feature-settings: \"clig\" off, \"liga\" off;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  position: absolute;\n  left: 138px;\n  top: 0px;\n"])));
var CancelReasonOptionalMaxLenthLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["\n  color: rgb(100, 122, 142);\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-family: \"SF Pro Text\", sans-serif;\n  font-weight: 400;\n  line-height: 16px;\n  text-align: left;\n  position: absolute;\n  padding-top: 8px;\n  left: 0px;\n  top: 116px;\n  transition: transform 0.3s ease-in-out;\n  pointer-events: none;\n"])));

/***/ }),

/***/ 99605:
/*!********************************!*\
  !*** ./src/hooks/useScript.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useScript = function useScript(url) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var script = document.createElement("script");
    script.src = url;
    script.addEventListener("load", function () {
      return setLoaded(true);
    });
    script.defer = true;
    document.head.appendChild(script);
    return function () {
      document.head.removeChild(script);
    };
  }, [url]);
  return loaded;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScript);

/***/ }),

/***/ 55579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 73935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 98548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 48187);




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 25984:
/*!*****************************!*\
  !*** ./src/state/Loader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ 37337);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RootWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NameLoader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RollLoader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BreakLine, {
    top: "65px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BalanceLoader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReferalLinkLoader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BreakLine, {
    top: "145px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReferalMainDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RewardDiv, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BottomDiv, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RootWrapper1, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NameLoader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RollLoader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BreakLine, {
    top: "65px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BalanceLoader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReferalLinkLoader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BreakLine, {
    top: "145px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReferalMainDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RewardDiv, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BottomDiv, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReferalMainDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RewardDiv, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BottomDiv, null)));
};
var RootWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: white;\n  position: relative;\n"])));
var RootWrapper1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: white;\n  position: relative;\n  top: 300px;\n"])));
var BalanceLoader = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 75px;\n  height: 16px;\n  background-color: rgb(235, 239, 243);\n  border-radius: 4px;\n  position: absolute;\n  top: 84px;\n"])));
var NameLoader = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 153px;\n  height: 20px;\n  background-color: rgb(235, 239, 243);\n  border-radius: 4px;\n  position: absolute;\n  top: 6px;\n"])));
var RollLoader = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 16px;\n  background-color: rgb(245, 247, 249);\n  border-radius: 4px;\n  position: absolute;\n  top: 32px;\n"])));
var BreakLine = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 272px;\n  height: 0px;\n  border-top: solid 1px rgb(235, 239, 243);\n  position: absolute;\n  top: ", ";\n"])), function (props) {
  return props.top || '0px';
});
var ReferalLinkLoader = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 28px;\n  height: 14px;\n  background-color: rgb(245, 247, 249);\n  border-radius: 4px;\n  position: absolute;\n  top: 109px;\n"])));
var BottomDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 157px;\n  height: 16px;\n  background-color: rgb(235, 239, 243);\n  border-radius: 4px;\n  position: absolute;\n  top: 200px;\n"])));
var RewardDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 78px;\n  height: 14px;\n  background-color: rgb(245, 247, 249);\n  border-radius: 4px;\n  position: relative;\n"])));
var ReferalMainDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: 4px;\n  box-sizing: border-box;\n  position: absolute;\n  top: 165px;\n  width: 78px;\n  height: 14px;\n"])));
var Tag = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  border-radius: 4px;\n  background-color: rgb(229, 242, 253);\n  box-sizing: border-box;\n  padding: 2px 8px;\n  position: absolute;\n  top: 6px;\n  right: 24px;\n  width: 65px;\n  height: 24px;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ 16597:
/*!********************************!*\
  !*** ./src/utils/showModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_showNotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/showNotify */ 98075);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var openModal = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(client, modal_type, title, template, data) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return client["interface"].trigger(modal_type, {
            title: title,
            template: template,
            data: data
          });
        case 3:
          _context.next = 9;
          break;
        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          _context.next = 9;
          return (0,_utils_showNotify__WEBPACK_IMPORTED_MODULE_0__["default"])(client, 'danger', 'error in opening modal');
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 5]]);
  }));
  return function openModal(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);

/***/ }),

/***/ 98075:
/*!*********************************!*\
  !*** ./src/utils/showNotify.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var showNotify = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(client, type, message) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return client["interface"].trigger('showNotify', {
            type: type,
            message: message
          });
        case 3:
          _context.next = 8;
          break;
        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.error('Error in showNotify:', _context.t0);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 5]]);
  }));
  return function showNotify(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNotify);

/***/ }),

/***/ 11565:
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/util.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#standardVariant{\n    margin-top: 5px;\n    margin-left: -30px;\n}\n\n.contact-card {\n    width: 500px;\n    padding: 16px;\n    display: flex;\n}\n  \n.contact-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#avatar {\n    position: absolute;\n    top: 18px;\n    left: 15px;\n}\n  \n  .contact-left {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 16px;\n  }\n  \n  .contact-info h3 {\n    margin: 8px 0;\n  }\n  \n  .contact-right {\n    width: 60%;\n    padding: 16px;\n  }\n  ", "",{"version":3,"sources":["webpack://src/css/util.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;EAEE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;IACV,aAAa;EACf","sourcesContent":["#standardVariant{\n    margin-top: 5px;\n    margin-left: -30px;\n}\n\n.contact-card {\n    width: 500px;\n    padding: 16px;\n    display: flex;\n}\n  \n.contact-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#avatar {\n    position: absolute;\n    top: 18px;\n    left: 15px;\n}\n  \n  .contact-left {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 16px;\n  }\n  \n  .contact-info h3 {\n    margin: 8px 0;\n  }\n  \n  .contact-right {\n    width: 60%;\n    padding: 16px;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT;;YAEW;CACX,mCAAmC;CACnC,kCAAkC;AACnC;;AAEA;CACC;WACU;AACX","sourcesContent":["body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 69843:
/*!**************************************!*\
  !*** ./src/assets/itemsBoxArrow.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "/assets/img/itemsBoxArrow007d63e5.svg";

/***/ }),

/***/ 98302:
/*!**************************!*\
  !*** ./src/css/util.css ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./util.css */ 11565);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 98548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 51424);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(26981), __webpack_exec__(55579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.8d5b4db8.js.map