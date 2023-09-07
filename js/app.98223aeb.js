(function(){"use strict";var e={4785:function(e,t,n){var o=n(9242),a=n(4161),i=n(6423),s=n(5708),r=n(3990),l=n(579),c=n(2389),d=n(3396);function u(e,t,n,o,a,i){const s=(0,d.up)("router-view");return a.isRouterAlive?((0,d.wg)(),(0,d.j4)(s,{key:0})):(0,d.kq)("",!0)}var p={provide(){return{reload:this.reload}},data(){return{isRouterAlive:!0}},methods:{reload(){this.isRouterAlive=!1,this.$nextTick((()=>{this.isRouterAlive=!0}))}}},h=n(89);const f=(0,h.Z)(p,[["render",u]]);var m=f,b=n(2483);function g(e,t,n,o,a,i){const s=(0,d.up)("Navbar"),r=(0,d.up)("FrontPage"),l=(0,d.up)("FooterInfo"),c=(0,d.up)("ScrollTop"),u=(0,d.up)("UserCouponModal");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d.Wm)(s),(0,d.Wm)(r),(0,d.Wm)(l),(0,d.Wm)(c),(0,d.Wm)(u,{ref:"couponModal"},null,512)],64)}var v=n(7716),w=n(7139),y=n.p+"img/cotton.a8149d7d.jpg",k=n.p+"img/selectProduct.2a2b37be.jpg";const x={class:"p-3 text-center text-light bg-dark-gradient"},_=(0,d._)("h2",null,"KumaWear選品小店",-1),C=(0,d._)("p",{class:"h4"},"天然 x 舒適 x 簡約",-1),j=(0,d.uE)('<section class="container mb-5"><div class="row row-cols-1 row-cols-lg-2 flex-lg-row-reverse"><div class="col d-flex align-items-center"><div class="text-center"><h3 class="fw-bold">有機棉</h3><p class="lh-lg">我們的衣服都是選用有機棉，有機棉是從非轉基因改造的棉花種子通過有機種植的棉花，並且不使用任何合成農業化學品，如肥料或殺蟲劑。讓大家穿得安心又舒適。</p><p class="lh-lg">產品皆通過CU認證，Control Union World Group(管制聯盟全球集團)公司1920年成立於荷蘭，長期從事檢驗認證服務，是荷蘭知名的檢驗認證機構。</p></div></div><div class="col"><img class="w-100 object-fit-cover" src="'+y+'" alt="cotton"></div></div><div class="row row-cols-1 row-cols-lg-2 mt-3"><div class="col d-flex align-items-center"><div class="text-center"><h3 class="fw-bold">嚴選好物</h3><p class="lh-lg">我們的選品不僅是衣服，還包含了裝飾品、保養品，都是親身使用過，想找最好的產品用最實惠的價格給大家，唯有確認過品質才敢販售給客人。</p><p>請大家安心挑選，保證會再次回購</p></div></div><div class="col"><img class="w-100 object-fit-cover" src="'+k+'" alt="嚴選商品"></div></div></section><section class="bg-light p-4 text-center"><h2 class="fw-bold mb-4">2023 July. 7/16 Opening</h2><ul class="list-unstyled lh-lg"><li><i class="bi bi-airplane"></i> 不限金額免運 free shipping</li><li><i class="bi bi-heart-fill"></i> 單筆滿2000贈送愛心手機鍊</li><li><i class="bi bi-c-circle"></i> 輸入折扣碼「junopen666」即享9折優惠</li><li><i class="bi bi-facebook"></i> 8/31前到FB按讚即可參加抽獎</li><li><i class="bi bi-instagram"></i> 8/31前到IG分享貼文即可參加抽獎</li></ul><p>--------------------------------------------</p><h4 class="fw-bold">購物須知</h4><ol class="d-flex flex-column align-items-center lh-lg"><li>訂單付款完成後，不接受任何理由改單</li><li>付款方式提供線上刷卡、ATM轉帳、超商取貨付款</li><li>寄送方式提供宅配、四大超商(7-11、全家、萊爾富、OK)</li><li>提供7天鑑賞期，每筆訂單提供退換貨乙次</li><li>若商品缺件、瑕疵請於收到貨48小時內拍照與我們反應</li></ol></section>',2);function T(e,t,n,a,i,s){return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("header",{class:"header mb-5 d-flex justify-content-center align-items-center bg-size-cover bg-position-center",style:(0,w.j5)({backgroundImage:"url("+i.banner+")"})},[(0,d._)("div",x,[_,C,(0,d._)("a",{href:"#",class:"btn btn-outline-light btn-lg",onClick:t[0]||(t[0]=(0,o.iM)(((...e)=>s.goShopping&&s.goShopping(...e)),["prevent"]))},"進店逛逛")])],4),j],64)}n(7658);var Z=n.p+"img/banner.54317b61.jpg",S={data(){return{banner:Z}},methods:{goShopping(){this.$router.push("/user/productlist")}}};const M=(0,h.Z)(S,[["render",T]]);var O=M,W=n(8596),P=n(7719);const $={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},E={class:"modal-dialog modal-dialog-centered modal-sm"},U={class:"modal-content"},F=(0,d._)("div",{class:"modal-header border-bottom-0"},[(0,d._)("h5",{class:"modal-title",id:"exampleModalLabel"},"新品優惠"),(0,d._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),I={class:"modal-body py-0"},Q={class:"userCoupon d-flex justify-content-center align-items-center"},A={class:"mb-0 pe-2",ref:"coupontext"},D=(0,d._)("i",{class:"bi bi-clipboard fs-4"},null,-1),L=(0,d._)("i",{class:"bi bi-check2 fs-4"},null,-1),N=[D,L],q=(0,d._)("div",{class:"modal-footer border-top-0 justify-content-start pt-0"},[(0,d._)("p",null,"不限金額打8折")],-1);function z(e,t,n,a,i,s){return(0,d.wg)(),(0,d.iD)("div",$,[(0,d._)("div",E,[(0,d._)("div",U,[F,(0,d._)("div",I,[(0,d._)("div",Q,[(0,d._)("p",A,"newinjuly",512),(0,d._)("a",{href:"#",class:"link-secondary",ref:"copyCoupon",onClick:t[0]||(t[0]=(0,o.iM)(((...e)=>s.copyCoupon&&s.copyCoupon(...e)),["prevent"]))},N,512)])]),q])])],512)}var R=n(1339),B={mixins:[R.Z],data(){return{modal:{}}},methods:{copyCoupon(){navigator.clipboard.writeText(this.$refs.coupontext.textContent).then((()=>{this.$refs.copyCoupon.classList.add("copy-coupon"),setTimeout((()=>{this.hideModal()}),1e3)}))}}};const H=(0,h.Z)(B,[["render",z]]);var J=H,K={components:{Navbar:v.Z,FrontPage:O,FooterInfo:W.Z,ScrollTop:P.Z,UserCouponModal:J},methods:{openCoupon(){const e=this.$refs.couponModal;e.showModal()}},mounted(){this.openCoupon()}};const V=(0,h.Z)(K,[["render",g]]);var G=V;const Y=[{path:"/",name:"home",component:G},{path:"/login",name:"login",component:()=>n.e(325).then(n.bind(n,9325))},{path:"/dashboard",name:"dashboard",component:()=>n.e(68).then(n.bind(n,68)),children:[{path:"products",name:"products",component:()=>n.e(307).then(n.bind(n,8307))},{path:"orders",name:"orders",component:()=>n.e(935).then(n.bind(n,2935))},{path:"coupons",name:"coupons",component:()=>n.e(491).then(n.bind(n,5491))}]},{path:"/user",name:"user",component:()=>n.e(545).then(n.bind(n,3545)),children:[{path:"productlist",name:"productlist",component:()=>n.e(469).then(n.bind(n,8469))},{path:"product/:productId",name:"product",component:()=>n.e(176).then(n.bind(n,4176))},{path:"cart",name:"cart",component:()=>n.e(314).then(n.bind(n,6314))},{path:"checkout/:orderId",name:"checkout",component:()=>n.e(216).then(n.bind(n,8216))},{path:"orderprocessed",name:"orderprocessed",component:()=>n.e(883).then(n.bind(n,3883))},{path:"wishlist",name:"wishlist",component:()=>n.e(155).then(n.bind(n,155))},{path:"search",name:"search",component:()=>n.e(600).then(n.bind(n,3600)),props:e=>({id:e.query.q})}]},{path:"/:pathMatch(.*)*",redirect:"/"}],X=(0,b.p7)({history:(0,b.r5)(),linkActiveClass:"active",routes:Y,scrollBehavior(e,t,n){return{top:0}}});var ee=X,te=n(6216);function ne(e){const t=parseInt(e,10);return`${t.toFixed(0).replace(/./g,((e,t,n)=>t&&"."!==e&&(n.length-t)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function oe(e){return new Date(1e3*e).toLocaleDateString()}Object.keys(r.ZP).forEach((e=>{(0,s.aH)(e,r.ZP[e])})),(0,s.jQ)({generateMessage:(0,l.NC)({zh_TW:c}),validateOnInput:!0}),(0,l.i_)("zh_TW");const ae=(0,o.ri)(m);ae.config.globalProperties.$filters={currency:ne,date:oe},ae.use(i.Z,a.Z),ae.use(ee),ae.component("LoadingOverlay",te.Z),ae.component("VForm",s.l0),ae.component("VField",s.gN),ae.component("ErrorMessage",s.Bc),ae.mount("#app")},5820:function(e,t,n){var o=n(1373);const a=(0,o.Z)();t["Z"]=a},7587:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(5820);function a(e,t="更新"){if(e.data.success)o.Z.emit("push-message",{style:"success",title:`${t}成功`});else{const n="string"===typeof e.data.message?[e.data.message]:e.data.message;o.Z.emit("push-message",{style:"danger",title:`${t}失敗`,content:n.join("、")})}}},903:function(e,t,n){var o=n(434),a=n.n(o);t["Z"]={methods:{toggleCollapse(){this.Collapse.toggle()},hideCollapse(){this.Collapse.hide()}},mounted(){this.Collapse=new(a())(this.$refs.collapse,{toggle:!1})}}},1339:function(e,t,n){var o=n(7972),a=n.n(o);t["Z"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(a())(this.$refs.modal)}}},8596:function(e,t,n){n.d(t,{Z:function(){return b}});var o=n(3396),a=n(9242);const i={class:"border-top py-4"},s={class:"container"},r={class:"row row-cols-1 row-cols-lg-3 text-center text-lg-start"},l=(0,o.uE)('<div class="col mb-3 mb-lg-0"><h3 class="fw-bold">關於我們</h3><ul class="list-unstyled d-flex justify-content-center justify-content-lg-start"><li class="pe-4"><a href="https://www.instagram.com/" target="_blank" class="link-danger"><i class="bi bi-instagram fs-2"></i></a></li><li class="pe-4"><a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook fs-2"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="bi bi-twitter fs-2"></i></a></li></ul></div><div class="col mb-3 mb-lg-0"><h3 class="fw-bold">聯絡我們</h3><ul class="list-unstyled lh-lg"><li>407台中市西屯區台灣大道三段</li><li><a href="tel:+886-886-886" class="text-decoration-none link-dark">+886 886 886</a></li><li><a href="mailto:service@kumawear.com" class="text-decoration-none link-dark">service@kumawear.com</a></li><li>MON. - FRI. 11:00-20:00 (假日及國定假日除外)</li></ul></div>',2),c={class:"col"},d=(0,o._)("h3",{class:"fw-bold"},"加入我們",-1),u=(0,o._)("p",{class:"mt-3 text-center text-secondary"},[(0,o._)("i",{class:"bi bi-star-fill pe-2"}),(0,o.Uk)("本網頁僅供學習使用，無任何商業用途"),(0,o._)("i",{class:"bi bi-star-fill ps-2"})],-1);function p(e,t,n,p,h,f){return(0,o.wg)(),(0,o.iD)("footer",i,[(0,o._)("div",s,[(0,o._)("div",r,[l,(0,o._)("div",c,[d,(0,o._)("a",{href:"#",class:"btn btn-outline-secondary",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>f.goShopping&&f.goShopping(...e)),["prevent"]))},"購物去")])]),u])])}n(7658);var h={methods:{goShopping(){this.$router.push("/user/productlist")}}},f=n(89);const m=(0,f.Z)(h,[["render",p]]);var b=m},7716:function(e,t,n){n.d(t,{Z:function(){return O}});var o=n(3396),a=n(7139),i=n(9242);const s={class:"navbar navbar-expand-lg navbar-white bg-white my-2 sticky-top"},r={class:"container"},l=(0,o._)("span",{class:"navbar-toggler-icon"},null,-1),c=[l],d={class:"collapse navbar-collapse",id:"navbarSupportedContent",ref:"collapse"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item mx-2"},h=(0,o._)("i",{class:"bi bi-house pe-1"},null,-1),f={class:"nav-item mx-2 dropdown"},m=(0,o._)("i",{class:"bi bi-handbag pe-1"},null,-1),b={class:"nav-item mx-2 position-relative"},g=(0,o._)("i",{class:"bi bi-cart3 pe-1"},null,-1),v={key:0,class:"amount"},w={class:"nav-item mx-2 position-relative"},y=(0,o._)("i",{class:"bi bi-bag-heart pe-1"},null,-1),k={key:0,class:"amount"},x={class:"d-flex text-nowrap"};function _(e,t,n,l,_,C){const j=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",s,[(0,o._)("div",r,[(0,o.Wm)(j,{class:"navbar-brand mb-0 h1",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("KumaWear")])),_:1}),(0,o._)("button",{class:"navbar-toggler",type:"button",onClick:t[0]||(t[0]=(...t)=>e.toggleCollapse&&e.toggleCollapse(...t)),"data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c),(0,o._)("div",d,[(0,o._)("ul",u,[(0,o._)("li",p,[(0,o.Wm)(j,{class:"nav-link","aria-current":"page",to:"/"},{default:(0,o.w5)((()=>[h,(0,o.Uk)("首頁")])),_:1})]),(0,o._)("li",f,[(0,o.Wm)(j,{class:"nav-link",to:"/user/productlist"},{default:(0,o.w5)((()=>[m,(0,o.Uk)("商品列表")])),_:1})]),(0,o._)("li",b,[(0,o.Wm)(j,{class:"nav-link",to:"/user/cart"},{default:(0,o.w5)((()=>[g,_.cartQty?((0,o.wg)(),(0,o.iD)("span",v,(0,a.zw)(_.cartQty),1)):(0,o.kq)("",!0),(0,o.Uk)("購物車")])),_:1})]),(0,o._)("li",w,[(0,o.Wm)(j,{class:"nav-link",to:"/user/wishlist"},{default:(0,o.w5)((()=>[y,_.wishQty?((0,o.wg)(),(0,o.iD)("span",k,(0,a.zw)(_.wishQty),1)):(0,o.kq)("",!0),(0,o.Uk)("喜愛商品")])),_:1})])]),(0,o._)("form",x,[(0,o.wy)((0,o._)("input",{class:"form-control me-2",type:"search",placeholder:"尋找商品","aria-label":"Search","onUpdate:modelValue":t[1]||(t[1]=e=>_.searchText=e)},null,512),[[i.nr,_.searchText]]),(0,o._)("button",{class:"btn btn-outline-warning",type:"button",onClick:t[2]||(t[2]=(...e)=>C.searchProduct&&C.searchProduct(...e))},"搜尋")])],512)])])}n(7658);var C=n(903),j=n(7587),T=n(5820),Z={data(){return{Collapse:"",cartQty:"",wishQty:"",searchText:""}},inject:["reload"],watch:{$route(){document.body.offsetWidth<992&&this.reload()}},mixins:[C.Z],methods:{getCart(){const e="https://vue3-course-api.hexschool.io/api/shoppingmall-api/cart";this.$http.get(e).then((e=>{this.cartQty=e.data.data.carts.length})).catch((e=>{(0,j.Z)(e,"連線")}))},getWishList(){JSON.parse(localStorage.getItem("wishlist"))&&(this.wishQty=JSON.parse(localStorage.getItem("wishlist")).length)},searchProduct(){this.searchText.trim()&&(this.$router.push({path:"/user/search",query:{q:this.searchText.trim()}}),this.searchText="")}},created(){this.getCart(),this.getWishList()},mounted(){T.Z.on("wishQty",(e=>{this.wishQty=e}))}},S=n(89);const M=(0,S.Z)(Z,[["render",_]]);var O=M},7719:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(3396),a=n(9242);const i=(0,o._)("i",{class:"bi bi-arrow-up fs-3"},null,-1),s=[i];function r(e,t,n,i,r,l){return r.isScrollTop?((0,o.wg)(),(0,o.iD)("a",{key:0,href:"#",class:"scrolltop",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>l.goTop&&l.goTop(...e)),["prevent"]))},s)):(0,o.kq)("",!0)}var l={data(){return{isScrollTop:!1}},methods:{goTop(){window.scrollTo(0,0)}},mounted(){window.addEventListener("scroll",(()=>{document.documentElement.scrollTop>100?this.isScrollTop=!0:this.isScrollTop=!1}))}},c=n(89);const d=(0,c.Z)(l,[["render",r]]);var u=d}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,a,i){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],i=e[d][2];for(var r=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(r=!1,i<s&&(s=i));if(r){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{68:"7abd281a",155:"71b6f2dd",176:"9d5641e3",216:"efe146b2",307:"102514ce",314:"c7e63d22",325:"e2f2afa2",469:"cd49148a",491:"d9d72b3e",545:"9f11e56a",600:"5b3492ee",883:"b028edd8",935:"f155aff4"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="works:";n.l=function(o,a,i,s){if(e[o])e[o].push(a);else{var r,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+i){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+i),r.src=o),e[o]=[a];var p=function(t,n){r.onerror=r.onload=null,clearTimeout(h);var a=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/kumaWear/"}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=i);var s=n.p+n.u(t),r=new Error,l=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",r.name="ChunkLoadError",r.type=i,r.request=s,a[1](r)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var d=l(n)}for(t&&t(o);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkworks"]=self["webpackChunkworks"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4785)}));o=n.O(o)})();
//# sourceMappingURL=app.98223aeb.js.map