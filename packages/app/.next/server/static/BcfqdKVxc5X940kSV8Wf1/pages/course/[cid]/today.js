module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+K5I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "+KfW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SchedulePanel; });

// EXTERNAL MODULE: /var/www/source/node_modules/@koh/common/index.ts
var common = __webpack_require__("wPNs");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-big-calendar"
var external_react_big_calendar_ = __webpack_require__("T3YA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./hooks/useCourse.tsx
var useCourse = __webpack_require__("dppZ");

// EXTERNAL MODULE: ./hooks/useRoleInCourse.ts
var useRoleInCourse = __webpack_require__("nXdl");

// EXTERNAL MODULE: /var/www/source/node_modules/@koh/api-client/index.ts
var api_client = __webpack_require__("zTld");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./components/Schedule/UpdateCalendarButton.tsx
var __jsx = external_react_default.a.createElement;



var CalendarUpdateStatus;

(function (CalendarUpdateStatus) {
  CalendarUpdateStatus[CalendarUpdateStatus["BEFORE"] = 0] = "BEFORE";
  CalendarUpdateStatus[CalendarUpdateStatus["UPDATING"] = 1] = "UPDATING";
  CalendarUpdateStatus[CalendarUpdateStatus["AFTER"] = 2] = "AFTER";
})(CalendarUpdateStatus || (CalendarUpdateStatus = {}));

function UpdateCalendarButton({
  courseId
}) {
  const {
    0: updated,
    1: setUpdated
  } = Object(external_react_["useState"])(CalendarUpdateStatus.BEFORE);

  const updateCalendar = async () => {
    setUpdated(CalendarUpdateStatus.UPDATING);
    await api_client["a" /* API */].course.updateCalendar(courseId);
    setUpdated(CalendarUpdateStatus.AFTER);
  };

  switch (updated) {
    case CalendarUpdateStatus.BEFORE:
      return __jsx(external_antd_["Button"], {
        type: "primary",
        onClick: updateCalendar
      }, "Update Calendar");

    case CalendarUpdateStatus.UPDATING:
      return __jsx(external_antd_["Button"], {
        type: "primary",
        loading: true
      }, "Updating Calendar...");

    case CalendarUpdateStatus.AFTER:
      return __jsx(external_antd_["Button"], {
        type: "primary",
        disabled: true
      }, "Calendar Updated!");
  }
}
// CONCATENATED MODULE: ./components/Schedule/SchedulePanel.tsx
var SchedulePanel_jsx = external_react_default.a.createElement;








const ScheduleCalendar = external_styled_components_default()(external_react_big_calendar_["Calendar"]).withConfig({
  displayName: "SchedulePanel__ScheduleCalendar",
  componentId: "sc-1bcbtu4-0"
})(["height:70vh;"]);
function SchedulePanel({
  courseId,
  defaultView = "week"
}) {
  var _course$officeHours$m;

  const {
    course
  } = Object(useCourse["a" /* useCourse */])(courseId);
  const role = Object(useRoleInCourse["a" /* useRoleInCourse */])(courseId);
  const myEvents = (_course$officeHours$m = course === null || course === void 0 ? void 0 : course.officeHours.map(e => ({
    start: e.startTime,
    end: e.endTime,
    title: e.title
  }))) !== null && _course$officeHours$m !== void 0 ? _course$officeHours$m : [];
  const today = new Date();
  return SchedulePanel_jsx("div", null, SchedulePanel_jsx(ScheduleCalendar, {
    localizer: Object(external_react_big_calendar_["momentLocalizer"])(external_moment_default.a),
    events: myEvents,
    defaultView: defaultView,
    scrollToTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8),
    showMultiDayTimes: true
  }), role === common["r" /* Role */].PROFESSOR && SchedulePanel_jsx(UpdateCalendarButton, {
    courseId: courseId
  }));
}

/***/ }),

/***/ "/OEA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "2MIm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y3ZS");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("7xIC");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4icl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");
var normalizeHeaderName = __webpack_require__("W0b3");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("QfQO");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("bjTc");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "4ncj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "6wFz":
/***/ (function(module, exports) {

module.exports = require("@visx/responsive");

/***/ }),

/***/ "7AQU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "7WL4":
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "7xIC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("pONU");

var _interopRequireDefault = __webpack_require__("Y3ZS");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("L9lV"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("2MIm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("x5Ku");


/***/ }),

/***/ "CY1P":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("wWzd");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FEHM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("GW3a");
var combineURLs = __webpack_require__("LQjA");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "FMKJ":
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ "FRUG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ SelfAvatar; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ KOHAvatar; });

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./hooks/useProfile.ts
var useProfile = __webpack_require__("Ogf2");

// CONCATENATED MODULE: ./utils/ColorUtils.ts
const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
function nameToRGB(str) {
  let hash = 0; // java String#hashCode

  for (let i = 0; i < str.split.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
}
// CONCATENATED MODULE: ./utils/NameUtils.ts
function getInitialsFromName(name) {
  if (name) {
    const initialsRegex = name.replace("'", "").replace("-", "").match(/\b\w/g) || [];
    return ((initialsRegex.shift() || "") + (initialsRegex.pop() || "")).toUpperCase();
  }

  return "";
}
// CONCATENATED MODULE: ./components/common/AvatarWithInitials.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function AvatarWithInitals(_ref) {
  let {
    name,
    fontSize,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "fontSize", "style"]);

  return __jsx(external_antd_["Avatar"], _extends({
    style: _objectSpread({
      backgroundColor: name ? nameToRGB(name) : "#1abc9c",
      fontSize
    }, style)
  }, props), getInitialsFromName(name));
}
// CONCATENATED MODULE: ./components/common/SelfAvatar.tsx
var SelfAvatar_jsx = external_react_default.a.createElement;





function SelfAvatar({
  size,
  style
}) {
  const profile = Object(useProfile["a" /* useProfile */])();
  return SelfAvatar_jsx(KOHAvatar, {
    size: size,
    photoURL: profile === null || profile === void 0 ? void 0 : profile.photoURL,
    name: profile === null || profile === void 0 ? void 0 : profile.name,
    style: style
  });
}
function KOHAvatar({
  size,
  photoURL,
  name,
  style,
  className
}) {
  return photoURL ? SelfAvatar_jsx(external_antd_["Avatar"], {
    icon: SelfAvatar_jsx(icons_["UserOutlined"], null),
    src: "/api/v1/profile/get_picture/" + photoURL,
    size: size,
    style: style,
    className: className
  }) : SelfAvatar_jsx(AvatarWithInitals, {
    name: name,
    size: size,
    fontSize: 3 / 7 * size,
    style: style,
    className: className
  });
}

/***/ }),

/***/ "GW3a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "KEll":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "KeDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y3ZS");

var _interopRequireWildcard = __webpack_require__("pONU");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("7xIC"));

var _router2 = __webpack_require__("L9lV");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "L9lV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("YBsB"));

var _utils = __webpack_require__("fvxO");

var _isDynamic = __webpack_require__("Lko9");

var _routeMatcher = __webpack_require__("TBBy");

var _routeRegex = __webpack_require__("uChv");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "LQjA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "Lko9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "LsSt":
/***/ (function(module, exports) {

module.exports = require("@visx/scale");

/***/ }),

/***/ "M9Pr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");
var transformData = __webpack_require__("7AQU");
var isCancel = __webpack_require__("/OEA");
var defaults = __webpack_require__("4icl");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "NQlW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "NabS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandardPageContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Max width 1500px,
 * Responsively scale down padding
 */

const StandardPageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PageContainer__StandardPageContainer",
  componentId: "pwm33f-0"
})(["flex:1;display:flex;flex-direction:column;margin:0 auto;width:100%;padding:0 16px;@media (min-width:750px){padding:0 20px;}@media (min-width:1000px){padding:0 32px;}@media (min-width:1500px){max-width:1500px;}"]);

/***/ }),

/***/ "NxG6":
/***/ (function(module, exports) {

module.exports = require("@visx/shape");

/***/ }),

/***/ "Ogf2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useProfile; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aYjl");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koh_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zTld");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const useProfile = () => {
  var _error$response;

  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(`api/v1/profile`, async () => await _koh_api_client__WEBPACK_IMPORTED_MODULE_1__[/* API */ "a"].profile.index()); // Redirect to login page (later Khoury Admin login) if API request returns an error or empty object

  if ((error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401 && pathname !== "/login") {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
  } else if (data) {
    return data;
  }
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PJJv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");
var bind = __webpack_require__("dpgl");
var Axios = __webpack_require__("Pfik");
var mergeConfig = __webpack_require__("aKYj");
var defaults = __webpack_require__("4icl");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("wWzd");
axios.CancelToken = __webpack_require__("CY1P");
axios.isCancel = __webpack_require__("/OEA");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("vC90");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__("cX/v");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "Pfik":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");
var buildURL = __webpack_require__("TlKz");
var InterceptorManager = __webpack_require__("+K5I");
var dispatchRequest = __webpack_require__("M9Pr");
var mergeConfig = __webpack_require__("aKYj");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "QfQO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");
var settle = __webpack_require__("o7lZ");
var cookies = __webpack_require__("NQlW");
var buildURL = __webpack_require__("TlKz");
var buildFullPath = __webpack_require__("FEHM");
var parseHeaders = __webpack_require__("alnW");
var isURLSameOrigin = __webpack_require__("YSSX");
var createError = __webpack_require__("yTfb");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "Sccn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinButton; });
/* unused harmony export CheckOutButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TACheckinButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koh_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zTld");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useCourse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dppZ");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const CheckinButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(antd__WEBPACK_IMPORTED_MODULE_2__["Button"]).withConfig({
  displayName: "TACheckinButton__CheckinButton",
  componentId: "oiahss-0"
})(["background:#2a9187;border-radius:6px;color:white;font-weight:500;font-size:14px;"]);
const CheckOutButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(antd__WEBPACK_IMPORTED_MODULE_2__["Button"]).withConfig({
  displayName: "TACheckinButton__CheckOutButton",
  componentId: "oiahss-1"
})(["color:#da3236;font-weight:500;font-size:14px;border-radius:6px;"]);
const EMPTY_CHECKOUT_INFO = {
  canClearQueue: false,
  nextOfficeHourTime: null
};
function TACheckinButton({
  courseId,
  room,
  state,
  disabled = false,
  block = false
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    course,
    mutateCourse
  } = Object(_hooks_useCourse__WEBPACK_IMPORTED_MODULE_6__[/* useCourse */ "a"])(courseId);
  const {
    0: queueIdToClean,
    1: setQueueIdToClean
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);

  async function checkInTA() {
    // to see old check in in person functionality look at commit b4768bbfb0f36444c80961703bdbba01ff4a5596
    //trying to limit changes to the frontend, all queues will have the room online
    const redirectID = await _koh_api_client__WEBPACK_IMPORTED_MODULE_1__[/* API */ "a"].taStatus.checkIn(courseId, room);
    router.push("/course/[cid]/queue/[qid]", `/course/${courseId}/queue/${redirectID.id}`);
  }

  const {
    0: checkoutModalInfo,
    1: setCheckoutModalInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(EMPTY_CHECKOUT_INFO);

  const closeModal = () => setCheckoutModalInfo(EMPTY_CHECKOUT_INFO);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, state === "CheckedIn" && __jsx(CheckOutButton, {
    type: "default",
    size: "large",
    disabled: disabled,
    block: block,
    "data-cy": "check-out-button",
    onClick: async () => {
      const _await$API$taStatus$c = await _koh_api_client__WEBPACK_IMPORTED_MODULE_1__[/* API */ "a"].taStatus.checkOut(courseId, room),
            {
        queueId
      } = _await$API$taStatus$c,
            modalInfo = _objectWithoutProperties(_await$API$taStatus$c, ["queueId"]);

      setQueueIdToClean(queueId);
      setCheckoutModalInfo(modalInfo);
      mutateCourse();
    }
  }, "Check Out"), state === "CheckedOut" && __jsx(CheckinButton, {
    type: "default",
    size: "large",
    block: block,
    onClick: () => checkInTA(),
    disabled: disabled || !course,
    "data-cy": "check-in-button"
  }, "Check In"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    visible: checkoutModalInfo.canClearQueue,
    title: "Let's clean up...",
    onCancel: closeModal,
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "keep",
      onClick: closeModal
    }, "Leave Students In Queue"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "clear",
      type: "primary",
      onClick: async () => {
        await _koh_api_client__WEBPACK_IMPORTED_MODULE_1__[/* API */ "a"].queues.clean(queueIdToClean);
        closeModal();
      },
      "data-cy": "clear-queue-btn"
    }, "Clear Queue")]
  }, "You are the last TA to leave.", " ", checkoutModalInfo.nextOfficeHourTime ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "There will not be any office hours for", " ", __jsx("strong", null, moment__WEBPACK_IMPORTED_MODULE_3___default()(checkoutModalInfo.nextOfficeHourTime).fromNow(true))) : __jsx("strong", null, "There are no later office hours scheduled"), ". Do you want to clear the remaining students out of the queue?"));
}

/***/ }),

/***/ "T3YA":
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),

/***/ "TBBy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "TfFe":
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),

/***/ "TlKz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "UkuH":
/***/ (function(module, exports) {

module.exports = require("follow-redirects");

/***/ }),

/***/ "VWuP":
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "W0b3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "Xccw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLocalStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const isWindow = false;
function useLocalStorage(key, initialValue) {
  const {
    0: storedValue,
    1: setStoredValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => {
    try {
      const item = isWindow && window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      isWindow && window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(null);
      isWindow && window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, removeValue];
}

/***/ }),

/***/ "Y3ZS":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YBsB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YSSX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "Zy31":
/***/ (function(module, exports) {

module.exports = require("react-linkify");

/***/ }),

