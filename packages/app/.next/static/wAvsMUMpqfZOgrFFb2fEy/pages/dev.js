(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"3kVu":function(e,t,n){e.exports=n("iQU9")},DSo7:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"I/kN":function(e,t,n){var r=n("w7mb");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},J9Yr:function(e,t,n){"use strict";var r=n("zQIG"),o=n("N7I1"),a=n("8mBC"),i=n("I/kN"),u=n("cMav"),l=n("pSQP"),c=n("iN+R");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("ERkP"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(c,u);var l=d(c);function c(e){var a;return r(this,c),a=l.call(this,e),f&&(t.add(o(a)),n(o(a))),a}return a(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(s.Component))}},N7I1:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},TZT2:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},bOkD:function(e,t,n){var r=n("cHE3");e.exports=function(e){if(Array.isArray(e))return r(e)}},cMav:function(e,t,n){var r=n("i2RQ"),o=n("N7I1");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},dPAL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dev",function(){return n("hJvu")}])},dq4L:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("ERkP"))&&r.__esModule?r:{default:r},a=n("TZT2");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},hJvu:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n("zTld"),o=n("wPNs"),a=n("SCaQ"),i=n("97Jx"),u=n.n(i),l=n("KEM+"),c=n.n(l),d=n("ERkP"),s=n.n(d),f=n("O94r"),p=n.n(f),h=n("tb/6"),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=function(e){return d.createElement(h.a,null,(function(t){var n,r=t.getPrefixCls,o=t.direction,a=e.prefixCls,i=e.type,l=void 0===i?"horizontal":i,s=e.orientation,f=void 0===s?"center":s,h=e.className,v=e.children,y=e.dashed,g=e.plain,b=m(e,["prefixCls","type","orientation","className","children","dashed","plain"]),x=r("divider",a),w=f.length>0?"-".concat(f):f,C=!!v,S=p()(h,x,"".concat(x,"-").concat(l),(n={},c()(n,"".concat(x,"-with-text"),C),c()(n,"".concat(x,"-with-text").concat(w),C),c()(n,"".concat(x,"-dashed"),!!y),c()(n,"".concat(x,"-plain"),!!g),c()(n,"".concat(x,"-rtl"),"rtl"===o),n));return d.createElement("div",u()({className:S},b,{role:"separator"}),v&&d.createElement("span",{className:"".concat(x,"-inner-text")},v))}))},y=n("3kVu"),g=n.n(y),b=n("j/s1"),x=s.a.createElement,w=b.a.div.withConfig({displayName:"dev__Container",componentId:"sc-170skb4-0"})(["width:auto;height:auto;@media (max-width:768px){margin:32px 24px;}"]),C=b.a.div.withConfig({displayName:"dev__LoginContainer",componentId:"sc-170skb4-1"})(["margin-left:auto;margin-right:auto;text-align:center;padding-top:100px;"]),S=b.a.div.withConfig({displayName:"dev__SeedingContainer",componentId:"sc-170skb4-2"})(["margin-left:auto;margin-right:auto;text-align:center;padding-top:20px;"]),k=b.a.div.withConfig({displayName:"dev__PageHeader",componentId:"sc-170skb4-3"})(["display:flex;justify-content:center;margin-top:40px;"]),_=Object(b.a)(a.a).withConfig({displayName:"dev__DevPageButton",componentId:"sc-170skb4-4"})(["margin-right:15px;"]);function E(){return Object(o.p)()?x(g.a,{statusCode:404}):x(w,null,x("h1",null,x(k,null,"[ For Development Use Only ]")),x(C,null,x(v,{plain:!0},x("h3",null,"Login")),x("a",{href:"/api/v1/login/dev?userId=1"},x(_,{type:"default",htmlType:"submit"},"Login as ",x("b",null," Student 1"))),x("a",{href:"/api/v1/login/dev?userId=2"},x(_,{type:"default",htmlType:"submit"},"Login as ",x("b",null," Student 2"))),x("a",{href:"/api/v1/login/dev?userId=3"},x(_,{type:"default",htmlType:"submit"},"Login as ",x("b",null," TA"))),x("a",{href:"/api/v1/login/dev?userId=4"},x(_,{type:"default",htmlType:"submit"},"Login as ",x("b",null," TA 2"))),x("a",{href:"/api/v1/login/dev?userId=5"},x(a.a,{type:"default",htmlType:"submit"},"Login as ",x("b",null," Professor ")))),x(S,null,x(v,{plain:!0},x("h3",null,"Seed")),x(a.a,{style:{marginRight:"15px"},type:"default",onClick:function(){return r.a.seeds.delete()}},"Delete Data"),x(a.a,{style:{marginRight:"15px"},type:"default",onClick:function(){return r.a.seeds.create()}},"Seed Data"),x(a.a,{style:{marginRight:"15px"},type:"default",onClick:function(){return r.a.seeds.fillQueue()}},"Add Questions to Queue")))}},"iN+R":function(e,t,n){var r=n("bOkD"),o=n("DSo7"),a=n("D7XE"),i=n("uYlf");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},iQU9:function(e,t,n){"use strict";var r=n("zQIG"),o=n("8mBC"),a=n("I/kN"),i=n("cMav"),u=n("pSQP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var c=n("Y3ZS");t.__esModule=!0,t.default=void 0;var d=c(n("ERkP")),s=c(n("ysqo")),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){a(n,e);var t=l(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:m.error},d.default.createElement(s.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:m.h1},e):null,d.default.createElement("div",{style:m.desc},d.default.createElement("h2",{style:m.h2},t,"."))))}}]),n}(d.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"op+c":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},pSQP:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ysqo:function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var r=l(n("ERkP")),o=l(n("J9Yr")),a=n("TZT2"),i=n("op+c"),u=n("dq4L");function l(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,l=s.length;u<l;u++){var c=s[u];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var d=o.props[c],f=r[c]||new Set;f.has(d)?a=!1:(f.add(d),r[c]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function h(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}h.rewind=p.rewind;var m=h;t.default=m}},[["dPAL",0,2,1,5,4,7,8]]]);
//# sourceMappingURL=dev.js.map