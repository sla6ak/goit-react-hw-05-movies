"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[379],{7379:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r,a,c,s,i=t(885),o=t(2791),u=t(168),p=t(9958),d=p.Z.h1(r||(r=(0,u.Z)(["\ncolor: #2e2e33;\ndisplay: flex;\njustify-content: center;\nmargin-bottom: 20px;\nbackground-color: #1717ad21;\npadding: 10px;\n"]))),f=p.Z.img(a||(a=(0,u.Z)(["\nmargin: 0;\n"]))),l=p.Z.div(c||(c=(0,u.Z)(["\ndisplay: flex;\n"]))),h=p.Z.div(s||(s=(0,u.Z)(["\npadding: 15px;\n"]))),v=t(3504),x=t(6871),m=t(6557),j=t(6794),w=t(1361),g=t(184),k=function(){var e=(0,o.useState)({}),n=(0,i.Z)(e,2),t=n[0],r=n[1],a=(0,x.UO)().movieId,c=(0,x.s0)();return(0,o.useEffect)((function(){(0,j.u3)(a).then((function(e){r(e)}))}),[a]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.Z,{onClick:function(){return c(-1)},variant:"contained",sx:{mb:"10px"},children:"Back"}),(0,g.jsx)(d,{children:t.original_title}),(0,g.jsxs)(l,{children:[t.poster_path?(0,g.jsx)(f,{src:"https://image.tmdb.org/t/p/w300"+t.poster_path,alt:""}):(0,g.jsx)(f,{src:"../../img/mf-no-poster-available-v2.png",alt:""}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(h,{children:[" ",(0,g.jsx)("h3",{children:"Overview: "}),t.overview]}),(0,g.jsxs)(h,{children:[(0,g.jsx)("h3",{children:"Release date: "}),t.release_date]}),(0,g.jsxs)(h,{children:[(0,g.jsx)("h3",{children:"Vote average: "}),t.vote_average]})]})]}),(0,g.jsx)(v.OL,{style:w.j,className:"linkBar",to:"cast",children:"cast"}),(0,g.jsx)(v.OL,{style:w.j,to:"reviews",children:"reviews"}),(0,g.jsx)(x.j3,{context:[t]})]})}},6794:function(e,n,t){t.d(n,{k9:function(){return o},mJ:function(){return u},u3:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),s="https://api.themoviedb.org/3/",i="c4ff5df06d9c3bc212d0ff99e5222626",o=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:i,page:1}),e.next=3,fetch("".concat(s,"trending/movie/week?").concat(n));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:i,page:1,query:n,include_adult:!1}),e.next=3,fetch("".concat(s,"search/movie?").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:i}),e.next=3,fetch("".concat(s,"movie/").concat(n,"?").concat(t,"&append_to_response=credits,reviews"));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=379.fea3015e.chunk.js.map