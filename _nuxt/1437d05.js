(window.webpackJsonp=window.webpackJsonp||[]).push([[29,7],{266:function(t,e,r){"use strict";var n=r(9),o=r(5),c=r(89),l=r(16),d=r(10),f=r(42),v=r(184),m=r(64),h=r(4),w=r(55),x=r(65).f,_=r(36).f,y=r(15).f,k=r(267).trim,C="Number",N=o.Number,E=N.prototype,I=f(w(E))==C,T=function(t){var e,r,n,o,c,l,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=k(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c(C,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var j,A=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof A&&(I?h((function(){E.valueOf.call(r)})):f(r)!=C)?v(new N(T(e)),r,A):T(e)},S=n?x(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;S.length>F;F++)d(N,j=S[F])&&!d(A,j)&&y(A,j,_(N,j));A.prototype=E,E.constructor=A,l(o,C,A)}},267:function(t,e,r){var n=r(23),o="["+r(268)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},268:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},269:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("393995fd",content,!0,{sourceMap:!1})},270:function(t,e,r){var content=r(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("7ac10294",content,!0,{sourceMap:!1})},277:function(t,e,r){"use strict";r(269)},278:function(t,e,r){var n=r(21)(!1);n.push([t.i,".card-link[data-v-60c0e89d]{margin:15px;text-decoration:none;color:#000}.card[data-v-60c0e89d]{width:300px;height:380px;border-radius:10px;box-shadow:0 0 10px 0 rgba(0,0,0,.24);transition:.3s;cursor:pointer;overflow:hidden}.card[data-v-60c0e89d]:hover{box-shadow:0 0 20px 2px rgb(0 0 0/50%)}.content[data-v-60c0e89d]{height:270px;padding:10px 15px;overflow:hidden}.content[data-v-60c0e89d],.thumbnail[data-v-60c0e89d]{position:relative;width:300px}.thumbnail[data-v-60c0e89d]{height:220px;-o-object-fit:cover;object-fit:cover}.title[data-v-60c0e89d]{font-size:18px;margin-bottom:5px;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tag_wrap[data-v-60c0e89d]{overflow:hidden;overflow-x:auto;cursor:default}.tag_wrap[data-v-60c0e89d]::-webkit-scrollbar{height:7px}.tag_wrap[data-v-60c0e89d]::-webkit-scrollbar-thumb{background:#dbdbdb;border-radius:3px}.tag_wrap[data-v-60c0e89d]::-webkit-scrollbar-track{background:hsla(0,0%,86.7%,.219)}.tag[data-v-60c0e89d]{display:flex;flex-direction:row;justify-content:flex-start;margin-right:3px;margin-bottom:4px}.description[data-v-60c0e89d]{position:relative;font-size:12px;margin-top:6px;display:-webkit-box;-webkit-line-clamp:3;text-overflow:ellipsis;white-space:normal;overflow:hidden;-webkit-box-orient:vertical}",""]),t.exports=n},279:function(t,e,r){"use strict";r.r(e);r(266);var n=r(263),o={data:function(){return{style:!0,isHoverFlag:!1}},props:{title:{type:String,required:!0,default:"hoge"},team:{type:Object,required:!0},tags:{type:Array,required:!0},description:{type:String,required:!0,default:"enpty"},card_image:{type:String,required:!0,default:"enpty"},work_id:{type:Number,require:!0},genre_id:{type:String,require:!0},key:{type:Number,require:!0}},components:{Tag:n.default},computed:{workPath:function(){return"/works/".concat(this.work_id)}}},c=(r(277),r(12)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"card-link",attrs:{to:t.workPath}},[r("article",{staticClass:"card"},[r("img",{staticClass:"thumbnail",attrs:{src:t.card_image,alt:"thumbnail",title:"thumbnail"}}),t._v(" "),t.isHoverFlag?r("div",{staticClass:"tag_viewer1"}):t._e(),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"tag_wrap"},[r("div",{staticClass:"tag",on:{mouseover:function(e){t.isHoverFlag=!0},mouseleave:function(e){t.isHoverFlag=!1}}},t._l(t.tags,(function(t){return r("Tag",{key:t.id,attrs:{extraSmall:"",outline:"",tag:t}})})),1)]),t._v(" "),r("div",{staticClass:"description"},[t._v(t._s(t.description))])])])])}),[],!1,null,"60c0e89d",null);e.default=component.exports;installComponents(component,{Tag:r(263).default})},281:function(t,e,r){"use strict";r(270)},282:function(t,e,r){var n=r(21)(!1);n.push([t.i,".card-list[data-v-09a8290e]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:left;align-items:center;width:100%;max-width:1400px;margin:auto}@media screen and (min-width:0px) and (max-width:700px){.card-list[data-v-09a8290e]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}}",""]),t.exports=n},283:function(t,e,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("4e55cf73",content,!0,{sourceMap:!1})},307:function(t,e,r){"use strict";r.r(e);var n={components:{Card:r(279).default},props:{card_items:{type:Array,required:!0}}},o=(r(281),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-list"},t._l(t.card_items,(function(t){return r("card",{key:t.id,staticClass:"card",attrs:{title:t.title,team:t.team,tags:t.tags,description:t.description,card_image:t.thumbnail,work_id:t.id,genre_id:t.genre.title}})})),1)}),[],!1,null,"09a8290e",null);e.default=component.exports},315:function(t,e,r){"use strict";r(283)},316:function(t,e,r){var n=r(21)(!1);n.push([t.i,"div[data-v-d23e9f42]{--base-color:#495d7e;--highlight-color:#fcfb6b}.allWrapper[data-v-d23e9f42]{margin:0}.name[data-v-d23e9f42]{color:var(--base-color);background:linear-gradient(transparent 60%,var(--highlight-color) 0);font-size:calc(6.5vw + 10px);display:inline-block;white-space:nowrap;padding-right:10px;margin-bottom:3vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.description[data-v-d23e9f42]{font-size:calc(.5vw + 14px);margin-left:4%;text-align:justify;text-justify:auto}.description[data-v-d23e9f42]::-moz-selection{background:rgba(69,101,134,.23922)}.description[data-v-d23e9f42]::selection{background:rgba(69,101,134,.23922)}",""]),t.exports=n},343:function(t,e,r){var content=r(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("2a6cd3fa",content,!0,{sourceMap:!1})},351:function(t,e,r){"use strict";r.r(e);var n={props:{info:{type:Object,required:!0,default:{name:"default",description:"default"}}}},o=(r(315),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"allWrapper"},[r("p",{staticClass:"name bold"},[t._v(t._s(t.info.name))]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.info.description))])])}),[],!1,null,"d23e9f42",null);e.default=component.exports},364:function(t,e,r){"use strict";r(343)},365:function(t,e,r){var n=r(21)(!1);n.push([t.i,"div[data-v-24b5f75e]{--base-color:#495d7e;--highlight-color:#fcfb6b}.container[data-v-24b5f75e]{display:flex;flex-direction:column;margin-top:2rem}.row[data-v-24b5f75e]{display:flex;flex-direction:row;margin-bottom:2rem}.name[data-v-24b5f75e]{color:var(--base-color);background:linear-gradient(transparent 60%,var(--highlight-color) 0);font-size:calc(4.5vw + 10px);display:inline-block;white-space:nowrap;padding-right:10px;margin-bottom:3vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),t.exports=n},378:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(44),r(28),r(45),r(29),r(63),r(37),r(374)),c=r(307),l=r(351),d={components:{TagSelector:o.default,CardList:c.default,Description:l.default},data:function(){return{genre:{},selectedTags:[]}},computed:{communityInfo:function(){return{name:"".concat(this.genre.title," community"),description:this.genre.description}},allTags:function(){var t=[];return this.genre.works.forEach((function(e){t=t.concat(e.tags.filter((function(e){return!t.filter((function(t){return t.id===e.id})).length})))})),t},tagFilteredWorks:function(){var t=this;return 0===this.selectedTags.length?this.genre.works:this.genre.works.filter((function(e){return!!t.selectedTags.filter((function(t){return!!e.tags.filter((function(e){return t.id===e.id})).length})).length}))}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.error,n=t.params,o=t.$axios,e.next=3,o.get("genres/".concat(n.community_id,"/")).catch((function(t){throw console.error("failed",t),new Error(t)}));case 3:if(200!==(c=e.sent).status){e.next=8;break}return e.abrupt("return",{genre:c.data});case 8:r({statusCode:c.status});case 9:case"end":return e.stop()}}),e)})))()}},f=(r(364),r(12)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("description",{attrs:{info:t.communityInfo}})],1),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("tag-selector",{attrs:{tags:t.allTags},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}})],1),t._v(" "),r("div",{staticClass:"row"},[r("card-list",{attrs:{card_items:t.tagFilteredWorks}})],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"name bold"},[t._v("作品")])])}],!1,null,"24b5f75e",null);e.default=component.exports}}]);