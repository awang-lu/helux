"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[2546],{66835:function(S,j,t){t.r(j);var E=t(4311),A=t(53267),D=t(82197),O=t(12620),b=t(74692),T=t(33296),L=t(12133),p=t(54996),C=t(70079),i=t(35250);function y(){var P=(0,p.eL)(),n=P.texts;return(0,i.jsx)(p.dY,{children:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"markdown",children:[(0,i.jsxs)("h1",{id:"api",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(p.rU,{to:"/api/base/atom",children:n[0].value})}),(0,i.jsx)("li",{children:(0,i.jsx)(p.rU,{to:"/api/atom-ctx",children:n[1].value})}),(0,i.jsx)("li",{children:(0,i.jsx)(p.rU,{to:"/api/hooks",children:n[2].value})}),(0,i.jsx)("li",{children:(0,i.jsx)(p.rU,{to:"/api/utils",children:n[3].value})})]})]})})})}j.default=y},4311:function(S,j,t){var E=t(39114),A=t.n(E),D=t(70125),O=t.n(D),b=t(54996),T=t(70079),L=t(33296),p=t(35250),C={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,o=[];return Object.entries(e.properties||{}).forEach(function(h){var c,l=O()(h,2),f=l[0],d=l[1];o.push("".concat(f).concat((c=e.required)!==null&&c!==void 0&&c.includes(f)?"":"?",": ").concat(d.type==="object"?"object":r.toString(d)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,o=e.signature;if(!o)return"Function";var h="oneOf"in o?o.oneOf:[o];return h.map(function(c){return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(l){return"".concat(l.key,": ").concat(r.toString(l))}).join(", "),") => ").concat(r.toString(c.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(o){return r.getValidClassName(o)||r.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},i=function(e){var r=useState(function(){return C.toString(e)}),o=_slicedToArray(r,2),h=o[0],c=o[1];return useEffect(function(){c(C.toString(e))},[e]),_jsx("code",{children:h})},y=function(e){var r,o=useRouteMeta(),h=o.frontmatter,c=useAtomAssets(),l=c.components,f=e.id||h.atomId,d=useIntl();if(!f)throw new Error("`id` properties if required for API component!");var g=l==null?void 0:l[f];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:d.formatMessage({id:"api.component.name"})}),_jsx("th",{children:d.formatMessage({id:"api.component.description"})}),_jsx("th",{children:d.formatMessage({id:"api.component.type"})}),_jsx("th",{children:d.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:g&&(r=g.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(g.propsConfig.properties).map(function(m){var v,_=_slicedToArray(m,2),a=_[0],s=_[1];return _jsxs("tr",{children:[_jsx("td",{children:a}),_jsx("td",{children:s.description||"--"}),_jsx("td",{children:_jsx(i,_objectSpread({},s))}),_jsx("td",{children:_jsx("code",{children:(v=g.propsConfig.required)!==null&&v!==void 0&&v.includes(a)?d.formatMessage({id:"api.component.required"}):JSON.stringify(s.default)||"--"})})]},a)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:d.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:f})})})})]})})},P=null},53267:function(S,j,t){var E=t(39114),A=t(35250),D=function(T){return _jsx("span",_objectSpread({className:"dumi-default-badge"},T))},O=null},33296:function(S,j,t){var E=t(39114),A=t(70125),D=t(11221),O=t(14315),b=t(70079),T=t(35250),L=null,p=function(y){var P=y.children,n=_objectWithoutProperties(y,L),e=useRef(null),r=useState(!1),o=_slicedToArray(r,2),h=o[0],c=o[1],l=useState(!1),f=_slicedToArray(l,2),d=f[0],g=f[1];return useEffect(function(){var m=e.current;if(m){var v=throttle(function(){c(m.scrollLeft>0),g(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return v(),m.addEventListener("scroll",v),window.addEventListener("resize",v),function(){m.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":h||void 0,"data-right-folded":d||void 0,children:_jsx("table",_objectSpread(_objectSpread({},n),{},{children:P}))})})},C=null},12133:function(S,j,t){t.d(j,{Z:function(){return v}});var E=t(39114),A=t.n(E),D=t(70125),O=t.n(D),b=t(79664),T=t.n(b),L=t(53474),p=t(23057),C=t(322),i=t(56261),y=t(23433),P=t(18838),n=t(70079),e=t(35250);function r(_){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",s=[];return[].concat(_).forEach(function(u,I){var x="".concat(a?"".concat(a,"-"):"").concat(I);switch(u==null?void 0:u.type){case"ul":{var M,U=((M=s[s.length-1])===null||M===void 0?void 0:M.children)||s,R=r(u.props.children||[],x);U.push.apply(U,T()(R));break}case"li":{var N=r(u.props.children,x);s.push({title:[].concat(u.props.children).filter(function(B){return B.type!=="ul"}),key:x,children:N,isLeaf:!N.length});break}default:}}),s}var o=function(a){var s=(0,n.useState)(r(a)),u=O()(s,2),I=u[0],x=u[1];return(0,n.useEffect)(function(){x(r(a))},[a]),I},h=function(a){var s=a.isLeaf,u=a.expanded;return s?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(L.r,{fill:"currentColor"})}):u?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(p.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(C.r,{fill:"currentColor"})})},c=function(a){var s=a.isLeaf,u=a.expanded;return s?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):u?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(i.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(y.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},f=function(a){var s=a.scrollHeight;return{height:s,opacity:1}},d=function(a){return{height:a?a.offsetHeight:0}},g=function(a,s){return(s==null?void 0:s.deadline)===!0||s.propertyName==="height"},m={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:f,onEnterActive:f,onLeaveStart:d,onLeaveActive:l,onAppearEnd:g,onEnterEnd:g,onLeaveEnd:g,motionDeadline:500},v=function(_){var a=o(_.children),s=(0,n.createRef)(),u=function(x,M){var U=M.isLeaf;U||x.shiftKey||x.metaKey||x.ctrlKey||s.current.onNodeExpand(x,M)};return(0,e.jsx)(P.Z,{className:"dumi-default-tree",icon:h,ref:s,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:A()(A()({},m),{},{motionAppear:!1}),onClick:u,treeData:[{key:"0",title:_.title||"<root>",children:a}],defaultExpandAll:!0,switcherIcon:c})}}}]);
