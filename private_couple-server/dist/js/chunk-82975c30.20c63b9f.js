(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82975c30"],{"90fa":function(t,s,e){},ca12:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"last_cont"},[e("article",{staticClass:"item_cont"},[e("h3",[t._v("이벤트")]),t._l(t.ItemList,(function(s){return e("li",{key:s},[e("span",{staticClass:"item_name"},[t._v(" "+t._s(s.name)+" ")]),""!==s.comment?e("span",[t._v(" "+t._s(s.comment)+" ")]):e("span",[t._v(" 평가가 없습니다... ")])])}))],2),e("article",{staticClass:"course_cont"},[e("h3",[t._v("코스")]),t._l(t.CourseList,(function(s){return e("li",{key:s.list},[e("div",{staticClass:"course_item_cont"},t._l(s.list,(function(s){return e("li",{key:s.name,staticClass:"course_name"},[t._v(" "+t._s(s.name)+" "),e("i",{staticClass:"fas fa-arrow-right"})])})),0),e("span",[t._v(" "+t._s(s.comment)+" ")])])}))],2)])},i=[],c={computed:{ItemList:function(){return this.$store.getters.getLastItemList},CourseList:function(){return this.$store.getters.getLastCourseList}},created:function(){this.$store.dispatch("FETCH_LAST_LIST")}},a=c,r=(e("dc1f"),e("2877")),o=Object(r["a"])(a,n,i,!1,null,"0138f468",null);s["default"]=o.exports},dc1f:function(t,s,e){"use strict";e("90fa")}}]);
//# sourceMappingURL=chunk-82975c30.20c63b9f.js.map