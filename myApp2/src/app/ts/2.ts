var a: number;

//数字类型： number
var a: number;

//声明类型的变量 只能赋值对应的值
// a = 'ab';

a = 5;
a = 5.5;

var b: string;

var c: boolean;

var d: any;

a = 5;
d = true;
d = '123';

var e: number | boolean | string;
e = 55;
e = true;
e = '123';

var f: Array<string>;
// f = ['dss','dsf',true,12];
                 // ---- ----
var g: number[];
// g = [123,55,'12312'] 
                // ----

// 数组中每个值得类型
var h: [number,string,boolean];
h = [12,'acb',true];