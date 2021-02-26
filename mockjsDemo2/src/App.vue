<template>
  <div id="app">
    <h1>学习 MockJS</h1>
    <hr/>
    <button @click="getGoodsList">获取商品列表</button>
    <button @click="addGoods">添加商品</button>
    <button @click="getGoodsById(9)">根据Id获取商品信息</button> 
    <hr/>
        <input type="text" v-model="obj.name" >
        <input type="text" v-model="obj.content" >
        <button @click="addItem">添加</button>
     <ul>
       <li v-for="item in list">{{item.id}}:{{item.name}}:{{item.content}} <button @click="delItemById(item.id)">删除</button> <button @click="updateItem(item.id)">更新</button></li>
     </ul>  
  </div>
</template>

<script>
export default {
  data() {
    return {
     list: [],
        obj: { 
          id: 0,
          name: '',
          content: ''
        }
    }
  },
  created(){
      this.getData();
    },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/goodslist')
      console.log(res)
    },
    async addGoods() {
      const { data: res } = await this.$http.post('/api/addgoods', {
        name: '菠萝',
        price: 8,
        count: 550,
        img: ''
      })

      console.log(res)
    },
    async getGoodsById(id) {
      const { data: res } = await this.$http.get(`/api/getgoods/${id}`)
      console.log(res)
    }, 

///////////////////////////////////////////
    //下部分
     getData(){
        this.$http.get('/getlist').then(res => {
          console.log(res)
          this.list = res.data.arr;
        }).catch((err) => {
          console.log(err)
        })
      },
     delItemById(id){
        this.$http.post('/delitem',{
          params: {
           delId: id
          }
        }).then(res => {
           //console.log(res)
           this.list=res.data.data
        }).catch((err) => {
          console.log(err)
        })
      }, 
      addItem(){ 
        this.$http.post('/addItem',{
          params: {
            obj: this.obj
          }
        }).then(res => {
             console.log("添加成功",res);
            this.list = res.data.data;
        }).catch((err) => {
          console.log(err)
        })

        this.obj={ 
          id: 0,
          name: '',
          content: ''
        }
      }, 
      updateItem(id){
        var that = this;
        this.$http.post('/updateItem',{
          params: {
            updateId:id
          }
        }).then(function(res){
          console.log("更新数据",res);
          that.list = res.data.data;
        }).catch((err) => {
          console.log(err)
        })
      } 
  }
}
</script>

<style>
</style>