module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=88)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,c){var a,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=a):o&&(a=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(u.functional){u._injectStyles=a;var l=u.render;u.render=function(e,t){return a.call(t),l(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,a):[a]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},1:function(e,t){e.exports=require("../lib/icon-register.js")},88:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("icon-register",this._g({attrs:{id:"feather-icons-crosshair",el:this.$options.components.SvgComp,width:"24",height:"24"}},this.$listeners),[t("svg",{staticClass:"feather feather-crosshair",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),t("line",{attrs:{x1:"22",y1:"12",x2:"18",y2:"12"}}),t("line",{attrs:{x1:"6",y1:"12",x2:"2",y2:"12"}}),t("line",{attrs:{x1:"12",y1:"6",x2:"12",y2:"2"}}),t("line",{attrs:{x1:"12",y1:"22",x2:"12",y2:"18"}})])])};r._withStripped=!0;var o=n(1),i={components:{IconRegister:n.n(o).a}},s=n(0),c=Object(s.a)(i,r,[],!1,null,null,null);c.options.__file="node_modules/feather-icons/dist/icons/crosshair.svg";t.default=c.exports}});