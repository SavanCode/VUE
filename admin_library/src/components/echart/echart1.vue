<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div class="chartArea">
    <div id="pie" class="chart"></div>
    <div id="chart_example" class="chart"></div>
  </div>
</template>
<script>
  import * as echarts from 'echarts'
    export default { 
        data () {
            return {
                charts: '',
                opinion:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
                opinionData:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ]
            }
        },
        methods:{
          drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 tooltip: {
                   trigger: 'item',
                   formatter: '{a}<br/>{b}:{c} ({d}%)'
                 },
                 legend: {
                   orient: 'vertical',
                   x: 'left',
                   data:this.opinion
                 },
                 series: [
                   {
                     name:'访问来源',
                     type:'pie',
                     radius:['50%','70%'],
                     avoidLabelOverlap: false,
                     label: {
                       normal: {
                         show: false,
                         position: 'center'
                       },
                       emphasis: {
                         show: true,
                         textStyle: {
                           fontSize: '30',
                           fontWeight: 'blod'
                         }
                       }
                     },
                     labelLine: {
                       normal: {
                         show: false
                       }
                     },
                     data:this.opinionData
                   }
                 ]
               })
            }, 
          initData() {
            let this_ = this;
            let myChart = echarts.init(document.getElementById("chart_example"));
            let option = {
              color: ["#29C37F"],//柱体颜色
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow"
                }
              },
              xAxis: [
                {
                  type: "category",
                  data: [
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月",
                    "6月",
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月",
                    "12月"
                  ],
                  axisLine: {show:false},//轴线不显示
                  axisTick: {
                    alignWithLabel: false
                  },
                  axisLabel: {
                    interval: 0, //底部完整显示
                    textStyle: { //修改底部字体颜色
                      color: "#999999"
                    }
                  }
                }
              ],
              yAxis: [
                {
                  show: false,//隐藏y方向刻度
                  type: "value",
                  textStyle: {
                    color: "#999999"
                  }
                }
              ],
              series: [
                {
                  name: "每月花费",
                  type: "bar",
                  barWidth: "50%",
                  data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356],
                  itemStyle: {
                    normal: {
                      label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        textStyle: {
                          //数值样式
                          color: "#29C37F",
                          fontSize: 8
                        }
                      }
                    }
                  }
                }
              ]
            };
            myChart.setOption(option);
          },  
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('pie')
            }),
        this.initData();
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_common.scss';
.chartArea {
  display:flex;
  flex:wrap;
}
.chart{
  width: $echartWidth;
  height: $echartHeight;
}
</style>
 