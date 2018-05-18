const events =  require('events');
const myEmitter = new events.EventEmitter();
// //定义事件
// myEmitter.on('eventName', (msg) => {
//   console.log(msg);
// })
// //手动触发
// myEmitter.emit('eventName', "my name is chen");

const util = require('util');

let Person = function(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);//让类继承这个事件对象属性

var cgh = new Person('chenguohao'); //初始化类

cgh.on('say', function(msg){   //让实例对象绑定事件，
  console.log(msg);
})

cgh.emit('say','hello nodejs'); //触发事件