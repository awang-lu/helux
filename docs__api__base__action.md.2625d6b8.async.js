"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[4371],{6629:function(P,p,n){n.r(p);var C=n(666),o=n(29462),g=n(48549),D=n(19418),y=n(12433),F=n(85935),T=n(52227),B=n(68747),A=n(62423),b=n(70079),t=n(35250);function O(){var u=(0,A.eL)(),e=u.texts;return(0,t.jsx)(A.dY,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"action",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#action",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"action"]}),(0,t.jsxs)("p",{children:[e[0].value,(0,t.jsx)("code",{children:e[1].value}),e[2].value,(0,t.jsx)("code",{children:e[3].value}),e[4].value]}),(0,t.jsx)("hr",{})]}),(0,t.jsx)(g.Z,{type:"info",children:(0,t.jsxs)("p",{children:[e[5].value,(0,t.jsx)(A.rU,{to:"/guide/action",children:e[6].value})]})}),(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h2",{id:"\u57FA\u7840\u7528\u6CD5",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u7528\u6CD5"]}),(0,t.jsxs)("h3",{id:"\u521B\u5EFA\u540C\u6B65-action",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521B\u5EFA\u540C\u6B65-action",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u521B\u5EFA\u540C\u6B65 action"]}),(0,t.jsx)(y.Z,{lang:"ts",children:e[7].value}),(0,t.jsxs)("p",{children:[e[8].value,(0,t.jsx)("code",{children:e[9].value}),e[10].value]}),(0,t.jsx)(y.Z,{lang:"ts",children:e[11].value}),(0,t.jsxs)("h3",{id:"\u521B\u5EFA\u5F02\u6B65-action",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521B\u5EFA\u5F02\u6B65-action",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u521B\u5EFA\u5F02\u6B65 action"]}),(0,t.jsx)("p",{children:e[12].value}),(0,t.jsx)(y.Z,{lang:"ts",children:e[13].value})]})]})})}p.default=O},666:function(P,p,n){var C=n(24325),o=n.n(C),g=n(28633),D=n.n(g),y=n(62423),F=n(70079),T=n(85935),B=n(35250),A={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,s=[];return Object.entries(e.properties||{}).forEach(function(f){var d,l=D()(f,2),m=l[0],h=l[1];s.push("".concat(m).concat((d=e.required)!==null&&d!==void 0&&d.includes(m)?"":"?",": ").concat(h.type==="object"?"object":r.toString(h)))}),s.length?"{ ".concat(s.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,s=e.signature;if(!s)return"Function";var f="oneOf"in s?s.oneOf:[s];return f.map(function(d){return"".concat(d.isAsync?"async ":"","(").concat(d.arguments.map(function(l){return"".concat(l.key,": ").concat(r.toString(l))}).join(", "),") => ").concat(r.toString(d.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(s){return r.getValidClassName(s)||r.toString(s)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},b=function(e){var r=useState(function(){return A.toString(e)}),s=_slicedToArray(r,2),f=s[0],d=s[1];return useEffect(function(){d(A.toString(e))},[e]),_jsx("code",{children:f})},t=function(e){var r,s=useRouteMeta(),f=s.frontmatter,d=useAtomAssets(),l=d.components,m=e.id||f.atomId,h=useIntl();if(!m)throw new Error("`id` properties if required for API component!");var E=l==null?void 0:l[m];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:h.formatMessage({id:"api.component.name"})}),_jsx("th",{children:h.formatMessage({id:"api.component.description"})}),_jsx("th",{children:h.formatMessage({id:"api.component.type"})}),_jsx("th",{children:h.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:E&&(r=E.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(E.propsConfig.properties).map(function(v){var x,_=_slicedToArray(v,2),a=_[0],i=_[1];return _jsxs("tr",{children:[_jsx("td",{children:a}),_jsx("td",{children:i.description||"--"}),_jsx("td",{children:_jsx(b,_objectSpread({},i))}),_jsx("td",{children:_jsx("code",{children:(x=E.propsConfig.required)!==null&&x!==void 0&&x.includes(a)?h.formatMessage({id:"api.component.required"}):JSON.stringify(i.default)||"--"})})]},a)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:h.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:m})})})})]})})},O=null},29462:function(P,p,n){var C=n(24325),o=n(35250),g=function(F){return _jsx("span",_objectSpread({className:"dumi-default-badge"},F))},D=null},68747:function(P,p,n){var C=n(70079),o=n(35250),g=function(){return(0,o.jsxs)("div",{style:{width:"100%"},children:[(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u{1F4E6} \u4E86\u89E3\u66F4\u591A"}),(0,o.jsx)("p",{children:"\u6B22\u8FCE\u5165\u7FA4\u4E86\u89E3\u66F4\u591A\uFF0C\u7531\u4E8E\u5FAE\u4FE1\u8BA8\u8BBA\u7FA4\u53F7 200 \u4EBA\u5DF2\u6EE1\uFF0C\u9700\u52A0\u4F5C\u8005\u5FAE\u4FE1\u53F7\u6216 qq \u7FA4\u53F7\uFF0C\u518D\u9080\u8BF7\u4F60\u5982helux & hel\u8BA8\u8BBA\u7FA4\uFF08\u52A0\u53F7\u65F6\u8BB0\u5F97\u5907\u6CE8 helux \u6216 hel\uFF09"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/7fz74bhk84_1705216873301.png",style:{width:"100%"}})]}),(0,o.jsx)("div",{style:{width:"4%",display:"inline-block"}}),(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u2764\uFE0F\u200D\u{1F525} \u8D5E\u8D4F"}),(0,o.jsx)("p",{children:"\u5C0F\u5C0F\u9F13\u52B1\uFF0C\u7ED9\u4E88\u6211\u4EEC\u66F4\u591A\u529B\u91CF\u575A\u6301\u505A\u51FA\u66F4\u597D\u7684\u5F00\u6E90\u9879\u76EE"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/5a2u6arzpo_1705217036205.png",style:{width:"100%"}})]})]})};p.Z=C.memo(g)},85935:function(P,p,n){var C=n(24325),o=n(28633),g=n(19317),D=n(14315),y=n(70079),F=n(35250),T=null,B=function(t){var O=t.children,u=_objectWithoutProperties(t,T),e=useRef(null),r=useState(!1),s=_slicedToArray(r,2),f=s[0],d=s[1],l=useState(!1),m=_slicedToArray(l,2),h=m[0],E=m[1];return useEffect(function(){var v=e.current;if(v){var x=throttle(function(){d(v.scrollLeft>0),E(v.scrollLeft<v.scrollWidth-v.offsetWidth)},100);return x(),v.addEventListener("scroll",x),window.addEventListener("resize",x),function(){v.removeEventListener("scroll",x),window.removeEventListener("resize",x)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":h||void 0,children:_jsx("table",_objectSpread(_objectSpread({},u),{},{children:O}))})})},A=null},52227:function(P,p,n){n.d(p,{Z:function(){return x}});var C=n(24325),o=n.n(C),g=n(28633),D=n.n(g),y=n(12027),F=n.n(y),T=n(9530),B=n(20170),A=n(74776),b=n(70413),t=n(42573),O=n(44553),u=n(70079),e=n(35250);function r(_){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=[];return[].concat(_).forEach(function(c,L){var j="".concat(a?"".concat(a,"-"):"").concat(L);switch(c==null?void 0:c.type){case"ul":{var M,S=((M=i[i.length-1])===null||M===void 0?void 0:M.children)||i,N=r(c.props.children||[],j);S.push.apply(S,F()(N));break}case"li":{var I=r(c.props.children,j);i.push({title:[].concat(c.props.children).filter(function(R){return R.type!=="ul"}),key:j,children:I,isLeaf:!I.length});break}default:}}),i}var s=function(a){var i=(0,u.useState)(r(a)),c=D()(i,2),L=c[0],j=c[1];return(0,u.useEffect)(function(){j(r(a))},[a]),L},f=function(a){var i=a.isLeaf,c=a.expanded;return i?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(T.r,{fill:"currentColor"})}):c?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(B.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(A.r,{fill:"currentColor"})})},d=function(a){var i=a.isLeaf,c=a.expanded;return i?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):c?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(b.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(t.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},m=function(a){var i=a.scrollHeight;return{height:i,opacity:1}},h=function(a){return{height:a?a.offsetHeight:0}},E=function(a,i){return(i==null?void 0:i.deadline)===!0||i.propertyName==="height"},v={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:m,onEnterActive:m,onLeaveStart:h,onLeaveActive:l,onAppearEnd:E,onEnterEnd:E,onLeaveEnd:E,motionDeadline:500},x=function(_){var a=s(_.children),i=(0,u.createRef)(),c=function(j,M){var S=M.isLeaf;S||j.shiftKey||j.metaKey||j.ctrlKey||i.current.onNodeExpand(j,M)};return(0,e.jsx)(O.Z,{className:"dumi-default-tree",icon:f,ref:i,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:o()(o()({},v),{},{motionAppear:!1}),onClick:c,treeData:[{key:"0",title:_.title||"<root>",children:a}],defaultExpandAll:!0,switcherIcon:d})}}}]);
