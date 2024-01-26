"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[9737],{68250:function(P,p,t){t.r(p);var y=t(18480),o=t(96140),g=t(41618),C=t(30446),T=t(63127),D=t(29151),F=t(78441),L=t(19361),A=t(98032),b=t(70079),s=t(35250);function O(){var u=(0,A.eL)(),e=u.texts;return(0,s.jsx)(A.dY,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"markdown",children:[(0,s.jsxs)("h1",{id:"sync",children:[(0,s.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sync",children:(0,s.jsx)("span",{className:"icon icon-link"})}),"sync"]}),(0,s.jsxs)("p",{children:[e[0].value,(0,s.jsx)("code",{children:e[1].value}),e[2].value]}),(0,s.jsx)("hr",{})]}),(0,s.jsx)(g.Z,{type:"info",children:(0,s.jsxs)("p",{children:[e[3].value,(0,s.jsx)(A.rU,{to:"/api/base/sync",children:e[4].value})]})})]})})}p.default=O},18480:function(P,p,t){var y=t(24325),o=t.n(y),g=t(28633),C=t.n(g),T=t(98032),D=t(70079),F=t(29151),L=t(35250),A={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var n=this,a=[];return Object.entries(e.properties||{}).forEach(function(f){var d,l=C()(f,2),m=l[0],h=l[1];a.push("".concat(m).concat((d=e.required)!==null&&d!==void 0&&d.includes(m)?"":"?",": ").concat(h.type==="object"?"object":n.toString(h)))}),a.length?"{ ".concat(a.join("; ")," }"):"{}"},array:function(e){if(e.items){var n=this.getValidClassName(e.items);return n?"".concat(n,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var n=this,a=e.signature;if(!a)return"Function";var f="oneOf"in a?a.oneOf:[a];return f.map(function(d){return"".concat(d.isAsync?"async ":"","(").concat(d.arguments.map(function(l){return"".concat(l.key,": ").concat(n.toString(l))}).join(", "),") => ").concat(n.toString(d.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(n){return JSON.stringify(n)}).join(" | ")},oneOf:function(e){var n=this;return e.oneOf.map(function(a){return n.getValidClassName(a)||n.toString(a)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},b=function(e){var n=useState(function(){return A.toString(e)}),a=_slicedToArray(n,2),f=a[0],d=a[1];return useEffect(function(){d(A.toString(e))},[e]),_jsx("code",{children:f})},s=function(e){var n,a=useRouteMeta(),f=a.frontmatter,d=useAtomAssets(),l=d.components,m=e.id||f.atomId,h=useIntl();if(!m)throw new Error("`id` properties if required for API component!");var E=l==null?void 0:l[m];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:h.formatMessage({id:"api.component.name"})}),_jsx("th",{children:h.formatMessage({id:"api.component.description"})}),_jsx("th",{children:h.formatMessage({id:"api.component.type"})}),_jsx("th",{children:h.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:E&&(n=E.propsConfig)!==null&&n!==void 0&&n.properties?Object.entries(E.propsConfig.properties).map(function(v){var x,_=_slicedToArray(v,2),i=_[0],r=_[1];return _jsxs("tr",{children:[_jsx("td",{children:i}),_jsx("td",{children:r.description||"--"}),_jsx("td",{children:_jsx(b,_objectSpread({},r))}),_jsx("td",{children:_jsx("code",{children:(x=E.propsConfig.required)!==null&&x!==void 0&&x.includes(i)?h.formatMessage({id:"api.component.required"}):JSON.stringify(r.default)||"--"})})]},i)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:h.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:m})})})})]})})},O=null},96140:function(P,p,t){var y=t(24325),o=t(35250),g=function(D){return _jsx("span",_objectSpread({className:"dumi-default-badge"},D))},C=null},19361:function(P,p,t){var y=t(70079),o=t(35250),g=function(){return(0,o.jsxs)("div",{style:{width:"100%"},children:[(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u{1F4E6} \u4E86\u89E3\u66F4\u591A"}),(0,o.jsx)("p",{children:"\u6B22\u8FCE\u5165\u7FA4\u4E86\u89E3\u66F4\u591A\uFF0C\u7531\u4E8E\u5FAE\u4FE1\u8BA8\u8BBA\u7FA4\u53F7 200 \u4EBA\u5DF2\u6EE1\uFF0C\u9700\u52A0\u4F5C\u8005\u5FAE\u4FE1\u53F7\u6216 qq \u7FA4\u53F7\uFF0C\u518D\u9080\u8BF7\u4F60\u5982helux & hel\u8BA8\u8BBA\u7FA4\uFF08\u52A0\u53F7\u65F6\u8BB0\u5F97\u5907\u6CE8 helux \u6216 hel\uFF09"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/7fz74bhk84_1705216873301.png",style:{width:"100%"}})]}),(0,o.jsx)("div",{style:{width:"4%",display:"inline-block"}}),(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u2764\uFE0F\u200D\u{1F525} \u8D5E\u8D4F"}),(0,o.jsx)("p",{children:"\u5C0F\u5C0F\u9F13\u52B1\uFF0C\u7ED9\u4E88\u6211\u4EEC\u66F4\u591A\u529B\u91CF\u575A\u6301\u505A\u51FA\u66F4\u597D\u7684\u5F00\u6E90\u9879\u76EE"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/5a2u6arzpo_1705217036205.png",style:{width:"100%"}})]})]})};p.Z=y.memo(g)},29151:function(P,p,t){var y=t(24325),o=t(28633),g=t(19317),C=t(14315),T=t(70079),D=t(35250),F=null,L=function(s){var O=s.children,u=_objectWithoutProperties(s,F),e=useRef(null),n=useState(!1),a=_slicedToArray(n,2),f=a[0],d=a[1],l=useState(!1),m=_slicedToArray(l,2),h=m[0],E=m[1];return useEffect(function(){var v=e.current;if(v){var x=throttle(function(){d(v.scrollLeft>0),E(v.scrollLeft<v.scrollWidth-v.offsetWidth)},100);return x(),v.addEventListener("scroll",x),window.addEventListener("resize",x),function(){v.removeEventListener("scroll",x),window.removeEventListener("resize",x)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":h||void 0,children:_jsx("table",_objectSpread(_objectSpread({},u),{},{children:O}))})})},A=null},78441:function(P,p,t){t.d(p,{Z:function(){return x}});var y=t(24325),o=t.n(y),g=t(28633),C=t.n(g),T=t(12027),D=t.n(T),F=t(58662),L=t(45078),A=t(17403),b=t(91703),s=t(11300),O=t(45096),u=t(70079),e=t(35250);function n(_){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(_).forEach(function(c,S){var j="".concat(i?"".concat(i,"-"):"").concat(S);switch(c==null?void 0:c.type){case"ul":{var M,B=((M=r[r.length-1])===null||M===void 0?void 0:M.children)||r,R=n(c.props.children||[],j);B.push.apply(B,D()(R));break}case"li":{var I=n(c.props.children,j);r.push({title:[].concat(c.props.children).filter(function(N){return N.type!=="ul"}),key:j,children:I,isLeaf:!I.length});break}default:}}),r}var a=function(i){var r=(0,u.useState)(n(i)),c=C()(r,2),S=c[0],j=c[1];return(0,u.useEffect)(function(){j(n(i))},[i]),S},f=function(i){var r=i.isLeaf,c=i.expanded;return r?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(F.r,{fill:"currentColor"})}):c?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(L.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(A.r,{fill:"currentColor"})})},d=function(i){var r=i.isLeaf,c=i.expanded;return r?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):c?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(b.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(s.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},m=function(i){var r=i.scrollHeight;return{height:r,opacity:1}},h=function(i){return{height:i?i.offsetHeight:0}},E=function(i,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},v={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:m,onEnterActive:m,onLeaveStart:h,onLeaveActive:l,onAppearEnd:E,onEnterEnd:E,onLeaveEnd:E,motionDeadline:500},x=function(_){var i=a(_.children),r=(0,u.createRef)(),c=function(j,M){var B=M.isLeaf;B||j.shiftKey||j.metaKey||j.ctrlKey||r.current.onNodeExpand(j,M)};return(0,e.jsx)(O.Z,{className:"dumi-default-tree",icon:f,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:o()(o()({},v),{},{motionAppear:!1}),onClick:c,treeData:[{key:"0",title:_.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:d})}}}]);
