"use strict";(self.webpackChunkkanji_project=self.webpackChunkkanji_project||[]).push([[278],{7278:function(t,r,n){n.r(r),n.d(r,{default:function(){return P}});var e=n(885),i=n(2791),o=n(8596),c=n(2067),a=n(873),s=n(6772),u=n(463),h=function(t){return t.Items},l=(0,a.P1)([h],(function(t){return t.items}));Object.defineProperty(Array.prototype,"chunk",{value:function(t){var r=this;return Array.from(Array(Math.ceil(this.length/t)),(function(n,e){return r.slice(e*t,e*t+t)}))}});var f=(0,a.P1)([l],(function(t){return t.chunk(6)})),m=(0,a.P1)([h],(function(t){return t.loadingItems})),d=n(1914),j=n.n(d),k=n(6513),p=n(3392),x=n(159),Z=n(3969),y=n(5369),g=n(3264),v=n(184),w=function(t){var r=t.item,n=t.history;if(r)var e=r.kanji;return(0,v.jsxs)(p.Z,{children:[(0,v.jsx)(Z.Z,{children:(0,v.jsx)(y.Z,{children:r?e.character:(0,v.jsx)(g.Z,{})})}),(0,v.jsx)(x.Z,{primary:r?e.character:(0,v.jsx)(g.Z,{width:"20%"}),secondary:r?"Number strokes: ".concat(e.stroke):(0,v.jsx)(g.Z,{width:"80%"})}),r?(0,v.jsx)(k.Z,{variant:"outlined",size:"small",color:"primary",onClick:function(){n.push("/info/".concat(e.character))},children:"Show more"}):(0,v.jsx)(g.Z,{width:"30%"})]})},b=u.Z.getItems,A=(0,o.Z)((function(t){return{root:{width:"100%",maxWidth:360,backgroundColor:t.palette.background.paper}}})),C=(0,a.zB)({items:f,loading:m}),I={getItems:b},P=(0,s.$j)(C,I)((function(t){var r=t.items,n=t.getItems,o=t.loading,a=t.history,s=A(),u=(0,i.useState)(0),h=(0,e.Z)(u,2),l=h[0],f=h[1];(0,i.useEffect)((function(){n()}),[n]);return(0,v.jsxs)(c.Z,{className:s.root,children:[r.length>0?(0,v.jsx)(j(),{limit:10,offset:l,total:r.length,onClick:function(t,r){return function(t){f(t)}(r)}}):(0,v.jsx)(g.Z,{}),(o||0===r.length?Array.from(new Array(3)):r[l]).map((function(t,r){return(0,v.jsx)(w,{item:t,history:a},r)}))]})}))}}]);
//# sourceMappingURL=278.8cb4a894.chunk.js.map