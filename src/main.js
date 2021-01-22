import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api';
import { firestorePlugin } from 'vuefire';

//import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'
Vue.use(VueCompositionApi);
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
