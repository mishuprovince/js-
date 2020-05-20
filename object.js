function linzi(name){
    this.name=name;
    this.comeback=function(){
        console.log("xuexue,we are together");
    }
}
var linzi=new linzi("xiaokeai");
linzi.name;
linzi.comeback();

'use strict';
function Cat(props) {
    this.name=props.name||'Kitty';
    
}

Cat.prototype.say=function(){
    console.log("Hello,"+this.name);
    return 'Hello, '+this.name+'!';
}

// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
console.log(kitty.say === doraemon.say);
if (kitty && kitty.name === 'Kitty'
    && kitty.say
    && typeof kitty.say === 'function'
    && kitty.say() === 'Hello, Kitty!'
    && kitty.say === doraemon.say
) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal{
constructor(name) {
        super(name);
    }
say(){
return 'Hello,'+this.name+'!';
}
}

// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if ((new Cat('x') instanceof Animal) && kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}