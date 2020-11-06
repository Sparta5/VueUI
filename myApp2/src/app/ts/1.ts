//静态类型声明:变量名:类型名
function show(abc: string) {
  //特色1：有丰富的提示
  return abc.toUpperCase();
}

let res = show('dongdong');
console.log(res);