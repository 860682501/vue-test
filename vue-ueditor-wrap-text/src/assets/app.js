const OSS = require('ali-oss')
var client = new OSS({
  bucket: 'mengrun-bucket',
  accessKeyId: 'LTAIUajeFhHMda6D',
  accessKeySecret: 'mp5pIooxMQ7DJuWgth1fyh2VduqEMM',
  // region: 'oss-cn-shenzhen'
  region: 'http://oss-cn-shenzhen.aliyuncs.com/'
})

// function toBlob(urlData,fileType){
//   var bytes=window.atob(urlData),
//       n=bytes.length,
//       u8arr=new Uint8Array(n);
//   while(n--){
//       u8arr[n]=bytes.charCodeAt(n);
//   }
//   return new Blob([u8arr],{type:fileType});
// }

// async function put () {
//   try {
//     let result = await client.put('object-name1', toBlob ('C:/Users/caden/Desktop/text-1.jpg', 'jpg') );
//     console.log('OSS1--------' + result);
//   } catch (e) {
//   	console.log('OSS2--------' + e);
//   }
// }

// OSS--------initOptions
// app.js?afc4:17 OSS--------Buffer
// app.js?afc4:17 OSS--------urllib
// app.js?afc4:17 OSS--------version
// for (let i in client) {
//   console.log('OSS--------' + i)
// }
// put ()
export { listBuckets }
