(this["webpackJsonpgames-deals-notificator"]=this["webpackJsonpgames-deals-notificator"]||[]).push([[0],{20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),i=n.n(c),s=(n(20),n(10)),o=n.n(s),l=n(14),u=n(6),j=n(1);var m=function(e){var t=e.title,n=e.subtitle;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("h4",{style:{fontStyle:"italic"},children:n})]})};var b=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1];return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),a?e.getGames(a):alert("Enter a game title!!!")},children:[Object(j.jsx)("div",{className:"form-control",children:Object(j.jsx)("input",{type:"text",placeholder:"Enter game title",value:a,onChange:function(e){return c(e.target.value)}})}),Object(j.jsx)("input",{type:"submit",value:"Search",className:"btn btn-block"})]})};var d=function(e){var t=e.name,n=e.image,r=e.handleShow,a=e.gameID;return Object(j.jsxs)("div",{className:"game",onClick:function(){r(t,a)},children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("img",{src:n,alt:t,width:50,height:30})]})};var h=function(e){return Object(j.jsx)(j.Fragment,{children:e.games.map((function(t){return Object(j.jsx)(d,{name:t.external,image:t.thumb,handleShow:e.handleShow,gameID:t.gameID},t.gameID)}))})},f=n(29),O=n(30);var g=function(){return Object(j.jsx)("div",{style:{color:"red"},children:Object(j.jsx)("h3",{style:{textAlign:"center"},children:"No Results Found!!!"})})};var x=function(e){var t=e.addPriceAlert,n=e.gameID,a=e.gameTitle,c=Object(r.useState)(""),i=Object(u.a)(c,2),s=i[0],o=i[1],l=Object(r.useState)(""),m=Object(u.a)(l,2),b=m[0],d=m[1],h=Object(r.useState)(1),f=Object(u.a)(h,2),O=f[0],g=f[1],x=Object(r.useState)(0),p=Object(u.a)(x,2),v=p[0],y=p[1];return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),s&&b&&(t({name:s,email:b,currency:O,price:v,gameID:n,gameTitle:a}),o((function(e){return""})),d((function(e){return""})),g((function(e){return 1})),y((function(e){return 0})))},style:{marginBottom:"20px"},children:[Object(j.jsx)("div",{className:"form-control",children:Object(j.jsx)("input",{type:"text",placeholder:"Enter your name",value:s,onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("div",{className:"form-control",children:Object(j.jsx)("input",{type:"email",placeholder:"Enter you email",value:b,onChange:function(e){return d(e.target.value)}})}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{htmlFor:"price",children:"Alert me when the price is below or close to:"}),Object(j.jsx)("input",{type:"number",id:"price",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{htmlFor:"currency",children:"Currency:"}),Object(j.jsxs)("select",{id:"currency",onChange:function(e){return g(e.target.value)},children:[Object(j.jsx)("option",{value:"1",children:"USD"}),Object(j.jsx)("option",{value:"2",children:"CAD"})]})]}),Object(j.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-block"})]})};var p=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),i=Object(u.a)(c,2),s=i[0],d=i[1],p=Object(r.useState)(""),v=Object(u.a)(p,2),y=v[0],S=v[1],N=Object(r.useState)(0),w=Object(u.a)(N,2),C=w[0],D=w[1],k=Object(r.useState)(!1),I=Object(u.a)(k,2),F=I[0],T=I[1],A=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gamedealsnotificator.azurewebsites.net/notifications/getgames?title=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:(r=e.sent).status&&(a((function(e){return r.games})),r.games.length>0?T((function(e){return!1})):T((function(e){return!0})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,a,c,i,s,l,u,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.email,a=t.currency,c=t.price,i=t.gameID,s=t.gameTitle,l={game_id:i,email:r,name:n,price:c,currency:a,game:s},e.next=4,fetch("https://gamedealsnotificator.azurewebsites.net/notifications/AddNotification",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(l)});case 4:return u=e.sent,e.next=7,u.json();case 7:j=e.sent,alert(j.message);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(m,{title:"Game Deals Notificator",subtitle:"Search for a game and set a price alert"}),Object(j.jsxs)(f.a,{className:"modal",show:s,children:[Object(j.jsx)(f.a.Header,{children:Object(j.jsx)(f.a.Title,{style:{textAlign:"center",marginTop:"20px"},children:"Set price alert for "+y})}),Object(j.jsx)(f.a.Body,{children:Object(j.jsx)(x,{addPriceAlert:B,gameID:C,gameTitle:y})}),Object(j.jsx)(f.a.Footer,{children:Object(j.jsx)(O.a,{style:{display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"30px",backgroundColor:"red"},onClick:function(){return d((function(e){return!1}))},children:"Close"})})]}),Object(j.jsx)(b,{getGames:A}),F&&Object(j.jsx)(g,{}),Object(j.jsx)(h,{games:n,handleShow:function(e,t){d((function(e){return!0})),S((function(t){return e})),D((function(e){return t}))}})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()}},[[26,1,2]]]);
//# sourceMappingURL=main.412b4119.chunk.js.map