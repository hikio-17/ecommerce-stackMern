"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[547],{32099:function(e,n,t){t(72791);var r=t(80184);n.Z=function(e){var n=e.handleSubmit,t=e.setName,a=e.name;return(0,r.jsx)("form",{onSubmit:n,children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{children:"Name"}),(0,r.jsx)("input",{className:"form-control",type:"text",value:a,onChange:function(e){return t(e.target.value)},autoFocus:!0,required:!0}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{className:"btn btn-outline-primary",children:"Save"})]})})}},50514:function(e,n,t){t(72791);var r=t(80184);n.Z=function(e){var n=e.keyword,t=e.setKeyword;return(0,r.jsx)("input",{type:"search",className:"form-control mb-4",value:n,onChange:function(e){e.preventDefault(),t(e.target.value.toLowerCase())},placeholder:"Filter"})}},77834:function(e,n,t){t(72791);var r=t(91523),a=t(80184);n.Z=function(){return(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{className:"nav flex-column",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/product",className:"nav-link",children:"Product"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/products",className:"nav-link",children:"Products"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/category",className:"nav-link",children:"Category"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/sub",className:"nav-link",children:"Sub Category"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/user/password",className:"nav-link",children:"Password"})})]})})}},86729:function(e,n,t){t.d(n,{CP:function(){return o},Gu:function(){return d},k4:function(){return m},n3:function(){return u},sT:function(){return i},yr:function(){return l}});var r=t(74165),a=t(15861),c=t(74569),s=t.n(c),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommerce-stackmern.herokuapp.com/api","/categories"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommerce-stackmern.herokuapp.com/api","/category/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().delete("".concat("https://ecommerce-stackmern.herokuapp.com/api","/category/").concat(n),{headers:{authtoken:t}}));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().put("".concat("https://ecommerce-stackmern.herokuapp.com/api","/category/").concat(n),t,{headers:{authtoken:a}}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://ecommerce-stackmern.herokuapp.com/api","/category"),n,{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://ecommerce-stackmern.herokuapp.com/api","/category/subs/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},78547:function(e,n,t){t.r(n);var r=t(29439),a=t(1413),c=t(72791),s=t(59434),o=t(91523),u=t(77834),i=t(9085),l=t(86729),m=t(82622),d=t(31752),h=t(32099),f=t(50514),p=t(80184);n.default=function(){var e=(0,s.v9)((function(e){return(0,a.Z)({},e)})).user,n=(0,c.useState)(""),t=(0,r.Z)(n,2),v=t[0],x=t[1],k=(0,c.useState)(!1),Z=(0,r.Z)(k,2),j=Z[0],N=Z[1],g=(0,c.useState)([]),w=(0,r.Z)(g,2),b=w[0],y=w[1],C=(0,c.useState)(""),S=(0,r.Z)(C,2),U=S[0],L=S[1];(0,c.useEffect)((function(){z()}),[]);var z=function(){return(0,l.CP)().then((function(e){return y(e.data)}))};return(0,p.jsx)("div",{className:"container-fluid",children:(0,p.jsxs)("div",{className:"row mt-3",children:[(0,p.jsx)("div",{className:"col-md-2",children:(0,p.jsx)(u.Z,{})}),(0,p.jsxs)("div",{className:"col-md-10",children:[j?(0,p.jsx)("h4",{className:"text-danger",children:"Loading..."}):(0,p.jsx)("h4",{children:"Create category"}),(0,p.jsx)(h.Z,{handleSubmit:function(n){n.preventDefault(),N(!0),(0,l.k4)({name:v},e.token).then((function(e){N(!1),x(""),i.Am.success("".concat(e.data.name," is Created!")),z()})).catch((function(e){N(!1),400===e.response.status&&i.Am.error(e.response.data)}))},name:v,setName:x}),(0,p.jsx)(f.Z,{keyword:U,setKeyword:L}),b.filter(function(e){return function(n){return n.name.toLowerCase().includes(e)}}(U)).map((function(n){return(0,p.jsxs)("div",{className:"alert alert-secondary",children:[n.name," ",(0,p.jsx)("span",{className:"btn btn-sm float-right",onClick:function(){return t=n.slug,N(!0),void(window.confirm("delete ?")&&(0,l.sT)(t,e.token).then((function(e){N(!1),i.Am.error("".concat(e.data.name," is deleted!")),z()})).catch((function(e){N(!1),"400"===e.response.status&&i.Am.error(e.response.data)})));var t},children:(0,p.jsx)(m.Z,{className:"text-danger"})}),(0,p.jsx)(o.rU,{to:"/admin/category/".concat(n.slug),children:(0,p.jsx)("span",{className:"btn btn-sm float-right",children:(0,p.jsx)(d.Z,{className:"text-info"})})})]},n._id)}))]})]})})}},82622:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),a=t(72791),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},s=t(67285),o=function(e,n){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:c}))};o.displayName="DeleteOutlined";var u=a.forwardRef(o)},31752:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),a=t(72791),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},s=t(67285),o=function(e,n){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:c}))};o.displayName="EditOutlined";var u=a.forwardRef(o)}}]);
//# sourceMappingURL=547.37b4f84f.chunk.js.map