import Vue from 'vue'
import Router from 'vue-router'
import CkeditorTest from '@/components/CKEditorTest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CkeditorTest',
      component: CkeditorTest
    }
  ]
})
