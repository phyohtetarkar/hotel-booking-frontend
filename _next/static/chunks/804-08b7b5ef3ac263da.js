"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{5704:function(t,e,n){n.d(e,{fi:function(){return y},kZ:function(){return g}});var r=n(400),o=n(2163),i=n(2057),a=n(2556),f=n(6333),u=n(4063),s=n(7252),c=n(611),p=n(138),d=n(583),l=n(1492),h=n(8552),m=n(7701),v={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(t){return!(t&&"function"==typeof t.getBoundingClientRect)})}function g(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,g=void 0===n?[]:n,y=e.defaultOptions,b=void 0===y?v:y;return function(t,e,n){void 0===n&&(n=b);var y,w,x={placement:"bottom",orderedModifiers:[],options:Object.assign({},v,b),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},O=[],j=!1,k={state:x,setOptions:function(n){var r,o,i,f,u,s="function"==typeof n?n(x.options):n;E(),x.options=Object.assign({},b,x.options,s),x.scrollParents={reference:(0,a.kK)(t)?(0,l.Z)(t):t.contextElement?(0,l.Z)(t.contextElement):[],popper:(0,l.Z)(e)};var c=(o=Object.keys(r=[].concat(g,x.options.modifiers).reduce(function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t},{})).map(function(t){return r[t]}),i=new Map,f=new Set,u=[],o.forEach(function(t){i.set(t.name,t)}),o.forEach(function(t){f.has(t.name)||function t(e){f.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!f.has(e)){var n=i.get(e);n&&t(n)}}),u.push(e)}(t)}),m.xs.reduce(function(t,e){return t.concat(u.filter(function(t){return t.phase===e}))},[]));return x.orderedModifiers=c.filter(function(t){return t.enabled}),x.orderedModifiers.forEach(function(t){var e=t.name,n=t.options,r=t.effect;if("function"==typeof r){var o=r({state:x,name:e,instance:k,options:void 0===n?{}:n});O.push(o||function(){})}}),k.update()},forceUpdate:function(){if(!j){var t,e,n,l,m,v,g,y,b,w,O,E,D=x.elements,A=D.reference,M=D.popper;if(Z(A,M)){;x.rects={reference:(e=(0,h.Z)(M),n="fixed"===x.options.strategy,l=(0,a.Re)(e),y=(0,a.Re)(e)&&(m=e.getBoundingClientRect(),v=(0,p.NM)(m.width)/e.offsetWidth||1,g=(0,p.NM)(m.height)/e.offsetHeight||1,1!==v||1!==g),b=(0,s.Z)(e),w=(0,r.Z)(A,y,n),O={scrollLeft:0,scrollTop:0},E={x:0,y:0},(l||!l&&!n)&&(("body"!==(0,f.Z)(e)||(0,c.Z)(b))&&(O=(t=e)!==(0,i.Z)(t)&&(0,a.Re)(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:(0,o.Z)(t)),(0,a.Re)(e)?(E=(0,r.Z)(e,!0),E.x+=e.clientLeft,E.y+=e.clientTop):b&&(E.x=(0,u.Z)(b))),{x:w.left+O.scrollLeft-E.x,y:w.top+O.scrollTop-E.y,width:w.width,height:w.height}),popper:(0,d.Z)(M)},x.reset=!1,x.placement=x.options.placement,x.orderedModifiers.forEach(function(t){return x.modifiersData[t.name]=Object.assign({},t.data)});for(var R=0;R<x.orderedModifiers.length;R++){if(!0===x.reset){x.reset=!1,R=-1;continue}var L=x.orderedModifiers[R],F=L.fn,P=L.options,V=void 0===P?{}:P,B=L.name;"function"==typeof F&&(x=F({state:x,options:V,name:B,instance:k})||x)}}}},update:(y=function(){return new Promise(function(t){k.forceUpdate(),t(x)})},function(){return w||(w=new Promise(function(t){Promise.resolve().then(function(){w=void 0,t(y())})})),w}),destroy:function(){E(),j=!0}};if(!Z(t,e))return k;function E(){O.forEach(function(t){return t()}),O=[]}return k.setOptions(n).then(function(t){!j&&n.onFirstUpdate&&n.onFirstUpdate(t)}),k}}var y=g()},4985:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(2556);function o(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&(0,r.Zq)(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},400:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(2556),o=n(138),i=n(2057),a=n(7977);function f(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var f=t.getBoundingClientRect(),u=1,s=1;e&&(0,r.Re)(t)&&(u=t.offsetWidth>0&&(0,o.NM)(f.width)/t.offsetWidth||1,s=t.offsetHeight>0&&(0,o.NM)(f.height)/t.offsetHeight||1);var c=((0,r.kK)(t)?(0,i.Z)(t):window).visualViewport,p=!(0,a.Z)()&&n,d=(f.left+(p&&c?c.offsetLeft:0))/u,l=(f.top+(p&&c?c.offsetTop:0))/s,h=f.width/u,m=f.height/s;return{width:h,height:m,top:l,right:d+h,bottom:l+m,left:d,x:d,y:l}}},3062:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(2057);function o(t){return(0,r.Z)(t).getComputedStyle(t)}},7252:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(2556);function o(t){return(((0,r.kK)(t)?t.ownerDocument:t.document)||window.document).documentElement}},583:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(400);function o(t){var e=(0,r.Z)(t),n=t.offsetWidth,o=t.offsetHeight;return 1>=Math.abs(e.width-n)&&(n=e.width),1>=Math.abs(e.height-o)&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}},6333:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){return t?(t.nodeName||"").toLowerCase():null}},8552:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(2057),o=n(6333),i=n(3062),a=n(2556),f=n(5923),u=n(5918);function s(t){return(0,a.Re)(t)&&"fixed"!==(0,i.Z)(t).position?t.offsetParent:null}function c(t){for(var e,n=(0,r.Z)(t),c=s(t);c&&(e=c,["table","td","th"].indexOf((0,o.Z)(e))>=0)&&"static"===(0,i.Z)(c).position;)c=s(c);return c&&("html"===(0,o.Z)(c)||"body"===(0,o.Z)(c)&&"static"===(0,i.Z)(c).position)?n:c||function(t){var e=/firefox/i.test((0,u.Z)());if(/Trident/i.test((0,u.Z)())&&(0,a.Re)(t)&&"fixed"===(0,i.Z)(t).position)return null;var n=(0,f.Z)(t);for((0,a.Zq)(n)&&(n=n.host);(0,a.Re)(n)&&0>["html","body"].indexOf((0,o.Z)(n));){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(t)||n}},5923:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(6333),o=n(7252),i=n(2556);function a(t){return"html"===(0,r.Z)(t)?t:t.assignedSlot||t.parentNode||((0,i.Zq)(t)?t.host:null)||(0,o.Z)(t)}},2057:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}},2163:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(2057);function o(t){var e=(0,r.Z)(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}},4063:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(400),o=n(7252),i=n(2163);function a(t){return(0,r.Z)((0,o.Z)(t)).left+(0,i.Z)(t).scrollLeft}},2556:function(t,e,n){n.d(e,{Re:function(){return i},Zq:function(){return a},kK:function(){return o}});var r=n(2057);function o(t){var e=(0,r.Z)(t).Element;return t instanceof e||t instanceof Element}function i(t){var e=(0,r.Z)(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function a(t){if("undefined"==typeof ShadowRoot)return!1;var e=(0,r.Z)(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}},7977:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(5918);function o(){return!/^((?!chrome|android).)*safari/i.test((0,r.Z)())}},611:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(3062);function o(t){var e=(0,r.Z)(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},1492:function(t,e,n){n.d(e,{Z:function(){return function t(e,n){void 0===n&&(n=[]);var u,s=function t(e){return["html","body","#document"].indexOf((0,i.Z)(e))>=0?e.ownerDocument.body:(0,a.Re)(e)&&(0,o.Z)(e)?e:t((0,r.Z)(e))}(e),c=s===(null==(u=e.ownerDocument)?void 0:u.body),p=(0,f.Z)(s),d=c?[p].concat(p.visualViewport||[],(0,o.Z)(s)?s:[]):s,l=n.concat(d);return c?l:l.concat(t((0,r.Z)(d)))}}});var r=n(5923),o=n(611),i=n(6333),a=n(2556),f=n(2057)},7701:function(t,e,n){n.d(e,{BL:function(){return s},Ct:function(){return v},DH:function(){return w},F2:function(){return i},I:function(){return o},MS:function(){return k},N7:function(){return Z},Pj:function(){return d},XM:function(){return b},YP:function(){return h},bw:function(){return m},cW:function(){return j},d7:function(){return f},ij:function(){return g},iv:function(){return O},k5:function(){return l},mv:function(){return u},r5:function(){return y},t$:function(){return a},ut:function(){return c},wX:function(){return x},we:function(){return r},xs:function(){return E},zV:function(){return p}});var r="top",o="bottom",i="right",a="left",f="auto",u=[r,o,i,a],s="start",c="end",p="clippingParents",d="viewport",l="popper",h="reference",m=u.reduce(function(t,e){return t.concat([e+"-"+s,e+"-"+c])},[]),v=[].concat(u,[f]).reduce(function(t,e){return t.concat([e,e+"-"+s,e+"-"+c])},[]),Z="beforeRead",g="read",y="afterRead",b="beforeMain",w="main",x="afterMain",O="beforeWrite",j="write",k="afterWrite",E=[Z,g,y,b,w,x,O,j,k]},7824:function(t,e,n){var r=n(6333),o=n(2556);e.Z={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},a=e.elements[t];(0,o.Re)(a)&&(0,r.Z)(a)&&(Object.assign(a.style,n),Object.keys(i).forEach(function(t){var e=i[t];!1===e?a.removeAttribute(t):a.setAttribute(t,!0===e?"":e)}))})},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(t){var i=e.elements[t],a=e.attributes[t]||{},f=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce(function(t,e){return t[e]="",t},{});(0,o.Re)(i)&&(0,r.Z)(i)&&(Object.assign(i.style,f),Object.keys(a).forEach(function(t){i.removeAttribute(t)}))})}},requires:["computeStyles"]}},6896:function(t,e,n){var r=n(6206),o=n(583),i=n(4985),a=n(8552),f=n(1516),u=n(7516),s=n(3293),c=n(3706),p=n(7701);e.Z={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n,i=t.state,d=t.name,l=t.options,h=i.elements.arrow,m=i.modifiersData.popperOffsets,v=(0,r.Z)(i.placement),Z=(0,f.Z)(v),g=[p.t$,p.F2].indexOf(v)>=0?"height":"width";if(h&&m){var y=(e="function"==typeof(e=l.padding)?e(Object.assign({},i.rects,{placement:i.placement})):e,(0,s.Z)("number"!=typeof e?e:(0,c.Z)(e,p.mv))),b=(0,o.Z)(h),w="y"===Z?p.we:p.t$,x="y"===Z?p.I:p.F2,O=i.rects.reference[g]+i.rects.reference[Z]-m[Z]-i.rects.popper[g],j=m[Z]-i.rects.reference[Z],k=(0,a.Z)(h),E=k?"y"===Z?k.clientHeight||0:k.clientWidth||0:0,D=y[w],A=E-b[g]-y[x],M=E/2-b[g]/2+(O/2-j/2),R=(0,u.u)(D,M,A);i.modifiersData[d]=((n={})[Z]=R,n.centerOffset=R-M,n)}},effect:function(t){var e=t.state,n=t.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=e.elements.popper.querySelector(r)))&&(0,i.Z)(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},6531:function(t,e,n){var r=n(7701),o=n(8552),i=n(2057),a=n(7252),f=n(3062),u=n(6206),s=n(4943),c=n(138),p={top:"auto",right:"auto",bottom:"auto",left:"auto"};function d(t){var e,n,u,s,d,l,h,m=t.popper,v=t.popperRect,Z=t.placement,g=t.variation,y=t.offsets,b=t.position,w=t.gpuAcceleration,x=t.adaptive,O=t.roundOffsets,j=t.isFixed,k=y.x,E=void 0===k?0:k,D=y.y,A=void 0===D?0:D,M="function"==typeof O?O({x:E,y:A}):{x:E,y:A};E=M.x,A=M.y;var R=y.hasOwnProperty("x"),L=y.hasOwnProperty("y"),F=r.t$,P=r.we,V=window;if(x){var B=(0,o.Z)(m),W="clientHeight",H="clientWidth";B===(0,i.Z)(m)&&(B=(0,a.Z)(m),"static"!==(0,f.Z)(B).position&&"absolute"===b&&(W="scrollHeight",H="scrollWidth")),(Z===r.we||(Z===r.t$||Z===r.F2)&&g===r.ut)&&(P=r.I,A-=(j&&B===V&&V.visualViewport?V.visualViewport.height:B[W])-v.height,A*=w?1:-1),(Z===r.t$||(Z===r.we||Z===r.I)&&g===r.ut)&&(F=r.F2,E-=(j&&B===V&&V.visualViewport?V.visualViewport.width:B[H])-v.width,E*=w?1:-1)}var I=Object.assign({position:b},x&&p),N=!0===O?(e={x:E,y:A},n=(0,i.Z)(m),u=e.x,s=e.y,d=n.devicePixelRatio||1,{x:(0,c.NM)(u*d)/d||0,y:(0,c.NM)(s*d)/d||0}):{x:E,y:A};return(E=N.x,A=N.y,w)?Object.assign({},I,((h={})[P]=L?"0":"",h[F]=R?"0":"",h.transform=1>=(V.devicePixelRatio||1)?"translate("+E+"px, "+A+"px)":"translate3d("+E+"px, "+A+"px, 0)",h)):Object.assign({},I,((l={})[P]=L?A+"px":"",l[F]=R?E+"px":"",l.transform="",l))}e.Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,f={placement:(0,u.Z)(e.placement),variation:(0,s.Z)(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,d(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,d(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}}},2372:function(t,e,n){var r=n(2057),o={passive:!0};e.Z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,i=t.options,a=i.scroll,f=void 0===a||a,u=i.resize,s=void 0===u||u,c=(0,r.Z)(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return f&&p.forEach(function(t){t.addEventListener("scroll",n.update,o)}),s&&c.addEventListener("resize",n.update,o),function(){f&&p.forEach(function(t){t.removeEventListener("scroll",n.update,o)}),s&&c.removeEventListener("resize",n.update,o)}},data:{}}},8855:function(t,e,n){n.d(e,{Z:function(){return p}});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(t){return t.replace(/left|right|bottom|top/g,function(t){return r[t]})}var i=n(6206),a={start:"end",end:"start"};function f(t){return t.replace(/start|end/g,function(t){return a[t]})}var u=n(6486),s=n(4943),c=n(7701),p={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var a=n.mainAxis,p=void 0===a||a,d=n.altAxis,l=void 0===d||d,h=n.fallbackPlacements,m=n.padding,v=n.boundary,Z=n.rootBoundary,g=n.altBoundary,y=n.flipVariations,b=void 0===y||y,w=n.allowedAutoPlacements,x=e.options.placement,O=(0,i.Z)(x)===x,j=h||(O||!b?[o(x)]:function(t){if((0,i.Z)(t)===c.d7)return[];var e=o(t);return[f(t),e,f(e)]}(x)),k=[x].concat(j).reduce(function(t,n){var r,o,a,f,p,d,l,h,g,y,x,O;return t.concat((0,i.Z)(n)===c.d7?(o=(r={placement:n,boundary:v,rootBoundary:Z,padding:m,flipVariations:b,allowedAutoPlacements:w}).placement,a=r.boundary,f=r.rootBoundary,p=r.padding,d=r.flipVariations,h=void 0===(l=r.allowedAutoPlacements)?c.Ct:l,0===(x=(y=(g=(0,s.Z)(o))?d?c.bw:c.bw.filter(function(t){return(0,s.Z)(t)===g}):c.mv).filter(function(t){return h.indexOf(t)>=0})).length&&(x=y),Object.keys(O=x.reduce(function(t,n){return t[n]=(0,u.Z)(e,{placement:n,boundary:a,rootBoundary:f,padding:p})[(0,i.Z)(n)],t},{})).sort(function(t,e){return O[t]-O[e]})):n)},[]),E=e.rects.reference,D=e.rects.popper,A=new Map,M=!0,R=k[0],L=0;L<k.length;L++){var F=k[L],P=(0,i.Z)(F),V=(0,s.Z)(F)===c.BL,B=[c.we,c.I].indexOf(P)>=0,W=B?"width":"height",H=(0,u.Z)(e,{placement:F,boundary:v,rootBoundary:Z,altBoundary:g,padding:m}),I=B?V?c.F2:c.t$:V?c.I:c.we;E[W]>D[W]&&(I=o(I));var N=o(I),q=[];if(p&&q.push(H[P]<=0),l&&q.push(H[I]<=0,H[N]<=0),q.every(function(t){return t})){R=F,M=!1;break}A.set(F,q)}if(M)for(var C=b?3:1,T=function(t){var e=k.find(function(e){var n=A.get(e);if(n)return n.slice(0,t).every(function(t){return t})});if(e)return R=e,"break"},$=C;$>0&&"break"!==T($);$--);e.placement!==R&&(e.modifiersData[r]._skip=!0,e.placement=R,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},9892:function(t,e,n){var r=n(7701),o=n(6486);function i(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function a(t){return[r.we,r.F2,r.I,r.t$].some(function(e){return t[e]>=0})}e.Z={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,f=e.rects.popper,u=e.modifiersData.preventOverflow,s=(0,o.Z)(e,{elementContext:"reference"}),c=(0,o.Z)(e,{altBoundary:!0}),p=i(s,r),d=i(c,f,u),l=a(p),h=a(d);e.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:d,isReferenceHidden:l,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}}},2122:function(t,e,n){var r=n(6206),o=n(7701);e.Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,i=t.name,a=n.offset,f=void 0===a?[0,0]:a,u=o.Ct.reduce(function(t,n){var i,a,u,s,c,p;return t[n]=(i=e.rects,a=(0,r.Z)(n),u=[o.t$,o.we].indexOf(a)>=0?-1:1,c=(s="function"==typeof f?f(Object.assign({},i,{placement:n})):f)[0],p=s[1],c=c||0,p=(p||0)*u,[o.t$,o.F2].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}),t},{}),s=u[e.placement],c=s.x,p=s.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=p),e.modifiersData[i]=u}}},7421:function(t,e,n){var r=n(2581);e.Z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=(0,r.Z)({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}}},394:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(7701),o=n(6206),i=n(1516),a=n(7516),f=n(583),u=n(8552),s=n(6486),c=n(4943),p=n(3607),d=n(138),l={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,l=t.name,h=n.mainAxis,m=n.altAxis,v=n.boundary,Z=n.rootBoundary,g=n.altBoundary,y=n.padding,b=n.tether,w=void 0===b||b,x=n.tetherOffset,O=void 0===x?0:x,j=(0,s.Z)(e,{boundary:v,rootBoundary:Z,padding:y,altBoundary:g}),k=(0,o.Z)(e.placement),E=(0,c.Z)(e.placement),D=!E,A=(0,i.Z)(k),M="x"===A?"y":"x",R=e.modifiersData.popperOffsets,L=e.rects.reference,F=e.rects.popper,P="function"==typeof O?O(Object.assign({},e.rects,{placement:e.placement})):O,V="number"==typeof P?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),B=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,W={x:0,y:0};if(R){if(void 0===h||h){var H,I="y"===A?r.we:r.t$,N="y"===A?r.I:r.F2,q="y"===A?"height":"width",C=R[A],T=C+j[I],$=C-j[N],S=w?-F[q]/2:0,K=E===r.BL?L[q]:F[q],_=E===r.BL?-F[q]:-L[q],z=e.elements.arrow,U=w&&z?(0,f.Z)(z):{width:0,height:0},X=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:(0,p.Z)(),Y=X[I],G=X[N],J=(0,a.u)(0,L[q],U[q]),Q=D?L[q]/2-S-J-Y-V.mainAxis:K-J-Y-V.mainAxis,tt=D?-L[q]/2+S+J+G+V.mainAxis:_+J+G+V.mainAxis,te=e.elements.arrow&&(0,u.Z)(e.elements.arrow),tn=te?"y"===A?te.clientTop||0:te.clientLeft||0:0,tr=null!=(H=null==B?void 0:B[A])?H:0,to=(0,a.u)(w?(0,d.VV)(T,C+Q-tr-tn):T,C,w?(0,d.Fp)($,C+tt-tr):$);R[A]=to,W[A]=to-C}if(void 0!==m&&m){var ti,ta="x"===A?r.we:r.t$,tf="x"===A?r.I:r.F2,tu=R[M],ts="y"===M?"height":"width",tc=tu+j[ta],tp=tu-j[tf],td=-1!==[r.we,r.t$].indexOf(k),tl=null!=(ti=null==B?void 0:B[M])?ti:0,th=td?tc:tu-L[ts]-F[ts]-tl+V.altAxis,tm=td?tu+L[ts]+F[ts]-tl-V.altAxis:tp,tv=w&&td?(0,a.q)(th,tu,tm):(0,a.u)(w?th:tc,tu,w?tm:tp);R[M]=tv,W[M]=tv-tu}e.modifiersData[l]=W}},requiresIfExists:["offset"]}},804:function(t,e,n){n.d(e,{fi:function(){return h}});var r=n(5704),o=n(2372),i=n(7421),a=n(6531),f=n(7824),u=n(2122),s=n(8855),c=n(394),p=n(6896),d=n(9892),l=[o.Z,i.Z,a.Z,f.Z,u.Z,s.Z,c.Z,p.Z,d.Z],h=(0,r.kZ)({defaultModifiers:l})},2581:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(6206),o=n(4943),i=n(1516),a=n(7701);function f(t){var e,n=t.reference,f=t.element,u=t.placement,s=u?(0,r.Z)(u):null,c=u?(0,o.Z)(u):null,p=n.x+n.width/2-f.width/2,d=n.y+n.height/2-f.height/2;switch(s){case a.we:e={x:p,y:n.y-f.height};break;case a.I:e={x:p,y:n.y+n.height};break;case a.F2:e={x:n.x+n.width,y:d};break;case a.t$:e={x:n.x-f.width,y:d};break;default:e={x:n.x,y:n.y}}var l=s?(0,i.Z)(s):null;if(null!=l){var h="y"===l?"height":"width";switch(c){case a.BL:e[l]=e[l]-(n[h]/2-f[h]/2);break;case a.ut:e[l]=e[l]+(n[h]/2-f[h]/2)}}return e}},6486:function(t,e,n){n.d(e,{Z:function(){return O}});var r=n(7701),o=n(2057),i=n(7252),a=n(4063),f=n(7977),u=n(3062),s=n(2163),c=n(138),p=n(1492),d=n(8552),l=n(2556),h=n(400),m=n(5923),v=n(4985),Z=n(6333);function g(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function y(t,e,n){var p,d,m,v,Z,y,b,w,x,O;return e===r.Pj?g(function(t,e){var n=(0,o.Z)(t),r=(0,i.Z)(t),u=n.visualViewport,s=r.clientWidth,c=r.clientHeight,p=0,d=0;if(u){s=u.width,c=u.height;var l=(0,f.Z)();(l||!l&&"fixed"===e)&&(p=u.offsetLeft,d=u.offsetTop)}return{width:s,height:c,x:p+(0,a.Z)(t),y:d}}(t,n)):(0,l.kK)(e)?((p=(0,h.Z)(e,!1,"fixed"===n)).top=p.top+e.clientTop,p.left=p.left+e.clientLeft,p.bottom=p.top+e.clientHeight,p.right=p.left+e.clientWidth,p.width=e.clientWidth,p.height=e.clientHeight,p.x=p.left,p.y=p.top,p):g((d=(0,i.Z)(t),v=(0,i.Z)(d),Z=(0,s.Z)(d),y=null==(m=d.ownerDocument)?void 0:m.body,b=(0,c.Fp)(v.scrollWidth,v.clientWidth,y?y.scrollWidth:0,y?y.clientWidth:0),w=(0,c.Fp)(v.scrollHeight,v.clientHeight,y?y.scrollHeight:0,y?y.clientHeight:0),x=-Z.scrollLeft+(0,a.Z)(d),O=-Z.scrollTop,"rtl"===(0,u.Z)(y||v).direction&&(x+=(0,c.Fp)(v.clientWidth,y?y.clientWidth:0)-b),{width:b,height:w,x:x,y:O}))}var b=n(2581),w=n(3293),x=n(3706);function O(t,e){void 0===e&&(e={});var n,o,a,f,s,O,j=e,k=j.placement,E=void 0===k?t.placement:k,D=j.strategy,A=void 0===D?t.strategy:D,M=j.boundary,R=void 0===M?r.zV:M,L=j.rootBoundary,F=void 0===L?r.Pj:L,P=j.elementContext,V=void 0===P?r.k5:P,B=j.altBoundary,W=j.padding,H=void 0===W?0:W,I=(0,w.Z)("number"!=typeof H?H:(0,x.Z)(H,r.mv)),N=V===r.k5?r.YP:r.k5,q=t.rects.popper,C=t.elements[void 0!==B&&B?N:V],T=(n=(0,l.kK)(C)?C:C.contextElement||(0,i.Z)(t.elements.popper),s=(f=[].concat("clippingParents"===R?(o=(0,p.Z)((0,m.Z)(n)),a=["absolute","fixed"].indexOf((0,u.Z)(n).position)>=0&&(0,l.Re)(n)?(0,d.Z)(n):n,(0,l.kK)(a)?o.filter(function(t){return(0,l.kK)(t)&&(0,v.Z)(t,a)&&"body"!==(0,Z.Z)(t)}):[]):[].concat(R),[F]))[0],(O=f.reduce(function(t,e){var r=y(n,e,A);return t.top=(0,c.Fp)(r.top,t.top),t.right=(0,c.VV)(r.right,t.right),t.bottom=(0,c.VV)(r.bottom,t.bottom),t.left=(0,c.Fp)(r.left,t.left),t},y(n,s,A))).width=O.right-O.left,O.height=O.bottom-O.top,O.x=O.left,O.y=O.top,O),$=(0,h.Z)(t.elements.reference),S=(0,b.Z)({reference:$,element:q,strategy:"absolute",placement:E}),K=g(Object.assign({},q,S)),_=V===r.k5?K:$,z={top:T.top-_.top+I.top,bottom:_.bottom-T.bottom+I.bottom,left:T.left-_.left+I.left,right:_.right-T.right+I.right},U=t.modifiersData.offset;if(V===r.k5&&U){var X=U[E];Object.keys(z).forEach(function(t){var e=[r.F2,r.I].indexOf(t)>=0?1:-1,n=[r.we,r.I].indexOf(t)>=0?"y":"x";z[t]+=X[n]*e})}return z}},3706:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t,e){return e.reduce(function(e,n){return e[n]=t,e},{})}},6206:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){return t.split("-")[0]}},3607:function(t,e,n){n.d(e,{Z:function(){return r}});function r(){return{top:0,right:0,bottom:0,left:0}}},1516:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}},4943:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){return t.split("-")[1]}},138:function(t,e,n){n.d(e,{Fp:function(){return r},NM:function(){return i},VV:function(){return o}});var r=Math.max,o=Math.min,i=Math.round},3293:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(3607);function o(t){return Object.assign({},(0,r.Z)(),t)}},5918:function(t,e,n){n.d(e,{Z:function(){return r}});function r(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}},7516:function(t,e,n){n.d(e,{q:function(){return i},u:function(){return o}});var r=n(138);function o(t,e,n){return(0,r.Fp)(t,(0,r.VV)(e,n))}function i(t,e,n){var r=o(t,e,n);return r>n?n:r}}}]);