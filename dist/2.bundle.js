(self.webpackChunkrestaurant_app=self.webpackChunkrestaurant_app||[]).push([[2],{666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:P(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function g(){}function m(){}function w(){}var b={};u(b,a,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(I([])));L&&L!==r&&n.call(L,a)&&(b=L);var x=w.prototype=g.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function P(t,r,n){var o=h;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=k(c,n);if(s){if(s===y)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=l(t,r,n);if("normal"===u.type){if(o=n.done?d:p,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=l(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return m.prototype=w,o(x,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=u(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},S(j.prototype),u(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=I,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=n.base?s[0]+n.base:s[0],f=i[u]||0,l="".concat(u," ").concat(f);i[u]=f+1;var h=r(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var v=o(p,n);n.byIndex=c,e.splice(c,0,{identifier:l,updater:v,references:1})}a.push(l)}return a}function o(t,e){var r=e.domAPI(e);r.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=n(t,o),u=0;u<i.length;u++){var f=r(i[u]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=s}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},131:(t,e,r)=>{"use strict";r.d(e,{ZW:()=>v});try{self["workbox:window:7.0.0"]&&_()}catch(n){}function n(t,e){return new Promise((function(r){var n=new MessageChannel;n.port1.onmessage=function(t){r(t.data)},t.postMessage(e,[n.port2])}))}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:7.0.0"]&&_()}catch(n){}var c=function(){var t=this;this.promise=new Promise((function(e,r){t.resolve=e,t.reject=r}))};function s(t,e){var r=location.href;return new URL(t,r).href===new URL(e,r).href}var u=function(t,e){this.type=t,Object.assign(this,e)};function f(t,e,r){return r?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function l(){}var h={type:"SKIP_WAITING"};function p(t,e){if(!e)return t&&t.then?t.then(l):Promise.resolve()}var v=function(t){var e,r;function i(e,r){var n,o;return void 0===r&&(r={}),(n=t.call(this)||this).nn={},n.tn=0,n.rn=new c,n.en=new c,n.on=new c,n.un=0,n.an=new Set,n.cn=function(){var t=n.fn,e=t.installing;n.tn>0||!s(e.scriptURL,n.sn.toString())||performance.now()>n.un+6e4?(n.vn=e,t.removeEventListener("updatefound",n.cn)):(n.hn=e,n.an.add(e),n.rn.resolve(e)),++n.tn,e.addEventListener("statechange",n.ln)},n.ln=function(t){var e=n.fn,r=t.target,o=r.state,i=r===n.vn,a={sw:r,isExternal:i,originalEvent:t};!i&&n.mn&&(a.isUpdate=!0),n.dispatchEvent(new u(o,a)),"installed"===o?n.wn=self.setTimeout((function(){"installed"===o&&e.waiting===r&&n.dispatchEvent(new u("waiting",a))}),200):"activating"===o&&(clearTimeout(n.wn),i||n.en.resolve(r))},n.dn=function(t){var e=n.hn,r=e!==navigator.serviceWorker.controller;n.dispatchEvent(new u("controlling",{isExternal:r,originalEvent:t,sw:e,isUpdate:n.mn})),r||n.on.resolve(e)},n.gn=(o=function(t){var e=t.data,r=t.ports,o=t.source;return f(n.getSW(),(function(){n.an.has(o)&&n.dispatchEvent(new u("message",{data:e,originalEvent:t,ports:r,sw:o}))}))},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(o.apply(this,t))}catch(t){return Promise.reject(t)}}),n.sn=e,n.nn=r,navigator.serviceWorker.addEventListener("message",n.gn),n}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a,l,v=i.prototype;return v.register=function(t){var e=(void 0===t?{}:t).immediate,r=void 0!==e&&e;try{var n=this;return function(t,e){var r=t();return r&&r.then?r.then(e):e()}((function(){if(!r&&"complete"!==document.readyState)return p(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return n.mn=Boolean(navigator.serviceWorker.controller),n.yn=n.pn(),f(n.bn(),(function(t){n.fn=t,n.yn&&(n.hn=n.yn,n.en.resolve(n.yn),n.on.resolve(n.yn),n.yn.addEventListener("statechange",n.ln,{once:!0}));var e=n.fn.waiting;return e&&s(e.scriptURL,n.sn.toString())&&(n.hn=e,Promise.resolve().then((function(){n.dispatchEvent(new u("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),n.hn&&(n.rn.resolve(n.hn),n.an.add(n.hn)),n.fn.addEventListener("updatefound",n.cn),navigator.serviceWorker.addEventListener("controllerchange",n.dn),n.fn}))}))}catch(t){return Promise.reject(t)}},v.update=function(){try{return this.fn?p(this.fn.update()):void 0}catch(t){return Promise.reject(t)}},v.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},v.messageSW=function(t){try{return f(this.getSW(),(function(e){return n(e,t)}))}catch(t){return Promise.reject(t)}},v.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,h)},v.pn=function(){var t=navigator.serviceWorker.controller;return t&&s(t.scriptURL,this.sn.toString())?t:void 0},v.bn=function(){try{var t=this;return function(t,e){try{var r=t()}catch(t){return e(t)}return r&&r.then?r.then(void 0,e):r}((function(){return f(navigator.serviceWorker.register(t.sn,t.nn),(function(e){return t.un=performance.now(),e}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},a=i,(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&o(a.prototype,l),i}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(t,e){this.Sn(t).add(e)},e.removeEventListener=function(t,e){this.Sn(t).delete(e)},e.dispatchEvent=function(t){t.target=this;for(var e,r=a(this.Sn(t.type));!(e=r()).done;)(0,e.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}())}}]);
//# sourceMappingURL=2.bundle.js.map