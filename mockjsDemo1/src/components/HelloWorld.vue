<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> 

<!-- gutter = column gap -->
    <el-row :gutter="10">
      <el-col :span="7">
        <el-input placeholder="请输入品牌名称" size="mini">
          <template slot="prepend">品牌名称：</template>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" size="mini">添加</el-button>
      </el-col>
    </el-row>

      <el-table
    :data="tableData"
    style=" width: 50%; margin-left: auto;  margin-right: auto;"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="attention_degree"
      label="排位"
      width="180">
    </el-table-column>
    <el-table-column
      prop="company"
      label="名字"
      width="180">
    </el-table-column>
    <el-table-column
      prop="photo"
      label="链接">
    </el-table-column>
        <el-table-column
      prop="title"
      label="更多信息">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData:[],
      input:'',
      msg: 'Welcome to Your Vue.js App'
    }
  },
    mounted:function() {
        axios.get('/api/data').then(res => {//get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
          this.data = res.data.data;
          console.log(res.data);//在console中看到数据
          this.tableData=res.data.data
        }).catch(res => {
          alert('wrong');
        })
      },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
} 
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
