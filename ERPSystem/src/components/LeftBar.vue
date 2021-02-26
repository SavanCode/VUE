<template>
  <div class="leftBar">
     <div v-for="menu in menuList" :ref="menu.ref"><img :src="menu.menuIcon" alt=""/>
      <p>{{menu.menuLabel}}</p></div>
  </div>
</template>

<script>
export default {
  data() {
    return {  
       width:0,
       height:0,
       menuList: [
        {
          menuLabel: '基础管理',
          menuIcon: 'https://dyltqmyl993wv.cloudfront.net/assets/stacks/erpnext/img/erpnext-stack-220x234.png',
          ref: 'option'
        },
        {
          menuLabel: '业务管理',
          menuIcon: 'https://dyltqmyl993wv.cloudfront.net/assets/stacks/erpnext/img/erpnext-stack-220x234.png'
        },
        {
          menuLabel: '生产管理',
          menuIcon: 'https://dyltqmyl993wv.cloudfront.net/assets/stacks/erpnext/img/erpnext-stack-220x234.png'
        },
        {
          menuLabel: '采购管理',
          menuIcon: 'https://dyltqmyl993wv.cloudfront.net/assets/stacks/erpnext/img/erpnext-stack-220x234.png'
        },
        {
          menuLabel: '仓库管理',
          menuIcon: 'https://dyltqmyl993wv.cloudfront.net/assets/stacks/erpnext/img/erpnext-stack-220x234.png'
        },
        {
          menuLabel: '财务管理',
          menuIcon: 'https://dyltqmyl993wv.cloudfront.net/assets/stacks/erpnext/img/erpnext-stack-220x234.png'
        },
      ]
    };
  },
  mounted () {
    this.observeSize()
  },
  methods: {
    observeSize () {
      const ro = new ResizeObserver(entries => {
        entries.forEach(entry => {
          const { width, height } = entry.contentRect
          this.width = width
          this.height = height
          this.$emit('changed',width)
        })
      })
      ro.observe(this.$refs.option[0])
    }
  }
}
</script>
<style scoped>
.leftBar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0 0 0 50px;
}
img {
  max-width: 135px;
  max-height: 135px;
}
p {
  text-align: center;
  margin: 0 0 1em 0;
}
</style>
