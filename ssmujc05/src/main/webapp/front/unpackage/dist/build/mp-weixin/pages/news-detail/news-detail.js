(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{"0242":function(t,n,e){"use strict";e.r(n);var r=e("2466"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},2466:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,u,a,i){try{var c=t[a](i),o=c.value}catch(f){return void e(f)}c.done?n(o):Promise.resolve(o).then(r,u)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var i=t.apply(n,e);function c(t){a(i,r,u,c,o,"next",t)}function o(t){a(i,r,u,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{detail:{},id:""}},onLoad:function(t){var n=this;return i(r.default.mark((function e(){var u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.id=t.id,e.next=3,n.$api.info("news",t.id);case 3:u=e.sent,n.detail=u.data,n.detail.content=n.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return e.stop()}}),e)})))()}};n.default=c},"7eb8":function(t,n,e){"use strict";var r=e("fd10"),u=e.n(r);u.a},c492:function(t,n,e){"use strict";(function(t){e("34c8");r(e("66fd"));var n=r(e("c935"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},c935:function(t,n,e){"use strict";e.r(n);var r=e("d73e"),u=e("0242");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("7eb8");var i,c=e("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"3b1ac260",null,!1,r["a"],i);n["default"]=o.exports},d73e:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},fd10:function(t,n,e){}},[["c492","common/runtime","common/vendor"]]]);