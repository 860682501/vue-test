<template>
  <div class="hello">
    <p>{{msg}}</p>

    <!-- 在你需要展示的页面中用如下元素包裹 -->
    <div class="ql-container ql-snow">
      <div class="ql-editor">
        <!-- 你要展示的内容 -->
        <div v-html="content"></div>
      </div>
    </div>

  </div>
</template>

<script>
/* 引入插件 */
import Quill from 'quill'

export default {
  name: 'quill-data',

  data() {
    return {
      msg: '你需要展示的页面:',

    //   content: '<h2>网络获取的内容</h2>'
      content: '<p><img src="http://mengrun-bucket.oss-cn-shenzhen.aliyuncs.com/img-in-article/jp84chpf.jpg" width="349" style=""><span class="ql-size-huge">I am Example</span></p><p><br></p>'
      
    }
  },

  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  mounted() {
    console.log('this is current quill instance object', this.editor)
  }

}
</script>

<style  lang='stylus' scoped>

</style>
