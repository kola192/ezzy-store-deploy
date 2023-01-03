import{d as M,B as ie,az as Ot,C as se,aA as Ft,D as v,h as r,$ as Lt,g as H,a0 as Vt,S as ke,a9 as Nt,a5 as Be,a as F,w as N,aB as Ye,o as J,G as Qt,F as At,e as Ze,j as Mt,l as je,H as Te,aC as Et,aD as jt,aE as It,aF as Ie,aG as xe,aH as ze,aI as zt,f as et,aJ as Ht,aK as we,aL as G,am as z,aM as tt,aa as $e,af as W,ag as lt,ah as O,ai as T,aN as He,aO as Ut,ae as Gt,ap as qe,as as pe,au as Kt,at as Wt,aq as Ce,aP as Jt,ab as at,an as Ue,aj as Re,aQ as Xt}from"./index.c2641ef6.js";import{Q as Yt}from"./QPage.524eddd0.js";import{Q as nt}from"./QList.83508657.js";import{u as Zt,a as el,c as ot,Q as tl,g as ll,b as al,r as nl,d as Pe,e as ol}from"./database.654f3bcd.js";import{Q as Ge,a as Ke,u as rl}from"./headerTitle.bb2329f8.js";import{_ as rt}from"./plugin-vue_export-helper.21dcd24c.js";import{u as il}from"./product.c9ba9c26.js";import"./firebaseConnection.7f6c57da.js";var sl=M({name:"QInnerLoading",props:{...ie,...Ot,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:a}){const n=H(),d=se(e,n.proxy.$q),{transitionProps:o,transitionStyle:f}=Ft(e),s=v(()=>"q-inner-loading absolute-full column flex-center"+(d.value===!0?" q-inner-loading--dark":"")),i=v(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function u(){const l=[r(Vt,{size:e.size,color:e.color})];return e.label!==void 0&&l.push(r("div",{class:i.value,style:e.labelStyle},[e.label])),l}function g(){return e.showing===!0?r("div",{class:s.value,style:f.value},a.default!==void 0?a.default():u()):null}return()=>r(Lt,o.value,g)}}),ul=M({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:n}){const d=H(),{proxy:{$q:o}}=d,f=s=>{n("click",s)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},ke(a.default));let s,i;const u=d.vnode.key;if(u){if(s=e.props.colsMap[u],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const l=s.align==="right"?"unshift":"push";i=Nt(a.default,[]),i[l](r(Be,{class:s.__iconClass,name:o.iconSet.table.arrowUp}))}else i=ke(a.default);const g={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:l=>{s.sortable===!0&&e.props.sort(s),f(l)}};return r("th",g,i)}}});const cl=["horizontal","vertical","cell","none"];var dl=M({name:"QMarkupTable",props:{...ie,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>cl.includes(e)}},setup(e,{slots:a}){const n=H(),d=se(e,n.proxy.$q),o=v(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:o.value},[r("table",{class:"q-table"},ke(a.default))])}});function it(e,a){return r("div",e,[r("table",{class:"q-table"},a)])}const vl={list:nt,table:dl},fl=["list","table","__qtable"];var gl=M({name:"QVirtualScroll",props:{...Zt,type:{type:String,default:"list",validator:e=>fl.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:n}){let d;const o=F(null),f=v(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:i,padVirtualScroll:u,onVirtualScrollEvt:g}=el({virtualScrollLength:f,getVirtualScrollTarget:x,getVirtualScrollEl:P}),l=v(()=>{if(f.value===0)return[];const k=(p,C)=>({index:s.value.from+C,item:p});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(k):e.itemsFn(s.value.from,s.value.to-s.value.from).map(k)}),b=v(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),q=v(()=>e.scrollTarget!==void 0?{}:{tabindex:0});N(f,()=>{i()}),N(()=>e.scrollTarget,()=>{S(),_()});function P(){return o.value.$el||o.value}function x(){return d}function _(){d=Mt(P(),e.scrollTarget),d.addEventListener("scroll",g,je.passive)}function S(){d!==void 0&&(d.removeEventListener("scroll",g,je.passive),d=void 0)}function w(){let k=u(e.type==="list"?"div":"tbody",l.value.map(a.default));return a.before!==void 0&&(k=a.before().concat(k)),Te(a.after,k)}return Ye(()=>{i()}),J(()=>{_()}),Qt(()=>{_()}),At(()=>{S()}),Ze(()=>{S()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?it({ref:o,class:"q-table__middle "+b.value},w()):r(vl[e.type],{...n,ref:o,class:[n.class,b.value],...q.value},w)}}});const bl={xs:2,sm:4,md:6,lg:10,xl:14};function We(e,a,n){return{transform:a===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var ml=M({name:"QLinearProgress",props:{...ie,...Et,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:n}=H(),d=se(e,n.$q),o=jt(e,bl),f=v(()=>e.indeterminate===!0||e.query===!0),s=v(()=>e.reverse!==e.query),i=v(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),u=v(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),g=v(()=>We(e.buffer!==void 0?e.buffer:1,s.value,n.$q)),l=v(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=v(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${l.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),q=v(()=>We(f.value===!0?1:e.value,s.value,n.$q)),P=v(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${l.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),x=v(()=>({width:`${e.value*100}%`})),_=v(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${l.value}`);return()=>{const S=[r("div",{class:b.value,style:g.value}),r("div",{class:P.value,style:q.value})];return e.stripe===!0&&f.value===!1&&S.push(r("div",{class:_.value,style:x.value})),r("div",{class:u.value,style:i.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Te(a.default,S))}}});let K=0;const yl={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Sl=["update:fullscreen","fullscreen"];function hl(){const e=H(),{props:a,emit:n,proxy:d}=e;let o,f,s;const i=F(!1);It(e)===!0&&N(()=>d.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&l()}),N(()=>a.fullscreen,b=>{i.value!==b&&u()}),N(i,b=>{n("update:fullscreen",b),n("fullscreen",b)});function u(){i.value===!0?l():g()}function g(){i.value!==!0&&(i.value=!0,s=d.$el.parentNode,s.replaceChild(f,d.$el),document.body.appendChild(d.$el),K++,K===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:l},Ie.add(o))}function l(){i.value===!0&&(o!==void 0&&(Ie.remove(o),o=void 0),s.replaceChild(d.$el,f),i.value=!1,K=Math.max(0,K-1),K===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return Ye(()=>{f=document.createElement("span")}),J(()=>{a.fullscreen===!0&&g()}),Ze(l),Object.assign(d,{toggleFullscreen:u,setFullscreen:g,exitFullscreen:l}),{inFullscreen:i,toggleFullscreen:u}}function _l(e,a){return new Date(e)-new Date(a)}const wl={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function ql(e,a,n,d){const o=v(()=>{const{sortBy:i}=a.value;return i&&n.value.find(u=>u.name===i)||null}),f=v(()=>e.sortMethod!==void 0?e.sortMethod:(i,u,g)=>{const l=n.value.find(P=>P.name===u);if(l===void 0||l.field===void 0)return i;const b=g===!0?-1:1,q=typeof l.field=="function"?P=>l.field(P):P=>P[l.field];return i.sort((P,x)=>{let _=q(P),S=q(x);return _==null?-1*b:S==null?1*b:l.sort!==void 0?l.sort(_,S,P,x)*b:xe(_)===!0&&xe(S)===!0?(_-S)*b:ze(_)===!0&&ze(S)===!0?_l(_,S)*b:typeof _=="boolean"&&typeof S=="boolean"?(_-S)*b:([_,S]=[_,S].map(w=>(w+"").toLocaleString().toLowerCase()),_<S?-1*b:_===S?0:b)})});function s(i){let u=e.columnSortOrder;if(zt(i)===!0)i.sortOrder&&(u=i.sortOrder),i=i.name;else{const b=n.value.find(q=>q.name===i);b!==void 0&&b.sortOrder&&(u=b.sortOrder)}let{sortBy:g,descending:l}=a.value;g!==i?(g=i,l=u==="da"):e.binaryStateSort===!0?l=!l:l===!0?u==="ad"?g=null:l=!1:u==="ad"?l=!0:g=null,d({sortBy:g,descending:l,page:1})}return{columnToSort:o,computedSortMethod:f,sort:s}}const Cl={filter:[String,Object],filterMethod:Function};function Pl(e,a){const n=v(()=>e.filterMethod!==void 0?e.filterMethod:(d,o,f,s)=>{const i=o?o.toLowerCase():"";return d.filter(u=>f.some(g=>{const l=s(g,u)+"";return(l==="undefined"||l==="null"?"":l.toLowerCase()).indexOf(i)!==-1}))});return N(()=>e.filter,()=>{et(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function kl(e,a){for(const n in a)if(a[n]!==e[n])return!1;return!0}function Je(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const xl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function pl(e,a){const{props:n,emit:d}=e,o=F(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length>0?n.rowsPerPageOptions[0]:5},n.pagination)),f=v(()=>{const l=n["onUpdate:pagination"]!==void 0?{...o.value,...n.pagination}:o.value;return Je(l)}),s=v(()=>f.value.rowsNumber!==void 0);function i(l){u({pagination:l,filter:n.filter})}function u(l={}){et(()=>{d("request",{pagination:l.pagination||f.value,filter:l.filter||n.filter,getCellValue:a})})}function g(l,b){const q=Je({...f.value,...l});if(kl(f.value,q)===!0){s.value===!0&&b===!0&&i(q);return}if(s.value===!0){i(q);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?d("update:pagination",q):o.value=q}return{innerPagination:o,computedPagination:f,isServerSide:s,requestServerInteraction:u,setPagination:g}}function Rl(e,a,n,d,o,f){const{props:s,emit:i,proxy:{$q:u}}=e,g=v(()=>d.value===!0?n.value.rowsNumber||0:f.value),l=v(()=>{const{page:C,rowsPerPage:$}=n.value;return(C-1)*$}),b=v(()=>{const{page:C,rowsPerPage:$}=n.value;return C*$}),q=v(()=>n.value.page===1),P=v(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(g.value/n.value.rowsPerPage))),x=v(()=>b.value===0?!0:n.value.page>=P.value),_=v(()=>(s.rowsPerPageOptions.includes(a.value.rowsPerPage)?s.rowsPerPageOptions:[a.value.rowsPerPage].concat(s.rowsPerPageOptions)).map($=>({label:$===0?u.lang.table.allRows:""+$,value:$})));N(P,(C,$)=>{if(C===$)return;const A=n.value.page;C&&!A?o({page:1}):C<A&&o({page:C})});function S(){o({page:1})}function w(){const{page:C}=n.value;C>1&&o({page:C-1})}function k(){const{page:C,rowsPerPage:$}=n.value;b.value>0&&C*$<g.value&&o({page:C+1})}function p(){o({page:P.value})}return s["onUpdate:pagination"]!==void 0&&i("update:pagination",{...n.value}),{firstRowIndex:l,lastRowIndex:b,isFirstPage:q,isLastPage:x,pagesNumber:P,computedRowsPerPageOptions:_,computedRowsNumber:g,firstPage:S,prevPage:w,nextPage:k,lastPage:p}}const Bl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Tl=["update:selected","selection"];function $l(e,a,n,d){const o=v(()=>{const x={};return e.selected.map(d.value).forEach(_=>{x[_]=!0}),x}),f=v(()=>e.selection!=="none"),s=v(()=>e.selection==="single"),i=v(()=>e.selection==="multiple"),u=v(()=>n.value.length>0&&n.value.every(x=>o.value[d.value(x)]===!0)),g=v(()=>u.value!==!0&&n.value.some(x=>o.value[d.value(x)]===!0)),l=v(()=>e.selected.length);function b(x){return o.value[x]===!0}function q(){a("update:selected",[])}function P(x,_,S,w){a("selection",{rows:_,added:S,keys:x,evt:w});const k=s.value===!0?S===!0?_:[]:S===!0?e.selected.concat(_):e.selected.filter(p=>x.includes(d.value(p))===!1);a("update:selected",k)}return{hasSelectionMode:f,singleSelection:s,multipleSelection:i,allRowsSelected:u,someRowsSelected:g,rowsSelectedNumber:l,isRowSelected:b,clearSelection:q,updateSelection:P}}function Xe(e){return Array.isArray(e)?e.slice():[]}const Dl={expanded:Array},Ol=["update:expanded"];function Fl(e,a){const n=F(Xe(e.expanded));N(()=>e.expanded,s=>{n.value=Xe(s)});function d(s){return n.value.includes(s)}function o(s){e.expanded!==void 0?a("update:expanded",s):n.value=s}function f(s,i){const u=n.value.slice(),g=u.indexOf(s);i===!0?g===-1&&(u.push(s),o(u)):g!==-1&&(u.splice(g,1),o(u))}return{isRowExpanded:d,setExpanded:o,updateExpanded:f}}const Ll={visibleColumns:Array};function Vl(e,a,n){const d=v(()=>{if(e.columns!==void 0)return e.columns;const i=e.rows[0];return i!==void 0?Object.keys(i).map(u=>({name:u,label:u.toUpperCase(),field:u,align:xe(i[u])?"right":"left",sortable:!0})):[]}),o=v(()=>{const{sortBy:i,descending:u}=a.value;return(e.visibleColumns!==void 0?d.value.filter(l=>l.required===!0||e.visibleColumns.includes(l.name)===!0):d.value).map(l=>{const b=l.align||"right",q=`text-${b}`;return{...l,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:q+(l.headerClasses!==void 0?" "+l.headerClasses:"")+(l.sortable===!0?" sortable":"")+(l.name===i?` sorted ${u===!0?"sort-desc":""}`:""),__tdStyle:l.style!==void 0?typeof l.style!="function"?()=>l.style:l.style:()=>null,__tdClass:l.classes!==void 0?typeof l.classes!="function"?()=>q+" "+l.classes:P=>q+" "+l.classes(P):()=>q}})}),f=v(()=>{const i={};return o.value.forEach(u=>{i[u.name]=u}),i}),s=v(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(n.value===!0?1:0));return{colList:d,computedCols:o,computedColsMap:f,computedColspan:s}}const re="q-table__bottom row items-center",st={};ot.forEach(e=>{st[e]={}});var Nl=M({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...st,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...ie,...yl,...Ll,...Cl,...xl,...Dl,...Bl,...wl},emits:["request","virtualScroll",...Sl,...Ol,...Tl],setup(e,{slots:a,emit:n}){const d=H(),{proxy:{$q:o}}=d,f=se(e,o),{inFullscreen:s,toggleFullscreen:i}=hl(),u=v(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),g=F(null),l=F(null),b=v(()=>e.grid!==!0&&e.virtualScroll===!0),q=v(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),P=v(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),x=v(()=>P.value+(e.loading===!0?" q-table--loading":""));N(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+P.value,()=>{b.value===!0&&l.value!==null&&l.value.reset()});const{innerPagination:_,computedPagination:S,isServerSide:w,requestServerInteraction:k,setPagination:p}=pl(d,j),{computedFilterMethod:C}=Pl(e,p),{isRowExpanded:$,setExpanded:A,updateExpanded:ue}=Fl(e,n),U=v(()=>{let t=e.rows;if(w.value===!0||t.length===0)return t;const{sortBy:c,descending:m}=S.value;return e.filter&&(t=C.value(t,e.filter,L.value,j)),ft.value!==null&&(t=gt.value(e.rows===t?t.slice():t,c,m)),t}),X=v(()=>U.value.length),Q=v(()=>{let t=U.value;if(w.value===!0)return t;const{rowsPerPage:c}=S.value;return c!==0&&(Z.value===0&&e.rows!==t?t.length>ee.value&&(t=t.slice(0,ee.value)):t=t.slice(Z.value,ee.value)),t}),{hasSelectionMode:E,singleSelection:ut,multipleSelection:De,allRowsSelected:ct,someRowsSelected:Oe,rowsSelectedNumber:ce,isRowSelected:de,clearSelection:dt,updateSelection:Y}=$l(e,n,Q,u),{colList:vt,computedCols:L,computedColsMap:Fe,computedColspan:Le}=Vl(e,S,E),{columnToSort:ft,computedSortMethod:gt,sort:ve}=ql(e,S,vt,p),{firstRowIndex:Z,lastRowIndex:ee,isFirstPage:fe,isLastPage:ge,pagesNumber:te,computedRowsPerPageOptions:bt,computedRowsNumber:le,firstPage:be,prevPage:me,nextPage:ye,lastPage:Se}=Rl(d,_,S,w,p,X),mt=v(()=>Q.value.length===0),yt=v(()=>{const t={};return ot.forEach(c=>{t[c]=e[c]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function St(){b.value===!0&&l.value.reset()}function ht(){if(e.grid===!0)return $t();const t=e.hideHeader!==!0?Me:null;if(b.value===!0){const m=a["top-row"],y=a["bottom-row"],h={default:B=>Ne(B.item,a.body,B.index)};if(m!==void 0){const B=r("tbody",m({cols:L.value}));h.before=t===null?()=>B:()=>[t()].concat(B)}else t!==null&&(h.before=t);return y!==void 0&&(h.after=()=>r("tbody",y({cols:L.value}))),r(gl,{ref:l,class:e.tableClass,style:e.tableStyle,...yt.value,scrollTarget:e.virtualScrollTarget,items:Q.value,type:"__qtable",tableColspan:Le.value,onVirtualScroll:wt},h)}const c=[qt()];return t!==null&&c.unshift(t()),it({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},c)}function _t(t,c){if(l.value!==null){l.value.scrollTo(t,c);return}t=parseInt(t,10);const m=g.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(m!==null){const y=g.value.querySelector(".q-table__middle.scroll"),h=m.offsetTop-e.virtualScrollStickySizeStart,B=h<y.scrollTop?"decrease":"increase";y.scrollTop=h,n("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:B})}}function wt(t){n("virtualScroll",t)}function Ve(){return[r(ml,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Ne(t,c,m){const y=u.value(t),h=de(y);if(c!==void 0)return c(Qe({key:y,row:t,pageIndex:m,__trClass:h?"selected":""}));const B=a["body-cell"],R=L.value.map(D=>{const ne=a[`body-cell-${D.name}`],oe=ne!==void 0?ne:B;return oe!==void 0?oe(Ct({key:y,row:t,pageIndex:m,col:D})):r("td",{class:D.__tdClass(t),style:D.__tdStyle(t)},j(D,t))});if(E.value===!0){const D=a["body-selection"],ne=D!==void 0?D(Pt({key:y,row:t,pageIndex:m})):[r(we,{modelValue:h,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(oe,Dt)=>{Y([y],[t],oe,Dt)}})];R.unshift(r("td",{class:"q-table--col-auto-width"},ne))}const V={key:y,class:{selected:h}};return e.onRowClick!==void 0&&(V.class["cursor-pointer"]=!0,V.onClick=D=>{n("RowClick",D,t,m)}),e.onRowDblclick!==void 0&&(V.class["cursor-pointer"]=!0,V.onDblclick=D=>{n("RowDblclick",D,t,m)}),e.onRowContextmenu!==void 0&&(V.class["cursor-pointer"]=!0,V.onContextmenu=D=>{n("RowContextmenu",D,t,m)}),r("tr",V,R)}function qt(){const t=a.body,c=a["top-row"],m=a["bottom-row"];let y=Q.value.map((h,B)=>Ne(h,t,B));return c!==void 0&&(y=c({cols:L.value}).concat(y)),m!==void 0&&(y=y.concat(m({cols:L.value}))),r("tbody",y)}function Qe(t){return he(t),t.cols=t.cols.map(c=>G({...c},"value",()=>j(c,t.row))),t}function Ct(t){return he(t),G(t,"value",()=>j(t.col,t.row)),t}function Pt(t){return he(t),t}function he(t){Object.assign(t,{cols:L.value,colsMap:Fe.value,sort:ve,rowIndex:Z.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),E.value===!0&&G(t,"selected",()=>de(t.key),(c,m)=>{Y([t.key],[t.row],c,m)}),G(t,"expand",()=>$(t.key),c=>{ue(t.key,c)})}function j(t,c){const m=typeof t.field=="function"?t.field(c):c[t.field];return t.format!==void 0?t.format(m,c):m}const I=v(()=>({pagination:S.value,pagesNumber:te.value,isFirstPage:fe.value,isLastPage:ge.value,firstPage:be,prevPage:me,nextPage:ye,lastPage:Se,inFullscreen:s.value,toggleFullscreen:i}));function kt(){const t=a.top,c=a["top-left"],m=a["top-right"],y=a["top-selection"],h=E.value===!0&&y!==void 0&&ce.value>0,B="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:B},[t(I.value)]);let R;if(h===!0?R=y(I.value).slice():(R=[],c!==void 0?R.push(r("div",{class:"q-table-control"},[c(I.value)])):e.title&&R.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),m!==void 0&&(R.push(r("div",{class:"q-table__separator col"})),R.push(r("div",{class:"q-table__control"},[m(I.value)]))),R.length!==0)return r("div",{class:B},R)}const Ae=v(()=>Oe.value===!0?null:ct.value);function Me(){const t=xt();return e.loading===!0&&a.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:Le.value},Ve())])),r("thead",t)}function xt(){const t=a.header,c=a["header-cell"];if(t!==void 0)return t(_e({header:!0})).slice();const m=L.value.map(y=>{const h=a[`header-cell-${y.name}`],B=h!==void 0?h:c,R=_e({col:y});return B!==void 0?B(R):r(ul,{key:y.name,props:R},()=>y.label)});if(ut.value===!0&&e.grid!==!0)m.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(De.value===!0){const y=a["header-selection"],h=y!==void 0?y(_e({})):[r(we,{color:e.color,modelValue:Ae.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":Ee})];m.unshift(r("th",{class:"q-table--col-auto-width"},h))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},m)]}function _e(t){return Object.assign(t,{cols:L.value,sort:ve,colsMap:Fe.value,color:e.color,dark:f.value,dense:e.dense}),De.value===!0&&G(t,"selected",()=>Ae.value,Ee),t}function Ee(t){Oe.value===!0&&(t=!1),Y(Q.value.map(u.value),Q.value,t)}const ae=v(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function pt(){if(e.hideBottom===!0)return;if(mt.value===!0){if(e.hideNoData===!0)return;const m=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,y=a["no-data"],h=y!==void 0?[y({message:m,icon:o.iconSet.table.warning,filter:e.filter})]:[r(Be,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),m];return r("div",{class:re+" q-table__bottom--nodata"},h)}const t=a.bottom;if(t!==void 0)return r("div",{class:re},[t(I.value)]);const c=e.hideSelectedBanner!==!0&&E.value===!0&&ce.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ce.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:re+" justify-end"},Bt(c));if(c.length>0)return r("div",{class:re},c)}function Rt(t){p({page:1,rowsPerPage:t.value})}function Bt(t){let c;const{rowsPerPage:m}=S.value,y=e.paginationLabel||o.lang.table.pagination,h=a.pagination,B=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),B===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r(tl,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:m,options:bt.value,displayValue:m===0?o.lang.table.allRows:m,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":Rt})])),h!==void 0)c=h(I.value);else if(c=[r("span",m!==0?{class:"q-table__bottom-item"}:{},[m?y(Z.value+1,Math.min(ee.value,le.value),le.value):y(1,X.value,le.value)])],m!==0&&te.value>1){const R={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(R.size="sm"),te.value>2&&c.push(r(z,{key:"pgFirst",...R,icon:ae.value[0],disable:fe.value,onClick:be})),c.push(r(z,{key:"pgPrev",...R,icon:ae.value[1],disable:fe.value,onClick:me}),r(z,{key:"pgNext",...R,icon:ae.value[2],disable:ge.value,onClick:ye})),te.value>2&&c.push(r(z,{key:"pgLast",...R,icon:ae.value[3],disable:ge.value,onClick:Se}))}return t.push(r("div",{class:"q-table__control"},c)),t}function Tt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[Me()])]:e.loading===!0&&a.loading===void 0?Ve():void 0;return r("div",{class:"q-table__middle"},t)}function $t(){const t=a.item!==void 0?a.item:c=>{const m=c.cols.map(h=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[h.label]),r("div",{class:"q-table__grid-item-value"},[h.value])]));if(E.value===!0){const h=a["body-selection"],B=h!==void 0?h(c):[r(we,{modelValue:c.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(R,V)=>{Y([c.key],[c.row],R,V)}})];m.unshift(r("div",{class:"q-table__grid-item-row"},B),r(tt,{dark:f.value}))}const y={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(y.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(y.onClick=h=>{n("RowClick",h,c.row,c.pageIndex)}),e.onRowDblclick!==void 0&&(y.onDblclick=h=>{n("RowDblclick",h,c.row,c.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(c.selected===!0?" q-table__grid-item--selected":"")},[r("div",y,m)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},Q.value.map((c,m)=>t(Qe({key:u.value(c),row:c,pageIndex:m}))))}return Object.assign(d.proxy,{requestServerInteraction:k,setPagination:p,firstPage:be,prevPage:me,nextPage:ye,lastPage:Se,isRowSelected:de,clearSelection:dt,isRowExpanded:$,setExpanded:A,sort:ve,resetVirtualScroll:St,scrollTo:_t,getCellValue:j}),Ht(d.proxy,{filteredSortedRows:()=>U.value,computedRows:()=>Q.value,computedRowsNumber:()=>le.value}),()=>{const t=[kt()],c={ref:g,class:x.value};return e.grid===!0?t.push(Tt()):Object.assign(c,{class:[c.class,e.cardClass],style:e.cardStyle}),t.push(ht(),pt()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),r("div",c,t)}}});const Ql=["top","middle","bottom"];var Al=M({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>Ql.includes(e)}},setup(e,{slots:a}){const n=v(()=>e.align!==void 0?{verticalAlign:e.align}:null),d=v(()=>{const o=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(o!==void 0?` text-${o}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>r("div",{class:d.value,style:n.value,role:"status","aria-label":e.label},Te(a.default,e.label!==void 0?[e.label]:[]))}});const Ml=$e({__name:"ProductCard",props:{product:null,columns:null},emits:["onShowCouponDetails","onDelete"],setup(e,{emit:a}){const n=e,d=u=>{a("onShowCouponDetails",u)},o=u=>{a("onDelete",u)},f=F(""),s=v(()=>f.value);J(()=>{const u=n.product.product_image;if(u){const g=u.split("/"),l=g[g.length-1];i(l)}});const i=u=>{const g=ll();al(nl(g,`products/${u}`)).then(l=>{const b=new XMLHttpRequest;b.responseType="blob",b.open("GET",l),b.send(),f.value=l}).catch(l=>{console.error({error:l})})};return(u,g)=>(W(),lt(Jt,null,{default:O(()=>[T(He,{class:"product-image",style:Ut({backgroundImage:"url("+Gt(s)+")"})},null,8,["style"]),T(He,{class:"card-header"},{default:O(()=>[T(Pe,{class:"text-white"},{default:O(()=>[qe("Delete product")]),_:1}),T(Al,{clickable:"",onClick:g[0]||(g[0]=l=>o(e.product)),color:"pink",class:"q-py-xs q-px-md",style:{cursor:"pointer"}},{default:O(()=>[T(Be,{name:"delete",color:"light"})]),_:1})]),_:1}),T(tt),T(nt,{class:"q-py-md",dense:""},{default:O(()=>[(W(!0),pe(Kt,null,Wt(e.columns.filter(l=>l.name==="product_name"||l.name==="product_category"||l.name==="product_price"),l=>(W(),pe("div",{key:l.name},[T(Ge,{style:{"flex-direction":"column"},class:"q-py-sm"},{default:O(()=>[T(Ke,null,{default:O(()=>[T(Pe,null,{default:O(()=>[qe(Ce(l.label),1)]),_:2},1024)]),_:2},1024),T(Ke,null,{default:O(()=>[T(Pe,{caption:"",class:"q-mt-sm",style:{"font-size":"1rem"}},{default:O(()=>[qe(Ce(l.value)+" "+Ce(l.name=="product_price"?"$":""),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),128)),T(Ge,null,{default:O(()=>[T(z,{style:{width:"100%"},class:"q-mt-sm",label:"Edit product'",color:"teal-4",onClick:g[1]||(g[1]=l=>d(e.product))})]),_:1})]),_:1})]),_:1}))}});var El=rt(Ml,[["__scopeId","data-v-fe8b43de"]]);const jl={class:"q-py-md"},Il={class:"q-pa-xs col-xs-12 col-sm-6 col-md-3 col-lg-3 grid-style-transition"},zl=$e({__name:"ProductsList",setup(e){const a=F(),n=il(),d=F([]),o=F(n.getColumns),f=F(""),s=F(!1),i=F({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:100,rowsNumber:10});async function u(w,k,p,C,$){return p?await n.fetchFilteredProducts(p):($&&(C="reverse:"+C),await n.fetchProducts(w,k,C))}async function g(){return await n.fetchProductsCount()}const l=async w=>(await n.fetchFilteredProducts(w)).length;async function b(w){return w?await l(w):await g()}async function q(w){const{page:k,rowsPerPage:p,sortBy:C,descending:$}=w.pagination,A=w.filter;s.value=!0,i.value.rowsNumber=await b(A);const ue=p===0?i.value.rowsNumber:p,U=(k-1)*p,X=await u(U,ue,A,C,$);d.value.splice(0,d.value.length,...X),i.value.page=k,s.value=!1}const P=at(),x=async w=>{P.push({name:"edit-product",query:{product:JSON.stringify(w)}})};J(async()=>{try{q({pagination:i.value,filter:void 0})}catch(w){console.error(w),Ue.create({message:"unexpected error happened",position:"top",color:"pink-8"})}});const _=w=>{Xt.create({title:"Confirm",message:"Do you really want to delete this element",cancel:!0,persistent:!0}).onOk(async()=>{S(w.id)}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},S=w=>{ol(w);try{q({pagination:i.value,filter:void 0})}catch(k){console.error(k),Ue.create({message:"unexpected error happened",position:"top",color:"pink-8"})}};return(w,k)=>(W(),pe("div",jl,[T(Nl,{grid:"",ref_key:"tableRef",ref:a,rows:d.value,columns:o.value,"row-key":"id",pagination:i.value,"onUpdate:pagination":k[2]||(k[2]=p=>i.value=p),loading:s.value,filter:f.value,"binary-state-sort":"",onRequest:q,style:{"min-height":"50vh"}},{loading:O(()=>[T(sl,{showing:"",color:"teal"})]),item:O(p=>[Re("div",Il,[T(El,{onOnDelete:k[0]||(k[0]=C=>_(C)),onOnShowCouponDetails:k[1]||(k[1]=C=>x(C)),product:p.row,columns:p.cols},null,8,["product","columns"])])]),_:1},8,["rows","columns","pagination","loading","filter"])]))}});const Hl={class:"q-py-md"},Ul={class:"q-px-md q-pb-xl"},Gl=$e({__name:"IndexPage",setup(e){const a=rl();J(async()=>{a.setTitle("Products")});const n=at(),d=o=>{n.push({path:o})};return(o,f)=>(W(),lt(Yt,null,{default:O(()=>[Re("main",Hl,[Re("div",Ul,[T(zl)])]),T(z,{class:"btn",fab:"",icon:"add",color:"primary",onClick:f[0]||(f[0]=s=>d("/add-new-product"))})]),_:1}))}});var la=rt(Gl,[["__scopeId","data-v-732227c3"]]);export{la as default};
