import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css'

import ElementUI from 'element-ui' 
import baseCard from '@/components/card/base-card'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

Vue.use(ElementUI);
Vue.use(Avue);
//Vue.use(Element, {locale});
Vue.component('base-card', baseCard);