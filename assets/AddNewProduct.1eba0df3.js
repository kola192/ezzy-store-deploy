import{Q as m}from"./QPage.524eddd0.js";import{_ as u,P as p}from"./ProductForm.a3327890.js";import{g as l,r as g,h as f,b as _,i as P}from"./database.654f3bcd.js";import{u as b}from"./product.c9ba9c26.js";import{u as d}from"./headerTitle.bb2329f8.js";import{aa as h,D as y,o as w,af as T,ag as B,ah as N,ab as v,ai as i,ae as x,aj as R,an as k}from"./index.c2641ef6.js";import"./QForm.d7ca857d.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./firebaseConnection.7f6c57da.js";const j=(c,a)=>{const s=l(),r={contentType:"image/jpeg"},o=g(s,"products/"+a),t=f(o,c,r);t.on("state_changed",e=>{const n=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+n+"% done"),b().uploadImgProgress=n,e.state){}},e=>{switch(e.code){}},()=>{_(t.snapshot.ref).then(e=>{console.log("File available at",e)})})},q={class:"q-mx-md"},L=h({__name:"AddNewProduct",setup(c){const a=y(()=>d().getTitle),s=v();w(()=>{d().setTitle("Add new product")});const r=async o=>{await P(o.product),j(o.file,o.fname),s.push({path:"/"}),k.create({message:"Product added successfully",position:"bottom",color:"positive"})};return(o,t)=>(T(),B(m,{class:"q-my-lg"},{default:N(()=>[i(u,{"page-name":x(a)},null,8,["page-name"]),R("div",q,[i(p,{onOnSubmit:t[0]||(t[0]=e=>r(e)),product:void 0})])]),_:1}))}});export{L as default};
