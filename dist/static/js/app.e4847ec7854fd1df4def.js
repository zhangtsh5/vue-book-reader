webpackJsonp([1],{0:function(t,e){},1:function(t,e){},"4/se":function(t,e,i){"use strict";var n={props:{navigation:Object,ifShowContent:Boolean,bookAvailable:Boolean},methods:{jumpTo:function(t){this.$emit("jumpTo",t)}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-right"}},[i("div",{staticClass:"content"},[t.bookAvailable?i("div",{staticClass:"content-wrapper"},t._l(t.navigation.toc,function(e,n){return i("div",{key:n,staticClass:"content-item",on:{click:function(i){return t.jumpTo(e.href)}}},[i("span",{staticClass:"text"},[t._v(t._s(e.label))])])}),0):i("div",{staticClass:"empty"},[t._v("Loading...")])])])},staticRenderFns:[]};var o={components:{contentView:i("VU/8")(n,s,!1,function(t){i("FBdd")},"data-v-36a65294",null).exports},props:{ifTitleAndMenuShow:{type:Boolean,default:!1},fontSizeList:Array,defaultFontSize:Number,themeList:Array,defaultTheme:Number,bookAvailable:{type:Boolean,default:!1},navigation:Object},data:function(){return{ifSettingShow:!1,showTag:0,progress:0,ifShowContent:!1}},methods:{showSetting:function(t){this.ifSettingShow=!0,this.showTag=t,3===this.showTag?(this.ifSettingShow=!1,this.ifShowContent=!0):this.ifSettingShow=!0},hideSetting:function(){this.ifSettingShow=!1},setFontSize:function(t){this.$emit("setFontSize",t)},setTheme:function(t){this.$emit("setTheme",t)},onProgressInput:function(t){this.progress=t,this.$refs.progress.style.backgroundSize=this.progress+"% 100%"},onProgressChange:function(t){this.$emit("onProgressChange",t)},jumpTo:function(t){this.$emit("jumpTo",t)},hideContent:function(){this.ifShowContent=!1}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu-bar"},[i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleAndMenuShow,expression:"ifTitleAndMenuShow"}],staticClass:"menu-wrapper",class:{"hide-box-shadow":t.ifSettingShow||!t.ifTitleAndMenuShow}},[i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-menu icon",on:{click:function(e){return t.showSetting(3)}}})]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-progress icon",on:{click:function(e){return t.showSetting(2)}}})]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-brightness icon",on:{click:function(e){return t.showSetting(1)}}})]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-font icon",on:{click:function(e){return t.showSetting(0)}}},[t._v("A")])])])]),t._v(" "),i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifSettingShow,expression:"ifSettingShow"}],staticClass:"setting-wrapper"},[0===t.showTag?i("div",{staticClass:"setting-font-size"},[i("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[0].fontSize+"px"}},[t._v("A")]),t._v(" "),i("div",{staticClass:"select"},t._l(t.fontSizeList,function(e,n){return i("div",{key:n,staticClass:"select-wrapper",on:{click:function(i){return t.setFontSize(e.fontSize)}}},[i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"point-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.defaultFontSize===e.fontSize,expression:"defaultFontSize===item.fontSize"}],staticClass:"point"},[i("div",{staticClass:"small-point"})])]),t._v(" "),i("div",{staticClass:"line"})])}),0),t._v(" "),i("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[t.fontSizeList.length-1].fontSize+"px"}},[t._v("A")])]):1===t.showTag?i("div",{staticClass:"setting-theme"},t._l(t.themeList,function(e,n){return i("div",{key:n,staticClass:"setting-theme-item",on:{click:function(e){return t.setTheme(n)}}},[i("div",{staticClass:"preview",class:{"no-border":"#fff"!==e.style.body.background},style:{background:e.style.body.background}}),t._v(" "),i("div",{staticClass:"text",class:{selected:n===t.defaultTheme}},[t._v(t._s(e.name))])])}),0):2===t.showTag?i("div",{staticClass:"setting-progress"},[i("div",{staticClass:"progress-wrapper"},[i("input",{ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"1",disabled:!t.bookAvailable},domProps:{value:t.progress},on:{change:function(e){return t.onProgressChange(e.target.value)},input:function(e){return t.onProgressInput(e.target.value)}}})]),t._v(" "),i("div",{staticClass:"text-wrapper"},[i("span",[t._v(t._s(t.bookAvailable?t.progress+"%":"loading..."))])])]):t._e()])]),t._v(" "),i("content-view",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],attrs:{ifShowContent:t.ifShowContent,navigation:t.navigation,bookAvailable:t.bookAvailable},on:{jumpTo:t.jumpTo}}),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],staticClass:"content-mask",on:{click:t.hideContent}})])],1)},staticRenderFns:[]};var r=i("VU/8")(o,a,!1,function(t){i("xZYH")},"data-v-c61ac232",null);e.a=r.exports},"4j/y":function(t,e){},FBdd:function(t,e){},G1q7:function(t,e){},GEab:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW");document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("html"),e=window.innerWidth/10;e=e>50?50:e,t.style.fontSize=e+"px"});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},s,!1,function(t){i("4j/y")},null,null).exports,a=i("/ocq"),r=i("rCZ9"),c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-reader"},[i("title-bar",{attrs:{ifTitleAndMenuShow:t.ifTitleAndMenuShow}}),t._v(" "),i("div",{staticClass:"read-wrapper"},[i("div",{attrs:{id:"read"}}),t._v(" "),i("div",{staticClass:"mask"},[i("div",{staticClass:"left",on:{click:t.prevPage}}),t._v(" "),i("div",{staticClass:"center",on:{click:t.toggleTitleAndMenu}}),t._v(" "),i("div",{staticClass:"right",on:{click:t.nextPage}})])]),t._v(" "),i("menu-bar",{ref:"menuBar",attrs:{ifTitleAndMenuShow:t.ifTitleAndMenuShow,fontSizeList:t.fontSizeList,defaultFontSize:t.defaultFontSize,themeList:t.themeList,defaultTheme:t.defaultTheme,bookAvailable:t.bookAvailable,navigation:t.navigation},on:{setFontSize:t.setFontSize,setTheme:t.setTheme,onProgressChange:t.onProgressChange,jumpTo:t.jumpTo}})],1)},staticRenderFns:[]};var l=function(t){i("GEab")},u=i("VU/8")(r.a,c,!1,l,"data-v-5f09eb5e",null).exports;n.a.use(a.a);var h=new a.a({routes:[{path:"/",redirect:"/reader"},{path:"/reader",component:u}]});i("jYjM"),i("G1q7");n.a.config.productionTip=!1,new n.a({el:"#app",router:h,components:{App:o},template:"<App/>"})},f3Vc:function(t,e){},jYjM:function(t,e){},rCZ9:function(t,e,i){"use strict";(function(t){var n=i("tdlb"),s=i("4/se"),o=i("VXRH");t.ePub=o.a,e.a={components:{TitleBar:n.a,MenuBar:s.a},data:function(){return{ifTitleAndMenuShow:!1,fontSizeList:[{fontSize:12},{fontSize:14},{fontSize:16},{fontSize:18},{fontSize:20},{fontSize:22},{fontSize:24}],defaultFontSize:16,themeList:[{name:"默认",style:{body:{color:"#000",background:"#fff"}}},{name:"护眼",style:{body:{color:"#000",background:"#ceeaba"}}},{name:"夜间",style:{body:{color:"#fff",background:"#000"}}},{name:"古典",style:{body:{color:"#000",background:"rgb(241,236,226)"}}}],defaultTheme:0,bookAvailable:!1,navigation:null}},methods:{showEpub:function(){var t=this;this.book=new o.a("static/Steve.epub"),this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:window.innerHeight}),this.rendition.display(),this.themes=this.rendition.themes,this.setFontSize(this.defaultFontSize),this.setTheme(this.defaultTheme),this.book.ready.then(function(){return t.navigation=t.book.navigation,t.book.locations.generate()}).then(function(e){t.locations=t.book.locations,t.bookAvailable=!0})},prevPage:function(){this.rendition&&this.rendition.prev()},nextPage:function(){this.rendition.next()},toggleTitleAndMenu:function(){this.ifTitleAndMenuShow=!this.ifTitleAndMenuShow,this.ifTitleAndMenuShow||this.$refs.menuBar.hideSetting()},setFontSize:function(t){this.defaultFontSize=t,this.themes&&this.themes.fontSize(t+"px")},registerTheme:function(){var t=this;this.themeList.forEach(function(e){t.themes.register(e.name,e.style)})},setTheme:function(t){this.themes.select(this.themeList[t].name),this.defaultTheme=t},onProgressChange:function(t){var e=t/100,i=e>0?this.locations.cfiFromPercentage(e):0;this.rendition.display(i)},hideTitleAndMenu:function(){this.ifTitleAndMenuShow=!1,this.$refs.menuBar.hideSetting(),this.$refs.menuBar.hideContent()},jumpTo:function(t){this.rendition.display(t),this.hideTitleAndMenu()}},mounted:function(){this.showEpub()}}}).call(e,i("DuR2"))},tdlb:function(t,e,i){"use strict";var n={props:{ifTitleAndMenuShow:{type:Boolean,default:!1}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide-down"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.ifTitleAndMenuShow,expression:"ifTitleAndMenuShow"}],staticClass:"title-wrapper"},[e("div",{staticClass:"left"},[e("span",{staticClass:"icon-back icon"})]),this._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"icon-wrapper"},[e("span",{staticClass:"icon-cart icon"})]),this._v(" "),e("div",{staticClass:"icon-wrapper"},[e("span",{staticClass:"icon-person icon"})]),this._v(" "),e("div",{staticClass:"icon-wrapper"},[e("span",{staticClass:"icon-more icon"})])])])])},staticRenderFns:[]};var o=i("VU/8")(n,s,!1,function(t){i("f3Vc")},"data-v-3c93cd4c",null);e.a=o.exports},xZYH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e4847ec7854fd1df4def.js.map