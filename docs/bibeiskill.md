# zshi相关信息

# html

## H5语义化新标签

Header、Footer、Nav：导航栏、Article：独立内容区域用于文章等、Section:节的意思(文档中的节或者文章的节)、
video: poster图像(封面)
```html
<video src="movie.ogg" controls="controls">
您的浏览器不支持 video 标签。
</video>
```

audio:

```html
<audio src="/i/horse.ogg" controls="controls">
Your browser does not support the audio element.
</audio>
```

Canvas: 画布，很强大很强大，值得研究。  画海报
Main: 主要内容

# css 相关
## css设计模式（公司做定制产品的）
1. ooscss： 直译过来就是，结构和皮肤分离，容器和内容分离。
2. SMACSS： Base（基础）、Layout（布局）、Module（模块）、State（状态）、Theme（主题） 
3. BEM：它的核心如下： Block（块）、Element（元素）、Modifier（修饰符）

## css3新语法

1. flex 弹性布局 [教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)
2. background-Origin:属性指定了背景图像的位置区域。content-box, padding-box,和 border-box区域内可以放置背景图像。

3. 渐变

4. transform： 2D 转换
> 可以移动，比例化，反过来，旋转，和拉伸元素
* translate值（50px，100px）是从左边元素移动50个像素，并从顶部移动100像素
* rotate() 在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转
* scale（2,4）转变宽度为原来的大小的2倍，和其原始大小4倍的高度
* skew(30deg,20deg) 是元素在X轴和Y轴上倾斜30度20度
* matrix()

5. transition过渡

6. animation: @keyframes

7. CSS3 媒体查询 @media

8. calc() 此CSS函数让你在声明CSS属性值时执行一些计算 
* `width: calc(100% - 80px);`: 元素设置一个左右40px的间距


