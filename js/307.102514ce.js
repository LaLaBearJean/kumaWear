"use strict";(self["webpackChunkworks"]=self["webpackChunkworks"]||[]).push([[307],{6450:function(t,e,l){l.d(e,{Z:function(){return M}});var a=l(3396),o=l(7139);const s={class:"modal fade",id:"delModal",ref:"modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},i={class:"modal-dialog modal-dialog-centered",role:"document"},d={class:"modal-content"},c={class:"modal-header bg-danger text-white"},r={key:0,class:"modal-title",id:"exampleModalLabel"},n={key:1,class:"modal-title",id:"delProduct"},p={key:2,class:"modal-title",id:"delOrder"},u=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),m={key:0,class:"modal-body"},g={class:"text-danger"},h={key:1,class:"modal-body"},b={class:"text-danger"},_={key:2,class:"modal-body"},f={class:"text-danger"},P={class:"modal-footer"},w=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function y(t,e,l,y,v,k){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",i,[(0,a._)("div",d,[(0,a._)("div",c,[l.item.title?((0,a.wg)(),(0,a.iD)("h5",r,"刪除 "+(0,o.zw)(l.item.title),1)):l.item.product?((0,a.wg)(),(0,a.iD)("h5",n,"刪除 "+(0,o.zw)(l.item.product.title),1)):l.item.id?((0,a.wg)(),(0,a.iD)("h5",p,"刪除 "+(0,o.zw)(l.item.id),1)):(0,a.kq)("",!0),u]),l.item.title?((0,a.wg)(),(0,a.iD)("div",m,[(0,a.Uk)(" 是否刪除 "),(0,a._)("strong",g,(0,o.zw)(l.item.title),1),(0,a.Uk)(" (刪除後將無法恢復)。 ")])):l.item.product?((0,a.wg)(),(0,a.iD)("div",h,[(0,a.Uk)(" 是否刪除 "),(0,a._)("strong",b,(0,o.zw)(l.item.product.title),1),(0,a.Uk)(" (刪除後將無法恢復)。 ")])):l.item.id?((0,a.wg)(),(0,a.iD)("div",_,[(0,a.Uk)(" 是否刪除 "),(0,a._)("strong",f,(0,o.zw)(l.item.id),1),(0,a.Uk)(" (刪除後將無法恢復)。 ")])):(0,a.kq)("",!0),(0,a._)("div",P,[w,(0,a._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e[0]||(e[0]=e=>t.$emit("del-item"))},"確定刪除")])])])],512)}var v=l(1339),k={props:{item:{}},data(){return{modal:{}}},mixins:[v.Z]},x=l(89);const U=(0,x.Z)(k,[["render",y]]);var M=U},5047:function(t,e,l){l.d(e,{Z:function(){return _}});var a=l(3396),o=l(7139),s=l(9242);const i={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},c=(0,a._)("span",{"aria-hidden":"true"},"«",-1),r=[c],n=["onClick"],p=(0,a._)("span",{"aria-hidden":"true"},"»",-1),u=[p];function m(t,e,l,c,p,m){return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("ul",d,[(0,a._)("li",{class:(0,o.C_)(["page-item",{disabled:!l.pages.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,s.iM)((t=>m.updatePage(l.pages.current_page-1)),["prevent"]))},r)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,o.C_)(["page-item",{active:t===l.pages.current_page}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>m.updatePage(t)),["prevent"])},(0,o.zw)(t),9,n)],2)))),128)),(0,a._)("li",{class:(0,o.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,s.iM)((t=>m.updatePage(l.pages.current_page+1)),["prevent"]))},u)],2)])])}var g={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},h=l(89);const b=(0,h.Z)(g,[["render",m]]);var _=b},8307:function(t,e,l){l.r(e),l.d(e,{default:function(){return bt}});var a=l(3396),o=l(7139);const s={class:"text-end text-nowrap"},i={class:"table-responsive mt-4 text-nowrap"},d={class:"table"},c=(0,a._)("thead",null,[(0,a._)("tr",{class:"border-dark"},[(0,a._)("th",{scope:"col",width:"120px"},"分類"),(0,a._)("th",{scope:"col"},"產品名稱"),(0,a._)("th",{scope:"col",width:"120px"},"原價"),(0,a._)("th",{scope:"col",width:"120px"},"售價"),(0,a._)("th",{scope:"col",width:"100px"},"是否啟用"),(0,a._)("th",{scope:"col",width:"200px"},"編輯")])],-1),r={class:"text-right"},n={class:"text-right"},p={key:0,class:"text-success"},u={key:1,class:"text-muted"},m={class:"btn-group"},g=["onClick"],h=["onClick"];function b(t,e,l,b,_,f){const P=(0,a.up)("LoadingOverlay"),w=(0,a.up)("ProductModal"),y=(0,a.up)("DelModal"),v=(0,a.up)("PaginationSelect");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(P,{active:_.isLoading},null,8,["active"]),(0,a._)("div",s,[(0,a._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>f.openModal(!0))},"新增產品")]),(0,a._)("div",i,[(0,a._)("table",d,[c,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.products,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id,class:"align-middle"},[(0,a._)("td",null,(0,o.zw)(e.category),1),(0,a._)("td",null,(0,o.zw)(e.title),1),(0,a._)("td",r,(0,o.zw)(t.$filters.currency(e.origin_price)),1),(0,a._)("td",n,(0,o.zw)(t.$filters.currency(e.price)),1),(0,a._)("td",null,[e.is_enabled?((0,a.wg)(),(0,a.iD)("span",p,"啟用")):((0,a.wg)(),(0,a.iD)("span",u,"未啟用"))]),(0,a._)("td",null,[(0,a._)("div",m,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:t=>f.openModal(!1,e)},"編輯",8,g),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:t=>f.openDelProductModal(e)},"刪除",8,h)])])])))),128))])])]),(0,a.Wm)(w,{ref:"productModal",product:_.tempProduct,onUpdateProduct:f.updateProduct},null,8,["product","onUpdateProduct"]),(0,a.Wm)(y,{ref:"delModal",item:_.tempProduct,onDelItem:f.delProduct},null,8,["item","onDelItem"]),_.pagination.total_pages?((0,a.wg)(),(0,a.j4)(v,{key:0,pages:_.pagination,onEmitPages:f.getProducts},null,8,["pages","onEmitPages"])):(0,a.kq)("",!0)],64)}l(7658);var _=l(9242);const f={class:"modal fade",id:"exampleModal",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},P={class:"modal-dialog modal-xl",role:"document"},w={class:"modal-content"},y=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},"新增產品"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},k={class:"row"},x={class:"col-sm-4"},U={class:"mb-3"},M=(0,a._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),D={class:"mb-3"},$=(0,a._)("label",{for:"customFile",class:"form-label"},"或 上傳圖片",-1),C=["src","alt"],V={key:0,class:"mt-5"},Z=["onUpdate:modelValue"],z=["onClick"],F=["onChange"],L=["src","alt"],S={key:0},I={class:"col-sm-8"},q={class:"mb-3"},j=(0,a._)("label",{for:"title",class:"form-label"},"標題",-1),H={class:"row row-cols-md-2 row-cols-1 gx-2"},N={class:"col mb-3"},Y=(0,a._)("label",{for:"category",class:"form-label"},"分類",-1),K={class:"col mb-3"},O=(0,a._)("label",{for:"unit",class:"form-label"},"單位",-1),W={class:"row row-cols-md-2 row-cols-1 gx-2"},E={class:"col mb-3"},A=(0,a._)("label",{for:"origin_price",class:"form-label"},"原價",-1),B={class:"col mb-3"},G=(0,a._)("label",{for:"price",class:"form-label"},"售價",-1),J=(0,a._)("hr",null,null,-1),Q={class:"mb-3"},R=(0,a._)("label",{for:"description",class:"form-label"},"產品描述",-1),T={class:"mb-3"},X=(0,a._)("label",{for:"content",class:"form-label"},"說明內容",-1),tt={class:"mb-3"},et={class:"form-check"},lt=(0,a._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),at={class:"modal-footer"},ot=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function st(t,e,l,o,s,i){return(0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",P,[(0,a._)("div",w,[y,(0,a._)("div",v,[(0,a._)("div",k,[(0,a._)("div",x,[(0,a._)("div",U,[M,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片網址","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.imageUrl=t)},null,512),[[_.nr,s.tempProduct.imageUrl]])]),(0,a._)("div",D,[$,(0,a._)("input",{class:"form-control",type:"file",id:"customFile",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>i.uploadFile&&i.uploadFile(...t))},null,544)]),(0,a._)("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:s.tempProduct.title},null,8,C),s.tempProduct.imagesUrl?((0,a.wg)(),(0,a.iD)("div",V,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.tempProduct.imagesUrl,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"input-group mb-3"},[(0,a.wy)((0,a._)("input",{type:"url",class:"form-control",placeholder:"請輸入連結","onUpdate:modelValue":t=>s.tempProduct.imagesUrl[e]=t},null,8,Z),[[_.nr,s.tempProduct.imagesUrl[e]]]),(0,a._)("button",{class:"btn btn-outline-danger",type:"button",onClick:t=>s.tempProduct.imagesUrl.splice(e,1)},"移除",8,z),(0,a._)("input",{class:"form-control w-100 my-1",type:"file",ref_for:!0,ref:"filesInput",onChange:t=>i.uploadFiles(e)},null,40,F),(0,a._)("img",{class:"img-fluid",src:s.tempProduct.imagesUrl[e],alt:`${s.tempProduct.title}${e+1}`},null,8,L)])))),128)),s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]&&s.tempProduct.imagesUrl.length<5||!s.tempProduct.imagesUrl.length?((0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("button",{type:"button",class:"btn btn-outline-primary w-100 d-block",onClick:e[2]||(e[2]=t=>s.tempProduct.imagesUrl.push(""))},"新增圖片")])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)]),(0,a._)("div",I,[(0,a._)("div",q,[j,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.title=t)},null,512),[[_.nr,s.tempProduct.title]])]),(0,a._)("div",H,[(0,a._)("div",N,[Y,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.category=t)},null,512),[[_.nr,s.tempProduct.category]])]),(0,a._)("div",K,[O,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.unit=t)},null,512),[[_.nr,s.tempProduct.unit]])])]),(0,a._)("div",W,[(0,a._)("div",E,[A,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.origin_price=t)},null,512),[[_.nr,s.tempProduct.origin_price]])]),(0,a._)("div",B,[G,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.price=t)},null,512),[[_.nr,s.tempProduct.price]])])]),J,(0,a._)("div",Q,[R,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.description=t)},null,512),[[_.nr,s.tempProduct.description]])]),(0,a._)("div",T,[X,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProduct.content=t)},null,512),[[_.nr,s.tempProduct.content]])]),(0,a._)("div",tt,[(0,a._)("div",et,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",id:"is_enabled","true-value":1,"false-value":0,"onUpdate:modelValue":e[10]||(e[10]=t=>s.tempProduct.is_enabled=t)},null,512),[[_.e8,s.tempProduct.is_enabled]]),lt])])])])]),(0,a._)("div",at,[ot,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("update-product",s.tempProduct))},"確定")])])])],512)}var it=l(1339),dt=l(7587),ct={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[])}},data(){return{modal:{},tempProduct:{}}},mixins:[it.Z],methods:{uploadFile(){const t=this.$refs.fileInput,e=new FormData;e.append("file-to-upload",t.files[0]);const l="https://vue3-course-api.hexschool.io/api/shoppingmall-api/admin/upload";this.$http.post(l,e).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)})).catch((t=>{(0,dt.Z)(t,"連線")}))},uploadFiles(t){const e=this.$refs.filesInput[t],l=new FormData;l.append("file-to-upload",e.files[0]);const a="https://vue3-course-api.hexschool.io/api/shoppingmall-api/admin/upload";this.$http.post(a,l).then((e=>{e.data.success&&(this.tempProduct.imagesUrl[t]=e.data.imageUrl)})).catch((t=>{(0,dt.Z)(t,"連線")}))},clearFileValue(){const t=this.$refs.fileInput;t.value=""}}},rt=l(89);const nt=(0,rt.Z)(ct,[["render",st]]);var pt=nt,ut=l(6450),mt=l(5047),gt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:pt,DelModal:ut.Z,PaginationSelect:mt.Z},inject:["emitter","$httpMessageState"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/shoppingmall-api/admin/products?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{t.data.success&&(this.products=t.data.products,this.pagination=t.data.pagination),this.isLoading=!1})).catch((t=>{this.$httpMessageState(t,"連線"),this.isLoading=!1}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const l=this.$refs.productModal;l.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/shoppingmall-api/admin/product",l="post",a=1;this.isNew||(e=`https://vue3-course-api.hexschool.io/api/shoppingmall-api/admin/product/${t.id}`,l="put",a=this.pagination.current_page);const o=this.$refs.productModal;this.$http[l](e,{data:this.tempProduct}).then((t=>{o.hideModal(),o.clearFileValue(),t.data.success&&this.getProducts(a),this.$httpMessageState(t,"更新")})).catch((t=>{this.$httpMessageState(t,"連線")}))},openDelProductModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=this.$refs.delModal,e=`https://vue3-course-api.hexschool.io/api/shoppingmall-api/admin/product/${this.tempProduct.id}`;this.$http.delete(e).then((e=>{t.hideModal(),this.getProducts(),this.$httpMessageState(e,"刪除")})).catch((t=>{this.$httpMessageState(t,"連線")}))}},created(){this.getProducts()}};const ht=(0,rt.Z)(gt,[["render",b]]);var bt=ht}}]);
//# sourceMappingURL=307.102514ce.js.map