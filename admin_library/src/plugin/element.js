import Vue from 'vue'

//引入element ui
import 'element-ui/lib/theme-chalk/index.css' 
import ElementUI from 'element-ui' 

//引入baseCard
import baseCard from '@/components/card/base-card'

//引入Avue
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

//echart echart1 方式1
import * as echarts from 'echarts'
Vue.use(echarts)

//mycharts 方式2
import myCharts from './myChart.js'
Vue.use(myCharts)

//引入vue-echarts
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/line'
Vue.component('v-chart', ECharts)

//全局注册
Vue.use(ElementUI);
Vue.use(Avue);
//Vue.use(Element, {locale});
Vue.component('base-card', baseCard);