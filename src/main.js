import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/filter";

// 按需引入Ant Design 组件
import "@/shared/registAntd";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
