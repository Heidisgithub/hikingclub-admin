(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(18),a=n.n(i),r=(n(25),n(26),n(11)),s=n(2),o=n(3),u=n(5),l=n.n(u),d=n(9),j=n(10),h=n(0);var b=function(e){return Object(h.jsxs)("div",{className:"hikeCardAdmin",children:[Object(h.jsx)("img",{src:e.imageUrl,alt:""}),Object(h.jsx)("h3",{children:e.title}),Object(h.jsx)("p",{children:e.uuid})]})};var p=function(e){var t=e.show?"modal display-block":"modal display-none",n=Object(c.useRef)(),i=function(t){"Escape"===t.code&&(e.handleClose(),e.closeEditing())},a=function(t){n.current.contains(t.target)||(e.handleClose(),e.closeEditing())};return Object(c.useEffect)((function(){return document.addEventListener("keydown",i),document.addEventListener("mousedown",a),function(){document.removeEventListener("keydown",i),document.removeEventListener("mousedown",a)}}),[]),Object(h.jsx)("div",{className:t,children:Object(h.jsxs)("section",{ref:n,className:"modal-main",children:[e.children,Object(h.jsx)("button",{type:"button",onClick:e.handleClose,children:"Close"})]})})};var O=function(e){return Object(h.jsx)(h.Fragment,{children:e.isEditing?Object(h.jsx)("span",{className:"modalInputField",children:e.children}):Object(h.jsx)("span",{children:e.title})})};var x=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),r=Object(j.a)(a,2),s=r[0],u=r[1],x=Object(c.useState)(!1),m=Object(j.a)(x,2),f=m[0],v=m[1],k=Object(c.useState)({}),g=Object(j.a)(k,2),w=g[0],C=g[1],y=Object(c.useState)(!1),E=Object(j.a)(y,2),N=E[0],U=E[1],H=Object(c.useState)({title:"",imageUrl:"",date:"",description:"",location:""}),I=Object(j.a)(H,2),L=I[0],D=I[1];Object(c.useEffect)((function(){return S()}),[]),Object(c.useEffect)((function(){if(null===w||void 0===w?void 0:w.uuid){var e=F(w.uuid);C(e)}}),[n]);var S=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:"unknown"},"https://wbshikingclub.herokuapp.com/api/hikes",e.prev=2,e.next=5,fetch("https://wbshikingclub.herokuapp.com/api/hikes",{cache:"no-cache"});case 5:if(!(n=e.sent).ok){e.next=12;break}return e.next=9,n.json();case 9:t=e.sent,c=t.map((function(e){return{title:e.title||"",description:e.description||"",location:e.location||"",uuid:e.uuid,imageUrl:e.imageUrl||"https://via.placeholder.com/150",date:e.date||(new Date).toLocaleDateString("fr-ca")}})),i(c);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),t.error=e.t0.message;case 18:return e.abrupt("return",t);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),T=function(){u(!1),v(!1)},F=function(e){return n.find((function(t){return t.uuid===e}))},A=function(e){u(!0);var t=F(e);C(t)},R=function(e){return new Date(e).toLocaleDateString("fr-ca")},B=function(){D({title:"",imageUrl:"",date:"",description:"",location:""}),U(!1)},J=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://wbshikingclub.herokuapp.com/api/hikes",c="".concat("https://wbshikingclub.herokuapp.com/api/hikes","/").concat(n),i={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=5,fetch(c,i);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(L,t);case 2:B(),T(),S();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://wbshikingclub.herokuapp.com/api/hikes",n="".concat("https://wbshikingclub.herokuapp.com/api/hikes","/").concat(t),c={method:"DELETE",headers:{"Content-Type":"application/json"}},T(),e.next=6,fetch(n,c);case 6:return e.next=8,S();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:B();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://wbshikingclub.herokuapp.com/api/hikes",c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("https://wbshikingclub.herokuapp.com/api/hikes",c);case 4:if(!(i=e.sent).ok){e.next=10;break}return e.next=8,i.json();case 8:n=e.sent,D(n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(L);case 2:S(),T(),B();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=Object(h.jsx)("div",{});return s?G=Object(h.jsxs)(p,{show:s,closeEditing:B,handleClose:T,children:[Object(h.jsx)("div",{className:"modalImage",children:Object(h.jsx)("img",{src:w.imageUrl,alt:"hike"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike UUID: "})," ",Object(h.jsx)("span",{children:w.uuid})]}),Object(h.jsxs)("div",{className:"modalButtons",children:[N?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{onClick:function(){return B()},children:"Cancel"}),Object(h.jsx)("button",{onClick:function(){return P(w.uuid)},children:"Update"})]}):Object(h.jsx)("button",{onClick:function(){D(w),U(!0)},children:"Edit Hike Info"}),Object(h.jsx)("button",{onClick:function(){return K(w.uuid)},children:"!!! DELETE HIKE !!!"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike Title: "}),Object(h.jsx)(O,{isEditing:N,title:w.title,children:Object(h.jsx)("input",{type:"text",placeholder:w.title,value:L.title,onChange:function(e){D(Object(o.a)(Object(o.a)({},L),{},{title:e.target.value}))}})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike Image URL: "}),Object(h.jsx)(O,{isEditing:N,title:w.imageUrl,children:Object(h.jsx)("input",{type:"text",placeholder:w.imageUrl,value:L.imageUrl,onChange:function(e){return D(Object(o.a)(Object(o.a)({},L),{},{imageUrl:e.target.value}))}})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike Date: "}),Object(h.jsx)(O,{isEditing:N,title:R(w.date),children:Object(h.jsx)("input",{type:"date",placeholder:R(w.date),value:R(L.date),onChange:function(e){return D(Object(o.a)(Object(o.a)({},L),{},{date:e.target.value}))}})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike Description: "}),Object(h.jsx)(O,{isEditing:N,title:w.description,children:Object(h.jsx)("textarea",{type:"text",placeholder:w.description,value:L.description,onChange:function(e){return D(Object(o.a)(Object(o.a)({},L),{},{description:e.target.value}))}})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike Location: "}),Object(h.jsx)(O,{isEditing:N,title:w.location,children:Object(h.jsx)("input",{type:"text",placeholder:w.location,value:L.location,onChange:function(e){return D(Object(o.a)(Object(o.a)({},L),{},{location:e.target.value}))}})})]})]}):f&&(G=Object(h.jsxs)(p,{create:q,show:f,closeEditing:B,handleClose:T,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike Title: "}),Object(h.jsx)("span",{className:"modalInputField",children:Object(h.jsx)("input",{type:"text",value:L.title,onChange:function(e){D(Object(o.a)(Object(o.a)({},L),{},{title:e.target.value}))}})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike Image URL: "}),Object(h.jsxs)("span",{className:"modalInputField",children:[" ",Object(h.jsx)("input",{type:"text",value:L.imageUrl,onChange:function(e){return D(Object(o.a)(Object(o.a)({},L),{},{imageUrl:e.target.value}))}})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike Date: "}),Object(h.jsxs)("span",{className:"modalInputField",children:[" ",Object(h.jsx)("input",{type:"date",value:R(L.date),onChange:function(e){return D(Object(o.a)(Object(o.a)({},L),{},{date:e.target.value}))}})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike Description: "}),Object(h.jsx)("span",{className:"modalInputField",children:Object(h.jsx)("textarea",{type:"text",value:L.description,onChange:function(e){return D(Object(o.a)(Object(o.a)({},L),{},{description:e.target.value}))}})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Hike Location: "}),Object(h.jsxs)("span",{className:"modalInputField",children:[" ",Object(h.jsx)("input",{type:"text",value:L.location,onChange:function(e){return D(Object(o.a)(Object(o.a)({},L),{},{location:e.target.value}))}})]})]}),Object(h.jsx)("button",{type:"button",onClick:function(){U(!0),z()},children:"Create"})]})),Object(h.jsxs)("div",{className:"hikeList",children:[Object(h.jsx)("button",{className:"createButton",onClick:function(){v(!0)},children:"Create a new hike"}),n.map((function(e){return Object(h.jsx)("div",{onClick:function(){u(!0),A(e.uuid)},children:Object(h.jsx)(b,{title:e.title,uuid:e.uuid,imageUrl:e.imageUrl})},e.uuid)})),G]})};var m=function(){return Object(h.jsxs)("div",{children:["To add, remove or edit News articles, please go to ",Object(h.jsx)("a",{href:"https://www.contentful.com/",children:"Contentful"})]})};var f=function(e){return Object(h.jsxs)("div",{className:"registrationCardAdmin",children:[Object(h.jsx)("p",{children:e.email}),Object(h.jsx)("p",{children:e.name}),Object(h.jsx)("p",{children:e.message}),Object(h.jsxs)("p",{children:["HikeID: ",e.hikeId]})]})};var v=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],a=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:"unknown"},"https://wbshikingclub.herokuapp.com/api/hikes/registrations",e.prev=2,e.next=5,fetch("https://wbshikingclub.herokuapp.com/api/hikes/registrations",{cache:"no-cache"});case 5:if(!(n=e.sent).ok){e.next=12;break}return e.next=9,n.json();case 9:t=e.sent,c=t.map((function(e){return{name:e.name,email:e.email,message:e.message,hikeId:e.hike_uuid,dateAdded:e.date_added,id:e.id}})),i(c);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),t.error=e.t0.message;case 18:return e.abrupt("return",t);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(h.jsx)("div",{className:"registrationsList",children:n.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(f,{email:e.email,name:e.name,message:e.message,hikeId:e.hikeId})},e.id)}))})};var k=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/",children:Object(h.jsx)("div",{children:"Hello, choose one of the tabs to see and edit more info about our Hikes, News and Registrations!"})}),Object(h.jsx)(s.a,{path:"/hikes",children:Object(h.jsx)(x,{})}),Object(h.jsx)(s.a,{path:"/news",children:Object(h.jsx)(m,{})}),Object(h.jsx)(s.a,{path:"/registrations",children:Object(h.jsx)(v,{})})]})})};var g=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:Object(h.jsxs)("nav",{className:"NavButtons",children:[Object(h.jsx)("div",{className:"logout",children:Object(h.jsx)("a",{href:"https://wbshikingclub.herokuapp.com/",children:"Log out"})}),Object(h.jsx)(r.b,{to:"/hikes",activeClassName:"selected",children:"Hikes"}),Object(h.jsx)(r.b,{to:"/news",activeClassName:"selected",children:"News"}),Object(h.jsx)(r.b,{to:"/registrations",activeClassName:"selected",children:"Registrations"})]})}),Object(h.jsx)(k,{})]})};a.a.render(Object(h.jsx)(r.a,{basename:"/hikingclub-admin",children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3ada04dd.chunk.js.map