/***/ "aKYj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "alnW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "bjTc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("dF8R");
var settle = __webpack_require__("o7lZ");
var buildFullPath = __webpack_require__("FEHM");
var buildURL = __webpack_require__("TlKz");
var http = __webpack_require__("KEll");
var https = __webpack_require__("7WL4");
var httpFollow = __webpack_require__("UkuH").http;
var httpsFollow = __webpack_require__("UkuH").https;
var url = __webpack_require__("bzos");
var zlib = __webpack_require__("FMKJ");
var pkg = __webpack_require__("gOUf");
var createError = __webpack_require__("yTfb");
var enhanceError = __webpack_require__("4ncj");

var isHttps = /https:?/;

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }

        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
            if (!config.responseEncoding || config.responseEncoding === 'utf8') {
              responseData = utils.stripBOM(responseData);
            }
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(config.timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cX/v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "dF8R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("dpgl");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "dFUt":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PJJv");

/***/ }),

/***/ "dSNi":
/***/ (function(module, exports) {

module.exports = require("@visx/group");

/***/ }),

/***/ "dpgl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "dppZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCourse; });
/* harmony import */ var _koh_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zTld");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aYjl");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);


function useCourse(cid) {
  const {
    data: course,
    error: courseError,
    mutate: mutateCourse
  } = swr__WEBPACK_IMPORTED_MODULE_1___default()(cid && `/api/v1/courses/${cid}`, async () => _koh_api_client__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"].course.get(cid));
  return {
    course,
    courseError,
    mutateCourse
  };
}

/***/ }),

/***/ "fvxO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g7qJ":
/***/ (function(module, exports) {

module.exports = require("@visx/tooltip");

/***/ }),

/***/ "gOUf":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.21.1\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test && bundlesize\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://github.com/axios/axios\",\"devDependencies\":{\"bundlesize\":\"^0.17.0\",\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.0.2\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^20.1.0\",\"grunt-karma\":\"^2.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^1.0.18\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^1.3.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^1.1.1\",\"karma-firefox-launcher\":\"^1.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-opera-launcher\":\"^1.0.0\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^1.2.0\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-webpack\":\"^1.7.0\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^5.2.0\",\"sinon\":\"^4.5.0\",\"typescript\":\"^2.8.1\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^1.13.1\",\"webpack-dev-server\":\"^1.14.1\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.10.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

/***/ }),

/***/ "i2RQ":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "idLA":
/***/ (function(module, exports) {

module.exports = require("@visx/grid");

/***/ }),

/***/ "jPdq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getWaitTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatWaitTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatQueueTime; });
function getWaitTime(question) {
  const now = new Date();
  const difference = now.getTime() - question.createdAt.getTime();
  return formatWaitTime(difference / 60000);
}
function formatWaitTime(minutes) {
  const m = Math.floor(minutes);

  if (m <= 0) {
    return "0 min";
  } else if (m % 60 == 0) {
    return `${Math.floor(m / 60)}hr`;
  } else if (m >= 60) {
    return `${Math.floor(m / 60)}hr ${Math.floor(m) % 60}min`;
  } else {
    return `${Math.floor(m)} min`;
  }
}
function formatQueueTime(queue) {
  return formatDateTime(queue.startTime) + " - " + formatDateTime(queue.endTime);
}

function formatDateTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes + " " + ampm;
}

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mL3h":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/Modal");

/***/ }),

/***/ "nXdl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRoleInCourse; });
/* harmony import */ var _useProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ogf2");

function useRoleInCourse(courseId) {
  var _profile$courses$find;

  const profile = Object(_useProfile__WEBPACK_IMPORTED_MODULE_0__[/* useProfile */ "a"])();
  return profile === null || profile === void 0 ? void 0 : (_profile$courses$find = profile.courses.find(e => e.course.id === courseId)) === null || _profile$courses$find === void 0 ? void 0 : _profile$courses$find.role;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "o7lZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("yTfb");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "pONU":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("i2RQ");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "s9Vj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ NavBar; });

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: /var/www/source/node_modules/@koh/common/index.ts
var common = __webpack_require__("wPNs");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: /var/www/source/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./hooks/useCourse.tsx
var useCourse = __webpack_require__("dppZ");

// EXTERNAL MODULE: ./hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__("Xccw");

// EXTERNAL MODULE: ./hooks/useProfile.ts
var useProfile = __webpack_require__("Ogf2");

// EXTERNAL MODULE: ./hooks/useRoleInCourse.ts
var useRoleInCourse = __webpack_require__("nXdl");

// EXTERNAL MODULE: /var/www/source/node_modules/@koh/api-client/index.ts
var api_client = __webpack_require__("zTld");

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// EXTERNAL MODULE: external "antd/lib/modal/Modal"
var Modal_ = __webpack_require__("mL3h");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// CONCATENATED MODULE: ./components/Queue/Student/StudentQuestionRephraseModal.tsx
var __jsx = external_react_default.a.createElement;



function StudentQuestionRephraseModal({
  payload,
  handleClose
}) {
  return __jsx(Modal_default.a, {
    visible: true,
    footer: [__jsx(external_antd_["Button"], {
      type: "primary",
      key: "continue",
      onClick: () => handleClose(payload.courseId, payload.queueId)
    }, "Edit Question")],
    closable: false
  }, "You have been requested to add more detail to your question by a member of the course staff. While you elaborate on your question your place in line will be reserved.");
}
// CONCATENATED MODULE: ./components/Nav/AlertsContainer.tsx
var AlertsContainer_jsx = external_react_default.a.createElement;






function AlertsContainer({
  courseId
}) {
  const router = Object(router_["useRouter"])();
  const {
    data,
    mutate: mutateAlerts
  } = external_swr_default()("/api/v1/alerts", async () => api_client["a" /* API */].alerts.get(courseId));
  const alerts = data === null || data === void 0 ? void 0 : data.alerts;

  const handleClose = async (alertId, courseId, queueId) => {
    await api_client["a" /* API */].alerts.close(alertId);
    mutateAlerts();
    router.push(`/course/${courseId}/queue/${queueId}?edit_question=true`);
  };

  const alertDivs = alerts === null || alerts === void 0 ? void 0 : alerts.map(alert => {
    switch (alert.alertType) {
      case common["a" /* AlertType */].REPHRASE_QUESTION:
        return AlertsContainer_jsx(StudentQuestionRephraseModal, {
          payload: alert.payload,
          handleClose: async (courseId, queueId) => await handleClose(alert.id, courseId, queueId)
        });
    }
  }); // probably want some better way of handling multiple alerts

  return AlertsContainer_jsx("div", null, alertDivs);
}
// CONCATENATED MODULE: ./components/Nav/NavBarTabs.tsx
var NavBarTabs_jsx = external_react_default.a.createElement;




const HorizontalMenu = external_styled_components_default()(external_antd_["Menu"]).withConfig({
  displayName: "NavBarTabs__HorizontalMenu",
  componentId: "fmvdkp-0"
})(["", ""], props => props.mode === "horizontal" ? "border-bottom: none" : "");
const MenuItem = external_styled_components_default()(external_antd_["Menu"].Item).withConfig({
  displayName: "NavBarTabs__MenuItem",
  componentId: "fmvdkp-1"
})(["@media (min-width:650px){padding:10px 50px !important;font-size:16px !important;color:#262626 !important;margin:0 !important;}&&&:after{left:0px;right:0px;}"]);
function NavBarTabs({
  currentHref,
  tabs,
  horizontal
}) {
  return NavBarTabs_jsx(HorizontalMenu, {
    selectedKeys: [currentHref],
    mode: horizontal ? "horizontal" : "vertical"
  }, tabs.map(tab => NavBarTabs_jsx(MenuItem, {
    key: tab.href
  }, NavBarTabs_jsx(link_default.a, {
    href: tab.href,
    as: tab.as
  }, NavBarTabs_jsx("a", null, tab.text)))));
}
// EXTERNAL MODULE: ./components/common/SelfAvatar.tsx + 3 modules
var SelfAvatar = __webpack_require__("FRUG");

// CONCATENATED MODULE: ./components/Nav/ProfileDrawer.tsx
var ProfileDrawer_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const StyleablePopover = (_ref) => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  return ProfileDrawer_jsx(external_antd_["Popover"], _extends({}, props, {
    overlayClassName: className
  }));
};

const NoPaddingPopover = external_styled_components_default()(StyleablePopover).withConfig({
  displayName: "ProfileDrawer__NoPaddingPopover",
  componentId: "sc-4orw83-0"
})(["& .ant-popover-inner-content{padding:0px;}"]);
const AvatarButton = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileDrawer__AvatarButton",
  componentId: "sc-4orw83-1"
})(["cursor:pointer;"]);
function ProfileDrawer({
  courseId
}) {
  const {
    0: isPopoverOpen,
    1: setIsPopoverOpen
  } = Object(external_react_["useState"])(false);
  return ProfileDrawer_jsx(external_react_default.a.Fragment, null, ProfileDrawer_jsx(NoPaddingPopover, {
    content: isPopoverOpen && ProfileDrawer_jsx(external_antd_["Menu"], {
      mode: "inline"
    }, ProfileDrawer_jsx(external_antd_["Menu"].Item, {
      icon: ProfileDrawer_jsx(icons_["SettingOutlined"], null)
    }, ProfileDrawer_jsx(link_default.a, {
      href: {
        pathname: "/settings",
        query: {
          cid: courseId
        }
      }
    }, ProfileDrawer_jsx("a", null, "Settings"))), ProfileDrawer_jsx(external_antd_["Menu"].Item, {
      key: "1",
      icon: ProfileDrawer_jsx(icons_["QuestionCircleOutlined"], null),
      onClick: () => {
        window.open("https://info.khouryofficehours.com/help");
        setIsPopoverOpen(false);
      }
    }, "Help Guide"), ProfileDrawer_jsx(external_antd_["Menu"].Item, {
      key: "2",
      icon: ProfileDrawer_jsx(icons_["FileTextOutlined"], null),
      onClick: () => {
        window.open("https://info.khouryofficehours.com/release-notes-archive");
        setIsPopoverOpen(false);
      }
    }, "Release Notes"), ProfileDrawer_jsx(external_antd_["Menu"].Item, {
      key: "3",
      icon: ProfileDrawer_jsx(icons_["ReadOutlined"], null)
    }, ProfileDrawer_jsx(link_default.a, {
      href: "/about"
    }, ProfileDrawer_jsx("a", null, "About Us"))), ProfileDrawer_jsx(external_antd_["Menu"].Item, {
      key: "4",
      icon: ProfileDrawer_jsx(icons_["LogoutOutlined"], null)
    }, ProfileDrawer_jsx(link_default.a, {
      href: "/api/v1/logout"
    }, ProfileDrawer_jsx("a", {
      "data-cy": "logout-button"
    }, "Logout")))),
    placement: "bottomRight",
    trigger: "click",
    visible: isPopoverOpen,
    onVisibleChange: setIsPopoverOpen
  }, ProfileDrawer_jsx(AvatarButton, null, ProfileDrawer_jsx(SelfAvatar["b" /* default */], {
    size: 40
  }))));
}
// CONCATENATED MODULE: ./components/Nav/NavBar.tsx
var NavBar_jsx = external_react_default.a.createElement;














const Nav = external_styled_components_default.a.nav.withConfig({
  displayName: "NavBar__Nav",
  componentId: "sc-1jr3ir-0"
})(["padding:0px 0px;display:flex;align-items:center;height:67px;z-index:1;"]); // A hack to get the white stripe edge to edge, even when Nav is narrower.

