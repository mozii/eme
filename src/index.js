import Vue from 'vue'
import store from './vuex/store'
import app from './app'

new Vue({
  el: 'body',
  store,
  components: {app}
})
