<!-- Home 样式-->
<template>
  <div>
    <!-- this is {{user}} -->
    <avue-carousel :option="marquee"></avue-carousel>
    <avue-data-tabs :option="option"></avue-data-tabs>
    <div class="chartBox echart">
      <echart1></echart1>
      <div id="chart2"  class="echart"></div>
      <vuechart></vuechart>
    </div>

  </div>
</template>

<script>
import echart1 from '@/components/echart/echart1' 
import vuechart from '@/components/echart/vueChart' 

export default {
    components: {
         echart1,vuechart
    },
    data() {
      return {
        marquee:{
          type:'card',
          height:200, 
          autoplay:true,
          interval:3000,
          data:[
            {
              title: '这是跑马灯的标题1',
              href:"#",
              src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhyPZa7nPdSQqlgLdd0Snw2fPTzZCINnVNA&usqp=CAU'
            },
            {
              title: '这是跑马灯的标题2',
              href:"#",
              src:'https://pic1.zhimg.com/v2-8af89ec15a7aadb5da28a9b9a25ec007_1440w.jpg?source=172ae18b'
            },
            {
             title: '这是跑马灯的标题3',
             href:"#",
             src:'https://img2.voc.com.cn/2021/03/05/cf56e39613a223aea3517fe6cce573dc404b07111614945418.png'
            }
          ]
        },
         option: {
           span:6,
            data: [
              {
                
                title: '分类统计',
                subtitle: '实时',
                count: 7993,
                allcount: 10222,
                text: '当前分类总记录数',
                color: 'rgb(27, 201, 142)',
                key: '类'
              },
              {
                
                title: '附件统计',
                subtitle: '实时',
                count: 3112,
                allcount: 10222,
                text: '当前上传的附件数',
                color: 'rgb(230, 71, 88)',
                key: '附'
              },
              {
                
                title: '文章统计',
                subtitle: '实时',
                count: 908,
                allcount: 10222,
                text: '评论次数',
                color: 'rgb(178, 159, 255)',
                key: '评'
              },
              {
                // click: function (item) {
                //   alert(JSON.stringify(item));
                //},
                title: '文章统计',
                subtitle: '实时',
                count: 908,
                allcount: 10222,
                text: '评论次数',
                color: 'rgb(278, 159, 255)',
                key: '评'
              }
            ]
      } 
      };
    },
  computed: {
    //{ "isAdmin": false, "userName": "s11111" }
    user() {
      return this.$store.getters.user
    }
  },
   mounted() {
    this.$chart.line1('chart2');
  }
}

</script>
<style lang="scss" scoped>
@import '@/assets/scss/_common.scss';
.echart {
    width: $echartWidth;
    height: $echartHeight;
}
.chartBox{
  display: flex;
  flex-flow: wrap;
}
</style>