const NavBG = external_styled_components_default.a.nav.withConfig({
  displayName: "NavBar__NavBG",
  componentId: "sc-1jr3ir-1"
})(["position:absolute;top:0;left:0;right:0;height:67px;background:#fff;border-bottom:solid 1px #e8e8e8;"]);
const LogoContainer = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__LogoContainer",
  componentId: "sc-1jr3ir-2"
})(["z-index:1;display:flex;align-items:center;margin-right:20px;"]);
const Logo = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__Logo",
  componentId: "sc-1jr3ir-3"
})(["font-size:20px;font-weight:500;color:#262626;text-transform:capitalize;"]);
const MenuCon = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__MenuCon",
  componentId: "sc-1jr3ir-4"
})(["flex-grow:1;display:flex;align-items:center;justify-content:space-between;padding-left:0px;"]);
const LeftMenu = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__LeftMenu",
  componentId: "sc-1jr3ir-5"
})(["@media (max-width:650px){display:none;}flex-grow:1;"]);
const RightMenu = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__RightMenu",
  componentId: "sc-1jr3ir-6"
})(["@media (max-width:650px){display:none;}"]);
const BarsMenu = external_styled_components_default()(external_antd_["Button"]).withConfig({
  displayName: "NavBar__BarsMenu",
  componentId: "sc-1jr3ir-7"
})(["height:32px;padding:6px;margin-top:8px;display:none;background:none;@media (max-width:650px){display:inline-block;}"]);
const BarsButton = external_styled_components_default.a.span.withConfig({
  displayName: "NavBar__BarsButton",
  componentId: "sc-1jr3ir-8"
})(["display:block;width:20px;height:2px;background:#1890ff;position:relative;&:after,:before{content:attr(x);width:20px;position:absolute;top:-6px;left:0;height:2px;background:#1890ff;}&:after{top:auto;bottom:-6px;}"]);
const CoursesMenuItem = external_styled_components_default()(external_antd_["Menu"].Item).withConfig({
  displayName: "NavBar__CoursesMenuItem",
  componentId: "sc-1jr3ir-9"
})(["z-index:1;background:#ffffff;"]);
function NavBar({
  courseId
}) {
  var _course$queues, _course$queues$find;

  const profile = Object(useProfile["a" /* useProfile */])();

  if (!courseId) {
    courseId = profile === null || profile === void 0 ? void 0 : profile.courses[0].course.id;
  }

  const [_defaultCourse, setDefaultCourse] = Object(useLocalStorage["a" /* useLocalStorage */])("defaultCourse", null);
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const {
    pathname
  } = Object(router_["useRouter"])();
  const {
    course
  } = Object(useCourse["a" /* useCourse */])(courseId);
  const role = Object(useRoleInCourse["a" /* useRoleInCourse */])(courseId);
  const queueId = course === null || course === void 0 ? void 0 : (_course$queues = course.queues) === null || _course$queues === void 0 ? void 0 : (_course$queues$find = _course$queues.find(queue => queue.isOpen && queue.allowQuestions)) === null || _course$queues$find === void 0 ? void 0 : _course$queues$find.id;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const courseSelector = NavBar_jsx(external_antd_["Menu"], null, profile === null || profile === void 0 ? void 0 : profile.courses.map(c => NavBar_jsx(CoursesMenuItem, {
    key: c.course.id,
    onClick: () => setDefaultCourse(c.course)
  }, NavBar_jsx(link_default.a, {
    href: "/course/[cid]/today",
    as: `/course/${c.course.id}/today`
  }, NavBar_jsx("a", null, c.course.name)))));

  const tabs = [{
    href: "/course/[cid]/today",
    as: `/course/${courseId}/today`,
    text: "Today"
  }, {
    href: "/course/[cid]/schedule",
    as: `/course/${courseId}/schedule`,
    text: "Schedule"
  }];

  if (role === common["r" /* Role */].PROFESSOR) {
    tabs.push({
      href: "/course/[cid]/course_admin_panel",
      as: `/course/${courseId}/course_admin_panel`,
      text: "Admin Panel"
    });
  }

  if (queueId) {
    tabs.push({
      href: "/course/[cid]/queue/[qid]",
      as: `/course/${courseId}/queue/${queueId}`,
      text: "Queue"
    });
  }

  if (role === common["r" /* Role */].PROFESSOR) {
    tabs.push({
      href: "/course/[cid]/insights",
      as: `/course/${courseId}/insights`,
      text: "Insights"
    });
  }

  return courseId ? NavBar_jsx(external_react_default.a.Fragment, null, NavBar_jsx(NavBG, null), NavBar_jsx(AlertsContainer, {
    courseId: courseId
  }), NavBar_jsx(Nav, null, NavBar_jsx(LogoContainer, null, (profile === null || profile === void 0 ? void 0 : profile.courses.length) > 1 ? NavBar_jsx(external_antd_["Dropdown"], {
    overlay: courseSelector,
    trigger: ["click"],
    placement: "bottomLeft"
  }, NavBar_jsx("a", null, NavBar_jsx(Logo, null, NavBar_jsx("span", null, course === null || course === void 0 ? void 0 : course.name), NavBar_jsx(icons_["DownOutlined"], {
    style: {
      fontSize: "16px",
      verticalAlign: "-0.125em",
      marginLeft: "5px"
    }
  })))) : NavBar_jsx(Logo, null, NavBar_jsx("span", null, course === null || course === void 0 ? void 0 : course.name))), NavBar_jsx(MenuCon, null, NavBar_jsx(LeftMenu, null, NavBar_jsx(NavBarTabs, {
    horizontal: true,
    currentHref: pathname,
    tabs: tabs
  })), NavBar_jsx(RightMenu, null, NavBar_jsx(ProfileDrawer, {
    courseId: courseId
  }))), NavBar_jsx(BarsMenu, {
    type: "primary",
    onClick: showDrawer
  }, NavBar_jsx(BarsButton, null)), NavBar_jsx(external_antd_["Drawer"], {
    title: "Course",
    placement: "right",
    visible: visible,
    closable: false,
    onClose: onClose,
    bodyStyle: {
      padding: "12px"
    }
  }, NavBar_jsx(NavBarTabs, {
    currentHref: pathname,
    tabs: tabs
  }), NavBar_jsx(ProfileDrawer, {
    courseId: courseId
  })))) : null;
}

/***/ }),

/***/ "uChv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "vA/G":
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "vC90":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "wPNs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PROD_URL */
/* unused harmony export STAGING_URL */
/* unused harmony export getEnv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return isProd; });
/* unused harmony export timeDiffInMins */
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DesktopNotifPartial; });
/* unused harmony export UserPartial */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Role; });
/* unused harmony export QueuePartial */
/* unused harmony export Question */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return QuestionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return OpenQuestionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LimboQuestionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClosedQuestionStatus; });
/* unused harmony export StatusInQueue */
/* unused harmony export StatusInPriorityQueue */
/* unused harmony export StatusSentToCreator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return QuestionStatusKeys; });
/* unused harmony export QuestionGroup */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GetProfileResponse; });
/* unused harmony export KhouryDataParams */
/* unused harmony export KhouryCourse */
/* unused harmony export KhouryProfCourse */
/* unused harmony export isKhouryCourse */
/* unused harmony export UpdateProfileParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GetCourseResponse; });
/* unused harmony export GetSelfEnrollResponse */
/* unused harmony export GetCourseOverridesRow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GetCourseOverridesResponse; });
/* unused harmony export UpdateCourseOverrideBody */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return UpdateCourseOverrideResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GetQueueResponse; });
/* unused harmony export GetCourseQueuesResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ListQuestionsResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GetQuestionResponse; });
/* unused harmony export GetStudentQuestionResponse */
/* unused harmony export CreateQuestionParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CreateQuestionResponse; });
/* unused harmony export UpdateQuestionParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return UpdateQuestionResponse; });
/* unused harmony export GroupQuestionsParams */
/* unused harmony export ResolveGroupParams */
/* unused harmony export TACheckoutResponse */
/* unused harmony export UpdateQueueParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TACheckinTimesResponse; });
/* unused harmony export TACheckinPair */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
/* unused harmony export AlertPayload */
/* unused harmony export Alert */
/* unused harmony export RephraseQuestionPayload */
/* unused harmony export CreateAlertParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CreateAlertResponse; });
/* unused harmony export GetAlertsResponse */
/* unused harmony export RegisterCourseParams */
/* unused harmony export SemesterPartial */
/* unused harmony export SSEQueueResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return InsightComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ERROR_MESSAGES; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TfFe");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VWuP");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vA/G");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_2__);
var _dec, _class, _descriptor, _temp, _dec2, _class3, _descriptor2, _temp2, _dec3, _dec4, _class5, _descriptor3, _descriptor4, _temp3, _dec5, _dec6, _dec7, _class7, _descriptor5, _descriptor6, _descriptor7, _temp4, _dec8, _dec9, _dec10, _dec11, _dec12, _class9, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp5, _dec13, _dec14, _dec15, _class11, _descriptor13, _descriptor14, _descriptor15, _temp6, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class13, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _temp7, _dec24, _dec25, _dec26, _class15, _descriptor22, _descriptor23, _descriptor24, _temp8, _dec27, _dec28, _dec29, _class17, _descriptor25, _descriptor26, _descriptor27, _temp9, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _class19, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _temp10, _dec45, _dec46, _class21, _descriptor35, _descriptor36, _temp11, _dec47, _class23, _descriptor37, _temp12, _dec48, _dec49, _class25, _descriptor38, _descriptor39, _temp13, _dec50, _dec51, _dec52, _dec53, _dec54, _class27, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _temp14, _dec55, _class29, _descriptor45, _temp15, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _class31, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _temp16, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _class33, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _temp17, _dec80, _dec81, _dec82, _class35, _descriptor60, _descriptor61, _temp18, _dec83, _class37, _descriptor62, _temp19, _dec84, _class39, _descriptor63, _temp20, _dec85, _dec86, _dec87, _class41, _descriptor64, _descriptor65, _temp21, _dec88, _class43, _descriptor66, _temp22, _dec89, _dec90, _dec91, _dec92, _dec93, _dec94, _dec95, _dec96, _class45, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _descriptor71, _descriptor72, _temp23, _dec97, _dec98, _dec99, _dec100, _class47, _descriptor73, _descriptor74, _descriptor75, _descriptor76, _temp24, _dec101, _dec102, _dec103, _class49, _descriptor77, _descriptor78, _descriptor79, _temp25, _dec104, _dec105, _dec106, _dec107, _class51, _descriptor80, _descriptor81, _descriptor82, _descriptor83, _temp26, _dec108, _class53, _descriptor84, _temp27, _dec109, _dec110, _dec111, _dec112, _dec113, _class55, _descriptor85, _descriptor86, _descriptor87, _descriptor88, _descriptor89, _temp28;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




const PROD_URL = "https://officehours.khoury.northeastern.edu";
const STAGING_URL = "https://staging.khouryofficehours.com"; // Get domain. works on node and browser

const domain = () => {
  var _window, _window$location;

  return process.env.DOMAIN ||  false && (false);
};

const getEnv = () => {
  switch (domain()) {
    case PROD_URL:
      return "production";

    case STAGING_URL:
      return "staging";

    default:
      return "dev";
  }
};
const isProd = () => domain() === PROD_URL; // TODO: Clean this up, move it somwhere else, use moment???
// a - b, in minutes

function timeDiffInMins(a, b) {
  return (a.getTime() - b.getTime()) / (1000 * 60);
} /////////////////////////
// API Base Data Types //
/////////////////////////
// NOTE: These are not the DB data types. They are only used for the api

/**
 * Represents a user.
 * @param id - The unique id of the user in our db.
 * @param email - The email string of the user if they provide it (nullable)
 * @param name - The full name of this user: First Last.
 * @param photoURL - The URL string of this user photo. This is pulled from the admin site
 * @param courses - The list of courses that the user is accociated with (as either a 'student', 'ta' or 'professor')
 * @param desktopNotifs - list of endpoints so that frontend can figure out if device is enabled
 */

