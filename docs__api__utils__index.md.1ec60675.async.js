"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[2591],{65534:function(P,g,n){n.r(g);var A=n(18480),o=n(96140),C=n(41618),y=n(30446),T=n(63127),D=n(29151),F=n(78441),L=n(19361),a=n(98032),b=n(70079),t=n(35250);function O(){var u=(0,a.eL)(),e=u.texts;return(0,t.jsx)(a.dY,{children:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"\u5DE5\u5177",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5DE5\u5177",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u5DE5\u5177"]}),(0,t.jsx)("p",{children:e[0].value}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/init",children:e[1].value}),e[2].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/flush",children:e[3].value}),e[4].value,(0,t.jsx)("code",{children:e[5].value}),e[6].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/reactive-desc",children:e[7].value}),e[8].value,(0,t.jsx)("code",{children:e[9].value}),e[10].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/add-middleware",children:e[11].value}),e[12].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/add-plugin",children:e[13].value}),e[14].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/cst",children:e[15].value}),e[16].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/get-atom",children:e[17].value}),e[18].value,(0,t.jsx)("code",{children:e[19].value}),e[20].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/get-snap",children:e[21].value}),e[22].value,(0,t.jsx)("code",{children:e[23].value}),e[24].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/get-action-loading",children:e[25].value}),e[26].value,(0,t.jsx)("code",{children:e[27].value}),e[28].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/get-derive-loading",children:e[29].value}),e[30].value,(0,t.jsx)("code",{children:e[31].value}),e[32].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/get-mutate-loading",children:e[33].value}),e[34].value,(0,t.jsx)("code",{children:e[35].value}),e[36].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/is-atom",children:e[37].value}),e[38].value,(0,t.jsx)("code",{children:e[39].value}),e[40].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/is-derived-atom",children:e[41].value}),e[42].value,(0,t.jsx)("code",{children:e[43].value}),e[44].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/is-diff",children:e[45].value}),e[46].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/shallow-compare",children:e[47].value}),e[48].value]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(a.rU,{to:"/api/utils/mark-raw",children:e[49].value}),e[50].value]})]})]})})})}g.default=O},18480:function(P,g,n){var A=n(24325),o=n.n(A),C=n(28633),y=n.n(C),T=n(98032),D=n(70079),F=n(29151),L=n(35250),a={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,s=[];return Object.entries(e.properties||{}).forEach(function(f){var c,d=y()(f,2),m=d[0],v=d[1];s.push("".concat(m).concat((c=e.required)!==null&&c!==void 0&&c.includes(m)?"":"?",": ").concat(v.type==="object"?"object":r.toString(v)))}),s.length?"{ ".concat(s.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,s=e.signature;if(!s)return"Function";var f="oneOf"in s?s.oneOf:[s];return f.map(function(c){return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(d){return"".concat(d.key,": ").concat(r.toString(d))}).join(", "),") => ").concat(r.toString(c.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(s){return r.getValidClassName(s)||r.toString(s)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},b=function(e){var r=useState(function(){return a.toString(e)}),s=_slicedToArray(r,2),f=s[0],c=s[1];return useEffect(function(){c(a.toString(e))},[e]),_jsx("code",{children:f})},t=function(e){var r,s=useRouteMeta(),f=s.frontmatter,c=useAtomAssets(),d=c.components,m=e.id||f.atomId,v=useIntl();if(!m)throw new Error("`id` properties if required for API component!");var E=d==null?void 0:d[m];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:v.formatMessage({id:"api.component.name"})}),_jsx("th",{children:v.formatMessage({id:"api.component.description"})}),_jsx("th",{children:v.formatMessage({id:"api.component.type"})}),_jsx("th",{children:v.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:E&&(r=E.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(E.propsConfig.properties).map(function(x){var j,h=_slicedToArray(x,2),l=h[0],i=h[1];return _jsxs("tr",{children:[_jsx("td",{children:l}),_jsx("td",{children:i.description||"--"}),_jsx("td",{children:_jsx(b,_objectSpread({},i))}),_jsx("td",{children:_jsx("code",{children:(j=E.propsConfig.required)!==null&&j!==void 0&&j.includes(l)?v.formatMessage({id:"api.component.required"}):JSON.stringify(i.default)||"--"})})]},l)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:v.formatMessage({id:"api.component.".concat(d?"not.found":"unavailable")},{id:m})})})})]})})},O=null},96140:function(P,g,n){var A=n(24325),o=n(35250),C=function(D){return _jsx("span",_objectSpread({className:"dumi-default-badge"},D))},y=null},19361:function(P,g,n){var A=n(70079),o=n(35250),C=function(){return(0,o.jsxs)("div",{style:{width:"100%"},children:[(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u{1F4E6} \u4E86\u89E3\u66F4\u591A"}),(0,o.jsx)("p",{children:"\u6B22\u8FCE\u5165\u7FA4\u4E86\u89E3\u66F4\u591A\uFF0C\u7531\u4E8E\u5FAE\u4FE1\u8BA8\u8BBA\u7FA4\u53F7 200 \u4EBA\u5DF2\u6EE1\uFF0C\u9700\u52A0\u4F5C\u8005\u5FAE\u4FE1\u53F7\u6216 qq \u7FA4\u53F7\uFF0C\u518D\u9080\u8BF7\u4F60\u5982helux & hel\u8BA8\u8BBA\u7FA4\uFF08\u52A0\u53F7\u65F6\u8BB0\u5F97\u5907\u6CE8 helux \u6216 hel\uFF09"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/7fz74bhk84_1705216873301.png",style:{width:"100%"}})]}),(0,o.jsx)("div",{style:{width:"4%",display:"inline-block"}}),(0,o.jsxs)("div",{style:{width:"48%",display:"inline-block"},children:[(0,o.jsx)("h4",{children:"\u2764\uFE0F\u200D\u{1F525} \u8D5E\u8D4F"}),(0,o.jsx)("p",{children:"\u5C0F\u5C0F\u9F13\u52B1\uFF0C\u7ED9\u4E88\u6211\u4EEC\u66F4\u591A\u529B\u91CF\u575A\u6301\u505A\u51FA\u66F4\u597D\u7684\u5F00\u6E90\u9879\u76EE"}),(0,o.jsx)("img",{src:"https://tnfe.gtimg.com/image/5a2u6arzpo_1705217036205.png",style:{width:"100%"}})]})]})};g.Z=A.memo(C)},29151:function(P,g,n){var A=n(24325),o=n(28633),C=n(19317),y=n(14315),T=n(70079),D=n(35250),F=null,L=function(t){var O=t.children,u=_objectWithoutProperties(t,F),e=useRef(null),r=useState(!1),s=_slicedToArray(r,2),f=s[0],c=s[1],d=useState(!1),m=_slicedToArray(d,2),v=m[0],E=m[1];return useEffect(function(){var x=e.current;if(x){var j=throttle(function(){c(x.scrollLeft>0),E(x.scrollLeft<x.scrollWidth-x.offsetWidth)},100);return j(),x.addEventListener("scroll",j),window.addEventListener("resize",j),function(){x.removeEventListener("scroll",j),window.removeEventListener("resize",j)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":v||void 0,children:_jsx("table",_objectSpread(_objectSpread({},u),{},{children:O}))})})},a=null},78441:function(P,g,n){n.d(g,{Z:function(){return j}});var A=n(24325),o=n.n(A),C=n(28633),y=n.n(C),T=n(12027),D=n.n(T),F=n(58662),L=n(45078),a=n(17403),b=n(91703),t=n(11300),O=n(45096),u=n(70079),e=n(35250);function r(h){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=[];return[].concat(h).forEach(function(_,S){var p="".concat(l?"".concat(l,"-"):"").concat(S);switch(_==null?void 0:_.type){case"ul":{var M,B=((M=i[i.length-1])===null||M===void 0?void 0:M.children)||i,I=r(_.props.children||[],p);B.push.apply(B,D()(I));break}case"li":{var U=r(_.props.children,p);i.push({title:[].concat(_.props.children).filter(function(R){return R.type!=="ul"}),key:p,children:U,isLeaf:!U.length});break}default:}}),i}var s=function(l){var i=(0,u.useState)(r(l)),_=y()(i,2),S=_[0],p=_[1];return(0,u.useEffect)(function(){p(r(l))},[l]),S},f=function(l){var i=l.isLeaf,_=l.expanded;return i?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(F.r,{fill:"currentColor"})}):_?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(L.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(a.r,{fill:"currentColor"})})},c=function(l){var i=l.isLeaf,_=l.expanded;return i?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):_?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(b.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(t.r,{fill:"currentColor"})})})},d=function(){return{height:0,opacity:0}},m=function(l){var i=l.scrollHeight;return{height:i,opacity:1}},v=function(l){return{height:l?l.offsetHeight:0}},E=function(l,i){return(i==null?void 0:i.deadline)===!0||i.propertyName==="height"},x={motionName:"ant-motion-collapse",onAppearStart:d,onEnterStart:d,onAppearActive:m,onEnterActive:m,onLeaveStart:v,onLeaveActive:d,onAppearEnd:E,onEnterEnd:E,onLeaveEnd:E,motionDeadline:500},j=function(h){var l=s(h.children),i=(0,u.createRef)(),_=function(p,M){var B=M.isLeaf;B||p.shiftKey||p.metaKey||p.ctrlKey||i.current.onNodeExpand(p,M)};return(0,e.jsx)(O.Z,{className:"dumi-default-tree",icon:f,ref:i,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:o()(o()({},x),{},{motionAppear:!1}),onClick:_,treeData:[{key:"0",title:h.title||"<root>",children:l}],defaultExpandAll:!0,switcherIcon:c})}}}]);
