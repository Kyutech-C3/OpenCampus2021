(window.webpackJsonp=window.webpackJsonp||[]).push([[29,5,6,11],{257:function(t,e,r){var content=r(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("05efa08a",content,!0,{sourceMap:!1})},258:function(t,e,r){"use strict";r.r(e);r(63);var n={name:"Tag",model:{event:"select",prop:"selected"},props:{tag:{type:Object,require:!0,default:function(){return{id:1,name:"Hack",color:"#FF0000"}}},deletable:{type:Boolean,require:!1,default:function(){return!1}},small:{type:Boolean,require:!1,default:function(){return!1}},extraSmall:{type:Boolean,require:!1,default:function(){return!1}},outline:{type:Boolean,require:!1,default:function(){return!1}}},computed:{style:function(){return"background-color: ".concat(this.tag.color,";")},outlineStyle:function(){return"color: ".concat(this.tag.color,"; border: solid 1.5px ").concat(this.tag.color)}}},o=(r(259),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tag",class:{selected:t.selected,deletable:t.deletable,small:t.small,"extra-small":t.extraSmall},style:t.outline?t.outlineStyle:t.style},[r("div",{staticClass:"bold"},[t._v("\n\t\t"+t._s(t.tag.name)+"\n\t")]),t._v(" "),t.deletable?r("font-awesome-icon",{staticClass:"delete-button",attrs:{icon:"times"},on:{click:function(e){return t.$emit("delete",t.tag)}}}):t._e()],1)}),[],!1,null,"8ac3af4a",null);e.default=component.exports},259:function(t,e,r){"use strict";r(257)},260:function(t,e,r){var n=r(24)(!1);n.push([t.i,".tag[data-v-8ac3af4a]{display:flex;flex-direction:row;align-items:center;padding:5px 15px;font-size:1rem;color:#fff;border-radius:15.5px}.extra-small[data-v-8ac3af4a],.small[data-v-8ac3af4a]{font-size:12px}.extra-small[data-v-8ac3af4a]{padding:3px 12px}.delete-button[data-v-8ac3af4a]{vertical-align:middle;margin-left:8px;font-size:12px;cursor:pointer}.selected[data-v-8ac3af4a]{opacity:1}",""]),t.exports=n},261:function(t,e,r){"use strict";var n=r(9),o=r(5),d=r(88),l=r(16),c=r(10),m=r(42),f=r(181),v=r(64),_=r(4),x=r(55),h=r(65).f,y=r(36).f,w=r(15).f,k=r(262).trim,N="Number",E=o.Number,A=E.prototype,C=m(x(A))==N,I=function(t){var e,r,n,o,d,l,c,code,m=v(t,!1);if("string"==typeof m&&m.length>2)if(43===(e=(m=k(m)).charCodeAt(0))||45===e){if(88===(r=m.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(l=(d=m.slice(2)).length,c=0;c<l;c++)if((code=d.charCodeAt(c))<48||code>o)return NaN;return parseInt(d,n)}return+m};if(d(N,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var S,D=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof D&&(C?_((function(){A.valueOf.call(r)})):m(r)!=N)?f(new E(I(e)),r,D):I(e)},F=n?h(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;F.length>j;j++)c(E,S=F[j])&&!c(D,S)&&w(D,S,y(E,S));D.prototype=A,A.constructor=D,l(o,N,D)}},262:function(t,e,r){var n=r(21),o="["+r(263)+"]",d=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(d,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},263:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},264:function(t,e,r){var content=r(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("7295c965",content,!0,{sourceMap:!1})},265:function(t,e,r){var content=r(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("0312fb9c",content,!0,{sourceMap:!1})},272:function(t,e,r){"use strict";r(264)},273:function(t,e,r){var n=r(24)(!1);n.push([t.i,".card-link[data-v-1b026286]{margin:10px;text-decoration:none;color:#000}.card[data-v-1b026286]{height:300px;border-radius:10px;box-shadow:0 0 10px 0 rgba(0,0,0,.24);cursor:pointer}.card[data-v-1b026286],.content[data-v-1b026286]{width:200px;overflow:hidden}.content[data-v-1b026286]{position:relative;height:170px;padding:10px 15px}.thumbnail[data-v-1b026286]{position:relative;width:200px;height:120px;-o-object-fit:cover;object-fit:cover}.title[data-v-1b026286]{font-size:18px;margin-bottom:5px;font-weight:700}.tag_wrap[data-v-1b026286]{overflow:hidden;overflow-x:scroll;cursor:default}.tag_wrap[data-v-1b026286]::-webkit-scrollbar{height:7px}.tag_wrap[data-v-1b026286]::-webkit-scrollbar-thumb{background:#dbdbdb;border-radius:3px}.tag_wrap[data-v-1b026286]::-webkit-scrollbar-track{background:hsla(0,0%,86.7%,.219)}.tag[data-v-1b026286]{display:flex;flex-direction:row;justify-content:flex-start;margin-right:3px;margin-bottom:4px}.description[data-v-1b026286]{position:relative;word-break:break-all;font-size:12px;margin-top:6px}",""]),t.exports=n},274:function(t,e,r){"use strict";r.r(e);r(261);var n=r(258),o={data:function(){return{style:!0,isHoverFlag:!1}},props:{title:{type:String,required:!0,default:"hoge"},team:{type:Object,required:!0},tags:{type:Array,required:!0},description:{type:String,required:!0,default:"enpty"},card_image:{type:String,required:!0,default:"enpty"},work_id:{type:Number,require:!0},genre_id:{type:String,require:!0},key:{type:Number,require:!0}},components:{Tag:n.default},computed:{workPath:function(){return"/works/".concat(this.work_id)}}},d=(r(272),r(14)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"card-link",attrs:{to:t.workPath}},[r("article",{staticClass:"card"},[r("img",{staticClass:"thumbnail",attrs:{src:t.card_image,alt:"thumbnail",title:"thumbnail"}}),t._v(" "),t.isHoverFlag?r("div",{staticClass:"tag_viewer1"}):t._e(),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"tag_wrap"},[r("div",{staticClass:"tag",on:{mouseover:function(e){t.isHoverFlag=!0},mouseleave:function(e){t.isHoverFlag=!1}}},t._l(t.tags,(function(t){return r("Tag",{key:t.id,attrs:{extraSmall:"",outline:"",tag:t}})})),1)]),t._v(" "),r("div",{staticClass:"description"},[t._v(t._s(t.description))])])])])}),[],!1,null,"1b026286",null);e.default=component.exports;installComponents(component,{Tag:r(258).default})},276:function(t,e,r){"use strict";r(265)},277:function(t,e,r){var n=r(24)(!1);n.push([t.i,".card-list[data-v-c9f02dd6]{display:flex;flex-direction:row;flex-wrap:wrap;align-content:space-around;width:880px;margin:auto}@media screen and (max-width:1200px){.card-list[data-v-c9f02dd6]{width:440px}}@media screen and (max-width:481px){.card-list[data-v-c9f02dd6]{width:220px}}",""]),t.exports=n},302:function(t,e,r){"use strict";r.r(e);var n={components:{Card:r(274).default},props:{card_items:{type:Array,required:!0}}},o=(r(276),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-list"},t._l(t.card_items,(function(t){return r("card",{key:t.id,staticClass:"card",attrs:{title:t.title,team:t.team,tags:t.tags,description:t.description,card_image:t.thumbnail,work_id:t.id,genre_id:t.genre.title}})})),1)}),[],!1,null,"c9f02dd6",null);e.default=component.exports},369:function(t){t.exports=JSON.parse('[{"id":0,"title":"string","description":"ハト目には世界では約42属290種あり、そのうち日本の在来種は、カラスバト属（カラスバト、アカガシラカラスバト、ヨナクニカラスバト、リュウキュウカラスバト、オガサワラカラスバト）、キジバト属（キジバト、リュウキュウキジバト、シラコバト）、ベニバト属（ベニバト）、キンバト属（リュウキュウキンバト）、アオバト属（アオバト、リュウキュウズアカアオバト、チュウダイズアカアオバト）の5属13種があげられる[注 1]。 このうち、リュウキュウカラスバトとオガサワラカラスバトの2種は、絶滅したと考えられていたが、近年、DNA調査により亜種がいくつかの諸島部で生存していることが確認された。","type_choice":"U3D","card_image":"https://shared-vps.compositecomputer.club/media/images/system/kako-w9JfpqvVjhdm04Zi.jpg","goods":0,"genre":{"id":0,"title":"string","bg_color":"string"},"team":{"id":0,"name":"string"},"game":{"id":0,"unityroom_url":"string"},"model3d":{"id":0,"glb":"string","vrm":"string"},"video":{"id":0,"mp4":"string"},"tags":[{"id":1,"name":"hack","color":"#222"},{"id":2,"name":"game","color":"#122"},{"id":3,"name":"cg","color":"#212"},{"id":4,"name":"media_art","color":"#221"},{"id":5,"name":"nuxt","color":"#211"},{"id":6,"name":"vue","color":"#154"}]},{"id":1,"title":"string","description":"ハト目には世界では約42属290種あり、そのうち日本の在来種は、カラスバト属（カラスバト、アカガシラカラスバト、ヨナクニカラスバト、リュウキュウカラスバト、オガサワラカラスバト）、キジバト属（キジバト、リュウキュウキジバト、シラコバト）、ベニバト属（ベニバト）、キンバト属（リュウキュウキンバト）、アオバト属（アオバト、リュウキュウズアカアオバト、チュウダイズアカアオバト）の5属13種があげられる[注 1]。 このうち、リュウキュウカラスバトとオガサワラカラスバトの2種は、絶滅したと考えられていたが、近年、DNA調査により亜種がいくつかの諸島部で生存していることが確認された。","type_choice":"U3D","card_image":"https://shared-vps.compositecomputer.club/media/images/system/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2021-02-01_003939.png","goods":0,"genre":{"id":0,"title":"string","bg_color":"string"},"team":{"id":0,"name":"string"},"game":{"id":0,"unityroom_url":"string"},"model3d":{"id":0,"glb":"string","vrm":"string"},"video":{"id":0,"mp4":"string"},"tags":[{"id":2,"name":"sdg","color":"#333"}]},{"id":2,"title":"string","description":"ハト目には世界では約42属290種あり、そのうち日本の在来種は、カラスバト属（カラスバト、アカガシラカラスバト、ヨナクニカラスバト、リュウキュウカラスバト、オガサワラカラスバト）、キジバト属（キジバト、リュウキュウキジバト、シラコバト）、ベニバト属（ベニバト）、キンバト属（リュウキュウキンバト）、アオバト属（アオバト、リュウキュウズアカアオバト、チュウダイズアカアオバト）の5属13種があげられる[注 1]。 このうち、リュウキュウカラスバトとオガサワラカラスバトの2種は、絶滅したと考えられていたが、近年、DNA調査により亜種がいくつかの諸島部で生存していることが確認された。","type_choice":"U3D","card_image":"string","goods":0,"genre":{"id":0,"title":"string","bg_color":"string"},"team":{"id":0,"name":"string"},"game":{"id":0,"unityroom_url":"string"},"model3d":{"id":0,"glb":"string","vrm":"string"},"video":{"id":0,"mp4":"string"},"tags":[{"id":4,"name":"dsahfg","color":"#444"}]},{"id":3,"title":"string","description":"ハト目には世界では約42属290種あり、そのうち日本の在来種は、カラスバト属（カラスバト、アカガシラカラスバト、ヨナクニカラスバト、リュウキュウカラスバト、オガサワラカラスバト）、キジバト属（キジバト、リュウキュウキジバト、シラコバト）、ベニバト属（ベニバト）、キンバト属（リュウキュウキンバト）、アオバト属（アオバト、リュウキュウズアカアオバト、チュウダイズアカアオバト）の5属13種があげられる[注 1]。 このうち、リュウキュウカラスバトとオガサワラカラスバトの2種は、絶滅したと考えられていたが、近年、DNA調査により亜種がいくつかの諸島部で生存していることが確認された。","type_choice":"U3D","card_image":"string","goods":0,"genre":{"id":0,"title":"string","bg_color":"string"},"team":{"id":0,"name":"string"},"game":{"id":0,"unityroom_url":"string"},"model3d":{"id":0,"glb":"string","vrm":"string"},"video":{"id":0,"mp4":"string"},"tags":[{"id":0,"name":"gda","color":"#555"}]},{"id":4,"title":"string","description":"ハト目には世界では約42属290種あり、そのうち日本の在来種は、カラスバト属（カラスバト、アカガシラカラスバト、ヨナクニカラスバト、リュウキュウカラスバト、オガサワラカラスバト）、キジバト属（キジバト、リュウキュウキジバト、シラコバト）、ベニバト属（ベニバト）、キンバト属（リュウキュウキンバト）、アオバト属（アオバト、リュウキュウズアカアオバト、チュウダイズアカアオバト）の5属13種があげられる[注 1]。 このうち、リュウキュウカラスバトとオガサワラカラスバトの2種は、絶滅したと考えられていたが、近年、DNA調査により亜種がいくつかの諸島部で生存していることが確認された。","type_choice":"U3D","card_image":"string","goods":0,"genre":{"id":0,"title":"string","bg_color":"string"},"team":{"id":0,"name":"string"},"game":{"id":0,"unityroom_url":"string"},"model3d":{"id":0,"glb":"string","vrm":"string"},"video":{"id":0,"mp4":"string"},"tags":[{"id":0,"name":"ahf","color":"#514"}]},{"id":5,"title":"string","description":"ハト目には世界では約42属290種あり、そのうち日本の在来種は、カラスバト属（カラスバト、アカガシラカラスバト、ヨナクニカラスバト、リュウキュウカラスバト、オガサワラカラスバト）、キジバト属（キジバト、リュウキュウキジバト、シラコバト）、ベニバト属（ベニバト）、キンバト属（リュウキュウキンバト）、アオバト属（アオバト、リュウキュウズアカアオバト、チュウダイズアカアオバト）の5属13種があげられる[注 1]。 このうち、リュウキュウカラスバトとオガサワラカラスバトの2種は、絶滅したと考えられていたが、近年、DNA調査により亜種がいくつかの諸島部で生存していることが確認された。","type_choice":"U3D","card_image":"string","goods":0,"genre":{"id":0,"title":"string","bg_color":"string"},"team":{"id":0,"name":"string"},"game":{"id":0,"unityroom_url":"string"},"model3d":{"id":0,"glb":"string","vrm":"string"},"video":{"id":0,"mp4":"string"},"tags":[{"id":0,"name":"affa","color":"#123"}]},{"id":6,"title":"string","description":"ハト目には世界では約42属290種あり、そのうち日本の在来種は、カラスバト属（カラスバト、アカガシラカラスバト、ヨナクニカラスバト、リュウキュウカラスバト、オガサワラカラスバト）、キジバト属（キジバト、リュウキュウキジバト、シラコバト）、ベニバト属（ベニバト）、キンバト属（リュウキュウキンバト）、アオバト属（アオバト、リュウキュウズアカアオバト、チュウダイズアカアオバト）の5属13種があげられる[注 1]。 このうち、リュウキュウカラスバトとオガサワラカラスバトの2種は、絶滅したと考えられていたが、近年、DNA調査により亜種がいくつかの諸島部で生存していることが確認された。","type_choice":"U3D","card_image":"string","goods":0,"genre":{"id":0,"title":"string","bg_color":"string"},"team":{"id":0,"name":"string"},"game":{"id":0,"unityroom_url":"string"},"model3d":{"id":0,"glb":"string","vrm":"string"},"video":{"id":0,"mp4":"string"},"tags":[{"id":0,"name":"ah","color":"#774"}]}]')},379:function(t,e,r){"use strict";r.r(e);var n=r(302),o=r(369),d={components:{CardList:n.default},data:function(){return{card_items:o}}},l=r(14),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("card-list",{attrs:{card_items:t.card_items}})}),[],!1,null,null,null);e.default=component.exports}}]);