import{P as N,A as O,q as n,l as A,I as o,m as Q,n as U,c as I,Q as $,U as z}from"./index.f5b27852.js";import{u as b,m as G}from"./tag.c07b1b29.js";import{i as y,j as h,V as k,v as V,R as J,m as K,k as M,a as W,A as X,B as Y,C as Z,b as ee,l as ae,n as te,u as ne,p as ie,q as de,r as le,d as se,D as ce,E as re,F as ue,e as ve,o as oe,g as me,L as fe,s as ge}from"./VAvatar.7761bdf9.js";const ke=N({name:"VCardActions",setup(e,l){let{slots:t}=l;return O({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),be=y("v-card-subtitle"),ye=y("v-card-title"),Ce=A()({name:"VCardItem",props:{appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:String,title:String,...h()},setup(e,l){let{slots:t}=l;return b(()=>{var r;const a=!!(e.prependAvatar||e.prependIcon||t.prepend),m=!!(e.appendAvatar||e.appendIcon||t.append),f=!!(e.title||t.title),g=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[a&&n(k,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var i,d;return[n("div",{class:"v-card-item__prepend"},[(d=(i=t.prepend)==null?void 0:i.call(t))!=null?d:n(V,null,null)])]}}),n("div",{class:"v-card-item__content"},[f&&n(ye,{key:"title"},{default:()=>{var i,d;return[(d=(i=t.title)==null?void 0:i.call(t))!=null?d:e.title]}}),g&&n(be,{key:"subtitle"},{default:()=>{var i,d;return[(d=(i=t.subtitle)==null?void 0:i.call(t))!=null?d:e.subtitle]}}),(r=t.default)==null?void 0:r.call(t)]),m&&n(k,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var i,d;return[n("div",{class:"v-card-item__append"},[(d=(i=t.append)==null?void 0:i.call(t))!=null?d:n(V,null,null)])]}})])}),{}}}),Ie=y("v-card-text"),pe=A()({name:"VCard",directives:{Ripple:J},props:{appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Q(),...K(),...h(),...M(),...W(),...X(),...Y(),...Z(),...ee(),...ae(),...G(),...te({variant:"elevated"})},setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:m}=U(e),{borderClasses:f}=ne(e),{colorClasses:g,colorStyles:r,variantClasses:i}=ie(e),{densityClasses:d}=de(e),{dimensionStyles:p}=le(e),{elevationClasses:P}=se(e),{loaderClasses:S}=ce(e),{locationStyles:x}=re(e),{positionClasses:B}=ue(e),{roundedClasses:D}=ve(e),u=oe(e,t),L=I(()=>e.link!==!1&&u.isLink.value),v=I(()=>!e.disabled&&e.link!==!1&&(e.link||u.isClickable.value));return b(()=>{const T=L.value?"a":e.tag,_=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=_||R,q=!!(a.append||e.appendAvatar||e.appendIcon),F=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),w=E||F||q,H=!!(a.text||e.text);return $(n(T,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},m.value,f.value,g.value,d.value,P.value,S.value,B.value,D.value,i.value],style:[r.value,p.value,x.value],href:u.href.value,onClick:v.value&&u.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[j&&n(k,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var s,c;return[n("div",{class:"v-card__image"},[(c=(s=a.image)==null?void 0:s.call(a))!=null?c:n(me,null,null)])]}}),n(fe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),w&&n(Ce,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(Ie,{key:"text"},{default:()=>{var s,c;return[(c=(s=a.text)==null?void 0:s.call(a))!=null?c:e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(ke,null,{default:a.actions}),ge(v.value,"v-card")]}}),[[z("ripple"),v.value&&e.ripple]])}),{}}});export{pe as V,Ie as a,ke as b,ye as c,be as d};