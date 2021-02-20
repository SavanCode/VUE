<template>
  <div class="controlPad">  
    <div class="col1">
       <Btn name="工艺制作单"  class="addMargin"  type="1" :search="true"/>
       <Btn name="成品订单" type="1" :search="true" :spacing="true"/>
       <Btn name="加工订单" class="clearMargin" type="1" :search="true" :spacing="true"/>
        <p class="arrow"> <i class="icon iconfont icon-xiangxiajiantou"></i> </p>
       <Btn name="销售发货计划" class="clearMargin" type="2"/>
       <p class="arrow"> <i class="icon iconfont icon-xiangxiajiantou"></i> </p>
       <Btn name="销售发货" class="clearMargin" type="1" :search="true" :spacing="true"/>
       <p class="arrow"> <i class="icon iconfont icon-xiangxiajiantou"></i> </p>
       <Btn name="订单进度查询" class="clearMargin" type="1"/>
    </div>
    <div class="col2">
      <div> <i class="icon iconfont icon-right"></i> </div>
    </div>
    <div class="col3">
      <Btn name="国内客户" type="1" :search="true" :spacing="true"/>
      <p class="arrow"> <i class="icon iconfont icon-xiangxiajiantou"></i> </p>
      <Btn name="国内订单" type="1" :spacing="true"/>
      <p class="arrow"> <i class="icon iconfont icon-xiangxiajiantou"></i> </p>
      <Btn name="营销发货" type="1"  :spacing="true" />
      <p class="arrow"> <i class="icon iconfont icon-xiangxiajiantou"></i> </p>
      <Btn name="订单发货进度" type="2" />
    </div>
    <div class="col4">
      <div class="order">
          <Btn name="订单统计（款号）" type="2"/>
          <Btn name="订单统计（客户）" type="2"/>
      </div>
      <div class="dispatch">
          <Btn name="发货统计（款号）" type="2"/>
          <Btn name="发货统计（客户）" type="2"/>
          <Btn name="发货统计（日期）" type="2"/>
      </div>
      <div class="sales">
          <Btn name="销售对账单" type="2"/> 
      </div>
    </div>
    <div class="col5">
      <Btn name="工艺单停用" type="2" font="red"/>
      <Btn name="关闭生产订单" type="2" font="red"/>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn'
export default {
  name:'Main',
  components:{
    Btn
    }
}

</script>
<style scoped>
 .controlPad{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 0 0 50px;
  background-color: #64d5f2;
  background-image: linear-gradient(0deg, #64d5f2 0%, #ffffff 32%, #ffffff 47%, #64d5f2 75%);
 }
.icon, .iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.arrow{
  /* text-align: center !important; */
  padding-left: 50px;
}
.col2{
    /* margin-block: auto; */
    margin-top: 180px;
}
.icon-right{
    font-size: 10vw;
}
.icon-xiangxiajiantou{
    font-size: 5vw;
}
.clearMargin{
  margin: 10px 0 !important
}
.addMargin{
  margin-bottom: 120px !important;
}
.col4{
    margin-top: 160px;
}
.order > div{
  margin:10px 0 !important;
}

.dispatch{
  margin-top:70px
}

.dispatch > div{
  margin:10px 0 !important;
}
.sales{
  margin-top: 85px !important;
}
</style>