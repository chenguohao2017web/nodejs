const fs = require('fs');

// 同步读取文件 第一参数：读取路径，第二参数：读取格式
// let file = fs.readFileSync("./event.js","utf8");
// 同步写入文件 第一参数：写入的文件名，第二参数：写入什么内容
// fs.writeFileSync('writeName.txt',"aaa");

//异步方式
fs.readFile('./readme.txt', 'utf8', (err, data) => {
  if(!err) {
    // console.log(data)
    fs.writeFile('writeText.txt', data, (err) => {
      if(!err) {
        console.log('write finish !');
      }
    })
  }
})