import{aa as c,ad as p,a as r,af as f,ag as g,ah as i,aj as a,ai as o,bp as d,am as _,ao as h,bv as y}from"./index.c2641ef6.js";import{Q as v}from"./QForm.d7ca857d.js";import{Q as w}from"./QPage.524eddd0.js";const b={style:{"flex-direction":"column"},class:"page q-pa-md row items-center justify-center"},x=a("h6",{style:{margin:"0","font-size":"1.4rem","font-weight":"400"},class:"text-grey-3"}," Login ",-1),q={class:"wrapper q-my-lg q-mx-md q-pa-lg"},V={class:"inner-container q-pa-sm"},Q={class:"q-pa-md",style:{"max-width":"400px","margin-inline":"auto",overflow:"hidden"}},U=c({__name:"LoginPage",setup(P){const u=p(),l=r("anonymous user"),n=r("random password"),m=async()=>{y(u).then(()=>{}).catch(t=>{const s=t.code,e=t.message;console.error({errorCode:s,errorMessage:e})})};return(t,s)=>(f(),g(w,null,{default:i(()=>[a("div",b,[x,a("div",q,[a("div",V,[a("div",Q,[o(v,{onSubmit:h(m,["prevent"]),class:"q-gutter-md form"},{default:i(()=>[o(d,{filled:"",modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=e=>l.value=e),autocomplete:"off",label:"Username","lazy-rules":"",rules:[e=>e&&e.length>0||"This field is required"]},null,8,["modelValue","rules"]),o(d,{filled:"",type:"password",modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e),autocomplete:"off",label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"This field is required",e=>e.length>6||"Password must be more than 6 chars"]},null,8,["modelValue","rules"]),o(_,{style:{"text-transform":"capitalize"},label:"Login",color:"positive",class:"submit-btn",type:"submit"})]),_:1},8,["onSubmit"])])])])])]),_:1}))}});export{U as default};
