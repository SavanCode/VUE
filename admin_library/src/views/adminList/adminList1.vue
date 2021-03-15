
<template>
    <el-col :span="24">
        <base-card>
        <!--@row-click="handleRowClick"-->
          <avue-crud ref="crud" :option="option" :page="page" :data="listData" @row-update="addUpdate" @size-change="sizeChange"  @current-change="currentChange">
          </avue-crud>
        </base-card>
    </el-col>
</template>

<script>
import {adminListApi} from '@/api/adminList' 
import {successMessage} from "@/util/util";

export default {
  data(){
    return {
       listData:[],
       option:{
        addBtn:false,//弹窗
        addRowBtn:true,
        cellBtn:true,
        menuWidth:250,
        column: [{
            label:'员工编号',
            prop: 'Admin_id',
            cell: true,
            disabled: true,
            rules: [
              {
                required: false,
                message: '请输入ID',
                trigger: 'blur'
              }
            ]
        },{
            label:'姓名',
            prop: 'Admin_name',
            cell: true,
            rules: [
              {
                required: true,
                message: '请输入姓名',
                trigger: 'blur'
              }
            ]
        },{
            label:'员工账号密码',
            prop: 'Admin_password',
            cell: true,
            rules: [
              {
                required: true,
                message: '请输入员工密码',
                trigger: 'blur'
              }
            ]
        }]
      },
      loading: true,
        page: {
            total: 0,
            pageSize: 20,
            currentPage: 1
        }
    }
  },
  created() {
      this.getAdminList(); 
  },
  methods:{
    getAdminList(){
      this.loading = true;
        adminListApi.list(Object.assign({
            page: {
                current: this.page.currentPage,
                size: this.page.pageSize
            }
        }, this.query)).then(res => {
            const data = res.data;
            //console.log(data)
            this.page.total = data.total;
            this.listData = data.records;
        }).catch(() => {
        }).finally(() => {
            this.loading = false;
        }); 
    },
    addUpdate(form,index,done,loading){
      console.log(form,index,done,loading) 
      adminListApi.update(form).then(() => {
          loading();
          this.getList(this.page);
          successMessage();
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
          done();
      });
    },
    addRow() {
      adminListApi.add(form).then(() => {
          loading();
          this.getList(this.page);
          successMessage();
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
          done();
      });
    }, 
    currentChange(page) {
      console.log("currentChange")
        this.page.currentPage = page;
    },
    sizeChange(pageSize) {
      console.log("sizeChange")
        this.page.pageSize = pageSize;
        this.getAdminList()
    },
    // handleRowClick(row, event, column) {
    //     this.$message({
    //       showClose: true,
    //       message: '序号' + row.$index,
    //       type: 'success',
    //     });
    //   }
  }
}
</script>