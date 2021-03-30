# 收集错误信息和解决方案

## js 常见错误类型

### SyntaxError: 语法错误

1、声明的变量名不符合规范：**首位**必须是 字母、下划线（\_）或美元符号（$） var 1 // SyntaxError: Unexpected number

2、给关键字赋值：function = 5 、 var 1a // _Uncaught SyntaxError: Unexpected token_

### TypeError 类型错误(调用不存在的方法，乱调用)

1、调用不存在的方法 123() 、 var oo = {} oo.run()
2、new 关键字后接基本类型： var a = new 123

### ReferenceError 这玩意不存在

1、调用了不存在的变量
2、给一个无法被赋值的对象赋值：console.log("123") = 1