## 布局
[多看看这个](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

## 双飞翼和圣杯布局
![](https://s2.ax1x.com/2019/09/24/uAXVv6.png)

[可参考](https://www.cnblogs.com/lovemomo/p/4885866.html)
> **双飞翼**
中间栏的div中嵌套一个div，内容写在嵌套的div里，然后对嵌套的div设置margin-left和margin-right,效果上表现为 左右两栏在中间栏的上面，中间栏100%，但是中间栏的内容通过margin显示在中间

> **圣杯**
圣杯布局是中间栏在添加相对定位，并配合left和right属性，效果上表现为三栏是单独分开的（如果可以看到空隙的话）


## sass mixin 混入
在Sass中，除了@import和@extend可以使你的代码更加具有重复利用性，@mixin指令也同样能提高你代码的重复使用率并简化你的代码。

[详情可查看](https://www.w3cplus.com/preprocessor/sass-the-mixin-directive.html)

# js相关

## 请描述下闭包

闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。

```js
function A() {
  let a = 1
  function B() {
      console.log(a)
  }
  return B
}
```

## 请讲下深拷贝和浅拷贝的区别（实现方式）
场景：如果给一个变量赋值一个对象，那么两者的值会是同一个引用，其中一方改变，另一方也会相应改变。

> 浅拷贝： 

`Object.assign()let b = Object.assign({}, a)、展开运算符（…）let b = {...a}`

浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，那么就又回到刚开始的话题了，两者享有相同的引用。要解决这个问题，我们需要引入深拷贝。

> 深拷贝： 

1. 这个问题通常可以通过 `JSON.parse(JSON.stringify(object)) ` 来解决。先 序列化成 一个JSON 字符串的值，再反序列化成json对象
2. 在遇到函数、 undefined 或者 symbol 的时候，该对象也不能正常的序列化。
此时要么使用 lodash 的深拷贝函数。要么 百度一套合适的deepclone()。

## 请讲下 原型链
1、每个函数都有 prototype(显式原型) 属性，属性值是一个普通的对象，除了 Function.prototype.bind()，该属性指向原型。
2、所有的引用类型（数组、对象、函数）都有一个 _proto_ 属性(隐式原型属性），属性值是一个普通的对象
3、_proto_ 属性值(隐式原型属性）指向它的构造函数的“prototype”属性值

f.toString(),当这个对象没有这个属性的时候，去它自身的隐式原型中找，它自身的隐式原型就是它构造函数（Foo）的显式原型（Foo.prototype）但显式原型（Foo.prototype）中并没有 toString ;但显式原型（Foo.prototype）也是对象，也要在它的隐式原型中找，即在其构造函数 （Object ）的显式原型中去找 toString. 故要在 f._proto_(隐式原型）的._proto_(隐式原型）中找，如图所示，故输出 null


## 讲下你熟悉的ES6语法

* Map 作用是生成一个新数组，遍历原数组，将每个元素拿出来做一些变换然后 append 到新的数组中。Map 有三个参数，分别是当前索引元素，索引，原数组
* Reduce 作用是数组中的值组合起来，最终得到一个值
* 
## async 和 await
* 首先：一个函数加上async之后，该函数就会返回一个 promise。可以把 async 看成将函数返回值使用 Promise.resolve() 包裹了下。
* await 只能在 async 函数中使用

优势在于处理 then 的调用链，能够更清晰准确的写出代码。缺点在于滥用 await 可能会导致性能问题，因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性。

## 为什么 0.1 + 0.2 != 0.3
* 因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题。
原生解决办法：`parseFloat((0.1 + 0.2).toFixed(10))`

## call,apply和bind方法
都是用于改变函数运行时上下文。可借助它们实现继承；最终的返回值是你调用的方法的返回值。

* apply: 第二个参数传入是 参数数组

* call： 是apply的语法糖，参数传入是 参数列表

* bind： 同上，区别在于。返回的是一个新的函数，需要时再调用。
> 如何选用

如果不需要关心具体有多少参数被传入函数，选用apply()；
如果确定函数可接收多少个参数，并且想一目了然表达形参和实参的对应关系，用call()；
如果我们想要将来再调用方法，不需立即得到函数返回结果，则使用bind();


## 讲下 promise、有哪些优缺点
Promise 是 ES6 新增的语法，解决了回调地狱的问题。

可以把 Promise 看成一个状态机。初始是 pending 状态，可以通过函数 resolve 和 reject ，将状态转变为 resolved 或者 rejected 状态，状态一旦改变就不能再次变化。

## 手写一个 防抖和节流

PS：防抖和节流的作用都是防止函数多次调用。区别在于，假设一个用户一直触发这个函数，且每次触发函数的间隔小于wait，防抖的情况下只会调用一次，而节流的 情况会每隔一定时间（参数wait）调用函数。

[点我查看](https://yuchengkai.cn/docs/frontend/#防抖)

> 防抖：
```js
const debounce = (func, wait = 50) => {
    let timer = 0
    return function(...arg) {
        //如果定时器存在 则清除 再开启一个新的定时器
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this, arg)
        }, wait)
    }
}

// 不难看出如果用户调用该函数的间隔小于wait的情况下，上一次的时间还未到就被清除了，并不会执行函数
```

> 节流：

防抖动和节流本质是不一样的。防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。



## 讲下 递归和冒泡

## Event Loop

* 微任务(micro task)包括 process.nextTick ，promise ，Object.observe ，MutationObserver
* 宏任务(macro task)包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering

正确的一次 Event loop 顺序是这样的:
1. 执行同步代码，这属于宏任务
2. 执行栈为空，查询是否有微任务需要执行
3. 执行所有微任务
4. 必要的话渲染 UI
5. 然后开始下一轮 Event loop，执行宏任务中的异步代码

优化：通过上述的 Event loop 顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作 DOM 的话，为了更快的 界面响应，我们可以把操作 DOM 放入微任务中。

## 重绘（Repaint）和回流（Reflow）
* 重绘：当页面节点需要改变样式而不影响布局的，比如 颜色、背景色会触发 重绘
* 回流：当页面布局或者几何属性发生变化成为回流

### 减少重绘和回流 提高性能
* 使用 translate 替代 top
* 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
* 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
* CSS 选择符从右往左匹配查找，避免 DOM 深度过深

## 懒加载
就是将不关键的资源延后加载

原理：只加载可视区域，也可以是即将进入可视区域 内需要加载的东西。
 对于图片来说，先设置图片标签的 src 属性为一张占位图，将真实的图片资源放入一个自定义属性中，当进入自定义区域时，就将自定义属性替换为 src 属性，这样图片就会去下载资源，实现了图片懒加载。

懒加载不仅可以用于图片，也可以使用在别的资源上。比如进入可视区域才开始播放视频等等。

# MVVM 框架
MVVM 由以下三个内容组成

View：界面
Model：数据模型
ViewModel：作为桥梁负责沟通 View 和 Model
在 JQuery 时期，如果需要刷新 UI 时，需要先取到对应的 DOM 再更新 UI，这样数据和业务的逻辑就和页面有强耦合。

在 MVVM 中，UI 是通过数据驱动的，数据一旦改变就会相应的刷新对应的 UI，UI 如果改变，也会改变对应的数据。这种方式就可以在业务处理中只关心数据的流转，而无需直接和页面打交道。ViewModel 只关心数据和业务的处理，不关心 View 如何处理数据，在这种情况下，View 和 Model 都可以独立出来，任何一方改变了也不一定需要改变另一方，并且可以将一些可复用的逻辑放在一个 ViewModel 中，让多个 View 复用这个 ViewModel。

在 MVVM 中，最核心的也就是数据双向绑定，例如 Angluar 的脏数据检测，Vue 中的数据劫持。

# vue相关

## 从源码角度讲下 双向绑定

主要是采用 数据劫持方式

## proxy 为什么替代 object.defineProperty

有两点不足：
1. 只能对属性进行数据劫持，所以需要深度便利整个对象
2. 对于数组不能监听到数据的变化

虽然 Vue 中确实能检测到数组数据的变化，但是其实是使用了 hack 的办法，并且也是有缺陷的。
```js
// hack 以下几个函数
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
```
## Virtual Dom
Virtual Dom diff算法的实现也就是以下三步

1. 通过 JS 来模拟创建 DOM 对象
2. 判断两个对象的差异
3. 渲染差异

## 生命周期分析
在初始化时init会调用一下代码，生命周期都是通过`callHook`调用的。
```js
Vue.prototype._init = function(options) {
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate') // 拿不到 props data
  initInjections(vm)
  initState(vm)
  initProvide(vm)
  callHook(vm, 'created')
}
```
由此可以发现beforeCreate 调用的时候，是获取不到 props 或者 data 中的数据的，因为这些数据的初始化都在 initState 中。

# webpack

## 使用 Webpack 优化项目
* 对于 Webpack4，打包项目使用 production 模式，这样会自动开启代码压缩
* 使用 ES6 模块来开启 tree shaking，这个技术可以移除没有使用的代码
* 优化图片，对于小图可以使用 base64 的方式写入文件中
* 按照路由拆分代码，实现按需加载
* 给打包出来的文件名添加哈希，实现浏览器缓存文件


# 监控
## loder

## pulgin

# HTTP

## 从浏览器输入url开始经历了哪些过程

1. 首先做 DNS 查询，如果这一步做了智能 DNS 解析的话，会提供访问速度最快的 IP 地址回来
2. 接下来是 TCP 握手，应用层会下发数据给传输层，这里 TCP 协议会指明两端的端口号，然后下发给网络层。网络层中的 IP 协议会确定 IP 地址，并且指示了数据传输中如何跳转路由器。然后包会再被封装到数据链路层的数据帧结构中，最后就是物理层面的传输了
3. TCP 握手结束后会进行 TLS 握手，然后就开始正式的传输数据
4. 数据在进入服务端之前，可能还会先经过负责负载均衡的服务器，它的作用就是将请求合理的分发到多台服务器上，这时假设服务端会响应一个 HTML 文件
5. 首先浏览器会判断状态码是什么，如果是 200 那就继续解析，如果 400 或 500 的话就会报错，如果 300 的话会进行重定向，这里会有个重定向计数器，避免过多次的重定向，超过次数也会报错
6. 浏览器开始解析文件，如果是 gzip 格式的话会先解压一下，然后通过文件的编码格式知道该如何去解码文件
7. 文件解码成功后会正式开始渲染流程，先会根据 HTML 构建 DOM 树，有 CSS 的话会去构建 CSSOM 树。如果遇到 script 标签的话，会判断是否存在 async 或者 defer ，前者会并行进行下载并执行 JS，后者会先下载文件，然后等待 HTML 解析完成后顺序执行，如果以上都没有，就会阻塞住渲染流程直到 JS 执行完毕。遇到文件下载的会去下载文件，这里如果使用 HTTP 2.0 协议的话会极大的提高多图的下载效率。
8. 初始的 HTML 被完全加载和解析后会触发 DOMContentLoaded 事件
9. CSSOM 树和 DOM 树构建完成后会开始生成 Render 树，这一步就是确定页面元素的布局、样式等等诸多方面的东西
10. 在生成 Render 树的过程中，浏览器就开始调用 GPU 绘制，合成图层，将内容显示在屏幕上了

# nood.js