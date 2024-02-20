"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[348],{530:function(e,t,s){s.d(t,{Z:function(){return n}});var a=s(4792),r=s(2322);function n(e){let{adrs:t,to:s}=e;const n=[{name:"ADRs",stat:t.length},{name:"Collaborators",stat:t.reduce(((e,t)=>((t.node.frontmatter.deciders||[]).forEach((t=>e.add(t.toLowerCase()))),e)),new Set).size},{name:"Disciplines",stat:t.reduce(((e,t)=>((t.node.frontmatter.tags||[]).forEach((t=>e.add(t.toLowerCase()))),e)),new Set).size}];return(0,r.jsx)("div",{className:"container mb-5 mx-auto px-4 sm:px-6 lg:px-8 font-sans",children:(0,r.jsx)("dl",{className:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3",children:n.map((e=>{let{name:t,stat:n}=e;return(0,r.jsxs)(a.Link,{to:s||"/adrs",className:"px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 no-underline",children:[(0,r.jsx)("dt",{className:"text-sm font-medium text-gray-500 truncate",children:t}),(0,r.jsx)("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(0,r.jsx)("span",{className:"font-bold",children:n})})]},t)}))})})}},172:function(e,t,s){var a=s(2322);t.Z=e=>(0,a.jsx)("p",{className:"inline-flex font-semibold rounded "+("deprecated"===e.status?"bg-red-100 text-red-400":"bg-blue-100 text-blue-500")+" "+("large"===e.size?"text-md leading-7 px-4":"text-xs leading-5 px-2"),children:e.status})},3655:function(e,t,s){s.r(t),s.d(t,{Head:function(){return u}});var a=s(4792),r=s(2380),n=s(9983),l=s(9659),d=s(530),i=s(4963),c=s(172),m=s(9889),x=s(493),o=s(872),h=s(2322);const u=e=>{let{pageContext:{tag:t}}=e;return(0,h.jsx)(o.Z,{title:t?'ADRs tagged "'+t+'"':"All ADRs"})};t.default=e=>{const{data:{allMdx:{edges:t}},pageContext:{tag:s}}=e;return(0,h.jsxs)(i.Z,{...e,children:[(0,h.jsx)(x.Z,{preTitle:"",children:s?'ADRs tagged "'+s+'"':"All ADRs"}),(0,h.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,h.jsx)(d.Z,{adrs:t,to:s?"/adrs/"+s:"/adrs"})}),(0,h.jsx)("div",{className:"sm:rounded-md max-w-prose mx-auto",children:(0,h.jsx)("ul",{className:"shadow divide-y divide-gray-200",children:t.map(((e,t)=>{let{node:{frontmatter:{date:s,deciders:d,tags:i,title:x,status:o,deck:u},fields:{slug:f}}}=e;return(0,h.jsx)("li",{children:(0,h.jsxs)("div",{className:"block px-4 py-4 sm:px-6 hover:bg-gray-50",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between",children:[(0,h.jsx)(a.Link,{to:f,children:(0,h.jsx)("h2",{className:"text-sm font-semibold text-indigo-600 truncate",children:x})}),(0,h.jsx)("div",{className:"ml-2 flex-shrink-0 flex",children:(0,h.jsx)(c.Z,{status:o,size:"small"})})]}),(0,h.jsxs)("div",{className:"mt-2 sm:flex sm:justify-between",children:[(0,h.jsxs)("div",{className:"sm:flex",children:[d&&d.length?(0,h.jsxs)("p",{className:"flex items-center text-sm text-gray-500",title:d.join(", "),children:[(0,h.jsx)(r.Z,{className:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,h.jsx)("span",{className:"text-sm font-medium",children:1===d.length?"1 decider":d.length+" deciders"})]}):(0,h.jsx)(h.Fragment,{}),i&&i.length?(0,h.jsxs)("p",{className:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6",children:[(0,h.jsx)(n.Z,{className:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),i.join(", ")]}):(0,h.jsx)(h.Fragment,{})]}),(0,h.jsxs)("div",{className:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0",children:[(0,h.jsx)(l.Z,{className:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,h.jsxs)("p",{children:["Decided on ",(0,h.jsx)("time",{dateTime:s,children:s})]})]})]}),(0,h.jsx)("div",{className:"text-gray-500 text-sm mt-3 font-serif prose",children:(0,h.jsx)(m.D,{children:u||""})})]})},t)}))})})]})}},9659:function(e,t,s){var a=s(2784);const r=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}))}));t.Z=r},9983:function(e,t,s){var a=s(2784);const r=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}))}));t.Z=r},2380:function(e,t,s){var a=s(2784);const r=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}))}));t.Z=r}}]);
//# sourceMappingURL=component---gatsby-theme-adr-src-pages-adrs-tsx-91907943a27078e7fe6a.js.map