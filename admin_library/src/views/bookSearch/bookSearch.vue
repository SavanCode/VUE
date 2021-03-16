<template>
    <el-col :span="24">
        <base-card>
        <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="审批人"> 
            <el-input
          placeholder="请输入书本编号"
          v-model="Book_id" 
          clearable>
          </el-input> 
          </el-form-item>
          <el-form-item label="审批人">
         <el-input
          placeholder="请输入书本类型"
          v-model="Type_id"
          clearable></el-input>
          </el-form-item>
          <el-form-item label="审批人">
          <el-input
          placeholder="请输入书本名称"
          v-model="Book_name"
          clearable></el-input>
          </el-form-item>
          <el-form-item label="审批人">
          <el-input
          placeholder="请输入读者名字"
          v-model="Author"
          clearable>
          </el-input>
       
      </el-form-item> 
      </el-form>
          <el-button @click="resetDateFilter">清除日期过滤器</el-button>
          <el-button @click="clearFilter">清除所有过滤器</el-button>
          <el-table
            ref="filterTable"
            :data="listData" 
            style="width: 100%;">
            <el-table-column
              prop="Book_id"
              label="书本编号" 
              width="80"
              fixed
              column-key="Book_id"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="Book_name"
              label="书本名字"
              width="180">
            </el-table-column>
            <el-table-column
              prop="Author"
              label="读者"
               >
            </el-table-column>
            <el-table-column
              prop="Type_id"
              label="书本类型"
               >
            </el-table-column>
              <!-- <template slot-scope="scope">
                <el-tag
                  :type="scope.row.tag === '家' ? 'primary' : 'success'"
                  disable-transitions>{{scope.row.tag}}</el-tag>
              </template> -->
              <el-table-column
              prop="Pub_company"
              label="出版社" 
               >
            </el-table-column>
            <el-table-column
              prop="Brief"
              label="内容摘要"
              >
            </el-table-column>
            <el-table-column
              prop="PUB_DATE"
              label="出版时间"
              type: 'date'
               >
            </el-table-column>
          </el-table>

          <div class="pageBlock"> 
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page.currentPage"
              :page-sizes="[10, 20, 30, 50,100]"
              :page-size="page.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="page.total">
            </el-pagination>
          </div>
        </base-card>
    </el-col>
</template>


<script>
import {bookListApi} from '@/api/book' 
import {dictionaryApi} from '@/api/dictionary'
import {successMessage} from "@/util/util"

export default {
   data() {
      return {
        listData: [],
        Book_id:"",
        Type_id:"",
        Book_name:"",
        Author:"",
        page: {
              total: 0,
              pageSize: 20,
              currentPage: 1
          }
      }
    },
    created() {
      this.getList();  
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      getList() { 
        bookListApi.list(Object.assign({
            page: {
                current: this.page.currentPage,
                size: this.page.pageSize
            }
        }, this.query)).then(res => {
            const data = res.data;
            //console.log(data)
            this.page.currentPage=1;
            this.page.total = data.total;
            this.listData = data.records;
        }).catch(() => {
        }).finally(() => { 
              this.loading = false;//
        }); 
    }
  }
}
</script>

<style lang="scss" scoped>
.pageBlock{
    text-align: end;
    margin: 10px 0;
}
</style>
