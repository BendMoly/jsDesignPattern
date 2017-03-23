// 安全模式创建工厂类 
var Factory = function(type, content){
	if (this instanceof Factiry) {
		var s = this[type](content);
		return new s;
	}else{
		return Factory(type, content);
	}
}
// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
	Java: function(content){
		//...
	},
	Javascript: function(content){
		//...
	}
	//以后添加其他类时仅在原型里添加即可
}