import{n as rh,a as te,D,w as Fe,E as oh,aB as ah,F as uh,G as lh,e as Kn,f as tt,h as $,g as Gn,d as Qn,aR as Tr,aS as Ha,aT as Ka,aU as Ga,B as Qa,aC as ch,C as Wa,aD as hh,R as dh,a5 as As,aV as fh,a1 as mh,A as dt,S as Xa,a3 as Ya,v as In,t as Fo,o as gh,z as ph,l as Qi,aW as Uo,q as yh,Y as vh,L as wh,az as Sh,M as Th,a8 as Eh,N as _h,aA as bh,P as Ch,aX as kh,aY as Ih,y as Ah,aZ as xh,a_ as qo,j as Rh,a$ as Dh,$ as Nh,b0 as Lh,b1 as Oh,b2 as Mh,b3 as Ph,b4 as Vh,b5 as Bo,a6 as Sn,b6 as Fh,b7 as Uh,b8 as qh,x as Qt,a4 as Bh,b9 as $h,H as zh,ba as Ja,bb as Za,r as Ls,bc as eu,bd as Be,be as tu,bf as nu,bg as su,bh as iu,bi as ru,bj as jh,bk as Hh,bl as On,an as Er}from"./index.c2641ef6.js";import{r as Wi,c as Kh,n as $o,a as Gh,Q as Qh}from"./headerTitle.bb2329f8.js";import{firebaseApp as Wh}from"./firebaseConnection.7f6c57da.js";const $e=1e3,Xh=["start","center","end","start-force","center-force","end-force"],ou=Array.prototype.filter,Yh=window.getComputedStyle(document.body).overflowAnchor===void 0?rh:function(t,e){t!==null&&(cancelAnimationFrame(t._qOverflowAnimationFrame),t._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(t===null)return;const n=t.children||[];ou.call(n,i=>i.dataset&&i.dataset.qVsAnchor!==void 0).forEach(i=>{delete i.dataset.qVsAnchor});const s=n[e];s&&s.dataset&&(s.dataset.qVsAnchor="")}))};function en(t,e){return t+e}function Oi(t,e,n,s,i,r,o,a){const u=t===window?document.scrollingElement||document.documentElement:t,l=i===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-o-a,scrollMaxSize:0,offsetStart:-o,offsetEnd:-a};if(i===!0?(t===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=u.scrollLeft,c.scrollViewSize+=u.clientWidth),c.scrollMaxSize=u.scrollWidth,r===!0&&(c.scrollStart=(Wi===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(t===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=u.scrollTop,c.scrollViewSize+=u.clientHeight),c.scrollMaxSize=u.scrollHeight),n!==null)for(let f=n.previousElementSibling;f!==null;f=f.previousElementSibling)f.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=f[l]);if(s!==null)for(let f=s.nextElementSibling;f!==null;f=f.nextElementSibling)f.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=f[l]);if(e!==t){const f=u.getBoundingClientRect(),m=e.getBoundingClientRect();i===!0?(c.offsetStart+=m.left-f.left,c.offsetEnd-=m.width):(c.offsetStart+=m.top-f.top,c.offsetEnd-=m.height),t!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function zo(t,e,n,s){e==="end"&&(e=(t===window?document.body:t)[n===!0?"scrollWidth":"scrollHeight"]),t===window?n===!0?(s===!0&&(e=(Wi===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-e),window.scrollTo(e,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,e):n===!0?(s===!0&&(e=(Wi===!0?t.scrollWidth-t.offsetWidth:0)-e),t.scrollLeft=e):t.scrollTop=e}function Tn(t,e,n,s){if(n>=s)return 0;const i=e.length,r=Math.floor(n/$e),o=Math.floor((s-1)/$e)+1;let a=t.slice(r,o).reduce(en,0);return n%$e!==0&&(a-=e.slice(r*$e,n).reduce(en,0)),s%$e!==0&&s!==i&&(a-=e.slice(s,o*$e).reduce(en,0)),a}const au={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Uy=Object.keys(au),Jh={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...au};function Zh({virtualScrollLength:t,getVirtualScrollTarget:e,getVirtualScrollEl:n,virtualScrollItemSizeComputed:s}){const i=Gn(),{props:r,emit:o,proxy:a}=i,{$q:u}=a;let l,c,f,m=[],d;const g=te(0),T=te(0),v=te({}),q=te(null),M=te(null),K=te(null),R=te({from:0,to:0}),j=D(()=>r.tableColspan!==void 0?r.tableColspan:100);s===void 0&&(s=D(()=>r.virtualScrollItemSize));const ie=D(()=>s.value+";"+r.virtualScrollHorizontal),ue=D(()=>ie.value+";"+r.virtualScrollSliceRatioBefore+";"+r.virtualScrollSliceRatioAfter);Fe(ue,()=>{He()}),Fe(ie,xe);function xe(){et(c,!0)}function Ve(E){et(E===void 0?c:E)}function je(E,x){const F=e();if(F==null||F.nodeType===8)return;const W=Oi(F,n(),q.value,M.value,r.virtualScrollHorizontal,u.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd);f!==W.scrollViewSize&&He(W.scrollViewSize),ut(F,W,Math.min(t.value-1,Math.max(0,parseInt(E,10)||0)),0,Xh.indexOf(x)>-1?x:c>-1&&E>c?"end":"start")}function Le(){const E=e();if(E==null||E.nodeType===8)return;const x=Oi(E,n(),q.value,M.value,r.virtualScrollHorizontal,u.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd),F=t.value-1,W=x.scrollMaxSize-x.offsetStart-x.offsetEnd-T.value;if(l===x.scrollStart)return;if(x.scrollMaxSize<=0){ut(E,x,0,0);return}f!==x.scrollViewSize&&He(x.scrollViewSize),Ze(R.value.from);const re=Math.floor(x.scrollMaxSize-Math.max(x.scrollViewSize,x.offsetEnd)-Math.min(d[F],x.scrollViewSize/2));if(re>0&&Math.ceil(x.scrollStart)>=re){ut(E,x,F,x.scrollMaxSize-x.offsetEnd-m.reduce(en,0));return}let B=0,O=x.scrollStart-x.offsetStart,fe=O;if(O<=W&&O+x.scrollViewSize>=g.value)O-=g.value,B=R.value.from,fe=O;else for(let w=0;O>=m[w]&&B<F;w++)O-=m[w],B+=$e;for(;O>0&&B<F;)O-=d[B],O>-x.scrollViewSize?(B++,fe=O):fe=d[B]+O;ut(E,x,B,fe)}function ut(E,x,F,W,re){const B=typeof re=="string"&&re.indexOf("-force")>-1,O=B===!0?re.replace("-force",""):re,fe=O!==void 0?O:"start";let w=Math.max(0,F-v.value[fe]),me=w+v.value.total;me>t.value&&(me=t.value,w=Math.max(0,me-v.value.total)),l=x.scrollStart;const ht=w!==R.value.from||me!==R.value.to;if(ht===!1&&O===void 0){ct(F);return}const{activeElement:Et}=document,Ge=K.value;ht===!0&&Ge!==null&&Ge!==Et&&Ge.contains(Et)===!0&&(Ge.addEventListener("focusout",lt),setTimeout(()=>{Ge!==null&&Ge.removeEventListener("focusout",lt)})),Yh(Ge,F-w);const ms=O!==void 0?d.slice(w,F).reduce(en,0):0;if(ht===!0){const _t=me>=R.value.from&&w<=R.value.to?R.value.to:me;R.value={from:w,to:_t},g.value=Tn(m,d,0,w),T.value=Tn(m,d,me,t.value),requestAnimationFrame(()=>{R.value.to!==me&&l===x.scrollStart&&(R.value={from:R.value.from,to:me},T.value=Tn(m,d,me,t.value))})}requestAnimationFrame(()=>{if(l!==x.scrollStart)return;ht===!0&&Ze(w);const _t=d.slice(w,F).reduce(en,0),Bt=_t+x.offsetStart+g.value,gs=Bt+d[F];let vn=Bt+W;if(O!==void 0){const Ai=_t-ms,Re=x.scrollStart+Ai;vn=B!==!0&&Re<Bt&&gs<Re+x.scrollViewSize?Re:O==="end"?gs-x.scrollViewSize:Bt-(O==="start"?0:Math.round((x.scrollViewSize-d[F])/2))}l=vn,zo(E,vn,r.virtualScrollHorizontal,u.lang.rtl),ct(F)})}function Ze(E){const x=K.value;if(x){const F=ou.call(x.children,w=>w.classList&&w.classList.contains("q-virtual-scroll--skip")===!1),W=F.length,re=r.virtualScrollHorizontal===!0?w=>w.getBoundingClientRect().width:w=>w.offsetHeight;let B=E,O,fe;for(let w=0;w<W;){for(O=re(F[w]),w++;w<W&&F[w].classList.contains("q-virtual-scroll--with-prev")===!0;)O+=re(F[w]),w++;fe=O-d[B],fe!==0&&(d[B]+=fe,m[Math.floor(B/$e)]+=fe),B++}}}function lt(){K.value!==null&&K.value!==void 0&&K.value.focus()}function et(E,x){const F=1*s.value;(x===!0||Array.isArray(d)===!1)&&(d=[]);const W=d.length;d.length=t.value;for(let B=t.value-1;B>=W;B--)d[B]=F;const re=Math.floor((t.value-1)/$e);m=[];for(let B=0;B<=re;B++){let O=0;const fe=Math.min((B+1)*$e,t.value);for(let w=B*$e;w<fe;w++)O+=d[w];m.push(O)}c=-1,l=void 0,g.value=Tn(m,d,0,R.value.from),T.value=Tn(m,d,R.value.to,t.value),E>=0?(Ze(R.value.from),tt(()=>{je(E)})):Ke()}function He(E){if(E===void 0&&typeof window!="undefined"){const O=e();O!=null&&O.nodeType!==8&&(E=Oi(O,n(),q.value,M.value,r.virtualScrollHorizontal,u.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd).scrollViewSize)}f=E;const x=parseFloat(r.virtualScrollSliceRatioBefore)||0,F=parseFloat(r.virtualScrollSliceRatioAfter)||0,W=1+x+F,re=E===void 0||E<=0?1:Math.ceil(E/s.value),B=Math.max(1,re,Math.ceil((r.virtualScrollSliceSize>0?r.virtualScrollSliceSize:10)/W));v.value={total:Math.ceil(B*W),start:Math.ceil(B*x),center:Math.ceil(B*(.5+x)),end:Math.ceil(B*(1+x)),view:re}}function qt(E,x){const F=r.virtualScrollHorizontal===!0?"width":"height",W={["--q-virtual-scroll-item-"+F]:s.value+"px"};return[E==="tbody"?$(E,{class:"q-virtual-scroll__padding",key:"before",ref:q},[$("tr",[$("td",{style:{[F]:`${g.value}px`,...W},colspan:j.value})])]):$(E,{class:"q-virtual-scroll__padding",key:"before",ref:q,style:{[F]:`${g.value}px`,...W}}),$(E,{class:"q-virtual-scroll__content",key:"content",ref:K,tabindex:-1},x.flat()),E==="tbody"?$(E,{class:"q-virtual-scroll__padding",key:"after",ref:M},[$("tr",[$("td",{style:{[F]:`${T.value}px`,...W},colspan:j.value})])]):$(E,{class:"q-virtual-scroll__padding",key:"after",ref:M,style:{[F]:`${T.value}px`,...W}})]}function ct(E){c!==E&&(r.onVirtualScroll!==void 0&&o("virtualScroll",{index:E,from:R.value.from,to:R.value.to-1,direction:E<c?"decrease":"increase",ref:a}),c=E)}He();const Ke=oh(Le,u.platform.is.ios===!0?120:35);ah(()=>{He()});let b=!1;return uh(()=>{b=!0}),lh(()=>{if(b!==!0)return;const E=e();l!==void 0&&E!==void 0&&E!==null&&E.nodeType!==8?zo(E,l,r.virtualScrollHorizontal,u.lang.rtl):je(c)}),Kn(()=>{Ke.cancel()}),Object.assign(a,{scrollTo:je,reset:xe,refresh:Ve}),{virtualScrollSliceRange:R,virtualScrollSliceSizeComputed:v,setVirtualScrollSize:He,onVirtualScrollEvt:Ke,localResetVirtualScroll:et,padVirtualScroll:qt,scrollTo:je,reset:xe,refresh:Ve}}var ed=Qn({name:"QField",inheritAttrs:!1,props:Tr,emits:Ha,setup(){return Ka(Ga())}});const td={xs:8,sm:10,md:14,lg:20,xl:24};var nd=Qn({name:"QChip",props:{...Qa,...ch,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(t,{slots:e,emit:n}){const{proxy:{$q:s}}=Gn(),i=Wa(t,s),r=hh(t,td),o=D(()=>t.selected===!0||t.icon!==void 0),a=D(()=>t.selected===!0?t.iconSelected||s.iconSet.chip.selected:t.icon),u=D(()=>t.iconRemove||s.iconSet.chip.remove),l=D(()=>t.disable===!1&&(t.clickable===!0||t.selected!==null)),c=D(()=>{const v=t.outline===!0&&t.color||t.textColor;return"q-chip row inline no-wrap items-center"+(t.outline===!1&&t.color!==void 0?` bg-${t.color}`:"")+(v?` text-${v} q-chip--colored`:"")+(t.disable===!0?" disabled":"")+(t.dense===!0?" q-chip--dense":"")+(t.outline===!0?" q-chip--outline":"")+(t.selected===!0?" q-chip--selected":"")+(l.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(t.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),f=D(()=>{const v=t.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:t.tabindex||0},q={...v,role:"button","aria-hidden":"false","aria-label":t.removeAriaLabel||s.lang.label.remove};return{chip:v,remove:q}});function m(v){v.keyCode===13&&d(v)}function d(v){t.disable||(n("update:selected",!t.selected),n("click",v))}function g(v){(v.keyCode===void 0||v.keyCode===13)&&(dt(v),t.disable===!1&&(n("update:modelValue",!1),n("remove")))}function T(){const v=[];l.value===!0&&v.push($("div",{class:"q-focus-helper"})),o.value===!0&&v.push($(As,{class:"q-chip__icon q-chip__icon--left",name:a.value}));const q=t.label!==void 0?[$("div",{class:"ellipsis"},[t.label])]:void 0;return v.push($("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},fh(e.default,q))),t.iconRight&&v.push($(As,{class:"q-chip__icon q-chip__icon--right",name:t.iconRight})),t.removable===!0&&v.push($(As,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:u.value,...f.value.remove,onClick:g,onKeyup:g})),v}return()=>{if(t.modelValue===!1)return;const v={class:c.value,style:r.value};return l.value===!0&&Object.assign(v,f.value.chip,{onClick:d,onKeyup:m}),dh("div",v,T(),"ripple",t.ripple!==!1&&t.disable!==!0,()=>[[mh,t.ripple]])}}}),sd=Qn({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(t,{slots:e}){const n=D(()=>parseInt(t.lines,10)),s=D(()=>"q-item__label"+(t.overline===!0?" q-item__label--overline text-overline":"")+(t.caption===!0?" q-item__label--caption text-caption":"")+(t.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=D(()=>t.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>$("div",{style:i.value,class:s.value},Xa(e.default))}});const id={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function rd({showing:t,avoidEmit:e,configureAnchorEl:n}){const{props:s,proxy:i,emit:r}=Gn(),o=te(null);let a;function u(d){return o.value===null?!1:d===void 0||d.touches===void 0||d.touches.length<=1}const l={};n===void 0&&(Object.assign(l,{hide(d){i.hide(d)},toggle(d){i.toggle(d),d.qAnchorHandled=!0},toggleKey(d){Ya(d,13)===!0&&l.toggle(d)},contextClick(d){i.hide(d),In(d),tt(()=>{i.show(d),d.qAnchorHandled=!0})},prevent:In,mobileTouch(d){if(l.mobileCleanup(d),u(d)!==!0)return;i.hide(d),o.value.classList.add("non-selectable");const g=d.target;Fo(l,"anchor",[[g,"touchmove","mobileCleanup","passive"],[g,"touchend","mobileCleanup","passive"],[g,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),a=setTimeout(()=>{i.show(d),d.qAnchorHandled=!0},300)},mobileCleanup(d){o.value.classList.remove("non-selectable"),clearTimeout(a),t.value===!0&&d!==void 0&&Kh()}}),n=function(d=s.contextMenu){if(s.noParentEvent===!0||o.value===null)return;let g;d===!0?i.$q.platform.is.mobile===!0?g=[[o.value,"touchstart","mobileTouch","passive"]]:g=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:g=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],Fo(l,"anchor",g)});function c(){ph(l,"anchor")}function f(d){for(o.value=d;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function m(){if(s.target===!1||s.target===""||i.$el.parentNode===null)o.value=null;else if(s.target===!0)f(i.$el.parentNode);else{let d=s.target;if(typeof s.target=="string")try{d=document.querySelector(s.target)}catch{d=void 0}d!=null?(o.value=d.$el||d,n()):(o.value=null,console.error(`Anchor: target "${s.target}" not found`))}}return Fe(()=>s.contextMenu,d=>{o.value!==null&&(c(),n(d))}),Fe(()=>s.target,()=>{o.value!==null&&c(),m()}),Fe(()=>s.noParentEvent,d=>{o.value!==null&&(d===!0?c():n())}),gh(()=>{m(),e!==!0&&s.modelValue===!0&&o.value===null&&r("update:modelValue",!1)}),Kn(()=>{clearTimeout(a),c()}),{anchorEl:o,canShow:u,anchorEvents:l}}function od(t,e){const n=te(null);let s;function i(a,u){const l=`${u!==void 0?"add":"remove"}EventListener`,c=u!==void 0?u:s;a!==window&&a[l]("scroll",c,Qi.passive),window[l]("scroll",c,Qi.passive),s=u}function r(){n.value!==null&&(i(n.value),n.value=null)}const o=Fe(()=>t.noParentEvent,()=>{n.value!==null&&(r(),e())});return Kn(o),{localScrollTarget:n,unconfigureScrollTarget:r,changeScrollEvent:i}}let uu;const{notPassiveCapture:Os}=Qi,xt=[];function Ms(t){clearTimeout(uu);const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let n=Uo.length-1;for(;n>=0;){const s=Uo[n].$;if(s.type.name!=="QDialog")break;if(s.props.seamless!==!0)return;n--}for(let s=xt.length-1;s>=0;s--){const i=xt[s];if((i.anchorEl.value===null||i.anchorEl.value.contains(e)===!1)&&(e===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(e)===!1))t.qClickOutside=!0,i.onClickOutside(t);else return}}function ad(t){xt.push(t),xt.length===1&&(document.addEventListener("mousedown",Ms,Os),document.addEventListener("touchstart",Ms,Os))}function jo(t){const e=xt.findIndex(n=>n===t);e>-1&&(xt.splice(e,1),xt.length===0&&(clearTimeout(uu),document.removeEventListener("mousedown",Ms,Os),document.removeEventListener("touchstart",Ms,Os)))}let Ho,Ko;function Go(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ud(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const Xi={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{Xi[`${t}#ltr`]=t,Xi[`${t}#rtl`]=t});function Qo(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:Xi[`${n[1]}#${e===!0?"rtl":"ltr"}`]}}function ld(t,e){let{top:n,left:s,right:i,bottom:r,width:o,height:a}=t.getBoundingClientRect();return e!==void 0&&(n-=e[1],s-=e[0],r+=e[1],i+=e[0],o+=e[0],a+=e[1]),{top:n,left:s,right:i,bottom:r,width:o,height:a,middle:s+(i-s)/2,center:n+(r-n)/2}}function cd(t){return{top:0,center:t.offsetHeight/2,bottom:t.offsetHeight,left:0,middle:t.offsetWidth/2,right:t.offsetWidth}}function hd(t){if(yh.is.ios===!0&&window.visualViewport!==void 0){const a=document.body.style,{offsetLeft:u,offsetTop:l}=window.visualViewport;u!==Ho&&(a.setProperty("--q-pe-left",u+"px"),Ho=u),l!==Ko&&(a.setProperty("--q-pe-top",l+"px"),Ko=l)}let e;const{scrollLeft:n,scrollTop:s}=t.el;if(t.absoluteOffset===void 0)e=ld(t.anchorEl,t.cover===!0?[0,0]:t.offset);else{const{top:a,left:u}=t.anchorEl.getBoundingClientRect(),l=a+t.absoluteOffset.top,c=u+t.absoluteOffset.left;e={top:l,left:c,width:1,height:1,right:c+1,center:l,middle:c,bottom:l+1}}let i={maxHeight:t.maxHeight,maxWidth:t.maxWidth,visibility:"visible"};(t.fit===!0||t.cover===!0)&&(i.minWidth=e.width+"px",t.cover===!0&&(i.minHeight=e.height+"px")),Object.assign(t.el.style,i);const r=cd(t.el),o={top:e[t.anchorOrigin.vertical]-r[t.selfOrigin.vertical],left:e[t.anchorOrigin.horizontal]-r[t.selfOrigin.horizontal]};dd(o,e,r,t.anchorOrigin,t.selfOrigin),i={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(i.maxHeight=o.maxHeight+"px",e.height>o.maxHeight&&(i.minHeight=i.maxHeight)),o.maxWidth!==void 0&&(i.maxWidth=o.maxWidth+"px",e.width>o.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(t.el.style,i),t.el.scrollTop!==s&&(t.el.scrollTop=s),t.el.scrollLeft!==n&&(t.el.scrollLeft=n)}function dd(t,e,n,s,i){const r=n.bottom,o=n.right,a=vh(),u=window.innerHeight-a,l=document.body.clientWidth;if(t.top<0||t.top+r>u)if(i.vertical==="center")t.top=e[s.vertical]>u/2?Math.max(0,u-r):0,t.maxHeight=Math.min(r,u);else if(e[s.vertical]>u/2){const c=Math.min(u,s.vertical==="center"?e.center:s.vertical===i.vertical?e.bottom:e.top);t.maxHeight=Math.min(r,c),t.top=Math.max(0,c-r)}else t.top=Math.max(0,s.vertical==="center"?e.center:s.vertical===i.vertical?e.top:e.bottom),t.maxHeight=Math.min(r,u-t.top);if(t.left<0||t.left+o>l)if(t.maxWidth=Math.min(o,l),i.horizontal==="middle")t.left=e[s.horizontal]>l/2?Math.max(0,l-o):0;else if(e[s.horizontal]>l/2){const c=Math.min(l,s.horizontal==="middle"?e.middle:s.horizontal===i.horizontal?e.right:e.left);t.maxWidth=Math.min(o,c),t.left=Math.max(0,c-t.maxWidth)}else t.left=Math.max(0,s.horizontal==="middle"?e.middle:s.horizontal===i.horizontal?e.left:e.right),t.maxWidth=Math.min(o,l-t.left)}var fd=Qn({name:"QMenu",inheritAttrs:!1,props:{...id,...wh,...Qa,...Sh,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Go},self:{type:String,validator:Go},offset:{type:Array,validator:ud},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Th,"click","escapeKey"],setup(t,{slots:e,emit:n,attrs:s}){let i=null,r,o,a;const u=Gn(),{proxy:l}=u,{$q:c}=l,f=te(null),m=te(!1),d=D(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),g=Wa(t,c),{registerTick:T,removeTick:v}=Eh(),{registerTimeout:q}=_h(),{transitionProps:M,transitionStyle:K}=bh(t),{localScrollTarget:R,changeScrollEvent:j,unconfigureScrollTarget:ie}=od(t,F),{anchorEl:ue,canShow:xe}=rd({showing:m}),{hide:Ve}=Ch({showing:m,canShow:xe,handleShow:b,handleHide:E,hideOnRouteChange:d,processOnMount:!0}),{showPortal:je,hidePortal:Le,renderPortal:ut}=kh(u,f,fe),Ze={anchorEl:ue,innerRef:f,onClickOutside(w){if(t.persistent!==!0&&m.value===!0)return Ve(w),(w.type==="touchstart"||w.target.classList.contains("q-dialog__backdrop"))&&dt(w),!0}},lt=D(()=>Qo(t.anchor||(t.cover===!0?"center middle":"bottom start"),c.lang.rtl)),et=D(()=>t.cover===!0?lt.value:Qo(t.self||"top start",c.lang.rtl)),He=D(()=>(t.square===!0?" q-menu--square":"")+(g.value===!0?" q-menu--dark q-dark":"")),qt=D(()=>t.autoClose===!0?{onClick:W}:{}),ct=D(()=>m.value===!0&&t.persistent!==!0);Fe(ct,w=>{w===!0?(Oh(B),ad(Ze)):(qo(B),jo(Ze))});function Ke(){Lh(()=>{let w=f.value;w&&w.contains(document.activeElement)!==!0&&(w=w.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||w.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||w.querySelector("[autofocus], [data-autofocus]")||w,w.focus({preventScroll:!0}))})}function b(w){if(i=t.noRefocus===!1?document.activeElement:null,Ih(re),je(),F(),r=void 0,w!==void 0&&(t.touchPosition||t.contextMenu)){const me=Ah(w);if(me.left!==void 0){const{top:ht,left:Et}=ue.value.getBoundingClientRect();r={left:me.left-Et,top:me.top-ht}}}o===void 0&&(o=Fe(()=>c.screen.width+"|"+c.screen.height+"|"+t.self+"|"+t.anchor+"|"+c.lang.rtl,O)),t.noFocus!==!0&&document.activeElement.blur(),T(()=>{O(),t.noFocus!==!0&&Ke()}),q(()=>{c.platform.is.ios===!0&&(a=t.autoClose,f.value.click()),O(),je(!0),n("show",w)},t.transitionDuration)}function E(w){v(),Le(),x(!0),i!==null&&(w===void 0||w.qClickOutside!==!0)&&(((w&&w.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),q(()=>{Le(!0),n("hide",w)},t.transitionDuration)}function x(w){r=void 0,o!==void 0&&(o(),o=void 0),(w===!0||m.value===!0)&&(xh(re),ie(),jo(Ze),qo(B)),w!==!0&&(i=null)}function F(){(ue.value!==null||t.scrollTarget!==void 0)&&(R.value=Rh(ue.value,t.scrollTarget),j(R.value,O))}function W(w){a!==!0?(Dh(l,w),n("click",w)):a=!1}function re(w){ct.value===!0&&t.noFocus!==!0&&Mh(f.value,w.target)!==!0&&Ke()}function B(w){n("escapeKey"),Ve(w)}function O(){const w=f.value;w===null||ue.value===null||hd({el:w,offset:t.offset,anchorEl:ue.value,anchorOrigin:lt.value,selfOrigin:et.value,absoluteOffset:r,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function fe(){return $(Nh,M.value,()=>m.value===!0?$("div",{role:"menu",...s,ref:f,tabindex:-1,class:["q-menu q-position-engine scroll"+He.value,s.class],style:[s.style,K.value],...qt.value},Xa(e.default)):null)}return Kn(x),Object.assign(l,{focus:Ke,updatePosition:O}),ut}});const Wo=t=>["add","add-unique","toggle"].includes(t),md=".*+?^${}()|[]\\",gd=Object.keys(Tr);var qy=Qn({name:"QSelect",inheritAttrs:!1,props:{...Jh,...Ph,...Tr,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Wo},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:t=>["default","menu","dialog"].includes(t),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...Ha,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(t,{slots:e,emit:n}){const{proxy:s}=Gn(),{$q:i}=s,r=te(!1),o=te(!1),a=te(-1),u=te(""),l=te(!1),c=te(!1);let f,m,d,g,T,v,q,M,K;const R=te(null),j=te(null),ie=te(null),ue=te(null),xe=te(null),Ve=Vh(t),je=qh(Lo),Le=D(()=>Array.isArray(t.options)?t.options.length:0),ut=D(()=>t.virtualScrollItemSize===void 0?t.optionsDense===!0?24:48:t.virtualScrollItemSize),{virtualScrollSliceRange:Ze,virtualScrollSliceSizeComputed:lt,localResetVirtualScroll:et,padVirtualScroll:He,onVirtualScrollEvt:qt,scrollTo:ct,setVirtualScrollSize:Ke}=Zh({virtualScrollLength:Le,getVirtualScrollTarget:Kc,getVirtualScrollEl:Do,virtualScrollItemSizeComputed:ut}),b=Ga(),E=D(()=>{const h=t.mapOptions===!0&&t.multiple!==!0,_=t.modelValue!==void 0&&(t.modelValue!==null||h===!0)?t.multiple===!0&&Array.isArray(t.modelValue)?t.modelValue:[t.modelValue]:[];if(t.mapOptions===!0&&Array.isArray(t.options)===!0){const S=t.mapOptions===!0&&m!==void 0?m:[],P=_.map(X=>Hc(X,S));return t.modelValue===null&&h===!0?P.filter(X=>X!==null):P}return _}),x=D(()=>{const h={};return gd.forEach(_=>{const S=t[_];S!==void 0&&(h[_]=S)}),h}),F=D(()=>t.optionsDark===null?b.isDark.value:t.optionsDark),W=D(()=>Bo(E.value)),re=D(()=>{let h="q-field__input q-placeholder col";return t.hideSelected===!0||E.value.length===0?[h,t.inputClass]:(h+=" q-field__input--padding",t.inputClass===void 0?h:[h,t.inputClass])}),B=D(()=>(t.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(t.popupContentClass?" "+t.popupContentClass:"")),O=D(()=>Le.value===0),fe=D(()=>E.value.map(h=>Oe.value(h)).join(", ")),w=D(()=>t.displayValue!==void 0?t.displayValue:fe.value),me=D(()=>t.optionsHtml===!0?()=>!0:h=>h!=null&&h.html===!0),ht=D(()=>t.displayValueHtml===!0||t.displayValue===void 0&&(t.optionsHtml===!0||E.value.some(me.value))),Et=D(()=>b.focused.value===!0?t.tabindex:-1),Ge=D(()=>{const h={tabindex:t.tabindex,role:"combobox","aria-label":t.label,"aria-readonly":t.readonly===!0?"true":"false","aria-autocomplete":t.useInput===!0?"list":"none","aria-expanded":r.value===!0?"true":"false","aria-controls":`${b.targetUid.value}_lb`};return a.value>=0&&(h["aria-activedescendant"]=`${b.targetUid.value}_${a.value}`),h}),ms=D(()=>({id:`${b.targetUid.value}_lb`,role:"listbox","aria-multiselectable":t.multiple===!0?"true":"false"})),_t=D(()=>E.value.map((h,_)=>({index:_,opt:h,html:me.value(h),selected:!0,removeAtIndex:jc,toggleOption:bt,tabindex:Et.value}))),Bt=D(()=>{if(Le.value===0)return[];const{from:h,to:_}=Ze.value;return t.options.slice(h,_).map((S,P)=>{const X=$t.value(S)===!0,Q=h+P,se={clickable:!0,active:!1,activeClass:Ai.value,manualFocus:!0,focused:!1,disable:X,tabindex:-1,dense:t.optionsDense,dark:F.value,role:"option",id:`${b.targetUid.value}_${Q}`,onClick:()=>{bt(S)}};return X!==!0&&(Di(S)===!0&&(se.active=!0),a.value===Q&&(se.focused=!0),se["aria-selected"]=se.active===!0?"true":"false",i.platform.is.desktop===!0&&(se.onMousemove=()=>{r.value===!0&&zt(Q)})),{index:Q,opt:S,html:me.value(S),label:Oe.value(S),selected:se.active,focused:se.focused,toggleOption:bt,setOptionIndex:zt,itemProps:se}})}),gs=D(()=>t.dropdownIcon!==void 0?t.dropdownIcon:i.iconSet.arrow.dropdown),vn=D(()=>t.optionsCover===!1&&t.outlined!==!0&&t.standout!==!0&&t.borderless!==!0&&t.rounded!==!0),Ai=D(()=>t.optionsSelectedClass!==void 0?t.optionsSelectedClass:t.color!==void 0?`text-${t.color}`:""),Re=D(()=>Ri(t.optionValue,"value")),Oe=D(()=>Ri(t.optionLabel,"label")),$t=D(()=>Ri(t.optionDisable,"disable")),ps=D(()=>E.value.map(h=>Re.value(h))),zc=D(()=>{const h={onInput:Lo,onChange:je,onKeydown:Ro,onKeyup:Ao,onKeypress:xo,onFocus:ko,onClick(_){d===!0&&Qt(_)}};return h.onCompositionstart=h.onCompositionupdate=h.onCompositionend=je,h});Fe(E,h=>{m=h,t.useInput===!0&&t.fillInput===!0&&t.multiple!==!0&&b.innerLoading.value!==!0&&(o.value!==!0&&r.value!==!0||W.value!==!0)&&(g!==!0&&Gt(),(o.value===!0||r.value===!0)&&jt(""))},{immediate:!0}),Fe(()=>t.fillInput,Gt),Fe(r,Ni),Fe(Le,ih);function bo(h){return t.emitValue===!0?Re.value(h):h}function xi(h){if(h>-1&&h<E.value.length)if(t.multiple===!0){const _=t.modelValue.slice();n("remove",{index:h,value:_.splice(h,1)[0]}),n("update:modelValue",_)}else n("update:modelValue",null)}function jc(h){xi(h),b.focus()}function Co(h,_){const S=bo(h);if(t.multiple!==!0){t.fillInput===!0&&wn(Oe.value(h),!0,!0),n("update:modelValue",S);return}if(E.value.length===0){n("add",{index:0,value:S}),n("update:modelValue",t.multiple===!0?[S]:S);return}if(_===!0&&Di(h)===!0||t.maxValues!==void 0&&t.modelValue.length>=t.maxValues)return;const P=t.modelValue.slice();n("add",{index:P.length,value:S}),P.push(S),n("update:modelValue",P)}function bt(h,_){if(b.editable.value!==!0||h===void 0||$t.value(h)===!0)return;const S=Re.value(h);if(t.multiple!==!0){_!==!0&&(wn(t.fillInput===!0?Oe.value(h):"",!0,!0),Ct()),j.value!==null&&j.value.focus(),(E.value.length===0||Sn(Re.value(E.value[0]),S)!==!0)&&n("update:modelValue",t.emitValue===!0?S:h);return}if((d!==!0||l.value===!0)&&b.focus(),ko(),E.value.length===0){const Q=t.emitValue===!0?S:h;n("add",{index:0,value:Q}),n("update:modelValue",t.multiple===!0?[Q]:Q);return}const P=t.modelValue.slice(),X=ps.value.findIndex(Q=>Sn(Q,S));if(X>-1)n("remove",{index:X,value:P.splice(X,1)[0]});else{if(t.maxValues!==void 0&&P.length>=t.maxValues)return;const Q=t.emitValue===!0?S:h;n("add",{index:P.length,value:Q}),P.push(Q)}n("update:modelValue",P)}function zt(h){if(i.platform.is.desktop!==!0)return;const _=h>-1&&h<Le.value?h:-1;a.value!==_&&(a.value=_)}function ys(h=1,_){if(r.value===!0){let S=a.value;do S=$o(S+h,-1,Le.value-1);while(S!==-1&&S!==a.value&&$t.value(t.options[S])===!0);a.value!==S&&(zt(S),ct(S),_!==!0&&t.useInput===!0&&t.fillInput===!0&&vs(S>=0?Oe.value(t.options[S]):v))}}function Hc(h,_){const S=P=>Sn(Re.value(P),h);return t.options.find(S)||_.find(S)||h}function Ri(h,_){const S=h!==void 0?h:_;return typeof S=="function"?S:P=>P!==null&&typeof P=="object"&&S in P?P[S]:P}function Di(h){const _=Re.value(h);return ps.value.find(S=>Sn(S,_))!==void 0}function ko(h){t.useInput===!0&&j.value!==null&&(h===void 0||j.value===h.target&&h.target.value===fe.value)&&j.value.select()}function Io(h){Ya(h,27)===!0&&r.value===!0&&(Qt(h),Ct(),Gt()),n("keyup",h)}function Ao(h){const{value:_}=h.target;if(h.keyCode!==void 0){Io(h);return}if(h.target.value="",clearTimeout(f),Gt(),typeof _=="string"&&_.length>0){const S=_.toLocaleLowerCase(),P=Q=>{const se=t.options.find(ke=>Q.value(ke).toLocaleLowerCase()===S);return se===void 0?!1:(E.value.indexOf(se)===-1?bt(se):Ct(),!0)},X=Q=>{P(Re)!==!0&&(P(Oe)===!0||Q===!0||jt(_,!0,()=>X(!0)))};X()}else b.clearValue(h)}function xo(h){n("keypress",h)}function Ro(h){if(n("keydown",h),Bh(h)===!0)return;const _=u.value.length>0&&(t.newValueMode!==void 0||t.onNewValue!==void 0),S=h.shiftKey!==!0&&t.multiple!==!0&&(a.value>-1||_===!0);if(h.keyCode===27){In(h);return}if(h.keyCode===9&&S===!1){Ht();return}if(h.target===void 0||h.target.id!==b.targetUid.value)return;if(h.keyCode===40&&b.innerLoading.value!==!0&&r.value===!1){dt(h),Kt();return}if(h.keyCode===8&&t.hideSelected!==!0&&u.value.length===0){t.multiple===!0&&Array.isArray(t.modelValue)===!0?xi(t.modelValue.length-1):t.multiple!==!0&&t.modelValue!==null&&n("update:modelValue",null);return}(h.keyCode===35||h.keyCode===36)&&(typeof u.value!="string"||u.value.length===0)&&(dt(h),a.value=-1,ys(h.keyCode===36?1:-1,t.multiple)),(h.keyCode===33||h.keyCode===34)&&lt.value!==void 0&&(dt(h),a.value=Math.max(-1,Math.min(Le.value,a.value+(h.keyCode===33?-1:1)*lt.value.view)),ys(h.keyCode===33?1:-1,t.multiple)),(h.keyCode===38||h.keyCode===40)&&(dt(h),ys(h.keyCode===38?-1:1,t.multiple));const P=Le.value;if((M===void 0||K<Date.now())&&(M=""),P>0&&t.useInput!==!0&&h.key!==void 0&&h.key.length===1&&h.altKey===!1&&h.ctrlKey===!1&&h.metaKey===!1&&(h.keyCode!==32||M.length>0)){r.value!==!0&&Kt(h);const X=h.key.toLocaleLowerCase(),Q=M.length===1&&M[0]===X;K=Date.now()+1500,Q===!1&&(dt(h),M+=X);const se=new RegExp("^"+M.split("").map(Li=>md.indexOf(Li)>-1?"\\"+Li:Li).join(".*"),"i");let ke=a.value;if(Q===!0||ke<0||se.test(Oe.value(t.options[ke]))!==!0)do ke=$o(ke+1,-1,P-1);while(ke!==a.value&&($t.value(t.options[ke])===!0||se.test(Oe.value(t.options[ke]))!==!0));a.value!==ke&&tt(()=>{zt(ke),ct(ke),ke>=0&&t.useInput===!0&&t.fillInput===!0&&vs(Oe.value(t.options[ke]))});return}if(!(h.keyCode!==13&&(h.keyCode!==32||t.useInput===!0||M!=="")&&(h.keyCode!==9||S===!1))){if(h.keyCode!==9&&dt(h),a.value>-1&&a.value<P){bt(t.options[a.value]);return}if(_===!0){const X=(Q,se)=>{if(se){if(Wo(se)!==!0)return}else se=t.newValueMode;if(Q==null)return;wn("",t.multiple!==!0,!0),(se==="toggle"?bt:Co)(Q,se==="add-unique"),t.multiple!==!0&&(j.value!==null&&j.value.focus(),Ct())};if(t.onNewValue!==void 0?n("newValue",u.value,X):X(u.value),t.multiple!==!0)return}r.value===!0?Ht():b.innerLoading.value!==!0&&Kt()}}function Do(){return d===!0?xe.value:ie.value!==null&&ie.value.contentEl!==null?ie.value.contentEl:void 0}function Kc(){return Do()}function Gc(){return t.hideSelected===!0?[]:e["selected-item"]!==void 0?_t.value.map(h=>e["selected-item"](h)).slice():e.selected!==void 0?[].concat(e.selected()):t.useChips===!0?_t.value.map((h,_)=>$(nd,{key:"option-"+_,removable:b.editable.value===!0&&$t.value(h.opt)!==!0,dense:!0,textColor:t.color,tabindex:Et.value,onRemove(){h.removeAtIndex(_)}},()=>$("span",{class:"ellipsis",[h.html===!0?"innerHTML":"textContent"]:Oe.value(h.opt)}))):[$("span",{[ht.value===!0?"innerHTML":"textContent"]:w.value})]}function No(){if(O.value===!0)return e["no-option"]!==void 0?e["no-option"]({inputValue:u.value}):void 0;const h=e.option!==void 0?e.option:S=>$(Qh,{key:S.index,...S.itemProps},()=>$(Gh,()=>$(sd,()=>$("span",{[S.html===!0?"innerHTML":"textContent"]:S.label}))));let _=He("div",Bt.value.map(h));return e["before-options"]!==void 0&&(_=e["before-options"]().concat(_)),zh(e["after-options"],_)}function Qc(h,_){const S=_===!0?{...Ge.value,...b.splitAttrs.attributes.value}:void 0,P={ref:_===!0?j:void 0,key:"i_t",class:re.value,style:t.inputStyle,value:u.value!==void 0?u.value:"",type:"search",...S,id:_===!0?b.targetUid.value:void 0,maxlength:t.maxlength,autocomplete:t.autocomplete,"data-autofocus":h===!0||t.autofocus===!0||void 0,disabled:t.disable===!0,readonly:t.readonly===!0,...zc.value};return h!==!0&&d===!0&&(Array.isArray(P.class)===!0?P.class=[...P.class,"no-pointer-events"]:P.class+=" no-pointer-events"),$("input",P)}function Lo(h){clearTimeout(f),!(h&&h.target&&h.target.qComposing===!0)&&(vs(h.target.value||""),g=!0,v=u.value,b.focused.value!==!0&&(d!==!0||l.value===!0)&&b.focus(),t.onFilter!==void 0&&(f=setTimeout(()=>{jt(u.value)},t.inputDebounce)))}function vs(h){u.value!==h&&(u.value=h,n("inputValue",h))}function wn(h,_,S){g=S!==!0,t.useInput===!0&&(vs(h),(_===!0||S!==!0)&&(v=h),_!==!0&&jt(h))}function jt(h,_,S){if(t.onFilter===void 0||_!==!0&&b.focused.value!==!0)return;b.innerLoading.value===!0?n("filterAbort"):(b.innerLoading.value=!0,c.value=!0),h!==""&&t.multiple!==!0&&E.value.length>0&&g!==!0&&h===Oe.value(E.value[0])&&(h="");const P=setTimeout(()=>{r.value===!0&&(r.value=!1)},10);clearTimeout(T),T=P,n("filter",h,(X,Q)=>{(_===!0||b.focused.value===!0)&&T===P&&(clearTimeout(T),typeof X=="function"&&X(),c.value=!1,tt(()=>{b.innerLoading.value=!1,b.editable.value===!0&&(_===!0?r.value===!0&&Ct():r.value===!0?Ni(!0):r.value=!0),typeof Q=="function"&&tt(()=>{Q(s)}),typeof S=="function"&&tt(()=>{S(s)})}))},()=>{b.focused.value===!0&&T===P&&(clearTimeout(T),b.innerLoading.value=!1,c.value=!1),r.value===!0&&(r.value=!1)})}function Wc(){return $(fd,{ref:ie,class:B.value,style:t.popupContentStyle,modelValue:r.value,fit:t.menuShrink!==!0,cover:t.optionsCover===!0&&O.value!==!0&&t.useInput!==!0,anchor:t.menuAnchor,self:t.menuSelf,offset:t.menuOffset,dark:F.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:vn.value,transitionShow:t.transitionShow,transitionHide:t.transitionHide,transitionDuration:t.transitionDuration,separateClosePopup:!0,...ms.value,onScrollPassive:qt,onBeforeShow:Mo,onBeforeHide:Xc,onShow:Yc},No)}function Xc(h){Po(h),Ht()}function Yc(){Ke()}function Jc(h){Qt(h),j.value!==null&&j.value.focus(),l.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Zc(h){Qt(h),tt(()=>{l.value=!1})}function eh(){const h=[$(ed,{class:`col-auto ${b.fieldClass.value}`,...x.value,for:b.targetUid.value,dark:F.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:u.value.length>0,...b.splitAttrs.listeners.value,onFocus:Jc,onBlur:Zc},{...e,rawControl:()=>b.getControl(!0),before:void 0,after:void 0})];return r.value===!0&&h.push($("div",{ref:xe,class:B.value+" scroll",style:t.popupContentStyle,...ms.value,onClick:In,onScrollPassive:qt},No())),$($h,{ref:ue,modelValue:o.value,position:t.useInput===!0?"top":void 0,transitionShow:q,transitionHide:t.transitionHide,transitionDuration:t.transitionDuration,onBeforeShow:Mo,onBeforeHide:th,onHide:nh,onShow:sh},()=>$("div",{class:"q-select__dialog"+(F.value===!0?" q-select__dialog--dark q-dark":"")+(l.value===!0?" q-select__dialog--focused":"")},h))}function th(h){Po(h),ue.value!==null&&ue.value.__updateRefocusTarget(b.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),b.focused.value=!1}function nh(h){Ct(),b.focused.value===!1&&n("blur",h),Gt()}function sh(){const h=document.activeElement;(h===null||h.id!==b.targetUid.value)&&j.value!==null&&j.value!==h&&j.value.focus(),Ke()}function Ht(){o.value!==!0&&(a.value=-1,r.value===!0&&(r.value=!1),b.focused.value===!1&&(clearTimeout(T),T=void 0,b.innerLoading.value===!0&&(n("filterAbort"),b.innerLoading.value=!1,c.value=!1)))}function Kt(h){b.editable.value===!0&&(d===!0?(b.onControlFocusin(h),o.value=!0,tt(()=>{b.focus()})):b.focus(),t.onFilter!==void 0?jt(u.value):(O.value!==!0||e["no-option"]!==void 0)&&(r.value=!0))}function Ct(){o.value=!1,Ht()}function Gt(){t.useInput===!0&&wn(t.multiple!==!0&&t.fillInput===!0&&E.value.length>0&&Oe.value(E.value[0])||"",!0,!0)}function Ni(h){let _=-1;if(h===!0){if(E.value.length>0){const S=Re.value(E.value[0]);_=t.options.findIndex(P=>Sn(Re.value(P),S))}et(_)}zt(_)}function ih(h,_){r.value===!0&&b.innerLoading.value===!1&&(et(-1,!0),tt(()=>{r.value===!0&&b.innerLoading.value===!1&&(h>_?et():Ni(!0))}))}function Oo(){o.value===!1&&ie.value!==null&&ie.value.updatePosition()}function Mo(h){h!==void 0&&Qt(h),n("popupShow",h),b.hasPopupOpen=!0,b.onControlFocusin(h)}function Po(h){h!==void 0&&Qt(h),n("popupHide",h),b.hasPopupOpen=!1,b.onControlFocusout(h)}function Vo(){d=i.platform.is.mobile!==!0&&t.behavior!=="dialog"?!1:t.behavior!=="menu"&&(t.useInput===!0?e["no-option"]!==void 0||t.onFilter!==void 0||O.value===!1:!0),q=i.platform.is.ios===!0&&d===!0&&t.useInput===!0?"fade":t.transitionShow}return Fh(Vo),Uh(Oo),Vo(),Kn(()=>{clearTimeout(f)}),Object.assign(s,{showPopup:Kt,hidePopup:Ct,removeAtIndex:xi,add:Co,toggleOption:bt,getOptionIndex:()=>a.value,setOptionIndex:zt,moveOptionSelection:ys,filter:jt,updateMenuPosition:Oo,updateInputValue:wn,isOptionSelected:Di,getEmittingOptionValue:bo,isOptionDisabled:(...h)=>$t.value.apply(null,h)===!0,getOptionValue:(...h)=>Re.value.apply(null,h),getOptionLabel:(...h)=>Oe.value.apply(null,h)}),Object.assign(b,{innerValue:E,fieldClass:D(()=>`q-select q-field--auto-height q-select--with${t.useInput!==!0?"out":""}-input q-select--with${t.useChips!==!0?"out":""}-chips q-select--${t.multiple===!0?"multiple":"single"}`),inputRef:R,targetRef:j,hasValue:W,showPopup:Kt,floatingLabel:D(()=>t.hideSelected!==!0&&W.value===!0||typeof u.value=="number"||u.value.length>0||Bo(t.displayValue)),getControlChild:()=>{if(b.editable.value!==!1&&(o.value===!0||O.value!==!0||e["no-option"]!==void 0))return d===!0?eh():Wc();b.hasPopupOpen===!0&&(b.hasPopupOpen=!1)},controlEvents:{onFocusin(h){b.onControlFocusin(h)},onFocusout(h){b.onControlFocusout(h,()=>{Gt(),Ht()})},onClick(h){if(In(h),d!==!0&&r.value===!0){Ht(),j.value!==null&&j.value.focus();return}Kt(h)}},getControl:h=>{const _=Gc(),S=h===!0||o.value!==!0||d!==!0;if(t.useInput===!0)_.push(Qc(h,S));else if(b.editable.value===!0){const X=S===!0?Ge.value:void 0;_.push($("input",{ref:S===!0?j:void 0,key:"d_t",class:"q-select__focus-target",id:S===!0?b.targetUid.value:void 0,value:w.value,readonly:!0,"data-autofocus":h===!0||t.autofocus===!0||void 0,...X,onKeydown:Ro,onKeyup:Io,onKeypress:xo})),S===!0&&typeof t.autocomplete=="string"&&t.autocomplete.length>0&&_.push($("input",{class:"q-select__autocomplete-input",autocomplete:t.autocomplete,tabindex:-1,onKeyup:Ao}))}if(Ve.value!==void 0&&t.disable!==!0&&ps.value.length>0){const X=ps.value.map(Q=>$("option",{value:Q,selected:!0}));_.push($("select",{class:"hidden",name:Ve.value,multiple:t.multiple},X))}const P=t.useInput===!0||S!==!0?void 0:b.splitAttrs.attributes.value;return $("div",{class:"q-field__native row items-center",...P},_)},getInnerAppend:()=>t.loading!==!0&&c.value!==!0&&t.hideDropdownIcon!==!0?[$(As,{class:"q-select__dropdown-icon"+(r.value===!0?" rotate-180":""),name:gs.value})]:null}),Ka(b)}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="firebasestorage.googleapis.com",cu="storageBucket",pd=2*60*1e3,yd=10*60*1e3,vd=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends ru{constructor(e,n,s=0){super(Mi(e),`Firebase Storage: ${n} (${Mi(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Mi(t){return"storage/"+t}function _r(){const t="An unknown error occurred, please check the error payload for server response.";return new ee("unknown",t)}function wd(t){return new ee("object-not-found","Object '"+t+"' does not exist.")}function Sd(t){return new ee("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Td(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ee("unauthenticated",t)}function Ed(){return new ee("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function _d(t){return new ee("unauthorized","User does not have permission to access '"+t+"'.")}function hu(){return new ee("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function du(){return new ee("canceled","User canceled the upload/download.")}function bd(t){return new ee("invalid-url","Invalid URL '"+t+"'.")}function Cd(t){return new ee("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function kd(){return new ee("no-default-bucket","No default bucket found. Did you set the '"+cu+"' property when initializing the app?")}function fu(){return new ee("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Id(){return new ee("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function Ad(){return new ee("no-download-url","The given file does not have any download URLs.")}function xd(t){return new ee("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yi(t){return new ee("invalid-argument",t)}function mu(){return new ee("app-deleted","The Firebase app was deleted.")}function Rd(t){return new ee("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function An(t,e){return new ee("invalid-format","String does not match format '"+t+"': "+e)}function En(t){throw new ee("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Me.makeFromUrl(e,n)}catch{return new Me(e,"")}if(s.path==="")return s;throw Cd(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(R){R.path_=decodeURIComponent(R.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",d=new RegExp(`^https?://${f}/${c}/b/${i}/o${m}`,"i"),g={bucket:1,path:3},T=n===lu?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",q=new RegExp(`^https?://${T}/${i}/${v}`,"i"),K=[{regex:a,indices:u,postModify:r},{regex:d,indices:g,postModify:l},{regex:q,indices:{bucket:1,path:2},postModify:l}];for(let R=0;R<K.length;R++){const j=K[R],ie=j.regex.exec(e);if(ie){const ue=ie[j.indices.bucket];let xe=ie[j.indices.path];xe||(xe=""),s=new Me(ue,xe),j.postModify(s);break}}if(s==null)throw bd(e);return s}}class Dd{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function u(){return a===2}let l=!1;function c(...v){l||(l=!0,e.apply(null,v))}function f(v){i=setTimeout(()=>{i=null,t(d,u())},v)}function m(){r&&clearTimeout(r)}function d(v,...q){if(l){m();return}if(v){m(),c.call(null,v,...q);return}if(u()||o){m(),c.call(null,v,...q);return}s<64&&(s*=2);let K;a===1?(a=2,K=0):K=(s+Math.random())*1e3,f(K)}let g=!1;function T(v){g||(g=!0,m(),!l&&(i!==null?(v||(a=2),clearTimeout(i),f(0)):v||(a=1)))}return f(0),r=setTimeout(()=>{o=!0,T(!0)},n),T}function Ld(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){return t!==void 0}function Md(t){return typeof t=="function"}function Pd(t){return typeof t=="object"&&!Array.isArray(t)}function Js(t){return typeof t=="string"||t instanceof String}function Xo(t){return br()&&t instanceof Blob}function br(){return typeof Blob!="undefined"&&!jh()}function Yo(t,e,n,s){if(s<e)throw Yi(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Yi(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function gu(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Rt||(Rt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,s,i,r,o,a,u,l,c,f,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ws(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Rt.NO_ERROR,u=r.getStatus();if((!a||pu(u,this.additionalRetryCodes_))&&this.retry){const c=r.getErrorCode()===Rt.ABORT;s(!1,new ws(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;s(!0,new ws(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Od(u)?r(u):r()}catch(u){o(u)}else if(a!==null){const u=_r();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?mu():du();o(u)}else{const u=hu();o(u)}};this.canceled_?n(!1,new ws(!1,null,!0)):this.backoffId_=Nd(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ld(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ws{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Fd(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ud(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function qd(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Bd(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $d(t,e,n,s,i,r,o=!0){const a=gu(t.urlParams),u=t.url+a,l=Object.assign({},t.headers);return qd(l,e),Fd(l,n),Ud(l,r),Bd(l,s),new Vd(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function jd(...t){const e=zd();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(br())return new Blob(t);throw new ee("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Hd(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t){if(typeof atob=="undefined")throw xd("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pi{constructor(e,n){this.data=e,this.contentType=n||null}}function Gd(t,e){switch(t){case We.RAW:return new Pi(yu(e));case We.BASE64:case We.BASE64URL:return new Pi(vu(t,e));case We.DATA_URL:return new Pi(Wd(e),Xd(e))}throw _r()}function yu(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Qd(t){let e;try{e=decodeURIComponent(t)}catch{throw An(We.DATA_URL,"Malformed data URL.")}return yu(e)}function vu(t,e){switch(t){case We.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw An(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case We.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw An(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Kd(e)}catch(i){throw i.message.includes("polyfill")?i:An(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class wu{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw An(We.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Yd(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Wd(t){const e=new wu(t);return e.base64?vu(We.BASE64,e.rest):Qd(e.rest)}function Xd(t){return new wu(t).contentType}function Yd(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){let s=0,i="";Xo(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Xo(this.data_)){const s=this.data_,i=Hd(s,e,n);return i===null?null:new ft(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new ft(s,!0)}}static getBlob(...e){if(br()){const n=e.map(s=>s instanceof ft?s.data_:s);return new ft(jd.apply(null,n))}else{const n=e.map(o=>Js(o)?Gd(We.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new ft(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){let e;try{e=JSON.parse(t)}catch{return null}return Pd(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Zd(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Tu(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t,e){return e}class Ie{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||ef}}let Ss=null;function tf(t){return!Js(t)||t.length<2?t:Tu(t)}function Eu(){if(Ss)return Ss;const t=[];t.push(new Ie("bucket")),t.push(new Ie("generation")),t.push(new Ie("metageneration")),t.push(new Ie("name","fullPath",!0));function e(r,o){return tf(o)}const n=new Ie("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Ie("size");return i.xform=s,t.push(i),t.push(new Ie("timeCreated")),t.push(new Ie("updated")),t.push(new Ie("md5Hash",null,!0)),t.push(new Ie("cacheControl",null,!0)),t.push(new Ie("contentDisposition",null,!0)),t.push(new Ie("contentEncoding",null,!0)),t.push(new Ie("contentLanguage",null,!0)),t.push(new Ie("contentType",null,!0)),t.push(new Ie("metadata","customMetadata",!0)),Ss=t,Ss}function nf(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new Me(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function sf(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return nf(s,t),s}function _u(t,e,n){const s=Su(e);return s===null?null:sf(t,s,n)}function rf(t,e,n,s){const i=Su(e);if(i===null||!Js(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(l=>{const c=t.bucket,f=t.fullPath,m="/b/"+o(c)+"/o/"+o(f),d=Wn(m,n,s),g=gu({alt:"media",token:l});return d+g})[0]}function bu(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class dn{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){if(!t)throw _r()}function Cr(t,e){function n(s,i){const r=_u(t,i,e);return st(r!==null),r}return n}function of(t,e){function n(s,i){const r=_u(t,i,e);return st(r!==null),rf(r,i,t.host,t._protocol)}return n}function Xn(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Ed():i=Td():n.getStatus()===402?i=Sd(t.bucket):n.getStatus()===403?i=_d(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Cu(t){const e=Xn(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=wd(t.path)),r.serverResponse=i.serverResponse,r}return n}function af(t,e,n){const s=e.fullServerUrl(),i=Wn(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new dn(i,r,Cr(t,n),o);return a.errorHandler=Cu(e),a}function uf(t,e,n){const s=e.fullServerUrl(),i=Wn(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new dn(i,r,of(t,n),o);return a.errorHandler=Cu(e),a}function lf(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ku(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=lf(null,e)),s}function cf(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let K="";for(let R=0;R<2;R++)K=K+Math.random().toString().slice(2);return K}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=ku(e,s,i),c=bu(l,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,m=`\r
--`+u+"--",d=ft.getBlob(f,s,m);if(d===null)throw fu();const g={name:l.fullPath},T=Wn(r,t.host,t._protocol),v="POST",q=t.maxUploadRetryTime,M=new dn(T,v,Cr(t,n),q);return M.urlParams=g,M.headers=o,M.body=d.uploadData(),M.errorHandler=Xn(e),M}class Ps{constructor(e,n,s,i){this.current=e,this.total=n,this.finalized=!!s,this.metadata=i||null}}function kr(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{st(!1)}return st(!!n&&(e||["active"]).indexOf(n)!==-1),n}function hf(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o=ku(e,s,i),a={name:o.fullPath},u=Wn(r,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=bu(o,n),m=t.maxUploadRetryTime;function d(T){kr(T);let v;try{v=T.getResponseHeader("X-Goog-Upload-URL")}catch{st(!1)}return st(Js(v)),v}const g=new dn(u,l,d,m);return g.urlParams=a,g.headers=c,g.body=f,g.errorHandler=Xn(e),g}function df(t,e,n,s){const i={"X-Goog-Upload-Command":"query"};function r(l){const c=kr(l,["active","final"]);let f=null;try{f=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{st(!1)}f||st(!1);const m=Number(f);return st(!isNaN(m)),new Ps(m,s.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new dn(n,o,r,a);return u.headers=i,u.errorHandler=Xn(e),u}const Jo=256*1024;function ff(t,e,n,s,i,r,o,a){const u=new Ps(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=s.size()),s.size()!==u.total)throw Id();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const f=u.current,m=f+c;let d="";c===0?d="finalize":l===c?d="upload, finalize":d="upload";const g={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${u.current}`},T=s.slice(f,m);if(T===null)throw fu();function v(R,j){const ie=kr(R,["active","final"]),ue=u.current+c,xe=s.size();let Ve;return ie==="final"?Ve=Cr(e,r)(R,j):Ve=null,new Ps(ue,xe,ie==="final",Ve)}const q="POST",M=e.maxUploadRetryTime,K=new dn(n,q,v,M);return K.headers=g,K.body=T.uploadData(),K.progressCallback=a||null,K.errorHandler=Xn(t),K}const De={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Vi(t){switch(t){case"running":case"pausing":case"canceling":return De.RUNNING;case"paused":return De.PAUSED;case"success":return De.SUCCESS;case"canceled":return De.CANCELED;case"error":return De.ERROR;default:return De.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,s){if(Md(e)||n!=null||s!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class gf{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Rt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Rt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw En("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw En("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw En("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw En("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw En("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pf extends gf{initXhr(){this.xhr_.responseType="text"}}function Xt(){return new pf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Eu(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(pu(i.status,[]))if(r)i=hu();else{this.sleepTime=Math.max(this.sleepTime*2,vd),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=hf(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Xt,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const i=df(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,Xt,n,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Jo*this._chunkMultiplier,n=new Ps(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=ff(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Xt,i,r,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Jo*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=af(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Xt,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=cf(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Xt,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=du(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Vi(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,i){const r=new mf(n||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Vi(this._state)){case De.SUCCESS:Wt(this._resolve.bind(null,this.snapshot))();break;case De.CANCELED:case De.ERROR:const n=this._reject;Wt(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Vi(this._state)){case De.RUNNING:case De.PAUSED:e.next&&Wt(e.next.bind(e,this.snapshot))();break;case De.SUCCESS:e.complete&&Wt(e.complete.bind(e))();break;case De.CANCELED:case De.ERROR:e.error&&Wt(e.error.bind(e,this._error))();break;default:e.error&&Wt(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n){this._service=e,n instanceof Me?this._location=n:this._location=Me.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Lt(e,n)}get root(){const e=new Me(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tu(this._location.path)}get storage(){return this._service}get parent(){const e=Jd(this._location.path);if(e===null)return null;const n=new Me(this._location.bucket,e);return new Lt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Rd(e)}}function vf(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new yf(t,new ft(e),n)}function wf(t){t._throwIfRoot("getDownloadURL");const e=uf(t.storage,t._location,Eu());return t.storage.makeRequestWithTokens(e,Xt).then(n=>{if(n===null)throw Ad();return n})}function Sf(t,e){const n=Zd(t._location.path,e),s=new Me(t._location.bucket,n);return new Lt(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t){return/^[A-Za-z]+:\/\//.test(t)}function Ef(t,e){return new Lt(t,e)}function Iu(t,e){if(t instanceof Ir){const n=t;if(n._bucket==null)throw kd();const s=new Lt(n,n._bucket);return e!=null?Iu(s,e):s}else return e!==void 0?Sf(t,e):t}function _f(t,e){if(e&&Tf(e)){if(t instanceof Ir)return Ef(t,e);throw Yi("To use ref(service, url), the first argument must be a Storage instance.")}else return Iu(t,e)}function Zo(t,e){const n=e==null?void 0:e[cu];return n==null?null:Me.makeFromBucketSpec(n,t)}function bf(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:iu(i,t.app.options.projectId))}class Ir{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=lu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pd,this._maxUploadRetryTime=yd,this._requests=new Set,i!=null?this._bucket=Me.makeFromBucketSpec(i,this._host):this._bucket=Zo(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Me.makeFromBucketSpec(this._url,e):this._bucket=Zo(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lt(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Dd(mu());{const o=$d(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const ea="@firebase/storage",ta="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="storage";function By(t,e,n){return t=Be(t),vf(t,e,n)}function $y(t){return t=Be(t),wf(t)}function zy(t,e){return t=Be(t),_f(t,e)}function jy(t=su(),e){t=Be(t);const s=tu(t,Au).getImmediate({identifier:e}),i=nu("storage");return i&&Cf(s,...i),s}function Cf(t,e,n,s={}){bf(t,e,n,s)}function kf(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ir(n,s,i,e,eu)}function If(){Ja(new Za(Au,kf,"PUBLIC").setMultipleInstances(!0)),Ls(ea,ta,""),Ls(ea,ta,"esm2017")}If();var Af=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},C,Ar=Ar||{},L=Af||self;function Vs(){}function Zs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Yn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xf(t){return Object.prototype.hasOwnProperty.call(t,Fi)&&t[Fi]||(t[Fi]=++Rf)}var Fi="closure_uid_"+(1e9*Math.random()>>>0),Rf=0;function Df(t,e,n){return t.call.apply(t.bind,arguments)}function Nf(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function _e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_e=Df:_e=Nf,_e.apply(null,arguments)}function Ts(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function we(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function wt(){this.s=this.s,this.o=this.o}var Lf=0;wt.prototype.s=!1;wt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Lf!=0)&&xf(this)};wt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function na(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Zs(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Of=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",Vs,e),L.removeEventListener("test",Vs,e)}catch{}return t}();function Fs(t){return/^[\s\xa0]*$/.test(t)}var sa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ui(t,e){return t<e?-1:t>e?1:0}function ei(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function Qe(t){return ei().indexOf(t)!=-1}function Rr(t){return Rr[" "](t),t}Rr[" "]=Vs;function Mf(t){var e=Ff;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Pf=Qe("Opera"),sn=Qe("Trident")||Qe("MSIE"),Ru=Qe("Edge"),Ji=Ru||sn,Du=Qe("Gecko")&&!(ei().toLowerCase().indexOf("webkit")!=-1&&!Qe("Edge"))&&!(Qe("Trident")||Qe("MSIE"))&&!Qe("Edge"),Vf=ei().toLowerCase().indexOf("webkit")!=-1&&!Qe("Edge");function Nu(){var t=L.document;return t?t.documentMode:void 0}var Us;e:{var qi="",Bi=function(){var t=ei();if(Du)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ru)return/Edge\/([\d\.]+)/.exec(t);if(sn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Vf)return/WebKit\/(\S+)/.exec(t);if(Pf)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bi&&(qi=Bi?Bi[1]:""),sn){var $i=Nu();if($i!=null&&$i>parseFloat(qi)){Us=String($i);break e}}Us=qi}var Ff={};function Uf(){return Mf(function(){let t=0;const e=sa(String(Us)).split("."),n=sa("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ui(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ui(i[2].length==0,r[2].length==0)||Ui(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Zi;if(L.document&&sn){var ia=Nu();Zi=ia||parseInt(Us,10)||void 0}else Zi=void 0;var qf=Zi;function Mn(t,e){if(be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Du){e:{try{Rr(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Bf[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mn.X.h.call(this)}}we(Mn,be);var Bf={2:"touch",3:"pen",4:"mouse"};Mn.prototype.h=function(){Mn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Jn="closure_listenable_"+(1e6*Math.random()|0),$f=0;function zf(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++$f,this.ba=this.ea=!1}function ti(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Dr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Lu(t){const e={};for(const n in t)e[n]=t[n];return e}const ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ou(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ra.length;r++)n=ra[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ni(t){this.src=t,this.g={},this.h=0}ni.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=tr(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new zf(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function er(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=xu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ti(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tr(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Nr="closure_lm_"+(1e6*Math.random()|0),zi={};function Mu(t,e,n,s,i){if(s&&s.once)return Vu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Mu(t,e[r],n,s,i);return null}return n=Mr(n),t&&t[Jn]?t.N(e,n,Yn(s)?!!s.capture:!!s,i):Pu(t,e,n,!1,s,i)}function Pu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Yn(i)?!!i.capture:!!i,a=Or(t);if(a||(t[Nr]=a=new ni(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=jf(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Of||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Uu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jf(){function t(n){return e.call(t.src,t.listener,n)}const e=Hf;return t}function Vu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Vu(t,e[r],n,s,i);return null}return n=Mr(n),t&&t[Jn]?t.O(e,n,Yn(s)?!!s.capture:!!s,i):Pu(t,e,n,!0,s,i)}function Fu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Fu(t,e[r],n,s,i);else s=Yn(s)?!!s.capture:!!s,n=Mr(n),t&&t[Jn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=tr(r,n,s,i),-1<n&&(ti(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Or(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tr(e,n,s,i)),(n=-1<t?e[t]:null)&&Lr(n))}function Lr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Jn])er(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Uu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Or(e))?(er(n,t),n.h==0&&(n.src=null,e[Nr]=null)):ti(t)}}}function Uu(t){return t in zi?zi[t]:zi[t]="on"+t}function Hf(t,e){if(t.ba)t=!0;else{e=new Mn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Lr(t),t=n.call(s,e)}return t}function Or(t){return t=t[Nr],t instanceof ni?t:null}var ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mr(t){return typeof t=="function"?t:(t[ji]||(t[ji]=function(e){return t.handleEvent(e)}),t[ji])}function pe(){wt.call(this),this.i=new ni(this),this.P=this,this.I=null}we(pe,wt);pe.prototype[Jn]=!0;pe.prototype.removeEventListener=function(t,e,n,s){Fu(this,t,e,n,s)};function ve(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new be(e,t);else if(e instanceof be)e.target=e.target||t;else{var i=e;e=new be(s,t),Ou(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Es(o,s,!0,e)&&i}if(o=e.g=t,i=Es(o,s,!0,e)&&i,i=Es(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Es(o,s,!1,e)&&i}pe.prototype.M=function(){if(pe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ti(n[s]);delete t.g[e],t.h--}}this.I=null};pe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};pe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Es(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&er(t.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Pr=L.JSON.stringify;function Kf(){var t=$u;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Gf{constructor(){this.h=this.g=null}add(e,n){const s=qu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var qu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Qf,t=>t.reset());class Qf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Wf(t){L.setTimeout(()=>{throw t},0)}function Bu(t,e){nr||Xf(),sr||(nr(),sr=!0),$u.add(t,e)}var nr;function Xf(){var t=L.Promise.resolve(void 0);nr=function(){t.then(Yf)}}var sr=!1,$u=new Gf;function Yf(){for(var t;t=Kf();){try{t.h.call(t.g)}catch(n){Wf(n)}var e=qu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}sr=!1}function si(t,e){pe.call(this),this.h=t||1,this.g=e||L,this.j=_e(this.lb,this),this.l=Date.now()}we(si,pe);C=si.prototype;C.ca=!1;C.R=null;C.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ve(this,"tick"),this.ca&&(Vr(this),this.start()))}};C.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}C.M=function(){si.X.M.call(this),Vr(this),delete this.g};function Fr(t,e,n){if(typeof t=="function")n&&(t=_e(t,n));else if(t&&typeof t.handleEvent=="function")t=_e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function zu(t){t.g=Fr(()=>{t.g=null,t.i&&(t.i=!1,zu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Jf extends wt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zu(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(t){wt.call(this),this.h=t,this.g={}}we(Pn,wt);var oa=[];function ju(t,e,n,s){Array.isArray(n)||(n&&(oa[0]=n.toString()),n=oa);for(var i=0;i<n.length;i++){var r=Mu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Hu(t){Dr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lr(e)},t),t.g={}}Pn.prototype.M=function(){Pn.X.M.call(this),Hu(this)};Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ii(){this.g=!0}ii.prototype.Aa=function(){this.g=!1};function Zf(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function em(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Zt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nm(t,n)+(s?" "+s:"")})}function tm(t,e){t.info(function(){return"TIMEOUT: "+e})}ii.prototype.info=function(){};function nm(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pr(n)}catch{return e}}var Vt={},aa=null;function ri(){return aa=aa||new pe}Vt.Pa="serverreachability";function Ku(t){be.call(this,Vt.Pa,t)}we(Ku,be);function Vn(t){const e=ri();ve(e,new Ku(e))}Vt.STAT_EVENT="statevent";function Gu(t,e){be.call(this,Vt.STAT_EVENT,t),this.stat=e}we(Gu,be);function Ae(t){const e=ri();ve(e,new Gu(e,t))}Vt.Qa="timingevent";function Qu(t,e){be.call(this,Vt.Qa,t),this.size=e}we(Qu,be);function Zn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var oi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ur(){}Ur.prototype.h=null;function ua(t){return t.h||(t.h=t.i())}function Xu(){}var es={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function qr(){be.call(this,"d")}we(qr,be);function Br(){be.call(this,"c")}we(Br,be);var ir;function ai(){}we(ai,Ur);ai.prototype.g=function(){return new XMLHttpRequest};ai.prototype.i=function(){return{}};ir=new ai;function ts(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Pn(this),this.O=sm,t=Ji?125:void 0,this.T=new si(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Yu}function Yu(){this.i=null,this.g="",this.h=!1}var sm=45e3,rr={},qs={};C=ts.prototype;C.setTimeout=function(t){this.O=t};function or(t,e,n){t.K=1,t.v=li(it(e)),t.s=n,t.P=!0,Ju(t,null)}function Ju(t,e){t.F=Date.now(),ns(t),t.A=it(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ol(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Yu,t.g=Il(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Jf(_e(t.La,t,t.g),t.N)),ju(t.S,t.g,"readystatechange",t.ib),e=t.H?Lu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Vn(),Zf(t.j,t.u,t.A,t.m,t.U,t.s)}C.ib=function(t){t=t.target;const e=this.L;e&&nt(t)==3?e.l():this.La(t)};C.La=function(t){try{if(t==this.g)e:{const c=nt(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>c)&&(c!=3||Ji||this.g&&(this.h.h||this.g.fa()||da(this.g)))){this.I||c!=4||e==7||(e==8||0>=f?Vn(3):Vn(2)),ui(this);var n=this.g.aa();this.Y=n;t:if(Zu(this)){var s=da(this.g);t="";var i=s.length,r=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){kt(this),xn(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,em(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fs(a)){var l=a;break t}}l=null}if(n=l)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ar(this,n);else{this.i=!1,this.o=3,Ae(12),kt(this),xn(this);break e}}this.P?(el(this,c,o),Ji&&this.i&&c==3&&(ju(this.S,this.T,"tick",this.hb),this.T.start())):(Zt(this.j,this.m,o,null),ar(this,o)),c==4&&kt(this),this.i&&!this.I&&(c==4?_l(this.l,this):(this.i=!1,ns(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ae(12)):(this.o=0,Ae(13)),kt(this),xn(this)}}}catch{}finally{}};function Zu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function el(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=im(t,n),i==qs){e==4&&(t.o=4,Ae(14),s=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==rr){t.o=4,Ae(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Zt(t.j,t.m,i,null),ar(t,i);Zu(t)&&i!=qs&&i!=rr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ae(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qr(e),e.K=!0,Ae(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),kt(t),xn(t))}C.hb=function(){if(this.g){var t=nt(this.g),e=this.g.fa();this.C<e.length&&(ui(this),el(this,t,e),this.i&&t!=4&&ns(this))}};function im(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?qs:(n=Number(e.substring(n,s)),isNaN(n)?rr:(s+=1,s+n>e.length?qs:(e=e.substr(s,n),t.C=s+n,e)))}C.cancel=function(){this.I=!0,kt(this)};function ns(t){t.V=Date.now()+t.O,tl(t,t.O)}function tl(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Zn(_e(t.gb,t),e)}function ui(t){t.B&&(L.clearTimeout(t.B),t.B=null)}C.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(tm(this.j,this.A),this.K!=2&&(Vn(),Ae(17)),kt(this),this.o=2,xn(this)):tl(this,this.V-t)};function xn(t){t.l.G==0||t.I||_l(t.l,t)}function kt(t){ui(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Vr(t.T),Hu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ar(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ur(n.h,t))){if(!t.J&&ur(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)zs(n),di(n);else break e;Gr(n),Ae(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Zn(_e(n.cb,n),6e3));if(1>=ll(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else It(n,11)}else if((t.J||n.g==t)&&zs(n),!Fs(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const m=l[5];m!=null&&typeof m=="number"&&0<m&&(s=1.5*m,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&($r(r,r.h),r.h=null))}if(s.D){const T=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,J(s.F,s.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=kl(s,s.H?s.ka:null,s.V),o.J){cl(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(ui(a),ns(a)),s.g=o}else Tl(s);0<n.i.length&&fi(n)}else l[0]!="stop"&&l[0]!="close"||It(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?It(n,7):Kr(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Vn(4)}catch{}}function rm(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zs(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function om(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Zs(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function nl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zs(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=om(t),s=rm(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var sl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function am(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Dt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Dt){this.h=e!==void 0?e:t.h,Bs(this,t.j),this.s=t.s,this.g=t.g,$s(this,t.m),this.l=t.l,e=t.i;var n=new Fn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),la(this,n),this.o=t.o}else t&&(n=String(t).match(sl))?(this.h=!!e,Bs(this,n[1]||"",!0),this.s=bn(n[2]||""),this.g=bn(n[3]||"",!0),$s(this,n[4]),this.l=bn(n[5]||"",!0),la(this,n[6]||"",!0),this.o=bn(n[7]||"")):(this.h=!!e,this.i=new Fn(null,this.h))}Dt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cn(e,ca,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Cn(e,ca,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Cn(n,n.charAt(0)=="/"?cm:lm,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cn(n,dm)),t.join("")};function it(t){return new Dt(t)}function Bs(t,e,n){t.j=n?bn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $s(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function la(t,e,n){e instanceof Fn?(t.i=e,fm(t.i,t.h)):(n||(e=Cn(e,hm)),t.i=new Fn(e,t.h))}function J(t,e,n){t.i.set(e,n)}function li(t){return J(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,um),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function um(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ca=/[#\/\?@]/g,lm=/[#\?:]/g,cm=/[#\?]/g,hm=/[#\?@]/g,dm=/#/g;function Fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function St(t){t.g||(t.g=new Map,t.h=0,t.i&&am(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=Fn.prototype;C.add=function(t,e){St(this),this.i=null,t=fn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function il(t,e){St(t),e=fn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function rl(t,e){return St(t),e=fn(t,e),t.g.has(e)}C.forEach=function(t,e){St(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};C.oa=function(){St(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};C.W=function(t){St(this);let e=[];if(typeof t=="string")rl(this,t)&&(e=e.concat(this.g.get(fn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};C.set=function(t,e){return St(this),this.i=null,t=fn(this,t),rl(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ol(t,e,n){il(t,e),0<n.length&&(t.i=null,t.g.set(fn(t,e),xr(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function fn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fm(t,e){e&&!t.j&&(St(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(il(this,s),ol(this,i,n))},t)),t.j=e}var mm=class{constructor(t,e){this.h=t,this.g=e}};function al(t){this.l=t||gm,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ga&&L.g.Ga()&&L.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gm=10;function ul(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ll(t){return t.h?1:t.g?t.g.size:0}function ur(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function $r(t,e){t.g?t.g.add(e):t.h=e}function cl(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}al.prototype.cancel=function(){if(this.i=hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hl(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return xr(t.i)}function zr(){}zr.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};zr.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function pm(){this.g=new zr}function ym(t,e,n){const s=n||"";try{nl(t,function(i,r){let o=i;Yn(i)&&(o=Pr(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function vm(t,e){const n=new ii;if(L.Image){const s=new Image;s.onload=Ts(_s,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ts(_s,n,s,"TestLoadImage: error",!1,e),s.onabort=Ts(_s,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ts(_s,n,s,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function _s(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function ss(t){this.l=t.ac||null,this.j=t.jb||!1}we(ss,Ur);ss.prototype.g=function(){return new ci(this.l,this.j)};ss.prototype.i=function(t){return function(){return t}}({});function ci(t,e){pe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=jr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}we(ci,pe);var jr=0;C=ci.prototype;C.open=function(t,e){if(this.readyState!=jr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=jr};C.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof L.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dl(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function dl(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}C.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?is(this):Un(this),this.readyState==3&&dl(this)}};C.Va=function(t){this.g&&(this.response=this.responseText=t,is(this))};C.Ua=function(t){this.g&&(this.response=t,is(this))};C.ga=function(){this.g&&is(this)};function is(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wm=L.JSON.parse;function ne(t){pe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fl,this.K=this.L=!1}we(ne,pe);var fl="",Sm=/^https?$/i,Tm=["POST","PUT"];C=ne.prototype;C.Ka=function(t){this.L=t};C.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ir.g(),this.C=this.u?ua(this.u):ua(ir),this.g.onreadystatechange=_e(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){ha(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=L.FormData&&t instanceof L.FormData,!(0<=xu(Tm,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pl(this),0<this.B&&((this.K=Em(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_e(this.qa,this)):this.A=Fr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ha(this,r)}};function Em(t){return sn&&Uf()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}C.qa=function(){typeof Ar!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ve(this,"timeout"),this.abort(8))};function ha(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ml(t),hi(t)}function ml(t){t.D||(t.D=!0,ve(t,"complete"),ve(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ve(this,"complete"),ve(this,"abort"),hi(this))};C.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hi(this,!0)),ne.X.M.call(this)};C.Ha=function(){this.s||(this.F||this.v||this.l?gl(this):this.fb())};C.fb=function(){gl(this)};function gl(t){if(t.h&&typeof Ar!="undefined"&&(!t.C[1]||nt(t)!=4||t.aa()!=2)){if(t.v&&nt(t)==4)Fr(t.Ha,0,t);else if(ve(t,"readystatechange"),nt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(sl)[1]||null;if(!i&&L.self&&L.self.location){var r=L.self.location.protocol;i=r.substr(0,r.length-1)}s=!Sm.test(i?i.toLowerCase():"")}n=s}if(n)ve(t,"complete"),ve(t,"success");else{t.m=6;try{var o=2<nt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ml(t)}}finally{hi(t)}}}}function hi(t,e){if(t.g){pl(t);const n=t.g,s=t.C[0]?Vs:null;t.g=null,t.C=null,e||ve(t,"ready");try{n.onreadystatechange=s}catch{}}}function pl(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function nt(t){return t.g?t.g.readyState:0}C.aa=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}};C.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wm(e)}};function da(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fl:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}C.Ea=function(){return this.m};C.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yl(t){let e="";return Dr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Hr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=yl(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):J(t,e,n))}function _n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vl(t){this.Ca=0,this.i=[],this.j=new ii,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=_n("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=_n("baseRetryDelayMs",5e3,t),this.bb=_n("retryDelaySeedMs",1e4,t),this.$a=_n("forwardChannelMaxRetries",2,t),this.ta=_n("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new al(t&&t.concurrentRequestLimit),this.Fa=new pm,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}C=vl.prototype;C.ma=8;C.G=1;function Kr(t){if(wl(t),t.G==3){var e=t.U++,n=it(t.F);J(n,"SID",t.I),J(n,"RID",e),J(n,"TYPE","terminate"),rs(t,n),e=new ts(t,t.j,e,void 0),e.K=2,e.v=li(it(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=Il(e.l,null),e.g.da(e.v)),e.F=Date.now(),ns(e)}Cl(t)}function di(t){t.g&&(Qr(t),t.g.cancel(),t.g=null)}function wl(t){di(t),t.u&&(L.clearTimeout(t.u),t.u=null),zs(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function fi(t){ul(t.h)||t.m||(t.m=!0,Bu(t.Ja,t),t.C=0)}function _m(t,e){return ll(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Zn(_e(t.Ja,t,e),bl(t,t.C)),t.C++,!0)}C.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ts(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Lu(r),Ou(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Sl(this,i,e),n=it(this.F),J(n,"RID",t),J(n,"CVER",22),this.D&&J(n,"X-HTTP-Session-Id",this.D),rs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(yl(r)))+"&"+e:this.o&&Hr(n,this.o,r)),$r(this.h,i),this.Ya&&J(n,"TYPE","init"),this.O?(J(n,"$req",e),J(n,"SID","null"),i.Z=!0,or(i,n,null)):or(i,n,e),this.G=2}}else this.G==3&&(t?fa(this,t):this.i.length==0||ul(this.h)||fa(this))};function fa(t,e){var n;e?n=e.m:n=t.U++;const s=it(t.F);J(s,"SID",t.I),J(s,"RID",n),J(s,"AID",t.T),rs(t,s),t.o&&t.s&&Hr(s,t.o,t.s),n=new ts(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Sl(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),$r(t.h,n),or(n,s,e)}function rs(t,e){t.ia&&Dr(t.ia,function(n,s){J(e,s,n)}),t.l&&nl({},function(n,s){J(e,s,n)})}function Sl(t,e,n){n=Math.min(t.i.length,n);var s=t.l?_e(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=r,0>l)r=Math.max(0,i[u].h-100),a=!1;else try{ym(c,o,"req"+l+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Tl(t){t.g||t.u||(t.Z=1,Bu(t.Ia,t),t.A=0)}function Gr(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Zn(_e(t.Ia,t),bl(t,t.A)),t.A++,!0)}C.Ia=function(){if(this.u=null,El(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Zn(_e(this.eb,this),t)}};C.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ae(10),di(this),El(this))};function Qr(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function El(t){t.g=new ts(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=it(t.sa);J(e,"RID","rpc"),J(e,"SID",t.I),J(e,"CI",t.L?"0":"1"),J(e,"AID",t.T),J(e,"TYPE","xmlhttp"),rs(t,e),t.o&&t.s&&Hr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=li(it(e)),n.s=null,n.P=!0,Ju(n,t)}C.cb=function(){this.v!=null&&(this.v=null,di(this),Gr(this),Ae(19))};function zs(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function _l(t,e){var n=null;if(t.g==e){zs(t),Qr(t),t.g=null;var s=2}else if(ur(t.h,e))n=e.D,cl(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ri(),ve(s,new Qu(s,n)),fi(t)}else Tl(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&_m(t,e)||s==2&&Gr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:It(t,5);break;case 4:It(t,10);break;case 3:It(t,6);break;default:It(t,2)}}}function bl(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function It(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=_e(t.kb,t);n||(n=new Dt("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Bs(n,"https"),li(n)),vm(n.toString(),s)}else Ae(2);t.G=0,t.l&&t.l.va(e),Cl(t),wl(t)}C.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function Cl(t){if(t.G=0,t.la=[],t.l){const e=hl(t.h);(e.length!=0||t.i.length!=0)&&(na(t.la,e),na(t.la,t.i),t.h.i.length=0,xr(t.i),t.i.length=0),t.l.ua()}}function kl(t,e,n){var s=n instanceof Dt?it(n):new Dt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),$s(s,s.m);else{var i=L.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Dt(null,void 0);s&&Bs(r,s),e&&(r.g=e),i&&$s(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&J(s,n,e),J(s,"VER",t.ma),rs(t,s),s}function Il(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ne(new ss({jb:!0})):new ne(t.ra),e.Ka(t.H),e}function Al(){}C=Al.prototype;C.xa=function(){};C.wa=function(){};C.va=function(){};C.ua=function(){};C.Ra=function(){};function js(){if(sn&&!(10<=Number(qf)))throw Error("Environmental error: no available transport.")}js.prototype.g=function(t,e){return new Pe(t,e)};function Pe(t,e){pe.call(this),this.g=new vl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Fs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mn(this)}we(Pe,pe);Pe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ae(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=kl(t,null,t.V),fi(t)};Pe.prototype.close=function(){Kr(this.g)};Pe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pr(t),t=n);e.i.push(new mm(e.ab++,t)),e.G==3&&fi(e)};Pe.prototype.M=function(){this.g.l=null,delete this.j,Kr(this.g),delete this.g,Pe.X.M.call(this)};function xl(t){qr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}we(xl,qr);function Rl(){Br.call(this),this.status=1}we(Rl,Br);function mn(t){this.g=t}we(mn,Al);mn.prototype.xa=function(){ve(this.g,"a")};mn.prototype.wa=function(t){ve(this.g,new xl(t))};mn.prototype.va=function(t){ve(this.g,new Rl)};mn.prototype.ua=function(){ve(this.g,"b")};js.prototype.createWebChannel=js.prototype.g;Pe.prototype.send=Pe.prototype.u;Pe.prototype.open=Pe.prototype.m;Pe.prototype.close=Pe.prototype.close;oi.NO_ERROR=0;oi.TIMEOUT=8;oi.HTTP_ERROR=6;Wu.COMPLETE="complete";Xu.EventType=es;es.OPEN="a";es.CLOSE="b";es.ERROR="c";es.MESSAGE="d";pe.prototype.listen=pe.prototype.N;ne.prototype.listenOnce=ne.prototype.O;ne.prototype.getLastError=ne.prototype.Oa;ne.prototype.getLastErrorCode=ne.prototype.Ea;ne.prototype.getStatus=ne.prototype.aa;ne.prototype.getResponseJson=ne.prototype.Sa;ne.prototype.getResponseText=ne.prototype.fa;ne.prototype.send=ne.prototype.da;ne.prototype.setWithCredentials=ne.prototype.Ka;var bm=function(){return new js},Cm=function(){return ri()},Hi=oi,km=Wu,Im=Vt,ma={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Am=ss,bs=Xu,xm=ne;const ga="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Hh("@firebase/firestore");function pa(){return Ot.logLevel}function k(t,...e){if(Ot.logLevel<=On.DEBUG){const n=e.map(Wr);Ot.debug(`Firestore (${gn}): ${t}`,...n)}}function rt(t,...e){if(Ot.logLevel<=On.ERROR){const n=e.map(Wr);Ot.error(`Firestore (${gn}): ${t}`,...n)}}function lr(t,...e){if(Ot.logLevel<=On.WARN){const n=e.map(Wr);Ot.warn(`Firestore (${gn}): ${t}`,...n)}}function Wr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t="Unexpected state"){const e=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: `+t;throw rt(e),new Error(e)}function Y(t,e){t||N()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends ru{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Se.UNAUTHENTICATED))}shutdown(){}}class Dm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Nm{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new mt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new mt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Y(typeof s.accessToken=="string"),new Dl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Se(e)}}class Lm{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Y(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Om{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Lm(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pm{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.A=n.token,new Mm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Vm(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function G(t,e){return t<e?-1:t>e?1:0}function rn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ce(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new ce(0,0))}static max(){return new V(new ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,s){n===void 0?n=0:n>e.length&&N(),s===void 0?s=e.length-n:s>e.length-n&&N(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return qn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Z extends qn{construct(e,n,s){return new Z(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Z(n)}static emptyPath(){return new Z([])}}const Fm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends qn{construct(e,n,s){return new Ee(e,n,s)}static isValidIdentifier(e){return Fm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ee(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new A(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new A(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new A(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(n)}static emptyPath(){return new Ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(Z.fromString(e))}static fromName(e){return new I(Z.fromString(e).popFirst(5))}static empty(){return new I(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new Z(e.slice()))}}function Um(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(s===1e9?new ce(n+1,0):new ce(n,s));return new pt(i,I.empty(),e)}function qm(t){return new pt(t.readTime,t.key,-1)}class pt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new pt(V.min(),I.empty(),-1)}static max(){return new pt(V.max(),I.empty(),-1)}}function Bm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=I.comparator(t.documentKey,e.documentKey),n!==0?n:G(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==$m)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&N(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,s)=>{n(e)})}static reject(e){return new y((n,s)=>{s(e)})}static waitFor(e){return new y((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(e){let n=y.resolve(!1);for(const s of e)n=n.next(i=>i?y.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new y((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(e,n){return new y((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function as(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Xr.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,s,i,r,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Bn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ft(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ll(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){return t==null}function Hs(t){return t===0&&1/t==-1/0}function Hm(t){return typeof t=="number"&&Number.isInteger(t)&&!Hs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ce(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ce(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const Km=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yt(t){if(Y(!!t),typeof t=="string"){let e=0;const n=Km.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ae(t.seconds),nanos:ae(t.nanos)}}function ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function on(t){return typeof t=="string"?Ce.fromBase64String(t):Ce.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ml(t){const e=t.mapValue.fields.__previous_value__;return Ol(e)?Ml(e):e}function $n(t){const e=yt(t.mapValue.fields.__local_write_time__.timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ol(t)?4:Gm(t)?9007199254740991:10:N()}function Ye(t,e){if(t===e)return!0;const n=Mt(t);if(n!==Mt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $n(t).isEqual($n(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=yt(s.timestampValue),o=yt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return on(s.bytesValue).isEqual(on(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ae(s.geoPointValue.latitude)===ae(i.geoPointValue.latitude)&&ae(s.geoPointValue.longitude)===ae(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ae(s.integerValue)===ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ae(s.doubleValue),o=ae(i.doubleValue);return r===o?Hs(r)===Hs(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return rn(t.arrayValue.values||[],e.arrayValue.values||[],Ye);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(ya(r)!==ya(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ye(r[a],o[a])))return!1;return!0}(t,e);default:return N()}}function zn(t,e){return(t.values||[]).find(n=>Ye(n,e))!==void 0}function an(t,e){if(t===e)return 0;const n=Mt(t),s=Mt(e);if(n!==s)return G(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ae(i.integerValue||i.doubleValue),a=ae(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return va(t.timestampValue,e.timestampValue);case 4:return va($n(t),$n(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(i,r){const o=on(i),a=on(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=G(o[u],a[u]);if(l!==0)return l}return G(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=G(ae(i.latitude),ae(r.latitude));return o!==0?o:G(ae(i.longitude),ae(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=an(o[u],a[u]);if(l)return l}return G(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Cs.mapValue&&r===Cs.mapValue)return 0;if(i===Cs.mapValue)return 1;if(r===Cs.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const f=G(a[c],l[c]);if(f!==0)return f;const m=an(o[a[c]],u[l[c]]);if(m!==0)return m}return G(a.length,l.length)}(t.mapValue,e.mapValue);default:throw N()}}function va(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=yt(t),s=yt(e),i=G(n.seconds,s.seconds);return i!==0?i:G(n.nanos,s.nanos)}function un(t){return cr(t)}function cr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=yt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?on(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,I.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=cr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${cr(s.fields[a])}`;return r+"}"}(t.mapValue):N();var e,n}function hr(t){return!!t&&"integerValue"in t}function Yr(t){return!!t&&"arrayValue"in t}function wa(t){return!!t&&"nullValue"in t}function Sa(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xs(t){return!!t&&"mapValue"in t}function Rn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ft(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Rn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.position=e,this.inclusive=n}}function Ta(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=I.comparator(I.fromName(o.referenceValue),n.key):s=an(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ea(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ye(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{}class le extends Pl{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Xm(e,n,s):n==="array-contains"?new Zm(e,s):n==="in"?new eg(e,s):n==="not-in"?new tg(e,s):n==="array-contains-any"?new ng(e,s):new le(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Ym(e,s):new Jm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(an(n,this.value)):n!==null&&Mt(this.value)===Mt(n)&&this.matchesComparison(an(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return N()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Je extends Pl{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Je(e,n)}matches(e){return Vl(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Vl(t){return t.op==="and"}function Qm(t){return Wm(t)&&Vl(t)}function Wm(t){for(const e of t.filters)if(e instanceof Je)return!1;return!0}function Fl(t){if(t instanceof le)return t.field.canonicalString()+t.op.toString()+un(t.value);{const e=t.filters.map(n=>Fl(n)).join(",");return`${t.op}(${e})`}}function Ul(t,e){return t instanceof le?function(n,s){return s instanceof le&&n.op===s.op&&n.field.isEqual(s.field)&&Ye(n.value,s.value)}(t,e):t instanceof Je?function(n,s){return s instanceof Je&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Ul(r,s.filters[o]),!0):!1}(t,e):void N()}function ql(t){return t instanceof le?function(e){return`${e.field.canonicalString()} ${e.op} ${un(e.value)}`}(t):t instanceof Je?function(e){return e.op.toString()+" {"+e.getFilters().map(ql).join(" ,")+"}"}(t):"Filter"}class Xm extends le{constructor(e,n,s){super(e,n,s),this.key=I.fromName(s.referenceValue)}matches(e){const n=I.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ym extends le{constructor(e,n){super(e,"in",n),this.keys=Bl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Jm extends le{constructor(e,n){super(e,"not-in",n),this.keys=Bl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bl(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>I.fromName(s.referenceValue))}class Zm extends le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yr(n)&&zn(n.arrayValue,this.value)}}class eg extends le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zn(this.value.arrayValue,n)}}class tg extends le{constructor(e,n){super(e,"not-in",n)}matches(e){if(zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zn(this.value.arrayValue,n)}}class ng extends le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>zn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n="asc"){this.field=e,this.dir=n}}function sg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){this.comparator=e,this.root=n||ye.EMPTY}insert(e,n){return new de(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ks(this.root,e,this.comparator,!0)}}class ks{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ye.RED,this.left=i!=null?i:ye.EMPTY,this.right=r!=null?r:ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ye(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ye.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw N();const e=this.left.check();if(e!==this.right.check())throw N();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw N()}get value(){throw N()}get color(){throw N()}get left(){throw N()}get right(){throw N()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _a(this.data.getIterator())}getIteratorFrom(e){return new _a(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new he(this.comparator);return n.data=e,n}}class _a{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Ue([])}unionWith(e){let n=new he(Ee.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ue(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rn(n)}setAll(e){let n=Ee.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Rn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());xs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ye(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];xs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ft(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ne(Rn(this.value))}}function $l(t){const e=[];return Ft(t.fields,(n,s)=>{const i=new Ee([n]);if(xs(s)){const r=$l(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ue(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Te(e,0,V.min(),V.min(),V.min(),Ne.empty(),0)}static newFoundDocument(e,n,s,i){return new Te(e,1,n,V.min(),s,i,0)}static newNoDocument(e,n){return new Te(e,2,n,V.min(),V.min(),Ne.empty(),0)}static newUnknownDocument(e,n){return new Te(e,3,n,V.min(),V.min(),Ne.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function ba(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ig(t,e,n,s,i,r,o)}function Jr(t){const e=U(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Fl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),mi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>un(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>un(s)).join(",")),e.ft=n}return e.ft}function Zr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sg(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ul(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ea(t.startAt,e.startAt)&&Ea(t.endAt,e.endAt)}function dr(t){return I.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function rg(t,e,n,s,i,r,o,a){return new gi(t,e,n,s,i,r,o,a)}function zl(t){return new gi(t)}function Ca(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function og(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ag(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ug(t){return t.collectionGroup!==null}function tn(t){const e=U(t);if(e.dt===null){e.dt=[];const n=ag(e),s=og(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Dn(n)),e.dt.push(new Dn(Ee.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Dn(Ee.keyField(),r))}}}return e.dt}function ot(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=ba(e.path,e.collectionGroup,tn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of tn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Dn(r.field,o))}const s=e.endAt?new Ks(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ks(e.startAt.position,e.startAt.inclusive):null;e._t=ba(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function fr(t,e,n){return new gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pi(t,e){return Zr(ot(t),ot(e))&&t.limitType===e.limitType}function jl(t){return`${Jr(ot(t))}|lt:${t.limitType}`}function mr(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ql(s)).join(", ")}]`),mi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>un(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>un(s)).join(",")),`Target(${n})`}(ot(t))}; limitType=${t.limitType})`}function eo(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):I.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of tn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Ta(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,tn(n),s)||n.endAt&&!function(i,r,o){const a=Ta(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,tn(n),s))}(t,e)}function lg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hl(t){return(e,n)=>{let s=!1;for(const i of tn(t)){const r=cg(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function cg(t,e,n){const s=t.field.isKeyField()?I.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?an(a,u):N()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return N()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hs(e)?"-0":e}}function Gl(t){return{integerValue:""+t}}function hg(t,e){return Hm(e)?Gl(e):Kl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this._=void 0}}function dg(t,e,n){return t instanceof Gs?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof jn?Wl(t,e):t instanceof Hn?Xl(t,e):function(s,i){const r=Ql(s,i),o=ka(r)+ka(s.gt);return hr(r)&&hr(s.gt)?Gl(o):Kl(s.yt,o)}(t,e)}function fg(t,e,n){return t instanceof jn?Wl(t,e):t instanceof Hn?Xl(t,e):n}function Ql(t,e){return t instanceof Qs?hr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Gs extends yi{}class jn extends yi{constructor(e){super(),this.elements=e}}function Wl(t,e){const n=Yl(e);for(const s of t.elements)n.some(i=>Ye(i,s))||n.push(s);return{arrayValue:{values:n}}}class Hn extends yi{constructor(e){super(),this.elements=e}}function Xl(t,e){let n=Yl(e);for(const s of t.elements)n=n.filter(i=>!Ye(i,s));return{arrayValue:{values:n}}}class Qs extends yi{constructor(e,n){super(),this.yt=e,this.gt=n}}function ka(t){return ae(t.integerValue||t.doubleValue)}function Yl(t){return Yr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mg(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof jn&&s instanceof jn||n instanceof Hn&&s instanceof Hn?rn(n.elements,s.elements,Ye):n instanceof Qs&&s instanceof Qs?Ye(n.gt,s.gt):n instanceof Gs&&s instanceof Gs}(t.transform,e.transform)}class gg{constructor(e,n){this.version=e,this.transformResults=n}}class ze{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vi{}function Jl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new to(t.key,ze.none()):new us(t.key,t.data,ze.none());{const n=t.data,s=Ne.empty();let i=new he(Ee.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Tt(t.key,s,new Ue(i.toArray()),ze.none())}}function pg(t,e,n){t instanceof us?function(s,i,r){const o=s.value.clone(),a=Aa(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Tt?function(s,i,r){if(!Rs(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Aa(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Zl(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Nn(t,e,n,s){return t instanceof us?function(i,r,o,a){if(!Rs(i.precondition,r))return o;const u=i.value.clone(),l=xa(i.fieldTransforms,a,r);return u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Tt?function(i,r,o,a){if(!Rs(i.precondition,r))return o;const u=xa(i.fieldTransforms,a,r),l=r.data;return l.setAll(Zl(i)),l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,s):function(i,r,o){return Rs(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function yg(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Ql(s.transform,i||null);r!=null&&(n===null&&(n=Ne.empty()),n.set(s.field,r))}return n||null}function Ia(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&rn(n,s,(i,r)=>mg(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class us extends vi{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Tt extends vi{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Zl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Aa(t,e,n){const s=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,fg(o,a,n[i]))}return s}function xa(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,dg(r,o,e))}return s}class to extends vi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vg extends vi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe,H;function Sg(t){switch(t){default:return N();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function ec(t){if(t===void 0)return rt("GRPC error has no .code"),p.UNKNOWN;switch(t){case oe.OK:return p.OK;case oe.CANCELLED:return p.CANCELLED;case oe.UNKNOWN:return p.UNKNOWN;case oe.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case oe.INTERNAL:return p.INTERNAL;case oe.UNAVAILABLE:return p.UNAVAILABLE;case oe.UNAUTHENTICATED:return p.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case oe.NOT_FOUND:return p.NOT_FOUND;case oe.ALREADY_EXISTS:return p.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return p.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case oe.ABORTED:return p.ABORTED;case oe.OUT_OF_RANGE:return p.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return p.UNIMPLEMENTED;case oe.DATA_LOSS:return p.DATA_LOSS;default:return N()}}(H=oe||(oe={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ft(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Ll(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=new de(I.comparator);function at(){return Tg}const tc=new de(I.comparator);function kn(...t){let e=tc;for(const n of t)e=e.insert(n.key,n);return e}function nc(t){let e=tc;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function At(){return Ln()}function sc(){return Ln()}function Ln(){return new pn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Eg=new de(I.comparator),_g=new he(I.comparator);function z(...t){let e=_g;for(const n of t)e=e.add(n);return e}const bg=new he(G);function ic(){return bg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,ls.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new wi(V.min(),i,ic(),at(),z())}}class ls{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ls(s,n,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class rc{constructor(e,n){this.targetId=e,this.Et=n}}class oc{constructor(e,n,s=Ce.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Ra{constructor(){this.At=0,this.Rt=Na(),this.bt=Ce.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=z(),n=z(),s=z();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:N()}}),new ls(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Na()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Cg{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=at(),this.qt=Da(),this.Ut=new he(G)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:N()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(dr(r))if(s===0){const o=new I(r.path);this.Qt(n,o,Te.newNoDocument(o,V.min()))}else Y(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&dr(a.target)){const u=new I(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,Te.newNoDocument(u,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=z();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Yt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new wi(e,n,this.Ut,this.Lt,s);return this.Lt=at(),this.qt=Da(),this.Ut=new he(G),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Ra,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new he(G),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Ra),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Da(){return new de(I.comparator)}function Na(){return new de(I.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ig=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ag=(()=>({and:"AND",or:"OR"}))();class xg{constructor(e,n){this.databaseId=e,this.wt=n}}function Ws(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ac(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Rg(t,e){return Ws(t,e.toTimestamp())}function Xe(t){return Y(!!t),V.fromTimestamp(function(e){const n=yt(e);return new ce(n.seconds,n.nanos)}(t))}function no(t,e){return function(n){return new Z(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function uc(t){const e=Z.fromString(t);return Y(dc(e)),e}function gr(t,e){return no(t.databaseId,e.path)}function Ki(t,e){const n=uc(e);if(n.get(1)!==t.databaseId.projectId)throw new A(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new I(lc(n))}function pr(t,e){return no(t.databaseId,e)}function Dg(t){const e=uc(t);return e.length===4?Z.emptyPath():lc(e)}function yr(t){return new Z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lc(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function La(t,e,n){return{name:gr(t,e),fields:n.value.mapValue.fields}}function Ng(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:N()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,l){return u.wt?(Y(l===void 0||typeof l=="string"),Ce.fromBase64String(l||"")):(Y(l===void 0||l instanceof Uint8Array),Ce.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:ec(u.code);return new A(l,u.message||"")}(o);n=new oc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ki(t,s.document.name),r=Xe(s.document.updateTime),o=s.document.createTime?Xe(s.document.createTime):V.min(),a=new Ne({mapValue:{fields:s.document.fields}}),u=Te.newFoundDocument(i,r,o,a),l=s.targetIds||[],c=s.removedTargetIds||[];n=new Ds(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ki(t,s.document),r=s.readTime?Xe(s.readTime):V.min(),o=Te.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ds([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ki(t,s.document),r=s.removedTargetIds||[];n=new Ds([],r,i,null)}else{if(!("filter"in e))return N();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new wg(i),o=s.targetId;n=new rc(o,r)}}return n}function Lg(t,e){let n;if(e instanceof us)n={update:La(t,e.key,e.value)};else if(e instanceof to)n={delete:gr(t,e.key)};else if(e instanceof Tt)n={update:La(t,e.key,e.data),updateMask:$g(e.fieldMask)};else{if(!(e instanceof vg))return N();n={verify:gr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Gs)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof jn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Hn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Qs)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw N()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Rg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:N()}(t,e.precondition)),n}function Og(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Xe(s.updateTime):Xe(i);return r.isEqual(V.min())&&(r=Xe(i)),new gg(r,s.transformResults||[])}(n,e))):[]}function Mg(t,e){return{documents:[pr(t,e.path)]}}function Pg(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=pr(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=pr(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return hc(Je.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:Yt(c.field),direction:Ug(c.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,l){return u.wt||mi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Vg(t){let e=Dg(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Y(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let r=[];n.where&&(r=function(c){const f=cc(c);return f instanceof Je&&Qm(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(f){return new Dn(Jt(f.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(c)));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,mi(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(c){const f=!!c.before,m=c.values||[];return new Ks(m,f)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const f=!c.before,m=c.values||[];return new Ks(m,f)}(n.endAt)),rg(e,i,o,r,a,"F",u,l)}function Fg(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return N()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function cc(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Jt(e.unaryFilter.field);return le.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Jt(e.unaryFilter.field);return le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jt(e.unaryFilter.field);return le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Jt(e.unaryFilter.field);return le.create(r,"!=",{nullValue:"NULL_VALUE"});default:return N()}}(t):t.fieldFilter!==void 0?function(e){return le.create(Jt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return N()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Je.create(e.compositeFilter.filters.map(n=>cc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return N()}}(e.compositeFilter.op))}(t):N()}function Ug(t){return kg[t]}function qg(t){return Ig[t]}function Bg(t){return Ag[t]}function Yt(t){return{fieldPath:t.canonicalString()}}function Jt(t){return Ee.fromServerFormat(t.fieldPath)}function hc(t){return t instanceof le?function(e){if(e.op==="=="){if(Sa(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NAN"}};if(wa(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Sa(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NOT_NAN"}};if(wa(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(e.field),op:qg(e.op),value:e.value}}}(t):t instanceof Je?function(e){const n=e.getFilters().map(s=>hc(s));return n.length===1?n[0]:{compositeFilter:{op:Bg(e.op),filters:n}}}(t):N()}function $g(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dc(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&pg(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Nn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Nn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=sc();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=Jl(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(V.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),z())}isEqual(e){return this.batchId===e.batchId&&rn(this.mutations,e.mutations,(n,s)=>Ia(n,s))&&rn(this.baseMutations,e.baseMutations,(n,s)=>Ia(n,s))}}class so{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Y(e.mutations.length===s.length);let i=Eg;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new so(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,s,i,r=V.min(),o=V.min(),a=Ce.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.ie=e}}function Kg(t){const e=Vg({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.Je=new Qg}addToCollectionParentIndex(e,n){return this.Je.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(pt.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(pt.min())}updateCollectionGroup(e,n,s){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class Qg{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new he(Z.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new he(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ln(0)}static vn(){return new ln(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.changes=new pn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Nn(s.mutation,i,Ue.empty(),ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,z()).next(()=>s))}getLocalViewOfDocuments(e,n,s=z()){const i=At();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=kn();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=At();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,z()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=at();const o=Ln(),a=Ln();return n.forEach((u,l)=>{const c=s.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Tt)?r=r.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),Nn(c.mutation,l,c.mutation.getFieldMask(),ce.now()))}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var f;return a.set(l,new Xg(c,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ln();let i=new de((o,a)=>o-a),r=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=s.get(u)||Ue.empty();c=a.applyToLocalView(l,c),s.set(u,c);const f=(i.get(a.batchId)||z()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,f=sc();c.forEach(m=>{if(!r.has(m)){const d=Jl(n.get(m),s.get(m));d!==null&&f.set(m,d),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ug(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):y.resolve(At());let a=-1,u=r;return o.next(l=>y.forEach(l,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(c)?y.resolve():this.remoteDocumentCache.getEntry(e,c).next(m=>{u=u.insert(c,m)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,u,l,z())).next(c=>({batchId:a,changes:nc(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new I(n)).next(s=>{let i=kn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=kn();return this.indexManager.getCollectionParents(e,i).next(o=>y.forEach(o,a=>{const u=function(l,c){return new gi(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(l=>{l.forEach((c,f)=>{r=r.insert(c,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,Te.newInvalidDocument(l)))});let o=kn();return i.forEach((a,u)=>{const l=r.get(a);l!==void 0&&Nn(l.mutation,u,Ue.empty(),ce.now()),eo(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return y.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Xe(s.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Kg(s.bundledQuery),readTime:Xe(s.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.overlays=new de(I.comparator),this.es=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=At();return y.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),y.resolve()}getOverlaysForCollection(e,n,s){const i=At(),r=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new de((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let c=r.get(l.largestBatchId);c===null&&(c=At(),r=r.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=At(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return y.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new jg(n,s));let r=this.es.get(n);r===void 0&&(r=z(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.ns=new he(ge.ss),this.rs=new he(ge.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new ge(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new ge(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new I(new Z([])),s=new ge(n,e),i=new ge(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new I(new Z([])),s=new ge(n,e),i=new ge(n,e+1);let r=z();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ge(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ge{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return I.comparator(e.key,n.key)||G(e._s,n._s)}static os(e,n){return G(e._s,n._s)||I.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new he(ge.ss)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zg(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ge(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ge(n,0),i=new ge(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new he(G);return n.forEach(i=>{const r=new ge(i,0),o=new ge(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),y.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;I.isDocumentKey(r)||(r=r.child(""));const o=new ge(new I(r),0);let a=new he(G);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),y.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return y.forEach(n.mutations,i=>{const r=new ge(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new ge(n,0),i=this.gs.firstAfterOrEqual(s);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.Es=e,this.docs=new de(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():Te.newInvalidDocument(n))}getEntries(e,n){let s=at();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Te.newInvalidDocument(i))}),y.resolve(s)}getAllFromCollection(e,n,s){let i=at();const r=new I(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Bm(qm(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(e,n,s,i){N()}As(e,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new np(this)}getSize(e){return y.resolve(this.size)}}class np extends Wg{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),y.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.persistence=e,this.Rs=new pn(n=>Jr(n),Zr),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.bs=0,this.Ps=new io,this.targetCount=0,this.vs=ln.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),y.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ln(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.Dn(n),y.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),y.waitFor(r).next(()=>i)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return y.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),y.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return y.resolve(s)}containsKey(e,n){return y.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Xr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new sp(this),this.indexManager=new Gg,this.remoteDocumentCache=function(s){return new tp(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Hg(n),this.Ns=new Jg(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Zg,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new ep(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){k("MemoryPersistence","Starting transaction:",e);const i=new rp(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return y.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class rp extends zm{constructor(e){super(),this.currentSequenceNumber=e}}class ro{constructor(e){this.persistence=e,this.Fs=new io,this.$s=null}static Bs(e){return new ro(e)}get Ls(){if(this.$s)return this.$s;throw N()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),y.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),y.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Ls,s=>{const i=I.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,V.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return y.or([()=>y.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=z(),i=z();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new oo(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Ca(n))return y.resolve(null);let s=ot(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fr(n,null,"F"),s=ot(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=z(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,fr(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,s,i){return Ca(n)||i.isEqual(V.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(pa()<=On.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mr(n)),this.Bi(e,o,n,Um(i,-1)))})}Fi(e,n){let s=new he(Hl(e));return n.forEach((i,r)=>{eo(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return pa()<=On.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",mr(n)),this.Ni.getDocumentsMatchingQuery(e,n,pt.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new de(G),this.Ui=new pn(r=>Jr(r),Zr),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yg(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function up(t,e,n,s){return new ap(t,e,n,s)}async function fc(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=z();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of r){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function lp(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,f=c.keys();let m=y.resolve();return f.forEach(d=>{m=m.next(()=>l.getEntry(a,d)).next(g=>{const T=u.docVersions.get(d);Y(T!==null),g.version.compareTo(T)<0&&(c.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),l.addEntry(g)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function mc(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function cp(t,e){const n=U(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,f)=>{const m=i.get(f);if(!m)return;a.push(n.Cs.removeMatchingKeys(r,c.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,c.addedDocuments,f)));let d=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?d=d.withResumeToken(Ce.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(c.resumeToken,s)),i=i.insert(f,d),function(g,T,v){return g.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,d,c)&&a.push(n.Cs.updateTargetData(r,d))});let u=at(),l=z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(hp(r,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!s.isEqual(V.min())){const c=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,l)).next(()=>u)}).then(r=>(n.qi=i,r))}function hp(t,e,n){let s=z(),i=z();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=at();return n.forEach((a,u)=>{const l=r.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(V.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function dp(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function fp(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,y.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Nt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function vr(t,e,n){const s=U(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!as(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function Oa(t,e,n){const s=U(t);let i=V.min(),r=z();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=U(a),f=c.Ui.get(l);return f!==void 0?y.resolve(c.qi.get(f)):c.Cs.getTargetData(u,l)}(s,o,ot(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?r:z())).next(a=>(mp(s,lg(e),a),{documents:a,Hi:r})))}function mp(t,e,n){let s=t.Ki.get(e)||V.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Ma{constructor(){this.activeTargetIds=ic()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gp{constructor(){this.Lr=new Ma,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ma,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);k("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(u=>(k("RestConnection","Received: ",u),u),u=>{throw lr("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",s),u})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+gn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=yp[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new xm;a.setWithCredentials(!0),a.listenOnce(km.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Hi.NO_ERROR:const l=a.getResponseJson();k("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Hi.TIMEOUT:k("Connection",'RPC "'+e+'" timed out'),o(new A(p.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const c=a.getStatus();if(k("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const d=function(g){const T=g.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(T)>=0?T:p.UNKNOWN}(m.status);o(new A(d,m.message))}else o(new A(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(p.UNAVAILABLE,"Connection failed."));break;default:N()}}finally{k("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=bm(),o=Cm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Am({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const u=i.join("");k("Connection","Creating WebChannel: "+u,a);const l=r.createWebChannel(u,a);let c=!1,f=!1;const m=new vp({Hr:g=>{f?k("Connection","Not sending because WebChannel is closed:",g):(c||(k("Connection","Opening WebChannel transport."),l.open(),c=!0),k("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),d=(g,T,v)=>{g.listen(T,q=>{try{v(q)}catch(M){setTimeout(()=>{throw M},0)}})};return d(l,bs.EventType.OPEN,()=>{f||k("Connection","WebChannel transport opened.")}),d(l,bs.EventType.CLOSE,()=>{f||(f=!0,k("Connection","WebChannel transport closed"),m.io())}),d(l,bs.EventType.ERROR,g=>{f||(f=!0,lr("Connection","WebChannel transport errored:",g),m.io(new A(p.UNAVAILABLE,"The operation could not be completed")))}),d(l,bs.EventType.MESSAGE,g=>{var T;if(!f){const v=g.data[0];Y(!!v);const q=v,M=q.error||((T=q[0])===null||T===void 0?void 0:T.error);if(M){k("Connection","WebChannel received error:",M);const K=M.status;let R=function(ie){const ue=oe[ie];if(ue!==void 0)return ec(ue)}(K),j=M.message;R===void 0&&(R=p.INTERNAL,j="Unknown error status: "+K+" with message "+M.message),f=!0,m.io(new A(R,j)),l.close()}else k("Connection","WebChannel received:",v),m.ro(v)}}),d(o,Im.STAT_EVENT,g=>{g.stat===ma.PROXY?k("Connection","Detected buffering proxy"):g.stat===ma.NOPROXY&&k("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.so()},0),m}}function Gi(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){return new xg(t,!0)}class gc{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,s,i,r,o,a,u){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new gc(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(rt(n.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new A(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sp extends pc{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Ng(this.yt,e),s=function(i){if(!("targetChange"in i))return V.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?V.min():r.readTime?Xe(r.readTime):V.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=yr(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=dr(a)?{documents:Mg(i,a)}:{query:Pg(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=ac(i,r.resumeToken):r.snapshotVersion.compareTo(V.min())>0&&(o.readTime=Ws(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Fg(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=yr(this.yt),n.removeTarget=e,this.Bo(n)}}class Tp extends pc{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Og(e.writeResults,e.commitTime),s=Xe(e.commitTime);return this.listener.Zo(s,n)}return Y(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=yr(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Lg(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new A(p.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(p.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(p.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class _p{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(rt(n),this.ou=!1):k("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Ut(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=U(a);u._u.add(4),await cs(u),u.gu.set("Unknown"),u._u.delete(4),await Ti(u)}(this))})}),this.gu=new _p(s,i)}}async function Ti(t){if(Ut(t))for(const e of t.wu)await e(!0)}async function cs(t){for(const e of t.wu)await e(!1)}function yc(t,e){const n=U(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),lo(n)?uo(n):yn(n).ko()&&ao(n,e))}function vc(t,e){const n=U(t),s=yn(n);n.du.delete(e),s.ko()&&wc(n,e),n.du.size===0&&(s.ko()?s.Fo():Ut(n)&&n.gu.set("Unknown"))}function ao(t,e){t.yu.Ot(e.targetId),yn(t).zo(e)}function wc(t,e){t.yu.Ot(e),yn(t).Ho(e)}function uo(t){t.yu=new Cg({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),yn(t).start(),t.gu.uu()}function lo(t){return Ut(t)&&!yn(t).No()&&t.du.size>0}function Ut(t){return U(t)._u.size===0}function Sc(t){t.yu=void 0}async function Cp(t){t.du.forEach((e,n)=>{ao(t,e)})}async function kp(t,e){Sc(t),lo(t)?(t.gu.hu(e),uo(t)):t.gu.set("Unknown")}async function Ip(t,e,n){if(t.gu.set("Online"),e instanceof oc&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xs(t,s)}else if(e instanceof Ds?t.yu.Kt(e):e instanceof rc?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(V.min()))try{const s=await mc(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(Ce.EMPTY_BYTE_STRING,u.snapshotVersion)),wc(i,a);const l=new Nt(u.target,a,1,u.sequenceNumber);ao(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){k("RemoteStore","Failed to raise snapshot:",s),await Xs(t,s)}}async function Xs(t,e,n){if(!as(e))throw e;t._u.add(1),await cs(t),t.gu.set("Offline"),n||(n=()=>mc(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ti(t)})}function Tc(t,e){return e().catch(n=>Xs(t,n,e))}async function Ei(t){const e=U(t),n=vt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Ap(e);)try{const i=await dp(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,xp(e,i)}catch(i){await Xs(e,i)}Ec(e)&&_c(e)}function Ap(t){return Ut(t)&&t.fu.length<10}function xp(t,e){t.fu.push(e);const n=vt(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ec(t){return Ut(t)&&!vt(t).No()&&t.fu.length>0}function _c(t){vt(t).start()}async function Rp(t){vt(t).eu()}async function Dp(t){const e=vt(t);for(const n of t.fu)e.Xo(n.mutations)}async function Np(t,e,n){const s=t.fu.shift(),i=so.from(s,e,n);await Tc(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ei(t)}async function Lp(t,e){e&&vt(t).Yo&&await async function(n,s){if(i=s.code,Sg(i)&&i!==p.ABORTED){const r=n.fu.shift();vt(n).Mo(),await Tc(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ei(n)}var i}(t,e),Ec(t)&&_c(t)}async function Va(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const s=Ut(n);n._u.add(3),await cs(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ti(n)}async function Op(t,e){const n=U(t);e?(n._u.delete(2),await Ti(n)):e||(n._u.add(2),await cs(n),n.gu.set("Unknown"))}function yn(t){return t.pu||(t.pu=function(e,n,s){const i=U(e);return i.su(),new Sp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:Cp.bind(null,t),Zr:kp.bind(null,t),Wo:Ip.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),lo(t)?uo(t):t.gu.set("Unknown")):(await t.pu.stop(),Sc(t))})),t.pu}function vt(t){return t.Iu||(t.Iu=function(e,n,s){const i=U(e);return i.su(),new Tp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:Rp.bind(null,t),Zr:Lp.bind(null,t),tu:Dp.bind(null,t),Zo:Np.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ei(t)):(await t.Iu.stop(),t.fu.length>0&&(k("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new co(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ho(t,e){if(rt("AsyncQueue",`${e}: ${t}`),as(t))return new A(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||I.comparator(n.key,s.key):(n,s)=>I.comparator(n.key,s.key),this.keyedMap=kn(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new nn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof nn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new nn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.Tu=new de(I.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):N():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class cn{constructor(e,n,s,i,r,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new cn(e,n,nn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.Au=void 0,this.listeners=[]}}class Pp{constructor(){this.queries=new pn(e=>jl(e),pi),this.onlineState="Unknown",this.Ru=new Set}}async function Vp(t,e){const n=U(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Mp),i)try{r.Au=await n.onListen(s)}catch(o){const a=ho(o,`Initialization of query '${mr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&fo(n)}async function Fp(t,e){const n=U(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Up(t,e){const n=U(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&fo(n)}function qp(t,e,n){const s=U(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function fo(t){t.Ru.forEach(e=>{e.next()})}class Bp{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new cn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=cn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.key=e}}class Cc{constructor(e){this.key=e}}class $p{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=z(),this.mutatedKeys=z(),this.Gu=Hl(e),this.Qu=new nn(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Fa,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const m=i.get(c),d=eo(this.query,f)?f:null,g=!!m&&this.mutatedKeys.has(m.key),T=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;m&&d?m.data.isEqual(d.data)?g!==T&&(s.track({type:3,doc:d}),v=!0):this.Hu(m,d)||(s.track({type:2,doc:d}),v=!0,(u&&this.Gu(d,u)>0||l&&this.Gu(d,l)<0)&&(a=!0)):!m&&d?(s.track({type:0,doc:d}),v=!0):m&&!d&&(s.track({type:1,doc:m}),v=!0,(u||l)&&(a=!0)),v&&(d?(o=o.add(d),r=T?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,c)=>function(f,m){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return N()}};return d(f)-d(m)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,r.length!==0||u?{snapshot:new cn(this.query,e.Qu,i,r,e.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Fa,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=z(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Cc(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new bc(s))}),n}tc(e){this.qu=e.Hi,this.Ku=z();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return cn.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class zp{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class jp{constructor(e){this.key=e,this.nc=!1}}class Hp{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new pn(a=>jl(a),pi),this.rc=new Map,this.oc=new Set,this.uc=new de(I.comparator),this.cc=new Map,this.ac=new io,this.hc={},this.lc=new Map,this.fc=ln.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Kp(t,e){const n=ny(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await fp(n.localStore,ot(e));n.isPrimaryClient&&yc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Gp(n,e,s,a==="current",o.resumeToken)}return i}async function Gp(t,e,n,s,i){t._c=(f,m,d)=>async function(g,T,v,q){let M=T.view.Wu(v);M.$i&&(M=await Oa(g.localStore,T.query,!1).then(({documents:j})=>T.view.Wu(j,M)));const K=q&&q.targetChanges.get(T.targetId),R=T.view.applyChanges(M,g.isPrimaryClient,K);return qa(g,T.targetId,R.Xu),R.snapshot}(t,f,m,d);const r=await Oa(t.localStore,e,!0),o=new $p(e,r.Hi),a=o.Wu(r.documents),u=ls.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);qa(t,n,l.Xu);const c=new zp(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Qp(t,e){const n=U(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!pi(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await vr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),vc(n.remoteStore,s.targetId),wr(n,s.targetId)}).catch(os)):(wr(n,s.targetId),await vr(n.localStore,s.targetId,!0))}async function Wp(t,e,n){const s=sy(t);try{const i=await function(r,o){const a=U(r),u=ce.now(),l=o.reduce((m,d)=>m.add(d.key),z());let c,f;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let d=at(),g=z();return a.Gi.getEntries(m,l).next(T=>{d=T,d.forEach((v,q)=>{q.isValidDocument()||(g=g.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,d)).next(T=>{c=T;const v=[];for(const q of o){const M=yg(q,c.get(q.key).overlayedDocument);M!=null&&v.push(new Tt(q.key,M,$l(M.value.mapValue),ze.exists(!0)))}return a.mutationQueue.addMutationBatch(m,u,v,o)}).next(T=>{f=T;const v=T.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(m,T.batchId,v)})}).then(()=>({batchId:f.batchId,changes:nc(c)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.hc[r.currentUser.toKey()];u||(u=new de(G)),u=u.insert(o,a),r.hc[r.currentUser.toKey()]=u}(s,i.batchId,n),await hs(s,i.changes),await Ei(s.remoteStore)}catch(i){const r=ho(i,"Failed to persist write");n.reject(r)}}async function kc(t,e){const n=U(t);try{const s=await cp(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Y(o.nc):i.removedDocuments.size>0&&(Y(o.nc),o.nc=!1))}),await hs(n,s,e)}catch(s){await os(s)}}function Ua(t,e,n){const s=U(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=U(r);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const f of c.listeners)f.bu(o)&&(u=!0)}),u&&fo(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Xp(t,e,n){const s=U(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new de(I.comparator);o=o.insert(r,Te.newNoDocument(r,V.min()));const a=z().add(r),u=new wi(V.min(),new Map,new he(G),o,a);await kc(s,u),s.uc=s.uc.remove(r),s.cc.delete(e),mo(s)}else await vr(s.localStore,e,!1).then(()=>wr(s,e,n)).catch(os)}async function Yp(t,e){const n=U(t),s=e.batch.batchId;try{const i=await lp(n.localStore,e);Ac(n,s,null),Ic(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await hs(n,i)}catch(i){await os(i)}}async function Jp(t,e,n){const s=U(t);try{const i=await function(r,o){const a=U(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(Y(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(s.localStore,e);Ac(s,e,n),Ic(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await hs(s,i)}catch(i){await os(i)}}function Ic(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Ac(t,e,n){const s=U(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function wr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||xc(t,s)})}function xc(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(vc(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),mo(t))}function qa(t,e,n){for(const s of n)s instanceof bc?(t.ac.addReference(s.key,e),Zp(t,s)):s instanceof Cc?(k("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||xc(t,s.key)):N()}function Zp(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(k("SyncEngine","New document in limbo: "+n),t.oc.add(s),mo(t))}function mo(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new I(Z.fromString(e)),s=t.fc.next();t.cc.set(s,new jp(n)),t.uc=t.uc.insert(n,s),yc(t.remoteStore,new Nt(ot(zl(n.path)),s,2,Xr.at))}}async function hs(t,e,n){const s=U(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,u)=>{o.push(s._c(u,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=oo.Ci(u.targetId,l);r.push(c)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,u){const l=U(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>y.forEach(u,f=>y.forEach(f.Si,m=>l.persistence.referenceDelegate.addReference(c,f.targetId,m)).next(()=>y.forEach(f.Di,m=>l.persistence.referenceDelegate.removeReference(c,f.targetId,m)))))}catch(c){if(!as(c))throw c;k("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const f=c.targetId;if(!c.fromCache){const m=l.qi.get(f),d=m.snapshotVersion,g=m.withLastLimboFreeSnapshotVersion(d);l.qi=l.qi.insert(f,g)}}}(s.localStore,r))}async function ey(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const s=await fc(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new A(p.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await hs(n,s.ji)}}function ty(t,e){const n=U(t),s=n.cc.get(e);if(s&&s.nc)return z().add(s.key);{let i=z();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function ny(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ty.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Xp.bind(null,e),e.sc.Wo=Up.bind(null,e.eventManager),e.sc.wc=qp.bind(null,e.eventManager),e}function sy(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jp.bind(null,e),e}class iy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Si(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return up(this.persistence,new op,e.initialUser,this.yt)}yc(e){return new ip(ro.Bs,this.yt)}gc(e){return new gp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ry{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ua(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ey.bind(null,this.syncEngine),await Op(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Pp}createDatastore(e){const n=Si(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new wp(i));var i;return function(r,o,a,u){return new Ep(r,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Ua(this.syncEngine,a,0),o=Pa.C()?new Pa:new pp,new bp(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,u,l){const c=new Hp(s,i,r,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);k("RemoteStore","RemoteStore shutting down."),n._u.add(5),await cs(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t,e,n){if(!n)throw new A(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oy(t,e,n,s){if(e===!0&&s===!0)throw new A(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ba(t){if(!I.isDocumentKey(t))throw new A(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $a(t){if(I.isDocumentKey(t))throw new A(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function go(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":N()}function Pt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=go(t);throw new A(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;class ja{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,oy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ja({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ja(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Rm;switch(n.type){case"gapi":const s=n.client;return new Om(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=za.get(e);n&&(k("ComponentProvider","Removing Datastore"),za.delete(e),n.terminate())}(this),Promise.resolve()}}function ay(t,e,n,s={}){var i;const r=(t=Pt(t,_i))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Se.MOCK_USER;else{o=iu(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new A(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Se(u)}t._authCredentials=new Dm(new Dl(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class bi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new bi(this.firestore,e,this._query)}}class gt extends bi{constructor(e,n,s){super(e,n,zl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new I(e))}withConverter(e){return new gt(this.firestore,e,this._path)}}function po(t,e,...n){if(t=Be(t),Rc("collection","path",e),t instanceof _i){const s=Z.fromString(e,...n);return $a(s),new gt(t,null,s)}{if(!(t instanceof qe||t instanceof gt))throw new A(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Z.fromString(e,...n));return $a(s),new gt(t.firestore,null,s)}}function yo(t,e,...n){if(t=Be(t),arguments.length===1&&(e=Nl.R()),Rc("doc","path",e),t instanceof _i){const s=Z.fromString(e,...n);return Ba(s),new qe(t,null,new I(s))}{if(!(t instanceof qe||t instanceof gt))throw new A(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Z.fromString(e,...n));return Ba(s),new qe(t.firestore,t instanceof gt?t.converter:null,new I(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=Nl.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{k("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(k("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ho(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function cy(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await fc(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function hy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dy(t);k("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Va(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Va(e.remoteStore,r)),t.onlineComponents=e}async function dy(t){return t.offlineComponents||(k("FirestoreClient","Using default OfflineComponentProvider"),await cy(t,new iy)),t.offlineComponents}async function Dc(t){return t.onlineComponents||(k("FirestoreClient","Using default OnlineComponentProvider"),await hy(t,new ry)),t.onlineComponents}function fy(t){return Dc(t).then(e=>e.syncEngine)}async function my(t){const e=await Dc(t),n=e.eventManager;return n.onListen=Kp.bind(null,e.syncEngine),n.onUnlisten=Qp.bind(null,e.syncEngine),n}function gy(t,e,n={}){const s=new mt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const l=new uy({next:f=>{r.enqueueAndForget(()=>Fp(i,c)),f.fromCache&&a.source==="server"?u.reject(new A(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),c=new Bp(o,l,{includeMetadataChanges:!0,Nu:!0});return Vp(i,c)}(await my(t),t.asyncQueue,e,n,s)),s.promise}class py{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new gc(this,"async_queue_retry"),this.Wc=()=>{const n=Gi();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Gi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Gi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new mt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!as(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw rt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=co.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&N()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class ds extends _i{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new py,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Lc(this),this._firestoreClient.terminate()}}function yy(t,e){const n=typeof t=="object"?t:su(),s=typeof t=="string"?t:e||"(default)",i=tu(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=nu("firestore");r&&ay(i,...r)}return i}function Nc(t){return t._firestoreClient||Lc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Lc(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new jm(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ly(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(Ce.fromBase64String(e))}catch(n){throw new A(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hn(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=/^__.*__$/;class wy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Tt(e,this.data,this.fieldMask,n,this.fieldTransforms):new us(e,this.data,n,this.fieldTransforms)}}class Oc{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Tt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Mc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw N()}}class So{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new So(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ys(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Mc(this.sa)&&vy.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Sy{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Si(e)}da(e,n,s,i=!1){return new So({sa:e,methodName:n,fa:s,path:Ee.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Pc(t){const e=t._freezeSettings(),n=Si(t._databaseId);return new Sy(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ty(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);To("Data must be an object, but it was:",o,s);const a=Vc(s,o);let u,l;if(r.merge)u=new Ue(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const f of r.mergeFields){const m=Sr(e,f,n);if(!o.contains(m))throw new A(p.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Uc(c,m)||c.push(m)}u=new Ue(c),l=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,l=o.fieldTransforms;return new wy(new Ne(a),u,l)}class ki extends vo{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ki}}function Ey(t,e,n,s){const i=t.da(1,e,n);To("Data must be an object, but it was:",i,s);const r=[],o=Ne.empty();Ft(s,(u,l)=>{const c=Eo(e,u,n);l=Be(l);const f=i.ca(c);if(l instanceof ki)r.push(c);else{const m=Ii(l,f);m!=null&&(r.push(c),o.set(c,m))}});const a=new Ue(r);return new Oc(o,a,i.fieldTransforms)}function _y(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Sr(e,s,n)],u=[i];if(r.length%2!=0)throw new A(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)a.push(Sr(e,r[m])),u.push(r[m+1]);const l=[],c=Ne.empty();for(let m=a.length-1;m>=0;--m)if(!Uc(l,a[m])){const d=a[m];let g=u[m];g=Be(g);const T=o.ca(d);if(g instanceof ki)l.push(d);else{const v=Ii(g,T);v!=null&&(l.push(d),c.set(d,v))}}const f=new Ue(l);return new Oc(c,f,o.fieldTransforms)}function Ii(t,e){if(Fc(t=Be(t)))return To("Unsupported field value:",e,t),Vc(t,e);if(t instanceof vo)return function(n,s){if(!Mc(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ii(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hg(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ce.fromDate(n);return{timestampValue:Ws(s.yt,i)}}if(n instanceof ce){const i=new ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ws(s.yt,i)}}if(n instanceof wo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hn)return{bytesValue:ac(s.yt,n._byteString)};if(n instanceof qe){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:no(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${go(n)}`)}(t,e)}function Vc(t,e){const n={};return Ll(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ft(t,(s,i)=>{const r=Ii(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Fc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ce||t instanceof wo||t instanceof hn||t instanceof qe||t instanceof vo)}function To(t,e,n){if(!Fc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=go(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Sr(t,e,n){if((e=Be(e))instanceof Ci)return e._internalPath;if(typeof e=="string")return Eo(t,e);throw Ys("Field path arguments must be of type string or ",t,!1,void 0,n)}const by=new RegExp("[~\\*/\\[\\]]");function Eo(t,e,n){if(e.search(by)>=0)throw Ys(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ci(...e.split("."))._internalPath}catch{throw Ys(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ys(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new A(p.INVALID_ARGUMENT,a+t+u)}function Uc(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Cy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Cy extends qc{data(){return super.data()}}function Bc(t,e){return typeof e=="string"?Eo(t,e):e instanceof Ci?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Iy{convertValue(e,n="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(on(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw N()}}convertObject(e,n){const s={};return Ft(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new wo(ae(e.latitude),ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ml(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp($n(e));default:return null}}convertTimestamp(e){const n=yt(e);return new ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Z.fromString(e);Y(dc(s));const i=new Bn(s.get(1),s.get(3)),r=new I(s.popFirst(5));return i.isEqual(n)||rt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xy extends qc{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Bc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ns extends xy{data(e={}){return super.data(e)}}class Ry{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Is(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ns(this._firestore,this._userDataWriter,s.key,s,new Is(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Ns(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Is(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ns(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Is(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:Dy(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Dy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return N()}}class Ny extends Iy{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function $c(t){t=Pt(t,bi);const e=Pt(t.firestore,ds),n=Nc(e),s=new Ny(e);return ky(t._query),gy(n,t._query).then(i=>new Ry(e,s,t,i))}function Ly(t,e,n,...s){t=Pt(t,qe);const i=Pt(t.firestore,ds),r=Pc(i);let o;return o=typeof(e=Be(e))=="string"||e instanceof Ci?_y(r,"updateDoc",t._key,e,n,s):Ey(r,"updateDoc",t._key,e),_o(i,[o.toMutation(t._key,ze.exists(!0))])}function Oy(t){return _o(Pt(t.firestore,ds),[new to(t._key,ze.none())])}function My(t,e){const n=Pt(t.firestore,ds),s=yo(t),i=Ay(t.converter,e);return _o(n,[Ty(Pc(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,ze.exists(!1))]).then(()=>s)}function _o(t,e){return function(n,s){const i=new mt;return n.asyncQueue.enqueueAndForget(async()=>Wp(await fy(n),s,i)),i.promise}(Nc(t),e)}(function(t,e=!0){(function(n){gn=n})(eu),Ja(new Za("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new ds(new Nm(n.getProvider("auth-internal")),new Pm(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bn(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ls(ga,"3.8.0",t),Ls(ga,"3.8.0","esm2017")})();const fs=yy(Wh),Hy=async()=>{const t=po(fs,"products");return(await $c(t)).docs.map(s=>({id:s.id,...s.data()}))},Ky=async t=>{await My(po(fs,"products"),t),Er.create({message:"Product added successfylly",position:"top",color:"positive"})},Gy=async t=>{t&&(await Oy(yo(fs,"products",t)),Er.create({message:"Product deleted successfylly",position:"top",color:"positive"}))},Qy=async t=>{if(t.docId){const e=yo(fs,"products",t.docId);Ly(e,t.product).then(()=>{Er.create({message:"Product updated successfylly",position:"top",color:"positive"})}).catch(n=>{console.log(n)})}},Wy=async()=>{const t=po(fs,"categories");return(await $c(t)).docs.map(s=>({id:s.id,...s.data()}))};export{qy as Q,Zh as a,$y as b,Uy as c,sd as d,Gy as e,Hy as f,jy as g,By as h,Ky as i,Wy as j,Qy as k,zy as r,Jh as u};
