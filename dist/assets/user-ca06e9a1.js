import{d as W,b as C,A as R,l as X,O as Z,r as i,o as c,e as f,f as g,n as o,y as n,C as w,z as h,g as l,c as U,F as ee,q as ae,t as te,P as F,m as _,Q as oe,R as le,p as ne,h as se}from"./index-da835352.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";const ie=k=>(ne("data-v-6dacd7f5"),k=k(),se(),k),de={class:"page-view"},ce={class:"table-operations"},me={key:0},ue={key:0},pe={key:1},fe={key:1},_e=["onClick"],ge=ie(()=>g("a",{href:"#",style:{color:"red"}},"Delete",-1)),ve=W({__name:"user",setup(k){const q=C([{title:"No.",dataIndex:"index",key:"index",align:"center"},{title:"Username",dataIndex:"username",key:"username",align:"center"},{title:"Nickname",dataIndex:"nickname",key:"nickname",align:"center"},{title:"Role",dataIndex:"role",key:"role",align:"center"},{title:"Status",dataIndex:"status",key:"status",align:"center",customRender:({text:t,record:a,index:d,column:S})=>t==="0"?"Active":"Inactive"},{title:"E-mail",dataIndex:"email",key:"email",align:"center"},{title:"Phone Number",dataIndex:"mobile",key:"mobile",align:"center"},{title:"Join Time",dataIndex:"create_time",key:"create_time",align:"center"},{title:"Operation",dataIndex:"action",key:"operation",align:"center",fixed:"right",width:140}]);R([]);const r=C({userList:[],loading:!1,currentAdminUserName:"",keyword:"",selectedRowKeys:[],pageSize:10,page:1}),e=C({visile:!1,editFlag:!1,title:"",roleData:[{id:"0",title:"Admin"},{id:"1",title:"Parent"}],form:{id:void 0,username:void 0,password:void 0,role:void 0,status:void 0,nickname:void 0,email:void 0,mobile:void 0},rules:{username:[{required:!0,message:"Required",trigger:"change"}],password:[{required:!0,message:"Required",trigger:"change"}],role:[{required:!0,message:"Required",trigger:"change"}],status:[{required:!0,message:"Required",trigger:"change"}]}}),y=R();X(()=>{p()});const p=()=>{r.loading=!0,Z({keyword:r.keyword}).then(t=>{r.loading=!1,console.log(t),t.data.forEach((a,d)=>{a.index=d+1}),r.userList=t.data}).catch(t=>{r.loading=!1,console.log(t)})},D=t=>{var a;r.keyword=(a=t==null?void 0:t.target)==null?void 0:a.value,console.log(r.keyword)},K=()=>{p()},z=R({onChange:(t,a)=>{console.log(`selectedRowKeys: ${t}`,"selectedRows: ",a),r.selectedRowKeys=t}}),E=()=>{I(),e.visile=!0,e.editFlag=!1,e.title="Add New";for(const t in e.form)e.form[t]=void 0},B=t=>{I(),e.visile=!0,e.editFlag=!0,e.title="Edit";for(const a in e.form)e.form[a]=void 0;for(const a in t)e.form[a]=t[a]},L=t=>{console.log("delete",t),F({ids:t.id}).then(a=>{p()}).catch(a=>{_.warn(a.msg||"操作失败")})},O=()=>{if(console.log(r.selectedRowKeys),r.selectedRowKeys.length<=0){console.log("hello"),_.warn("请勾选删除项");return}F({ids:r.selectedRowKeys.join(",")}).then(t=>{_.success("删除成功"),r.selectedRowKeys=[],p()}).catch(t=>{_.warn(t.msg||"操作失败")})},M=()=>{var t;(t=y.value)==null||t.validate().then(()=>{const a=new FormData;e.form.username&&a.append("username",e.form.username),e.form.password&&a.append("password",e.form.password),e.form.nickname&&a.append("nickname",e.form.nickname),e.form.role&&a.append("role",e.form.role),e.form.status&&a.append("status",e.form.status),e.form.cover&&a.append("cover",e.form.cover),e.form.mobile&&a.append("mobile",e.form.mobile),e.form.email&&a.append("email",e.form.email),e.editFlag?oe({id:e.form.id},a).then(d=>{b(),p()}).catch(d=>{console.log(d),_.warn(d.msg||"操作失败")}):le(a).then(d=>{b(),p()}).catch(d=>{console.log(d),_.warn(d.msg||"操作失败")})}).catch(a=>{console.log("不能为空")})},T=()=>{b()},I=()=>{var t;(t=y.value)==null||t.resetFields()},b=()=>{e.visile=!1};return(t,a)=>{const d=i("a-button"),S=i("a-input-search"),V=i("a-space"),$=i("a-divider"),j=i("a-popconfirm"),J=i("a-table"),v=i("a-input"),m=i("a-form-item"),u=i("a-col"),x=i("a-select-option"),P=i("a-select"),Q=i("a-row"),Y=i("a-form"),G=i("a-modal");return c(),f("div",null,[g("div",de,[g("div",ce,[o(V,null,{default:n(()=>[o(d,{type:"primary",onClick:E},{default:n(()=>[w("New")]),_:1}),o(d,{danger:"",onClick:O},{default:n(()=>[w("Mass Delete")]),_:1}),o(S,{"addon-before":"Username","enter-button":"",onSearch:K,onChange:D})]),_:1})]),o(J,{size:"middle",rowKey:"id",loading:l(r).loading,columns:l(q),"data-source":l(r).userList,scroll:{x:"max-content"},"row-selection":l(z),pagination:{size:"default",current:l(r).page,pageSize:l(r).pageSize,onChange:s=>l(r).page=s,showSizeChanger:!1,showTotal:s=>`Total of ${s} data`}},{bodyCell:n(({text:s,record:A,index:we,column:N})=>[N.key==="role"?(c(),f("span",me,[s==="0"?(c(),f("span",ue,"Admin")):h("",!0),s==="1"?(c(),f("span",pe,"Parent")):h("",!0)])):h("",!0),N.key==="operation"?(c(),f("span",fe,[g("a",{onClick:H=>B(A)},"Edit",8,_e),o($,{type:"vertical"}),o(j,{title:"Sure to delete?","ok-text":"Yes","cancel-text":"No",onConfirm:H=>L(A)},{default:n(()=>[ge]),_:2},1032,["onConfirm"])])):h("",!0)]),_:1},8,["loading","columns","data-source","row-selection","pagination"])]),g("div",null,[o(G,{visible:l(e).visile,forceRender:!0,title:l(e).title,"ok-text":"OK","cancel-text":"Cancel",onCancel:T,onOk:M},{default:n(()=>[g("div",null,[o(Y,{ref_key:"myform",ref:y,"label-col":{style:{width:"80px"}},model:l(e).form,rules:l(e).rules},{default:n(()=>[o(Q,{gutter:24},{default:n(()=>[o(u,{span:"24"},{default:n(()=>[o(m,{label:"Username",name:"username"},{default:n(()=>[o(v,{disabled:l(e).editFlag,placeholder:"Please enter",value:l(e).form.username,"onUpdate:value":a[0]||(a[0]=s=>l(e).form.username=s),allowClear:""},null,8,["disabled","value"])]),_:1})]),_:1}),l(e).editFlag?h("",!0):(c(),U(u,{key:0,span:"24"},{default:n(()=>[o(m,{label:"Password",name:"password"},{default:n(()=>[o(v,{placeholder:"Please enter",type:"password",value:l(e).form.password,"onUpdate:value":a[1]||(a[1]=s=>l(e).form.password=s),allowClear:""},null,8,["value"])]),_:1})]),_:1})),o(u,{span:"24"},{default:n(()=>[o(m,{label:"Nickname",name:"nickname"},{default:n(()=>[o(v,{placeholder:"Please enter",value:l(e).form.nickname,"onUpdate:value":a[2]||(a[2]=s=>l(e).form.nickname=s),allowClear:""},null,8,["value"])]),_:1})]),_:1}),o(u,{span:"24"},{default:n(()=>[o(m,{label:"Role",name:"role"},{default:n(()=>[o(P,{placeholder:"Please select",allowClear:"",value:l(e).form.role,"onUpdate:value":a[3]||(a[3]=s=>l(e).form.role=s)},{default:n(()=>[(c(!0),f(ee,null,ae(l(e).roleData,s=>(c(),U(x,{value:s.id},{default:n(()=>[w(te(s.title),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value"])]),_:1})]),_:1}),o(u,{span:"24"},{default:n(()=>[o(m,{label:"Status",name:"status"},{default:n(()=>[o(P,{placeholder:"Please select",allowClear:"",value:l(e).form.status,"onUpdate:value":a[4]||(a[4]=s=>l(e).form.status=s)},{default:n(()=>[o(x,{key:"0",value:"0"},{default:n(()=>[w("Active")]),_:1}),o(x,{key:"1",value:"1"},{default:n(()=>[w("Inactive")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),o(u,{span:"24"},{default:n(()=>[o(m,{label:"E-mail",name:"email"},{default:n(()=>[o(v,{placeholder:"Please enter",value:l(e).form.email,"onUpdate:value":a[5]||(a[5]=s=>l(e).form.email=s),allowClear:""},null,8,["value"])]),_:1})]),_:1}),o(u,{span:"24"},{default:n(()=>[o(m,{label:"Phone number",name:"mobile"},{default:n(()=>[o(v,{placeholder:"Please enter",value:l(e).form.mobile,"onUpdate:value":a[6]||(a[6]=s=>l(e).form.mobile=s),allowClear:""},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["visible","title"])])])}}});const ye=re(ve,[["__scopeId","data-v-6dacd7f5"]]);export{ye as default};