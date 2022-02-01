(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),u=n(4651),c=n(7426);var l={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=u.useRouter(),f=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],u=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,h=e.shallow,g=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,x=c.useIntersection({rootMargin:"200px"}),_=r(x,2),j=_[0],w=_[1],C=a.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);a.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,w,y,n,o]);var E={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u}))}(e,o,d,p,m,h,g,y)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof y?y:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(p,N,o&&o.locales,o&&o.domainLocales);E.href=M||i.addBasePath(i.addLocale(p,N,o&&o.defaultLocale))}return a.default.cloneElement(t,E)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=o.useRef(),l=o.useState(!1),s=r(l,2),f=s[0],d=s[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var u=new Map},3540:function(e,t,n){"use strict";n.d(t,{y:function(){return a}});var r=n(9008),o=n(5893),a=function(e){var t=e.title,n=e.description;return(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("meta",{property:"og:title",content:t}),(0,o.jsx)("meta",{name:"description",content:n}),(0,o.jsx)("meta",{property:"og:description",content:n})]})}},2006:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(3540),o=n(9925),a=n.n(o),i=n(5893),u=function(e){var t=e.children,n=e.title,o=e.description,u=e.margin,c=void 0===u||u;return(0,i.jsxs)(i.Fragment,{children:[n&&o&&(0,i.jsx)(r.y,{title:n,description:o}),(0,i.jsxs)(a(),{className:"flex flex-col max-w-3xl mx-auto mb-16 sm:px-0",children:[n&&(0,i.jsx)("h1",{className:"text-5xl font-bold",children:n}),o&&(0,i.jsx)("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:o}),(0,i.jsx)("div",{className:c?"mt-8":void 0,children:t})]})]})}},4495:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return l}});var r=n(2006),o=n(4586),a=n(1664),i=n(5893),u=function(e){var t=e.slug,n=(e.date,e.title),r=e.excerpt;return(0,i.jsx)(a.default,{href:"/blog/[slug]",as:"/blog/".concat(t),children:(0,i.jsxs)("a",{className:"inline-block w-full",children:[(0,i.jsx)("h1",{className:"text-3xl max-w-lg font-bold tracking-tight",children:n}),(0,i.jsx)("p",{className:"mt-2 text-gray-600 dark:text-gray-400 max-w-xl",children:r})]})},t)},c=!0,l=function(e){var t=e.allPostsData;return(0,i.jsx)(r.Z,{title:"Blog",description:"A collection of blog posts I've written. Sorted chronologically.",children:(0,i.jsx)("div",{className:"mt-8 grid gap-8",children:t.map((function(e){var t=e.slug,n=e.date,r=e.title,a=e.excerpt;return(0,i.jsx)(u,{slug:t,date:n,title:r,excerpt:a},(0,o.Z)())}))})})}},5423:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(4495)}])},1664:function(e,t,n){e.exports=n(2167)},4861:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(7294));t.default=function(e){var t=i.useState(0),n=t[0],r=t[1],o=e.transitionDuration||400,a=e.delay||50,u=e.wrapperTag||"div",c=e.childTag||"div",l="undefined"===typeof e.visible||e.visible;return i.useEffect((function(){var t=i.default.Children.count(e.children);if(l||(t=0),t==n){var u=setTimeout((function(){e.onComplete&&e.onComplete()}),o);return function(){return clearTimeout(u)}}var c=t>n?1:-1,s=setTimeout((function(){r(n+c)}),a);return function(){return clearTimeout(s)}}),[i.default.Children.count(e.children),a,n,l,o]),i.default.createElement(u,{className:e.className},i.default.Children.map(e.children,(function(t,r){return i.default.createElement(c,{className:e.childClassName,style:{transition:"opacity "+o+"ms, transform "+o+"ms",transform:n>r?"none":"translateY(20px)",opacity:n>r?1:0}},t)})))}},9925:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(4861);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},4586:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return f}});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(e){return"string"===typeof e&&i.test(e)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};var f=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return s(r)}}},function(e){e.O(0,[774,888,179],(function(){return t=5423,e(e.s=t);var t}));var t=e.O();_N_E=t}]);