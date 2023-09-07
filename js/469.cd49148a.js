"use strict";(self["webpackChunkworks"]=self["webpackChunkworks"]||[]).push([[469],{5047:function(t,i,e){e.d(i,{Z:function(){return m}});var s=e(3396),a=e(7139),l=e(9242);const o={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},r=(0,s._)("span",{"aria-hidden":"true"},"«",-1),c=[r],d=["onClick"],h=(0,s._)("span",{"aria-hidden":"true"},"»",-1),p=[h];function u(t,i,e,r,h,u){return(0,s.wg)(),(0,s.iD)("nav",o,[(0,s._)("ul",n,[(0,s._)("li",{class:(0,a.C_)(["page-item",{disabled:!e.pages.has_pre}])},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i[0]||(i[0]=(0,l.iM)((t=>u.updatePage(e.pages.current_page-1)),["prevent"]))},c)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.pages.total_pages,(t=>((0,s.wg)(),(0,s.iD)("li",{class:(0,a.C_)(["page-item",{active:t===e.pages.current_page}]),key:t},[(0,s._)("a",{class:"page-link",href:"#",onClick:(0,l.iM)((i=>u.updatePage(t)),["prevent"])},(0,a.zw)(t),9,d)],2)))),128)),(0,s._)("li",{class:(0,a.C_)(["page-item",{disabled:!e.pages.has_next}])},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:i[1]||(i[1]=(0,l.iM)((t=>u.updatePage(e.pages.current_page+1)),["prevent"]))},p)],2)])])}var g={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},_=e(89);const f=(0,_.Z)(g,[["render",u]]);var m=f},8469:function(t,i,e){e.r(i),e.d(i,{default:function(){return j}});var s=e(3396),a=e(9242),l=e(7139);const o={class:"row mb-4"},n={class:"col-lg-3"},r={class:"link-hover-color sticky-top",style:{top:"65px"}},c=(0,s._)("div",{class:"d-flex justify-content-between"},[(0,s._)("p",null,"商品分類"),(0,s._)("i",{class:"bi bi-caret-down"})],-1),d=[c],h={class:"list-unstyled ps-3 lh-lg collapse",ref:"collapse"},p={class:"col-lg-9"},u={class:"row row-cols-2 row-cols-md-3"},g={class:"card border-0 h-100 position-relative"},_=["onClick"],f={class:"product-img"},m=["src","alt"],v={class:"card-body text-center"},k={class:"card-title text-black"},w={class:"card-text h5 fw-bold text-warning"},C={class:"text-secondary m-0"},P={class:"card-body p-0"},b={class:"d-flex align-items-center"},y=["onClick","disabled"],M=["onClick"],x=(0,s._)("i",{class:"bi bi-heart fs-4"},null,-1),$=[x],L=["onClick"],S=(0,s._)("i",{class:"bi bi-heart-fill fs-4"},null,-1),W=[S];function D(t,i,e,c,x,S){const D=(0,s.up)("LoadingOverlay"),I=(0,s.up)("PaginationSelect");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(D,{active:x.isLoading},null,8,["active"]),(0,s._)("div",o,[(0,s._)("div",n,[(0,s._)("div",r,[(0,s._)("a",{href:"#",onClick:i[0]||(i[0]=(0,a.iM)(((...i)=>t.toggleCollapse&&t.toggleCollapse(...i)),["prevent"]))},d),(0,s._)("ul",h,[(0,s._)("li",null,[(0,s._)("a",{href:"#",onClick:i[1]||(i[1]=(0,a.iM)(((...t)=>S.getProductsAll&&S.getProductsAll(...t)),["prevent"]))},"全部商品")]),(0,s._)("li",null,[(0,s._)("a",{href:"#",onClick:i[2]||(i[2]=(0,a.iM)((t=>S.filterProducts("TOP")),["prevent"]))},"上身")]),(0,s._)("li",null,[(0,s._)("a",{href:"#",onClick:i[3]||(i[3]=(0,a.iM)((t=>S.filterProducts("Bottom")),["prevent"]))},"下身")]),(0,s._)("li",null,[(0,s._)("a",{href:"#",onClick:i[4]||(i[4]=(0,a.iM)((t=>S.filterProducts("Dress")),["prevent"]))},"洋裝")]),(0,s._)("li",null,[(0,s._)("a",{href:"#",onClick:i[5]||(i[5]=(0,a.iM)((t=>S.filterProducts("Acc")),["prevent"]))},"飾品")]),(0,s._)("li",null,[(0,s._)("a",{href:"#",onClick:i[6]||(i[6]=(0,a.iM)((t=>S.filterProducts("Decoration")),["prevent"]))},"裝飾品")]),(0,s._)("li",null,[(0,s._)("a",{href:"#",onClick:i[7]||(i[7]=(0,a.iM)((t=>S.filterProducts("skincare")),["prevent"]))},"保養品")])],512)])]),(0,s._)("div",p,[(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(x.products,(i=>((0,s.wg)(),(0,s.iD)("div",{class:"col product-list mb-3",key:i.id},[(0,s._)("div",g,[(0,s._)("a",{href:"#",class:"text-decoration-none h-100",onClick:(0,a.iM)((t=>S.getProduct(i.id)),["prevent"])},[(0,s._)("div",f,[(0,s._)("img",{src:i.imageUrl,alt:i.title,class:"card-img-top rounded-0 object-fit-cover w-100",style:{height:"145px"}},null,8,m)]),(0,s._)("div",v,[(0,s._)("h5",k,(0,l.zw)(i.title),1),(0,s._)("p",w,"NT$ "+(0,l.zw)(t.$filters.currency(i.price)),1),(0,s._)("del",C,"NT$ "+(0,l.zw)(t.$filters.currency(i.origin_price)),1)])],8,_),(0,s._)("div",P,[(0,s._)("div",b,[(0,s._)("button",{type:"button",class:"btn btn-outline-secondary w-100",onClick:t=>S.addCart(i.id),disabled:x.status.loadingItem===i.id},"加入購物車",8,y),S.isFavProduct(i.id)?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("a",{key:0,href:"#",class:"link-danger favProduct",onClick:(0,a.iM)((t=>S.addWishList(i)),["prevent"])},$,8,M)),S.isFavProduct(i.id)?((0,s.wg)(),(0,s.iD)("a",{key:1,href:"#",class:"link-danger favProduct",onClick:(0,a.iM)((t=>S.removeWishList(i)),["prevent"])},W,8,L)):(0,s.kq)("",!0)])])])])))),128))])])]),(0,s.Wm)(I,{pages:x.pagination,onEmitPages:S.getProducts},null,8,["pages","onEmitPages"])],64)}e(7658);var I=e(903),N=e(5047),O={data(){return{products:[],pagination:{},wishlist:JSON.parse(localStorage.getItem("wishlist"))||[],Collapse:"",status:{loadingItem:""},isLoading:!1}},watch:{pagination(){document.documentElement.scrollTop=0}},inject:["$httpMessageState","emitter","reload","updateWishQty"],mixins:[I.Z],components:{PaginationSelect:N.Z},methods:{getProducts(t=1){const i=`https://vue3-course-api.hexschool.io/api/shoppingmall-api/products?page=${t}`;this.isLoading=!0,this.$http.get(i).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1})).catch((t=>{this.$httpMessageState(t,"連線"),this.isLoading=!1}))},filterProducts(t){const i="https://vue3-course-api.hexschool.io/api/shoppingmall-api/products/all";this.isLoading=!0,this.$http.get(i).then((i=>{this.products=i.data.products.filter((i=>i.category===t)),this.pagination={total_pages:1,current_page:1,has_pre:!1,has_next:!1,category:t},document.body.offsetWidth<992&&this.hideCollapse(),this.isLoading=!1})).catch((t=>{this.$httpMessageState(t,"連線"),this.isLoading=!1}))},getProductsAll(){this.getProducts(),document.body.offsetWidth<992&&this.hideCollapse()},getProduct(t){this.$router.push(`/user/product/${t}`)},addCart(t){const i="https://vue3-course-api.hexschool.io/api/shoppingmall-api/cart";this.status.loadingItem=t,this.isLoading=!0;const e={product_id:t,qty:1};this.$http.post(i,{data:e}).then((t=>{this.status.loadingItem="",this.reload(),this.isLoading=!1,setTimeout((()=>{this.$httpMessageState(t,"加入購物車")}))})).catch((t=>{this.$httpMessageState(t,"連線")}))},isFavProduct(t){return this.wishlist.some((i=>i.id===t))},addWishList(t){this.wishlist.push(t),localStorage.setItem("wishlist",JSON.stringify(this.wishlist)),this.updateWishQty(this.wishlist.length),this.emitter.emit("push-message",{style:"success",title:`${t.title}已加入最愛`})},removeWishList(t){this.wishlist=this.wishlist.filter((i=>i.id!==t.id)),localStorage.setItem("wishlist",JSON.stringify(this.wishlist)),this.updateWishQty(this.wishlist.length),this.emitter.emit("push-message",{style:"danger",title:`${t.title}已刪除最愛商品`})}},created(){this.getProducts()},mounted(){document.body.offsetWidth>992&&this.toggleCollapse()}},T=e(89);const Z=(0,T.Z)(O,[["render",D]]);var j=Z}}]);
//# sourceMappingURL=469.cd49148a.js.map