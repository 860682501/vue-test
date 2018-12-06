// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/reset.css'

/*插件安装 [记得配置webpack.base.conf.js文件]
  npm install vue-quill-editor --save
  npm i quill-image-resize-module --save
  npm install quill-image-extend-module --save-dev  [没有用到]
  阿里oos上传文件
  npm install ali-oss --save
*/
import VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui'; // element-ui 'npm i element-ui -S'
import 'element-ui/lib/theme-chalk/index.css'; // element-ui
// require styles
import 'quill/dist/quill.core.css' //quill
import 'quill/dist/quill.snow.css' //quill
import 'quill/dist/quill.bubble.css' //quill

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueQuillEditor) // vue-quill-editor
Vue.use(ElementUI); // element-ui

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
