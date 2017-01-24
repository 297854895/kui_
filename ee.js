import Vue from 'vue';
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

import Kui from '../kui';
import Index from './Index';
import store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<Index/>',
  components: { Index }
})
