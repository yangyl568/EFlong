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

## 


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

8. 

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

## 讲下你熟悉的ES6语法

* 
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



# vue相关

## 从源码角度讲下 双向绑定

## MVVM 框架

# webpack

## loder

## pulgin

# HTTP

## 从浏览器输入url开始经历了哪些过程

# nood.js