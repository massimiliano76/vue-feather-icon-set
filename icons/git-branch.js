module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=123)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,c){var a,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=a):o&&(a=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(u.functional){u._injectStyles=a;var l=u.render;u.render=function(t,e){return a.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,a):[a]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},1:function(t,e){t.exports=require("../lib/icon-register.js")},123:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("icon-register",this._g({attrs:{id:"feather-icons-git-branch",el:this.$options.components.SvgComp,width:"24",height:"24"}},this.$listeners),[e("svg",{staticClass:"feather feather-git-branch",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("line",{attrs:{x1:"6",y1:"3",x2:"6",y2:"15"}}),e("circle",{attrs:{cx:"18",cy:"6",r:"3"}}),e("circle",{attrs:{cx:"6",cy:"18",r:"3"}}),e("path",{attrs:{d:"M18 9a9 9 0 0 1-9 9"}})])])};r._withStripped=!0;var o=n(1),i={components:{IconRegister:n.n(o).a}},s=n(0),c=Object(s.a)(i,r,[],!1,null,null,null);c.options.__file="node_modules/feather-icons/dist/icons/git-branch.svg";e.default=c.exports}});