let User = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => DesktopNotifPartial), (_class = (_temp = class User {
  constructor() {
    this.id = void 0;
    this.email = void 0;
    this.firstName = void 0;
    this.lastName = void 0;
    this.name = void 0;
    this.photoURL = void 0;
    this.defaultMessage = void 0;
    this.includeDefaultMessage = void 0;
    this.courses = void 0;
    this.pendingCourses = void 0;
    this.desktopNotifsEnabled = void 0;

    _initializerDefineProperty(this, "desktopNotifs", _descriptor, this);

    this.phoneNotifsEnabled = void 0;
    this.phoneNumber = void 0;
    this.insights = void 0;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "desktopNotifs", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
let DesktopNotifPartial = (_dec2 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), (_class3 = (_temp2 = class DesktopNotifPartial {
  constructor() {
    this.id = void 0;
    this.endpoint = void 0;
    this.name = void 0;

    _initializerDefineProperty(this, "createdAt", _descriptor2, this);
  }

}, _temp2), (_descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "createdAt", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3));
/**
 * Contains the partial user info needed by the frontend when nested in a response
 * @param id - The unique id of the user in our db.
 * @param name - The full name of this user: First Last.
 * @param photoURL - The URL string of this user photo. This is pulled from the admin site
 */

class UserPartial {
  constructor() {
    this.id = void 0;
    this.email = void 0;
    this.name = void 0;
    this.photoURL = void 0;
  }

}
/**
 * Represents a partial course data needed on the front end when nested in a response.
 * @param id - The id number of this Course.
 * @param name - The subject and course number of this course. Ex: "CS 2500"
 */

/**
 * Represents one of three possible user roles in a course.
 */
let Role;

(function (Role) {
  Role["STUDENT"] = "student";
  Role["TA"] = "ta";
  Role["PROFESSOR"] = "professor";
})(Role || (Role = {}));

let OfficeHourPartial = (_dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), _dec4 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), (_class5 = (_temp3 = class OfficeHourPartial {
  constructor() {
    this.id = void 0;
    this.title = void 0;

    _initializerDefineProperty(this, "startTime", _descriptor3, this);

    _initializerDefineProperty(this, "endTime", _descriptor4, this);
  }

}, _temp3), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "startTime", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "endTime", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class5));
/**
 * A Queue that students can join with thier tickets.
 * @param id - The unique id number for a Queue.
 * @param course - The course that this office hours queue is for.
 * @param room - The full name of the building + room # that the current office hours queue is in.
 * @param staffList - The list of TA user's that are currently helping at office hours.
 * @param questions - The list of the students questions assocaited with the queue.
 * @param startTime - The scheduled start time of this queue based on the parsed ical.
 * @param endTime - The scheduled end time of this queue.
 */

/**
 * A Queue partial to be shown on the today page.
 * @param id - The unique id number for a Queue.
 * @param room - The full name of the building + room # that the current office hours queue is in.
 * @param staffList - The list of TA user's that are currently helping at office hours.
 * @param startTime - The scheduled start time of this queue based on the parsed ical.
 * @param endTime - The scheduled end time of this queue.
 */
let QueuePartial = (_dec5 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => UserPartial), _dec6 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), _dec7 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), (_class7 = (_temp4 = class QueuePartial {
  constructor() {
    this.id = void 0;
    this.room = void 0;

    _initializerDefineProperty(this, "staffList", _descriptor5, this);

    this.queueSize = void 0;
    this.notes = void 0;
    this.isOpen = void 0;

    _initializerDefineProperty(this, "startTime", _descriptor6, this);

    _initializerDefineProperty(this, "endTime", _descriptor7, this);

    this.allowQuestions = void 0;
    this.isProfessorQueue = void 0;
  }

}, _temp4), (_descriptor5 = _applyDecoratedDescriptor(_class7.prototype, "staffList", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class7.prototype, "startTime", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class7.prototype, "endTime", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class7)); // Represents a list of office hours wait times of each hour of the week.
// The first element of the array is the wait time for the first hour of Sunday, UTC.
//   Users of the heatmap should rotate it according to their timezone.
// INVARIANT: Must have 24*7 elements
//
// Wait time = -1 represents no office hours data at that time.

/**
 * A Question is created when a student wants help from a TA.
 * @param id - The unique id number for a student question.
 * @param creator - The Student that has created the question.
 * @param text - The text descritipn of what he/she needs help with.
 * @param createdAt - The date string for the time that the Ticket was created. Ex: "2020-09-12T12:00:00-04:00"
 * @param helpedAt - The date string for the time that the TA began helping the Student.
 * @param closedAt - The date string for the time that the TA finished helping the Student.
 * @param questionType - The question type helps distinguish question for TA's and data insights.
 * @param status - The current status of the question in the queue.
 * @param position - The current position of this question in the queue.
 * @param location - The location of the particular student, to help TA's find them
 * @param isOnline - Wether or not the question will helped online or in-person
 */
let Question = (_dec8 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => UserPartial), _dec9 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => UserPartial), _dec10 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), _dec11 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), _dec12 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), (_class9 = (_temp5 = class Question {
  constructor() {
    this.id = void 0;

    _initializerDefineProperty(this, "creator", _descriptor8, this);

    this.text = void 0;

    _initializerDefineProperty(this, "taHelped", _descriptor9, this);

    _initializerDefineProperty(this, "createdAt", _descriptor10, this);

    _initializerDefineProperty(this, "helpedAt", _descriptor11, this);

    _initializerDefineProperty(this, "closedAt", _descriptor12, this);

    this.questionType = void 0;
    this.groupable = void 0;
    this.status = void 0;
    this.location = void 0;
    this.isOnline = void 0;
  }

}, _temp5), (_descriptor8 = _applyDecoratedDescriptor(_class9.prototype, "creator", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class9.prototype, "taHelped", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class9.prototype, "createdAt", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class9.prototype, "helpedAt", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class9.prototype, "closedAt", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class9)); // Question Types

let QuestionType;

(function (QuestionType) {
  QuestionType["Concept"] = "Concept";
  QuestionType["Clarification"] = "Clarification";
  QuestionType["Testing"] = "Testing";
  QuestionType["Bug"] = "Bug";
  QuestionType["Setup"] = "Setup";
  QuestionType["Other"] = "Other";
})(QuestionType || (QuestionType = {}));

let OpenQuestionStatus;
/**
 * Limbo statuses are awaiting some confirmation from the student
 */

(function (OpenQuestionStatus) {
  OpenQuestionStatus["Drafting"] = "Drafting";
  OpenQuestionStatus["Queued"] = "Queued";
  OpenQuestionStatus["Helping"] = "Helping";
  OpenQuestionStatus["PriorityQueued"] = "PriorityQueued";
})(OpenQuestionStatus || (OpenQuestionStatus = {}));

let LimboQuestionStatus;

(function (LimboQuestionStatus) {
  LimboQuestionStatus["CantFind"] = "CantFind";
  LimboQuestionStatus["ReQueueing"] = "ReQueueing";
  LimboQuestionStatus["TADeleted"] = "TADeleted";
})(LimboQuestionStatus || (LimboQuestionStatus = {}));

let ClosedQuestionStatus;

(function (ClosedQuestionStatus) {
  ClosedQuestionStatus["Resolved"] = "Resolved";
  ClosedQuestionStatus["DeletedDraft"] = "DeletedDraft";
  ClosedQuestionStatus["ConfirmedDeleted"] = "ConfirmedDeleted";
  ClosedQuestionStatus["Stale"] = "Stale";
})(ClosedQuestionStatus || (ClosedQuestionStatus = {}));

const StatusInQueue = [OpenQuestionStatus.Drafting, OpenQuestionStatus.Queued];
const StatusInPriorityQueue = [OpenQuestionStatus.PriorityQueued];
const StatusSentToCreator = [...StatusInPriorityQueue, ...StatusInQueue, OpenQuestionStatus.Helping, LimboQuestionStatus.ReQueueing, LimboQuestionStatus.CantFind, LimboQuestionStatus.TADeleted]; // Ticket Status - Represents a given status of as student's ticket

// an Enum-like constant that contains all the statuses for convenience.
const QuestionStatusKeys = _objectSpread(_objectSpread(_objectSpread({}, OpenQuestionStatus), ClosedQuestionStatus), LimboQuestionStatus);
let QuestionGroup = (_dec13 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), _dec14 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Question), _dec15 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => UserPartial), (_class11 = (_temp6 = class QuestionGroup {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor13, this);

    _initializerDefineProperty(this, "questions", _descriptor14, this);

    _initializerDefineProperty(this, "creator", _descriptor15, this);
  } //Might want to add a list of students in group so they can be added without a question


}, _temp6), (_descriptor13 = _applyDecoratedDescriptor(_class11.prototype, "id", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class11.prototype, "questions", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class11.prototype, "creator", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class11)); // /**
//  * A Semester object, representing a schedule semester term for the purposes of a course.
//  * @param season - The season of this semester.
//  * @param year - The year of this semester.
//  */
// interface Semester {
//   season: Season;
//   year: number;
// }

/**
 * Represents one of the seasons in which a course can take place.
 */

