
'use strict';

function array() {

    //数组长度
    var arr = [1, 2, 3, 14, 'hello', null, true];
    console.log(arr.length);

    //给数组长度赋值
    var arr2 = [1, 2, 3];
    arr2.length = 6;
    console.log(arr2);
    arr2.length = 2;
    console.log(arr2);
    arr2.length = 3;
    console.log(arr2);

    var arr3 = ['a', 'b', 'c'];
    arr3[1] = 99;
    console.log(arr3);

    var arr4 = [10, 20, '30', 'xyz'];
    console.log(arr4.indexOf(20));
    console.log(arr4.indexOf(30));
    console.log(arr4.indexOf('30'));

    //截取
    var arr5 = ['a', 'b', 'c', 'd', 'e'];
    var acopy = arr5.slice();
    console.log(arr5.slice(3));
    console.log(acopy);
    console.log(arr5.slice(0, 2));

    //push末尾添加若干元素，pop删除最后元素
    //unshif头部添加若干元素,shift去掉第一个元素
    var arr6 = [1, 2];
    console.log(arr6.push(5, 6, 7, 'study'));
    arr6.pop()
    console.log();
    arr6.unshift('a', 'b')
    console.log(arr6);
    arr6.shift()
    console.log();

    //排序
    var arr7 = ['c', 'a', 'b'];
    arr7.sort()
    console.log(arr7);

    //反转数组
    var arr8 = ['1', '2', '3', '5'];
    arr8.reverse();
    console.log(arr8);
}

// array();


function * next_id() {
    for(var i=1;;i++){
    yield i;
    }
    
}
// 测试:
var
    x,
    pass = true,
    g = next_id();

for (x = 1; x < 100; x++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
    }
}
if (pass) {
    console.log('测试通过!');
}