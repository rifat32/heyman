(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[503],{3540:function(t,e,n){"use strict";n.d(e,{y:function(){return a}});var r=n(9008),i=n(5893),a=function(t){var e=t.title,n=t.description;return(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:e}),(0,i.jsx)("meta",{property:"og:title",content:e}),(0,i.jsx)("meta",{name:"description",content:n}),(0,i.jsx)("meta",{property:"og:description",content:n})]})}},2006:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(3540),i=n(9925),a=n.n(i),o=n(5893),u=function(t){var e=t.children,n=t.title,i=t.description,u=t.margin,s=void 0===u||u;return(0,o.jsxs)(o.Fragment,{children:[n&&i&&(0,o.jsx)(r.y,{title:n,description:i}),(0,o.jsxs)(a(),{className:"flex flex-col max-w-3xl mx-auto mb-16 sm:px-0",children:[n&&(0,o.jsx)("h1",{className:"text-5xl font-bold",children:n}),i&&(0,o.jsx)("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:i}),(0,o.jsx)("div",{className:s?"mt-8":void 0,children:e})]})]})}},3481:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var r=n(2006),i=n(4586),a=[{title:"Dragon Ball",href:"https://myanimelist.net/anime/223/Dragon_Ball?q=dragon%20ba&cat=anime",img:"https://i.imgur.com/8ILBB7F.jpeg",starred:!0},{title:"Death Note: Rewrite",href:"https://myanimelist.net/anime/2994/Death_Note__Rewrite?q=death%20note&cat=anime",img:"https://i.imgur.com/BZeyceQ.jpeg",starred:!0},{title:"Attack on Titan",href:"https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",img:"https://i.imgur.com/ayGXjvN.jpeg",starred:!0},{title:"Jujutsu Kaisen (TV)",href:"https://myanimelist.net/anime/40748/Jujutsu_Kaisen_TV",img:"https://i.imgur.com/l9bDXet.jpeg",starred:!0},{title:"Parasyte: The Maxim",href:"https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu?q=Parasyte%20(Kiseijuu)&cat=anime",img:"https://i.imgur.com/H0wPp3M.png",starred:!0}],o=n(7294),u=n(5893),s=function(t){var e=t.title,n=t.href,r=t.img,i=t.altTitle,a=(t.starred,(0,o.useState)(!1)),s=a[0],c=a[1];return(0,u.jsxs)("a",{href:n,rel:"noopener noreferrer",target:"_blank",onMouseOver:function(){return c(!0)},onTouchStart:function(){return c(!0)},onTouchEnd:function(){return c(!1)},onMouseLeave:function(){return c(!1)},className:"relative h-32 focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left shadow-lg max-w-2xl",children:[(0,u.jsx)("div",{className:"transition duration-300 ease-in-out ".concat(s?"opacity-40":"opacity-100 "," rounded-md bg-cover absolute w-full h-full"),style:{backgroundImage:"url('".concat(r,"')"),backgroundSize:"100%,100%"}}),(0,u.jsxs)("div",{className:"transition duration-300 ease-in-out ".concat(s?"opacity-100":"opacity-0 "," ml-0 sm:ml-4 z-40 text-2xl my-auto font-bold"),children:[(0,u.jsx)("div",{children:e})," ",i&&(0,u.jsxs)("div",{className:"text-xs text-gray-900 dark:text-gray-200 italic font-semibold opacity-75",children:["(",i,")"]})]})]})},c=function(){return(0,u.jsx)(r.Z,{title:"Anime",description:"A collection of my favourite anime.",children:(0,u.jsx)("div",{className:"grid gap-6",children:a.map((function(t){return(0,u.jsx)(s,{title:t.title,altTitle:t.altTitle,href:t.href,img:t.img,starred:t.starred},(0,i.Z)())}))})})}},6918:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/anime",function(){return n(3481)}])},4861:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(7294));e.default=function(t){var e=o.useState(0),n=e[0],r=e[1],i=t.transitionDuration||400,a=t.delay||50,u=t.wrapperTag||"div",s=t.childTag||"div",c="undefined"===typeof t.visible||t.visible;return o.useEffect((function(){var e=o.default.Children.count(t.children);if(c||(e=0),e==n){var u=setTimeout((function(){t.onComplete&&t.onComplete()}),i);return function(){return clearTimeout(u)}}var s=e>n?1:-1,l=setTimeout((function(){r(n+s)}),a);return function(){return clearTimeout(l)}}),[o.default.Children.count(t.children),a,n,c,i]),o.default.createElement(u,{className:t.className},o.default.Children.map(t.children,(function(e,r){return o.default.createElement(s,{className:t.childClassName,style:{transition:"opacity "+i+"ms, transform "+i+"ms",transform:n>r?"none":"translateY(20px)",opacity:n>r?1:0}},e)})))}},9925:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(4861);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(i).default}})},4586:function(t,e,n){"use strict";var r;n.d(e,{Z:function(){return d}});var i=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(t){return"string"===typeof t&&o.test(t)},s=[],c=0;c<256;++c)s.push((c+256).toString(16).substr(1));var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};var d=function(t,e,n){var r=(t=t||{}).random||(t.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return l(r)}}},function(t){t.O(0,[774,888,179],(function(){return e=6918,t(t.s=e);var e}));var e=t.O();_N_E=e}]);