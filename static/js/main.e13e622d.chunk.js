(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(47),r=a.n(s),o=(a(61),a(11)),i=(a(62),a(22)),l=a(1),j=function(e){var t=e.darkMode,a=e.setDarkMode;return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(i.b,{className:"navbar-brand",to:"/",children:"NewsMonkey"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/NewsMonkey/business",children:"Business"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/NewsMonkey/entertainment",children:"Entertainment"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/NewsMonkey/general",children:"General"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/NewsMonkey/health",children:"Health"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/NewsMonkey/science",children:"Science"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/NewsMonkey/sports",children:"Sports"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/NewsMonkey/technology",children:"Technology"})})]})}),Object(l.jsxs)("div",{className:"form-check form-switch ",children:[Object(l.jsx)("input",{className:"form-check-input",onClick:function(){a(!t),document.body.style.backgroundColor=t?"#ffffff":"#261132",document.body.style.color=t?"black":"#BFC0C0"},type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label text-light",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})})})},d=a(32),b=a.n(d),h=a(44),g=a(92),p=a(97),u=a(96),x=a(94),m=a(98),O=a(99),y=a(95),f=function(e){var t=e.title,a=e.description,n=e.imageUrl,c=e.newsUrl,s=e.author,r=e.date,o=e.source,i=e.darkMode;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(g.a,{sx:{margin:"5px",backgroundColor:"".concat(i?"#9FA4C4":"#ffffff")},children:[Object(l.jsxs)(m.a,{children:[Object(l.jsx)(u.a,{component:"img",height:"140",image:n||"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg",alt:"green iguana"}),Object(l.jsxs)(p.a,{children:[Object(l.jsxs)("span",{className:"badge bg-dark",children:[" ",o," "]}),Object(l.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"div",children:t}),Object(l.jsx)(x.a,{variant:"body2",color:"text.secondary",children:a}),Object(l.jsxs)(x.a,{variant:"body2",children:["By ",s||"Unknown"," on"," ",new Date(r).toGMTString()]})]})]}),Object(l.jsx)(O.a,{children:Object(l.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)(y.a,{size:"small",color:"secondary",variant:"contained",children:"Read More"})})})]})})},v=a.p+"static/media/doggo-spinning.2e37c34c.gif",k=function(){return Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("img",{className:"my-3 imgages",src:v,alt:"loading"})})},N=a(51),w=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(!0),i=Object(o.a)(r,2),j=i[0],d=i[1],g=Object(n.useState)(1),p=Object(o.a)(g,2),u=p[0],x=p[1],m=Object(n.useState)(0),O=Object(o.a)(m,2),y=O[0],v=O[1],w=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},M=function(){var t=Object(h.a)(b.a.mark((function t(){var a,n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setProgress(10),a="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=").concat(e.apiKey,"&page=").concat(u,"&pageSize=").concat(e.pageSize),d(!0),t.next=5,fetch(a);case 5:return n=t.sent,e.setProgress(30),t.next=9,n.json();case 9:c=t.sent,e.setProgress(70),s(c.articles),v(c.totalResults),d(!1),e.setProgress(100);case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){document.title="".concat(w(e.category)," - NewsDonkey"),M()}),[]);var S=function(){var t=Object(h.a)(b.a.mark((function t(){var a,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=").concat(e.apiKey,"&page=").concat(u+1,"&pageSize=").concat(e.pageSize),x(u+1),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,s(c.concat(r.articles)),v(r.totalResults);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=c.length;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{className:"text-center",style:{margin:"35px 0px",marginTop:"90px"},children:["NewsMonkey - Top ",w(e.category)," Headlines"]}),j&&Object(l.jsx)(k,{}),Object(l.jsx)(N.a,{dataLength:C,next:S,hasMore:C!==y,loader:Object(l.jsx)(k,{}),children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:c.map((function(t){return Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)(f,{darkMode:e.darkMode,title:t.title?t.title:"",description:t.description?t.description:"",imageUrl:t.urlToImage,newsUrl:t.url,author:t.author,date:t.publishedAt,source:t.source.name})},t.url)}))})})})]})};w.defaultProps={country:"in",pageSize:5,category:"general"};var M=w,S=a(9),C=a(52),P=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],s="c7ceae77aef34e06a6119a5668fbb9f9",r=Object(n.useState)(0),d=Object(o.a)(r,2),b=d[0],h=d[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j,{darkMode:a,setDarkMode:c}),Object(l.jsx)(C.a,{height:3,color:"#f11946",progress:b}),Object(l.jsxs)(S.c,{children:[Object(l.jsx)(S.a,{exact:!0,path:"/",children:Object(l.jsx)(M,{darkMode:a,setProgress:h,apiKey:s,pageSize:5,country:"in",category:"general"},"general")}),Object(l.jsx)(S.a,{exact:!0,path:"/NewsMonkey/business",children:Object(l.jsx)(M,{darkMode:a,setProgress:h,apiKey:s,pageSize:5,country:"in",category:"business"},"business")}),Object(l.jsx)(S.a,{exact:!0,path:"/NewsMonkey/entertainment",children:Object(l.jsx)(M,{darkMode:a,setProgress:h,apiKey:s,pageSize:5,country:"in",category:"entertainment"},"entertainment")}),Object(l.jsx)(S.a,{exact:!0,path:"/NewsMonkey/general",children:Object(l.jsx)(M,{darkMode:a,setProgress:h,apiKey:s,pageSize:5,country:"in",category:"general"},"general")}),Object(l.jsx)(S.a,{exact:!0,path:"/NewsMonkey/health",children:Object(l.jsx)(M,{darkMode:a,setProgress:h,apiKey:s,pageSize:5,country:"in",category:"health"},"health")}),Object(l.jsx)(S.a,{exact:!0,path:"/NewsMonkey/science",children:Object(l.jsx)(M,{darkMode:a,setProgress:h,apiKey:s,pageSize:5,country:"in",category:"science"},"science")}),Object(l.jsx)(S.a,{exact:!0,path:"/sports",children:Object(l.jsx)(M,{darkMode:a,setProgress:h,apiKey:s,pageSize:5,country:"in",category:"sports"},"sports")}),Object(l.jsx)(S.a,{exact:!0,path:"/NewsMonkey/technology",children:Object(l.jsx)(M,{darkMode:a,setProgress:h,apiKey:s,pageSize:5,country:"in",category:"technology"},"technology")})]})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,100)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root")),z()}},[[70,1,2]]]);
//# sourceMappingURL=main.e13e622d.chunk.js.map