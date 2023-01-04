import Vue from 'vue'
import App from './App.vue'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

Vue.config.productionTip = false
gsap.registerPlugin(ScrollTrigger, TextPlugin);

Vue.prototype[`$gsap`] = {gsap, ScrollTrigger, TextPlugin};

new Vue({
  render: h => h(App),
}).$mount('#app')
