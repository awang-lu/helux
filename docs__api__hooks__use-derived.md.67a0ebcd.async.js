"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[4115],{56020:function(P,g,n){n.r(g);var A=n(18480),o=n(96140),C=n(41618),D=n(30446),M=n(63127),F=n(29151),T=n(78441),B=n(19361),E=n(98032),b=n(70079),t=n(35250);function y(){var s=(0,E.eL)(),e=s.texts;return(0,t.jsx)(E.dY,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"usederived",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usederived",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"useDerived"]}),(0,t.jsxs)("p",{children:[e[0].value,(0,t.jsx)("code",{children:e[1].value}),e[2].value]}),(0,t.jsxs)("h2",{id:"\u57FA\u7840\u7528\u6CD5",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u7528\u6CD5"]}),(0,t.jsxs)("h3",{id:"\u4F7F\u7528\u540C\u6B65\u6D3E\u751F\u7ED3\u679C",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528\u540C\u6B65\u6D3E\u751F\u7ED3\u679C",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528\u540C\u6B65\u6D3E\u751F\u7ED3\u679C"]})]}),(0,t.jsx)(E.Dl,{demo:{id:"docs-api-hooks-use-derived-demo-0"},previewerProps:{defaultShowCode:!0}}),(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h3",{id:"\u4F7F\u7528\u5F02\u6B65\u6D3E\u751F\u7ED3\u679C",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528\u5F02\u6B65\u6D3E\u751F\u7ED3\u679C",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528\u5F02\u6B65\u6D3E\u751F\u7ED3\u679C"]}),(0,t.jsxs)("p",{children:[e[3].value,(0,t.jsx)("code",{children:e[4].value}),e[5].value]})]}),(0,t.jsx)(E.Dl,{demo:{id:"docs-api-hooks-use-derived-demo-1"},previewerProps:{defaultShowCode:!0}})]})})}g.default=y},18480:function(P,g,n){var A=n(24325),o=n.n(A),C=n(28633),D=n.n(C),M=n(98032),F=n(70079),T=n(29151),B=n(35250),E={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,a=[];return Object.entries(e.properties||{}).forEach(function(f){var d,l=D()(f,2),m=l[0],h=l[1];a.push("".concat(m).concat((d=e.required)!==null&&d!==void 0&&d.includes(m)?"":"?",": ").concat(h.type==="object"?"object":r.toString(h)))}),a.length?"{ ".concat(a.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,a=e.signature;if(!a)return"Function";var f="oneOf"in a?a.oneOf:[a];return f.map(function(d){return"".concat(d.isAsync?"async ":"","(").concat(d.arguments.map(function(l){return"".concat(l.key,": ").concat(r.toString(l))}).join(", "),") => ").concat(r.toString(d.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(a){return r.getValidClassName(a)||r.toString(a)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},b=function(e){var r=useState(function(){return E.toString(e)}),a=_slicedToArray(r,2),f=a[0],d=a[1];return useEffect(function(){d(E.toString(e))},[e]),_jsx("code",{children:f})},t=function(e){var r,a=useRouteMeta(),f=a.frontmatter,d=useAtomAssets(),l=d.components,m=e.id||f.atomId,h=useIntl();if(!m)throw new Error("`id` properties if required for API component!");var j=l==null?void 0:l[m];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:h.formatMessage({id:"api.component.name"})}),_jsx("th",{children:h.formatMessage({id:"api.component.description"})}),_jsx("th",{children:h.formatMessage({id:"api.component.type"})}),_jsx("th",{children:h.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:j&&(r=j.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(j.propsConfig.properties).map(function(v){var x,_=_slicedToArray(v,2),i=_[0],u=_[1];return _jsxs("tr",{children:[_jsx("td",{children:i}),_jsx("td",{children:u.description||"--"}),_jsx("td",{children:_jsx(b,_objectSpread({},u))}),_jsx("td",{children:_jsx("code",{children:(x=j.propsConfig.required)!==null&&x!==void 0&&x.includes(i)?h.formatMessage({id:"api.component.required"}):JSON.stringify(u.default)||"--"})})]},i)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:h.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:m})})})})]})})},y=null},96140:function(P,g,n){var A=n(24325),o=n(35250),C=function(F){return _jsx("span",_objectSpread({className:"dumi-default-badge"},F))},D=null},19361:function(P,g,n){var A=n(70079),o=n(35250),C=function(){return(0,o.jsxs)("div",{style:{width:"100%"},children:[(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u{1F4E6} \u4E86\u89E3\u66F4\u591A"}),(0,o.jsx)("p",{children:"\u6B22\u8FCE\u5165\u7FA4\u4E86\u89E3\u66F4\u591A\uFF0C\u7531\u4E8E\u5FAE\u4FE1\u8BA8\u8BBA\u7FA4\u53F7 200 \u4EBA\u5DF2\u6EE1\uFF0C\u9700\u52A0\u4F5C\u8005\u5FAE\u4FE1\u53F7\u6216 qq \u7FA4\u53F7\uFF0C\u518D\u9080\u8BF7\u4F60\u5982helux & hel\u8BA8\u8BBA\u7FA4\uFF08\u52A0\u53F7\u65F6\u8BB0\u5F97\u5907\u6CE8 helux \u6216 hel\uFF09"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/7fz74bhk84_1705216873301.png",style:{width:"100%"}})]}),(0,o.jsx)("div",{style:{width:"4%",display:"inline-block"}}),(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u2764\uFE0F\u200D\u{1F525} \u8D5E\u8D4F"}),(0,o.jsx)("p",{children:"\u5C0F\u5C0F\u9F13\u52B1\uFF0C\u7ED9\u4E88\u6211\u4EEC\u66F4\u591A\u529B\u91CF\u575A\u6301\u505A\u51FA\u66F4\u597D\u7684\u5F00\u6E90\u9879\u76EE"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/5a2u6arzpo_1705217036205.png",style:{width:"100%"}})]})]})};g.Z=A.memo(C)},29151:function(P,g,n){var A=n(24325),o=n(28633),C=n(19317),D=n(14315),M=n(70079),F=n(35250),T=null,B=function(t){var y=t.children,s=_objectWithoutProperties(t,T),e=useRef(null),r=useState(!1),a=_slicedToArray(r,2),f=a[0],d=a[1],l=useState(!1),m=_slicedToArray(l,2),h=m[0],j=m[1];return useEffect(function(){var v=e.current;if(v){var x=throttle(function(){d(v.scrollLeft>0),j(v.scrollLeft<v.scrollWidth-v.offsetWidth)},100);return x(),v.addEventListener("scroll",x),window.addEventListener("resize",x),function(){v.removeEventListener("scroll",x),window.removeEventListener("resize",x)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":h||void 0,children:_jsx("table",_objectSpread(_objectSpread({},s),{},{children:y}))})})},E=null},78441:function(P,g,n){n.d(g,{Z:function(){return x}});var A=n(24325),o=n.n(A),C=n(28633),D=n.n(C),M=n(12027),F=n.n(M),T=n(58662),B=n(45078),E=n(17403),b=n(91703),t=n(11300),y=n(45096),s=n(70079),e=n(35250);function r(_){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=[];return[].concat(_).forEach(function(c,L){var p="".concat(i?"".concat(i,"-"):"").concat(L);switch(c==null?void 0:c.type){case"ul":{var O,S=((O=u[u.length-1])===null||O===void 0?void 0:O.children)||u,N=r(c.props.children||[],p);S.push.apply(S,F()(N));break}case"li":{var I=r(c.props.children,p);u.push({title:[].concat(c.props.children).filter(function(R){return R.type!=="ul"}),key:p,children:I,isLeaf:!I.length});break}default:}}),u}var a=function(i){var u=(0,s.useState)(r(i)),c=D()(u,2),L=c[0],p=c[1];return(0,s.useEffect)(function(){p(r(i))},[i]),L},f=function(i){var u=i.isLeaf,c=i.expanded;return u?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(T.r,{fill:"currentColor"})}):c?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(B.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(E.r,{fill:"currentColor"})})},d=function(i){var u=i.isLeaf,c=i.expanded;return u?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):c?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(b.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(t.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},m=function(i){var u=i.scrollHeight;return{height:u,opacity:1}},h=function(i){return{height:i?i.offsetHeight:0}},j=function(i,u){return(u==null?void 0:u.deadline)===!0||u.propertyName==="height"},v={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:m,onEnterActive:m,onLeaveStart:h,onLeaveActive:l,onAppearEnd:j,onEnterEnd:j,onLeaveEnd:j,motionDeadline:500},x=function(_){var i=a(_.children),u=(0,s.createRef)(),c=function(p,O){var S=O.isLeaf;S||p.shiftKey||p.metaKey||p.ctrlKey||u.current.onNodeExpand(p,O)};return(0,e.jsx)(y.Z,{className:"dumi-default-tree",icon:f,ref:u,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:o()(o()({},v),{},{motionAppear:!1}),onClick:c,treeData:[{key:"0",title:_.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:d})}}}]);
