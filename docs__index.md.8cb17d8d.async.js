"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[2533],{38544:function(P,j,t){t.r(j);var g=t(31974),s=t(68804),A=t(14755),y=t(26713),T=t(92645),D=t(31177),F=t(2131),b=t(30606),C=t(90167),B=t(70079),x=t(35250);function O(){var u=(0,C.eL)(),e=u.texts;return(0,x.jsx)(C.dY,{children:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(b.Z,{barValue:"Big Bar!",barvalue:"Big Bar!"})})})}j.default=O},31974:function(P,j,t){var g=t(24325),s=t.n(g),A=t(28633),y=t.n(A),T=t(90167),D=t(70079),F=t(31177),b=t(35250),C={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var n=this,a=[];return Object.entries(e.properties||{}).forEach(function(f){var l,o=y()(f,2),h=o[0],_=o[1];a.push("".concat(h).concat((l=e.required)!==null&&l!==void 0&&l.includes(h)?"":"?",": ").concat(_.type==="object"?"object":n.toString(_)))}),a.length?"{ ".concat(a.join("; ")," }"):"{}"},array:function(e){if(e.items){var n=this.getValidClassName(e.items);return n?"".concat(n,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var n=this,a=e.signature;if(!a)return"Function";var f="oneOf"in a?a.oneOf:[a];return f.map(function(l){return"".concat(l.isAsync?"async ":"","(").concat(l.arguments.map(function(o){return"".concat(o.key,": ").concat(n.toString(o))}).join(", "),") => ").concat(n.toString(l.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(n){return JSON.stringify(n)}).join(" | ")},oneOf:function(e){var n=this;return e.oneOf.map(function(a){return n.getValidClassName(a)||n.toString(a)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},B=function(e){var n=useState(function(){return C.toString(e)}),a=_slicedToArray(n,2),f=a[0],l=a[1];return useEffect(function(){l(C.toString(e))},[e]),_jsx("code",{children:f})},x=function(e){var n,a=useRouteMeta(),f=a.frontmatter,l=useAtomAssets(),o=l.components,h=e.id||f.atomId,_=useIntl();if(!h)throw new Error("`id` properties if required for API component!");var E=o==null?void 0:o[h];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:E&&(n=E.propsConfig)!==null&&n!==void 0&&n.properties?Object.entries(E.propsConfig.properties).map(function(m){var v,c=_slicedToArray(m,2),i=c[0],r=c[1];return _jsxs("tr",{children:[_jsx("td",{children:i}),_jsx("td",{children:r.description||"--"}),_jsx("td",{children:_jsx(B,_objectSpread({},r))}),_jsx("td",{children:_jsx("code",{children:(v=E.propsConfig.required)!==null&&v!==void 0&&v.includes(i)?_.formatMessage({id:"api.component.required"}):JSON.stringify(r.default)||"--"})})]},i)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(o?"not.found":"unavailable")},{id:h})})})})]})})},O=null},68804:function(P,j,t){var g=t(24325),s=t(35250),A=function(D){return _jsx("span",_objectSpread({className:"dumi-default-badge"},D))},y=null},30606:function(P,j,t){var g=t(70079),s=t(35250),A=function(){return(0,s.jsxs)("div",{style:{width:"100%"},children:[(0,s.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,s.jsx)("h4",{children:"\u{1F4E6} \u4E86\u89E3\u66F4\u591A"}),(0,s.jsx)("p",{children:"\u6B22\u8FCE\u5165\u7FA4\u4E86\u89E3\u66F4\u591A\uFF0C\u7531\u4E8E\u5FAE\u4FE1\u8BA8\u8BBA\u7FA4\u53F7 200 \u4EBA\u5DF2\u6EE1\uFF0C\u9700\u52A0\u4F5C\u8005\u5FAE\u4FE1\u53F7\u6216 qq \u7FA4\u53F7\uFF0C\u518D\u9080\u8BF7\u4F60\u5982helux & hel\u8BA8\u8BBA\u7FA4\uFF08\u52A0\u53F7\u65F6\u8BB0\u5F97\u5907\u6CE8 helux \u6216 hel\uFF09"}),(0,s.jsx)("img",{src:"https://tnfe.gtimg.com/image/7fz74bhk84_1705216873301.png",style:{width:"100%"}})]}),(0,s.jsx)("div",{style:{width:"4%",display:"inline-block"}}),(0,s.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,s.jsx)("h4",{children:"\u2764\uFE0F\u200D\u{1F525} \u8D5E\u8D4F"}),(0,s.jsx)("p",{children:"\u5C0F\u5C0F\u9F13\u52B1\uFF0C\u7ED9\u4E88\u6211\u4EEC\u66F4\u591A\u529B\u91CF\u575A\u6301\u505A\u51FA\u66F4\u597D\u7684\u5F00\u6E90\u9879\u76EE"}),(0,s.jsx)("img",{src:"https://tnfe.gtimg.com/image/5a2u6arzpo_1705217036205.png",style:{width:"100%"}})]})]})};j.Z=g.memo(A)},31177:function(P,j,t){var g=t(24325),s=t(28633),A=t(19317),y=t(14315),T=t(70079),D=t(35250),F=null,b=function(x){var O=x.children,u=_objectWithoutProperties(x,F),e=useRef(null),n=useState(!1),a=_slicedToArray(n,2),f=a[0],l=a[1],o=useState(!1),h=_slicedToArray(o,2),_=h[0],E=h[1];return useEffect(function(){var m=e.current;if(m){var v=throttle(function(){l(m.scrollLeft>0),E(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return v(),m.addEventListener("scroll",v),window.addEventListener("resize",v),function(){m.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":_||void 0,children:_jsx("table",_objectSpread(_objectSpread({},u),{},{children:O}))})})},C=null},2131:function(P,j,t){t.d(j,{Z:function(){return v}});var g=t(24325),s=t.n(g),A=t(28633),y=t.n(A),T=t(12027),D=t.n(T),F=t(77324),b=t(88570),C=t(79275),B=t(60895),x=t(39865),O=t(1687),u=t(70079),e=t(35250);function n(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(c).forEach(function(d,L){var p="".concat(i?"".concat(i,"-"):"").concat(L);switch(d==null?void 0:d.type){case"ul":{var M,S=((M=r[r.length-1])===null||M===void 0?void 0:M.children)||r,R=n(d.props.children||[],p);S.push.apply(S,D()(R));break}case"li":{var I=n(d.props.children,p);r.push({title:[].concat(d.props.children).filter(function(N){return N.type!=="ul"}),key:p,children:I,isLeaf:!I.length});break}default:}}),r}var a=function(i){var r=(0,u.useState)(n(i)),d=y()(r,2),L=d[0],p=d[1];return(0,u.useEffect)(function(){p(n(i))},[i]),L},f=function(i){var r=i.isLeaf,d=i.expanded;return r?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(F.r,{fill:"currentColor"})}):d?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(b.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(C.r,{fill:"currentColor"})})},l=function(i){var r=i.isLeaf,d=i.expanded;return r?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):d?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(B.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(x.r,{fill:"currentColor"})})})},o=function(){return{height:0,opacity:0}},h=function(i){var r=i.scrollHeight;return{height:r,opacity:1}},_=function(i){return{height:i?i.offsetHeight:0}},E=function(i,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},m={motionName:"ant-motion-collapse",onAppearStart:o,onEnterStart:o,onAppearActive:h,onEnterActive:h,onLeaveStart:_,onLeaveActive:o,onAppearEnd:E,onEnterEnd:E,onLeaveEnd:E,motionDeadline:500},v=function(c){var i=a(c.children),r=(0,u.createRef)(),d=function(p,M){var S=M.isLeaf;S||p.shiftKey||p.metaKey||p.ctrlKey||r.current.onNodeExpand(p,M)};return(0,e.jsx)(O.Z,{className:"dumi-default-tree",icon:f,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:s()(s()({},m),{},{motionAppear:!1}),onClick:d,treeData:[{key:"0",title:c.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:l})}}}]);
