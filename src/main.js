import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ChartPlugin  } from '@syncfusion/ej2-vue-charts'
import { NavbarPlugin, LayoutPlugin, FormInputPlugin , FormSelectPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(NavbarPlugin)
Vue.use(LayoutPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormSelectPlugin)
Vue.use(ChartPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')