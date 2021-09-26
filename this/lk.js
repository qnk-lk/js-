let obj={
    name:'张三',
    age:this,
    fn:function(){
        console.log(this)
    }
}
//此时的age属性值的this指向window
console.log(obj.age)
//一个函数中的this指向它的上一次也就是obj这个对象
obj.fn()
