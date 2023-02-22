let People = function () { //第①步，创建People函数

  function People(name, age) {//第②步，理解constructor就是指向People，People挂载着name和age两个属性
    this.name = name;
    this.age = age;
  }

  //将静态和动态的方法分别挂载在People的原型和People上。   
  creatClass(People, [{
    key: "say", value: function () {
      console.log(123)
    }
  }], [{
    key: "see", value: function () {
      alert("how are you")
    }
  }])

  return People;
}

//这里的Constructor就是指的People  
let creatClass = function ({
  return function(Constructor, protoProps, staticProps){
    //有原型上的方法挂载People.prototype上
    if(protoProps){ defineProperties(Constructor.prototype, protoProps) }
//有People对象上的方法挂载People上
if (staticProps) { defineProperties(Constructor, staticProps) }}

//定义对象属性     
let defineProperties = function (target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
})

