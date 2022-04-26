import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import qs from "qs";
// import echarts from "echarts";
axios.defaults.baseURL = "http://127.0.0.1";
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

// Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
