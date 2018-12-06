<template>
  <div class="hello">
    <p>{{msg}}</p>

  </div>
</template>

<script>
/* 引入插件 */
import Quill from 'quill'

export default {
  name: 'upload-quill-data',

  data() {
    return {
      msg: '提交文章测试',

    //   content: '<h2>网络获取的内容</h2>'
      content: '<p><img src="http://mengrun-bucket.oss-cn-shenzhen.aliyuncs.com/img-in-article/jp84chpf.jpg" width="349" style=""><span class="ql-size-huge">I am Example</span></p><p><br></p>'
      
    }
  },

  methods:{
      upload (that) {
    //   this.axios.get('/api/UserLogin.api').then(this.getHomeInfoSucc) // 使用axios发送ajax-get请求
        that.axios // 使用axios发送ajax-post请求
        .post('/api/UserLogin.api', {
          password: '1',
          email: '1'
        })
        .then(that.getHomeInfoSucc)
        .catch(function (error) {
          console.log('发生错误')
        })
    },
    getHomeInfoSucc (msg) {
      console.log(msg)
    }
    
  },

  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  mounted() {
    console.log('this is current quill instance object', this.editor)
    this.$options.methods.upload(this)
  }

}
</script>

<style  lang='stylus' scoped>

</style>
