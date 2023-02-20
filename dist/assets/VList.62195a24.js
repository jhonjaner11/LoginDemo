import{a as be}from"./VBtn.5fe59e18.js";import{m as M,u as _}from"./tag.af4e2aba.js";import{p as H,l as T,q as u,m as K,v as x,n as W,r as V,c as y,A as Se,h as O,O as q,i as z,j as Q,t as ve,f as pe,g as Ue,b as Ke,P as We,I as N,Q as ke,R as qe,S as fe,x as ze,U as Qe,w as me,V as L}from"./index.e878275b.js";import{m as le,a as ie,b as se,c as Ce,u as re,d as oe,e as ue,V as D,g as Je,h as Ve,i as xe,R as Xe,j as Ie,k as we,l as Ye,n as Ae,o as Ze,p as et,q as Pe,r as Le,s as tt,v as ge,w as ye}from"./VAvatar.d9c38fe5.js";const nt=H({text:String,...M()},"v-toolbar-title"),at=T()({name:"VToolbarTitle",props:nt(),setup(e,l){let{slots:t}=l;return _(()=>{const n=!!(t.default||t.text||e.text);return u(e.tag,{class:"v-toolbar-title"},{default:()=>{var i;return[n&&u("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(i=t.default)==null?void 0:i.call(t)])]}})}),{}}}),lt=[null,"prominent","default","comfortable","compact"],it=H({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>lt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...le(),...ie(),...se(),...M({tag:"header"}),...K()},"v-toolbar"),ne=T()({name:"VToolbar",props:it(),setup(e,l){var c;let{slots:t}=l;const{backgroundColorClasses:n,backgroundColorStyles:i}=Ce(x(e,"color")),{borderClasses:a}=re(e),{elevationClasses:s}=oe(e),{roundedClasses:o}=ue(e),{themeClasses:f}=W(e),S=V(!!(e.extended||((c=t.extension)==null?void 0:c.call(t)))),m=y(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),r=y(()=>S.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Se({VBtn:{variant:"text"}}),_(()=>{var I;const v=!!(e.title||t.title),d=!!(t.image||e.image),p=(I=t.extension)==null?void 0:I.call(t);return S.value=!!(e.extended||p),u(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,a.value,s.value,o.value,f.value],style:[i.value]},{default:()=>[d&&u("div",{key:"image",class:"v-toolbar__image"},[u(D,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var k;return[t.image?(k=t.image)==null?void 0:k.call(t):u(Je,null,null)]}})]),u(D,{defaults:{VTabs:{height:O(m.value)}}},{default:()=>{var k,b,h;return[u("div",{class:"v-toolbar__content",style:{height:O(m.value)}},[t.prepend&&u("div",{class:"v-toolbar__prepend"},[(k=t.prepend)==null?void 0:k.call(t)]),v&&u(at,{key:"title",text:e.title},{text:t.title}),(b=t.default)==null?void 0:b.call(t),t.append&&u("div",{class:"v-toolbar__append"},[(h=t.append)==null?void 0:h.call(t)])])]}}),u(D,{defaults:{VTabs:{height:O(r.value)}}},{default:()=>[u(be,null,{default:()=>[S.value&&u("div",{class:"v-toolbar__extension",style:{height:O(r.value)}},[p])]})]})]})}),{contentHeight:m,extensionHeight:r}}});function Lt(e){var l;return q(e,Object.keys((l=ne==null?void 0:ne.props)!=null?l:{}))}const st=T()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...K()},setup(e,l){let{attrs:t}=l;const{themeClasses:n}=W(e),{textColorClasses:i,textColorStyles:a}=Ve(x(e,"color")),s=y(()=>{const o={};return e.length&&(o[e.vertical?"maxHeight":"maxWidth"]=O(e.length)),e.thickness&&(o[e.vertical?"borderRightWidth":"borderTopWidth"]=O(e.thickness)),o});return _(()=>u("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,i.value],style:[s.value,a.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),ae=Symbol.for("vuetify:list");function Te(){const e=z(ae,{hasPrepend:V(!1),updateHasPrepend:()=>null}),l={hasPrepend:V(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return Q(ae,l),e}function Be(){return z(ae,null)}const rt={open:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(t){const a=new Set;a.add(l);let s=i.get(l);for(;s!=null;)a.add(s),s=i.get(s);return a}else return n.delete(l),n},select:()=>null},_e={open:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(t){let a=i.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=i.get(a);return n}else n.delete(l);return n},select:()=>null},ot={open:_e.open,select:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(!t)return n;const a=[];let s=i.get(l);for(;s!=null;)a.push(s),s=i.get(s);return new Set(a)}},ce=e=>{const l={select:t=>{let{id:n,value:i,selected:a}=t;if(e&&!i){const s=Array.from(a.entries()).reduce((o,f)=>{let[S,m]=f;return m==="on"?[...o,S]:o},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,i?"on":"off"),a},in:(t,n,i)=>{let a=new Map;for(const s of t||[])a=l.select({id:s,value:!0,selected:new Map(a),children:n,parents:i});return a},out:t=>{const n=[];for(const[i,a]of t.entries())a==="on"&&n.push(i);return n}};return l},Oe=e=>{const l=ce(e);return{select:n=>{let{selected:i,id:a,...s}=n;const o=i.has(a)?new Map([[a,i.get(a)]]):new Map;return l.select({...s,id:a,selected:o})},in:(n,i,a)=>{let s=new Map;return n!=null&&n.length&&(s=l.in(n.slice(0,1),i,a)),s},out:(n,i,a)=>l.out(n,i,a)}},ut=e=>{const l=ce(e);return{select:n=>{let{id:i,selected:a,children:s,...o}=n;return s.has(i)?a:l.select({id:i,selected:a,children:s,...o})},in:l.in,out:l.out}},ct=e=>{const l=Oe(e);return{select:n=>{let{id:i,selected:a,children:s,...o}=n;return s.has(i)?a:l.select({id:i,selected:a,children:s,...o})},in:l.in,out:l.out}},dt=e=>{const l={select:t=>{let{id:n,value:i,selected:a,children:s,parents:o}=t;const f=new Map(a),S=[n];for(;S.length;){const r=S.shift();a.set(r,i?"on":"off"),s.has(r)&&S.push(...s.get(r))}let m=o.get(n);for(;m;){const r=s.get(m),c=r.every(d=>a.get(d)==="on"),v=r.every(d=>!a.has(d)||a.get(d)==="off");a.set(m,c?"on":v?"off":"indeterminate"),m=o.get(m)}return e&&!i&&Array.from(a.entries()).reduce((c,v)=>{let[d,p]=v;return p==="on"?[...c,d]:c},[]).length===0?f:a},in:(t,n,i)=>{let a=new Map;for(const s of t||[])a=l.select({id:s,value:!0,selected:new Map(a),children:n,parents:i});return a},out:(t,n)=>{const i=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&i.push(a);return i}};return l},j=Symbol.for("vuetify:nested"),Ne={id:V(),root:{register:()=>null,unregister:()=>null,parents:V(new Map),children:V(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:V(new Set),selected:V(new Map),selectedValues:V([])}},vt=H({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),ft=e=>{let l=!1;const t=V(new Map),n=V(new Map),i=ve(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return ct(e.mandatory);case"leaf":return ut(e.mandatory);case"independent":return ce(e.mandatory);case"single-independent":return Oe(e.mandatory);case"classic":default:return dt(e.mandatory)}}),s=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ot;case"single":return rt;case"multiple":default:return _e}}),o=ve(e,"selected",e.selected,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value));pe(()=>{l=!0});function f(r){const c=[];let v=r;for(;v!=null;)c.unshift(v),v=n.value.get(v);return c}const S=Ue("nested"),m={id:V(),root:{opened:i,selected:o,selectedValues:y(()=>{const r=[];for(const[c,v]of o.value.entries())v==="on"&&r.push(c);return r}),register:(r,c,v)=>{c&&r!==c&&n.value.set(r,c),v&&t.value.set(r,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],r])},unregister:r=>{var v;if(l)return;t.value.delete(r);const c=n.value.get(r);if(c){const d=(v=t.value.get(c))!=null?v:[];t.value.set(c,d.filter(p=>p!==r))}n.value.delete(r),i.value.delete(r)},open:(r,c,v)=>{S.emit("click:open",{id:r,value:c,path:f(r),event:v});const d=s.value.open({id:r,value:c,opened:new Set(i.value),children:t.value,parents:n.value,event:v});d&&(i.value=d)},openOnSelect:(r,c,v)=>{const d=s.value.select({id:r,value:c,selected:new Map(o.value),opened:new Set(i.value),children:t.value,parents:n.value,event:v});d&&(i.value=d)},select:(r,c,v)=>{S.emit("click:select",{id:r,value:c,path:f(r),event:v});const d=a.value.select({id:r,value:c,selected:new Map(o.value),children:t.value,parents:n.value,event:v});d&&(o.value=d),m.root.openOnSelect(r,c,v)},children:t,parents:n}};return Q(j,m),m.root},De=(e,l)=>{const t=z(j,Ne),n=Symbol(Ke()),i=y(()=>{var s;return(s=e.value)!=null?s:n}),a={...t,id:i,open:(s,o)=>t.root.open(i.value,s,o),openOnSelect:(s,o)=>t.root.openOnSelect(i.value,s,o),isOpen:y(()=>t.root.opened.value.has(i.value)),parent:y(()=>t.root.parents.value.get(i.value)),select:(s,o)=>t.root.select(i.value,s,o),isSelected:y(()=>t.root.selected.value.get(i.value)==="on"),isIndeterminate:y(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:y(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(i.value,t.id.value,l),pe(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),l&&Q(j,a),a},mt=()=>{const e=z(j,Ne);Q(j,{...e,isGroupActivator:!0})},gt=We({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return mt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),yt=H({activeColor:String,color:String,collapseIcon:{type:N,default:"$collapse"},expandIcon:{type:N,default:"$expand"},prependIcon:N,appendIcon:N,fluid:Boolean,subgroup:Boolean,value:null,...M()},"v-list-group"),Me=T()({name:"VListGroup",props:{title:String,...yt()},setup(e,l){let{slots:t}=l;const{isOpen:n,open:i,id:a}=De(x(e,"value"),!0),s=y(()=>`v-list-group--id-${String(a.value)}`),o=Be();function f(r){i(!n.value,r)}const S=y(()=>({onClick:f,class:"v-list-group__header",id:s.value})),m=y(()=>n.value?e.collapseIcon:e.expandIcon);return _(()=>u(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value}]},{default:()=>[t.activator&&u(D,{defaults:{VListItem:{active:n.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&m.value,appendIcon:e.appendIcon||!e.subgroup&&m.value,title:e.title,value:e.value}}},{default:()=>[u(gt,null,{default:()=>[t.activator({props:S.value,isOpen:n.value})]})]}),u(be,null,{default:()=>{var r;return[ke(u("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(r=t.default)==null?void 0:r.call(t)]),[[qe,n.value]])]}})]})),{}}});function ht(e){return q(e,Object.keys(Me.props))}const bt=xe("v-list-item-subtitle"),St=xe("v-list-item-title"),he=T()({name:"VListItem",directives:{Ripple:Xe},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:N,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:N,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:fe,onClickOnce:fe,...le(),...Ie(),...we(),...ie(),...se(),...Ye(),...M(),...K(),...Ae({variant:"text"})},emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:i}=l;const a=Ze(e,t),s=y(()=>{var g;return(g=e.value)!=null?g:a.href.value}),{select:o,isSelected:f,isIndeterminate:S,isGroupActivator:m,root:r,parent:c,openOnSelect:v}=De(s,!1),d=Be(),p=y(()=>{var g;return e.active!==!1&&(e.active||((g=a.isActive)==null?void 0:g.value)||f.value)}),I=y(()=>e.link!==!1&&a.isLink.value),k=y(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),b=y(()=>e.rounded||e.nav),h=y(()=>{var g;return{color:p.value&&(g=e.activeColor)!=null?g:e.color,variant:e.variant}});ze(()=>{var g;return(g=a.isActive)==null?void 0:g.value},g=>{g&&c.value!=null&&r.open(c.value,!0),g&&v(g)},{immediate:!0});const{themeClasses:J}=W(e),{borderClasses:X}=re(e),{colorClasses:Y,colorStyles:P,variantClasses:C}=et(h),{densityClasses:w}=Pe(e),{dimensionStyles:Z}=Le(e),{elevationClasses:R}=oe(e),{roundedClasses:E}=ue(b),U=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),A=y(()=>({isActive:p.value,select:o,isSelected:f.value,isIndeterminate:S.value}));function B(g){var F;i("click",g),!(m||!k.value)&&((F=a.navigate)==null||F.call(a,g),e.value!=null&&o(!f.value,g))}function ee(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),B(g))}return _(()=>{const g=I.value?"a":e.tag,F=!d||f.value||p.value,He=n.title||e.title,Re=n.subtitle||e.subtitle,Ee=!!(n.append||e.appendAvatar||e.appendIcon),te=!!(n.prepend||e.prependAvatar||e.prependIcon);return d==null||d.updateHasPrepend(te),ke(u(g,{class:["v-list-item",{"v-list-item--active":p.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!te&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&p.value},J.value,X.value,F?Y.value:void 0,w.value,R.value,U.value,E.value,C.value],style:[F?P.value:void 0,Z.value],href:a.href.value,tabindex:k.value?0:void 0,onClick:B,onKeydown:k.value&&!I.value&&ee},{default:()=>{var de;return[tt(k.value||p.value,"v-list-item"),te&&u("div",{key:"prepend",class:"v-list-item__prepend"},[e.prependAvatar&&u(ge,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&u(ye,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null),n.prepend&&u(D,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[n.prepend(A.value)]})]),u("div",{class:"v-list-item__content","data-no-activator":""},[He&&u(St,{key:"title"},{default:()=>{var G,$;return[($=(G=n.title)==null?void 0:G.call(n,{title:e.title}))!=null?$:e.title]}}),Re&&u(bt,{key:"subtitle"},{default:()=>{var G,$;return[($=(G=n.subtitle)==null?void 0:G.call(n,{subtitle:e.subtitle}))!=null?$:e.subtitle]}}),(de=n.default)==null?void 0:de.call(n,A.value)]),Ee&&u("div",{key:"append",class:"v-list-item__append"},[n.append&&u(D,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[n.append(A.value)]}),e.appendIcon&&u(ye,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&u(ge,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])]}}),[[Qe("ripple"),k.value&&e.ripple]])}),{}}}),pt=T()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...M()},setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:i}=Ve(x(e,"color"));return _(()=>{const a=!!(t.default||e.title);return u(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value],style:{textColorStyles:i}},{default:()=>{var s,o;return[a&&u("div",{class:"v-list-subheader__text"},[(o=(s=t.default)==null?void 0:s.call(t))!=null?o:e.title])]}})}),{}}}),Fe=T()({name:"VListChildren",props:{items:Array},setup(e,l){let{slots:t}=l;return Te(),()=>{var n,i,a;return(a=(n=t.default)==null?void 0:n.call(t))!=null?a:(i=e.items)==null?void 0:i.map(s=>{var d,p,I,k;let{children:o,props:f,type:S,raw:m}=s;if(S==="divider")return(p=(d=t.divider)==null?void 0:d.call(t,{props:f}))!=null?p:u(st,f,null);if(S==="subheader")return(k=(I=t.subheader)==null?void 0:I.call(t,{props:f}))!=null?k:u(pt,f,{default:t.subheader});const r={subtitle:t.subtitle?b=>{var h;return(h=t.subtitle)==null?void 0:h.call(t,{...b,item:m})}:void 0,prepend:t.prepend?b=>{var h;return(h=t.prepend)==null?void 0:h.call(t,{...b,item:m})}:void 0,append:t.append?b=>{var h;return(h=t.append)==null?void 0:h.call(t,{...b,item:m})}:void 0,default:t.default?b=>{var h;return(h=t.default)==null?void 0:h.call(t,{...b,item:m})}:void 0,title:t.title?b=>{var h;return(h=t.title)==null?void 0:h.call(t,{...b,item:m})}:void 0},[c,v]=ht(f);return o?u(Me,me({value:f==null?void 0:f.value},c),{activator:b=>{let{props:h}=b;return t.header?t.header({props:{...f,...h}}):u(he,me(f,h),r)},default:()=>u(Fe,{items:o},t)}):t.item?t.item(f):u(he,f,r)})}}}),kt=H({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Ge(e,l){var o;const t=L(l,e.itemTitle,l),n=e.returnObject?l:L(l,e.itemValue,t),i=L(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?q(l,["children"])[1]:l:void 0:L(l,e.itemProps),s={title:t,value:n,...a};return{title:String((o=s.title)!=null?o:""),value:s.value,props:s,children:Array.isArray(i)?$e(e,i):void 0,raw:l}}function $e(e,l){const t=[];for(const n of l)t.push(Ge(e,n));return t}function Tt(e){const l=y(()=>$e(e,e.items));function t(i){return i.map(a=>Ge(e,a))}function n(i){return i.map(a=>{let{props:s}=a;return s.value})}return{items:l,transformIn:t,transformOut:n}}function Ct(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Vt(e,l){const t=L(l,e.itemType,"item"),n=Ct(l)?l:L(l,e.itemTitle),i=L(l,e.itemValue,void 0),a=L(l,e.itemChildren),s=e.itemProps===!0?q(l,["children"])[1]:L(l,e.itemProps),o={title:n,value:i,...s};return{type:t,title:o.title,value:o.value,props:o,children:t==="item"&&a?je(e,a):void 0,raw:l}}function je(e,l){const t=[];for(const n of l)t.push(Vt(e,n));return t}function xt(e){return{items:y(()=>je(e,e.items))}}const Bt=T()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...vt({selectStrategy:"single-leaf",openStrategy:"list"}),...le(),...Ie(),...we(),...ie(),itemType:{type:String,default:"type"},...kt(),...se(),...M(),...K(),...Ae({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=xt(e),{themeClasses:i}=W(e),{backgroundColorClasses:a,backgroundColorStyles:s}=Ce(x(e,"bgColor")),{borderClasses:o}=re(e),{densityClasses:f}=Pe(e),{dimensionStyles:S}=Le(e),{elevationClasses:m}=oe(e),{roundedClasses:r}=ue(e),{open:c,select:v}=ft(e),d=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),p=x(e,"activeColor"),I=x(e,"color");Te(),Se({VListGroup:{activeColor:p,color:I},VListItem:{activeClass:x(e,"activeClass"),activeColor:p,color:I,density:x(e,"density"),disabled:x(e,"disabled"),lines:x(e,"lines"),nav:x(e,"nav"),variant:x(e,"variant")}});const k=V(!1),b=V();function h(C){k.value=!0}function J(C){k.value=!1}function X(C){var w;!k.value&&!(C.relatedTarget&&((w=b.value)==null?void 0:w.contains(C.relatedTarget)))&&P()}function Y(C){if(!!b.value){if(C.key==="ArrowDown")P("next");else if(C.key==="ArrowUp")P("prev");else if(C.key==="Home")P("first");else if(C.key==="End")P("last");else return;C.preventDefault()}}function P(C){var R,E,U;if(!b.value)return;const w=[...b.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(A=>!A.hasAttribute("disabled")),Z=w.indexOf(document.activeElement);if(!C)b.value.contains(document.activeElement)||(R=w[0])==null||R.focus();else if(C==="first")(E=w[0])==null||E.focus();else if(C==="last")(U=w.at(-1))==null||U.focus();else{let A,B=Z;const ee=C==="next"?1:-1;do B+=ee,A=w[B];while((!A||A.offsetParent==null)&&B<w.length&&B>=0);A?A.focus():P(C==="next"?"first":"last")}}return _(()=>u(e.tag,{ref:b,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},i.value,a.value,o.value,f.value,m.value,d.value,r.value],style:[s.value,S.value],role:"listbox","aria-activedescendant":void 0,onFocusin:h,onFocusout:J,onFocus:X,onKeydown:Y},{default:()=>[u(Fe,{items:n.value},t)]})),{open:c,select:v,focus:P}}});export{ne as V,at as a,Bt as b,he as c,St as d,kt as e,Lt as f,it as m,Tt as u};
