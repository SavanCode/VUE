<template>
  <div class="leftBar">
    <div ref="option"  v-for="(item, index) in leftBarOptions" :key="index">
      <img
        :src="imgUrl"
        alt=""
      /> 
      <p>{{item}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default { 
  mounted () {
    this.observeSize()
  },
  methods: {
    observeSize () {
      const ro = new ResizeObserver(entries => {
        entries.forEach(entry => {
          const { width, height } = entry.contentRect
          // this.width = width
          // this.height = height
          this.$store.dispatch('setOptionWidth', width);
        })
      })
      ro.observe(this.$refs.option[0])
    }
  },
  computed:{
    ...mapGetters([
      'leftBarOptions',
      'imgUrl' 
    ]) 
  },
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
