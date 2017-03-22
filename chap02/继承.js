// 子类的原型对象----> 类式继承
// 声明父类
function SuperClass(){
	this.superValue = true;
}
// 为父类添加公有方法
SuperClass.prototype.getSuperValue = function(){
	return this.superValue;
}
// 声明子类
function SubClass(){
	this.subValue = false;
}

// 继承父类
SubClass.prototype = new SuperClass();
// 为子类添加共有方法
SubClass.prototype.getSubValue = function(){
	return this.subValue;
}
// Eg: 将一个实例化对象赋值作为另一个对象的原型对象
// 其可以使用赋值给它的属性和方法
// 同时自身依旧可以添加方法
var instance = new SubClass();
console.log(instance.getSuperValue());
console.log(instance.getSubValue());

function SuperClass(){
	this.book = ['Javascript', 'html', 'css'];
}
function SubClass(){}
SubClass.prototype = new SuperClass();
var instance1 = new SubClass();
var instance2 = new SubClass();
console.log(instance2.book);
instance1.book.push('设计模式');
console.log(instance2.book);