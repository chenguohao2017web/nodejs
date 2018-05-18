const fs = require('fs');

//异步删除文件
// fs.unlink('writeText.txt', (err) => {
//   console.log('delete success !')
// })

// 创建目录
// fs.mkdir('stuff', (err) => {
//   console.log('mkdir success')
// })

//删除目录
 fs.rmdir('./stuff',(err) => {
   console.log('delete success !');
 })