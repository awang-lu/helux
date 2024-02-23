"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[302],{10019:function(b,A,n){n.r(A);var C=n(31974),o=n(68804),j=n(14755),y=n(26713),D=n(92645),F=n(31177),M=n(2131),B=n(30606),E=n(90167),T=n(70079),t=n(35250);function O(){var a=(0,E.eL)(),e=a.texts;return(0,t.jsx)(E.dY,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"useglobalforceupdate",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useglobalforceupdate",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"useGlobalForceUpdate"]}),(0,t.jsx)("p",{children:e[0].value})]}),(0,t.jsx)(j.Z,{type:"warning",children:(0,t.jsx)("p",{children:e[1].value})}),(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsx)(D.Z,{lang:"ts",children:e[2].value}),(0,t.jsx)("p",{children:e[3].value}),(0,t.jsx)(D.Z,{lang:"ts",children:e[4].value}),(0,t.jsxs)("h2",{id:"\u57FA\u7840\u7528\u6CD5",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u7528\u6CD5"]}),(0,t.jsxs)("h3",{id:"\u66F4\u65B0\u6240\u6709\u5B9E\u4F8B",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u66F4\u65B0\u6240\u6709\u5B9E\u4F8B",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u66F4\u65B0\u6240\u6709\u5B9E\u4F8B"]})]}),(0,t.jsx)(E.Dl,{demo:{id:"docs-api-hooks-use-global-force-update-demo-0"},previewerProps:{defaultShowCode:!0}}),(0,t.jsx)("div",{className:"markdown",children:(0,t.jsxs)("h3",{id:"\u6307\u5B9A\u66F4\u65B0\u8303\u56F4",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6307\u5B9A\u66F4\u65B0\u8303\u56F4",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u6307\u5B9A\u66F4\u65B0\u8303\u56F4"]})}),(0,t.jsx)(j.Z,{type:"info",children:(0,t.jsxs)("p",{children:[e[5].value,(0,t.jsx)("code",{children:e[6].value}),e[7].value,(0,t.jsx)("code",{children:e[8].value}),e[9].value]})}),(0,t.jsx)(E.Dl,{demo:{id:"docs-api-hooks-use-global-force-update-demo-1"},previewerProps:{defaultShowCode:!0}}),(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h3",{id:"\u91CD\u5199\u66F4\u65B0\u8303\u56F4",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u91CD\u5199\u66F4\u65B0\u8303\u56F4",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u91CD\u5199\u66F4\u65B0\u8303\u56F4"]}),(0,t.jsx)("p",{children:e[10].value}),(0,t.jsx)(D.Z,{lang:"ts",children:e[11].value})]})]})})}A.default=O},31974:function(b,A,n){var C=n(24325),o=n.n(C),j=n(28633),y=n.n(j),D=n(90167),F=n(70079),M=n(31177),B=n(35250),E={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,s=[];return Object.entries(e.properties||{}).forEach(function(f){var d,l=y()(f,2),m=l[0],h=l[1];s.push("".concat(m).concat((d=e.required)!==null&&d!==void 0&&d.includes(m)?"":"?",": ").concat(h.type==="object"?"object":r.toString(h)))}),s.length?"{ ".concat(s.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,s=e.signature;if(!s)return"Function";var f="oneOf"in s?s.oneOf:[s];return f.map(function(d){return"".concat(d.isAsync?"async ":"","(").concat(d.arguments.map(function(l){return"".concat(l.key,": ").concat(r.toString(l))}).join(", "),") => ").concat(r.toString(d.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(s){return r.getValidClassName(s)||r.toString(s)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},T=function(e){var r=useState(function(){return E.toString(e)}),s=_slicedToArray(r,2),f=s[0],d=s[1];return useEffect(function(){d(E.toString(e))},[e]),_jsx("code",{children:f})},t=function(e){var r,s=useRouteMeta(),f=s.frontmatter,d=useAtomAssets(),l=d.components,m=e.id||f.atomId,h=useIntl();if(!m)throw new Error("`id` properties if required for API component!");var p=l==null?void 0:l[m];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:h.formatMessage({id:"api.component.name"})}),_jsx("th",{children:h.formatMessage({id:"api.component.description"})}),_jsx("th",{children:h.formatMessage({id:"api.component.type"})}),_jsx("th",{children:h.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:p&&(r=p.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(p.propsConfig.properties).map(function(x){var v,_=_slicedToArray(x,2),i=_[0],u=_[1];return _jsxs("tr",{children:[_jsx("td",{children:i}),_jsx("td",{children:u.description||"--"}),_jsx("td",{children:_jsx(T,_objectSpread({},u))}),_jsx("td",{children:_jsx("code",{children:(v=p.propsConfig.required)!==null&&v!==void 0&&v.includes(i)?h.formatMessage({id:"api.component.required"}):JSON.stringify(u.default)||"--"})})]},i)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:h.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:m})})})})]})})},O=null},68804:function(b,A,n){var C=n(24325),o=n(35250),j=function(F){return _jsx("span",_objectSpread({className:"dumi-default-badge"},F))},y=null},30606:function(b,A,n){var C=n(70079),o=n(35250),j=function(){return(0,o.jsxs)("div",{style:{width:"100%"},children:[(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u{1F4E6} \u4E86\u89E3\u66F4\u591A"}),(0,o.jsx)("p",{children:"\u6B22\u8FCE\u5165\u7FA4\u4E86\u89E3\u66F4\u591A\uFF0C\u7531\u4E8E\u5FAE\u4FE1\u8BA8\u8BBA\u7FA4\u53F7 200 \u4EBA\u5DF2\u6EE1\uFF0C\u9700\u52A0\u4F5C\u8005\u5FAE\u4FE1\u53F7\u6216 qq \u7FA4\u53F7\uFF0C\u518D\u9080\u8BF7\u4F60\u5982helux & hel\u8BA8\u8BBA\u7FA4\uFF08\u52A0\u53F7\u65F6\u8BB0\u5F97\u5907\u6CE8 helux \u6216 hel\uFF09"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/7fz74bhk84_1705216873301.png",style:{width:"100%"}})]}),(0,o.jsx)("div",{style:{width:"4%",display:"inline-block"}}),(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u2764\uFE0F\u200D\u{1F525} \u8D5E\u8D4F"}),(0,o.jsx)("p",{children:"\u5C0F\u5C0F\u9F13\u52B1\uFF0C\u7ED9\u4E88\u6211\u4EEC\u66F4\u591A\u529B\u91CF\u575A\u6301\u505A\u51FA\u66F4\u597D\u7684\u5F00\u6E90\u9879\u76EE"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/5a2u6arzpo_1705217036205.png",style:{width:"100%"}})]})]})};A.Z=C.memo(j)},31177:function(b,A,n){var C=n(24325),o=n(28633),j=n(19317),y=n(14315),D=n(70079),F=n(35250),M=null,B=function(t){var O=t.children,a=_objectWithoutProperties(t,M),e=useRef(null),r=useState(!1),s=_slicedToArray(r,2),f=s[0],d=s[1],l=useState(!1),m=_slicedToArray(l,2),h=m[0],p=m[1];return useEffect(function(){var x=e.current;if(x){var v=throttle(function(){d(x.scrollLeft>0),p(x.scrollLeft<x.scrollWidth-x.offsetWidth)},100);return v(),x.addEventListener("scroll",v),window.addEventListener("resize",v),function(){x.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":h||void 0,children:_jsx("table",_objectSpread(_objectSpread({},a),{},{children:O}))})})},E=null},2131:function(b,A,n){n.d(A,{Z:function(){return v}});var C=n(24325),o=n.n(C),j=n(28633),y=n.n(j),D=n(12027),F=n.n(D),M=n(77324),B=n(88570),E=n(79275),T=n(60895),t=n(39865),O=n(1687),a=n(70079),e=n(35250);function r(_){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=[];return[].concat(_).forEach(function(c,L){var g="".concat(i?"".concat(i,"-"):"").concat(L);switch(c==null?void 0:c.type){case"ul":{var P,S=((P=u[u.length-1])===null||P===void 0?void 0:P.children)||u,N=r(c.props.children||[],g);S.push.apply(S,F()(N));break}case"li":{var I=r(c.props.children,g);u.push({title:[].concat(c.props.children).filter(function(R){return R.type!=="ul"}),key:g,children:I,isLeaf:!I.length});break}default:}}),u}var s=function(i){var u=(0,a.useState)(r(i)),c=y()(u,2),L=c[0],g=c[1];return(0,a.useEffect)(function(){g(r(i))},[i]),L},f=function(i){var u=i.isLeaf,c=i.expanded;return u?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(M.r,{fill:"currentColor"})}):c?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(B.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(E.r,{fill:"currentColor"})})},d=function(i){var u=i.isLeaf,c=i.expanded;return u?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):c?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(T.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(t.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},m=function(i){var u=i.scrollHeight;return{height:u,opacity:1}},h=function(i){return{height:i?i.offsetHeight:0}},p=function(i,u){return(u==null?void 0:u.deadline)===!0||u.propertyName==="height"},x={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:m,onEnterActive:m,onLeaveStart:h,onLeaveActive:l,onAppearEnd:p,onEnterEnd:p,onLeaveEnd:p,motionDeadline:500},v=function(_){var i=s(_.children),u=(0,a.createRef)(),c=function(g,P){var S=P.isLeaf;S||g.shiftKey||g.metaKey||g.ctrlKey||u.current.onNodeExpand(g,P)};return(0,e.jsx)(O.Z,{className:"dumi-default-tree",icon:f,ref:u,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:o()(o()({},x),{},{motionAppear:!1}),onClick:c,treeData:[{key:"0",title:_.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:d})}}}]);
