(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/Ytj":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ERkP"),o=n("w5NM"),a=n.n(o),i={},s=function(e,t,n){var o=Object(r.useState)(!1),s=o[0],u=o[1];return Object(r.useEffect)((function(){if(e){var r;e in i?r=i[e]:(r={eventSource:new a.a(e),listeners:{},isLiveSetters:new Set},i[e]=r,r.eventSource.onmessage=function(e){var t=Object.values(r.listeners),n=JSON.parse(e.data);t.forEach((function(e){return e.listener(n)}))},r.eventSource.onopen=function(){return r.isLiveSetters.forEach((function(e){return e(!0)}))},r.eventSource.onerror=function(){return r.isLiveSetters.forEach((function(e){return e(!1)}))}),u(r.eventSource.readyState===EventSource.OPEN),r.isLiveSetters.add(u);var o=r.listeners[t];return r.listeners[t]?o.count++:(o={listener:n,count:1},r.listeners[t]=o),function(){o.count--,r.isLiveSetters.delete(u),0===o.count&&(delete r.listeners[t],0===Object.values(r.listeners).length&&(r.eventSource.close(),delete i[e]))}}}),[e,n,t]),s}},"1MY3":function(e,t,n){"use strict";n.d(t,"a",(function(){return J})),n.d(t,"c",(function(){return Z})),n.d(t,"b",(function(){return te}));var r=n("cxan"),o=n("PJfV"),a=n("QsUr"),i=n("ERkP"),s=n.n(i),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"}}]},name:"notification",theme:"outlined"},c=n("vspj"),l=function(e,t){return i.createElement(c.a,Object.assign({},e,{ref:t,icon:u}))};l.displayName="NotificationOutlined";var f=i.forwardRef(l),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2.6-93.4-62.7-172.1-148.6-194.9z"}},{tag:"path",attrs:{d:"M376.9 656.4c1.8-33.5 15.7-64.7 39.5-88.6 25.4-25.5 60-39.8 96-39.8 36.2 0 70.3 14.1 96 39.8 1.4 1.4 2.7 2.8 4.1 4.3l-25 19.6a8 8 0 003 14.1l98.2 24c5 1.2 9.9-2.6 9.9-7.7l.5-101.3c0-6.7-7.6-10.5-12.9-6.3L663 532.7c-36.6-42-90.4-68.6-150.5-68.6-107.4 0-195 85.1-199.4 191.7-.2 4.5 3.4 8.3 8 8.3H369c4.2-.1 7.7-3.4 7.9-7.7zM703 664h-47.9c-4.2 0-7.7 3.3-8 7.6-1.8 33.5-15.7 64.7-39.5 88.6-25.4 25.5-60 39.8-96 39.8-36.2 0-70.3-14.1-96-39.8-1.4-1.4-2.7-2.8-4.1-4.3l25-19.6a8 8 0 00-3-14.1l-98.2-24c-5-1.2-9.9 2.6-9.9 7.7l-.4 101.4c0 6.7 7.6 10.5 12.9 6.3l23.2-18.2c36.6 42 90.4 68.6 150.5 68.6 107.4 0 195-85.1 199.4-191.7.2-4.5-3.4-8.3-8-8.3z"}}]},name:"cloud-sync",theme:"outlined"},p=function(e,t){return i.createElement(c.a,Object.assign({},e,{ref:t,icon:d}))};p.displayName="CloudSyncOutlined";var v=i.forwardRef(p),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM512 533c-85.5 0-155.6 67.3-160 151.6a8 8 0 008 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4C420 636.1 461.5 597 512 597s92.1 39.1 95.8 88.6c.3 4.2 3.9 7.4 8.1 7.4H664a8 8 0 008-8.4C667.6 600.3 597.5 533 512 533z"}}]},name:"frown",theme:"outlined"},h=function(e,t){return i.createElement(c.a,Object.assign({},e,{ref:t,icon:m}))};h.displayName="FrownOutlined";var y=i.forwardRef(h),b=n("SCaQ"),g=n("9xBf"),_=n("uZk3"),S=n.n(_),w=n("wgY5"),x=n.n(w),O=n("j/s1"),C=n("KyK6"),j=n("jPdq"),N=s.a.createElement;function E(e){var t=e.render,n=e.interval,r=Object(i.useState)({})[1],o=Object(i.useCallback)((function(){return r({})}),[]);return Object(i.useEffect)((function(){var e=setInterval((function(){o()}),n);return function(){clearInterval(e)}}),[o,n]),N(s.a.Fragment,null,t())}var I=n("VKn7"),k=n("S7b9"),q=n("C77r"),P=n("c7GO"),L=n("FRUG"),T=s.a.createElement;function A(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e){var t=e.queueId,n=Object(P.a)(t).questions,r=Object(C.a)(t).queue.staffList;if(!n)return null;var o,a={},i=r.map((function(e){return e.id})),s=A(n.questionsGettingHelp);try{for(s.s();!(o=s.n()).done;){var u,c=o.value;i.includes(null===(u=c.taHelped)||void 0===u?void 0:u.id)&&(a[c.taHelped.id]=c)}}catch(l){s.e(l)}finally{s.f()}return T(I.a,null,r.map((function(e){var t,n,r;return T(I.a,{key:e.id},T(V,{taName:e.name,taPhotoURL:e.photoURL,studentName:null===(t=a[e.id])||void 0===t?void 0:null===(n=t.creator)||void 0===n?void 0:n.name,helpedAt:null===(r=a[e.id])||void 0===r?void 0:r.helpedAt}))})))}var z=O.a.div.withConfig({displayName:"TAStatuses__StyledCard",componentId:"sc-1buidjq-0"})(["background:#ffffff;box-shadow:0px 2px 8px rgba(0,0,0,0.15);border-radius:6px;padding:16px;display:flex;margin-bottom:16px;"]),U=O.a.div.withConfig({displayName:"TAStatuses__CardContent",componentId:"sc-1buidjq-1"})(["margin-left:16px;"]),R=O.a.div.withConfig({displayName:"TAStatuses__TAName",componentId:"sc-1buidjq-2"})(["font-weight:bold;color:#212934;"]),H=O.a.div.withConfig({displayName:"TAStatuses__HelpingInfo",componentId:"sc-1buidjq-3"})(["margin-top:5px;font-style:italic;"]);function V(e){var t=e.taName,n=e.taPhotoURL,r=e.studentName,o=e.helpedAt,a=!!o;return T(z,{"data-cy":"ta-status-card"},T(L.a,{size:48,name:t,photoURL:n,style:{flexShrink:0}}),T(U,null,T(k.a,{justify:"space-between"},T(R,null,t),T("span",null,T(q.a,{status:a?"processing":"success"}),a?"Busy":"Available")),T(H,null,a?T(B,{studentName:r,helpedAt:o}):"Looking for my next student...")))}var Y=O.a.span.withConfig({displayName:"TAStatuses__BlueSpan",componentId:"sc-1buidjq-4"})(["color:#66a3d6;"]);function B(e){var t=e.studentName,n=e.helpedAt;return T(E,{render:function(){return T("span",null,"Helping ",T(Y,null,null!==t&&void 0!==t?t:"a student")," for"," ",T(Y,null,Object(j.b)((Date.now()-n.getTime())/6e4)))},interval:6e4})}var G=s.a.createElement,J=O.a.div.withConfig({displayName:"QueueListSharedComponents__Container",componentId:"sc-1abq9vy-0"})(["display:flex;flex-direction:row;align-items:center;"]),K=O.a.div.withConfig({displayName:"QueueListSharedComponents__QueueTitle",componentId:"sc-1abq9vy-1"})(["font-weight:500;font-size:24px;color:#212934;"]),D=(O.a.div.withConfig({displayName:"QueueListSharedComponents__NotesText",componentId:"sc-1abq9vy-2"})(["font-size:16px;color:#5f6b79;"]),O.a.div.withConfig({displayName:"QueueListSharedComponents__InfoColumnContainer",componentId:"sc-1abq9vy-3"})(["flex-shrink:0;padding-bottom:30px;@media (min-width:650px){margin-top:32px;width:290px;}"])),F=Object(O.a)(b.a).withConfig({displayName:"QueueListSharedComponents__QueueInfoColumnButtonStyle",componentId:"sc-1abq9vy-4"})(["font-weight:500;font-size:14px;border:1px solid #cfd6de;border-radius:6px;margin-bottom:12px;"]),Z=function(e){return G(F,Object(r.a)({size:"large",block:!0},e))},W=O.a.div.withConfig({displayName:"QueueListSharedComponents__QueuePropertyRow",componentId:"sc-1abq9vy-5"})(["display:flex;flex-direction:row;align-items:center;margin-bottom:20px;color:#5f6b79;font-size:20px;"]),$=O.a.div.withConfig({displayName:"QueueListSharedComponents__QueuePropertyText",componentId:"sc-1abq9vy-6"})(["margin-left:12px;font-size:16px;min-width:0;overflow-wrap:break-word;white-space:pre-wrap;"]),X=O.a.h2.withConfig({displayName:"QueueListSharedComponents__StaffH2",componentId:"sc-1abq9vy-7"})(["margin-top:32px;"]),ee=O.a.div.withConfig({displayName:"QueueListSharedComponents__QueueRoomGroup",componentId:"sc-1abq9vy-8"})(["display:flex;flex-direction:row;align-items:center;margin-bottom:24px;"]);function te(e){var t=e.queueId,n=e.buttons,r=Object(C.a)(t).queue;return G(D,null,G(ee,null,G(K,null,null===r||void 0===r?void 0:r.room),!r.allowQuestions&&G(g.a,{title:"This queue is no longer accepting questions"},G(o.a,{"data-cy":"stopQuestions",style:{color:"red",fontSize:"24px",marginLeft:"8px"}}))),r.startTime&&r.endTime&&G(W,null,G(a.a,null),G($,{className:"hide-in-percy"},Object(j.a)(r))),(null===r||void 0===r?void 0:r.notes)&&G(W,null,G(f,null),G(S.a,{componentDecorator:function(e,t,n){return G("a",{target:"_blank",rel:"noopener noreferrer",href:e,key:n},t)}},G($,null,r.notes))),G(ne,{queueId:t}),n,G(X,null,"Staff"),G(Q,{queueId:t}))}function ne(e){var t=e.queueId,n=Object(i.useState)(null),r=n[0],o=n[1],a=Object(C.a)(t,o).isLive;return G(W,null,G(a||r?v:y,null),G($,null,a?"Queue up to date":r?G(E,{render:function(){var e=(Date.now()-r.getTime())/1e3;return"Queue updated ".concat(e<60?Math.ceil(e)+"s":x()(r).fromNow(!0)," ago")},interval:1e3}):"Queue may be out of date"))}},C77r:function(e,t,n){"use strict";var r=n("KEM+"),o=n.n(r),a=n("T0aG"),i=n.n(a),s=n("97Jx"),u=n.n(s),c=n("ERkP"),l=n("rypG"),f=n("O94r"),d=n.n(f),p=n("ddV6"),v=n.n(p),m=n("tb/6"),h=n("oFrK"),y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function b(e){return e?e.toString().split("").reverse().map((function(e){var t=Number(e);return isNaN(t)?e:t})):[]}var g=function(e){var t=e.prefixCls,n=e.count,r=e.className,o=e.style,a=e.title,i=e.component,s=void 0===i?"sup":i,l=e.displayComponent,f=e.onAnimated,p=void 0===f?function(){}:f,g=y(e,["prefixCls","count","className","style","title","component","displayComponent","onAnimated"]),_=c.useState(!0),S=v()(_,2),w=S[0],x=S[1],O=c.useState(n),C=v()(O,2),j=C[0],N=C[1],E=c.useState(n),I=v()(E,2),k=I[0],q=I[1],P=c.useState(n),L=v()(P,2),T=L[0],A=L[1],M=(0,c.useContext(m.b).getPrefixCls)("scroll-number",t);k!==n&&(x(!0),q(n)),c.useEffect((function(){var e;return A(j),w&&(e=setTimeout((function(){x(!1),N(n),p()}))),function(){e&&clearTimeout(e)}}),[w,n,p]);var Q=function(e,t){if("number"===typeof e){var n=function(e,t){var n=Math.abs(Number(j)),r=Math.abs(Number(T)),o=Math.abs(b(j)[t]),a=Math.abs(b(r)[t]);return w?10+e:n>r?o>=a?10+e:20+e:o<=a?10+e:e}(e,t),r=w||void 0===b(T)[t];return c.createElement("span",{className:"".concat(M,"-only"),style:{transition:r?"none":void 0,msTransform:"translateY(".concat(100*-n,"%)"),WebkitTransform:"translateY(".concat(100*-n,"%)"),transform:"translateY(".concat(100*-n,"%)")},key:t},function(e,t){for(var n=[],r=0;r<30;r++)n.push(c.createElement("p",{key:r.toString(),className:d()(t,{current:e===r})},r%10));return n}(n,"".concat(M,"-only-unit")))}return(c.createElement("span",{key:"symbol",className:"".concat(M,"-symbol")},e))},z=u()(u()({},g),{style:o,className:d()(M,r),title:a});return o&&o.borderColor&&(z.style=u()(u()({},o),{boxShadow:"0 0 0 1px ".concat(o.borderColor," inset")})),l?Object(h.a)(l,{className:d()("".concat(M,"-custom-component"),l.props&&l.props.className)}):c.createElement(s,z,j&&Number(j)%1===0?b(j).map((function(e,t){return Q(e,t)})).reverse():j)},_=n("VhZz"),S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function w(e){return-1!==_.a.indexOf(e)}t.a=function(e){var t,n,r=e.prefixCls,a=e.scrollNumberPrefixCls,s=e.children,f=e.status,p=e.text,v=e.color,y=e.count,b=void 0===y?null:y,_=e.overflowCount,x=void 0===_?99:_,O=e.dot,C=void 0!==O&&O,j=e.title,N=e.offset,E=e.style,I=e.className,k=e.showZero,q=void 0!==k&&k,P=S(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","title","offset","style","className","showZero"]),L=c.useContext(m.b),T=L.getPrefixCls,A=L.direction,M=T("badge",r),Q=function(){return b>x?"".concat(x,"+"):b},z=function(){return!!f||!!v},U=function(){var e=Q();return"0"===e||0===e},R=function(){return C&&!U()||z()},H=function(){return R()?"":Q()},V=function(){return"rtl"===A?N?u()({left:parseInt(N[0],10),marginTop:N[1]},E):E:N?u()({right:-parseInt(N[0],10),marginTop:N[1]},E):E},Y=function(){var e=H();return(null===e||void 0===e||""===e||U()&&!q)&&!R()},B=function(){var e=b;if(e&&"object"===i()(e))return Object(h.a)(e,{style:u()(u()({},V()),e.props&&e.props.style)})},G=d()((t={},o()(t,"".concat(M,"-status-dot"),z()),o()(t,"".concat(M,"-status-").concat(f),!!f),o()(t,"".concat(M,"-status-").concat(v),w(v)),t)),J={};v&&!w(v)&&(J.background=v);var K=d()(I,M,(n={},o()(n,"".concat(M,"-status"),z()),o()(n,"".concat(M,"-not-a-wrapper"),!s),o()(n,"".concat(M,"-rtl"),"rtl"===A),n));if(!s&&z()){var D=V(),F=D&&D.color;return c.createElement("span",u()({},P,{className:K,style:D}),c.createElement("span",{className:G,style:J}),c.createElement("span",{style:{color:F},className:"".concat(M,"-status-text")},p))}return(c.createElement("span",u()({},P,{className:K}),s,c.createElement(l.a,{component:"",showProp:"data-show",transitionName:s?"".concat(M,"-zoom"):"",transitionAppear:!0},function(){var e,t=T("scroll-number",a),n=H(),r=R(),i=Y(),s=d()((e={},o()(e,"".concat(M,"-dot"),r),o()(e,"".concat(M,"-count"),!r),o()(e,"".concat(M,"-multiple-words"),!r&&b&&b.toString&&b.toString().length>1),o()(e,"".concat(M,"-status-").concat(f),!!f),o()(e,"".concat(M,"-status-").concat(v),w(v)),e)),u=V();return v&&!w(v)&&((u=u||{}).background=v),i?null:c.createElement(g,{prefixCls:t,"data-show":!i,className:s,count:n,displayComponent:B(),title:j||("string"===typeof b||"number"===typeof b?b:void 0),style:u,key:"scrollNumber"})}()),Y()||!p?null:c.createElement("span",{className:"".concat(M,"-status-text")},p)))}},KyK6:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("VtSi"),o=n.n(r),a=n("QsI/"),i=n("zTld"),s=n("wPNs"),u=n("JbCn"),c=n("ERkP"),l=n("/Ytj"),f=n("lPv2"),d={};function p(e){var t=d[e];t.onUpdates.forEach((function(e){return e(t.lastUpdated)}))}function v(e,t){var n=e&&"/api/v1/queues/".concat(e);n in d||(d[n]={lastUpdated:null,onUpdates:new Set}),Object(c.useEffect)((function(){if(t){var e=d[n];return e.onUpdates.add(t),t(e.lastUpdated),function(){return e.onUpdates.delete(t)}}}),[t,n]);var r=Object(l.a)(e&&"/api/v1/queues/".concat(e,"/sse"),"queue",Object(c.useCallback)((function(e){e.queue&&(Object(u.b)(n,Object(f.plainToClass)(s.i,e.queue),!1),d[n].lastUpdated=new Date,p(n))}),[n])),v=Object(u.a)(n,Object(c.useCallback)(Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.a.queues.get(Number(e)));case 1:case"end":return t.stop()}}),t)}))),[e]),{refreshInterval:r?0:1e4,onSuccess:function(e,t){d[t].lastUpdated=new Date,p(t)}});return{queue:v.data,queueError:v.error,mutateQueue:v.mutate,isLive:r}}},c7GO:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("VtSi"),o=n.n(r),a=n("QsI/"),i=n("zTld"),s=n("wPNs"),u=n("lPv2"),c=n("ERkP"),l=n("JbCn"),f=n("/Ytj");function d(e){var t=e&&"/api/v1/queues/".concat(e,"/questions"),n=Object(f.a)(e&&"/api/v1/queues/".concat(e,"/sse"),"question",Object(c.useCallback)((function(e){e.questions&&Object(l.b)(t,Object(u.plainToClass)(s.k,e.questions),!1)}),[t])),r=Object(l.a)(t,Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.a.questions.index(Number(e)));case 1:case"end":return t.stop()}}),t)}))),{refreshInterval:n?0:1e4});return{questions:r.data,questionsError:r.error,mutateQuestions:r.mutate}}},w5NM:function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default=a.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._configuration=null!=n?Object.assign({},n):null,this._eventSource=null,this._lastEventId=null,this._timer=null,this._listeners={},this.url=t,this.readyState=0,this.max_retry_time=3e3,null!=this._configuration&&(this._configuration.lastEventId&&(this._lastEventId=this._configuration.lastEventId,delete this._configuration.lastEventId),this._configuration.max_retry_time&&(this.max_retry_time=this._configuration.max_retry_time,delete this._configuration.max_retry_time)),this._onevent_wrapped=function(e){r._onevent(e)},this._start()}return r(e,[{key:"_start",value:function(){var e=this,t=this.url;this._lastEventId&&(-1===t.indexOf("?")?t+="?":t+="&",t+="lastEventId="+encodeURIComponent(this._lastEventId)),this._eventSource=new EventSource(t,this._configuration),this._eventSource.onopen=function(t){e._onopen(t)},this._eventSource.onerror=function(t){e._onerror(t)},this._eventSource.onmessage=function(t){e.onmessage(t)};var n=!0,r=!1,o=void 0;try{for(var a,i=Object.keys(this._listeners)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var s=a.value;this._eventSource.addEventListener(s,this._onevent_wrapped)}}catch(u){r=!0,o=u}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}}},{key:"_onopen",value:function(e){0===this.readyState&&(this.readyState=1,this.onopen(e))}},{key:"_onerror",value:function(e){var t=this;if(1===this.readyState&&(this.readyState=0,this.onerror(e)),this._eventSource&&2===this._eventSource.readyState){this._eventSource.close(),this._eventSource=null;var n=Math.round(this.max_retry_time*Math.random());this._timer=setTimeout((function(){return t._start()}),n)}}},{key:"_onevent",value:function(e){e.lastEventId&&(this._lastEventId=e.lastEventId);var t=this._listeners[e.type];if(null!=t)for(var n=[].concat(o(t)),r=0;r<n.length;r++){(0,n[r])(e)}"message"===e.type&&this.onmessage(e)}},{key:"onopen",value:function(e){}},{key:"onerror",value:function(e){}},{key:"onmessage",value:function(e){}},{key:"close",value:function(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._eventSource&&(this._eventSource.close(),this._eventSource=null),this.readyState=2}},{key:"addEventListener",value:function(e,t){var n=e.toString();n in this._listeners||(this._listeners[n]=[],this._eventSource&&this._eventSource.addEventListener(n,this._onevent_wrapped));var r=this._listeners[n];r.includes(t)||(this._listeners[n]=[].concat(o(r),[t]))}},{key:"removeEventListener",value:function(e,t){var n=e.toString();if(n in this._listeners){var r=this._listeners[n].filter((function(e){return e!==t}));r.length>0?this._listeners[n]=r:(delete this._listeners[n],this._eventSource&&this._eventSource.removeEventListener(n,this._onevent_wrapped))}}}]),e}();t.default=a}])}}]);
//# sourceMappingURL=9f6f76be6f1d03a67231816398c8498307428bba.bdd99bf967bfdd05a18a.js.map