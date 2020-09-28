# vdemo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### --> 用户自定义文档 以下为我写的demo的文档说明
使用： 
 安装 ： packagejson 文件所在路径下 npm i 
 查看 ： 安装后 查看packagejson 各项 依赖是否 齐备，否则执行一下 npm i
 

#### mockjs 安装 npm i mockjs -S
    mockjs 数据模拟
    mockjs 文档 https://github.com/nuysoft/Mock/wiki

#### iconfont 使用方式
iconfont 字体图标库 
iconfont 官方地址 https://www.iconfont.cn/
使用方法：
    三种方式：此处使用第三种：symobl 方式
    添加图标至我的项目
    1.下载文件至 本地
    保留 iconfont.js 放至 assets/iconfont 文件夹下
    
    2.iconfont 文件夹下 新建 iconfont.css
    复制 初始代码

    3.在组件中使用：
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#复制类名"></use>
     </svg>




#### 组件下： AllAxios 所有 axios 请求的方法（包括 get\get带参、post带参、all、以及一个 tabs 切换）
    axios 文档
    http://www.axios-js.com/zh-cn/docs/index.html

    1. axiosGet 两个例子，局部引入axios 后台使用 xz,
    get请求方法， 第2个例子为：get 带参查询

    2. axiosPost 一个例子，局部引入 axios ,后台使用 xz, 需使用 npm i qs -S , 进行 qs 文件解析模块，进行数据格式调整，修改相应消息头

    3. axiosAllSpread 一个例子，两个请求，局部引入 axios , 后台使用 xz, axios.all 传入为数组，第一个条件不满足时，第二个不执行，全都满足时，才会返回结果

    4. axiosIntance axios实例，使用 封装的 axios方法，封装了get\post ,对应文件为 utils 下的request.js 两个例子，get 请求以及post 请求(封装了 qs 模块) ，后台使用 xz

    5. axiosInterceptors axios拦截器，同样封装在 request.js 中


#### 路由 包括 声明式、编程式、命名路由 以及基础 :id 传参 
    路由 文档
    https://router.vuejs.org/zh/

    1. RouterA 
        a. /:xxx 形式传参 对应路由字典：path:'/routera/:name' 通过 this.$route.params 可获取地址栏 参数
        b. router-link 方式 
        c. 声明式 :to='xxx' 动态绑定 路由地址
        d. 声明式 传参 
        e. 编程式 调用方法 this.$router.push
        f. 命名路由 通过 name 属性 对应的组件进行跳转 以及 传参
        
    2. RouterB 
       由 RrouterA 对应进行的跳转    并进行传参的获取


#### 组件通信 AtoBAll 为底部 tabs 切换 对应路由为 parenttochild\brother\routera

    对应组件为：ParentToChild\Child\Childchild\Brother
    
    1. props emit 
        ParentToChild 父传子 子组件--Child
    父组件 局部引入 axios 通过 axios 获取数据，使用 mockjs 数据，抓取 数据后 ，通过属性绑定 传递数据 给子组件， 通过监听 'passToParent' 绑定函数 获取 数据

    子组件 通过 props 获取
    子组件通过 emit 事件 'passToParent'(自定义) 发送数据 给 父组件 

    2. $parent $children 可拿到直接父组件、子组件的数据

    3. provide\inject 依赖注入（与  angular\react 类似）父组件 通过 provide 属性 提供数据  子组件、子组件的子组件等等通inject 依赖注入数据

    4. refs 通过 refs 属性 获取当前 dom 节点
    this.$refs.xxx 当前节点对象

    5. eventbus，中央事件总线 需求Bus.js 文件，文件位于 utils 下
    两个组件 ParentToChild \ Brother

    通过 emit on 进行事件 监听 数据发送 注意：有坑

    组件 进入 bus --> 空的Vue实例，作为 数据中转
    接收 数据的组件 需要先 挂载一次，否则 无法 监听
    当前路由切换时，需要在 组件销毁前 卸载事件，否则会产生多次监听

    使用 this.$nextTick 使 dom 修改前不执行，否则 不执行 且 发送数据的组件 需要先加载一次 dom, 否则 监听也 无法执行 

    6. vuex
    见下下下条

#### Bscroll 使用 npm i better-scroll -S
    
    官方文档 https://github.com/ustbhuangyi/better-scroll

    better-scroll 列表在固定宽高的视图层内自由滚动
    注意：坑多

    在需要使用的组件内引入：
    BScroll 组件 滚动视图列表
    1. import 加载
    
    2. 注意 样式层书写方式！！！
    外层 wrapper 视图层需要 设置固定高度/或百分比，设置overflow:hidden 必须设置！否则内层拿不到外层高度，或与内层高度一致，无法滚动！
    
    3. 定义newScroll 函数，根据官方文档，生成 scroll
    当前滚动生成后，调用 刷新，否则视图层 列表 无法 滚动

    4. 异步请求拿到数据  this.$nextTick()

    5. 视图层 img 定义onload 事件(js原生)，vue 中调用 @load ，一旦 img 加载，更新 scroll ---> 此项在数据异步加载必须使用，否则 scroll 无法拿到 dom ，无法滚动！

    6. 如果不使用异步，可不监听，newScroll函数可在mounted 中进行挂载

#### vue-awesome-swiper 使用 安装 npm i vue-awesome-swiper -S
#### npm i swiper -S --> 引用swiper 样式，不安装要报错
     vue-awesome-swiper 轮播图
     swiper 文档 https://swiper.com.cn/

#### 列表跳转详情
    涉及两个组件：Bscroll\DataDetails
    Bscroll 组件 中 
    定义 getDataList 函数，后台 使用 xz，局部使用 aixos
    获取所有商品数据

    绑定事件，点击触发，toDetails 函数，通过 $router 跳转详情页，根据传递的 id，在详情组件（DataDetails）中 按id 查询 获取相关 商品详细信息

#### webStorage : sessiongStorage \ localStorage
组件： views/ SetStorage / GetStorage

sessionStorage 会话缓存： 窗口关闭，数据丢失
localStorage 永久缓存： 手动清除，数据才会 消失

设置数据：setItem('key',value)
获取数据：getItem('key') 

webStorage 只能使用 字符串 进行存储
所以必须使用 JSON.stringify()  JSON.parse() 进行数据格式转换

清空数据： clear()
清除某个键值对： removeItem()

#### vuex 
官方文档：https://vuex.vuejs.org/zh/guide/
vuex 四个属性
state  保存当前 初始状态
mutations 提交修改的数据
getters 获取当前 store 中的 数据
actions 可进行异步请求，对 mutation 进行 提交 修改

mapState \ mapMutations \ mapGetters \ mapActions  语法糖，映射、解构，可使用 this.xxx 进行操作

#### vuex 购物车

组件： Bscroll \ DataDetails \ User
1. 加载商品列表页 /bscroll 路由 进入
2. 点击跳转商品详情页  
3. 点击加入购物车 --> 添加进前端 暂存 未登陆购物车数据  
4. 用户点击 购物车 --> vuex 中读取 用户 登陆 状态，未登陆，跳转 登陆页面，进行登陆
5. 用户登陆成功 --> 未登陆状态购物车 数据  添加进缓存 个人购物车 跳转到 购物车列表 页面
6. vuex 中 读取 购物车列表 数据， 可进行 数据 操作, 用户结算, 发请求存数据库, 以便已登陆用户进行数据查看, 清空前端缓存 

