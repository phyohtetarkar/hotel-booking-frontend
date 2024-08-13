(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{8864:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),function(e,l){for(var t in l)Object.defineProperty(e,t,{enumerable:!0,get:l[t]})}(l,{default:function(){return i},noSSR:function(){return d}});let a=t(8754);t(5893),t(7294);let s=a._(t(6016));function r(e){return{default:(null==e?void 0:e.default)||e}}function d(e,l){return delete l.webpack,delete l.modules,e(l)}function i(e,l){let t=s.default,a={loading:e=>{let{error:l,isLoading:t,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e});let i=(a={...a,...l}).loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?t({...a,loader:()=>null!=i?i().then(r):Promise.resolve(r(()=>null))}):(delete a.webpack,delete a.modules,d(t,a))}("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),e.exports=l.default)},572:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"LoadableContext",{enumerable:!0,get:function(){return a}});let a=t(8754)._(t(7294)).default.createContext(null)},6016:function(e,l,t){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return m}});let a=t(8754)._(t(7294)),s=t(572),r=[],d=[],i=!1;function n(e){let l=e(),t={loading:!0,loaded:null,error:null};return t.promise=l.then(e=>(t.loading=!1,t.loaded=e,e)).catch(e=>{throw t.loading=!1,t.error=e,e}),t}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:l}=this;e.loading&&("number"==typeof l.delay&&(0===l.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},l.delay)),"number"==typeof l.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},l.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,l){this._loadFn=e,this._opts=l,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function o(e){return function(e,l){let t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},l),r=null;function n(){if(!r){let l=new c(e,t);r={getCurrentValue:l.getCurrentValue.bind(l),subscribe:l.subscribe.bind(l),retry:l.retry.bind(l),promise:l.promise.bind(l)}}return r.promise()}if(!i){let e=t.webpack?t.webpack():t.modules;e&&d.push(l=>{for(let t of e)if(l.includes(t))return n()})}function o(e,l){!function(){n();let e=a.default.useContext(s.LoadableContext);e&&Array.isArray(t.modules)&&t.modules.forEach(l=>{e(l)})}();let d=a.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return a.default.useImperativeHandle(l,()=>({retry:r.retry}),[]),a.default.useMemo(()=>{var l;return d.loading||d.error?a.default.createElement(t.loading,{isLoading:d.loading,pastDelay:d.pastDelay,timedOut:d.timedOut,error:d.error,retry:r.retry}):d.loaded?a.default.createElement((l=d.loaded)&&l.default?l.default:l,e):null},[e,d])}return o.preload=()=>n(),o.displayName="LoadableComponent",a.default.forwardRef(o)}(n,e)}function u(e,l){let t=[];for(;e.length;){let a=e.pop();t.push(a(l))}return Promise.all(t).then(()=>{if(e.length)return u(e,l)})}o.preloadAll=()=>new Promise((e,l)=>{u(r).then(e,l)}),o.preloadReady=e=>(void 0===e&&(e=[]),new Promise(l=>{let t=()=>(i=!0,l());u(d,e).then(t,t)})),window.__NEXT_PRELOADREADY=o.preloadReady;let m=o},9297:function(e,l,t){"use strict";t.d(l,{Z:function(){return v}});var a=t(5893),s=t(7294);let r=s.forwardRef(function(e,l){let{title:t,titleId:a,...r}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":a},r),t?s.createElement("title",{id:a},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"}))});var d=t(3054),i=t(9305),n=t(1483),c=t(5152),o=t.n(c),u=t(1664),m=t.n(u),h=t(8692),x=t(2208);let p=["Hotel","Motel","Resort","Inn"],f=o()(()=>Promise.resolve().then(t.bind(t,8692)).then(e=>e.RichTextEditor),{loadableGenerated:{webpack:()=>[8692]},ssr:!1});function b(){return(0,a.jsxs)("div",{className:"hstack border p-2",children:[(0,a.jsx)(r,{width:15,className:"flex-shrink-0"}),(0,a.jsx)("span",{className:"text-dark ms-1 small",children:"09-24442122"}),(0,a.jsx)("div",{role:"button",className:"link-danger ms-2",children:(0,a.jsx)(d.Z,{className:"flex-shrink-0",width:20})})]})}function j(){return(0,a.jsxs)("div",{className:"hstack border p-2",children:[(0,a.jsx)(i.Z,{width:25,color:"green",className:"flex-shrink-0"}),(0,a.jsx)("span",{className:"text-dark ms-1 small",children:"Spa and wellness centre"}),(0,a.jsx)("div",{role:"button",className:"link-danger ms-2",children:(0,a.jsx)(d.Z,{className:"flex-shrink-0",width:20})})]})}var v=function(e){let{create:l={}}=e,t=[1,2,3];return(0,a.jsxs)("div",{className:"pb-5",children:[(0,a.jsx)("div",{className:"bg-primary",children:(0,a.jsx)("div",{className:"container py-4",children:(0,a.jsxs)("div",{className:"hstack",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"px-2",children:l?(0,a.jsx)("h3",{className:"text-light text-lg-start",children:"Create Hotel"}):(0,a.jsx)("h3",{className:"text-light text-lg-start",children:"Edit Hotel"})}),(0,a.jsx)("div",{className:"row px-2",children:(0,a.jsx)("nav",{"aria-label":"breadcrumb col-12",children:(0,a.jsxs)("ol",{className:"breadcrumb mb-1",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(m(),{href:"/profile/hotels",className:"text-light",children:"Hotels"})}),l?(0,a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create Hotel"}):(0,a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit Hotel"})]})})})]}),(0,a.jsx)("div",{className:"ms-auto",children:l?(0,a.jsx)("button",{className:"btn btn-accent py-2 px-3 ms-2",children:"Create"}):(0,a.jsx)("button",{className:"btn btn-accent py-2 px-3 ms-2",children:"Update"})})]})})}),(0,a.jsx)("div",{className:"container py-4",children:(0,a.jsxs)("div",{className:"row g-4",children:[(0,a.jsx)("div",{className:"col-md-12 col-lg-12",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card-header bg-white py-3 px-md-4",children:(0,a.jsx)("h5",{className:"mb-0",children:"General"})}),(0,a.jsx)("div",{className:"card-body px-md-4",children:(0,a.jsx)("div",{className:"vstack",children:(0,a.jsxs)("div",{className:"row g-4",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)(h.Input,{label:"Name *",id:"shopNameInput",name:"name",type:"text",placeholder:"Enter hotel name"})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)(h.Input,{label:"Slug *",id:"slugInput",name:"slug",type:"text",placeholder:"https://hotelmyanmar.com/page/slug"})}),(0,a.jsxs)("div",{className:"order-2 order-md-2 order-lg-1 col-lg-6",children:[(0,a.jsx)("label",{className:"form-label",children:"Description"}),(0,a.jsx)(f,{id:"descriptionInput",placeholder:"Enter hotel description...",minHeight:300})]}),(0,a.jsx)("div",{className:"order-1 order-md-1 order-lg-2 col-lg-6",children:(0,a.jsxs)("div",{className:"vstack",children:[(0,a.jsx)(h.Input,{label:"Address",id:"addressInput",name:"address",type:"text",placeholder:"Enter hotel address"}),(0,a.jsx)("label",{className:"form-label mt-3",children:"Type"}),(0,a.jsx)(x.Z,{options:p,getOptionLabel:e=>e,getOptionValue:e=>e})]})})]})})})]})}),(0,a.jsx)("div",{className:"col-md-12 col-lg-12",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card-header bg-white py-3 px-md-4",children:(0,a.jsxs)("div",{className:"hstack",children:[(0,a.jsx)("h5",{className:"mb-0",children:"Contacts"}),(0,a.jsx)("div",{className:"ms-auto",children:(0,a.jsx)(m(),{href:"#",className:"btn btn-primary",children:"Add new"})})]})}),(0,a.jsx)("div",{className:"card-body px-md-4",children:(0,a.jsx)("div",{className:"d-flex flex-wrap gap-3",children:t.map(e=>(0,a.jsx)(b,{},e))})})]})}),(0,a.jsx)("div",{className:"col-md-12 col-lg-12",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card-header bg-white py-3 px-md-4",children:(0,a.jsx)("div",{className:"hstack",children:(0,a.jsx)("h5",{className:"mb-0",children:"Location"})})}),(0,a.jsx)("div",{className:"card-body px-md-4",children:(0,a.jsx)("div",{className:"vstack",children:(0,a.jsxs)("div",{className:"row g-3",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)(h.Input,{label:"Latitude",id:"latitudeInput",name:"latitude",type:"text",placeholder:"Enter latitude"})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)(h.Input,{label:"Longitude",id:"logitudeInput",name:"Longitude",type:"text",placeholder:"Enter longitude"})})]})})})]})}),(0,a.jsx)("div",{className:"col-md-12 col-lg-12",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card-header bg-white py-3 px-md-4",children:(0,a.jsx)("h5",{className:"mb-0",children:"Images"})}),(0,a.jsx)("div",{className:"card-body px-md-4",children:(0,a.jsx)("div",{className:"d-flex flex-wrap gap-2",children:(0,a.jsx)("button",{className:"btn btn-light-gray hstack justify-content-center",style:{width:120,height:120},children:(0,a.jsx)(n.Z,{width:44,strokeWidth:2,className:"text-muted"})})})}),(0,a.jsx)("div",{className:"card-footer px-4 py-3",children:(0,a.jsxs)("span",{className:"text-muted",children:["Product image can upload up to ",(0,a.jsx)("strong",{children:"5"})," images with dimension constraint of at most ",(0,a.jsx)("strong",{children:"600x600"})," ","pixels."]})})]})}),(0,a.jsx)("div",{className:"col-md-12 col-lg-12",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card-header bg-white py-3 px-md-4",children:(0,a.jsxs)("div",{className:"hstack",children:[(0,a.jsx)("h5",{className:"mb-0",children:"Amenities/Facilities"}),(0,a.jsx)("div",{className:"ms-auto",children:(0,a.jsx)(m(),{href:"#",className:"btn btn-primary",children:"Add new"})})]})}),(0,a.jsx)("div",{className:"card-body px-md-4",children:(0,a.jsx)("div",{className:"d-flex flex-wrap gap-3",children:t.map(e=>(0,a.jsx)(j,{},e))})})]})}),(0,a.jsx)("div",{className:"col-md-12 col-lg-12",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card-header bg-white py-3 px-md-4",children:(0,a.jsx)("h5",{className:"mb-0",children:"Area information"})}),(0,a.jsx)("div",{className:"card-body p-0 ",children:(0,a.jsx)(f,{id:"areaInfoInput",placeholder:"Enter hotel area info...",minHeight:300,noBorder:!0})})]})})]})})]})}},5152:function(e,l,t){e.exports=t(8864)},3054:function(e,l,t){"use strict";var a=t(7294);let s=a.forwardRef(function(e,l){let{title:t,titleId:s,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":s},r),t?a.createElement("title",{id:s},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});l.Z=s},1483:function(e,l,t){"use strict";var a=t(7294);let s=a.forwardRef(function(e,l){let{title:t,titleId:s,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":s},r),t?a.createElement("title",{id:s},t):null,a.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",clipRule:"evenodd"}))});l.Z=s},9305:function(e,l,t){"use strict";var a=t(7294);let s=a.forwardRef(function(e,l){let{title:t,titleId:s,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":s},r),t?a.createElement("title",{id:s},t):null,a.createElement("path",{fillRule:"evenodd",d:"M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))});l.Z=s}}]);