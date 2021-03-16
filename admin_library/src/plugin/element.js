import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css' 
import ElementUI from 'element-ui' 

import baseCard from '@/components/card/base-card'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

//echart echart1 方式1
import * as echarts from 'echarts'
Vue.use(echarts)

//mycharts 方式2
import myCharts from './myChart.js'
Vue.use(myCharts)

//vue-echarts
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/line'
Vue.component('v-chart', ECharts)

Vue.use(ElementUI);
Vue.use(Avue);
//Vue.use(Element, {locale});
Vue.component('base-card', baseCard);