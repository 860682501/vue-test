<template>
  <div class="hello">
    <p>{{msg}}</p>

    <div>
      <!-- @blur - 失去焦点
           @focus - 获得焦点时
           @ready - 在文档加载后激活函数
       -->
      <quill-editor v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)">
          <div id="toolbar" slot="toolbar">
            <span class="ql-formats">
              <button type="button" @click="handleChooseImg">
                -添加图片-
              </button>
            </span>
          </div>
        </quill-editor>

        <!-- <div id="toolbar" slot="toolbar">
          <button id="custom-button" @click.self.prevent="handleChooseImg" title="图片"><i class="iconfont icon-tupian"></i></button>
          图片按钮点击事件
          <span class="ql-formats">
            <button type="button" @click="handleChooseImg">
              <svg viewBox="0 0 18 18"> 
              <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect> 
              <circle class="ql-fill" cx="6" cy="7" r="1"></circle> 
              <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> 
              </svg>
            </button>
          </span>
        </div> -->
      

      <!-- Or manually control the data synchronization（或手动控制数据流） -->
      <!-- <quill-editor :content="content"
                    :options="editorOption"
                    @change="onEditorChange($event)">
      </quill-editor> -->

      <button @click="handleEditorSubmit">提交</button>
      <button @click="tryToSubmitPic">上传图片到OSS</button>
       <br> <br>
      <!-- element上传框架 -->
      <div>
        <el-upload
            action=""
            :multiple="true"
            :show-file-list="false"
            :file-list="fileList3"
            :http-request="uploadSectionFile"> <!-- http-request覆盖默认的上传行为，可以自定义上传的实现 -->
          <el-button size="small" type="primary" ref='uploadButton'>点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
     </div>

  <br> <br>
    </div>

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
/* 引入Quill插件 */
import Quill from 'quill'
// import { someModule } from '../yourModulePath/someQuillModule.js'
// Quill.register('modules/someModule', someModule)
import ImageResize from 'quill-image-resize-module'
// import { ImageDrop } from 'quill-image-drop-module' // 没用到
Quill.register('modules/imageResize', ImageResize)
// Quill.register('modules/imageDrop', ImageDrop)

export default {
  name: 'ckeditor-test',

  data() {
    return {
      msg: 'Welcome to Your Vue.js App',

      imgUrl: '',

      content: '<h2>I am Example</h2>',
      editorOption: {
        // some quill options
        theme: 'snow',
        modules: {
          imageResize: {
            modules: ['Resize', 'DisplaySize', 'Toolbar']
          },
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'], //引用，代码块

            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: 'ordered' }, { list: 'bullet' }], //列表
            [{ script: 'sub' }, { script: 'super' }], // 上下标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            [{ direction: 'rtl' }], // 文本方向
            [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题

            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], //字体
            [{ align: [] }], //对齐方式
            ['clean'], //清除字体样式
            ['image', 'video'] //上传图片、上传视频
          ]
        }
      },

      fileList3: [
        {
          name: '',
          url: ''
        }
      ]
    }
  },

  computed: {
    editor() {
      return this.$refs.myTextEditor.quill
    }
  },

  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
      let mConent = this.editor.getContents()
      /* 
        ops
        insert
        delete
        retain
        push
        chop
        filter
        forEach
        map
        partition
        reduce
        changeLength
        length
        slice
        compose
        concat
        diff
        eachLine
        transform
        transformPosition
      */
      console.log(mConent)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    /* onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      } */

    handleEditorSubmit() {
      console.log(this.content)
      // this.myContents = this.editor.getContents()
    },

    tryToSubmitPic() {
      // 没有用到
      listBuckets()
    },

    async uploadSectionFile(msg) {
      /* 
      --uploadSectionFile--headers
      --uploadSectionFile--withCredentials
      --uploadSectionFile--file #要上传的文件
        lastModified: 1543565256007
        lastModifiedDate: Fri Nov 30 2018 16:07:36 GMT+0800 (中国标准时间) {}
        name: "text-1.jpg"
        size: 18589
        type: "image/jpeg"
        uid: 1543669368052
        webkitRelativePath: ""
      --uploadSectionFile--data
      --uploadSectionFile--filename
      --uploadSectionFile--action
      --uploadSectionFile--onProgress
      --uploadSectionFile--onSuccess
      --uploadSectionFile--onError
      */

      let fileType = ''
      if (msg.file.type == 'image/jpeg') {
        fileType = '.jpg'
      } else if (msg.file.type == 'image/png') {
        fileType = '.png'
      }

      const OSS = require('ali-oss')
      var client = new OSS({
        bucket: 'mengrun-bucket',
        accessKeyId: 'LTAIUajeFhHMda6D',
        accessKeySecret: 'mp5pIooxMQ7DJuWgth1fyh2VduqEMM',
        region: 'oss-cn-shenzhen'
      })

      try {
        let result = await client.put(
          'img-in-article/' + Date.now().toString(36) + fileType,
          msg.file
        )
        /* result {name, url, res} */
        console.log('OSS1--------' + result.url)

        this.imgUrl = result.url

        // -------------------------------------------Quill添加图片-----------------------------------------------------
        this.editor.insertEmbed(this.editor.getSelection().index,'image',this.imgUrl)
        
      } catch (e) {
        console.log('OSS2--------' + e)
      }
    },

    handleChooseImg() {
      console.log('handleChooseImg------>')
      this.imgUrl = ''

      this.$refs.uploadButton.$el.click()
    }
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },

  mounted() {
    console.log('this is current quill instance object', this.editor)
  }
}
</script>

<style  lang='stylus' scoped>
div.hello {
  p {
    color: blue;
  }

  .content {
    width: 100%;
  }
}
</style>
