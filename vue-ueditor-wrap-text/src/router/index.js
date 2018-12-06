import Vue from 'vue'
import Router from 'vue-router'
import CkeditorTest from '@/components/CKEditorTest.vue'
import QuillData from '@/components/QuillData.vue'
import UploadQuillData from '@/components/UploadQuillData.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CkeditorTest',
      component: CkeditorTest
    },
    {
      path: '/QuillData',
      name: 'QuillData',
      component: QuillData
    },
    {
      path: '/UploadQuillData',
      name: 'UploadQuillData',
      component: UploadQuillData
    }
  ]
})
