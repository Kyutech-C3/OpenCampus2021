(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11],{255:function(t,e,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("05efa08a",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";r.r(e);r(63);var n={name:"Tag",model:{event:"select",prop:"selected"},props:{tag:{type:Object,require:!0,default:function(){return{id:1,name:"Hack",color:"#FF0000"}}},deletable:{type:Boolean,require:!1,default:function(){return!1}},small:{type:Boolean,require:!1,default:function(){return!1}},extraSmall:{type:Boolean,require:!1,default:function(){return!1}},outline:{type:Boolean,require:!1,default:function(){return!1}}},computed:{style:function(){return"background-color: ".concat(this.tag.color,";")},outlineStyle:function(){return"color: ".concat(this.tag.color,"; border: solid 1.5px ").concat(this.tag.color)}}},o=(r(257),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tag",class:{selected:t.selected,deletable:t.deletable,small:t.small,"extra-small":t.extraSmall},style:t.outline?t.outlineStyle:t.style},[r("div",{staticClass:"bold"},[t._v("\n\t\t"+t._s(t.tag.name)+"\n\t")]),t._v(" "),t.deletable?r("font-awesome-icon",{staticClass:"delete-button",attrs:{icon:"times"},on:{click:function(e){return t.$emit("delete",t.tag)}}}):t._e()],1)}),[],!1,null,"8ac3af4a",null);e.default=component.exports},257:function(t,e,r){"use strict";r(255)},258:function(t,e,r){var n=r(24)(!1);n.push([t.i,".tag[data-v-8ac3af4a]{display:flex;flex-direction:row;align-items:center;padding:5px 15px;font-size:1rem;color:#fff;border-radius:15.5px}.extra-small[data-v-8ac3af4a],.small[data-v-8ac3af4a]{font-size:12px}.extra-small[data-v-8ac3af4a]{padding:3px 12px}.delete-button[data-v-8ac3af4a]{vertical-align:middle;margin-left:8px;font-size:12px;cursor:pointer}.selected[data-v-8ac3af4a]{opacity:1}",""]),t.exports=n},259:function(t,e,r){"use strict";var n=r(9),o=r(5),l=r(88),c=r(16),d=r(10),f=r(42),v=r(181),x=r(64),m=r(4),h=r(55),_=r(65).f,w=r(36).f,y=r(15).f,k=r(260).trim,N="Number",I=o.Number,C=I.prototype,E=f(h(C))==N,S=function(t){var e,r,n,o,l,c,d,code,f=x(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=k(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(l(N,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var A,F=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof F&&(E?m((function(){C.valueOf.call(r)})):f(r)!=N)?v(new I(S(e)),r,F):S(e)},T=n?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;T.length>M;M++)d(I,A=T[M])&&!d(F,A)&&y(F,A,w(I,A));F.prototype=C,C.constructor=F,c(o,N,F)}},260:function(t,e,r){var n=r(21),o="["+r(261)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},261:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},262:function(t,e,r){var content=r(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("7295c965",content,!0,{sourceMap:!1})},270:function(t,e,r){"use strict";r(262)},271:function(t,e,r){var n=r(24)(!1);n.push([t.i,".card-link[data-v-1b026286]{margin:10px;text-decoration:none;color:#000}.card[data-v-1b026286]{height:300px;border-radius:10px;box-shadow:0 0 10px 0 rgba(0,0,0,.24);cursor:pointer}.card[data-v-1b026286],.content[data-v-1b026286]{width:200px;overflow:hidden}.content[data-v-1b026286]{position:relative;height:170px;padding:10px 15px}.thumbnail[data-v-1b026286]{position:relative;width:200px;height:120px;-o-object-fit:cover;object-fit:cover}.title[data-v-1b026286]{font-size:18px;margin-bottom:5px;font-weight:700}.tag_wrap[data-v-1b026286]{overflow:hidden;overflow-x:scroll;cursor:default}.tag_wrap[data-v-1b026286]::-webkit-scrollbar{height:7px}.tag_wrap[data-v-1b026286]::-webkit-scrollbar-thumb{background:#dbdbdb;border-radius:3px}.tag_wrap[data-v-1b026286]::-webkit-scrollbar-track{background:hsla(0,0%,86.7%,.219)}.tag[data-v-1b026286]{display:flex;flex-direction:row;justify-content:flex-start;margin-right:3px;margin-bottom:4px}.description[data-v-1b026286]{position:relative;word-break:break-all;font-size:12px;margin-top:6px}",""]),t.exports=n},272:function(t,e,r){"use strict";r.r(e);r(259);var n=r(256),o={data:function(){return{style:!0,isHoverFlag:!1}},props:{title:{type:String,required:!0,default:"hoge"},team:{type:Object,required:!0},tags:{type:Array,required:!0},description:{type:String,required:!0,default:"enpty"},card_image:{type:String,required:!0,default:"enpty"},work_id:{type:Number,require:!0},genre_id:{type:String,require:!0},key:{type:Number,require:!0}},components:{Tag:n.default},computed:{workPath:function(){return"/works/".concat(this.work_id)}}},l=(r(270),r(14)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"card-link",attrs:{to:t.workPath}},[r("article",{staticClass:"card"},[r("img",{staticClass:"thumbnail",attrs:{src:t.card_image,alt:"thumbnail",title:"thumbnail"}}),t._v(" "),t.isHoverFlag?r("div",{staticClass:"tag_viewer1"}):t._e(),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"tag_wrap"},[r("div",{staticClass:"tag",on:{mouseover:function(e){t.isHoverFlag=!0},mouseleave:function(e){t.isHoverFlag=!1}}},t._l(t.tags,(function(t){return r("Tag",{key:t.id,attrs:{extraSmall:"",outline:"",tag:t}})})),1)]),t._v(" "),r("div",{staticClass:"description"},[t._v(t._s(t.description))])])])])}),[],!1,null,"1b026286",null);e.default=component.exports;installComponents(component,{Tag:r(256).default})}}]);