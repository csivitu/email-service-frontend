(this["webpackJsonpemail-service-frontend"]=this["webpackJsonpemail-service-frontend"]||[]).push([[0],{53:function(e,t,r){},59:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),c=r.n(a),s=r(26),i=r.n(s),j=r(28),u=r(2),l=r(9),b=r.n(l),x=r(11),o=r(14),p=r.n(o),d=r(27),O=r.n(d).a.create({baseURL:"https://emailer-api.csivit.com"});function h(e){var t=new FileReader;return t.readAsText(e),new Promise((function(e){t.onload=function(t){var r=t.target.result;e(r)}}))}var m=function(){var e=Object(x.a)(b.a.mark((function e(t){var r,n,a,c,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.text,n=t.html,a=t.subject,c=t.to,s=t.auth,e.next=3,h(c.files[0]);case 3:return i=e.sent.replaceAll("\n",", "),e.abrupt("return",O.post("/email",{text:r.value,html:n.value,subject:a.value,to:i,auth:s.value}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();r(53);var f=function(){var e=function(){var e=Object(x.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m(t.target);case 4:r=e.sent,p.a.fire({icon:"success",text:r.data.toString()}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),p.a.fire({icon:"error",text:e.t0.toString()});case 11:t.target.reset();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("form",{onSubmit:e,children:[Object(n.jsxs)("label",{children:["SUBJECT:"," ",Object(n.jsx)("span",{className:"required",children:"*"}),Object(n.jsx)("input",{name:"subject",type:"text",required:!0})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{children:["HTML:",Object(n.jsx)("textarea",{name:"html"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{children:["TEXT (alternate text that will be displayed if html is not supported):"," ",Object(n.jsx)("span",{className:"required",children:"*"}),Object(n.jsx)("textarea",{name:"text",required:!0})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{children:["AUTHKEY:"," ",Object(n.jsx)("span",{className:"required",children:"*"}),Object(n.jsx)("input",{name:"auth",type:"password",required:!0})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{children:["TO (upload a .txt file):"," ",Object(n.jsx)("span",{className:"required",children:"*"}),Object(n.jsx)("input",{name:"to",type:"file",accept:"text/plain",required:!0})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",value:"SEND"})]})})};var v=function(){return Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{children:Object(n.jsx)(u.c,{children:Object(n.jsx)(u.a,{exact:!0,path:"/",component:f})})})})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.33868a55.chunk.js.map