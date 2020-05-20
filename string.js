/**
 * 包含js字符串的基本语法和常用函数
 * 字符串用''或""括起来表示
 * 直接给字符串赋值不会报错，但不生效，字符串不会改变
 */
function studyString() {

    //多行字符串
    console.log(`多行
    字符串
    测试`);
    //转译 用“\”
    console.log('I\'m \"OK\"!');

    //转大写
    var s = 'hello'
    console.log(s.toUpperCase());

    //转小写
    var s2 = "Hello"
    console.log(s.toLowerCase());

    //返回指定字符出现的位置
    var s3 = 'iiii';
    console.log(s3.indexOf('i'));

    //返回区间字符串
    var s4='linzixiaokeai'
    var linzi=s4.substring(5);//从指定位置到结束
    var xiaokeai=s4.substring(0,4);
    console.log(`${xiaokeai},${linzi}`);
}

studyString();