// =================== API Route Types ===========================
// On backend, validated with https://docs.nestjs.com/techniques/validation
// API route Params and Responses
// Office Hours Response Types
class GetProfileResponse extends User {}
let KhouryDataParams = (_dec16 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec17 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec18 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec19 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), _dec20 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec21 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec22 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec23 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsDefined"])(), (_class13 = (_temp7 = class KhouryDataParams {
  constructor() {
    _initializerDefineProperty(this, "email", _descriptor16, this);

    _initializerDefineProperty(this, "first_name", _descriptor17, this);

    _initializerDefineProperty(this, "last_name", _descriptor18, this);

    _initializerDefineProperty(this, "campus", _descriptor19, this);

    _initializerDefineProperty(this, "photo_url", _descriptor20, this);

    _initializerDefineProperty(this, "courses", _descriptor21, this);
  }

}, _temp7), (_descriptor16 = _applyDecoratedDescriptor(_class13.prototype, "email", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class13.prototype, "first_name", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class13.prototype, "last_name", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class13.prototype, "campus", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class13.prototype, "photo_url", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class13.prototype, "courses", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class13));
let KhouryCourse = (_dec24 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), _dec25 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec26 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsEnum"])(String), (_class15 = (_temp8 = class KhouryCourse {
  constructor() {
    _initializerDefineProperty(this, "crn", _descriptor22, this);

    _initializerDefineProperty(this, "semester", _descriptor23, this);

    _initializerDefineProperty(this, "role", _descriptor24, this);
  }

}, _temp8), (_descriptor22 = _applyDecoratedDescriptor(_class15.prototype, "crn", [_dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class15.prototype, "semester", [_dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor24 = _applyDecoratedDescriptor(_class15.prototype, "role", [_dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class15));
let KhouryProfCourse = (_dec27 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsArray"])(), _dec28 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec29 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), (_class17 = (_temp9 = class KhouryProfCourse {
  constructor() {
    _initializerDefineProperty(this, "crns", _descriptor25, this);

    _initializerDefineProperty(this, "semester", _descriptor26, this);

    _initializerDefineProperty(this, "name", _descriptor27, this);
  }

}, _temp9), (_descriptor25 = _applyDecoratedDescriptor(_class17.prototype, "crns", [_dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor26 = _applyDecoratedDescriptor(_class17.prototype, "semester", [_dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor27 = _applyDecoratedDescriptor(_class17.prototype, "name", [_dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class17));
function isKhouryCourse(c) {
  return c.role !== undefined && c.crn !== undefined;
}
let UpdateProfileParams = (_dec30 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), _dec31 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec32 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), _dec33 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec34 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["ValidateIf"])(o => o.phoneNotifsEnabled), _dec35 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec36 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(), _dec37 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec38 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec39 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec40 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec41 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec42 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec43 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), _dec44 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), (_class19 = (_temp10 = class UpdateProfileParams {
  constructor() {
    _initializerDefineProperty(this, "desktopNotifsEnabled", _descriptor28, this);

    _initializerDefineProperty(this, "phoneNotifsEnabled", _descriptor29, this);

    _initializerDefineProperty(this, "phoneNumber", _descriptor30, this);

    _initializerDefineProperty(this, "firstName", _descriptor31, this);

    _initializerDefineProperty(this, "lastName", _descriptor32, this);

    _initializerDefineProperty(this, "defaultMessage", _descriptor33, this);

    _initializerDefineProperty(this, "includeDefaultMessage", _descriptor34, this);
  }

}, _temp10), (_descriptor28 = _applyDecoratedDescriptor(_class19.prototype, "desktopNotifsEnabled", [_dec30, _dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor29 = _applyDecoratedDescriptor(_class19.prototype, "phoneNotifsEnabled", [_dec32, _dec33], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor30 = _applyDecoratedDescriptor(_class19.prototype, "phoneNumber", [_dec34, _dec35, _dec36], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor31 = _applyDecoratedDescriptor(_class19.prototype, "firstName", [_dec37, _dec38], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor32 = _applyDecoratedDescriptor(_class19.prototype, "lastName", [_dec39, _dec40], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor33 = _applyDecoratedDescriptor(_class19.prototype, "defaultMessage", [_dec41, _dec42], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor34 = _applyDecoratedDescriptor(_class19.prototype, "includeDefaultMessage", [_dec43, _dec44], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class19));
let GetCourseResponse = (_dec45 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => OfficeHourPartial), _dec46 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => QueuePartial), (_class21 = (_temp11 = class GetCourseResponse {
  constructor() {
    this.id = void 0;
    this.name = void 0;

    _initializerDefineProperty(this, "officeHours", _descriptor35, this);

    _initializerDefineProperty(this, "queues", _descriptor36, this);

    this.coordinator_email = void 0;
    this.heatmap = void 0;
    this.selfEnroll = void 0;
  }

}, _temp11), (_descriptor35 = _applyDecoratedDescriptor(_class21.prototype, "officeHours", [_dec45], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor36 = _applyDecoratedDescriptor(_class21.prototype, "queues", [_dec46], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class21));
class GetSelfEnrollResponse {
  constructor() {
    this.courses = void 0;
  }

}
class GetCourseOverridesRow {
  constructor() {
    this.id = void 0;
    this.role = void 0;
    this.name = void 0;
    this.email = void 0;
  }

}
let GetCourseOverridesResponse = (_dec47 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => GetCourseOverridesRow), (_class23 = (_temp12 = class GetCourseOverridesResponse {
  constructor() {
    _initializerDefineProperty(this, "data", _descriptor37, this);
  }

}, _temp12), (_descriptor37 = _applyDecoratedDescriptor(_class23.prototype, "data", [_dec47], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class23));
let UpdateCourseOverrideBody = (_dec48 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec49 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), (_class25 = (_temp13 = class UpdateCourseOverrideBody {
  constructor() {
    _initializerDefineProperty(this, "email", _descriptor38, this);

    _initializerDefineProperty(this, "role", _descriptor39, this);
  }

}, _temp13), (_descriptor38 = _applyDecoratedDescriptor(_class25.prototype, "email", [_dec48], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor39 = _applyDecoratedDescriptor(_class25.prototype, "role", [_dec49], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class25));
class UpdateCourseOverrideResponse extends GetCourseOverridesRow {}
class GetQueueResponse extends QueuePartial {}
class GetCourseQueuesResponse extends Array {}
let ListQuestionsResponse = (_dec50 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Question), _dec51 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Question), _dec52 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Question), _dec53 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Question), _dec54 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => QuestionGroup), (_class27 = (_temp14 = class ListQuestionsResponse {
  constructor() {
    _initializerDefineProperty(this, "yourQuestion", _descriptor40, this);

    _initializerDefineProperty(this, "questionsGettingHelp", _descriptor41, this);

    _initializerDefineProperty(this, "queue", _descriptor42, this);

    _initializerDefineProperty(this, "priorityQueue", _descriptor43, this);

    _initializerDefineProperty(this, "groups", _descriptor44, this);
  }

}, _temp14), (_descriptor40 = _applyDecoratedDescriptor(_class27.prototype, "yourQuestion", [_dec50], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor41 = _applyDecoratedDescriptor(_class27.prototype, "questionsGettingHelp", [_dec51], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor42 = _applyDecoratedDescriptor(_class27.prototype, "queue", [_dec52], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor43 = _applyDecoratedDescriptor(_class27.prototype, "priorityQueue", [_dec53], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor44 = _applyDecoratedDescriptor(_class27.prototype, "groups", [_dec54], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class27));
class GetQuestionResponse extends Question {}
let GetStudentQuestionResponse = (_dec55 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), (_class29 = (_temp15 = class GetStudentQuestionResponse extends Question {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "queueId", _descriptor45, this);
  }

}, _temp15), (_descriptor45 = _applyDecoratedDescriptor(_class29.prototype, "queueId", [_dec55], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class29));
let CreateQuestionParams = (_dec56 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec57 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsEnum"])(QuestionType), _dec58 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec59 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), _dec60 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), _dec61 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), _dec62 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec63 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec64 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec65 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), (_class31 = (_temp16 = class CreateQuestionParams {
  constructor() {
    _initializerDefineProperty(this, "text", _descriptor46, this);

    _initializerDefineProperty(this, "questionType", _descriptor47, this);

    _initializerDefineProperty(this, "groupable", _descriptor48, this);

    _initializerDefineProperty(this, "queueId", _descriptor49, this);

    _initializerDefineProperty(this, "isOnline", _descriptor50, this);

    _initializerDefineProperty(this, "location", _descriptor51, this);

    _initializerDefineProperty(this, "force", _descriptor52, this);
  }

}, _temp16), (_descriptor46 = _applyDecoratedDescriptor(_class31.prototype, "text", [_dec56], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor47 = _applyDecoratedDescriptor(_class31.prototype, "questionType", [_dec57, _dec58], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor48 = _applyDecoratedDescriptor(_class31.prototype, "groupable", [_dec59], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor49 = _applyDecoratedDescriptor(_class31.prototype, "queueId", [_dec60], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor50 = _applyDecoratedDescriptor(_class31.prototype, "isOnline", [_dec61, _dec62], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor51 = _applyDecoratedDescriptor(_class31.prototype, "location", [_dec63, _dec64], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor52 = _applyDecoratedDescriptor(_class31.prototype, "force", [_dec65], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class31));
class CreateQuestionResponse extends Question {}
let UpdateQuestionParams = (_dec66 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec67 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec68 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsEnum"])(QuestionType), _dec69 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec70 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), _dec71 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec72 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), _dec73 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec74 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsEnum"])(QuestionStatusKeys), _dec75 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec76 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), _dec77 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec78 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec79 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), (_class33 = (_temp17 = class UpdateQuestionParams {
  constructor() {
    _initializerDefineProperty(this, "text", _descriptor53, this);

    _initializerDefineProperty(this, "questionType", _descriptor54, this);

    _initializerDefineProperty(this, "groupable", _descriptor55, this);

    _initializerDefineProperty(this, "queueId", _descriptor56, this);

    _initializerDefineProperty(this, "status", _descriptor57, this);

    _initializerDefineProperty(this, "isOnline", _descriptor58, this);

    _initializerDefineProperty(this, "location", _descriptor59, this);
  }

}, _temp17), (_descriptor53 = _applyDecoratedDescriptor(_class33.prototype, "text", [_dec66, _dec67], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor54 = _applyDecoratedDescriptor(_class33.prototype, "questionType", [_dec68, _dec69], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor55 = _applyDecoratedDescriptor(_class33.prototype, "groupable", [_dec70, _dec71], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor56 = _applyDecoratedDescriptor(_class33.prototype, "queueId", [_dec72, _dec73], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor57 = _applyDecoratedDescriptor(_class33.prototype, "status", [_dec74, _dec75], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor58 = _applyDecoratedDescriptor(_class33.prototype, "isOnline", [_dec76, _dec77], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor59 = _applyDecoratedDescriptor(_class33.prototype, "location", [_dec78, _dec79], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class33));
class UpdateQuestionResponse extends Question {}
let GroupQuestionsParams = (_dec80 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsArray"])(), _dec81 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Number), _dec82 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), (_class35 = (_temp18 = class GroupQuestionsParams {
  constructor() {
    _initializerDefineProperty(this, "questionIds", _descriptor60, this);

    _initializerDefineProperty(this, "queueId", _descriptor61, this);
  }

}, _temp18), (_descriptor60 = _applyDecoratedDescriptor(_class35.prototype, "questionIds", [_dec80, _dec81], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor61 = _applyDecoratedDescriptor(_class35.prototype, "queueId", [_dec82], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class35));
let ResolveGroupParams = (_dec83 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), (_class37 = (_temp19 = class ResolveGroupParams {
  constructor() {
    _initializerDefineProperty(this, "queueId", _descriptor62, this);
  }

}, _temp19), (_descriptor62 = _applyDecoratedDescriptor(_class37.prototype, "queueId", [_dec83], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class37));
let TACheckoutResponse = (_dec84 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), (_class39 = (_temp20 = class TACheckoutResponse {
  constructor() {
    this.queueId = void 0;
    this.canClearQueue = void 0;

    _initializerDefineProperty(this, "nextOfficeHourTime", _descriptor63, this);
  }

}, _temp20), (_descriptor63 = _applyDecoratedDescriptor(_class39.prototype, "nextOfficeHourTime", [_dec84], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class39));
let UpdateQueueParams = (_dec85 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec86 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(), _dec87 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), (_class41 = (_temp21 = class UpdateQueueParams {
  constructor() {
    _initializerDefineProperty(this, "notes", _descriptor64, this);

    _initializerDefineProperty(this, "allowQuestions", _descriptor65, this);
  }

}, _temp21), (_descriptor64 = _applyDecoratedDescriptor(_class41.prototype, "notes", [_dec85, _dec86], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor65 = _applyDecoratedDescriptor(_class41.prototype, "allowQuestions", [_dec87], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class41));
let TACheckinTimesResponse = (_dec88 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => TACheckinPair), (_class43 = (_temp22 = class TACheckinTimesResponse {
  constructor() {
    _initializerDefineProperty(this, "taCheckinTimes", _descriptor66, this);
  }

}, _temp22), (_descriptor66 = _applyDecoratedDescriptor(_class43.prototype, "taCheckinTimes", [_dec88], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class43));
let TACheckinPair = (_dec89 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec90 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsDate"])(), _dec91 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), _dec92 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsDate"])(), _dec93 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Date), _dec94 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), _dec95 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(), _dec96 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNumber"])(), (_class45 = (_temp23 = class TACheckinPair {
  constructor() {
    _initializerDefineProperty(this, "name", _descriptor67, this);

    _initializerDefineProperty(this, "checkinTime", _descriptor68, this);

    _initializerDefineProperty(this, "checkoutTime", _descriptor69, this);

    _initializerDefineProperty(this, "forced", _descriptor70, this);

    _initializerDefineProperty(this, "inProgress", _descriptor71, this);

    _initializerDefineProperty(this, "numHelped", _descriptor72, this);
  }

}, _temp23), (_descriptor67 = _applyDecoratedDescriptor(_class45.prototype, "name", [_dec89], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor68 = _applyDecoratedDescriptor(_class45.prototype, "checkinTime", [_dec90, _dec91], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor69 = _applyDecoratedDescriptor(_class45.prototype, "checkoutTime", [_dec92, _dec93], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor70 = _applyDecoratedDescriptor(_class45.prototype, "forced", [_dec94], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor71 = _applyDecoratedDescriptor(_class45.prototype, "inProgress", [_dec95], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor72 = _applyDecoratedDescriptor(_class45.prototype, "numHelped", [_dec96], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class45));
let AlertType;

(function (AlertType) {
  AlertType["REPHRASE_QUESTION"] = "rephraseQuestion";
})(AlertType || (AlertType = {}));

class AlertPayload {}
let Alert = (_dec97 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsEnum"])(AlertType), _dec98 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsDate"])(), _dec99 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => AlertPayload), _dec100 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), (_class47 = (_temp24 = class Alert {
  constructor() {
    _initializerDefineProperty(this, "alertType", _descriptor73, this);

    _initializerDefineProperty(this, "sent", _descriptor74, this);

    _initializerDefineProperty(this, "payload", _descriptor75, this);

    _initializerDefineProperty(this, "id", _descriptor76, this);
  }

}, _temp24), (_descriptor73 = _applyDecoratedDescriptor(_class47.prototype, "alertType", [_dec97], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor74 = _applyDecoratedDescriptor(_class47.prototype, "sent", [_dec98], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor75 = _applyDecoratedDescriptor(_class47.prototype, "payload", [_dec99], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor76 = _applyDecoratedDescriptor(_class47.prototype, "id", [_dec100], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class47));
let RephraseQuestionPayload = (_dec101 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), _dec102 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), _dec103 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), (_class49 = (_temp25 = class RephraseQuestionPayload extends AlertPayload {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "questionId", _descriptor77, this);

    _initializerDefineProperty(this, "queueId", _descriptor78, this);

    _initializerDefineProperty(this, "courseId", _descriptor79, this);
  }

}, _temp25), (_descriptor77 = _applyDecoratedDescriptor(_class49.prototype, "questionId", [_dec101], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor78 = _applyDecoratedDescriptor(_class49.prototype, "queueId", [_dec102], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor79 = _applyDecoratedDescriptor(_class49.prototype, "courseId", [_dec103], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class49));
let CreateAlertParams = (_dec104 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsEnum"])(AlertType), _dec105 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), _dec106 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsObject"])(), _dec107 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsInt"])(), (_class51 = (_temp26 = class CreateAlertParams {
  constructor() {
    _initializerDefineProperty(this, "alertType", _descriptor80, this);

    _initializerDefineProperty(this, "courseId", _descriptor81, this);

    _initializerDefineProperty(this, "payload", _descriptor82, this);

    _initializerDefineProperty(this, "targetUserId", _descriptor83, this);
  }

}, _temp26), (_descriptor80 = _applyDecoratedDescriptor(_class51.prototype, "alertType", [_dec104], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor81 = _applyDecoratedDescriptor(_class51.prototype, "courseId", [_dec105], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor82 = _applyDecoratedDescriptor(_class51.prototype, "payload", [_dec106], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor83 = _applyDecoratedDescriptor(_class51.prototype, "targetUserId", [_dec107], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class51));
class CreateAlertResponse extends Alert {}
let GetAlertsResponse = (_dec108 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => Alert), (_class53 = (_temp27 = class GetAlertsResponse {
  constructor() {
    _initializerDefineProperty(this, "alerts", _descriptor84, this);
  }

}, _temp27), (_descriptor84 = _applyDecoratedDescriptor(_class53.prototype, "alerts", [_dec108], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class53));
/**
 * Represents the parameters for a course being registered for register_courses endpoint.
 * @param sectionGroupName - The name of the section group.
 * @param name - user friendly display name entered by Prof
 * @param semester - The name of the semester.
 * @param iCalURL - The URL for the iCal calendar.
 * @param coordinator_email - The email for the course coordinator.
 * @param timezone - The timezone derived from the Campus field on the form.
 */

let RegisterCourseParams = (_dec109 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec110 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec111 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec112 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), _dec113 = Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(), (_class55 = (_temp28 = class RegisterCourseParams {
  constructor() {
    _initializerDefineProperty(this, "sectionGroupName", _descriptor85, this);

    _initializerDefineProperty(this, "name", _descriptor86, this);

    _initializerDefineProperty(this, "iCalURL", _descriptor87, this);

    _initializerDefineProperty(this, "coordinator_email", _descriptor88, this);

    _initializerDefineProperty(this, "timezone", _descriptor89, this);
  }

}, _temp28), (_descriptor85 = _applyDecoratedDescriptor(_class55.prototype, "sectionGroupName", [_dec109], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor86 = _applyDecoratedDescriptor(_class55.prototype, "name", [_dec110], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor87 = _applyDecoratedDescriptor(_class55.prototype, "iCalURL", [_dec111], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor88 = _applyDecoratedDescriptor(_class55.prototype, "coordinator_email", [_dec112], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor89 = _applyDecoratedDescriptor(_class55.prototype, "timezone", [_dec113], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class55));
class SemesterPartial {
  constructor() {
    this.id = void 0;
    this.season = void 0;
    this.year = void 0;
  }

}
class SSEQueueResponse {
  constructor() {
    this.queue = void 0;
    this.questions = void 0;
  }

}
let InsightComponent;

(function (InsightComponent) {
  InsightComponent["SimpleDisplay"] = "SimpleDisplay";
  InsightComponent["BarChart"] = "BarChart";
  InsightComponent["SimpleTable"] = "SimpleTable";
})(InsightComponent || (InsightComponent = {}));

const ERROR_MESSAGES = {
  courseController: {
    checkIn: {
      cannotCreateNewQueueIfNotProfessor: "You can't create a new queue if you're not a professor",
      cannotCheckIntoMultipleQueues: "Cannot check into multiple queues at the same time"
    },
    courseAlreadyRegistered: "One or more of the courses is already registered",
    courseNotFound: "The course was not found",
    sectionGroupNotFound: "One or more of the section groups was not found",
    courseOfficeHourError: "Unable to find a course's office hours",
    courseHeatMapError: "Unable to get course's cached heatmap",
    courseModelError: "Course Model not found",
    noUserFound: "No user found with given email",
    noSemesterFound: "No semester exists for the submitted course",
    updatedQueueError: "Error updating a course queue",
    queuesNotFound: "Queues not found",
    queueNotFound: "Queue not found",
    saveQueueError: "Unable to save queue",
    clearQueueError: "Unable to determine if queue can be cleared",
    createEventError: "An error occurred while creating an event",
    icalCalendarUpdate: "Unable to update calendar",
    checkInTime: "Unable to get TA check in times",
    removeCourse: "Error occurred while trying to remove a course",
    createCourse: "Error occurred while trying to create a course",
    updateCourse: "Error occurred while trying to update a course",
    createCourseMappings: "Unable to create a course mappings",
    updateProfLastRegistered: "Unable to update professor's last registered semester",
    invalidApplyURL: "You are unauthorized to submit an application. Please email help@khouryofficehours.com for the correct URL."
  },
  questionController: {
    createQuestion: {
      invalidQueue: "Posted to an invalid queue",
      noNewQuestions: "Queue not allowing new questions",
      closedQueue: "Queue is closed",
      oneQuestionAtATime: "You can't create more than one question at a time."
    },
    updateQuestion: {
      fsmViolation: (role, questionStatus, bodyStatus) => `${role} cannot change status from ${questionStatus} to ${bodyStatus}`,
      taOnlyEditQuestionStatus: "TA/Professors can only edit question status",
      otherTAHelping: "Another TA is currently helping with this question",
      otherTAResolved: "Another TA has already resolved this question",
      taHelpingOther: "TA is already helping someone else",
      loginUserCantEdit: "Logged-in user does not have edit access"
    },
    groupQuestions: {
      notGroupable: "One or more of the questions is not groupable"
    },
    saveQError: "Unable to save a question",
    notFound: "Question not found",
    unableToNotifyUser: "Unable to notify user"
  },
  loginController: {
    receiveDataFromKhoury: "Invalid request signature",
    invalidPayload: "The decoded JWT payload is invalid",
    invalidTempJWTToken: "Error occurred while signing a JWT token",
    addUserFromKhoury: "Error occurred while translating account from Khoury to Office Hours"
  },
  notificationController: {
    messageNotFromTwilio: "Message not from Twilio"
  },
  notificationService: {
    registerPhone: "phone number invalid"
  },
  questionRoleGuard: {
    questionNotFound: "Question not found",
    queueOfQuestionNotFound: "Cannot find queue of question",
    queueDoesNotExist: "This queue does not exist!"
  },
  queueController: {
    getQueue: "An error occurred while trying to retrieve a Queue",
    getQuestions: "Unable to get questions from queue",
    saveQueue: "Unable to save queue",
    cleanQueue: "Unable to clean queue"
  },
  queueRoleGuard: {
    queueNotFound: "Queue not found"
  },
  releaseNotesController: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    releaseNotesTime: e => "Error Parsing release notes time: " + e
  },
  insightsController: {
    insightUnathorized: "User is not authorized to view this insight",
    insightNameNotFound: "The insight requested was not found"
  },
  roleGuard: {
    notLoggedIn: "Must be logged in",
    noCourseIdFound: "No courseid found",
    notInCourse: "Not In This Course",
    mustBeRoleToJoinCourse: roles => `You must have one of roles [${roles.join(", ")}] to access this course`
  },
  profileController: {
    accountNotAvailable: "The user account is undefined",
    userResponseNotFound: "The user response was not found",
    noDiskSpace: "There is no disk space left to store an image. Please immediately contact your course staff and let them know. They will contact the Khoury Office Hours team as soon as possible."
  },
  alertController: {
    duplicateAlert: "This alert has already been sent",
    notActiveAlert: "This is not an alert that's open for the current user"
  },
  sseService: {
    getSubClient: "Unable to get the redis subscriber client",
    getDBClient: "Unable to get the redis database client",
    getPubClient: "Unable to get publisher client",
    moduleDestroy: "Unable to destroy the redis module",
    cleanupConnection: "Unable to cleanup the connection",
    clientIdSubscribe: "Client ID not found during subscribing to client",
    subscribe: "Unable to subscribe to the client",
    unsubscribe: "Unable to unsubscribe from the client",
    removeFromRoom: "Error removing from redis room",
    directConnections: "Unable to cleanup direct connections",
    roomMembers: "Unable to get room members",
    serialize: "Unable to serialize payload",
    publish: "Publisher client is unable to publish",
    clientIdNotFound: "Client ID not found during subscribing to client"
  }
};

/***/ }),

/***/ "wWzd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x5Ku":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Today; });

// EXTERNAL MODULE: /var/www/source/node_modules/@koh/api-client/index.ts
var api_client = __webpack_require__("zTld");

// EXTERNAL MODULE: /var/www/source/node_modules/@koh/common/index.ts
var common = __webpack_require__("wPNs");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/common/PageContainer.tsx
var PageContainer = __webpack_require__("NabS");

// EXTERNAL MODULE: ./components/Nav/NavBar.tsx + 4 modules
var NavBar = __webpack_require__("s9Vj");

// EXTERNAL MODULE: ./components/Schedule/SchedulePanel.tsx + 1 modules
var SchedulePanel = __webpack_require__("+KfW");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-linkify"
var external_react_linkify_ = __webpack_require__("Zy31");
var external_react_linkify_default = /*#__PURE__*/__webpack_require__.n(external_react_linkify_);

// EXTERNAL MODULE: /var/www/source/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./utils/TimeUtil.ts
var TimeUtil = __webpack_require__("jPdq");

// EXTERNAL MODULE: ./components/common/SelfAvatar.tsx + 3 modules
var SelfAvatar = __webpack_require__("FRUG");

// CONCATENATED MODULE: ./components/Today/OpenQueueCard.tsx
var __jsx = external_react_default.a.createElement;









const PaddedCard = external_styled_components_default()(external_antd_["Card"]).withConfig({
  displayName: "OpenQueueCard__PaddedCard",
  componentId: "pissyg-0"
})(["margin-top:32px;margin-bottom:25px;border-radius:6px;box-shadow:0px 2px 8px rgba(0,0,0,0.15);"]);
const HeaderDiv = external_styled_components_default.a.div.withConfig({
  displayName: "OpenQueueCard__HeaderDiv",
  componentId: "pissyg-1"
})(["font-size:24px;font-weight:500;color:#212934;"]);
const QueueInfoRow = external_styled_components_default.a.div.withConfig({
  displayName: "OpenQueueCard__QueueInfoRow",
  componentId: "pissyg-2"
})(["display:flex;flex-direction:row;justify-content:space-between;"]);
const RightQueueInfoRow = external_styled_components_default.a.div.withConfig({
  displayName: "OpenQueueCard__RightQueueInfoRow",
  componentId: "pissyg-3"
})(["display:flex;flex-direction:row;align-items:center;"]);
const QuestionNumberSpan = external_styled_components_default.a.span.withConfig({
  displayName: "OpenQueueCard__QuestionNumberSpan",
  componentId: "pissyg-4"
})(["font-size:24px;"]);
const QueueSizeColorDiv = external_styled_components_default.a.div.withConfig({
  displayName: "OpenQueueCard__QueueSizeColorDiv",
  componentId: "pissyg-5"
})(["color:#212934;font-size:16px;"]);
const HeaderText = external_styled_components_default.a.div.withConfig({
  displayName: "OpenQueueCard__HeaderText",
  componentId: "pissyg-6"
})(["font-size:14px;line-height:22px;font-weight:600;color:#bfbfbf;font-variant:small-caps;margin-bottom:8px;"]);
const OpenQueueButton = external_styled_components_default()(external_antd_["Button"]).withConfig({
  displayName: "OpenQueueCard__OpenQueueButton",
  componentId: "pissyg-7"
})(["background-color:#3684c6;border-radius:6px;color:white;font-weight:500;font-size:14px;margin-left:16px;"]);
const EditNotesButton = external_styled_components_default()(external_antd_["Button"]).withConfig({
  displayName: "OpenQueueCard__EditNotesButton",
  componentId: "pissyg-8"
})(["border-radius:6px;font-size:14px;font-weight:500;"]);
const SaveButton = external_styled_components_default()(external_antd_["Button"]).withConfig({
  displayName: "OpenQueueCard__SaveButton",
  componentId: "pissyg-9"
})(["background:#2a9187;border-radius:6px;color:white;font-weight:500;font-size:14px;"]);
const NotesInput = external_styled_components_default()(external_antd_["Input"].TextArea).withConfig({
  displayName: "OpenQueueCard__NotesInput",
  componentId: "pissyg-10"
})(["border-radius:6px;border:1px solid #b8c4ce;"]);
const Notes = external_styled_components_default.a.div.withConfig({
  displayName: "OpenQueueCard__Notes",
  componentId: "pissyg-11"
})(["overflow-wrap:break-word;white-space:pre-wrap;"]);
const StyledKOHAvatar = external_styled_components_default()(SelfAvatar["a" /* KOHAvatar */]).withConfig({
  displayName: "OpenQueueCard__StyledKOHAvatar",
  componentId: "pissyg-12"
})(["margin-right:25px;margin-top:10px;"]);
const QueueCardButtonRow = external_styled_components_default()(external_antd_["Row"]).withConfig({
  displayName: "OpenQueueCard__QueueCardButtonRow",
  componentId: "pissyg-13"
})(["padding-top:10px;"]);

const OpenQueueCard = ({
  queue,
  isTA,
  updateQueueNotes
}) => {
  const {
    0: editingNotes,
    1: setEditingNotes
  } = Object(external_react_["useState"])(false);
  const {
    0: updatedNotes,
    1: setUpdatedNotes
  } = Object(external_react_["useState"])(queue.notes);
  const router = Object(router_["useRouter"])();
  const {
    cid
  } = router.query;
  const staffList = queue.staffList;

  const handleUpdate = () => {
    setEditingNotes(false);
    updateQueueNotes(queue, updatedNotes);
  };

  return __jsx(PaddedCard, {
    headStyle: {
      background: "#F3F5F7"
    },
    className: "open-queue-card",
    title: staffList.map(staffMember => staffMember.name).join(", ") || "No Staff Checked In!",
    extra: queue.startTime && queue.endTime && Object(TimeUtil["a" /* formatQueueTime */])(queue)
  }, __jsx(QueueInfoRow, null, __jsx(HeaderDiv, null, queue.room), __jsx(RightQueueInfoRow, null, !queue.allowQuestions && __jsx(external_antd_["Tooltip"], {
    title: "This queue is no longer accepting questions"
  }, __jsx(icons_["StopOutlined"], {
    style: {
      color: "red",
      fontSize: "24px",
      marginRight: "8px"
    }
  })), __jsx(QueueSizeColorDiv, null, __jsx(QuestionNumberSpan, null, queue.queueSize), " in queue"))), __jsx("br", null), editingNotes ? __jsx("div", null, __jsx(HeaderText, null, "staff notes"), __jsx(NotesInput, {
    defaultValue: queue.notes,
    value: updatedNotes,
    onChange: e => setUpdatedNotes(e.target.value)
  })) : queue.notes && __jsx("div", null, __jsx(HeaderText, {
    style: {
      marginBottom: 0
    }
  }, "staff notes"), __jsx(external_react_linkify_default.a, {
    componentDecorator: (decoratedHref, decoratedText, key) => __jsx("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: decoratedHref,
      key: key
    }, decoratedText)
  }, __jsx(Notes, null, queue.notes))), __jsx("br", null), staffList.length > 1 && __jsx(HeaderText, null, "checked-in staff")
  /*todo: add better text*/
  , __jsx(external_antd_["Row"], {
    justify: "space-between",
    align: "bottom"
  }, __jsx("div", null, staffList.map(staffMember => __jsx(external_antd_["Tooltip"], {
    key: staffMember.id,
    title: staffMember.name
  }, __jsx(StyledKOHAvatar, {
    size: 96,
    photoURL: staffMember.photoURL,
    name: staffMember.name
  })))), editingNotes && __jsx(SaveButton, {
    onClick: handleUpdate,
    size: "large"
  }, "Save Changes"), !editingNotes && __jsx(QueueCardButtonRow, null, isTA && __jsx(EditNotesButton, {
    size: "large",
    onClick: () => {
      setEditingNotes(true);
    }
  }, "Edit Notes"), __jsx(link_default.a, {
    href: "/course/[cid]/queue/[qid]",
    as: `/course/${cid}/queue/${queue.id}`
  }, __jsx(OpenQueueButton, {
    type: "primary",
    size: "large",
    "data-cy": "open-queue-button"
  }, "Open Queue")))));
};

/* harmony default export */ var Today_OpenQueueCard = (OpenQueueCard);
function OpenQueueCardSkeleton() {
  return __jsx(PaddedCard, null, __jsx(external_antd_["Skeleton"], {
    paragraph: {
      rows: 2
    }
  }), __jsx(external_antd_["Row"], {
    justify: "space-between",
    align: "bottom"
  }, __jsx(external_antd_["Skeleton"].Avatar, {
    size: 96
  }), __jsx(external_antd_["Skeleton"].Button, {
    size: "large"
  })));
}
// EXTERNAL MODULE: external "@visx/responsive"
var responsive_ = __webpack_require__("6wFz");

// CONCATENATED MODULE: ./components/Today/PopularTimes/FormatDateHour.ts
function formatDateHour(hours) {
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  return hours + ampm;
}
// EXTERNAL MODULE: external "@visx/axis"
var axis_ = __webpack_require__("xRgH");

// EXTERNAL MODULE: external "@visx/grid"
var grid_ = __webpack_require__("idLA");

// EXTERNAL MODULE: external "@visx/group"
var group_ = __webpack_require__("dSNi");

// EXTERNAL MODULE: external "@visx/scale"
var scale_ = __webpack_require__("LsSt");

// EXTERNAL MODULE: external "@visx/shape"
var shape_ = __webpack_require__("NxG6");

// EXTERNAL MODULE: external "@visx/tooltip"
var tooltip_ = __webpack_require__("g7qJ");

// CONCATENATED MODULE: ./components/Today/PopularTimes/TimeGraph.tsx
var TimeGraph_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












let tooltipTimeout;

const tooltipStyles = _objectSpread(_objectSpread({}, tooltip_["defaultStyles"]), {}, {
  minWidth: 60,
  backgroundColor: "rgba(0,0,0,0.9)",
  color: "white"
}); // The distance in pixels from the left side of the component to the origin of the graph


const LEFT_MARGIN = 45; // The distance in pixels from the end of the bottom axis to the right side of the component

const RIGHT_MARGIN = 10; // The distance in pixels from the top of the component to the top of the y axis

const TOP_MARGIN = 10;
const BOTTOM_MARGIN = 20; //padding in between each bar as a percent of the bar width

const BAR_PADDING = 0.2; // the padding to the left of the left axis in pixels

const GraphContainer = external_styled_components_default.a.div.withConfig({
  displayName: "TimeGraph__GraphContainer",
  componentId: "sc-18irejk-0"
})(["position:relative;& .popularTimes__bar{cursor:pointer;}"]);
function TimeGraph({
  values,
  maxTime,
  firstHour,
  lastHour,
  width,
  height
}) {
  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip
  } = Object(tooltip_["useTooltip"])();
  const {
    containerRef,
    TooltipInPortal
  } = Object(tooltip_["useTooltipInPortal"])(); // bounds

  const xMax = width - RIGHT_MARGIN - LEFT_MARGIN;
  const yMax = height - TOP_MARGIN - BOTTOM_MARGIN; // scales, memoize for performance

  const xScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleBand"])({
    range: [0, xMax],
    round: true,
    domain: Object(external_lodash_["range"])(Math.max(0, firstHour), Math.min(lastHour + 1, 24) + 1),
    padding: BAR_PADDING
  }), [xMax, firstHour, lastHour]); // number of minutes between each grid row line

  const gridRowInterval = maxTime >= 60 ? 60 : 30;
  const maxTickVal = Math.max(maxTime, gridRowInterval);
  const yScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleLinear"])({
    range: [yMax, 0],
    round: true,
    domain: [0, maxTickVal + 5]
  }), [yMax, maxTickVal]);
  const barWidth = xScale.bandwidth(); // the tick values for the y axis

  const yAxisTickValues = Object(external_lodash_["range"])(gridRowInterval, maxTickVal + 1, gridRowInterval);
  return width < 10 ? null : // relative position is needed for correct tooltip positioning
  TimeGraph_jsx(GraphContainer, null, TimeGraph_jsx("svg", {
    ref: containerRef,
    width: width,
    height: height
  }, TimeGraph_jsx("rect", {
    x: 0,
    y: 0,
    width: width,
    height: height,
    fill: "rgba(0,0,0,0)",
    rx: 14
  }), TimeGraph_jsx(grid_["GridRows"], {
    top: TOP_MARGIN,
    left: LEFT_MARGIN,
    width: width - RIGHT_MARGIN - LEFT_MARGIN,
    scale: yScale,
    tickValues: yAxisTickValues,
    stroke: "#cccccc"
  }), TimeGraph_jsx(group_["Group"], {
    left: LEFT_MARGIN,
    top: TOP_MARGIN
  }, values.map((value, i) => {
    const barHeight = yMax - yScale(value);
    const barX = xScale(i) + barWidth * (1 + BAR_PADDING) / 2;
    const barY = yMax - barHeight;

    const interactWithBar = () => {
      if (tooltipTimeout) clearTimeout(tooltipTimeout);
      const top = yMax - barHeight - TOP_MARGIN; // - VERTICAL_MARGIN - barHeight;

      const left = barX + barWidth;
      showTooltip({
        tooltipData: value,
        tooltipTop: top,
        tooltipLeft: left
      });
    };

    return TimeGraph_jsx(shape_["BarRounded"], {
      key: `bar-${formatDateHour(i)}`,
      className: "popularTimes__bar",
      x: barX,
      y: barY,
      width: barWidth,
      height: barHeight,
      radius: 10,
      top: true,
      fill: "#40a9ff",
      onMouseLeave: () => {
        tooltipTimeout = window.setTimeout(() => {
          hideTooltip();
        }, 300);
      },
      onMouseOver: interactWithBar,
      onMouseDown: interactWithBar
    });
  })), TimeGraph_jsx(group_["Group"], {
    left: LEFT_MARGIN
  }, TimeGraph_jsx(axis_["AxisBottom"], {
    top: yMax + TOP_MARGIN,
    scale: xScale,
    tickFormat: hour => (hour - firstHour) % 3 == 0 ? formatDateHour(hour) : "",
    tickLabelProps: () => ({
      fill: "",
      fontSize: 11,
      textAnchor: "middle"
    })
  })), TimeGraph_jsx(group_["Group"], {
    top: TOP_MARGIN,
    left: LEFT_MARGIN
  }, TimeGraph_jsx(axis_["AxisLeft"], {
    scale: yScale,
    hideTicks: true,
    tickValues: yAxisTickValues,
    tickFormat: hour => Object(TimeUtil["b" /* formatWaitTime */])(hour),
    tickLabelProps: () => ({
      fill: "",
      fontSize: 11,
      textAnchor: "end"
    })
  }))), tooltipOpen && tooltipData && TimeGraph_jsx(TooltipInPortal, {
    key: Math.random() // update tooltip bounds each render
    ,
    top: tooltipTop,
    left: tooltipLeft,
    style: tooltipStyles
  }, Object(TimeUtil["b" /* formatWaitTime */])(tooltipData)));
}
// CONCATENATED MODULE: ./components/Today/PopularTimes/PopularTimes.tsx
var PopularTimes_jsx = external_react_default.a.createElement;









const TitleRow = external_styled_components_default.a.div.withConfig({
  displayName: "PopularTimes__TitleRow",
  componentId: "sc-1jf1o8u-0"
})(["display:flex;align-items:baseline;"]);
const WeekdayDropdown = external_styled_components_default.a.h2.withConfig({
  displayName: "PopularTimes__WeekdayDropdown",
  componentId: "sc-1jf1o8u-1"
})(["display:flex;align-items:center;margin-left:8px;color:#1890ff;cursor:pointer;"]);
const GraphWithArrow = external_styled_components_default.a.div.withConfig({
  displayName: "PopularTimes__GraphWithArrow",
  componentId: "sc-1jf1o8u-2"
})(["display:flex;align-items:center;margin-bottom:20px;"]);
const PopularTimes_GraphContainer = external_styled_components_default.a.div.withConfig({
  displayName: "PopularTimes__GraphContainer",
  componentId: "sc-1jf1o8u-3"
})(["flex-grow:1;min-width:0;"]);
const GraphArrowButtons = external_styled_components_default.a.div.withConfig({
  displayName: "PopularTimes__GraphArrowButtons",
  componentId: "sc-1jf1o8u-4"
})(["padding:20px 5px;font-size:1.5em;cursor:pointer;"]);
const GraphNotes = external_styled_components_default.a.h4.withConfig({
  displayName: "PopularTimes__GraphNotes",
  componentId: "sc-1jf1o8u-5"
})(["font-size:14px;color:#111;padding-left:40px;"]);
const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function findWeekMinAndMax(days) {
  let minHourInWeek = 24;
  let maxHourInWeek = 0;
  days.forEach((v, hour) => {
    if (v >= 0) {
      if (hour % 24 > maxHourInWeek) {
        maxHourInWeek = hour % 24;
      }

      if (hour % 24 < minHourInWeek) {
        minHourInWeek = hour % 24;
      }
    }
  });

  if (maxHourInWeek < minHourInWeek) {
    return [0, 23];
  }

  return [minHourInWeek, maxHourInWeek];
}

const BUSY = {
  shortest: "the shortest",
  shorter: "shorter than usual",
  avg: "average",
  longer: "longer than usual",
  longest: "the longest"
}; // Mapping for text describing level of business, given the length of the unique wait times that week (to account for days without hours)

const BUSY_TEXTS = {
  1: [BUSY.avg],
  2: [BUSY.shortest, BUSY.longest],
  3: [BUSY.shortest, BUSY.avg, BUSY.longest],
  4: [BUSY.shortest, BUSY.shorter, BUSY.longer, BUSY.longest],
  5: [BUSY.shortest, BUSY.shorter, BUSY.avg, BUSY.longer, BUSY.longest],
  6: [BUSY.shortest, BUSY.shorter, BUSY.shorter, BUSY.longer, BUSY.longer, BUSY.longest],
  7: [BUSY.shortest, BUSY.shorter, BUSY.shorter, BUSY.avg, BUSY.longer, BUSY.longer, BUSY.longest]
};

function generateBusyText(day, dailySumWaitTimes) {
  const dayWaitTime = dailySumWaitTimes[day];
  const uniqSumWaitTimes = Object(external_lodash_["uniq"])(Object(external_lodash_["sortBy"])(dailySumWaitTimes.filter(v => v >= 0)));
  const rank = uniqSumWaitTimes.indexOf(dayWaitTime);
  return BUSY_TEXTS[uniqSumWaitTimes.length][rank];
}

function PopularTimes({
  heatmap
}) {
  const {
    0: currentDayOfWeek,
    1: setCurrentDayOfWeek
  } = Object(external_react_["useState"])(new Date().getDay());
  const [firstHour, lastHour] = findWeekMinAndMax(heatmap);
  const dailyAvgWaitTimes = Object(external_lodash_["chunk"])(heatmap, 24).map(hours => {
    const filteredOfficeHours = hours.filter(v => v !== -1);
    return filteredOfficeHours.length > 0 ? Object(external_lodash_["mean"])(filteredOfficeHours) : -1;
  });
  return PopularTimes_jsx("div", {
    className: "hide-in-percy"
  }, PopularTimes_jsx(TitleRow, null, PopularTimes_jsx("h2", null, "Wait Times on"), PopularTimes_jsx(external_antd_["Dropdown"], {
    trigger: ["click"],
    overlay: PopularTimes_jsx(external_antd_["Menu"], null, DAYS_OF_WEEK.map((dayName, i) => PopularTimes_jsx(external_antd_["Menu"].Item, {
      key: dayName
    }, PopularTimes_jsx("a", {
      onClick: () => setCurrentDayOfWeek(i)
    }, dayName))))
  }, PopularTimes_jsx(WeekdayDropdown, null, DAYS_OF_WEEK[currentDayOfWeek], PopularTimes_jsx(icons_["DownOutlined"], null)))), PopularTimes_jsx(GraphWithArrow, null, PopularTimes_jsx(GraphArrowButtons, {
    onClick: () => setCurrentDayOfWeek((7 + currentDayOfWeek - 1) % 7)
  }, PopularTimes_jsx(icons_["LeftOutlined"], null)), PopularTimes_jsx(PopularTimes_GraphContainer, null, PopularTimes_jsx(responsive_["ParentSize"], null, ({
    width
  }) => PopularTimes_jsx(TimeGraph, {
    values: heatmap.slice(currentDayOfWeek * 24, (currentDayOfWeek + 1) * 24 - 1).map(i => i < 0 ? 0 : Math.floor(i)),
    maxTime: Math.max(...heatmap),
    firstHour: firstHour,
    lastHour: lastHour,
    width: width,
    height: 220
  }))), PopularTimes_jsx(GraphArrowButtons, {
    onClick: () => setCurrentDayOfWeek((currentDayOfWeek + 1) % 7)
  }, PopularTimes_jsx(icons_["RightOutlined"], null))), dailyAvgWaitTimes[currentDayOfWeek] >= 0 && PopularTimes_jsx(GraphNotes, null, PopularTimes_jsx(icons_["ClockCircleOutlined"], null), " ", DAYS_OF_WEEK[currentDayOfWeek], "s have", " ", PopularTimes_jsx("strong", null, generateBusyText(currentDayOfWeek, dailyAvgWaitTimes)), " ", "wait times."), new Date().getDay() === currentDayOfWeek && heatmap[currentDayOfWeek * 24 + new Date().getHours()] >= 0 && PopularTimes_jsx(GraphNotes, null, PopularTimes_jsx(icons_["HourglassOutlined"], null), " At ", formatDateHour(new Date().getHours()), ", people generally wait", " ", PopularTimes_jsx("strong", null, Object(TimeUtil["b" /* formatWaitTime */])(heatmap[currentDayOfWeek * 24 + new Date().getHours()])), "."));
}
// EXTERNAL MODULE: ./hooks/useCourse.tsx
var useCourse = __webpack_require__("dppZ");

// EXTERNAL MODULE: ./hooks/useProfile.ts
var useProfile = __webpack_require__("Ogf2");

// EXTERNAL MODULE: ./hooks/useRoleInCourse.ts
var useRoleInCourse = __webpack_require__("nXdl");

// EXTERNAL MODULE: ./components/Today/TACheckinButton.tsx
var TACheckinButton = __webpack_require__("Sccn");

// CONCATENATED MODULE: ./components/Today/ProfessorCheckinButton.tsx
var ProfessorCheckinButton_jsx = external_react_default.a.createElement;










const ProfessorModalRadio = external_styled_components_default()(external_antd_["Radio"]).withConfig({
  displayName: "ProfessorCheckinButton__ProfessorModalRadio",
  componentId: "dqhp9z-0"
})(["display:block;height:30px;lineheight:30px;"]);
function TodayPageCheckinButton() {
  const profile = Object(useProfile["a" /* useProfile */])();
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: queueToCheckInto,
    1: setQueueToCheckInto
  } = Object(external_react_["useState"])(0);
  const router = Object(router_["useRouter"])();
  const {
    cid
  } = router.query;
  const {
    course
  } = Object(useCourse["a" /* useCourse */])(Number(cid));
  const role = Object(useRoleInCourse["a" /* useRoleInCourse */])(Number(cid));
  const queueCheckedIn = course === null || course === void 0 ? void 0 : course.queues.find(queue => queue.staffList.find(staff => staff.id === (profile === null || profile === void 0 ? void 0 : profile.id)));
  const {
    0: queueToBeCreated,
    1: setQueueToBeCreated
  } = Object(external_react_["useState"])(`Professor ${profile === null || profile === void 0 ? void 0 : profile.lastName}'s Office Hours`);
  return ProfessorCheckinButton_jsx(external_react_default.a.Fragment, null, modalVisible && ProfessorCheckinButton_jsx(external_antd_["Modal"], {
    title: "Check-In To Office Hours",
    visible: modalVisible,
    onCancel: () => setModalVisible(false),
    okText: "Check In",
    onOk: async () => {
      let redirectID;

      if (queueToCheckInto > -1) {
        redirectID = await api_client["a" /* API */].taStatus.checkIn(Number(cid), course === null || course === void 0 ? void 0 : course.queues[queueToCheckInto].room);
      } else {
        redirectID = await api_client["a" /* API */].taStatus.checkIn(Number(cid), queueToBeCreated);
      }

      router.push("/course/[cid]/queue/[qid]", `/course/${Number(cid)}/queue/${redirectID.id}`);
    }
  }, ProfessorCheckinButton_jsx("h3", null, "Which queue would you like to check into?"), ProfessorCheckinButton_jsx(external_antd_["Radio"].Group, {
    value: queueToCheckInto,
    onChange: e => setQueueToCheckInto(e.target.value)
  }, course === null || course === void 0 ? void 0 : course.queues.map((q, i) => ProfessorCheckinButton_jsx(ProfessorModalRadio, {
    key: q.id,
    value: i
  }, q.room)), ProfessorCheckinButton_jsx(ProfessorModalRadio, {
    value: -1
  }, "Other...", queueToCheckInto === -1 ? ProfessorCheckinButton_jsx(external_antd_["Input"], {
    defaultValue: `Professor ${profile.lastName}'s Office Hours`,
    onChange: e => setQueueToBeCreated(e.target.value),
    style: {
      width: 400,
      marginLeft: 10
    }
  }) : null))), role === common["r" /* Role */].TA && ProfessorCheckinButton_jsx(TACheckinButton["b" /* default */], {
    courseId: Number(cid),
    room: "Online",
    state: queueCheckedIn ? "CheckedIn" : "CheckedOut"
  }), !queueCheckedIn && role === common["r" /* Role */].PROFESSOR && ProfessorCheckinButton_jsx(TACheckinButton["a" /* CheckinButton */], {
    type: "default",
    size: "large",
    onClick: () => setModalVisible(true)
  }, "Check In"), queueCheckedIn && role === common["r" /* Role */].PROFESSOR && ProfessorCheckinButton_jsx(TACheckinButton["b" /* default */], {
    courseId: Number(cid),
    room: queueCheckedIn.room,
    state: "CheckedIn"
  }));
}
// EXTERNAL MODULE: external "react-notion"
var external_react_notion_ = __webpack_require__("zA46");

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// EXTERNAL MODULE: ./hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__("Xccw");

// CONCATENATED MODULE: ./components/Today/ReleaseNotes.tsx

var ReleaseNotes_jsx = external_react_default.a.createElement;






function ReleaseNotes() {
  const [releaseNotesLastSeen, setReleaseNotesLastSeen] = Object(useLocalStorage["a" /* useLocalStorage */])("releaseNotesLastSeen", null);
  const {
    0: showReleaseNotes,
    1: setShowReleaseNotes
  } = Object(external_react_["useState"])(false);
  const {
    data
  } = external_swr_default()(`api/v1/release_notes`, async () => api_client["a" /* API */].releaseNotes.get());

  if (!releaseNotesLastSeen && (data === null || data === void 0 ? void 0 : data.lastUpdatedUnixTime) || new Date(releaseNotesLastSeen) < new Date(data === null || data === void 0 ? void 0 : data.lastUpdatedUnixTime)) {
    external_antd_["notification"].open({
      message: "We've got new features/bug fixes",
      type: "info",
      duration: 0,
      description: "Click to see what's new!",
      className: "clickable-notification hide-in-percy",
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowReleaseNotes(true);
        external_antd_["notification"].destroy();
      }
    });
    setReleaseNotesLastSeen(new Date());
  }

  const openLinksInNewTab = e => {
    if (e.target.className === "notion-link") {
      e.preventDefault();
      window.open(e.target.href);
    }
  };

  return ReleaseNotes_jsx("div", {
    onClick: openLinksInNewTab
  }, (data === null || data === void 0 ? void 0 : data.releaseNotes) ? ReleaseNotes_jsx(external_antd_["Modal"], {
    title: "Release Notes",
    visible: showReleaseNotes,
    bodyStyle: {
      padding: "0px 24px"
    },
    footer: ReleaseNotes_jsx(external_react_default.a.Fragment, null, ReleaseNotes_jsx("b", null, "Want to see more? "), ReleaseNotes_jsx("a", {
      href: "https://info.khouryofficehours.com/release-notes-archive",
      target: "_blank",
      rel: "noreferrer"
    }, " ", "Click here to view the archive")),
    width: 625,
    onCancel: () => setShowReleaseNotes(false)
  }, ReleaseNotes_jsx(external_react_notion_["NotionRenderer"], {
    blockMap: data.releaseNotes
  })) : null);
}
// CONCATENATED MODULE: ./components/Today/WelcomeStudents.tsx

var WelcomeStudents_jsx = external_react_default.a.createElement;



function WelcomeStudents() {
  const [firstTime, setFirstTime] = Object(useLocalStorage["a" /* useLocalStorage */])("firstTime", true);
  return WelcomeStudents_jsx(external_antd_["Modal"], {
    visible: firstTime,
    footer: null,
    onCancel: () => setFirstTime(false),
    width: 625
  }, WelcomeStudents_jsx("div", null, WelcomeStudents_jsx("h1", null, " Welcome to the Khoury Office Hours app! \uD83C\uDF89"), "If you run into any issues while using the app, the help guide can be found in the menu by clicking on the circular profile in the nav bar.", WelcomeStudents_jsx("br", null), WelcomeStudents_jsx("br", null), "Take a look at our ", WelcomeStudents_jsx(link_default.a, {
    href: "/about"
  }, "About Page"), " to learn more about the team behind the app."));
}
// CONCATENATED MODULE: ./pages/course/[cid]/today.tsx
var today_jsx = external_react_default.a.createElement;

function today_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function today_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { today_ownKeys(Object(source), true).forEach(function (key) { today_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { today_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function today_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const Container = external_styled_components_default.a.div.withConfig({
  displayName: "today__Container",
  componentId: "guxhv1-0"
})(["margin-top:32px;"]);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "today__Title",
  componentId: "guxhv1-1"
})(["font-weight:500;font-size:30px;color:#212934;"]);

function arrayRotate(arr, count) {
  const adjustedCount = (arr.length + count) % arr.length;
  return arr.slice(adjustedCount, arr.length).concat(arr.slice(0, adjustedCount));
}

const collapseHeatmap = heatmap => Object(external_lodash_["chunk"])(heatmap, 4).map(hours => {
  const filteredOfficeHours = hours.filter(v => v !== -1);
  return filteredOfficeHours.length > 0 ? Object(external_lodash_["mean"])(filteredOfficeHours) : -1;
});

function Today() {
  var _course$queues, _course$queues2;

  const router = Object(router_["useRouter"])();
  const {
    cid
  } = router.query;
  const role = Object(useRoleInCourse["a" /* useRoleInCourse */])(Number(cid));
  const {
    course,
    mutateCourse
  } = Object(useCourse["a" /* useCourse */])(Number(cid));

  const updateQueueNotes = async (queue, notes) => {
    const newQueues = course && course.queues.map(q => q.id === queue.id ? today_objectSpread(today_objectSpread({}, q), {}, {
      notes
    }) : q);
    mutateCourse(today_objectSpread(today_objectSpread({}, course), {}, {
      queues: newQueues
    }), false);
    await api_client["a" /* API */].queues.update(queue.id, {
      notes,
      allowQuestions: queue.allowQuestions
    });
    mutateCourse();
  };

  return today_jsx(PageContainer["a" /* StandardPageContainer */], null, today_jsx(head_default.a, null, today_jsx("title", null, course === null || course === void 0 ? void 0 : course.name, " | Khoury Office Hours")), today_jsx(ReleaseNotes, null), today_jsx(WelcomeStudents, null), today_jsx(NavBar["a" /* default */], {
    courseId: Number(cid)
  }), today_jsx(Container, null, today_jsx(external_antd_["Row"], {
    gutter: 64
  }, today_jsx(external_antd_["Col"], {
    md: 12,
    xs: 24
  }, today_jsx(external_antd_["Row"], {
    justify: "space-between"
  }, today_jsx(Title, null, "Current Office Hours"), today_jsx(TodayPageCheckinButton, null)), role === common["r" /* Role */].PROFESSOR && today_jsx(external_antd_["Row"], null, today_jsx("div", null, "You are a professor for this course")), (course === null || course === void 0 ? void 0 : (_course$queues = course.queues) === null || _course$queues === void 0 ? void 0 : _course$queues.length) === 0 ? today_jsx("h1", {
    style: {
      paddingTop: "100px"
    }
  }, "There are currently no scheduled office hours") : course === null || course === void 0 ? void 0 : (_course$queues2 = course.queues) === null || _course$queues2 === void 0 ? void 0 : _course$queues2.map(q => today_jsx(Today_OpenQueueCard, {
    key: q.id,
    queue: q,
    isTA: role === common["r" /* Role */].TA,
    updateQueueNotes: updateQueueNotes
  })), !course && today_jsx(OpenQueueCardSkeleton, null), course && course.heatmap && today_jsx(PopularTimes, {
    heatmap: collapseHeatmap(arrayRotate(course.heatmap, -Math.floor(external_moment_default()().utcOffset() / 15)))
  })), today_jsx(external_antd_["Col"], {
    md: 12,
    sm: 24
  }, today_jsx(SchedulePanel["a" /* default */], {
    courseId: Number(cid),
    defaultView: "day"
  })))));
}

/***/ }),

/***/ "xRgH":
/***/ (function(module, exports) {

module.exports = require("@visx/axis");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yTfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("4ncj");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "zA46":
/***/ (function(module, exports) {

module.exports = require("react-notion");

/***/ }),

/***/ "zTld":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony import */ var _koh_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wPNs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dFUt");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TfFe");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_2__);




class APIClient {
  /**
   * Send HTTP and return data, optionally serialized with class-transformer (helpful for Date serialization)
   * @param method HTTP method
   * @param url URL to send req to
   * @param responseClass Class with class-transformer decorators to serialize response to
   * @param body body to send with req
   */
  async req(method, url, responseClass, body, params) {
    const res = (await this.axios.request({
      method,
      url,
      data: body,
      params
    })).data;
    return responseClass ? Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["plainToClass"])(responseClass, res) : res;
  }

  constructor(baseURL = "") {
    this.axios = void 0;
    this.profile = {
      index: async () => this.req("GET", `/api/v1/profile`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* GetProfileResponse */ "i"]),
      patch: async body => this.req("PATCH", `/api/v1/profile`, undefined, body),
      deleteProfilePicture: async () => this.req("DELETE", `/api/v1/profile/delete_profile_picture`)
    };
    this.course = {
      get: async courseId => this.req("GET", `/api/v1/courses/${courseId}`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* GetCourseResponse */ "h"]),
      updateCalendar: async courseId => this.req("POST", `/api/v1/courses/${courseId}/update_calendar`),
      getCourseOverrides: async courseId => this.req("GET", `/api/v1/courses/${courseId}/course_override`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* GetCourseOverridesResponse */ "g"]),
      addOverride: async (courseId, params) => this.req("POST", `/api/v1/courses/${courseId}/update_override`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* UpdateCourseOverrideResponse */ "t"], params),
      deleteOverride: async (courseId, params) => this.req("DELETE", `/api/v1/courses/${courseId}/update_override`, undefined, params),
      withdrawCourse: async courseId => this.req("DELETE", `/api/v1/courses/${courseId}/withdraw_course`, undefined),
      registerCourses: async params => this.req("POST", `/api/v1/courses/register_courses`, undefined, params),
      getTACheckinTimes: async (courseId, startDate, endDate) => this.req("GET", `/api/v1/courses/${courseId}/ta_check_in_times`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* TACheckinTimesResponse */ "s"], {}, {
        startDate,
        endDate
      }),
      toggleSelfEnroll: async courseId => this.req("POST", `/api/v1/courses/${courseId}/self_enroll`),
      selfEnrollCourses: async () => this.req("GET", "/api/v1/self_enroll_courses"),
      createSelfEnrollOverride: async courseId => this.req("POST", `/api/v1/create_self_enroll_override/${courseId}`)
    };
    this.taStatus = {
      checkIn: async (courseId, room) => this.req("POST", `/api/v1/courses/${courseId}/ta_location/${room}`),
      checkOut: async (courseId, room) => this.req("DELETE", `/api/v1/courses/${courseId}/ta_location/${room}`)
    };
    this.questions = {
      index: async queueId => this.req("GET", `/api/v1/queues/${queueId}/questions`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* ListQuestionsResponse */ "n"]),
      create: async params => this.req("POST", `/api/v1/questions`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* CreateQuestionResponse */ "d"], params),
      get: async questionId => this.req("GET", `/api/v1/questions/${questionId}`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* GetQuestionResponse */ "j"]),
      update: async (questionId, params) => this.req("PATCH", `/api/v1/questions/${questionId}`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* UpdateQuestionResponse */ "u"], params),
      notify: async questionId => this.req("POST", `/api/v1/questions/${questionId}/notify`),
      group: async params => this.req("POST", "/api/v1/questions/group", undefined, params),
      resolveGroup: async (groupId, queueId) => this.req("PATCH", `/api/v1/questions/resolveGroup/${groupId}`, undefined, {
        queueId
      })
    };
    this.queues = {
      get: async queueId => this.req("GET", `/api/v1/queues/${queueId}`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* GetQueueResponse */ "k"]),
      update: async (queueId, params) => this.req("PATCH", `/api/v1/queues/${queueId}`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* UpdateQuestionResponse */ "u"], params),
      clean: async queueId => this.req("POST", `/api/v1/queues/${queueId}/clean`)
    };
    this.notif = {
      desktop: {
        credentials: async () => this.req("GET", "/api/v1/notifications/desktop/credentials"),
        register: async payload => this.req("POST", `/api/v1/notifications/desktop/device`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* DesktopNotifPartial */ "e"], payload),
        unregister: async deviceId => this.req("DELETE", `/api/v1/notifications/desktop/device/${deviceId}`, undefined)
      }
    };
    this.seeds = {
      delete: async () => this.req("GET", `/api/v1/seeds/delete`),
      create: async () => this.req("GET", `/api/v1/seeds/create`),
      fillQueue: async () => this.req("GET", `/api/v1/seeds/fill_queue`)
    };
    this.semesters = {
      get: async () => this.req("GET", `/api/v1/semesters`)
    };
    this.releaseNotes = {
      get: async () => this.req("GET", `/api/v1/release_notes`)
    };
    this.insights = {
      get: async (courseId, insightName, params) => {
        return this.req("GET", `/api/v1/insights/${courseId}/${insightName}`, undefined, undefined, params);
      },
      list: async () => this.req("GET", `/api/v1/insights/list`),
      toggleOn: async insightName => this.req("PATCH", `/api/v1/insights`, undefined, {
        insightName
      }),
      toggleOff: async insightName => this.req("DELETE", `/api/v1/insights`, undefined, {
        insightName
      })
    };
    this.alerts = {
      get: async courseId => this.req("GET", `/api/v1/alerts/${courseId}`),
      create: async params => this.req("POST", `/api/v1/alerts`, _koh_common__WEBPACK_IMPORTED_MODULE_0__[/* CreateAlertResponse */ "c"], params),
      close: async alertId => {
        this.req("PATCH", `/api/v1/alerts/${alertId}`);
      }
    };
    this.axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
      baseURL: baseURL
    });
  }

}

const API = new APIClient(process.env.NEXT_PUBLIC_API_URL);

/***/ })

/******/ });