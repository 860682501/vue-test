// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/reset.css'
import VueQuillEditor from 'vue-quill-editor' // vue-quill-editor
/*插件安装 [记得配置webpack文件]
  npm i quill-image-resize-module --save
  npm install quill-image-extend-module --save-dev
  阿里oos上传文件
  npm install ali-oss --save
  element-UI
  npm i element-ui -S
*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueQuillEditor) // vue-quill-editor
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
