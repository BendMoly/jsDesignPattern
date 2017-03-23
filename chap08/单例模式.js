// 命名空间 
// 解决不同的人使用相同的命名来开发从而造成冲突

// 创建一个小型代码库
var A = {
	Util: {
		util_method1: function(){},
		util_method2: function(){}
		//...
	},
	Tool: {
		tool_method1: function(){},
		tool_method2: function(){}
		//...
	},
	Ajax: {
		ajax_method1: function(){},
		ajax_method2: function(){}
		//...
	}
	//...
}

// 无法修改的静态变量
var Conf = (function(){
	// 私有变量
	var conf = {
		MAX_NUM: 100,	//静态变量使用全大写标注
		MIN_NUM: 1,
		COUNT: 1000
	}
	// 返回取值器对象
	return {
		// 取值器方法
		get: function(name){
			return conf[name] ? conf[name] : null;
		}
	}
})();


// 对于单例对象需要延迟创建，也称'惰性创建'
// 惰性载入单例
var LazySingle = (function(){
	// 单例实例引用
	var _instance = null;
	// 单例
	function Single(){
		// 定义私有属性和方法
		return {
			publicMethod: function(){},
			publicProperty: '1.0'
		}
	}
	// 获取单例对象接口
	return function(){
		// 如果为创建单例将创建单例
		if (!_instance) {
			_instance = Single();
		}
		return _instance;
	}
})()