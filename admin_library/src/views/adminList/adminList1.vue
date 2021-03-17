<!--行内编辑的练习 -->
<template>
  <el-col :span="24">
    <base-card> 
      <el-table :data="listData" border style="width: 100%">
        <el-table-column fixed prop="Admin_id" label="员工编号">
          <!-- <template slot-scope="scope">
            <el-input
            v-if="editing === scope.$index "
              size="small"
              style="text-align:center"
              v-model="scope.row.Admin_id"
              controls-position="right"
            ></el-input>
             <span v-else>{{scope.row.Admin_id}}</span>
          </template> -->
        </el-table-column> 
        <el-table-column prop="Admin_name" label="姓名"> 
          <template slot-scope="scope">
            <el-input
             v-if="editing === scope.$index "
              size="small"
              style="text-align:center"
              v-model="scope.row.Admin_name"
              controls-position="right"
            ></el-input>
            <span v-else>{{scope.row.Admin_name}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="Admin_password" label="员工账号密码">
          <template slot-scope="scope">
            <el-input
             v-if="editing === scope.$index "
              size="small"
              style="text-align:center"
              v-model="scope.row.Admin_password"
              controls-position="right"
            ></el-input>
            <span v-else>{{scope.row.Admin_password}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          
          <template slot-scope="scope">
            <el-button @click.native.prevent="saveRow(scope.$index, scope.row)" type="text" size="medium">
         保存
        </el-button>
            <el-button v-if="editing===null" @click.native.prevent="update(scope.$index, scope.row)" type="text" size="medium"
              >编辑</el-button
            >
            <el-button v-else @click.native.prevent="cancelUpdate()" type="text" size="medium"
              >取消编辑</el-button
            >
            <el-button @click.native.prevent="del(scope.$index, scope.row)" type="text" size="medium"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </base-card>
  </el-col>
</template>

<script>
import { adminListApi } from "@/api/adminList";
import { successMessage } from "@/util/util";

export default {
  data() {
    return {
      editing:null,
      listData: [], 
      page: {
        total: 0,
        pageSize: 20,
        currentPage: 1
      }
    };
  },
  created() {
    this.getAdminList();
  }, 
  methods: {
    getAdminList() { 
      adminListApi
        .list(
          Object.assign(
            {
              page: {
                current: this.page.currentPage,
                size: this.page.pageSize
              }
            },
            this.query
          )
        )
        .then(res => {
          const data = res.data;
          //console.log(data)
          this.page.total = data.total;
          this.listData = data.records;
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    saveRow(index, row){
      console.log(row)
       adminListApi.update(row).then(() => {
         this.editing=null; 
          this.getAdminList();
          successMessage();
      }).catch((error) => {
        console.log(error)
      }).finally(() => { 
      });
    },
    update(index, row){
      this.editing=index;
    },
    cancelUpdate(index, row){
      this.editing=null;
    },
    del(index, row){
      console.log(index,row)
      this.$confirm('是否删除该条数据？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => { 
          this.listData.splice(index,1)
          successMessage();
          return adminListApi.delete(row.Admin_id);
      }).then(() => {
          this.getList(this.page);
          successMessage();
      }).catch(() => {
      });
    }, 
    addRow() {
      // adminListApi.add(form).then(() => {
      //     loading();
      //     this.getList(this.page);
      //     successMessage();
      // }).catch((error) => {
      //   console.log(error)
      // }).finally(() => {
      //     done();
      // });
    },
    currentChange(page) {
      console.log("currentChange");
      this.page.currentPage = page;
    },
    sizeChange(pageSize) {
      console.log("sizeChange");
      this.page.pageSize = pageSize;
      this.getAdminList();
    }
    // handleRowClick(row, event, column) {
    //     this.$message({
    //       showClose: true,
    //       message: '序号' + row.$index,
    //       type: 'success',
    //     });
    //   }
  }
};
</script>
