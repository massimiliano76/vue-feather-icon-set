module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=125)}({0:function(e,t,r){"use strict";function n(e,t,r,n,o,i,s,c){var u,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=r,a._compiled=!0),n&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=u):o&&(u=c?function(){o.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(a.functional){a._injectStyles=u;var l=a.render;a.render=function(e,t){return u.call(t),l(e,t)}}else{var f=a.beforeCreate;a.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:a}}r.d(t,"a",(function(){return n}))},1:function(e,t){e.exports=require("../lib/icon-register.js")},125:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this.$createElement,t=this._self._c||e;return t("icon-register",this._g({attrs:{id:"feather-icons-git-merge",el:this.$options.components.SvgComp,width:"24",height:"24"}},this.$listeners),[t("svg",{staticClass:"feather feather-git-merge",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("circle",{attrs:{cx:"18",cy:"18",r:"3"}}),t("circle",{attrs:{cx:"6",cy:"6",r:"3"}}),t("path",{attrs:{d:"M6 21V9a9 9 0 0 0 9 9"}})])])};n._withStripped=!0;var o=r(1),i={components:{IconRegister:r.n(o).a}},s=r(0),c=Object(s.a)(i,n,[],!1,null,null,null);c.options.__file="node_modules/feather-icons/dist/icons/git-merge.svg";t.default=c.exports}});