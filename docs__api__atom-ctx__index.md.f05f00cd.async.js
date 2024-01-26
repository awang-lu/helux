"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[1075],{16347:function(T,p,n){n.r(p);var g=n(18480),l=n(96140),A=n(41618),D=n(30446),C=n(63127),O=n(29151),F=n(78441),B=n(19361),y=n(98032),b=n(70079),t=n(35250);function M(){var a=(0,y.eL)(),e=a.texts;return(0,t.jsx)(y.dY,{children:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"\u5171\u4EAB\u4E0A\u4E0B\u6587",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5171\u4EAB\u4E0A\u4E0B\u6587",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u5171\u4EAB\u4E0A\u4E0B\u6587"]}),(0,t.jsxs)("p",{children:[e[0].value,(0,t.jsx)("code",{children:e[1].value}),e[2].value,(0,t.jsx)("code",{children:e[3].value}),e[4].value,(0,t.jsx)("code",{children:e[5].value}),e[6].value,(0,t.jsx)("code",{children:e[7].value})]}),(0,t.jsx)(C.Z,{lang:"ts",children:e[8].value}),(0,t.jsxs)("p",{children:[e[9].value,(0,t.jsx)("code",{children:e[10].value}),e[11].value,(0,t.jsx)("code",{children:e[12].value}),e[13].value,(0,t.jsx)("code",{children:e[14].value}),e[15].value,(0,t.jsx)("code",{children:e[16].value}),e[17].value,(0,t.jsx)("code",{children:e[18].value}),e[19].value,(0,t.jsx)("code",{children:e[20].value}),e[21].value]}),(0,t.jsx)(C.Z,{lang:"ts",children:e[22].value}),(0,t.jsx)("p",{children:e[23].value}),(0,t.jsx)(C.Z,{lang:"ts",children:e[24].value})]})})})}p.default=M},18480:function(T,p,n){var g=n(24325),l=n.n(g),A=n(28633),D=n.n(A),C=n(98032),O=n(70079),F=n(29151),B=n(35250),y={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,s=[];return Object.entries(e.properties||{}).forEach(function(f){var d,o=D()(f,2),m=o[0],h=o[1];s.push("".concat(m).concat((d=e.required)!==null&&d!==void 0&&d.includes(m)?"":"?",": ").concat(h.type==="object"?"object":r.toString(h)))}),s.length?"{ ".concat(s.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,s=e.signature;if(!s)return"Function";var f="oneOf"in s?s.oneOf:[s];return f.map(function(d){return"".concat(d.isAsync?"async ":"","(").concat(d.arguments.map(function(o){return"".concat(o.key,": ").concat(r.toString(o))}).join(", "),") => ").concat(r.toString(d.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(s){return r.getValidClassName(s)||r.toString(s)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},b=function(e){var r=useState(function(){return y.toString(e)}),s=_slicedToArray(r,2),f=s[0],d=s[1];return useEffect(function(){d(y.toString(e))},[e]),_jsx("code",{children:f})},t=function(e){var r,s=useRouteMeta(),f=s.frontmatter,d=useAtomAssets(),o=d.components,m=e.id||f.atomId,h=useIntl();if(!m)throw new Error("`id` properties if required for API component!");var E=o==null?void 0:o[m];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:h.formatMessage({id:"api.component.name"})}),_jsx("th",{children:h.formatMessage({id:"api.component.description"})}),_jsx("th",{children:h.formatMessage({id:"api.component.type"})}),_jsx("th",{children:h.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:E&&(r=E.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(E.propsConfig.properties).map(function(v){var x,_=_slicedToArray(v,2),i=_[0],u=_[1];return _jsxs("tr",{children:[_jsx("td",{children:i}),_jsx("td",{children:u.description||"--"}),_jsx("td",{children:_jsx(b,_objectSpread({},u))}),_jsx("td",{children:_jsx("code",{children:(x=E.propsConfig.required)!==null&&x!==void 0&&x.includes(i)?h.formatMessage({id:"api.component.required"}):JSON.stringify(u.default)||"--"})})]},i)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:h.formatMessage({id:"api.component.".concat(o?"not.found":"unavailable")},{id:m})})})})]})})},M=null},96140:function(T,p,n){var g=n(24325),l=n(35250),A=function(O){return _jsx("span",_objectSpread({className:"dumi-default-badge"},O))},D=null},19361:function(T,p,n){var g=n(70079),l=n(35250),A=function(){return(0,l.jsxs)("div",{style:{width:"100%"},children:[(0,l.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,l.jsx)("h4",{children:"\u{1F4E6} \u4E86\u89E3\u66F4\u591A"}),(0,l.jsx)("p",{children:"\u6B22\u8FCE\u5165\u7FA4\u4E86\u89E3\u66F4\u591A\uFF0C\u7531\u4E8E\u5FAE\u4FE1\u8BA8\u8BBA\u7FA4\u53F7 200 \u4EBA\u5DF2\u6EE1\uFF0C\u9700\u52A0\u4F5C\u8005\u5FAE\u4FE1\u53F7\u6216 qq \u7FA4\u53F7\uFF0C\u518D\u9080\u8BF7\u4F60\u5982helux & hel\u8BA8\u8BBA\u7FA4\uFF08\u52A0\u53F7\u65F6\u8BB0\u5F97\u5907\u6CE8 helux \u6216 hel\uFF09"}),(0,l.jsx)("img",{src:"https://tnfe.gtimg.com/image/7fz74bhk84_1705216873301.png",style:{width:"100%"}})]}),(0,l.jsx)("div",{style:{width:"4%",display:"inline-block"}}),(0,l.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,l.jsx)("h4",{children:"\u2764\uFE0F\u200D\u{1F525} \u8D5E\u8D4F"}),(0,l.jsx)("p",{children:"\u5C0F\u5C0F\u9F13\u52B1\uFF0C\u7ED9\u4E88\u6211\u4EEC\u66F4\u591A\u529B\u91CF\u575A\u6301\u505A\u51FA\u66F4\u597D\u7684\u5F00\u6E90\u9879\u76EE"}),(0,l.jsx)("img",{src:"https://tnfe.gtimg.com/image/5a2u6arzpo_1705217036205.png",style:{width:"100%"}})]})]})};p.Z=g.memo(A)},29151:function(T,p,n){var g=n(24325),l=n(28633),A=n(19317),D=n(14315),C=n(70079),O=n(35250),F=null,B=function(t){var M=t.children,a=_objectWithoutProperties(t,F),e=useRef(null),r=useState(!1),s=_slicedToArray(r,2),f=s[0],d=s[1],o=useState(!1),m=_slicedToArray(o,2),h=m[0],E=m[1];return useEffect(function(){var v=e.current;if(v){var x=throttle(function(){d(v.scrollLeft>0),E(v.scrollLeft<v.scrollWidth-v.offsetWidth)},100);return x(),v.addEventListener("scroll",x),window.addEventListener("resize",x),function(){v.removeEventListener("scroll",x),window.removeEventListener("resize",x)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":h||void 0,children:_jsx("table",_objectSpread(_objectSpread({},a),{},{children:M}))})})},y=null},78441:function(T,p,n){n.d(p,{Z:function(){return x}});var g=n(24325),l=n.n(g),A=n(28633),D=n.n(A),C=n(12027),O=n.n(C),F=n(58662),B=n(45078),y=n(17403),b=n(91703),t=n(11300),M=n(45096),a=n(70079),e=n(35250);function r(_){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=[];return[].concat(_).forEach(function(c,L){var j="".concat(i?"".concat(i,"-"):"").concat(L);switch(c==null?void 0:c.type){case"ul":{var P,S=((P=u[u.length-1])===null||P===void 0?void 0:P.children)||u,R=r(c.props.children||[],j);S.push.apply(S,O()(R));break}case"li":{var I=r(c.props.children,j);u.push({title:[].concat(c.props.children).filter(function(N){return N.type!=="ul"}),key:j,children:I,isLeaf:!I.length});break}default:}}),u}var s=function(i){var u=(0,a.useState)(r(i)),c=D()(u,2),L=c[0],j=c[1];return(0,a.useEffect)(function(){j(r(i))},[i]),L},f=function(i){var u=i.isLeaf,c=i.expanded;return u?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(F.r,{fill:"currentColor"})}):c?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(B.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(y.r,{fill:"currentColor"})})},d=function(i){var u=i.isLeaf,c=i.expanded;return u?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):c?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(b.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(t.r,{fill:"currentColor"})})})},o=function(){return{height:0,opacity:0}},m=function(i){var u=i.scrollHeight;return{height:u,opacity:1}},h=function(i){return{height:i?i.offsetHeight:0}},E=function(i,u){return(u==null?void 0:u.deadline)===!0||u.propertyName==="height"},v={motionName:"ant-motion-collapse",onAppearStart:o,onEnterStart:o,onAppearActive:m,onEnterActive:m,onLeaveStart:h,onLeaveActive:o,onAppearEnd:E,onEnterEnd:E,onLeaveEnd:E,motionDeadline:500},x=function(_){var i=s(_.children),u=(0,a.createRef)(),c=function(j,P){var S=P.isLeaf;S||j.shiftKey||j.metaKey||j.ctrlKey||u.current.onNodeExpand(j,P)};return(0,e.jsx)(M.Z,{className:"dumi-default-tree",icon:f,ref:u,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:l()(l()({},v),{},{motionAppear:!1}),onClick:c,treeData:[{key:"0",title:_.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:d})}}}]);
