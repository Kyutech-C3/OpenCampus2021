(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{284:function(t,e,o){var content=o(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("2166f2df",content,!0,{sourceMap:!1})},285:function(t,e,o){var content=o(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("1887a1a2",content,!0,{sourceMap:!1})},306:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o(90);var r=o(123);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},317:function(t,e,o){"use strict";o(284)},318:function(t,e,o){var n=o(21)(!1);n.push([t.i,".comment-list-wrapper[data-v-6e606598]{margin-left:7%}.comment-wrapper[data-v-6e606598]{margin-bottom:10px;background-color:hsla(0,0%,93.3%,.33333);border-radius:5px}.comment-name[data-v-6e606598]{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:5px 5px 0}.comment-text[data-v-6e606598]{padding:0 5px}.comment-name[data-v-6e606598]::-moz-selection,.comment-text[data-v-6e606598]::-moz-selection{background:rgba(69,101,134,.23922)}.comment-name[data-v-6e606598]::selection,.comment-text[data-v-6e606598]::selection{background:rgba(69,101,134,.23922)}.comment-date[data-v-6e606598]{font-size:11px;text-align:right;padding:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),t.exports=n},319:function(t,e,o){"use strict";o(285)},320:function(t,e,o){var n=o(21)(!1);n.push([t.i,".icon[data-v-7785e96a]{margin-right:7px}label[data-v-7785e96a]{display:block}.title[data-v-7785e96a]{font-size:20px}.comment-form-wrapper[data-v-7785e96a]{margin-left:7%;margin-bottom:20px}.username-form[data-v-7785e96a]{width:35%;margin-bottom:10px;height:25px;font-size:16px}.comment-form[data-v-7785e96a],.username-form[data-v-7785e96a]{border:none;outline:none;background-color:#eee;border-radius:3px}.comment-form[data-v-7785e96a]{padding:5px;font-size:14px;resize:none;overflow:hidden;width:100%;margin-right:10px}.comment-wrapper[data-v-7785e96a]{position:relative}.comment-list-opener[data-v-7785e96a]{position:absolute;left:50%;transform:translateX(-50%);border-radius:3px;border:0 solid #c2c2c2;background-color:transparent;font-weight:700;cursor:pointer}.comment-list-opener[data-v-7785e96a]:hover{opacity:.5}.send-button[data-v-7785e96a]{font-size:15px;margin:10px 0;padding:3px 32px;border-radius:6px;background-color:transparent;border:2px solid #777;cursor:pointer;transition:.3s}.send-button[data-v-7785e96a]:hover{background-color:#777;color:#fff}.comment-form[data-v-7785e96a]::-moz-selection,.username-form[data-v-7785e96a]::-moz-selection{background:rgba(69,101,134,.23922)}.comment-form[data-v-7785e96a]::selection,.username-form[data-v-7785e96a]::selection{background:rgba(69,101,134,.23922)}.send-button[data-v-7785e96a],.title[data-v-7785e96a],label[data-v-7785e96a]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),t.exports=n},347:function(t,e,o){var content=o(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("0064bc1a",content,!0,{sourceMap:!1})},349:function(t,e,o){"use strict";o.r(e);var n=o(306),r=(o(266),o(185),o(63),o(43),{props:{comment_list:{default:[]}},methods:{getDate:function(t){var e=new Date(t);return"".concat(e.getFullYear(),"/").concat(this.zeroPadding(e.getMonth()+1,2),"/").concat(this.zeroPadding(e.getDate(),2)," ").concat(this.zeroPadding(e.getHours(),2),":").concat(this.zeroPadding(e.getMinutes(),2),":").concat(this.zeroPadding(e.getSeconds(),2))},zeroPadding:function(t,e){return("0000000000"+t).slice(-e)}}}),c=(o(317),o(12)),m={components:{comment:Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comment-list-wrapper"},t._l(t.comment_list,(function(e){return o("div",{key:e.id,staticClass:"comment-wrapper"},[o("p",{staticClass:"comment-name"},[t._v(t._s(e.name))]),t._v(" "),o("p",{staticClass:"comment-text"},[t._v(t._s(e.text))]),t._v(" "),o("p",{staticClass:"comment-date"},[t._v(t._s(t.getDate(e.created_at)))])])})),0)}),[],!1,null,"6e606598",null).exports},props:{work_num:{type:Number,require:!0},comment_list:{type:Array,require:!0}},data:function(){return{author_name:"Guest",comment:"",is_open:!1,is_open_icon_list:["∨ もっと見る","∧ 閉じる"],is_open_icon:"∨ もっと見る",comments:[],preview_comments:[]}},mounted:function(){this.comments=this.comment_list,this.preview_comments=this.comments.splice(0,2)},methods:{SwitchCommentList:function(){this.is_open=!this.is_open,this.is_open_icon=this.is_open_icon_list[this.is_open?1:0]},submitComment:function(){var t=this;console.log(this.author_name,this.comment);var e={name:this.author_name,text:this.comment};this.$axios.post("/works/"+String(this.work_num)+"/comments/",e).then((function(e){t.comments=[].concat(Object(n.a)(t.comments),[e.data])})).catch((function(t){alert(t),console.error(t)})),this.comment="",this.is_open||this.SwitchCommentList()}}},d=(o(319),Object(c.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comment"},[o("p",{staticClass:"title"},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","comment-dots"]}}),t._v("コメントする")],1),t._v(" "),o("form",{staticClass:"comment-form-wrapper",on:{submit:function(e){return e.preventDefault(),t.submitComment.apply(null,arguments)}}},[o("label",[t._v("ニックネーム")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.author_name,expression:"author_name"}],staticClass:"username-form",attrs:{name:"author",type:"text",required:""},domProps:{value:t.author_name},on:{input:function(e){e.target.composing||(t.author_name=e.target.value)}}}),t._v(" "),o("label",[t._v("コメント")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"comment-form",attrs:{name:"comments",type:"text",required:"",rows:"4"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),o("button",{staticClass:"send-button",attrs:{type:"submit"}},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:"paper-plane"}}),t._v("送信")],1)]),t._v(" "),o("p",{staticClass:"title"},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:"comments"}}),t._v("コメント")],1),t._v(" "),o("div",{staticClass:"comment-wrapper"},[o("comment",{attrs:{comment_list:t.preview_comments}}),t._v(" "),t.is_open?o("comment",{attrs:{comment_list:t.comments}}):t._e(),t._v(" "),t.comments.length>0?o("button",{staticClass:"comment-list-opener",on:{click:t.SwitchCommentList}},[t._v(t._s(t.is_open_icon))]):t._e()],1)])}),[],!1,null,"7785e96a",null));e.default=d.exports},369:function(t,e,o){"use strict";o(347)},370:function(t,e,o){var n=o(21)(!1);n.push([t.i,".page-wrapper[data-v-0a874f20]{width:80%;margin:auto}.header[data-v-0a874f20]{margin-bottom:30px}.comments[data-v-0a874f20]{padding-bottom:60px}@media screen and (max-width:1300px){.page-wrapper[data-v-0a874f20]{width:100%;margin:auto}}",""]),t.exports=n},379:function(t,e,o){"use strict";o.r(e);var n=o(6),r=(o(44),o(349)),c=o(375),m=o(86),d={components:{Comment:r.default,Header:c.default,Footer:m.default},data:function(){return{work_data:{}}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.params,n=t.$axios,console.log("hoge"),e.next=4,n.get("works/"+o.work).catch((function(t){alert(t),console.error(t)}));case 4:return r=e.sent,console.log(r),e.abrupt("return",{work_data:r.data});case 7:case"end":return e.stop()}}),e)})))()}},l=(o(369),o(12)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-wrapper"},[o("Header",{staticClass:"header",attrs:{title:t.work_data.title,team:t.work_data.team,tags:t.work_data.tags,description:t.work_data.description,card_image:t.work_data.card_image,work_id:t.work_data.id,download_link:t.work_data.download_link,goods:t.work_data.goods,media_assets:t.work_data.media_assets,created_at:t.work_data.created_at}}),t._v(" "),o("Comment",{staticClass:"comments",attrs:{work_num:t.work_data.id,comment_list:t.work_data.comments}})],1)}),[],!1,null,"0a874f20",null);e.default=component.exports;installComponents(component,{Header:o(85).default})}}]);