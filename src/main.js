import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import App from './components/App.vue'
import Auth from './components/Auth.vue'
import axios from 'axios'




if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)]),
  beforeCreate(){
    global.vm = this
    axios.interceptors.response.use((res) => {
      return res;
    }, (error) => {
      console.log('axios error', error.response.data.message, error.response.status)
    
      if (error.response.status === 401) {
        global.vm.$navigateTo(Auth)
      }
    
      if (error.response.data.message && error.response.status !== 401) {
        alert({
          title: "Ошибка",
          message: error.response.data.message,
          okButtonText: "OK"
        })
      }
    
      return Promise.reject(error.response.data.error);
    });
  },
}).$start()