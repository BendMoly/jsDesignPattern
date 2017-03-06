/**
 * 面向对象编程就是将需求抽象成一个对象
 * 然后针对次对象分析其特征（属性）与动作（方法）
 * 这个对象称之为类
 */

// 私有属性与私有方法，特权方法，对象公有属性和对象公有方法，构造器
var Book = function(id, name, price){
	// 私有属性
	var num = 1;
	// 私有方法
	function checkId(){};
	// 特权方法
	this.getName = function(){};
	this.getPrice = function(){};
	this.setName = function(){};
	this.setPrice = function(){};
	// 对象公有属性
	this.id = id;
	// 对象公有方法
	this.copy = function(){};
	// 构造器
	this.setName(name);
	this.setPrice(price);
}
// 类静态公有属性（对象不能访问）
Book.isChinese = true;
// 类静态公有方法（对象不能访问）
Book.resetTime = function(){
	console.log('new Time');
};
Book.prototype = {
	// 共有属性
	isJSBook: false,
	// 共有方法
	display: function(){}
}



//利用闭包实现类的静态变量
var Book = (function(){
	// 静态私有变量
	var bookNum = 0;
	// 静态私有方法
	function checkBook(name){}
	// 返回构造函数
	return function(newId, newName, newPrice){
		// 私有变量
		var name, price;
		// 私有方法
		function checkID(id){}
		// 特权方法
		this.getName = function(){};
		this.getPrice = function(){};
		this.setName = function(){};
		this.setPrice = function(){};
		// 公有属性
		this.id = newId;
		// 公有方法
		this.copy = function(){}
		bookNum++;
		if (bookNum > 100) {
			throw new Error('我们仅出版100本书');
		}
		// 构造器
		this.setName(name);
		this.setPrice(price);
	}
})();
Book.prototype = {
	// 共有属性
	isJSBook: false,
	// 共有方法
	display: function(){}
}
// type 2
var Book = (function(){
	// 静态私有变量
	var bookNum = 0;
	// 静态私有方法
	function checkBook(name){}
	// 创建类
	function _book(newId, newName, newPrice){
		// 私有变量
		var name, price;
		// 私有方法
		function checkID(id){};
		// 特权方法
		this.getName = function(){};
		this.getPrice = function(){};
		this.setName = function(){};
		this.setPrice = function(){};
		// 公有属性
		this.id = newId;
		// 公有方法
		this.copy = function(){}
		bookNum++;
		if (bookNum > 100) {
			throw new Error('我们仅出版100本书');
		}
		// 构造器
		this.setName(name);
		this.setPrice(price);
	}
	_book.prototype = {
		// 共有属性
		isJSBook: false,
		// 共有方法
		display: function(){}
	};
	return _book;
})()



// 安全类
var Book = function(title, time, type){
	// 判断执行过程中this是否是当前这个对象（如果是说明是用new来创建的）
	if (this instanceof Book) {
		this.title = title;
		this.time = time;
		this.type = type;
	}else{
		return new Book(title, time, type);
	}
}
var book = Book('javascript', '2014', 'js');