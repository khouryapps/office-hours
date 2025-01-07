module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ "/OEA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useHomePageRedirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UKuP");
/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ogf2");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  const profile = Object(_hooks_useProfile__WEBPACK_IMPORTED_MODULE_3__[/* useProfile */ "a"])();
  const didRedirect = Object(_hooks_useHomePageRedirect__WEBPACK_IMPORTED_MODULE_2__[/* useHomePageRedirect */ "a"])();

  if (profile && !didRedirect) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/nocourses");
  }

  return __jsx("div", null);
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

/***/ "UKuP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useHomePageRedirect; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Xccw");
/* harmony import */ var _useProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ogf2");



/**
 * Redirect user to the course apply page if they are a prof with pending courses,
 * or to the today page for their default course.
 */

function useHomePageRedirect() {
  const profile = Object(_useProfile__WEBPACK_IMPORTED_MODULE_2__[/* useProfile */ "a"])();
  const [defaultCourse] = Object(_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__[/* useLocalStorage */ "a"])("defaultCourse", null);

  if (profile && profile.pendingCourses && profile.pendingCourses.length > 0) {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/apply");
    return true;
  }

  if (profile && profile.courses.length > 0) {
    /// defaultCourse can get out-of-sync with the user's actual registered course (dropped class etc)
    const isUserInDefaultCourse = !!defaultCourse && profile.courses.some(c => c.course.id === (defaultCourse === null || defaultCourse === void 0 ? void 0 : defaultCourse.id));
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/course/[cid]/today", `/course/${isUserInDefaultCourse ? defaultCourse.id : profile.courses[0].course.id}/today`);
    return true;
  }

  return false;
}

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

/***/ "gOUf":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.21.1\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test && bundlesize\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://github.com/axios/axios\",\"devDependencies\":{\"bundlesize\":\"^0.17.0\",\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.0.2\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^20.1.0\",\"grunt-karma\":\"^2.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^1.0.18\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^1.3.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^1.1.1\",\"karma-firefox-launcher\":\"^1.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-opera-launcher\":\"^1.0.0\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^1.2.0\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-webpack\":\"^1.7.0\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^5.2.0\",\"sinon\":\"^4.5.0\",\"typescript\":\"^2.8.1\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^1.13.1\",\"webpack-dev-server\":\"^1.14.1\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.10.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

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