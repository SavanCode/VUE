<!-- bookSearch 样式-->
<template>
    <el-col :span="24">
        <base-card>
        <el-form :inline="true" class="searchForm">
        <el-form-item label="书本编号"> 
            <el-input
          placeholder="请输入书本编号"
          v-model="query.Book_id" 
          clearable>
          </el-input> 
          </el-form-item>
          <el-form-item label="书本类型">
               <el-select v-model="query.Type_id" placeholder="请选择书本类型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="书本名称">
          <el-input
          placeholder="请输入书本名称"
          v-model="query.Book_name"
          clearable></el-input>
          </el-form-item>
          <el-form-item label="作者">
          <el-input
          placeholder="请输入作者名字"
          v-model="query.Author"
          clearable>
          </el-input>
      </el-form-item> 
      <div class="searchBtn">
          <el-button @click="search">搜索</el-button>
          <el-button @click="clearFilter">清除所有搜索</el-button>
      </div>
      </el-form> 
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
              label="作者"
               >
            </el-table-column>
            <el-table-column
              prop="Type_id"
              label="书本类型"
               >
            </el-table-column> 
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
              type='date'
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
              :total="page.total"
              layout="total, sizes, prev, pager, next, jumper"
              :page.sync="page.currentPage"
              :limit.sync="page.pageSize">
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
        query:{
          Book_id:"",
          Type_id:"",
          Book_name:"",
          Author:"",
        },
        page: {
              total: 0,
              pageSize: 20,
              currentPage: 1
        },
         options: [{
          value: 'default',
          label: 'default'
        }],
      }
    },
    created() {
      this.getList();  
      this.getBookType();
    },
    methods: {
      search() {
        this.getList();
      },
      clearFilter() {
        Object.assign(this.query, {
          Book_id:"",
          Type_id:"",
          Book_name:"",
          Author:"",
        });
        this.getList()
      },
      handleSizeChange(val) {
        this.page.pageSize=val;
        //this.getList();
      },
      handleCurrentChange(val) {
        this.page.currentPage=val;
        //this.getList();
        console.log(`当前页: ${val}`,this.page.currentPage);
        this.getList();
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
            this.page.total = data.total;
            this.listData = data.records;
        }).catch(() => {
        }).finally(() => { 
              this.loading = false;//
        }); 
    },
    getBookType() {
        dictionaryApi.bookTypeDictionary().then(res => {
            this.options = res.data;
        }).catch(() => {
        });
    },
  }
}
</script>

<style lang="scss" scoped>
.pageBlock{
    text-align: end;
    margin: 10px 0;
}
.searchForm{
  padding:10px 20px
}
.searchBtn{
      display: flex;
    justify-content: space-evenly;
}
</style>
