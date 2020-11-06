//自定义对象类型

let boss = {
  name: '文化老师',
  age:33,
  sex:'男'
};

let boss2 = {
  name: '吴华老师',
  age:33,
  sex:'男'
};

let boss3 = {
  name: '东东老师',
  age:33,
  sex:'男'
};

//类型 用大驼峰写法
interface Boss4 {
  name: string;
  age:number;
  sex:string
}

//声明 boss4
let boss4: Boss4;

boss4 = {
  name: '凯凯',                                                                                                                                                                                       
  age: 33,
  sex:'男'
}