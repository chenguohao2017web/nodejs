var fs = require('fs');

// 读取流
var file = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var data = ''
file.on('data', (chunk) => {
  data += chunk;
})
file.on('end', (err) => {
  console.log('finish')
  console.log(data)
})

//写入流
var writeFile = fs.createWriteStream(__dirname + '/writeSteam.txt');
const data = "ajsdkjfkjdklsf";
writeFile.write(data,'utf8');
writeFile.end();
writeFile.on('finish', (err) => {
  console.log('writeSteam success !');
})

// readStream.pipe(writeSteam) 直接读取并且写入，没有监听过程