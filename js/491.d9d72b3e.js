"use strict";(self["webpackChunkworks"]=self["webpackChunkworks"]||[]).push([[491],{6450:function(e,t,o){o.d(t,{Z:function(){return D}});var a=o(3396),l=o(7139);const s={class:"modal fade",id:"delModal",ref:"modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n={class:"modal-dialog modal-dialog-centered",role:"document"},i={class:"modal-content"},d={class:"modal-header bg-danger text-white"},p={key:0,class:"modal-title",id:"exampleModalLabel"},c={key:1,class:"modal-title",id:"delProduct"},u={key:2,class:"modal-title",id:"delOrder"},r=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),m={key:0,class:"modal-body"},h={class:"text-danger"},g={key:1,class:"modal-body"},b={class:"text-danger"},_={key:2,class:"modal-body"},C={class:"text-danger"},w={class:"modal-footer"},v=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function f(e,t,o,f,k,y){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",n,[(0,a._)("div",i,[(0,a._)("div",d,[o.item.title?((0,a.wg)(),(0,a.iD)("h5",p,"刪除 "+(0,l.zw)(o.item.title),1)):o.item.product?((0,a.wg)(),(0,a.iD)("h5",c,"刪除 "+(0,l.zw)(o.item.product.title),1)):o.item.id?((0,a.wg)(),(0,a.iD)("h5",u,"刪除 "+(0,l.zw)(o.item.id),1)):(0,a.kq)("",!0),r]),o.item.title?((0,a.wg)(),(0,a.iD)("div",m,[(0,a.Uk)(" 是否刪除 "),(0,a._)("strong",h,(0,l.zw)(o.item.title),1),(0,a.Uk)(" (刪除後將無法恢復)。 ")])):o.item.product?((0,a.wg)(),(0,a.iD)("div",g,[(0,a.Uk)(" 是否刪除 "),(0,a._)("strong",b,(0,l.zw)(o.item.product.title),1),(0,a.Uk)(" (刪除後將無法恢復)。 ")])):o.item.id?((0,a.wg)(),(0,a.iD)("div",_,[(0,a.Uk)(" 是否刪除 "),(0,a._)("strong",C,(0,l.zw)(o.item.id),1),(0,a.Uk)(" (刪除後將無法恢復)。 ")])):(0,a.kq)("",!0),(0,a._)("div",w,[v,(0,a._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t[0]||(t[0]=t=>e.$emit("del-item"))},"確定刪除")])])])],512)}var k=o(1339),y={props:{item:{}},data(){return{modal:{}}},mixins:[k.Z]},M=o(89);const x=(0,M.Z)(y,[["render",f]]);var D=x},5047:function(e,t,o){o.d(t,{Z:function(){return _}});var a=o(3396),l=o(7139),s=o(9242);const n={"aria-label":"Page navigation example"},i={class:"pagination justify-content-center"},d=(0,a._)("span",{"aria-hidden":"true"},"«",-1),p=[d],c=["onClick"],u=(0,a._)("span",{"aria-hidden":"true"},"»",-1),r=[u];function m(e,t,o,d,u,m){return(0,a.wg)(),(0,a.iD)("nav",n,[(0,a._)("ul",i,[(0,a._)("li",{class:(0,l.C_)(["page-item",{disabled:!o.pages.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,s.iM)((e=>m.updatePage(o.pages.current_page-1)),["prevent"]))},p)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.pages.total_pages,(e=>((0,a.wg)(),(0,a.iD)("li",{class:(0,l.C_)(["page-item",{active:e===o.pages.current_page}]),key:e},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((t=>m.updatePage(e)),["prevent"])},(0,l.zw)(e),9,c)],2)))),128)),(0,a._)("li",{class:(0,l.C_)(["page-item",{disabled:!o.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,s.iM)((e=>m.updatePage(o.pages.current_page+1)),["prevent"]))},r)],2)])])}var h={props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e)}}},g=o(89);const b=(0,g.Z)(h,[["render",m]]);var _=b},5491:function(e,t,o){o.r(t),o.d(t,{default:function(){return Y}});var a=o(3396),l=o(7139);const s={class:"text-end"},n={class:"table-responsive mt-4 text-nowrap"},i={class:"table"},d=(0,a._)("thead",null,[(0,a._)("tr",{class:"border-dark"},[(0,a._)("th",{scope:"col"},"名稱"),(0,a._)("th",{scope:"col"},"優惠碼"),(0,a._)("th",{scope:"col",width:"120px"},"折扣百分比"),(0,a._)("th",{scope:"col",width:"150px"},"到期日"),(0,a._)("th",{scope:"col",width:"100px"},"是否啟用"),(0,a._)("th",{scope:"col",width:"200px"},"編輯")])],-1),p={key:0,class:"text-success"},c={key:1,class:"text-muted"},u={class:"btn-group"},r=["onClick"],m=["onClick"];function h(e,t,o,h,g,b){const _=(0,a.up)("LoadingOverlay"),C=(0,a.up)("CouponModal"),w=(0,a.up)("DelModal"),v=(0,a.up)("PaginationSelect");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(_,{active:g.isLoading},null,8,["active"]),(0,a._)("div",s,[(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=e=>b.openCouponModal(!0))},"新增優惠券")]),(0,a._)("div",n,[(0,a._)("table",i,[d,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.coupons,(t=>((0,a.wg)(),(0,a.iD)("tr",{class:"align-middle",key:t.id},[(0,a._)("td",null,(0,l.zw)(t.title),1),(0,a._)("td",null,(0,l.zw)(t.code),1),(0,a._)("td",null,(0,l.zw)(t.percent)+"%",1),(0,a._)("td",null,(0,l.zw)(e.$filters.date(t.due_date)),1),(0,a._)("td",null,[t.is_enabled?((0,a.wg)(),(0,a.iD)("span",p,"啟用")):((0,a.wg)(),(0,a.iD)("span",c,"未啟用"))]),(0,a._)("td",null,[(0,a._)("div",u,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:e=>b.openCouponModal(!1,t)},"編輯",8,r),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:e=>b.openDelCouponModal(t)},"刪除",8,m)])])])))),128))])])]),(0,a.Wm)(C,{ref:"couponModal",coupon:g.tempCoupon,onUpdateCoupon:b.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,a.Wm)(w,{ref:"delModal",item:g.tempCoupon,onDelItem:b.delCoupon},null,8,["item","onDelItem"]),g.pagination.total_pages?((0,a.wg)(),(0,a.j4)(v,{key:0,pages:g.pagination,onEmitPages:b.getCoupons},null,8,["pages","onEmitPages"])):(0,a.kq)("",!0)],64)}var g=o(9242);const b={class:"modal fade",id:"couponModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},_={class:"modal-dialog"},C={class:"modal-content"},w=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},f={class:"mb-3"},k=(0,a._)("label",{for:"title",class:"form-label"},"標題",-1),y={class:"mb-3"},M=(0,a._)("label",{for:"coupon_code",class:"form-label"},"優惠碼",-1),x={class:"mb-3"},D=(0,a._)("label",{for:"due_date",class:"form-label"},"到期日",-1),$={class:"mb-3"},L=(0,a._)("label",{for:"percent",class:"form-label"},"折扣百分比",-1),U={class:"form-check"},z=(0,a._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),P={class:"modal-footer"},S=(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Z(e,t,o,l,s,n){return(0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("div",_,[(0,a._)("div",C,[w,(0,a._)("div",v,[(0,a._)("div",f,[k,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":t[0]||(t[0]=e=>s.tempCoupon.title=e)},null,512),[[g.nr,s.tempCoupon.title]])]),(0,a._)("div",y,[M,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"coupon_code",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[1]||(t[1]=e=>s.tempCoupon.code=e)},null,512),[[g.nr,s.tempCoupon.code]])]),(0,a._)("div",x,[D,(0,a.wy)((0,a._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=e=>s.due_date=e)},null,512),[[g.nr,s.due_date]])]),(0,a._)("div",$,[L,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"percent",placeholder:"請輸入折扣百分比","onUpdate:modelValue":t[3]||(t[3]=e=>s.tempCoupon.percent=e)},null,512),[[g.nr,s.tempCoupon.percent,void 0,{number:!0}]])]),(0,a._)("div",U,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",id:"is_enabled","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=e=>s.tempCoupon.is_enabled=e)},null,512),[[g.e8,s.tempCoupon.is_enabled]]),z])]),(0,a._)("div",P,[S,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>e.$emit("update-coupon",s.tempCoupon))},"確定")])])])],512)}var V=o(1339),j={props:{coupon:{type:Object,default(){return{}}}},watch:{coupon(){this.tempCoupon=this.coupon;const e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date).getTime()/1e3)}},data(){return{modal:{},tempCoupon:{},due_date:""}},mixins:[V.Z]},N=o(89);const O=(0,N.Z)(j,[["render",Z]]);var q=O,H=o(5047),I=o(6450),T={data(){return{coupons:[],pagination:{},tempCoupon:{percent:100},isNew:!1,isLoading:!1}},components:{CouponModal:q,DelModal:I.Z,PaginationSelect:H.Z},inject:["$httpMessageState"],methods:{getCoupons(e=1){const t=`https://vue3-course-api.hexschool.io/api/shoppingmall-api/admin/coupons?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{e.data.success&&(this.coupons=e.data.coupons,this.pagination=e.data.pagination),this.isLoading=!1})).catch((e=>{this.$httpMessageState(e,"連線"),this.isLoading=!1}))},openCouponModal(e,t){this.tempCoupon=e?{due_date:Math.floor((new Date).getTime()/1e3)}:{...t},this.isNew=e;const o=this.$refs.couponModal;o.showModal()},updateCoupon(e){this.isLoading=!0,this.tempCoupon=e;let t="https://vue3-course-api.hexschool.io/api/shoppingmall-api/admin/coupon",o="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/api/shoppingmall-api/admin/coupon/${e.id}`,o="put");const a=this.$refs.couponModal;this.$http[o](t,{data:this.tempCoupon}).then((e=>{e.data.success&&this.getCoupons(),a.hideModal(),this.isLoading=!1,this.$httpMessageState(e,"新增優惠券")})).catch((e=>{this.$httpMessageState(e,"連線"),this.isLoading=!1}))},openDelCouponModal(e){this.tempCoupon={...e};const t=this.$refs.delModal;t.showModal()},delCoupon(){const e=`https://vue3-course-api.hexschool.io/api/shoppingmall-api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(e).then((e=>{const t=this.$refs.delModal;e.data.success&&this.getCoupons(),t.hideModal(),this.isLoading=!1,this.$httpMessageState(e,"刪除優惠券")})).catch((e=>{this.$httpMessageState(e,"連線"),this.isLoading=!1}))}},created(){this.getCoupons()}};const W=(0,N.Z)(T,[["render",h]]);var Y=W}}]);
//# sourceMappingURL=491.d9d72b3e.js.map