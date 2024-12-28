import{j as Y,J as x,d as G,b as v,A as C,l as H,r,o as b,e as S,f as c,n,y as s,C as A,z as Q,g as o,w as T,v as D,m,p as W,h as X}from"./index-da835352.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";const ee=async i=>Y({url:"/CSAA/admin/term/list",params:i,data:{},headers:{}}),te=async i=>x({url:"/CSAA/admin/term/create",params:{},data:i,headers:{"Content-Type":"multipart/form-data;charset=utf-8"}}),ae=async(i,u)=>x({url:"/CSAA/admin/term/update",params:i,data:u,headers:{"Content-Type":"multipart/form-data;charset=utf-8"}}),F=async i=>x({url:"/CSAA/admin/term/delete",params:i,headers:{}}),oe=i=>(W("data-v-b419a975"),i=i(),X(),i),ne={class:"page-view"},le={class:"table-operations"},se={key:0},ie=["onClick"],re=oe(()=>c("a",{href:"#",style:{color:"red"}},"Delete",-1)),de=G({__name:"term",setup(i){const u=v([{title:"No.",dataIndex:"index",key:"index",align:"center"},{title:"Term name",dataIndex:"title",key:"title",align:"center"},{title:"Start time",dataIndex:"expect_time",key:"expect_time",align:"center"},{title:"End time",dataIndex:"return_time",key:"return_time",align:"center"},{title:"Operation",dataIndex:"action",key:"operation",align:"center",fixed:"right",width:140}]),l=v({tagList:[],loading:!1,keyword:"",selectedRowKeys:[],pageSize:10,page:1}),t=v({visile:!1,editFlag:!1,title:"",form:{id:void 0,title:void 0,expect_time:void 0,return_time:void 0},rules:{title:[{required:!0,message:"Please enter",trigger:"change"}],expect_time:[{required:!0,message:"Please choose",trigger:"change"}],return_time:[{required:!0,message:"Please choose",trigger:"change"}]}}),f=C();H(()=>{p()});const p=()=>{l.loading=!0,ee({keyword:l.keyword}).then(a=>{l.loading=!1,console.log(a),a.data.forEach((e,_)=>{e.index=_+1,e.expect_time=e.expect_time?e.expect_time.split("T")[0]:"",e.return_time=e.return_time?e.return_time.split("T")[0]:""}),l.tagList=a.data}).catch(a=>{l.loading=!1,console.log(a)})},I=C({onChange:(a,e)=>{console.log(`selectedRowKeys: ${a}`,"selectedRows: ",e),l.selectedRowKeys=a}}),K=()=>{w(),t.visile=!0,t.editFlag=!1,t.title="Add";for(const a in t.form)t.form[a]=void 0},O=a=>{w(),t.visile=!0,t.editFlag=!0,t.title="Edit";for(const e in t.form)t.form[e]=void 0;for(const e in a)t.form[e]=a[e]},R=a=>{console.log("delete",a),F({ids:a.id}).then(e=>{p()}).catch(e=>{m.error(e.msg||"Operation Failed")})},z=()=>{if(console.log(l.selectedRowKeys),l.selectedRowKeys.length<=0){console.log("hello"),m.warn("Select items to delete");return}F({ids:l.selectedRowKeys.join(",")}).then(a=>{m.success("Delete Successful"),l.selectedRowKeys=[],p()}).catch(a=>{m.error(a.msg||"Operation Failed")})},E=()=>{var a;(a=f.value)==null||a.validate().then(()=>{t.editFlag?ae({id:t.form.id},t.form).then(e=>{g(),p()}).catch(e=>{m.error(e.msg||"Operation Failed")}):te(t.form).then(e=>{g(),p()}).catch(e=>{m.error(e.msg||"Operation Failed")})}).catch(e=>{console.log("Cannot be blank")})},N=()=>{g()},w=()=>{var a;(a=f.value)==null||a.resetFields()},g=()=>{t.visile=!1};return(a,e)=>{const _=r("a-button"),V=r("a-space"),M=r("a-divider"),B=r("a-popconfirm"),L=r("a-table"),P=r("a-input"),h=r("a-form-item"),y=r("a-col"),$=r("a-row"),q=r("a-form"),U=r("a-modal");return b(),S("div",null,[c("div",ne,[c("div",le,[n(V,null,{default:s(()=>[n(_,{type:"primary",onClick:K},{default:s(()=>[A("Add")]),_:1}),n(_,{danger:"",onClick:z},{default:s(()=>[A("Mass Delete")]),_:1})]),_:1})]),n(L,{size:"middle",rowKey:"id",loading:o(l).loading,columns:o(u),"data-source":o(l).tagList,scroll:{x:"max-content"},"row-selection":o(I),pagination:{size:"default",current:o(l).page,pageSize:o(l).pageSize,onChange:d=>o(l).page=d,showSizeChanger:!1,showTotal:d=>`Total of ${d} data`}},{bodyCell:s(({text:d,record:k,index:ce,column:j})=>[j.key==="operation"?(b(),S("span",se,[c("a",{onClick:J=>O(k)},"Edit",8,ie),n(M,{type:"vertical"}),n(B,{title:"Sure to delete?","ok-text":"Yes","cancel-text":"No",onConfirm:J=>R(k)},{default:s(()=>[re]),_:2},1032,["onConfirm"])])):Q("",!0)]),_:1},8,["loading","columns","data-source","row-selection","pagination"])]),c("div",null,[n(U,{visible:o(t).visile,forceRender:!0,title:o(t).title,"ok-text":"OK","cancel-text":"Cancel",onCancel:N,onOk:E},{default:s(()=>[c("div",null,[n(q,{ref_key:"myform",ref:f,"label-col":{style:{width:"120px"}},model:o(t).form,rules:o(t).rules},{default:s(()=>[n($,{gutter:24},{default:s(()=>[n(y,{span:"24"},{default:s(()=>[n(h,{label:"Term name",name:"title"},{default:s(()=>[n(P,{placeholder:"Please enter",value:o(t).form.title,"onUpdate:value":e[0]||(e[0]=d=>o(t).form.title=d)},null,8,["value"])]),_:1})]),_:1}),n(y,{span:"24"},{default:s(()=>[n(h,{label:"Start Date",name:"expect_time"},{default:s(()=>[T(c("input",{type:"date","onUpdate:modelValue":e[1]||(e[1]=d=>o(t).form.expect_time=d)},null,512),[[D,o(t).form.expect_time]])]),_:1})]),_:1}),n(y,{span:"24"},{default:s(()=>[n(h,{label:"End Date",name:"return_time"},{default:s(()=>[T(c("input",{type:"date","onUpdate:modelValue":e[2]||(e[2]=d=>o(t).form.return_time=d)},null,512),[[D,o(t).form.return_time]])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["visible","title"])])])}}});const _e=Z(de,[["__scopeId","data-v-b419a975"]]);export{_e as default};