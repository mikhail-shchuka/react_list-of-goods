(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r,s=n(3),c=n.n(s),o=n(4),i=n(5),a=n(8),u=n(6),l=n(7),b=n(1),d=n.n(b),p=(n(13),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(r||(r={}));var j=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={isStarted:!1,sortType:r.NONE,isReversed:!1},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=function(t,e,n){var s=Object(l.a)(t);return s.sort((function(t,n){switch(e){case r.ALPABET:return t.localeCompare(n);case r.LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(h,this.state.sortType,this.state.isReversed);return Object(p.jsx)("div",{className:"App",children:this.state.isStarted?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{type:"button",onClick:function(){t.setState({sortType:r.ALPABET,isReversed:!1})},children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",onClick:function(){t.setState({sortType:r.LENGTH,isReversed:!1})},children:"Sort by length"}),Object(p.jsx)("button",{type:"button",onClick:function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),Object(p.jsx)("button",{type:"button",onClick:function(){t.setState({sortType:r.NONE,isReversed:!1})},children:"Reset"}),Object(p.jsx)("ul",{className:"Goods",children:e.map((function(t){return Object(p.jsx)("li",{children:t},t)}))})]}):Object(p.jsx)("button",{type:"button",onClick:function(){t.setState({isStarted:!0})},children:"Start"})})}}]),n}(d.a.Component);c.a.render(Object(p.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f8720875.chunk.js.map