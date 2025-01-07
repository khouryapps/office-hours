module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Wbr0");
module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "R9OO":
/***/ (function(module, exports) {

const globalCssRe = [/(?<!\.module)\.css$/, /(?<!\.module)\.(scss|sass)$/]
const globalCssModulesRe = [/\.module\.css$/, /\.module\.(scss|sass)$/]

module.exports = { globalCssRe, globalCssModulesRe }


/***/ }),

/***/ "RDVA":
/***/ (function(module, exports) {



/***/ }),

/***/ "UAhG":
/***/ (function(module, exports) {

module.exports = require("@sentry/node");

/***/ }),

/***/ "Wbr0":
/***/ (function(module, exports, __webpack_require__) {

const Module = __webpack_require__("yLgJ")

const { globalCssRe } = __webpack_require__("R9OO")

Module.prototype.require = new Proxy(Module.prototype.require, {
  apply(target, thisArg, args) {
    if (globalCssRe.some((reg) => reg.test(args[0]))) {
      return ''
    }
    return Reflect.apply(target, thisArg, args)
  },
})


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: /var/www/source/node_modules/antd/dist/antd.css
var antd = __webpack_require__("qnhW");

// EXTERNAL MODULE: /var/www/source/node_modules/react-big-calendar/lib/css/react-big-calendar.css
var react_big_calendar = __webpack_require__("t8oj");

// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__("RDVA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/common/Footer.tsx



const FullWidth = external_styled_components_default.a.footer.withConfig({
  displayName: "Footer__FullWidth",
  componentId: "sc-rge8n6-0"
})(["width:100%;background:#ebebeb;flex-shrink:0;padding:12px 64px;display:flex;justify-content:space-between;"]);
function Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FullWidth, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: ["Made", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: () => {
          window.open("/about");
        },
        children: "by students"
      }), " ", "@", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: () => {
          window.open("https://sandboxnu.com");
        },
        children: "Sandbox"
      }), ". Source on", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: () => {
          window.open("https://github.com/khouryapps/office-hours");
        },
        children: "GitHub."
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: () => {
          window.open("https://github.com/khouryapps/office-hours/issues");
        },
        children: "Report an issue"
      })
    })]
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "@sentry/node"
var node_ = __webpack_require__("UAhG");

// CONCATENATED MODULE: ./components/common/ErrorBoundary.tsx


/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */



// eslint-disable-next-line @typescript-eslint/ban-types
class ErrorBoundary_ErrorBoundary extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    if (window) {
      node_["captureException"](error);
    }
  }

  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Result"], {
        status: "500",
        title: "We hit an unexpected error.",
        subTitle: "Sorry about that! A report has automatically been filed. Try refreshing the page."
      });
    }

    return this.props.children;
  }

}
// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Commenting out Sentry for now
// import * as Sentry from "@sentry/node";
// if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
//   Sentry.init({
//     enabled: process.env.NODE_ENV === "production",
//     dsn: "https://9cfb47804c93495ba3a66a9d79cec084@o440615.ingest.sentry.io/5557379",
//     tracesSampleRate: 0.2,
//   });
// }

const Layout = external_styled_components_default.a.div.withConfig({
  displayName: "_app__Layout",
  componentId: "sc-1cfs7og-0"
})(["min-height:100vh;display:flex;flex-direction:column;"]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "_app__Content",
  componentId: "sc-1cfs7og-1"
})(["flex:1 0 auto;display:flex;flex-direction:column;"]);

function MyApp({
  Component,
  pageProps
}) {
  Object(external_react_["useEffect"])(() => {
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/service-worker.js');
          console.log('Service Worker registered with scope:', registration.scope);
        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      }
    };

    registerServiceWorker();
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Layout, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Content, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorBoundary_ErrorBoundary, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "qnhW":
/***/ (function(module, exports) {



/***/ }),

/***/ "t8oj":
/***/ (function(module, exports) {



/***/ }),

/***/ "yLgJ":
/***/ (function(module, exports) {

module.exports = require("module");

/***/ })

/******/ });