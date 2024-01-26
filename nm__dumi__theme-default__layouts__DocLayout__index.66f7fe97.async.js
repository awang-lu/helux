"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[2519],{42638:function(y,s,e){e.d(s,{Z:function(){return p}});var n=e(98032),l=e(70079),u=e(35250),E=["https://tnfe.gtimg.com/image/harzqyxcgz_1651755973579.png","https://tnfe.gtimg.com/image/p40w0k40pt_1651755965504.png","https://tnfe.gtimg.com/image/fxy2nbeh43_1651755969439.png","https://tnfe.gtimg.com/image/bxzj46o32k_1651755962175.png","https://tnfe.gtimg.com/image/ngex07gcez_1651755956158.png","https://tnfe.gtimg.com/image/harzqyxcgz_1651755973579.png"],M={boxShadow:"1px 2px 2px 1px rgba(0, 0, 255, .2)",backgroundColor:"#fff",borderRadius:"6px",padding:"24px 24px",boxSizing:"border-box",height:"270px"};function x(o){return E[o]||E[0]}var r=function(){var t,b=(0,n.eL)(),g=b.frontmatter;return!((t=g.features)===null||t===void 0)&&t.length?(0,u.jsx)("div",{className:"dumi-default-features","data-cols":[3,2].find(function(c){return g.features.length%c===0})||3,children:g.features.map(function(c,D){var T=c.title,H=c.description,C=c.emoji,S=c.link,v;return S&&(v=/^(\w+:)\/\/|^(mailto|tel):/.test(S)?(0,u.jsx)("a",{href:S,target:"_blank",rel:"noreferrer",children:T}):(0,u.jsx)(n.rU,{to:S,children:T})),(0,u.jsxs)("div",{className:"dumi-default-features-item",style:M,children:[(0,u.jsx)("div",{style:{textAlign:"center"},children:(0,u.jsx)("img",{src:x(D),style:{width:"88px",height:"88px"}})}),(0,u.jsx)("span",{style:{color:"#645ab7"},children:T&&(0,u.jsx)("h2",{children:v||T})}),(0,u.jsxs)("span",{style:{color:"gray"},children:[" ",H&&(0,u.jsx)("p",{dangerouslySetInnerHTML:{__html:H}})]})]},T)})}):null},p=r},33592:function(y,s,e){e.d(s,{Z:function(){return u}});var n=e(35250),l=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"dumi-default-footer",children:["Copyright \xA9 ",new Date().getFullYear()," Tencent PCG",(0,n.jsx)("a",{style:{paddingLeft:"6px"},href:"https://github.com/fantasticsoul",target:"__blink",children:"fantasticsoul"}),".",(0,n.jsxs)("div",{children:["Welcome to follow my open source project:",(0,n.jsx)("a",{style:{paddingLeft:"6px"},href:"https://github.com/heluxjs/helux",target:"__blink",children:"helux"}),(0,n.jsx)("a",{style:{paddingLeft:"6px"},href:"https://github.com/Tencent/hel",target:"__blink",children:"hel-micro"}),(0,n.jsx)("a",{style:{paddingLeft:"6px"},href:"https://github.com/tnfe/limu",target:"__blink",children:"limu"})]})]})})},u=l},4451:function(y,s,e){e.d(s,{Z:function(){return x}});var n=e(98032),l=e(35250),u=function(p){return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"blinkTitle",children:["React developing. ",(0,l.jsx)("span",{style:{fontWeight:800},children:"Redefined."})]}),(0,l.jsxs)("h1",{className:"dumi-default-hero-title",style:{color:"#645ab7"},children:[(0,l.jsx)("img",{src:"https://tnfe.gtimg.com/image/dlykfuw8ai_1703851692543.png",style:{paddingRight:"30px"}}),p.children]})]})},E=u,M=function(){var p,o=(0,n.eL)(),t=o.frontmatter;return"hero"in t?(0,l.jsxs)("div",{className:"dumi-default-hero",children:[t.hero.title&&(0,l.jsx)(E,{children:t.hero.title}),t.hero.description&&(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:t.hero.description}}),!!(!((p=t.hero.actions)===null||p===void 0)&&p.length)&&(0,l.jsx)("div",{className:"dumi-default-hero-actions",children:t.hero.actions.map(function(b){var g=b.text,c=b.link;return/^(\w+:)\/\/|^(mailto|tel):/.test(c)?(0,l.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:g},g):(0,l.jsx)(n.rU,{to:c,children:g},g)})})]}):null},x=M},7041:function(y,s,e){e.d(s,{Z:function(){return H}});var n=e(24325),l=e.n(n),u=e(28633),E=e.n(u),M=e(510),x=e(37896),r=e(98032),p=e(70079),o=e(35250),t=function(){return(0,o.jsx)(o.Fragment,{})},b=t,g=function(S){var v=S.data,j=(0,r.TH)(),z=j.pathname,A=(0,p.useState)(function(){var d;return(d=v.children)===null||d===void 0?void 0:d.some(function(f){var m=f.activePath||f.link;return m&&z.startsWith(m)})}),O=E()(A,2),K=O[0],U=O[1],L=v.children&&(0,o.jsx)("button",{className:"dumi-default-navbar-collapse-btn",type:"button",onClick:function(f){f.stopPropagation(),U(function(m){return!m})},"data-collapsed":K||void 0,children:(0,o.jsx)(M.r,{})}),h=v.children&&(0,o.jsx)("ul",{className:"dumi-default-navbar-dropdown","data-collapsed":K||void 0,children:(0,o.jsx)(D,{data:v.children})}),a=v.activePath||v.link,i=a&&z.startsWith(a)?{className:"active"}:{};return v.link?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.rU,l()(l()({to:v.link},i),{},{children:v.title})),L,h]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",l()(l()({onClick:function(f){f.stopPropagation(),U(function(m){return!m})}},i),{},{children:v.title})),L,h]})};function c(C){return C.title==="GitHub"?(0,o.jsxs)("span",{children:[C.title," ",(0,o.jsx)(x.r,{style:{width:"18px",verticalAlign:"top"}})]}):C.title}var D=function(S){var v=S.data;return(0,o.jsx)(o.Fragment,{children:v.map(function(j){return(0,o.jsx)("li",{children:j.link&&/^(\w+:)\/\/|^(mailto|tel):/.test(j.link)?(0,o.jsx)("a",{href:j.link,target:"_blank",rel:"noreferrer",children:c(j)}):(0,o.jsx)(g,{data:j})},j.activePath||j.link||j.title)})})},T=function(){var S=(0,r.OK)();return(0,o.jsxs)("ul",{className:"dumi-default-navbar",children:[(0,o.jsx)(D,{data:S}),(0,o.jsx)(b,{})]})},H=T},41649:function(y,s,e){e.d(s,{ZP:function(){return L}});var n=e(28633),l=e.n(n),u=e(30784),E=e(14842),M=e(3126),x=e(98032),r=e(70079),p=e(9451),o=e(22484),t=e(35250),b=function(){return(0,t.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"}),(0,t.jsx)("path",{d:"M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"}),(0,t.jsx)("path",{d:"M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"})]})},g=function(){return(0,t.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"})})},c=function(){return(0,t.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"})})},D=function(){return(0,t.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"})})},T={title:b,page:g,content:c,demo:D},H=function(a){return(0,t.jsx)(t.Fragment,{children:a.texts.map(function(i,d){return(0,t.jsx)(r.Fragment,{children:i.highlighted?(0,t.jsx)("mark",{children:i.text}):i.text},d)})})},C=function(a){var i=(0,r.useCallback)(function(){var P=0,N=[];return a.forEach(function(R){R.title&&N.push({type:"title",value:{title:R.title}}),R.hints.forEach(function(G){N.push({type:"hint",activeIndex:P++,value:G})})}),[N,P]},[a]),d=(0,r.useState)(i),f=l()(d,2),m=f[0],k=f[1];return(0,r.useEffect)(function(){k(i)},[a]),m},S=function(a){var i=C(a.data),d=l()(i,2),f=d[0],m=d[1],k=(0,r.useState)(-1),P=l()(k,2),N=P[0],R=P[1],G=(0,x.TH)(),V=G.pathname,W=function(w){var I;(I=a.onItemSelect)===null||I===void 0||I.call(a,w);var B=new URL(w==null?void 0:w.link,location.origin);(B==null?void 0:B.pathname)===V&&!B.hash&&setTimeout(function(){(0,o.Z)(0,{maxDuration:300})},1)};return(0,r.useEffect)(function(){var _=function(I){if(I.key==="ArrowDown")R((N+1)%m);else if(I.key==="ArrowUp")R((N+m-1)%m);else if(I.key==="Enter"&&N>=0){var B=f.find(function(Y){return Y.type==="hint"&&Y.activeIndex===N}).value;x.m8.push(B.link),W==null||W(B),document.activeElement.blur()}["Escape","Enter"].includes(I.key)&&R(-1)};return document.addEventListener("keydown",_),function(){return document.removeEventListener("keydown",_)}}),(0,t.jsx)("div",{className:"dumi-default-search-result",onMouseEnter:function(){return R(-1)},onMouseDownCapture:function(w){return w.preventDefault()},onMouseUpCapture:function(){document.activeElement.blur()},children:a.data.length||a.loading?(0,t.jsx)("dl",{children:f.map(function(_,w){return _.type==="title"?(0,t.jsx)("dt",{children:_.value.title},String(w)):(0,t.jsx)("dd",{children:(0,t.jsxs)(x.rU,{to:_.value.link,"data-active":N===_.activeIndex||void 0,onClick:function(){return W==null?void 0:W(_.value)},children:[r.createElement(T[_.value.type]),(0,t.jsx)("h4",{children:(0,t.jsx)(H,{texts:_.value.highlightTitleTexts})}),(0,t.jsx)("p",{children:(0,t.jsx)(H,{texts:_.value.highlightTexts})})]})},String(w))})}):(0,t.jsxs)("div",{className:"dumi-default-search-empty",children:[(0,t.jsx)(p.r,{}),(0,t.jsx)(x._H,{id:"search.not.found"})]})})},v=S,j=(0,r.forwardRef)(function(h,a){var i=(0,x.YB)(),d=(0,r.useRef)(!1),f=(0,r.useRef)(null);return(0,r.useImperativeHandle)(a,function(){return f.current}),(0,t.jsx)("input",{className:"dumi-default-search-bar-input",onCompositionStart:function(){return d.current=!0},onCompositionEnd:function(k){d.current=!1,h.onChange(k.currentTarget.value)},onFocus:h.onFocus,onBlur:h.onBlur,onKeyDown:function(k){["ArrowDown","ArrowUp"].includes(k.key)&&k.preventDefault(),k.key==="Escape"&&!d.current&&k.currentTarget.blur()},onChange:function(k){var P=k.target.value;setTimeout(function(){d.current||h.onChange(P)},1)},placeholder:i.formatMessage({id:"header.search.placeholder"}),ref:f})}),z=function(a){return(0,r.useEffect)(function(){if(a.visible)document.body.style.overflow="hidden";else{var i;document.body.style.overflow="",(i=a.onClose)===null||i===void 0||i.call(a)}},[a.visible]),a.visible?(0,t.jsxs)("div",{className:"dumi-default-search-modal",children:[(0,t.jsx)("div",{className:"dumi-default-search-modal-mask",onClick:a.onMaskClick}),(0,t.jsx)("div",{className:"dumi-default-search-modal-content",children:a.children})]}):null},A,O=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(A=navigator)===null||A===void 0?void 0:A.platform:""),K=function(a){return["TEXTAREA","INPUT"].includes(a.tagName)||a.contentEditable==="true"},U=function(){var a=(0,r.useState)(!1),i=l()(a,2),d=i[0],f=i[1],m=(0,r.useRef)(null),k=(0,r.useRef)(null),P=(0,r.useState)("\u2318"),N=l()(P,2),R=N[0],G=N[1],V=(0,x.OO)(),W=V.keywords,_=V.setKeywords,w=V.result,I=V.loading,B=(0,r.useState)(!1),Y=l()(B,2),ee=Y[0],X=Y[1];return(0,r.useEffect)(function(){O||G("Ctrl");var Z=function(F){if((O?F.metaKey:F.ctrlKey)&&F.key==="k"||F.key==="/"&&!K(F.target)){var $;if(($=F.target.getAttribute("class"))!==null&&$!==void 0&&$.includes("prism-code"))return;if(F.preventDefault(),m.current){var Q=m.current.getBoundingClientRect(),te=Q.top,ne=Q.bottom,ae=Q.left,re=Q.right,oe=te>=0&&ae>=0&&ne<=window.innerHeight&&re<=window.innerWidth;oe?m.current.focus():(_(""),X(!0),setTimeout(function(){var q;(q=k.current)===null||q===void 0||q.focus()}))}}F.key==="Escape"&&(F.preventDefault(),X(!1))};return document.addEventListener("keydown",Z),function(){return document.removeEventListener("keydown",Z)}},[]),(0,t.jsxs)("div",{className:"dumi-default-search-bar",children:[(0,t.jsx)(M.r,{className:"dumi-default-search-bar-svg"}),(0,t.jsx)(j,{onFocus:function(){return f(!0)},onBlur:function(){setTimeout(function(){f(!1)},1)},onChange:function(J){return _(J)},ref:m}),(0,t.jsxs)("span",{className:"dumi-default-search-shortcut",children:[R," K"]}),W.trim()&&d&&(w.length||!I)&&!ee&&(0,t.jsx)("div",{className:"dumi-default-search-popover",children:(0,t.jsx)("section",{children:(0,t.jsx)(v,{data:w,loading:I})})}),(0,t.jsxs)(z,{visible:ee,onMaskClick:function(){X(!1)},onClose:function(){return _("")},children:[(0,t.jsxs)("div",{style:{position:"relative"},children:[(0,t.jsx)(M.r,{className:"dumi-default-search-bar-svg"}),(0,t.jsx)(j,{onFocus:function(){return f(!0)},onBlur:function(){setTimeout(function(){f(!1)},1)},onChange:function(J){return _(J)},ref:k})]}),(0,t.jsx)(v,{data:w,loading:I,onItemSelect:function(){X(!1)}}),(0,t.jsx)("footer",{children:(0,t.jsxs)("ul",{className:"dumi-default-search-modal-commands",children:[(0,t.jsxs)("li",{className:"dumi-default-search-modal-commands-arrow",children:[(0,t.jsx)("span",{className:"dumi-default-search-modal-shortcut",children:(0,t.jsx)(E.r,{width:"10px",height:"10px",fill:"rgba(0, 0, 0, 0.45)"})}),(0,t.jsx)("span",{className:"dumi-default-search-modal-shortcut",children:(0,t.jsx)(u.r,{width:"10px",height:"10px",fill:"rgba(0, 0, 0, 0.45)"})}),(0,t.jsx)("span",{className:"dumi-default-search-modal-commands-text",children:"to navigate"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"dumi-default-search-modal-shortcut",children:"esc"}),(0,t.jsx)("span",{className:"dumi-default-search-modal-commands-text",children:"to close"})]})]})})]})]})},L=U},65518:function(y,s,e){e.d(s,{Z:function(){return M}});var n=e(98032),l=e(88690),u=e(35250),E=function(){var r=(0,n.TH)(),p=r.pathname,o=(0,n.eL)(),t=(0,n.tx)();return t?(0,u.jsx)("div",{className:"dumi-default-sidebar smallScBar",children:t.map(function(b,g){return(0,u.jsxs)("dl",{className:"dumi-default-sidebar-group",children:[b.title&&(0,u.jsx)("dt",{children:b.title}),b.children.map(function(c){return(0,u.jsxs)("dd",{children:[(0,u.jsx)(n.OL,{to:c.link,title:c.title,end:!0,children:c.title}),c.link===p&&o.frontmatter.toc==="menu"&&(0,u.jsx)(l.Z,{})]},c.link)})]},String(g))})}):null},M=E},88690:function(y,s,e){e.d(s,{Z:function(){return t}});var n=e(24325),l=e.n(n),u=e(28633),E=e.n(u),M=e(48822),x=e(98032),r=e(70079),p=e(35250),o=function(){var g=(0,x.TH)(),c=g.pathname,D=g.search,T=g.hash,H=(0,x.eL)(),C=(0,x.zh)(),S=(0,x.WF)(),v=S.loading,j=(0,r.useRef)(0),z=(0,r.useState)([]),A=E()(z,2),O=A[0],K=A[1],U=r.useMemo(function(){var L=H.toc;return C&&(L=C.toc),L.filter(function(h){var a=h.depth;return a>1&&a<4})},[H,C]);return(0,r.useEffect)(function(){if(!v){var L=U.map(function(h){var a=h.id;return{current:document.getElementById(a)}});K(L)}},[c,D,v,U]),O.length?(0,p.jsx)(M.i,{sectionRefs:O,children:function(h){var a=h.currentElementIndexInViewport;return a>-1&&(j.current=a),(0,p.jsx)("ul",{className:"dumi-default-toc",children:U.filter(function(i){var d=i.depth;return d>1&&d<4}).map(function(i,d){var f="".concat(D,"#").concat(encodeURIComponent(i.id)),m=a>-1?a:j.current;return(0,p.jsx)("li",{"data-depth":i.depth,children:(0,p.jsx)(x.rU,l()(l()({to:f,onClickCapture:function(){decodeURIComponent(T).slice(1)===i.id&&x.m8.replace("".concat(c).concat(D))},title:i.title},m===d?{className:"active"}:{}),{},{children:i.title}))},i.id)})})}}):null},t=o},98575:function(y,s,e){e.d(s,{Z:function(){return n.Z}});var n=e(59504)},47331:function(y,s,e){e.d(s,{Z:function(){return n.Z}});var n=e(16281)},13866:function(y,s,e){e.d(s,{Z:function(){return n.Z}});var n=e(94622)},28411:function(y,s,e){e.d(s,{Z:function(){return n.Z}});var n=e(9293)},60439:function(y,s,e){e.d(s,{Z:function(){return n.Z}});var n=e(27756)},48339:function(y,s,e){e.d(s,{Z:function(){return n.Z}});var n=e(73217)},55186:function(y,s,e){e.d(s,{Z:function(){return n.Z}});var n=e(44309)},10567:function(y,s,e){e.d(s,{Z:function(){return n.Z}});var n=e(59203)},4538:function(y,s,e){e.d(s,{Z:function(){return n.Z}});var n=e(45690)}}]);
