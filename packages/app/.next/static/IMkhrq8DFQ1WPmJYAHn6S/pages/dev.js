(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{10:function(e,t,n){n("w0yH"),e.exports=n("dPAL")},"3kVu":function(e,t,n){e.exports=n("iQU9")},DSo7:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"I/kN":function(e,t,n){var r=n("w7mb");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},J9Yr:function(e,t,n){"use strict";var r=n("zQIG"),a=n("N7I1"),o=n("8mBC"),i=n("I/kN"),u=n("cMav"),l=n("pSQP"),c=n("iN+R");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("ERkP"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(c,u);var l=d(c);function c(e){var o;return r(this,c),o=l.call(this,e),f&&(t.add(a(o)),n(a(o))),o}return o(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(s.Component))}},N7I1:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},TZT2:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},bOkD:function(e,t,n){var r=n("cHE3");e.exports=function(e){if(Array.isArray(e))return r(e)}},cMav:function(e,t,n){var r=n("i2RQ"),a=n("N7I1");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cUST:function(e,t,n){"use strict";var r=n("97Jx"),a=n.n(r),o=n("KEM+"),i=n.n(o),u=n("ERkP"),l=n("O94r"),c=n.n(l),d=n("tb/6"),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){return u.createElement(d.a,null,(function(t){var n,r=t.getPrefixCls,o=t.direction,l=e.prefixCls,d=e.type,f=void 0===d?"horizontal":d,p=e.orientation,h=void 0===p?"center":p,v=e.className,m=e.children,y=e.dashed,g=e.plain,x=s(e,["prefixCls","type","orientation","className","children","dashed","plain"]),b=r("divider",l),w=h.length>0?"-".concat(h):h,S=!!m,C=c()(v,b,"".concat(b,"-").concat(f),(n={},i()(n,"".concat(b,"-with-text"),S),i()(n,"".concat(b,"-with-text").concat(w),S),i()(n,"".concat(b,"-dashed"),!!y),i()(n,"".concat(b,"-plain"),!!g),i()(n,"".concat(b,"-rtl"),"rtl"===o),n));return u.createElement("div",a()({className:C},x,{role:"separator"}),m&&u.createElement("span",{className:"".concat(b,"-inner-text")},m))}))}},dPAL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dev",function(){return n("hJvu")}])},dq4L:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("ERkP"))&&r.__esModule?r:{default:r},o=n("TZT2");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},hJvu:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n("zTld"),a=n("wPNs"),o=n("SCaQ"),i=n("cUST"),u=n("3kVu"),l=n.n(u),c=n("ERkP"),d=n.n(c),s=n("j/s1"),f=d.a.createElement,p=s.a.div.withConfig({displayName:"dev__Container",componentId:"sc-170skb4-0"})(["width:auto;height:auto;@media (max-width:768px){margin:32px 24px;}"]),h=s.a.div.withConfig({displayName:"dev__LoginContainer",componentId:"sc-170skb4-1"})(["margin-left:auto;margin-right:auto;text-align:center;padding-top:100px;"]),v=s.a.div.withConfig({displayName:"dev__SeedingContainer",componentId:"sc-170skb4-2"})(["margin-left:auto;margin-right:auto;text-align:center;padding-top:20px;"]),m=s.a.div.withConfig({displayName:"dev__PageHeader",componentId:"sc-170skb4-3"})(["display:flex;justify-content:center;margin-top:40px;"]),y=Object(s.a)(o.a).withConfig({displayName:"dev__DevPageButton",componentId:"sc-170skb4-4"})(["margin-right:15px;"]);function g(){return Object(a.v)()?f(l.a,{statusCode:404}):f(p,null,f("h1",null,f(m,null,"[ For Development Use Only ]")),f(h,null,f(i.a,{plain:!0},f("h3",null,"Login")),f("a",{href:"/api/v1/login/dev?userId=1"},f(y,{type:"default",htmlType:"submit"},"Login as ",f("b",null," Student 1"))),f("a",{href:"/api/v1/login/dev?userId=2"},f(y,{type:"default",htmlType:"submit"},"Login as ",f("b",null," Student 2"))),f("a",{href:"/api/v1/login/dev?userId=3"},f(y,{type:"default",htmlType:"submit"},"Login as ",f("b",null," TA"))),f("a",{href:"/api/v1/login/dev?userId=4"},f(y,{type:"default",htmlType:"submit"},"Login as ",f("b",null," TA 2"))),f("a",{href:"/api/v1/login/dev?userId=5"},f(o.a,{type:"default",htmlType:"submit"},"Login as ",f("b",null," Professor ")))),f(v,null,f(i.a,{plain:!0},f("h3",null,"Seed")),f(o.a,{style:{marginRight:"15px"},type:"default",onClick:function(){return r.a.seeds.delete()}},"Delete Data"),f(o.a,{style:{marginRight:"15px"},type:"default",onClick:function(){return r.a.seeds.create()}},"Seed Data"),f(o.a,{style:{marginRight:"15px"},type:"default",onClick:function(){return r.a.seeds.fillQueue()}},"Add Questions to Queue")))}},"iN+R":function(e,t,n){var r=n("bOkD"),a=n("DSo7"),o=n("D7XE"),i=n("uYlf");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},iQU9:function(e,t,n){"use strict";var r=n("zQIG"),a=n("8mBC"),o=n("I/kN"),i=n("cMav"),u=n("pSQP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var c=n("Y3ZS");t.__esModule=!0,t.default=void 0;var d=c(n("ERkP")),s=c(n("ysqo")),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){o(n,e);var t=l(n);function n(){return r(this,n),t.apply(this,arguments)}return a(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:v.error},d.default.createElement(s.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:v.h1},e):null,d.default.createElement("div",{style:v.desc},d.default.createElement("h2",{style:v.h2},t,"."))))}}]),n}(d.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var v={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"op+c":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},pSQP:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ysqo:function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var r=l(n("ERkP")),a=l(n("J9Yr")),o=n("TZT2"),i=n("op+c"),u=n("dq4L");function l(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,l=s.length;u<l;u++){var c=s[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var d=a.props[c],f=r[c]||new Set;f.has(d)?o=!1:(f.add(d),r[c]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,a.default)();function h(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}h.rewind=p.rewind;var v=h;t.default=v}},[[10,1,2,0,5,4,7,6]]]);
//# sourceMappingURL=dev.js.map