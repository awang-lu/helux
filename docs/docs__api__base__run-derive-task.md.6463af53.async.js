"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[6604],{18457:function(S,j,n){n.r(j);var D=n(4311),A=n(53267),T=n(82197),O=n(12620),g=n(74692),C=n(33296),L=n(12133),y=n(54996),P=n(70079),r=n(35250);function E(){var M=(0,y.eL)(),t=M.texts;return(0,r.jsx)(y.dY,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"markdown",children:[(0,r.jsxs)("h1",{id:"runderivetask",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#runderivetask",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"runDeriveTask"]}),(0,r.jsxs)("p",{children:[t[0].value,(0,r.jsx)("code",{children:t[1].value}),t[2].value]}),(0,r.jsxs)("h2",{id:"\u57FA\u7840\u4F7F\u7528",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u4F7F\u7528",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u4F7F\u7528"]}),(0,r.jsx)(g.Z,{lang:"ts",children:t[3].value})]}),(0,r.jsx)(y.Dl,{demo:{id:"docs-api-base-run-derive-task-demo-0"},previewerProps:{}}),(0,r.jsxs)("div",{className:"markdown",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("code",{children:t[4].value}),t[5].value,(0,r.jsx)("code",{children:t[6].value}),t[7].value,(0,r.jsx)("code",{children:t[8].value}),t[9].value]}),(0,r.jsx)(g.Z,{lang:"ts",children:t[10].value}),(0,r.jsxs)("p",{children:[t[11].value,(0,r.jsx)("code",{children:t[12].value}),t[13].value,(0,r.jsx)("code",{children:t[14].value}),t[15].value,(0,r.jsx)("code",{children:t[16].value}),t[17].value]}),(0,r.jsx)(g.Z,{lang:"ts",children:t[18].value}),(0,r.jsxs)("p",{children:[t[19].value,(0,r.jsx)("code",{children:t[20].value}),t[21].value,(0,r.jsx)("code",{children:t[22].value}),t[23].value]}),(0,r.jsx)(g.Z,{lang:"ts",children:t[24].value})]})]})})}j.default=E},4311:function(S,j,n){var D=n(39114),A=n.n(D),T=n(70125),O=n.n(T),g=n(54996),C=n(70079),L=n(33296),y=n(35250),P={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,o=[];return Object.entries(e.properties||{}).forEach(function(f){var c,l=O()(f,2),h=l[0],_=l[1];o.push("".concat(h).concat((c=e.required)!==null&&c!==void 0&&c.includes(h)?"":"?",": ").concat(_.type==="object"?"object":s.toString(_)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,o=e.signature;if(!o)return"Function";var f="oneOf"in o?o.oneOf:[o];return f.map(function(c){return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(l){return"".concat(l.key,": ").concat(s.toString(l))}).join(", "),") => ").concat(s.toString(c.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(o){return s.getValidClassName(o)||s.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},r=function(e){var s=useState(function(){return P.toString(e)}),o=_slicedToArray(s,2),f=o[0],c=o[1];return useEffect(function(){c(P.toString(e))},[e]),_jsx("code",{children:f})},E=function(e){var s,o=useRouteMeta(),f=o.frontmatter,c=useAtomAssets(),l=c.components,h=e.id||f.atomId,_=useIntl();if(!h)throw new Error("`id` properties if required for API component!");var p=l==null?void 0:l[h];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:p&&(s=p.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(p.propsConfig.properties).map(function(m){var v,d=_slicedToArray(m,2),i=d[0],a=d[1];return _jsxs("tr",{children:[_jsx("td",{children:i}),_jsx("td",{children:a.description||"--"}),_jsx("td",{children:_jsx(r,_objectSpread({},a))}),_jsx("td",{children:_jsx("code",{children:(v=p.propsConfig.required)!==null&&v!==void 0&&v.includes(i)?_.formatMessage({id:"api.component.required"}):JSON.stringify(a.default)||"--"})})]},i)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:h})})})})]})})},M=null},53267:function(S,j,n){var D=n(39114),A=n(35250),T=function(C){return _jsx("span",_objectSpread({className:"dumi-default-badge"},C))},O=null},33296:function(S,j,n){var D=n(39114),A=n(70125),T=n(11221),O=n(14315),g=n(70079),C=n(35250),L=null,y=function(E){var M=E.children,t=_objectWithoutProperties(E,L),e=useRef(null),s=useState(!1),o=_slicedToArray(s,2),f=o[0],c=o[1],l=useState(!1),h=_slicedToArray(l,2),_=h[0],p=h[1];return useEffect(function(){var m=e.current;if(m){var v=throttle(function(){c(m.scrollLeft>0),p(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return v(),m.addEventListener("scroll",v),window.addEventListener("resize",v),function(){m.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":_||void 0,children:_jsx("table",_objectSpread(_objectSpread({},t),{},{children:M}))})})},P=null},12133:function(S,j,n){n.d(j,{Z:function(){return v}});var D=n(39114),A=n.n(D),T=n(70125),O=n.n(T),g=n(79664),C=n.n(g),L=n(53474),y=n(23057),P=n(322),r=n(56261),E=n(23433),M=n(18838),t=n(70079),e=n(35250);function s(d){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=[];return[].concat(d).forEach(function(u,I){var x="".concat(i?"".concat(i,"-"):"").concat(I);switch(u==null?void 0:u.type){case"ul":{var b,N=((b=a[a.length-1])===null||b===void 0?void 0:b.children)||a,R=s(u.props.children||[],x);N.push.apply(N,C()(R));break}case"li":{var U=s(u.props.children,x);a.push({title:[].concat(u.props.children).filter(function(B){return B.type!=="ul"}),key:x,children:U,isLeaf:!U.length});break}default:}}),a}var o=function(i){var a=(0,t.useState)(s(i)),u=O()(a,2),I=u[0],x=u[1];return(0,t.useEffect)(function(){x(s(i))},[i]),I},f=function(i){var a=i.isLeaf,u=i.expanded;return a?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(L.r,{fill:"currentColor"})}):u?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(y.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(P.r,{fill:"currentColor"})})},c=function(i){var a=i.isLeaf,u=i.expanded;return a?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):u?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(r.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(E.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},h=function(i){var a=i.scrollHeight;return{height:a,opacity:1}},_=function(i){return{height:i?i.offsetHeight:0}},p=function(i,a){return(a==null?void 0:a.deadline)===!0||a.propertyName==="height"},m={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:h,onEnterActive:h,onLeaveStart:_,onLeaveActive:l,onAppearEnd:p,onEnterEnd:p,onLeaveEnd:p,motionDeadline:500},v=function(d){var i=o(d.children),a=(0,t.createRef)(),u=function(x,b){var N=b.isLeaf;N||x.shiftKey||x.metaKey||x.ctrlKey||a.current.onNodeExpand(x,b)};return(0,e.jsx)(M.Z,{className:"dumi-default-tree",icon:f,ref:a,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:A()(A()({},m),{},{motionAppear:!1}),onClick:u,treeData:[{key:"0",title:d.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:c})}}}]);
