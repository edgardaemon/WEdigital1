import Vue from "vue";
import counter from "./counter";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#counter",
  components: { counter },
  template: "<counter/>"
});