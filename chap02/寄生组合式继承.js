/**
 * 寄生式继承 继承原型
 * 传递参数 subClass   子类
 * 传递参数 superClass 父类
 */
function inheritPrototype(subClass, superClass){
	// 复制一份父类的原型副本保存在变量中
	var p = inheritObject(superClass.prototype);
	// 修正因为重写子类原型导致子类的constructor属性被修改
	p.constructor = subClass;
	// 设置子类的原型
	subClass.prototype = p;
}
// 原型式继承
function inheritObject(o){
	// 声明一个过渡函数对象
	function F(){}
	// 过渡函数的原型继承父对象
	F.prototype = o;
	// 返回过渡对象的一个实例，该实例的原型继承了父对象
	return new F()
}

// 定义父类
function SuperClass(name){
	this.name = name;
	this.colors = ['red', 'blue', 'yellow'];
}
// 定义父类原型方法
SuperClass.prototype.getName = function(){
	console.log(this.name);
}
// 定义子类
function SubClass(name, time){
	// 构造函数式继承
	SuperClass.call(this, name);
	// 子类新增属性
	this.time = time;
}
// 寄生式继承父类原型
inheritePrototype(SubClass, SuperClass);
// 子类新增原型方法
SubClass.prototype.getTime = function(){
	console.log(this.time);
};
// 创建两个测试方法
var instance1 = new SubClass('js book', 2014);
var instance2 = new SubClass('css book', 2013);