"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[375],{2066:function(e,n,t){var r=t(1413),a=(t(72791),t(3466)),c=t.n(a),s=t(74569),o=t.n(s),u=t(59434),i=t(75594),l=t(67734),p=t(80184);n.Z=function(e){var n=e.values,t=e.setValues,a=e.setLoading,s=(0,u.v9)((function(e){return(0,r.Z)({},e)})).user;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"row",children:n.images&&n.images.map((function(e){return(0,p.jsx)(i.Z,{count:"X",onClick:function(){return c=e.public_id,a(!0),void o().post("".concat("https://ecommerce-stackmern.herokuapp.com/api","/removeimages"),{public_id:c},{headers:{authtoken:s?s.token:""}}).then((function(e){a(!1);var s=n.images.filter((function(e){return e.public_id!==c}));t((0,r.Z)((0,r.Z)({},n),{},{images:s}))})).catch((function(e){console.log(e),a(!1)}));var c},style:{cursor:"pointer"},children:(0,p.jsx)(l.C,{src:e.url,size:100,shape:"square",className:"ml-3"})},e.public_id)}))}),(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("label",{className:"btn btn-primary btn-raised mt-3",children:["Choose File",(0,p.jsx)("input",{type:"file",multiple:!0,hidden:!0,accept:"images/*",onChange:function(e){var u=e.target.files,i=n.images;if(u){a(!0);for(var l=0;l<u.length;l++)c().imageFileResizer(u[l],720,720,"JPEG",100,0,(function(e){o().post("".concat("https://ecommerce-stackmern.herokuapp.com/api","/uploadimages"),{image:e},{headers:{authtoken:s?s.token:""}}).then((function(e){a(!1),i.push(e.data),t((0,r.Z)((0,r.Z)({},n),{},{images:i}))})).catch((function(e){a(!1),console.log("CLOUDINARY UPLOAD ERR",e)}))}),"base64")}}})]})})]})}},77834:function(e,n,t){t(72791);var r=t(91523),a=t(80184);n.Z=function(){return(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{className:"nav flex-column",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/product",className:"nav-link",children:"Product"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/products",className:"nav-link",children:"Products"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/category",className:"nav-link",children:"Category"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/sub",className:"nav-link",children:"Sub Category"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/user/password",className:"nav-link",children:"Password"})})]})})}},86729:function(e,n,t){t.d(n,{CP:function(){return o},Gu:function(){return m},k4:function(){return p},n3:function(){return u},sT:function(){return i},yr:function(){return l}});var r=t(74165),a=t(15861),c=t(74569),s=t.n(c),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommerce-stackmern.herokuapp.com/api","/categories"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommerce-stackmern.herokuapp.com/api","/category/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().delete("".concat("https://ecommerce-stackmern.herokuapp.com/api","/category/").concat(n),{headers:{authtoken:t}}));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().put("".concat("https://ecommerce-stackmern.herokuapp.com/api","/category/").concat(n),t,{headers:{authtoken:a}}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://ecommerce-stackmern.herokuapp.com/api","/category"),n,{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommerce-stackmern.herokuapp.com/api","/category/subs/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},57027:function(e,n,t){t.d(n,{Ej:function(){return d},RB:function(){return x},Xp:function(){return m},Y2:function(){return h},cE:function(){return f},kh:function(){return i},nM:function(){return p},ry:function(){return o},su:function(){return u},wv:function(){return l}});var r=t(74165),a=t(15861),c=t(74569),s=t.n(c),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://ecommerce-stackmern.herokuapp.com/api","/product"),n,{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommerce-stackmern.herokuapp.com/api","/products/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("".concat("https://ecommerce-stackmern.herokuapp.com/api","/product/").concat(n),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommerce-stackmern.herokuapp.com/api","/product/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().put("".concat("https://ecommerce-stackmern.herokuapp.com/api","/product/").concat(n),t,{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://ecommerce-stackmern.herokuapp.com/api","/products"),{sort:n,order:t,page:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommerce-stackmern.herokuapp.com/api","/products/total"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().put("".concat("https://ecommerce-stackmern.herokuapp.com/api","/product/star/").concat(n),{star:t},{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommerce-stackmern.herokuapp.com/api","/product/related/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://ecommerce-stackmern.herokuapp.com/api","/search/filters"),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},97375:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(4942),a=t(1413),c=t(29439),s=t(72791),o=t(59434),u=t(77834),i=t(9085),l=t(57027),p=t(42220),m=t(80184),h=p.Z.Option,d=function(e){var n=e.handleSubmit,t=e.handleChange,r=e.values,c=e.handleCategoryChange,s=e.subOptions,o=e.showSub,u=e.setValues,i=r.title,l=r.description,d=r.price,f=r.categories,x=(r.category,r.subs),v=(r.shipping,r.quantity),g=(r.images,r.colors),k=r.brands;r.color,r.brand;return(0,m.jsxs)("form",{onSubmit:n,children:[(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Title"}),(0,m.jsx)("input",{type:"text",name:"title",className:"form-control",value:i,onChange:t})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Description"}),(0,m.jsx)("textarea",{name:"description",type:"textarea",className:"form-control",value:l,onChange:t,cols:10,rows:10})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Price"}),(0,m.jsx)("input",{type:"text",name:"price",className:"form-control",value:d,onChange:t})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Shipping"}),(0,m.jsxs)("select",{name:"shipping",className:"form-control",onChange:t,children:[(0,m.jsx)("option",{children:"Please select"}),(0,m.jsx)("option",{value:"No",children:"No"}),(0,m.jsx)("option",{value:"Yes",children:"Yes"})]})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Quantity"}),(0,m.jsx)("input",{type:"number",name:"quantity",className:"form-control",value:v,onChange:t})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Color"}),(0,m.jsxs)("select",{name:"color",className:"form-control",onChange:t,children:[(0,m.jsx)("option",{children:"Please select"}),g.map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))]})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Brand"}),(0,m.jsxs)("select",{name:"brand",className:"form-control",onChange:t,children:[(0,m.jsx)("option",{children:"Please select"}),k.map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))]})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Category"}),(0,m.jsxs)("select",{name:"category",className:"form-control",onChange:c,children:[(0,m.jsx)("option",{children:"Please select"}),f.length>0&&f.map((function(e){return(0,m.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),o&&(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{children:"Sub Categories"}),(0,m.jsx)(p.Z,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",value:x,onChange:function(e){return u((0,a.Z)((0,a.Z)({},r),{},{subs:e}))},children:s.length>0&&s.map((function(e){return(0,m.jsx)(h,{value:e._id,children:e.name},e._id)}))})]}),(0,m.jsx)("br",{}),(0,m.jsx)("button",{className:"btn btn-outline-info",children:"Save"})]})},f=t(86729),x=t(2066),v=t(77106),g=t(28931),k={title:"",description:"",price:"",categories:[],category:"",subs:[],shipping:"",quantity:"",images:[],colors:["Black","Brown","Silver","White","Blue"],brands:["Apple","Samsung","Microsoft","Lenovo","ASUS"],color:"",brand:""},j=function(){var e=(0,s.useState)(k),n=(0,c.Z)(e,2),t=n[0],p=n[1],h=(0,s.useState)([]),j=(0,c.Z)(h,2),Z=j[0],b=j[1],w=(0,s.useState)(!1),y=(0,c.Z)(w,2),N=y[0],C=y[1],S=(0,s.useState)(!1),P=(0,c.Z)(S,2),U=P[0],_=P[1],D=(0,g.k6)(),A=(0,o.v9)((function(e){return(0,a.Z)({},e)})).user;(0,s.useEffect)((function(){B()}),[]);var B=function(){return(0,f.CP)().then((function(e){return p((0,a.Z)((0,a.Z)({},t),{},{categories:e.data}))}))};return(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsxs)("div",{className:"row mt-3",children:[(0,m.jsx)("div",{className:"col-md-2",children:(0,m.jsx)(u.Z,{})}),(0,m.jsxs)("div",{className:"col-md-10",children:[U?(0,m.jsx)(v.Z,{className:"text-danger h1 pb-2 text-center"}):(0,m.jsx)("h4",{className:"pb-2 text-center",children:"Create product page"}),(0,m.jsx)("hr",{}),(0,m.jsx)("div",{className:"p-3",children:(0,m.jsx)(x.Z,{values:t,setValues:p,setLoading:_})}),(0,m.jsx)(d,{handleChange:function(e){p((0,a.Z)((0,a.Z)({},t),{},(0,r.Z)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),(0,l.ry)(t,A.token).then((function(e){console.log(e),window.alert('"'.concat(e.data.title,'" is created ?')),D.push("/admin/products")})).catch((function(e){console.log(e),i.Am.error(e.response.data.err)}))},setValues:p,values:t,handleCategoryChange:function(e){e.preventDefault(),p((0,a.Z)((0,a.Z)({},t),{},{subs:[],category:e.target.value})),(0,f.Gu)(e.target.value).then((function(e){b(e.data)})),C(!0)},subOptions:Z,showSub:N})]})]})})}}}]);
//# sourceMappingURL=375.fe084e8a.chunk.js.map