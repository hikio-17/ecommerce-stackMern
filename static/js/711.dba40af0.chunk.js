"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[711],{51249:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(74165),a=t(15861),o=t(1413),s=t(29439),c=t(72791),i=t(16429),l=t(9085),u=t(87309),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},f=t(67285),m=function(e,n){return c.createElement(f.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:d}))};m.displayName="MailOutlined";var h=c.forwardRef(m),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"}}]},name:"google",theme:"outlined"},g=function(e,n){return c.createElement(f.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:p}))};g.displayName="GoogleOutlined";var v=c.forwardRef(g),x=t(59434),Z=t(91523),w=t(26958),k=t(80184),y=function(e){var n=e.history,t=(0,c.useState)(""),d=(0,s.Z)(t,2),f=d[0],m=d[1],p=(0,c.useState)(""),g=(0,s.Z)(p,2),y=g[0],j=g[1],N=(0,c.useState)(!1),b=(0,s.Z)(N,2),E=b[0],C=b[1],I=(0,x.v9)((function(e){return(0,o.Z)({},e)})).user;(0,c.useEffect)((function(){n.location.state}),[I,n]);var L=(0,x.I0)(),_=function(e){var t=n.location.state;t?n.push(t.from):"admin"===e.data.role?n.push("/admin/dashboard"):n.push("/user/history")},z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),C(!0),e.prev=2,e.next=5,i.I.signInWithEmailAndPassword(f,y);case 5:return t=e.sent,a=t.user,e.next=9,a.getIdTokenResult();case 9:o=e.sent,(0,w.XB)(o.token).then((function(e){L({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:o.token,role:e.data.role,_id:e.data._id}}),_(e)})).catch((function(e){return console.log(e)})),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),l.Am.error(e.t0.message),C(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.I.signInWithPopup(i.q).then(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.user,e.next=3,t.getIdTokenResult();case 3:a=e.sent,(0,w.XB)(a.token).then((function(e){L({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:a.token,role:e.data.role,_id:e.data._id}}),_(e)})).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),l.Am.error(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,k.jsx)("div",{className:"container p-5",children:(0,k.jsx)("div",{className:"row",children:(0,k.jsxs)("div",{className:"col-md-6 offset-md-3",children:[E?(0,k.jsx)("h4",{className:"text-danger",children:"Loading..."}):(0,k.jsx)("h4",{children:"Login"}),(0,k.jsxs)("form",{onSubmit:z,children:[(0,k.jsx)("div",{className:"form-group",children:(0,k.jsx)("input",{type:"email",className:"form-control",value:f,onChange:function(e){return m(e.target.value)},placeholder:"Your email",autoFocus:!0})}),(0,k.jsx)("div",{className:"form-group",children:(0,k.jsx)("input",{type:"password",className:"form-control",value:y,onChange:function(e){return j(e.target.value)},placeholder:"Your password"})}),(0,k.jsx)("br",{}),(0,k.jsx)(u.Z,{onClick:z,type:"primary",className:"mb-3",block:!0,shape:"round",icon:(0,k.jsx)(h,{}),size:"large",disabled:!f||y.length<6,children:"Login with Email/Password"})]}),(0,k.jsx)(u.Z,{onClick:S,type:"danger",className:"mb-3",block:!0,shape:"round",icon:(0,k.jsx)(v,{}),size:"large",children:"Login with Google"}),(0,k.jsx)(Z.rU,{to:"/forgot/password",className:"float-right text-danger",children:"Forgot Password"})]})})})}},61113:function(e,n,t){t.d(n,{Tm:function(){return o},l$:function(){return a}});var r=t(72791),a=r.isValidElement;function o(e,n){return function(e,n,t){return a(e)?r.cloneElement(e,"function"===typeof t?t(e.props||{}):t):n}(e,e,n)}},1815:function(e,n,t){t.d(n,{q:function(){return o}});var r=t(72791),a=r.createContext(void 0),o=function(e){var n=e.children,t=e.size;return r.createElement(a.Consumer,null,(function(e){return r.createElement(a.Provider,{value:t||e},n)}))};n.Z=a}}]);
//# sourceMappingURL=711.dba40af0.chunk.js.map