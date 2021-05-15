(this["webpackJsonpgames-deals-notificator"]=this["webpackJsonpgames-deals-notificator"]||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),s=n.n(c),i=(n(30),n(12)),o=n.n(i),l=n(16),u=n(8),j=n(1);var m=function(e){var t=e.title,n=e.subtitle;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("h4",{style:{fontStyle:"italic"},children:n})]})};var d=function(e){return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),e.text?e.getGames(e.text):alert("Enter a game title!!!")},children:[Object(j.jsx)("div",{className:"form-control",children:Object(j.jsx)("input",{type:"text",placeholder:"Enter game title",value:e.text,onChange:function(t){return e.changeGameText(t.target.value)}})}),Object(j.jsx)("input",{type:"submit",value:"Search",className:"btn btn-block"})]})};var b=function(e){var t=e.name,n=e.image,r=e.handleShow,a=e.gameID;return Object(j.jsxs)("div",{className:"item",onClick:function(){r(t,a)},children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("img",{src:n,alt:t,width:50,height:30})]})};var h=function(e){return Object(j.jsx)(j.Fragment,{children:e.games.map((function(t){return Object(j.jsx)(b,{name:t.external,image:t.thumb,handleShow:e.handleShow,gameID:t.gameID},t.gameID)}))})},f=n(42),x=n(43);var p=function(){return Object(j.jsx)("div",{style:{color:"red"},children:Object(j.jsx)("h3",{style:{textAlign:"center"},children:"No Results Found!!!"})})};var g=function(e){var t=e.addPriceAlert,n=e.gameID,a=e.gameTitle,c=Object(r.useState)(""),s=Object(u.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)(""),m=Object(u.a)(l,2),d=m[0],b=m[1],h=Object(r.useState)(1),f=Object(u.a)(h,2),x=f[0],p=f[1],g=Object(r.useState)(0),O=Object(u.a)(g,2),v=O[0],y=O[1];return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),i&&d?(t({name:i,email:d,currency:x,price:v,gameID:n,gameTitle:a}),o((function(e){return""})),b((function(e){return""})),p((function(e){return 1})),y((function(e){return 0}))):i||d?i?alert("Enter your email!!!"):alert("Enter your name!!!"):alert("Enter your name and email!!!")},style:{marginBottom:"20px"},children:[Object(j.jsx)("div",{className:"form-control",children:Object(j.jsx)("input",{type:"text",placeholder:"Enter your name",value:i,onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("div",{className:"form-control",children:Object(j.jsx)("input",{type:"email",placeholder:"Enter you email",value:d,onChange:function(e){return b(e.target.value)}})}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{htmlFor:"price",children:"Alert me when the price is below or close to:"}),Object(j.jsx)("input",{type:"number",id:"price",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{htmlFor:"currency",children:"Currency:"}),Object(j.jsxs)("select",{id:"currency",onChange:function(e){return p(e.target.value)},children:[Object(j.jsx)("option",{value:"1",children:"USD"}),Object(j.jsx)("option",{value:"2",children:"CAD"})]})]}),Object(j.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-block"})]})},O=n(15),v=n(5);var y=function(){var e=Object(v.e)();return Object(j.jsxs)("footer",{children:["/game_deals_notificator_front_end/"===e.pathname&&Object(j.jsx)(O.b,{to:"/game_deals_notificator_front_end/managealert",children:"Manage Alerts"}),"/game_deals_notificator_front_end/managealert"===e.pathname&&Object(j.jsx)(O.b,{to:"/game_deals_notificator_front_end/",children:"Back"}),Object(j.jsx)("p",{children:"Copyright \xa9 2021"}),Object(j.jsx)("p",{children:"Quang Nguyen"})]})};var S=function(e){var t=e.storeName,n=e.storeURL,r=e.price,a=0;return a=r>18.5?1.3334*r:r>9?1.1403*r:1.1154*r,Object(j.jsxs)("div",{className:"item",style:{cursor:"auto"},children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:n,style:{textDecoration:"none"},target:"_blank",rel:"noreferrer",children:t})}),"Price: $",r," ~ C$",Math.round(100*(a+Number.EPSILON))/100]})};var N=function(e){return Object(j.jsxs)("div",{className:"".concat(e.deals.length>2?"deals":""),style:{padding:"0px 20px 20px 20px",marginBottom:"20px",height:e.deals.length>2?"200px":"auto",overflow:e.deals.length>2?"auto":"hidden"},children:[Object(j.jsx)("h3",{style:{textAlign:"center"},children:"Current Prices"}),Object(j.jsx)("p",{style:{fontSize:"13px",textAlign:"center",marginBottom:"10px"},children:"* US dollar ~ Canadian dollar"}),e.deals.map((function(e){return Object(j.jsx)(S,{storeName:e.store,storeURL:"https://www.cheapshark.com/redirect?dealID="+e.dealID,price:e.price},e.dealID)}))]})};var w=function(e){return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),e.text?e.getAlerts(e.text):alert("Enter your email!!!")},children:[Object(j.jsx)("div",{className:"form-control",children:Object(j.jsx)("input",{type:"email",placeholder:"Enter your email",value:e.text,onChange:function(t){return e.setText(t.target.value)}})}),Object(j.jsx)("input",{type:"submit",value:"Search",className:"btn btn-block"})]})},_=n(25);var k=function(e){return Object(j.jsxs)("div",{className:"item",style:{cursor:"auto"},children:[Object(j.jsxs)("h3",{children:[e.game," ",Object(j.jsx)(_.a,{onClick:function(){return e.onDelete(e.gameid,e.price,e.email,e.name,e.currency,e.game)},style:{color:"red",cursor:"pointer"}})]}),Object(j.jsxs)("p",{children:["Price: ",2==e.currency&&"C","$",e.price]})]})};var D=function(e){var t=0;return Object(j.jsx)(j.Fragment,{children:e.alerts.map((function(n){return Object(j.jsx)(k,{gameid:n.game_id,name:n.name,game:n.game,price:n.price,email:n.email,currency:n.currency,onDelete:e.onDelete},++t)}))})};var C=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{title:"Manage Your Price Alerts",subtitle:"Enter your email to see your submitted price alerts"}),Object(j.jsx)(w,{getAlerts:e.retrieveAlerts,text:e.emailText,setText:e.changeEmailText}),Object(j.jsx)(D,{alerts:e.alerts,onDelete:e.deleteAlert}),e.error&&Object(j.jsx)(p,{})]})};var T=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(u.a)(c,2),i=s[0],b=s[1],S=Object(r.useState)(""),w=Object(u.a)(S,2),_=w[0],k=w[1],D=Object(r.useState)(0),T=Object(u.a)(D,2),A=T[0],E=T[1],I=Object(r.useState)(!1),F=Object(u.a)(I,2),P=F[0],B=F[1],L=Object(r.useState)([]),G=Object(u.a)(L,2),z=G[0],J=G[1],M=Object(r.useState)([]),R=Object(u.a)(M,2),U=R[0],$=R[1],H=Object(r.useState)(""),Q=Object(u.a)(H,2),Y=Q[0],q=Q[1],K=Object(r.useState)(""),V=Object(u.a)(K,2),W=V[0],X=V[1],Z=Object(r.useState)(""),ee=Object(u.a)(Z,2),te=ee[0],ne=ee[1],re=function(){b((function(e){return!1})),k((function(e){return""})),E((function(e){return 0})),J((function(e){return[]}))},ae=function(e,t){b((function(e){return!0})),k((function(t){return e})),E((function(e){return t})),ce(t)},ce=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gamedealsnotificator.azurewebsites.net/notifications/getdeals?id=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).status&&J((function(e){return r.deals})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gamedealsnotificator.azurewebsites.net/notifications/getgames?title=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).status&&(a((function(e){return r.games})),r.games.length>0?B((function(e){return!1})):B((function(e){return!0}))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,a,c,s,i,l,u,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.email,a=t.currency,c=t.price,s=t.gameID,i=t.gameTitle,e.prev=1,l={game_id:s,email:r,name:n,price:c,currency:a,game:i},e.next=5,fetch("https://gamedealsnotificator.azurewebsites.net/notifications/AddNotification",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(l)});case 5:return u=e.sent,e.next=8,u.json();case 8:j=e.sent,alert(j.message),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://localhost:44371/notifications/getnotifications?email=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(r=e.sent).status){e.next=12;break}$((function(e){return r.notifications})),r.notifications.length>0?q((function(e){return!1})):q((function(e){return!0})),e.next=13;break;case 12:throw r;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(l.a)(o.a.mark((function e(t,n,r,a,c,s){var i,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i={game_id:t,email:r,price:n,name:a,currency:c,game:s},e.next=4,fetch("https://localhost:44371/notifications/DeleteNotification",{method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify(i)});case 4:return l=e.sent,e.next=7,l.json();case 7:if(!(u=e.sent).status){e.next=12;break}$(U.filter((function(e){return e.game_id!=t&&e.price!=n}))),e.next=13;break;case 12:throw u;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,r,a,c,s){return e.apply(this,arguments)}}(),ue=function(e){X((function(t){return e}))},je=function(e){ne((function(t){return e}))};return Object(j.jsx)(O.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(v.a,{path:"/game_deals_notificator_front_end/",exact:!0,render:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{title:"Game Deals Notificator",subtitle:"Search for a game and set a price alert"}),Object(j.jsxs)(f.a,{className:"modal",show:i,children:[Object(j.jsx)(f.a.Header,{children:Object(j.jsx)(f.a.Title,{style:{textAlign:"center",marginTop:"20px"},children:"Set price alert for "+_})}),Object(j.jsxs)(f.a.Body,{children:[Object(j.jsx)(g,{addPriceAlert:ie,gameID:A,gameTitle:_}),Object(j.jsx)(N,{deals:z})]}),Object(j.jsx)(f.a.Footer,{children:Object(j.jsx)(x.a,{style:{display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"30px",backgroundColor:"red"},onClick:re,children:"Close"})})]}),Object(j.jsx)(d,{getGames:se,text:te,changeGameText:je}),P&&Object(j.jsx)(p,{}),Object(j.jsx)(h,{games:n,handleShow:ae})]})}}),Object(j.jsx)(v.a,{path:"/game_deals_notificator_front_end/managealert",render:function(){return Object(j.jsx)(C,{deleteAlert:le,retrieveAlerts:oe,alerts:U,error:Y,emailText:W,changeEmailText:ue})}}),Object(j.jsx)(y,{})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),A()}},[[39,1,2]]]);
//# sourceMappingURL=main.5fb15813.chunk.js.map