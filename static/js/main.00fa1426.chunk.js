(this["webpackJsonpasync-race1"]=this["webpackJsonpasync-race1"]||[]).push([[0],{33:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(16),s=n.n(r),i=(n(42),n(20)),o=n(6),j=(n(43),n(3)),l=n(4),u=n.n(l),d=n(9),b=n(7),h=n(0),O=a.a.createContext(),p={data:[],id:null,currentPage:1,currentDataCar:[],dataPage:7,currentWinnersPage:1,dataWinnersPage:10,winners:[],velosity:{},carArr:[]};function x(e){var t=e.children,n=Object(c.useState)(p),a=Object(b.a)(n,2),r=a[0],s=a[1];function i(){fetch("http://localhost:3000/garage").then((function(e){return e.json()})).then((function(e){var t=e.slice(0,7);s(Object(j.a)(Object(j.a)({},r),{},{data:e,currentDataCar:t}))}))}function o(){return(o=Object(d.a)(u.a.mark((function e(t,n){var c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://localhost:3000/engine?id=".concat(t,"&status=").concat(n),e.next=3,fetch(c);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(d.a)(u.a.mark((function e(t,n,c,a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:t,wins:n,time:c,color:a,count:1},e.next=3,fetch("http://localhost:3000/winners?id=".concat(t)).then((function(e){return e.json()})).then((function(e){0!==e.length?fetch("http://localhost:3000/winners/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}):fetch("http://localhost:3000/winners",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/winners").then((function(e){return e.json()})).then((function(e){return s(Object(j.a)(Object(j.a)({},r),{},{winners:e}))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){i()}),[]),Object(h.jsx)(O.Provider,{value:{state:r,setState:s,getCar:i,getVelocity:function(e,t){return o.apply(this,arguments)},putWinners:function(e,t,n,c){return l.apply(this,arguments)},getWinners:function(){return x.apply(this,arguments)}},children:t})}n(33);function f(e){for(var t=e.paginate,n=e.nextPage,a=e.prevPage,r=e.allPages,s=Object(c.useContext)(O),i=[],o=1;o<=r;o++)i.push(o);return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h4",{children:["Page \u2116 ",s.state.currentPage]}),Object(h.jsx)("div",{className:"pagination-container",children:i.map((function(e,n){return Object(h.jsx)("div",{className:"pagination-num",onClick:function(){return t(e)},children:e},n)}))}),Object(h.jsxs)("div",{className:"pagination-buttons",children:[Object(h.jsx)("button",{onClick:a,children:"Prev"}),Object(h.jsx)("button",{onClick:n,children:"Next"})]})]})}n(46);var m=n(74),g=n(78),v=Object(m.a)((function(e){return{root:{height:300,flexGrow:1,minWidth:300,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}},modal:{display:"flex",padding:e.spacing(1),alignItems:"center",justifyContent:"center"}}}));function w(e){var t=e.data,n=e.deleteItem,r=e.selectItem,s=(e.winnersObg,Object(c.useState)(!1)),i=Object(b.a)(s,2),o=i[0],j=i[1],l=Object(c.useState)(null),p=Object(b.a)(l,2),x=p[0],f=p[1],m=Object(c.useState)([]),w=Object(b.a)(m,2),y=w[0],M=w[1],z=Object(c.useContext)(O),C=a.a.createRef(),P=a.a.useRef(),N=a.a.useRef(),k=v(),S=a.a.useRef(null),W=window.screen.width-220;function T(){return(T=Object(d.a)(u.a.mark((function e(n,c){var a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P.current.style.color="rgb(73, 70, 70)",N.current.style.color="red",e.next=4,z.getVelocity(n,c);case 4:a=e.sent,r=(new Date).getTime(),s=setInterval((function(){var e=(new Date).getTime()-r,n=0+e/1e3*a.velocity;try{C.current.style.transform="translateX("+n+"px)",n>W&&(z.putWinners(t.id,t.name,e,t.color),M(t),clearInterval(s),j(!0),f(e),P.current.style.color="",N.current.style.color="")}catch(c){clearInterval(s)}}),20);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return setTimeout((function(){j(!1)}),1e3),Object(h.jsxs)("div",{id:t.id,className:"carsItem",children:[Object(h.jsxs)("div",{className:"flag-container",children:[Object(h.jsx)("div",{className:"flag"}),Object(h.jsx)("div",{className:"stick"})]}),Object(h.jsxs)("div",{className:"itemButton-block",children:[Object(h.jsx)("button",{className:"btn",onClick:function(){return r(t.id)},children:"select"}),Object(h.jsx)("button",{className:"btn",onClick:function(){return n(t.id)},children:"remove"}),Object(h.jsxs)("span",{children:[t.name," "]})]}),Object(h.jsxs)("div",{className:"itemContent",children:[Object(h.jsx)("button",{className:"btn-A btn-letter",ref:P,onClick:function(){return function(e,t){return T.apply(this,arguments)}(t.id,"started")},children:"A"}),Object(h.jsx)("button",{className:"btn-B btn-letter",ref:N,onClick:function(){P.current.style.color="",N.current.style.color="",C.current.style.transform=""},children:"B"}),Object(h.jsxs)("div",{ref:C,className:"SomeElementYouWantToAnimate",children:[" ",Object(h.jsxs)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"70px",height:"50px",viewBox:"0 0 1280.000000 640.000000",preserveAspectRatio:"xMidYMid meet",children:[Object(h.jsx)("metadata",{children:"Created by potrace 1.15, written by Peter Selinger 2001-2017 "}),Object(h.jsxs)("g",{transform:"translate(0.000000,640.000000) scale(0.100000,-0.100000)",fill:t.color,stroke:"none",children:[Object(h.jsx)("path",{d:"M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9 -80 -12 -85 -6 -10 -246 -105 -590 -234 -448 -167 -1052 -415 -1173 -483 -78 -43 -193 -91 -250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154 -31 -340 -49 -563 -57 l-203 -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3 -150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418 0 -194 11 -396 26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64 -126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622 756 722 90 26 112 28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302 140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263 l-15 -73 3006 7 c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22 259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239 -63 453 -205 601 -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1 -116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45 525 79 48 24 97 81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50 680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0 -226 0 -347 85 -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332 -208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341 10 -140 81 -187 94 -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66 -422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36 -485 54 -98 26 -198 119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83 54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12 -67z m630 47 c264 -18 777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134 274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11 -27 -907 2 -906 3 -59 160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z"}),Object(h.jsx)("path",{d:"M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262 -467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493 -551 85 -44 178 -78 271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23 86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50 -354 64 -507 36z m350 -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220 1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360 0 -320 84 -544 355 -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z"}),Object(h.jsx)("path",{d:"M2600 2697 c-36 -13 -85 -36 -109 -51 l-44 -28 116 -115 c81 -82 120 -114 131 -110 14 6 16 29 16 167 0 186 6 178 -110 137z"}),Object(h.jsx)("path",{d:"M2920 2561 c0 -139 2 -162 16 -168 11 -4 50 28 130 108 l115 114 -28 22 c-34 28 -138 70 -193 79 l-40 7 0 -162z"}),Object(h.jsx)("path",{d:"M2282 2448 c-28 -36 -92 -191 -92 -225 0 -10 34 -13 165 -13 151 0 165 1 165 18 0 15 -206 232 -221 232 -4 0 -11 -6 -17 -12z"}),Object(h.jsx)("path",{d:"M3222 2351 c-62 -59 -112 -115 -112 -124 0 -15 17 -17 165 -17 131 0 165 3 165 13 0 40 -69 205 -95 227 -7 6 -48 -27 -123 -99z"}),Object(h.jsx)("path",{d:"M2781 2332 c-12 -22 11 -62 34 -62 8 0 21 10 29 22 20 28 4 58 -29 58 -13 0 -29 -8 -34 -18z"}),Object(h.jsx)("path",{d:"M2749 2161 c-32 -33 -37 -67 -14 -110 29 -57 104 -64 151 -14 53 57 9 153 -71 153 -27 0 -44 -8 -66 -29z"}),Object(h.jsx)("path",{d:"M2570 2125 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16 -54 -2z"}),Object(h.jsx)("path",{d:"M3006 2124 c-20 -19 -20 -38 -2 -54 23 -19 61 -8 64 18 7 44 -32 67 -62 36z"}),Object(h.jsx)("path",{d:"M2190 1975 c0 -29 41 -140 72 -194 l31 -53 117 117 c71 71 116 123 113 131 -4 11 -40 14 -169 14 -141 0 -164 -2 -164 -15z"}),Object(h.jsx)("path",{d:"M3110 1972 c0 -9 51 -68 114 -131 l114 -114 31 54 c30 51 71 165 71 195 0 11 -31 14 -165 14 -151 0 -165 -1 -165 -18z"}),Object(h.jsx)("path",{d:"M2780 1901 c-7 -15 -5 -24 8 -41 32 -40 85 -4 62 41 -14 25 -56 25 -70 0z"}),Object(h.jsx)("path",{d:"M2562 1697 c-61 -62 -112 -115 -112 -119 0 -18 208 -108 249 -108 7 0 11 54 11 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"}),Object(h.jsx)("path",{d:"M2933 1803 c-15 -6 -19 -333 -4 -333 46 0 251 88 251 108 0 9 -223 232 -230 231 -3 0 -11 -3 -17 -6z"}),Object(h.jsx)("path",{d:"M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24 -411 33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118 380 196 487 396 518 1128 67 1560 -97 93 -166 140 -290 198 -137 64 -235 86 -407 91 -120 3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96 33 -289 5 -388 -110 -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176 238 -203 533 -71 797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207 81 364 77 109 -3 143 -7 210 -30z"}),Object(h.jsx)("path",{d:"M10703 2700 c-54 -19 -153 -71 -153 -80 0 -3 51 -57 114 -119 80 -80 119 -112 130 -108 14 5 16 29 16 167 l0 160 -27 -1 c-16 0 -52 -9 -80 -19z"}),Object(h.jsx)("path",{d:"M11020 2561 c0 -139 2 -162 16 -168 22 -8 247 216 234 232 -17 20 -163 84 -207 91 l-43 7 0 -162z"}),Object(h.jsx)("path",{d:"M10366 2424 c-29 -44 -76 -165 -76 -194 0 -19 7 -20 165 -20 126 0 165 3 165 13 0 7 -51 63 -114 126 l-114 114 -26 -39z"}),Object(h.jsx)("path",{d:"M11313 2348 c-61 -62 -109 -119 -106 -125 6 -15 333 -19 333 -4 0 45 -88 241 -108 241 -4 0 -57 -51 -119 -112z"}),Object(h.jsx)("path",{d:"M10882 2338 c-17 -17 -15 -32 7 -52 16 -14 23 -15 41 -6 31 17 24 64 -10 68 -14 2 -31 -3 -38 -10z"}),Object(h.jsx)("path",{d:"M10846 2159 c-68 -81 17 -194 110 -144 89 48 56 175 -46 175 -30 0 -44 -6 -64 -31z"}),Object(h.jsx)("path",{d:"M10670 2126 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20 -54 2z"}),Object(h.jsx)("path",{d:"M11106 2127 c-21 -16 -18 -45 7 -61 37 -23 77 35 41 61 -10 7 -21 13 -24 13 -3 0 -14 -6 -24 -13z"}),Object(h.jsx)("path",{d:"M10290 1970 c0 -29 43 -141 74 -195 l28 -48 116 116 c81 81 113 120 109 131 -6 14 -29 16 -167 16 -152 0 -160 -1 -160 -20z"}),Object(h.jsx)("path",{d:"M11207 1978 c-3 -7 47 -66 111 -130 l116 -118 27 43 c27 44 79 177 79 203 0 12 -28 14 -164 14 -122 0 -166 -3 -169 -12z"}),Object(h.jsx)("path",{d:"M10881 1901 c-14 -25 -5 -48 20 -56 27 -9 51 13 47 44 -4 34 -51 43 -67 12z"}),Object(h.jsx)("path",{d:"M10662 1697 c-61 -62 -112 -115 -112 -119 0 -20 201 -108 247 -108 10 0 13 34 13 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"}),Object(h.jsx)("path",{d:"M11033 1803 c-10 -3 -13 -47 -13 -169 0 -90 4 -164 8 -164 36 0 186 61 239 98 16 10 -216 242 -234 235z"})]})]})]})]}),Object(h.jsx)(g.a,{open:o,className:k.modal,container:function(){return S.current},children:Object(h.jsx)("div",{children:Object(h.jsxs)("h2",{children:[Object(h.jsxs)("b",{children:["   ",y.name," "]})," finished in ",(x/1e3).toFixed(2)," second"]})})})]})}n(49);var y=[];function M(){var e=Object(c.useContext)(O);Object(c.useEffect)((function(){Array.from(document.querySelectorAll(".SomeElementYouWantToAnimate")),e.setState(Object(j.a)(Object(j.a)({},e.state),{},{currentDataCar:i}))}),[e.state.currentPage]);var t=function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/garage/".concat(n),{method:"DELETE"});case 2:return t.next=4,fetch("http://localhost:3000/winners/".concat(n),{method:"DELETE"}).then((function(e){return e.json()})).catch(console.log("e"));case 4:e.getCar();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=function(t){var n=function(e,t){return e.find((function(e){return e.id===t}))}(e.state.data,t).id;e.setState(Object(j.a)(Object(j.a)({},e.state),{},{id:n}))},a=e.state.currentPage*e.state.dataPage,r=Math.ceil(e.state.data.length/e.state.dataPage),s=a-e.state.dataPage,i=e.state.data.slice(s,a);return Object(h.jsxs)("div",{className:"carsList",children:[Object(h.jsxs)("h3",{children:["Garage (",e.state.data.length,")"]}),Object(h.jsx)(f,{paginate:function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{currentPage:t}))},nextPage:function(){e.state.currentPage!==r&&e.setState(Object(j.a)(Object(j.a)({},e.state),{},{currentPage:e.state.currentPage+1}))},prevPage:function(){1!==e.state.currentPage&&e.setState(Object(j.a)(Object(j.a)({},e.state),{},{currentPage:e.state.currentPage-1}))},allPages:r}),i.map((function(e){return Object(h.jsx)(w,{data:e,winnersObg:y,deleteItem:t,selectItem:n},e.id)}))]})}function z(){var e=Object(c.useContext)(O),t=Object(c.useState)({color:"",name:""}),n=Object(b.a)(t,2),a=n[0],r=n[1];function s(){return(s=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.name){t.next=4;break}alert("Write model"),t.next=6;break;case 4:return t.next=6,fetch("http://localhost:3000/garage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 6:e.getCar();case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",onChange:function(e){return function(e){var t=e.target.value;t&&r(Object(j.a)(Object(j.a)({},a),{},{name:t}))}(e)}}),Object(h.jsx)("input",{type:"color",onChange:function(e){return function(e){var t=e.target.value;t&&r(Object(j.a)(Object(j.a)({},a),{},{color:"".concat(t)}))}(e)}}),Object(h.jsx)("button",{className:"btn",onClick:function(){return s.apply(this,arguments)},children:"Create car"})]})}n(50);var C=function(e){var t=e.isActiveLinkGarage,n=void 0!==t&&t,c=e.isActiveLinkWinners,a=void 0!==c&&c;return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"navbar",children:Object(h.jsx)("div",{className:"wrapper-navbar container",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)(i.b,{className:"Link",to:"/",children:"ASYNC-RACE"}),Object(h.jsx)(i.b,{className:n?"Link Link__active":"Link",to:"/garage",children:"Garage"}),Object(h.jsx)(i.b,{className:a?"Link Link__active":"Link",to:"/winners",children:"Winners"})]})})})})},P=Object(m.a)((function(e){return{root:{height:300,flexGrow:1,minWidth:300,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}},modal:{display:"flex",padding:e.spacing(1),alignItems:"center",justifyContent:"center"}}})),N=["Tesla Cybertruck","Mersedes Bebz","BMW I8","Ford F150","Lada NIVA","Audi A4","Bentley","Fiat 500","Kia NIRO","Tesla S","Mersedes S63","BMW X6","Ford Raptor","Tesla X","Lada VESTA","Kia Seltos","Tesla S Plaid","Audi R8","Bentley Muslanne","BMW M4","Fiat TIPO","Kia k5"];function k(){for(var e="",t=0;t<3;t++){var n=Math.floor(256*Math.random()).toString(16);e+=1===n.length?"0"+n:n}return"#"+e}function S(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(b.a)(s,2),o=i[0],j=i[1],l=Object(c.useContext)(O);Object(c.useEffect)((function(){l.state.currentPage}),[]);var p=P(),x=a.a.useRef(null);console.log(l.state.currentDataCar);var f=Array.from(document.querySelectorAll(".SomeElementYouWantToAnimate"));function m(){return(m=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={color:"",name:""},n=0;case 2:if(!(n<50)){e.next=12;break}if(function(e,n){var c=Math.floor(Math.random()*n.length);t.color=e(),t.name=n[c]}(k,N),!t){e.next=8;break}return e.next=8,fetch("http://localhost:3000/garage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 8:l.getCar();case 9:n++,e.next=2;break;case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=window.screen.width-220;function w(){return(w=Object(d.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null,n=u.a.mark((function e(n){var c,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(l.state.currentDataCar),e.next=3,l.getVelocity(l.state.currentDataCar[n].id,"started");case 3:c=e.sent,a=(new Date).getTime(),s=setInterval((function(){var e=(new Date).getTime()-a,i=0+e/1e3*c.velocity;try{f[n].style.transform="translateX("+i+"px)",i>v&&(t?(clearInterval(s),r(!1)):(t=f[n],l.putWinners(l.state.currentDataCar[n].id,l.state.currentDataCar[n].name,e,l.state.currentDataCar[n].color),r(!0),clearInterval(s),j(e)))}catch(o){clearInterval(s)}}),20);case 6:case"end":return e.stop()}}),e)})),c=0;case 3:if(!(c<f.length)){e.next=8;break}return e.delegateYield(n(c),"t0",5);case 5:c++,e.next=3;break;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return setTimeout((function(){r(!1)}),3e3),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"btn",onClick:function(){return w.apply(this,arguments)},children:"Race"}),Object(h.jsx)("button",{className:"btn",onClick:function(){for(var e=0;e<f.length;e++)try{f[e].style.transform=""}catch(t){}},children:"Reset"}),Object(h.jsx)("button",{className:"btn",onClick:function(){return m.apply(this,arguments)},children:"Generate cars"}),Object(h.jsx)(g.a,{open:n,className:p.modal,container:function(){return x.current},children:Object(h.jsx)("div",{children:Object(h.jsxs)("h2",{children:["The best time  ",(o/1e3).toFixed(2)," second"]})})})]})}function W(){var e=Object(c.useContext)(O),t=Object(c.useState)({color:"",name:""}),n=Object(b.a)(t,2),a=n[0],r=n[1];function s(){return(s=Object(d.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.id,console.log(n),t.next=4,fetch("http://localhost:3000/garage/".concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:e.getCar();case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",onChange:function(e){return function(e){var t=e.target.value;t&&r(Object(j.a)(Object(j.a)({},a),{},{name:t}))}(e)}}),Object(h.jsx)("input",{type:"color",onChange:function(e){return function(e){var t=e.target.value;t&&r(Object(j.a)(Object(j.a)({},a),{},{color:t}))}(e)}}),Object(h.jsx)("button",{className:"btn",onClick:function(){return s.apply(this,arguments)},children:"Update car"})]})}function T(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{isActiveLinkGarage:!0}),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(z,{}),Object(h.jsx)(W,{}),Object(h.jsx)(S,{}),Object(h.jsx)(M,{})]})]})}n(57);function A(e){var t=e.wins,n=e.time,c=e.color,a=e.id,r=e.count;e.i;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"winners",children:[Object(h.jsxs)("div",{className:"  winners-car",children:[" ",Object(h.jsxs)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"70px",height:"50px",viewBox:"0 0 1280.000000 640.000000",preserveAspectRatio:"xMidYMid meet",children:[Object(h.jsx)("metadata",{children:"Created by potrace 1.15, written by Peter Selinger 2001-2017 "}),Object(h.jsxs)("g",{transform:"translate(0.000000,640.000000) scale(0.100000,-0.100000)",fill:c,stroke:"none",children:[Object(h.jsx)("path",{d:"M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9 -80 -12 -85 -6 -10 -246 -105 -590 -234 -448 -167 -1052 -415 -1173 -483 -78 -43 -193 -91 -250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154 -31 -340 -49 -563 -57 l-203 -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3 -150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418 0 -194 11 -396 26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64 -126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622 756 722 90 26 112 28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302 140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263 l-15 -73 3006 7 c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22 259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239 -63 453 -205 601 -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1 -116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45 525 79 48 24 97 81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50 680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0 -226 0 -347 85 -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332 -208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341 10 -140 81 -187 94 -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66 -422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36\n-485 54 -98 26 -198 119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83 54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12 -67z m630 47 c264 -18 777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134 274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11 -27 -907 2 -906 3 -59 160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z"}),Object(h.jsx)("path",{d:"M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262 -467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493 -551 85 -44 178 -78 271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23 86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50 -354 64 -507 36z m350 -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220 1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360 0 -320 84 -544 355 -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z"}),Object(h.jsx)("path",{d:"M2600 2697 c-36 -13 -85 -36 -109 -51 l-44 -28 116 -115 c81 -82 120 -114 131 -110 14 6 16 29 16 167 0 186 6 178 -110 137z"}),Object(h.jsx)("path",{d:"M2920 2561 c0 -139 2 -162 16 -168 11 -4 50 28 130 108 l115 114 -28 22 c-34 28 -138 70 -193 79 l-40 7 0 -162z"}),Object(h.jsx)("path",{d:"M2282 2448 c-28 -36 -92 -191 -92 -225 0 -10 34 -13 165 -13 151 0 165 1 165 18 0 15 -206 232 -221 232 -4 0 -11 -6 -17 -12z"}),Object(h.jsx)("path",{d:"M3222 2351 c-62 -59 -112 -115 -112 -124 0 -15 17 -17 165 -17 131 0 165 3 165 13 0 40 -69 205 -95 227 -7 6 -48 -27 -123 -99z"}),Object(h.jsx)("path",{d:"M2781 2332 c-12 -22 11 -62 34 -62 8 0 21 10 29 22 20 28 4 58 -29 58 -13 0 -29 -8 -34 -18z"}),Object(h.jsx)("path",{d:"M2749 2161 c-32 -33 -37 -67 -14 -110 29 -57 104 -64 151 -14 53 57 9 153 -71 153 -27 0 -44 -8 -66 -29z"}),Object(h.jsx)("path",{d:"M2570 2125 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16 -54 -2z"}),Object(h.jsx)("path",{d:"M3006 2124 c-20 -19 -20 -38 -2 -54 23 -19 61 -8 64 18 7 44 -32 67 -62 36z"}),Object(h.jsx)("path",{d:"M2190 1975 c0 -29 41 -140 72 -194 l31 -53 117 117 c71 71 116 123 113 131 -4 11 -40 14 -169 14 -141 0 -164 -2 -164 -15z"}),Object(h.jsx)("path",{d:"M3110 1972 c0 -9 51 -68 114 -131 l114 -114 31 54 c30 51 71 165 71 195 0 11 -31 14 -165 14 -151 0 -165 -1 -165 -18z"}),Object(h.jsx)("path",{d:"M2780 1901 c-7 -15 -5 -24 8 -41 32 -40 85 -4 62 41 -14 25 -56 25 -70 0z"}),Object(h.jsx)("path",{d:"M2562 1697 c-61 -62 -112 -115 -112 -119 0 -18 208 -108 249 -108 7 0 11 54 11 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"}),Object(h.jsx)("path",{d:"M2933 1803 c-15 -6 -19 -333 -4 -333 46 0 251 88 251 108 0 9 -223 232 -230 231 -3 0 -11 -3 -17 -6z"}),Object(h.jsx)("path",{d:"M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24 -411 33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118 380 196 487 396 518 1128 67 1560 -97 93 -166 140 -290 198 -137 64 -235 86 -407 91 -120 3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96 33 -289 5 -388 -110 -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176 238 -203 533 -71 797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207 81 364 77 109 -3 143 -7 210 -30z"}),Object(h.jsx)("path",{d:"M10703 2700 c-54 -19 -153 -71 -153 -80 0 -3 51 -57 114 -119 80 -80 119 -112 130 -108 14 5 16 29 16 167 l0 160 -27 -1 c-16 0 -52 -9 -80 -19z"}),Object(h.jsx)("path",{d:"M11020 2561 c0 -139 2 -162 16 -168 22 -8 247 216 234 232 -17 20 -163 84 -207 91 l-43 7 0 -162z"}),Object(h.jsx)("path",{d:"M10366 2424 c-29 -44 -76 -165 -76 -194 0 -19 7 -20 165 -20 126 0 165 3 165 13 0 7 -51 63 -114 126 l-114 114 -26 -39z"}),Object(h.jsx)("path",{d:"M11313 2348 c-61 -62 -109 -119 -106 -125 6 -15 333 -19 333 -4 0 45 -88 241 -108 241 -4 0 -57 -51 -119 -112z"}),Object(h.jsx)("path",{d:"M10882 2338 c-17 -17 -15 -32 7 -52 16 -14 23 -15 41 -6 31 17 24 64 -10 68 -14 2 -31 -3 -38 -10z"}),Object(h.jsx)("path",{d:"M10846 2159 c-68 -81 17 -194 110 -144 89 48 56 175 -46 175 -30 0 -44 -6 -64 -31z"}),Object(h.jsx)("path",{d:"M10670 2126 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20 -54 2z"}),Object(h.jsx)("path",{d:"M11106 2127 c-21 -16 -18 -45 7 -61 37 -23 77 35 41 61 -10 7 -21 13 -24 13 -3 0 -14 -6 -24 -13z"}),Object(h.jsx)("path",{d:"M10290 1970 c0 -29 43 -141 74 -195 l28 -48 116 116 c81 81 113 120 109 131 -6 14 -29 16 -167 16 -152 0 -160 -1 -160 -20z"}),Object(h.jsx)("path",{d:"M11207 1978 c-3 -7 47 -66 111 -130 l116 -118 27 43 c27 44 79 177 79 203 0 12 -28 14 -164 14 -122 0 -166 -3 -169 -12z"}),Object(h.jsx)("path",{d:"M10881 1901 c-14 -25 -5 -48 20 -56 27 -9 51 13 47 44 -4 34 -51 43 -67 12z"}),Object(h.jsx)("path",{d:"M10662 1697 c-61 -62 -112 -115 -112 -119 0 -20 201 -108 247 -108 10 0 13 34 13 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"}),Object(h.jsx)("path",{d:"M11033 1803 c-10 -3 -13 -47 -13 -169 0 -90 4 -164 8 -164 36 0 186 61 239 98 16 10 -216 242 -234 235z"})]})]})]}),Object(h.jsxs)("div",{className:"winners-name",children:[t," "]}),Object(h.jsx)("div",{className:"winners-win",children:r}),Object(h.jsx)("div",{className:"winners-time",children:(n/1e3).toFixed(2)})]})},a)}function I(e){for(var t=e.paginate,n=e.nextPage,a=e.prevPage,r=e.allPages,s=Object(c.useContext)(O),i=[],o=1;o<=r;o++)i.push(o);return Object(h.jsxs)("div",{className:"pagination-winner",children:[Object(h.jsxs)("h4",{children:["Page \u2116 ",s.state.currentWinnersPage]}),Object(h.jsx)("div",{className:"pagination-container",children:i.map((function(e,n){return Object(h.jsx)("div",{className:"pagination-num",onClick:function(){return t(e)},children:e},n)}))}),Object(h.jsxs)("div",{className:"pagination-buttons",children:[Object(h.jsx)("button",{onClick:a,children:"Prev"}),Object(h.jsx)("button",{onClick:n,children:"Next"})]})]})}var L=n(79),D=Object(m.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function E(){var e=D();return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(L.a,{}),Object(h.jsx)(L.a,{color:"secondary"})]})}function B(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useContext)(O);if(Object(c.useEffect)((function(){try{r.getWinners()}catch(e){console.log(e)}}),[]),!r.state.winners)return Object(h.jsx)(E,{});var s=r.state.currentWinnersPage*r.state.dataWinnersPage,i=Math.ceil(r.state.winners.length/r.state.dataWinnersPage),o=s-r.state.dataWinnersPage,l=r.state.winners.slice(o,s);return Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{isActiveLinkWinners:!0}),Object(h.jsxs)("h3",{children:["Winners (",r.state.winners.length,")"]}),Object(h.jsxs)("div",{className:"winners-row",children:[Object(h.jsx)("div",{className:"winners-car",children:"Car"}),Object(h.jsx)("div",{className:"winners-name",children:"Name"}),Object(h.jsx)("div",{className:"winners-win",children:"Wins"}),Object(h.jsx)("div",{className:"winners-time",onClick:function(){a(!n)},children:"Time"})]}),Object(h.jsx)("ol",{className:"winners-container",children:l.sort(n?function(e,t){return e.time>t.time?1:-1}:function(e,t){return e.time,t.time,-1}).map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)(A,Object(j.a)(Object(j.a)({},e),{},{i:t}),t)})}))}),Object(h.jsx)(I,{paginate:function(e){return r.setState(Object(j.a)(Object(j.a)({},r.state),{},{currentWinnersPage:e}))},nextPage:function(){r.state.currentWinnersPage!==i&&r.setState(Object(j.a)(Object(j.a)({},r.state),{},{currentWinnersPage:r.state.currentWinnersPage+1}))},prevPage:function(){1!==r.state.currentWinnersPage&&r.setState(Object(j.a)(Object(j.a)({},r.state),{},{currentWinnersPage:r.state.currentWinnersPage-1}))},allPages:i})]})}var R=function(){return Object(h.jsx)(i.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:T}),Object(h.jsx)(o.a,{path:"/garage",component:T}),Object(h.jsx)(o.a,{path:"/winners",component:B})]})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{children:Object(h.jsx)(R,{})})}),document.getElementById("root")),F()}},[[58,1,2]]]);
//# sourceMappingURL=main.00fa1426.chunk.js.map