"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[2283],{23136:function(M,A,n){n.r(A);var D=n(18480),l=n(96140),C=n(41618),y=n(30446),E=n(63127),F=n(29151),T=n(78441),B=n(19361),f=n(98032),b=n(70079),t=n(35250);function O(){var a=(0,f.eL)(),e=a.texts;return(0,t.jsx)(f.dY,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"derive",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#derive",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"derive"]}),(0,t.jsxs)("p",{children:[e[0].value,(0,t.jsx)("code",{children:e[1].value}),e[2].value,(0,t.jsx)(f.rU,{to:"/reference/glossary#%E5%85%A8%E9%87%8F%E6%B4%BE%E7%94%9F",children:e[3].value}),e[4].value]}),(0,t.jsxs)("h2",{id:"\u57FA\u7840\u4F7F\u7528",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u4F7F\u7528",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u4F7F\u7528"]}),(0,t.jsxs)("h3",{id:"\u540C\u6B65\u6D3E\u751F",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u540C\u6B65\u6D3E\u751F",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u540C\u6B65\u6D3E\u751F"]}),(0,t.jsx)("p",{children:e[5].value}),(0,t.jsx)(E.Z,{lang:"ts",children:e[6].value}),(0,t.jsx)("p",{children:e[7].value})]}),(0,t.jsx)(C.Z,{type:"info",title:"deriveDict \u514D\u62C6\u7BB1",children:(0,t.jsxs)("p",{children:[e[8].value,(0,t.jsx)("code",{children:e[9].value}),e[10].value,(0,t.jsx)("code",{children:e[11].value}),e[12].value,(0,t.jsx)(f.rU,{to:"/api/base/derive-dict",children:e[13].value}),e[14].value]})}),(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsx)(E.Z,{lang:"ts",children:e[15].value}),(0,t.jsx)("p",{children:e[16].value}),(0,t.jsx)(E.Z,{lang:"ts",children:e[17].value}),(0,t.jsxs)("h3",{id:"\u5F02\u6B65\u6D3E\u751F",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5F02\u6B65\u6D3E\u751F",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u5F02\u6B65\u6D3E\u751F"]}),(0,t.jsx)("p",{children:e[18].value}),(0,t.jsx)(E.Z,{lang:"ts",children:e[19].value})]}),(0,t.jsx)(f.Dl,{demo:{id:"docs-api-base-derive-demo-0"},previewerProps:{}}),(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("p",{children:[e[20].value,(0,t.jsx)("code",{children:e[21].value}),e[22].value,(0,t.jsx)("code",{children:e[23].value}),e[24].value,(0,t.jsx)("code",{children:e[25].value}),e[26].value,(0,t.jsx)("code",{children:e[27].value}),e[28].value,(0,t.jsx)("code",{children:e[29].value}),e[30].value,(0,t.jsx)("code",{children:e[31].value}),e[32].value]}),(0,t.jsx)(E.Z,{lang:"ts",children:e[33].value})]})]})})}A.default=O},18480:function(M,A,n){var D=n(24325),l=n.n(D),C=n(28633),y=n.n(C),E=n(98032),F=n(70079),T=n(29151),B=n(35250),f={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,s=[];return Object.entries(e.properties||{}).forEach(function(v){var d,o=y()(v,2),m=o[0],h=o[1];s.push("".concat(m).concat((d=e.required)!==null&&d!==void 0&&d.includes(m)?"":"?",": ").concat(h.type==="object"?"object":r.toString(h)))}),s.length?"{ ".concat(s.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,s=e.signature;if(!s)return"Function";var v="oneOf"in s?s.oneOf:[s];return v.map(function(d){return"".concat(d.isAsync?"async ":"","(").concat(d.arguments.map(function(o){return"".concat(o.key,": ").concat(r.toString(o))}).join(", "),") => ").concat(r.toString(d.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(s){return r.getValidClassName(s)||r.toString(s)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},b=function(e){var r=useState(function(){return f.toString(e)}),s=_slicedToArray(r,2),v=s[0],d=s[1];return useEffect(function(){d(f.toString(e))},[e]),_jsx("code",{children:v})},t=function(e){var r,s=useRouteMeta(),v=s.frontmatter,d=useAtomAssets(),o=d.components,m=e.id||v.atomId,h=useIntl();if(!m)throw new Error("`id` properties if required for API component!");var p=o==null?void 0:o[m];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:h.formatMessage({id:"api.component.name"})}),_jsx("th",{children:h.formatMessage({id:"api.component.description"})}),_jsx("th",{children:h.formatMessage({id:"api.component.type"})}),_jsx("th",{children:h.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:p&&(r=p.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(p.propsConfig.properties).map(function(x){var j,_=_slicedToArray(x,2),u=_[0],i=_[1];return _jsxs("tr",{children:[_jsx("td",{children:u}),_jsx("td",{children:i.description||"--"}),_jsx("td",{children:_jsx(b,_objectSpread({},i))}),_jsx("td",{children:_jsx("code",{children:(j=p.propsConfig.required)!==null&&j!==void 0&&j.includes(u)?h.formatMessage({id:"api.component.required"}):JSON.stringify(i.default)||"--"})})]},u)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:h.formatMessage({id:"api.component.".concat(o?"not.found":"unavailable")},{id:m})})})})]})})},O=null},96140:function(M,A,n){var D=n(24325),l=n(35250),C=function(F){return _jsx("span",_objectSpread({className:"dumi-default-badge"},F))},y=null},19361:function(M,A,n){var D=n(70079),l=n(35250),C=function(){return(0,l.jsxs)("div",{style:{width:"100%"},children:[(0,l.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,l.jsx)("h4",{children:"\u{1F4E6} \u4E86\u89E3\u66F4\u591A"}),(0,l.jsx)("p",{children:"\u6B22\u8FCE\u5165\u7FA4\u4E86\u89E3\u66F4\u591A\uFF0C\u7531\u4E8E\u5FAE\u4FE1\u8BA8\u8BBA\u7FA4\u53F7 200 \u4EBA\u5DF2\u6EE1\uFF0C\u9700\u52A0\u4F5C\u8005\u5FAE\u4FE1\u53F7\u6216 qq \u7FA4\u53F7\uFF0C\u518D\u9080\u8BF7\u4F60\u5982helux & hel\u8BA8\u8BBA\u7FA4\uFF08\u52A0\u53F7\u65F6\u8BB0\u5F97\u5907\u6CE8 helux \u6216 hel\uFF09"}),(0,l.jsx)("img",{src:"https://tnfe.gtimg.com/image/7fz74bhk84_1705216873301.png",style:{width:"100%"}})]}),(0,l.jsx)("div",{style:{width:"4%",display:"inline-block"}}),(0,l.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,l.jsx)("h4",{children:"\u2764\uFE0F\u200D\u{1F525} \u8D5E\u8D4F"}),(0,l.jsx)("p",{children:"\u5C0F\u5C0F\u9F13\u52B1\uFF0C\u7ED9\u4E88\u6211\u4EEC\u66F4\u591A\u529B\u91CF\u575A\u6301\u505A\u51FA\u66F4\u597D\u7684\u5F00\u6E90\u9879\u76EE"}),(0,l.jsx)("img",{src:"https://tnfe.gtimg.com/image/5a2u6arzpo_1705217036205.png",style:{width:"100%"}})]})]})};A.Z=D.memo(C)},29151:function(M,A,n){var D=n(24325),l=n(28633),C=n(19317),y=n(14315),E=n(70079),F=n(35250),T=null,B=function(t){var O=t.children,a=_objectWithoutProperties(t,T),e=useRef(null),r=useState(!1),s=_slicedToArray(r,2),v=s[0],d=s[1],o=useState(!1),m=_slicedToArray(o,2),h=m[0],p=m[1];return useEffect(function(){var x=e.current;if(x){var j=throttle(function(){d(x.scrollLeft>0),p(x.scrollLeft<x.scrollWidth-x.offsetWidth)},100);return j(),x.addEventListener("scroll",j),window.addEventListener("resize",j),function(){x.removeEventListener("scroll",j),window.removeEventListener("resize",j)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":v||void 0,"data-right-folded":h||void 0,children:_jsx("table",_objectSpread(_objectSpread({},a),{},{children:O}))})})},f=null},78441:function(M,A,n){n.d(A,{Z:function(){return j}});var D=n(24325),l=n.n(D),C=n(28633),y=n.n(C),E=n(12027),F=n.n(E),T=n(58662),B=n(45078),f=n(17403),b=n(91703),t=n(11300),O=n(45096),a=n(70079),e=n(35250);function r(_){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=[];return[].concat(_).forEach(function(c,L){var g="".concat(u?"".concat(u,"-"):"").concat(L);switch(c==null?void 0:c.type){case"ul":{var P,S=((P=i[i.length-1])===null||P===void 0?void 0:P.children)||i,N=r(c.props.children||[],g);S.push.apply(S,F()(N));break}case"li":{var I=r(c.props.children,g);i.push({title:[].concat(c.props.children).filter(function(R){return R.type!=="ul"}),key:g,children:I,isLeaf:!I.length});break}default:}}),i}var s=function(u){var i=(0,a.useState)(r(u)),c=y()(i,2),L=c[0],g=c[1];return(0,a.useEffect)(function(){g(r(u))},[u]),L},v=function(u){var i=u.isLeaf,c=u.expanded;return i?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(T.r,{fill:"currentColor"})}):c?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(B.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(f.r,{fill:"currentColor"})})},d=function(u){var i=u.isLeaf,c=u.expanded;return i?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):c?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(b.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(t.r,{fill:"currentColor"})})})},o=function(){return{height:0,opacity:0}},m=function(u){var i=u.scrollHeight;return{height:i,opacity:1}},h=function(u){return{height:u?u.offsetHeight:0}},p=function(u,i){return(i==null?void 0:i.deadline)===!0||i.propertyName==="height"},x={motionName:"ant-motion-collapse",onAppearStart:o,onEnterStart:o,onAppearActive:m,onEnterActive:m,onLeaveStart:h,onLeaveActive:o,onAppearEnd:p,onEnterEnd:p,onLeaveEnd:p,motionDeadline:500},j=function(_){var u=s(_.children),i=(0,a.createRef)(),c=function(g,P){var S=P.isLeaf;S||g.shiftKey||g.metaKey||g.ctrlKey||i.current.onNodeExpand(g,P)};return(0,e.jsx)(O.Z,{className:"dumi-default-tree",icon:v,ref:i,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:l()(l()({},x),{},{motionAppear:!1}),onClick:c,treeData:[{key:"0",title:_.title||"<root>",children:u}],defaultExpandAll:!0,switcherIcon:d})}}}]);
