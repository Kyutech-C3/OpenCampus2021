(window.webpackJsonp=window.webpackJsonp||[]).push([[1,10,18,19,20,21,22,23,24,26,27],{262:function(t,e,o){var content=o(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("3329ae12",content,!0,{sourceMap:!1})},263:function(t,e,o){"use strict";o.r(e);o(63);var r={name:"Tag",model:{event:"select",prop:"selected"},props:{tag:{type:Object,require:!0,default:function(){return{id:1,name:"Hack",color:"#FF0000"}}},deletable:{type:Boolean,require:!1,default:function(){return!1}},small:{type:Boolean,require:!1,default:function(){return!1}},extraSmall:{type:Boolean,require:!1,default:function(){return!1}},outline:{type:Boolean,require:!1,default:function(){return!1}}},computed:{style:function(){return"background-color: ".concat(this.tag.color,";")},outlineStyle:function(){return"color: ".concat(this.tag.color,"; border: solid 1.5px ").concat(this.tag.color)}}},n=(o(264),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tag",class:{selected:t.selected,deletable:t.deletable,small:t.small,"extra-small":t.extraSmall},style:t.outline?t.outlineStyle:t.style},[o("div",{staticClass:"bold"},[t._v("\n\t\t"+t._s(t.tag.name)+"\n\t")]),t._v(" "),t.deletable?o("font-awesome-icon",{staticClass:"delete-button",attrs:{icon:"times"},on:{click:function(e){return t.$emit("delete",t.tag)}}}):t._e()],1)}),[],!1,null,"b2ce6a06",null);e.default=component.exports},264:function(t,e,o){"use strict";o(262)},265:function(t,e,o){var r=o(21)(!1);r.push([t.i,".tag[data-v-b2ce6a06]{display:flex;flex-direction:row;flex-wrap:nowrap;white-space:nowrap;align-items:center;padding:5px 15px;font-size:1rem;color:#fff;border-radius:15.5px}.extra-small[data-v-b2ce6a06],.small[data-v-b2ce6a06]{font-size:12px}.extra-small[data-v-b2ce6a06]{padding:3px 12px}.delete-button[data-v-b2ce6a06]{vertical-align:middle;margin-left:8px;font-size:12px;cursor:pointer}.selected[data-v-b2ce6a06]{opacity:1}",""]),t.exports=r},266:function(t,e,o){"use strict";var r=o(9),n=o(5),l=o(89),c=o(16),d=o(10),f=o(42),m=o(184),h=o(64),v=o(4),_=o(55),w=o(65).f,y=o(36).f,x=o(15).f,k=o(267).trim,C="Number",S=n.Number,E=S.prototype,M=f(_(E))==C,A=function(t){var e,o,r,n,l,c,d,code,f=h(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=k(f)).charCodeAt(0))||45===e){if(88===(o=f.charCodeAt(2))||120===o)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>n)return NaN;return parseInt(l,r)}return+f};if(l(C,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var T,I=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof I&&(M?v((function(){E.valueOf.call(o)})):f(o)!=C)?m(new S(A(e)),o,I):A(e)},N=r?w(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;N.length>L;L++)d(S,T=N[L])&&!d(I,T)&&x(I,T,y(S,T));I.prototype=E,E.constructor=I,c(n,C,I)}},267:function(t,e,o){var r=o(23),n="["+o(268)+"]",l=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),d=function(t){return function(e){var o=String(r(e));return 1&t&&(o=o.replace(l,"")),2&t&&(o=o.replace(c,"")),o}};t.exports={start:d(1),end:d(2),trim:d(3)}},268:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},271:function(t,e,o){var content=o(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("c774a7ec",content,!0,{sourceMap:!1})},272:function(t,e,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("4b4bfd26",content,!0,{sourceMap:!1})},273:function(t,e,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("e08ed2a6",content,!0,{sourceMap:!1})},274:function(t,e,o){var content=o(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("66e9d470",content,!0,{sourceMap:!1})},275:function(t,e,o){var content=o(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("11dd1a25",content,!0,{sourceMap:!1})},286:function(t,e,o){var content=o(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("020ef7fd",content,!0,{sourceMap:!1})},287:function(t,e,o){var content=o(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("9eaa5932",content,!0,{sourceMap:!1})},288:function(t,e,o){"use strict";o(271)},289:function(t,e,o){var r=o(21)(!1);r.push([t.i,".player[data-v-2f3e36c5]{width:100%;min-height:500px}.player[data-v-2f3e36c5],.youtube-container[data-v-2f3e36c5]{height:100%}",""]),t.exports=r},290:function(t,e,o){"use strict";o(272)},291:function(t,e,o){var r=o(21)(!1);r.push([t.i,".image-asset-container[data-v-20730ae4]{height:100%;background-color:#000}.image[data-v-20730ae4]{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}",""]),t.exports=r},292:function(t,e,o){"use strict";o(273)},293:function(t,e,o){var r=o(21)(!1);r.push([t.i,".soundcloud-container[data-v-621f904f]{width:100%;height:100%}",""]),t.exports=r},294:function(t,e,o){"use strict";o(274)},295:function(t,e,o){var r=o(21)(!1);r.push([t.i,".sketchfab-container[data-v-2dc86488]{width:100%;height:100%}",""]),t.exports=r},296:function(t,e,o){"use strict";o(275)},297:function(t,e,o){var r=o(21)(!1);r.push([t.i,".sketchfab-embed-wrapper,.sketchfab-embed-wrapper iframe{width:100%;height:100%}.sketchfab-embed-wrapper p{display:none}",""]),t.exports=r},298:function(t,e,o){var content=o(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("2b281204",content,!0,{sourceMap:!1})},299:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("210b85be",content,!0,{sourceMap:!1})},300:function(t,e,o){var content=o(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("a25c5c4c",content,!0,{sourceMap:!1})},308:function(t,e,o){"use strict";o.r(e);var r={name:"YouTube",props:{youtubeID:{type:String,default:function(){return"Lhu7zb1hers"}}},computed:{youtubeSourceURL:function(){return"https://www.youtube.com/embed/".concat(this.youtubeID)}}},n=(o(288),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"youtube-container"},[o("iframe",{staticClass:"player",attrs:{src:t.youtubeSourceURL,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,"2f3e36c5",null);e.default=component.exports},309:function(t,e,o){"use strict";o.r(e);var r={name:"YouTube",props:{src:{type:String,default:function(){return"https://shared-vps.compositecomputer.club/media/images/system/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2021-02-01_003939.png"}}}},n=(o(290),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"image-asset-container"},[o("img",{staticClass:"image",attrs:{src:t.src}})])}),[],!1,null,"20730ae4",null);e.default=component.exports},310:function(t,e,o){"use strict";o.r(e);var r={name:"SoundCloud",props:{soundcloudEmbedHTML:{type:String,default:function(){return'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/the-bugle" title="The Bugle" target="_blank" style="color: #cccccc; text-decoration: none;">The Bugle</a> · <a href="https://soundcloud.com/the-bugle/bugle-179-playas-gon-play" title="Bugle 179 - Playas gon play" target="_blank" style="color: #cccccc; text-decoration: none;">Bugle 179 - Playas gon play</a></div>'}}}},n=(o(292),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"soundcloud-container",domProps:{innerHTML:t._s(t.soundcloudEmbedHTML)}})}),[],!1,null,"621f904f",null);e.default=component.exports},311:function(t,e,o){"use strict";o.r(e);var r={name:"Sketchfab",props:{sketchfabEmbedHTML:{type:String,default:function(){return'<div class="sketchfab-embed-wrapper"> <iframe title="GLOCK" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4a92e03e98ea42b58a56a8235cee8ddd/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/glock-4a92e03e98ea42b58a56a8235cee8ddd?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;"> GLOCK </a> by <a href="https://sketchfab.com/h1ggs?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;"> h1ggs </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'}}}},n=(o(294),o(296),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sketchfab-container",domProps:{innerHTML:t._s(t.sketchfabEmbedHTML)}})}),[],!1,null,"2dc86488",null);e.default=component.exports},321:function(t,e,o){"use strict";o(286)},322:function(t,e,o){var r=o(21)(!1);r.push([t.i,".favorite[data-v-1532a3ac]{display:flex;align-items:center}#favo_true[data-v-1532a3ac]{pointer-events:none;opacity:1;cursor:auto}#favo_false[data-v-1532a3ac]{cursor:pointer}.farHeart[data-v-1532a3ac]{cursor:pointer}.farHeart[data-v-1532a3ac],.fasHeart[data-v-1532a3ac]{width:30px;height:auto;opacity:.4}.farHeart[data-v-1532a3ac]:hover{opacity:.6}.fa_num[data-v-1532a3ac]{font-size:30px;margin-left:10px;padding-bottom:3px;opacity:.4}",""]),t.exports=r},323:function(t,e,o){"use strict";o(287)},324:function(t,e,o){var r=o(21)(!1);r.push([t.i,".download_link[data-v-40f3080d]{color:rgba(0,0,0,.4)}.download_link[data-v-40f3080d]:hover{color:#000}",""]),t.exports=r},325:function(t,e,o){"use strict";o(298)},326:function(t,e,o){var r=o(21)(!1);r.push([t.i,".wrapper[data-v-ec984d4c]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.title[data-v-ec984d4c]{text-align:center}",""]),t.exports=r},327:function(t,e,o){"use strict";o(299)},328:function(t,e,o){var r=o(21)(!1);r.push([t.i,".tag-list-container[data-v-436bfa08]{display:flex;flex-direction:row;flex-wrap:wrap}.tag-container[data-v-436bfa08]{margin-right:10px;margin-bottom:10px}",""]),t.exports=r},329:function(t,e,o){"use strict";o(300)},330:function(t,e,o){var r=o(21)(!1);r.push([t.i,".work-link[data-v-2e475953]{display:flex;margin-bottom:20px}.icon[data-v-2e475953]{margin-right:.5rem;color:#000}",""]),t.exports=r},340:function(t,e,o){"use strict";o.r(e);var r={name:"WorkLink",props:{to:{type:String,require:!0}}},n=(o(329),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:t.to,target:"_blank"}},[o("div",{staticClass:"work-link"},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:"link"}}),t._v(" "),o("div",{staticClass:"bold"},[t._v(t._s(t.to))])],1)])}),[],!1,null,"2e475953",null);e.default=component.exports},346:function(t,e,o){var content=o(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("9dca7a0c",content,!0,{sourceMap:!1})},352:function(t,e,o){"use strict";o.r(e);o(266);var r={props:{work_id:{type:Number,require:!0},goods:{type:Number,require:!0}},data:function(){return{likeSum:void 0,likedFlag:!1}},mounted:function(){this.$nextTick((function(){console.log(this.goods),this.likeSum=this.goods}))},methods:{submitFavo:function(){var t=this;console.log(this.likedFlag);this.$axios.post("works/"+String(this.work_id)+"/goods/",{goods:1}).then((function(e){t.likeSum=e.data.goods})).catch((function(t){alert(t),console.error(t)})),this.likedFlag=!0}}},n=(o(321),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"favorite"},[o("div",{attrs:{id:t.likedFlag?"favo_true":"likeFlag"},on:{click:t.submitFavo}},[t.likedFlag?t._e():o("font-awesome-icon",{staticClass:"farHeart",attrs:{icon:["far","heart"]}}),t._v(" "),t.likedFlag?o("font-awesome-icon",{staticClass:"fasHeart",attrs:{icon:["fas","heart"]}}):t._e()],1),t._v(" "),o("div",{staticClass:"fa_num"},[t._v(t._s(t.likeSum))])])}),[],!1,null,"1532a3ac",null);e.default=component.exports},353:function(t,e,o){"use strict";o.r(e);var r={props:{download_link:{type:String,require:!0,default:"https://drive.google.com/uc?export=download&id=122bfV2gtg6bfwYkmAQfrws4-6vFZbqII"}}},n=(o(323),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("dev",[o("a",{staticClass:"download_link",attrs:{href:t.download_link,target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fas","file-download"]}})],1)])}),[],!1,null,"40f3080d",null);e.default=component.exports},354:function(t,e,o){"use strict";o.r(e);var r=o(344),n=(o(345),o(308)),l=o(309),c=o(310),d=o(311),f={name:"Viewer",data:function(){return{options:{itemsToShow:1,wheelControl:!1,centerMode:!0,infiniteScroll:!0}}},components:{Hooper:r.a,Slide:r.d,HooperPagination:r.c,HooperNavigation:r.b,YouTube:n.default,ImageAsset:l.default,SoundCloud:c.default,Sketchfab:d.default},props:{mediaAssets:{type:Array,default:function(){return[]}}},created:function(){console.debug(this.mediaAssets)}},m=(o(325),o(12)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("hooper",{staticStyle:{height:"auto",width:"100%"},attrs:{settings:t.options}},[t._l(t.mediaAssets,(function(e){return o("slide",{key:e.id,staticStyle:{height:"auto",width:"100%"}},[null!==e.youtube_video_id?o("you-tube",{attrs:{youtubeID:e.youtube_video_id}}):t._e(),t._v(" "),null!==e.image?o("image-asset",{attrs:{src:e.image}}):t._e(),t._v(" "),""!==e.soundcloud_embed_html?o("sound-cloud",{attrs:{soundcloudEmbedHTML:e.soundcloud_embed_html}}):t._e(),t._v(" "),""!==e.sketchfab_embed_html?o("sketchfab",{attrs:{sketchfabEmbedHTML:e.sketchfab_embed_html}}):t._e()],1)})),t._v(" "),0===t.mediaAssets.length?o("slide",[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"title"},[t._v("アセットがありません")])])]):t._e(),t._v(" "),o("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),t._v(" "),o("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1)}),[],!1,null,"ec984d4c",null);e.default=component.exports},355:function(t,e,o){"use strict";o.r(e);var r={name:"TagList",components:{Tag:o(263).default},props:{tags:{type:Array,require:!0,default:function(){return[{id:1,name:"Hack",color:"#FF0000"}]}}}},n=(o(327),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tag-list-container"},t._l(t.tags,(function(t){return o("div",{key:t.name,staticClass:"tag-container"},[o("tag",{attrs:{tag:t,selectable:!1,small:""}})],1)})),0)}),[],!1,null,"436bfa08",null);e.default=component.exports;installComponents(component,{Tag:o(263).default})},367:function(t,e,o){"use strict";o(346)},368:function(t,e,o){var r=o(21)(!1);r.push([t.i,".header_top[data-v-0496a727]{display:flex;align-items:center;justify-content:space-between;height:70px}.title[data-v-0496a727]{font-size:30px;font-weight:700}.download[data-v-0496a727],.title[data-v-0496a727]{align-self:center}.download[data-v-0496a727]{margin-left:10px}.header_mid[data-v-0496a727]{display:flex;flex-wrap:wrap;margin-bottom:30px;height:auto;width:100%}.viewer[data-v-0496a727]{height:auto}.work_info[data-v-0496a727]{margin-top:20px;margin-left:20px}.member_title[data-v-0496a727]{font-size:15px}.member[data-v-0496a727]{font-size:17px;margin-top:5px;margin-bottom:20px}.tag_title[data-v-0496a727]{margin-bottom:15px}.created_at[data-v-0496a727]{font-size:20px;margin-bottom:20px}.header_bottom[data-v-0496a727]{padding-left:7%}.description[data-v-0496a727]::-moz-selection,.member[data-v-0496a727]::-moz-selection{background:rgba(69,101,134,.23922)}.description[data-v-0496a727]::selection,.member[data-v-0496a727]::selection{background:rgba(69,101,134,.23922)}.created_at[data-v-0496a727],.member_title[data-v-0496a727],.tag_title[data-v-0496a727],.tags[data-v-0496a727],.title[data-v-0496a727]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (min-width:1300px){.viewer[data-v-0496a727]{width:70%}.work_info[data-v-0496a727]{margin-left:0;padding-left:20px;width:30%;height:auto}}@media screen and (max-width:900px){.viewer[data-v-0496a727]{width:100%}.work_info[data-v-0496a727]{width:100%;height:auto}}@media screen and (max-width:481px){.viewer[data-v-0496a727]{width:100%}.work_info[data-v-0496a727]{width:100%;height:auto}}.viewer_mock[data-v-0496a727]{background-color:#00f}",""]),t.exports=r},375:function(t,e,o){"use strict";o.r(e);o(266),o(63),o(43);var r=o(352),n=o(353),l=o(354),c=o(355),d=o(340),f={components:{Favorite:r.default,Download:n.default,Viewer:l.default,TagList:c.default,WorkLink:d.default},data:function(){return{style:!0}},props:{title:{type:String,required:!0,default:"hoge"},team:{type:Object,required:!0},tags:{type:Array,required:!0,default:[{id:0,name:"hoge1",color:"#234"},{id:1,name:"hoge2",color:"#432"},{id:2,name:"hoge2",color:"#234"},{id:3,name:"hoge3",color:"#432"},{id:4,name:"hoge1",color:"#234"},{id:5,name:"hoge2",color:"#432"},{id:6,name:"hoge2",color:"#234"},{id:7,name:"hoge3",color:"#432"}]},description:{type:String,required:!0,default:"enpty"},card_image:{type:String,required:!0,default:"enpty"},work_id:{type:Number,require:!0},work_link:{type:String,required:!1},download_link:{type:String,required:!0,default:"a"},goods:{type:Number,required:!0,default:0},media_assets:{type:Array,required:!0},created_at:{type:String,required:!0,default:"2021-07-24T16:29:49.212Z"}},methods:{getDate:function(t){var e=new Date(t);return"".concat(e.getFullYear(),"/").concat(this.zeroPadding(e.getMonth()+1,2),"/").concat(this.zeroPadding(e.getDate(),2)," ").concat(this.zeroPadding(e.getHours(),2),":").concat(this.zeroPadding(e.getMinutes(),2),":").concat(this.zeroPadding(e.getSeconds(),2))},zeroPadding:function(t,e){return("0000000000"+t).slice(-e)}}},m=(o(367),o(12)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("dev",{staticClass:"header_top"},[o("div",{staticClass:"header_left"},[o("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t.download_link!=t.ull?o("download",{staticClass:"download",attrs:{download_link:t.download_link}}):t._e()],1),t._v(" "),o("div",{staticClass:"l"},[o("favorite",{staticClass:"favorite",attrs:{work_id:t.work_id,goods:t.goods}})],1)]),t._v(" "),o("div",{staticClass:"header_mid"},[o("viewer",{staticClass:"viewer",attrs:{mediaAssets:t.media_assets}}),t._v(" "),o("div",{staticClass:"work_info"},[o("div",{staticClass:"member_title"},[o("font-awesome-icon",{attrs:{icon:["fas","users"]}}),t._v(" "),o("span",[t._v("メンバー")])],1),t._v(" "),o("div",{staticClass:"member"},[t._v("\n                "+t._s(t.team.name)+"\n            ")]),t._v(" "),o("div",{staticClass:"created_at"},[o("font-awesome-icon",{attrs:{icon:["fas","redo"]}}),t._v(" "),o("span",[t._v(t._s(t.getDate(t.created_at)))])],1),t._v(" "),t.work_link?o("work-link",{attrs:{to:t.work_link}}):t._e(),t._v(" "),o("div",{staticClass:"tag_title"},[o("font-awesome-icon",{attrs:{icon:["fas","tags"]}}),t._v(" "),o("span",[t._v("タグ")])],1),t._v(" "),o("tag-list",{staticClass:"tags",attrs:{tags:t.tags}})],1)],1),t._v(" "),o("div",{staticClass:"header_bottom"},[o("div",{staticClass:"description"},[t._v(t._s(t.description))])])],1)}),[],!1,null,"0496a727",null);e.default=component.exports;installComponents(component,{WorkLink:o(340).default})}}]);