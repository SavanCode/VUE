webpackJsonp([12],{IaAF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("woOf"),a=n.n(i),o=n("devH"),l=n("yt7g"),s={data:function(){return{editing:null,listData:[],page:{total:0,pageSize:20,currentPage:1}}},created:function(){this.getAdminList()},methods:{getAdminList:function(){var t=this;o.a.list(a()({page:{current:this.page.currentPage,size:this.page.pageSize}},this.query)).then(function(e){var n=e.data;t.page.total=n.total,t.listData=n.records}).catch(function(){}).finally(function(){t.loading=!1})},saveRow:function(t,e){var n=this;console.log(e),o.a.update(e).then(function(){n.editing=null,n.getAdminList(),Object(l.b)()}).catch(function(t){console.log(t)}).finally(function(){})},update:function(t,e){this.editing=t},cancelUpdate:function(t,e){this.editing=null},del:function(t,e){var n=this;console.log(t,e),this.$confirm("是否删除该条数据？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return n.listData.splice(t,1),Object(l.b)(),o.a.delete(e.Admin_id)}).then(function(){n.getList(n.page),Object(l.b)()}).catch(function(){})},addRow:function(){},currentChange:function(t){console.log("currentChange"),this.page.currentPage=t},sizeChange:function(t){console.log("sizeChange"),this.page.pageSize=t,this.getAdminList()}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-col",{attrs:{span:24}},[n("base-card",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listData,border:""}},[n("el-table-column",{attrs:{fixed:"",prop:"Admin_id",label:"员工编号"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Admin_name",label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.editing===e.$index?n("el-input",{staticStyle:{"text-align":"center"},attrs:{size:"small","controls-position":"right"},model:{value:e.row.Admin_name,callback:function(n){t.$set(e.row,"Admin_name",n)},expression:"scope.row.Admin_name"}}):n("span",[t._v(t._s(e.row.Admin_name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"Admin_password",label:"员工账号密码"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.editing===e.$index?n("el-input",{staticStyle:{"text-align":"center"},attrs:{size:"small","controls-position":"right"},model:{value:e.row.Admin_password,callback:function(n){t.$set(e.row,"Admin_password",n)},expression:"scope.row.Admin_password"}}):n("span",[t._v(t._s(e.row.Admin_password))])]}}])}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"medium"},nativeOn:{click:function(n){return n.preventDefault(),t.saveRow(e.$index,e.row)}}},[t._v("\n       保存\n      ")]),t._v(" "),null===t.editing?n("el-button",{attrs:{type:"text",size:"medium"},nativeOn:{click:function(n){return n.preventDefault(),t.update(e.$index,e.row)}}},[t._v("编辑")]):n("el-button",{attrs:{type:"text",size:"medium"},nativeOn:{click:function(e){return e.preventDefault(),t.cancelUpdate()}}},[t._v("取消编辑")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"medium"},nativeOn:{click:function(n){return n.preventDefault(),t.del(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)],1)},staticRenderFns:[]},c=n("VU/8")(s,r,!1,null,null,null);e.default=c.exports},devH:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("zFqy"),a={add:function(t){return Object(i.a)({url:"adminList_api/admin/adminList/add",method:"post",data:t})},delete:function(t){return Object(i.a)({url:"adminList_api/admin/adminList/delete/"+t,method:"post"})},update:function(t){return Object(i.a)({url:"adminList_api/admin/adminList/update",method:"post",data:t})},list:function(t){return Object(i.a)({url:"adminList_api/admin/adminList/list",method:"post",data:t})}}}});
//# sourceMappingURL=12.a926b9db9be0c66b5124.js.map