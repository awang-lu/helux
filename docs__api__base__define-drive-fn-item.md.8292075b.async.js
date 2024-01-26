"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[8718],{93505:function(P,p,n){n.r(p);var g=n(18480),o=n(96140),C=n(41618),y=n(30446),D=n(63127),F=n(29151),T=n(78441),b=n(19361),A=n(98032),B=n(70079),u=n(35250);function O(){var a=(0,A.eL)(),e=a.texts;return(0,u.jsx)(A.dY,{children:(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"markdown",children:[(0,u.jsxs)("h1",{id:"definederivefnitem",children:[(0,u.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#definederivefnitem",children:(0,u.jsx)("span",{className:"icon icon-link"})}),"defineDeriveFnItem"]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("code",{children:e[0].value}),e[1].value,(0,u.jsx)("code",{children:e[2].value}),e[3].value]}),(0,u.jsxs)("h2",{id:"\u57FA\u7840\u4F7F\u7528",children:[(0,u.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u4F7F\u7528",children:(0,u.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u4F7F\u7528"]}),(0,u.jsxs)("p",{children:[e[4].value,(0,u.jsx)(A.rU,{to:"/guide/modular#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%BB%A3%E7%A0%81%E7%BB%84%E7%BB%87%E6%96%B9%E5%BC%8F",children:e[5].value}),e[6].value,(0,u.jsx)("code",{children:e[7].value}),e[8].value]}),(0,u.jsx)(D.Z,{lang:"ts",children:e[9].value})]})})})}p.default=O},18480:function(P,p,n){var g=n(24325),o=n.n(g),C=n(28633),y=n.n(C),D=n(98032),F=n(70079),T=n(29151),b=n(35250),A={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var t=this,s=[];return Object.entries(e.properties||{}).forEach(function(f){var d,l=y()(f,2),m=l[0],h=l[1];s.push("".concat(m).concat((d=e.required)!==null&&d!==void 0&&d.includes(m)?"":"?",": ").concat(h.type==="object"?"object":t.toString(h)))}),s.length?"{ ".concat(s.join("; ")," }"):"{}"},array:function(e){if(e.items){var t=this.getValidClassName(e.items);return t?"".concat(t,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var t=this,s=e.signature;if(!s)return"Function";var f="oneOf"in s?s.oneOf:[s];return f.map(function(d){return"".concat(d.isAsync?"async ":"","(").concat(d.arguments.map(function(l){return"".concat(l.key,": ").concat(t.toString(l))}).join(", "),") => ").concat(t.toString(d.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(t){return JSON.stringify(t)}).join(" | ")},oneOf:function(e){var t=this;return e.oneOf.map(function(s){return t.getValidClassName(s)||t.toString(s)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},B=function(e){var t=useState(function(){return A.toString(e)}),s=_slicedToArray(t,2),f=s[0],d=s[1];return useEffect(function(){d(A.toString(e))},[e]),_jsx("code",{children:f})},u=function(e){var t,s=useRouteMeta(),f=s.frontmatter,d=useAtomAssets(),l=d.components,m=e.id||f.atomId,h=useIntl();if(!m)throw new Error("`id` properties if required for API component!");var E=l==null?void 0:l[m];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:h.formatMessage({id:"api.component.name"})}),_jsx("th",{children:h.formatMessage({id:"api.component.description"})}),_jsx("th",{children:h.formatMessage({id:"api.component.type"})}),_jsx("th",{children:h.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:E&&(t=E.propsConfig)!==null&&t!==void 0&&t.properties?Object.entries(E.propsConfig.properties).map(function(v){var x,_=_slicedToArray(v,2),i=_[0],r=_[1];return _jsxs("tr",{children:[_jsx("td",{children:i}),_jsx("td",{children:r.description||"--"}),_jsx("td",{children:_jsx(B,_objectSpread({},r))}),_jsx("td",{children:_jsx("code",{children:(x=E.propsConfig.required)!==null&&x!==void 0&&x.includes(i)?h.formatMessage({id:"api.component.required"}):JSON.stringify(r.default)||"--"})})]},i)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:h.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:m})})})})]})})},O=null},96140:function(P,p,n){var g=n(24325),o=n(35250),C=function(F){return _jsx("span",_objectSpread({className:"dumi-default-badge"},F))},y=null},19361:function(P,p,n){var g=n(70079),o=n(35250),C=function(){return(0,o.jsxs)("div",{style:{width:"100%"},children:[(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u{1F4E6} \u4E86\u89E3\u66F4\u591A"}),(0,o.jsx)("p",{children:"\u6B22\u8FCE\u5165\u7FA4\u4E86\u89E3\u66F4\u591A\uFF0C\u7531\u4E8E\u5FAE\u4FE1\u8BA8\u8BBA\u7FA4\u53F7 200 \u4EBA\u5DF2\u6EE1\uFF0C\u9700\u52A0\u4F5C\u8005\u5FAE\u4FE1\u53F7\u6216 qq \u7FA4\u53F7\uFF0C\u518D\u9080\u8BF7\u4F60\u5982helux & hel\u8BA8\u8BBA\u7FA4\uFF08\u52A0\u53F7\u65F6\u8BB0\u5F97\u5907\u6CE8 helux \u6216 hel\uFF09"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/7fz74bhk84_1705216873301.png",style:{width:"100%"}})]}),(0,o.jsx)("div",{style:{width:"4%",display:"inline-block"}}),(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u2764\uFE0F\u200D\u{1F525} \u8D5E\u8D4F"}),(0,o.jsx)("p",{children:"\u5C0F\u5C0F\u9F13\u52B1\uFF0C\u7ED9\u4E88\u6211\u4EEC\u66F4\u591A\u529B\u91CF\u575A\u6301\u505A\u51FA\u66F4\u597D\u7684\u5F00\u6E90\u9879\u76EE"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/5a2u6arzpo_1705217036205.png",style:{width:"100%"}})]})]})};p.Z=g.memo(C)},29151:function(P,p,n){var g=n(24325),o=n(28633),C=n(19317),y=n(14315),D=n(70079),F=n(35250),T=null,b=function(u){var O=u.children,a=_objectWithoutProperties(u,T),e=useRef(null),t=useState(!1),s=_slicedToArray(t,2),f=s[0],d=s[1],l=useState(!1),m=_slicedToArray(l,2),h=m[0],E=m[1];return useEffect(function(){var v=e.current;if(v){var x=throttle(function(){d(v.scrollLeft>0),E(v.scrollLeft<v.scrollWidth-v.offsetWidth)},100);return x(),v.addEventListener("scroll",x),window.addEventListener("resize",x),function(){v.removeEventListener("scroll",x),window.removeEventListener("resize",x)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":h||void 0,children:_jsx("table",_objectSpread(_objectSpread({},a),{},{children:O}))})})},A=null},78441:function(P,p,n){n.d(p,{Z:function(){return x}});var g=n(24325),o=n.n(g),C=n(28633),y=n.n(C),D=n(12027),F=n.n(D),T=n(58662),b=n(45078),A=n(17403),B=n(91703),u=n(11300),O=n(45096),a=n(70079),e=n(35250);function t(_){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(_).forEach(function(c,L){var j="".concat(i?"".concat(i,"-"):"").concat(L);switch(c==null?void 0:c.type){case"ul":{var M,S=((M=r[r.length-1])===null||M===void 0?void 0:M.children)||r,N=t(c.props.children||[],j);S.push.apply(S,F()(N));break}case"li":{var I=t(c.props.children,j);r.push({title:[].concat(c.props.children).filter(function(R){return R.type!=="ul"}),key:j,children:I,isLeaf:!I.length});break}default:}}),r}var s=function(i){var r=(0,a.useState)(t(i)),c=y()(r,2),L=c[0],j=c[1];return(0,a.useEffect)(function(){j(t(i))},[i]),L},f=function(i){var r=i.isLeaf,c=i.expanded;return r?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(T.r,{fill:"currentColor"})}):c?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(b.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(A.r,{fill:"currentColor"})})},d=function(i){var r=i.isLeaf,c=i.expanded;return r?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):c?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(B.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(u.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},m=function(i){var r=i.scrollHeight;return{height:r,opacity:1}},h=function(i){return{height:i?i.offsetHeight:0}},E=function(i,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},v={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:m,onEnterActive:m,onLeaveStart:h,onLeaveActive:l,onAppearEnd:E,onEnterEnd:E,onLeaveEnd:E,motionDeadline:500},x=function(_){var i=s(_.children),r=(0,a.createRef)(),c=function(j,M){var S=M.isLeaf;S||j.shiftKey||j.metaKey||j.ctrlKey||r.current.onNodeExpand(j,M)};return(0,e.jsx)(O.Z,{className:"dumi-default-tree",icon:f,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:o()(o()({},v),{},{motionAppear:!1}),onClick:c,treeData:[{key:"0",title:_.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:d})}}}]);
