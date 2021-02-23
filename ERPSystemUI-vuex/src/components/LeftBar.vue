<template>
  <div class="leftBar">
    <div ref="option">
      <img
        :src="imgUrl"
        alt=""
      /> 
      <p>{{leftBarOptions[0]}}</p>
    </div>
    <div>
      <img
        :src="imgUrl"
        alt=""
      /> 
      <p>{{leftBarOptions[1]}}</p>
    </div>
    <div>
      <img
        :src="imgUrl"
        alt=""
      /> 
      <p>{{leftBarOptions[2]}}</p>
    </div>
    <div>
      <img
        :src="imgUrl"
        alt=""
      /> 
      <p>{{leftBarOptions[3]}}</p>
    </div>
    <div>
      <img
        :src="imgUrl"
        alt=""
      /> 
      <p>{{leftBarOptions[4]}}</p>
    </div>
    <div>
      <img
       :src="imgUrl"
        alt=""
      /> 
      <p>{{leftBarOptions[5]}}</p>
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
      ro.observe(this.$refs.option)
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
