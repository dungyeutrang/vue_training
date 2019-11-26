import Vue from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  vuetify: vuetify
});
