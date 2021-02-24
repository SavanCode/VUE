<template>
  <div id="app">
    <h1>学习 MockJS</h1>
    <hr/>
    <button @click="getGoodsList">获取商品列表</button>
    <button @click="addGoods">添加商品</button>
    <button @click="getGoodsById(9)">根据Id获取商品信息</button>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style>
</style>