(this.webpackJsonppockedia_movies_info=this.webpackJsonppockedia_movies_info||[]).push([[0],{13:function(e,t,a){},32:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(33),r=a.n(s),i=(a(40),a(3)),l=(a(41),a(0)),o=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})},d=a(2),j=a.n(d),b=a(6),u=a(17),g=a.n(u),p=(a(13),function(e){var t=e.title,a=e.original_title,c=e.overview,n=e.release_date,s=e.vote_average,r=e.imageUrl,i=e.language,o=e.genres,d=(e.movie_id,e.backdrop_path);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(g.a,{style:{backgroundColor:"rgba(255, 255, 255, 0)",padding:"0px",borderRadius:"15px"},children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"contents",children:[Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+r,alt:"img",className:"imgfluid  "}),Object(l.jsxs)("p",{className:"card-title  title-1 ",children:[Object(l.jsx)("span",{className:"cardThead",children:" Name : "}),a]}),Object(l.jsxs)("p",{className:"card-title title-2",children:[Object(l.jsx)("span",{className:"cardThead",children:"As You Know :"})," ",t]}),Object(l.jsxs)("p",{className:"card-text text1",children:[Object(l.jsx)("span",{className:"cardThead",children:"IMDP Reting : "}),s,"."]}),Object(l.jsxs)("p",{className:"card-text text2",children:[Object(l.jsx)("span",{className:"cardThead",children:"Release date : "}),n,"."]})]}),Object(l.jsx)("div",{className:"hoverContent",children:Object(l.jsxs)("div",{className:"contentitem",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Title:- "}),a]}),Object(l.jsx)("p",{children:Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+d,alt:"img",className:"imgfluid  "})}),Object(l.jsx)("p",{children:Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+r,alt:"img",className:"imgfluid  "})}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Overview:- "}),c]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Language:- "}),i]}),Object(l.jsx)("p",{children:o})]})})]})})})}),h=a(10),m=a.n(h),x=a(23),O=(a(61),function(e){var t=e.genress,a=e.setGenress,n=e.selectedGenres,s=e.setSelectedGenres,r=e.setPageNo,i=e.type,o=e.baseurl,d=e.movieResults;function u(){return(u=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(o,"genre/").concat(i,"/list?api_key=8715e8842217df4604773f0cef2fca91&language=en-US")).then((function(e){var t=e.data;a(t.genres),console.log(t)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}Object(c.useEffect)((function(){return function(){u.apply(this,arguments)}(),function(){a({})}}),[]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"chip",children:[d&&n&&n.map((function(e){return Object(l.jsxs)("div",{className:"name",style:{backgroundColor:"#18345b"},onClick:function(){return function(e){s(n.filter((function(t){return t.id!==e.id}))),a([].concat(Object(x.a)(t),[e])),r(1)}(e)},children:[e.name," "]},e.id)})),d&&t.map((function(e){return Object(l.jsxs)("div",{className:"name",onClick:function(){return function(e){s([].concat(Object(x.a)(n),[e])),a(t.filter((function(t){return t.id!==e.id}))),r(1)}(e)},children:[e.name," "]},e.id)}))]})})}),v=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},f=function(e){var t=Object(c.useState)(),a=Object(i.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],g=Object(c.useState)({}),h=Object(i.a)(g,2),x=h[0],f=h[1],N=e.apiKey,y=e.baseurl,_=v(d),w=e.language,P=e.pageNo,k=e.setPageNo,T=e.totalPage,L=e.setTotalPage;Object(c.useEffect)((function(){m.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(N,"&language=").concat(w,"&page=").concat(P,"&with_genres=").concat(_)).then((function(e){var t=e.data;s(t.results),L(t.total_pages),console.log(t)})).catch((function(e){return console.log(e)}))}),[P,N,_,w]);var S=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(P+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(P-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",P]})}),Object(l.jsxs)("div",{className:"container container-bg  my-4",children:[Object(l.jsx)(O,{genress:x,selectedGenres:d,setGenress:f,setSelectedGenres:u,type:"movie",setPageNo:k,movieResults:n,baseurl:y}),Object(l.jsx)("div",{className:"row justify-content-center",children:n&&n.map((function(e){return Object(l.jsx)("div",{className:"col-md-4 cardSty",children:Object(l.jsx)(p,{language:e.original_language,vote_average:e.vote_average,original_title:e.original_title||e.name,title:e.title,release_date:e.release_date||e.first_air_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path,movie_id:e.id,backdrop_path:e.backdrop_path})},e.id)}))})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsxs)("button",{disabled:P<=1,type:"button",onClick:C,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:P>=T,type:"button",onClick:S,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})},N=a(5),y=(a(62),a.p,function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{id:"container",className:"container position-sticky  top-0",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light  blur blur-rounded top-0 z-index-fixed  nav-sty position-absolute my-3 py-2 start-0 end-0 mx-4",children:Object(l.jsxs)("div",{className:"container-fluid px-0",children:[Object(l.jsx)(N.b,{to:"/pockedia_movies_inforeactjs/",className:"navbar-brand font-weight-bolder ps-1 ms-sm-3",rel:"tooltip",title:"Designed and Coded by Creative Tim","data-placement":"bottom",target:"_blank",children:"Pockedia Movie Info"}),Object(l.jsxs)("button",{className:"navbar-toggler collapsed border-0 shadow-none ms-md-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navigation","aria-controls":"navigation","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(l.jsx)("span",{className:"toggler-icon bar1 "}),Object(l.jsx)("span",{className:"toggler-icon bar2 "}),Object(l.jsx)("span",{className:"toggler-icon bar3 "})]}),Object(l.jsx)("div",{className:"collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0",id:"navigation",children:Object(l.jsxs)("ul",{className:"navbar-nav navbar-nav-hover mx-auto",children:[Object(l.jsx)("li",{className:"nav-item  mx-2",children:Object(l.jsx)(N.b,{to:"/pockedia_movies_inforeactjs/",role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Trending"})}),Object(l.jsxs)("li",{className:"nav-item dropdown mx-2",children:[Object(l.jsx)("li",{role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Movies"}),Object(l.jsxs)("ul",{className:"dropdown-containt",children:[Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(N.b,{className:"drop-link",to:"/upcoming",children:"Upcoming"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(N.b,{className:"drop-link",to:"/popular",children:"Popular"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(N.b,{className:"drop-link",to:"/topRated",children:"Top_rated"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(N.b,{className:"drop-link",to:"/latest",children:"Latest"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(N.b,{className:"drop-link",to:"/adult",children:"Adults"})})]})]}),Object(l.jsxs)("li",{className:"nav-item dropdown mx-2",children:[Object(l.jsx)("li",{role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Tv Series"}),Object(l.jsxs)("ul",{className:"dropdown-containt",children:[Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(N.b,{className:"drop-link",to:"/tvOnTheAir",children:"On The Air"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(N.b,{className:"drop-link",to:"/tvPopular",children:"Popular"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(N.b,{className:"drop-link",to:"/tvLatest",children:"Latest"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(N.b,{className:"drop-link",to:"/tvAiringToday",children:"Airing Today"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(N.b,{className:"drop-link",to:"/tvTopRated",children:"Top_rated"})})]})]}),Object(l.jsx)("li",{className:"nav-item dropdown mx-2",children:Object(l.jsx)(N.b,{to:"/searchBar",role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:" Search"})})]})})]})})})})})})}),_=(a(71),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),r=Object(i.a)(s,2),o=r[0],d=r[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop,t=document.getElementById("circlebtnUp"),a=document.getElementById("circlebtnDown");e>=500?(n(!0),d(!1),t.classList.add("circleButton-show"),t.classList.remove("circleButton"),a.classList.add("circleButtonDown"),a.classList.remove("circleButtonDown-show")):(n(!1),d(!0),t.classList.remove("circleButton-show"),t.classList.add("circleButton"),a.classList.add("circleButtonDown-show"),a.classList.remove("circleButtonDown"))})),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{id:"circlebtnUp",className:"circleButton",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(l.jsx)("i",{className:"fas fa-angle-double-up",style:{display:a?"inline":"none"}})}),Object(l.jsx)("button",{id:"circlebtnDown",className:"circleButtonDown",onClick:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},children:Object(l.jsx)("i",{className:"fas fa-angle-double-down",style:{display:o?"inline":"none"}})})]})}),w=a(4);a(32);var P=function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],g=e.apiKey,h=e.pageNo,m=e.setPageNo,x=e.totalPage,O=e.setTotalPage;console.log(d+"search data");var v=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(h+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(h-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",h]})}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"searchContainer",children:[Object(l.jsx)("input",{type:"text",name:"search",placeholder:"Search...",className:"searchInput",onChange:function(e){e.preventDefault(),s(e.target.value),fetch("".concat("https://api.themoviedb.org/3/search/multi?","api_key=").concat(g,"&language=en-US&query=").concat(e.target.value,"&page=").concat(h,"&include_adult=true")).then((function(e){return e.json()})).then((function(e){e.errors?u([]):(u(e.results),O(e.total_pages))}))},value:n}),Object(l.jsx)("a",{href:"/",className:"searchbtn",children:Object(l.jsx)("i",{className:"fas fa-search"})})]}),Object(l.jsx)("div",{className:"searchcard",children:d.length>0&&d.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(p,{title:e.title||e.name,language:e.original_language,vote_average:e.vote_average,original_title:e.original_title,release_date:e.release_date||e.air_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path?e.poster_path:"kqjL17yufvn9OVLyXYpvtyrFfak.jpg",movie_id:e.id,backdrop_path:e.backdrop_path},e.id)})}))}),Object(l.jsxs)("div",{className:"npBox d-flex justify-content-between",style:{zIndex:"100"},children:[Object(l.jsxs)("button",{disabled:h<=1,type:"button",onClick:f,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:h>=x,type:"button",onClick:v,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})]})},k=function(e){var t=Object(c.useState)(),a=Object(i.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],g=Object(c.useState)({}),h=Object(i.a)(g,2),x=h[0],f=h[1],N=e.apiKey,y=e.baseurl,_=v(d),w=e.language,P=e.pageNo,k=e.setPageNo,T=e.totalPage,L=e.setTotalPage;Object(c.useEffect)((function(){m.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat(N,"&language=en-").concat(w,"&sort_by=original_title.desc&include_adult=true&include_video=true&page=").concat(P,"&with_watch_monetization_types=free&with_genres=").concat(_)).then((function(e){var t=e.data;s(t.results),L(t.total_pages),console.log(t)})).catch((function(e){return console.log(e)}))}),[P,N,_,w]);var S=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(P+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(P-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",P]})}),Object(l.jsxs)("div",{className:"container container-bg  my-4",children:[Object(l.jsx)(O,{genress:x,selectedGenres:d,setGenress:f,setSelectedGenres:u,type:"movie",setPageNo:k,movieResults:n,baseurl:y}),Object(l.jsx)("div",{className:"row justify-content-center",children:n&&n.map((function(e){return Object(l.jsx)("div",{className:"col-md-4 cardSty",children:Object(l.jsx)(p,{language:e.original_language,vote_average:e.vote_average,original_title:e.original_title,title:e.title,release_date:e.release_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path,movie_id:e.id,backdrop_path:e.backdrop_path})},e.id)}))})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsxs)("button",{disabled:P<=1,type:"button",onClick:C,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:P>=T,type:"button",onClick:S,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})},T=function(e){var t=Object(c.useState)(),a=Object(i.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],g=Object(c.useState)({}),h=Object(i.a)(g,2),x=h[0],f=h[1],N=e.apiKey,y=e.baseurl,_=v(d),w=e.language,P=e.pageNo,k=e.setPageNo,T=e.totalPage,L=e.setTotalPage;Object(c.useEffect)((function(){m.a.get("https://api.themoviedb.org/3/".concat(e.category,"/").concat(e.type,"?api_key=").concat(N,"&language=").concat(w,"&page=").concat(P,"&with_genres=").concat(_)).then((function(e){var t=e.data;s(t.results),L(t.total_pages),console.log(t)})).catch((function(e){return console.log(e)}))}),[P,N,_,w]);var S=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(P+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(P-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",P]})}),Object(l.jsxs)("div",{className:"container container-bg  my-4",children:[Object(l.jsx)(O,{genress:x,selectedGenres:d,setGenress:f,setSelectedGenres:u,type:"movie",setPageNo:k,movieResults:n,baseurl:y}),Object(l.jsx)("div",{className:"row justify-content-center",children:n&&n.map((function(e){return Object(l.jsx)("div",{className:"col-md-4 cardSty",children:Object(l.jsx)(p,{language:e.original_language,vote_average:e.vote_average,original_title:e.original_title||e.original_name,title:e.title||e.name,release_date:e.release_date||e.first_air_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path,movie_id:e.id,backdrop_path:e.backdrop_path})},e.id)}))})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsxs)("button",{disabled:P<=1,type:"button",onClick:C,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:P>=T,type:"button",onClick:S,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})},L=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),d=Object(i.a)(r,2),j=d[0],b=d[1],u="movie",g="tv",p="8715e8842217df4604773f0cef2fca91",h="https://api.themoviedb.org/3/";a(72).config();var m=Object(c.useState)("de-DE"),x=Object(i.a)(m,2),O=x[0],v=x[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"backGround1",children:Object(l.jsx)("div",{className:"second",children:Object(l.jsx)("div",{className:"trio",children:Object(l.jsx)("div",{className:"squard"})})})}),Object(l.jsx)("div",{className:"backGround2",children:Object(l.jsx)("div",{className:"second2",children:Object(l.jsx)("div",{className:"trio2",children:Object(l.jsx)("div",{className:"squard2"})})})}),Object(l.jsxs)(N.a,{children:[Object(l.jsx)(y,{searchUrl:"search/movie",language:O,setLanguage:v}),Object(l.jsxs)(w.c,{children:[Object(l.jsx)(w.a,{exact:!0,path:"/pockedia_movies_inforeactjs/",children:Object(l.jsx)(f,{totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v})}),Object(l.jsx)(w.a,{exact:!0,path:"/upcoming",children:Object(l.jsx)(T,{type:"upcoming",category:u,totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v},"upcoming")}),Object(l.jsx)(w.a,{exact:!0,path:"/popular",children:Object(l.jsx)(T,{type:"popular",category:u,totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v},"popular")}),Object(l.jsx)(w.a,{exact:!0,path:"/topRated",children:Object(l.jsx)(T,{category:u,type:"top_rated",totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v},"top_rated")}),Object(l.jsx)(w.a,{exact:!0,path:"/latest",children:Object(l.jsx)(T,{type:"latest",category:u,totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v},"latest")}),Object(l.jsx)(w.a,{exact:!0,path:"/adult",children:Object(l.jsx)(k,{totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v})}),Object(l.jsx)(w.a,{exact:!0,path:"/tvOnTheAir",children:Object(l.jsx)(T,{type:"on_the_air",category:g,totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v},"tvOnTheAir")}),Object(l.jsx)(w.a,{exact:!0,path:"/tvPopular",children:Object(l.jsx)(T,{type:"popular",category:g,totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v},"tvPopular")}),Object(l.jsx)(w.a,{exact:!0,path:"/tvLatest",children:Object(l.jsx)(T,{type:"latest",category:g,totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v},"tvLatest")}),Object(l.jsx)(w.a,{exact:!0,path:"/tvAiringToday",children:Object(l.jsx)(T,{type:"airing_today",category:g,totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v},"tvAiringToday")}),Object(l.jsx)(w.a,{exact:!0,path:"/tvTopRated",children:Object(l.jsx)(T,{type:"top_rated",category:g,totalPage:j,setTotalPage:b,apiKey:p,pageNo:n,setPageNo:s,baseurl:h,language:O,setLanguage:v},"tvTopRated")}),Object(l.jsx)(w.a,{exact:!0,path:"/searchBar",children:Object(l.jsx)(P,{setTotalPage:b,totalPage:j,apiKey:p,setPageNo:s,pageNo:n})})]})]}),Object(l.jsx)(_,{}),Object(l.jsx)(o,{})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),S()}},[[75,1,2]]]);
//# sourceMappingURL=main.bc4a7fe8.chunk.js.map