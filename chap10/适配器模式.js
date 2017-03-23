// 如果两个框架代码的书写方式相似 
window.A = A = JQuery;	//以JQ举例

// 如果两个框架代码的书写方式相差太远
// 定义框架
var A = A || {};
// 获取id元素
A.g = function(id){
	return document.getElementById(id);
}
// 为元素绑定事件
A.on = function(id, type, fn){
	// 如果传递参数是字符串则以id处理，否则以元素对象处理
	var dom = typeof id === 'string' ? this.g(id) : id;
	// 对于支持DOM2级事件处理程序addEventListener方法的浏览器
	if (dom.addEventListener) {
		dom.addEventListener(type, fn, false);
	}else if (dom.attachEvent) {
		//对于不支持addEventListener方法但支持attachEvent方法的浏览器
		dom.attachEvent('on' + type, fn);
	}else{
		// 对于不支持addEventListener方法，也不支持attachEvent方法
		// 但支持on + '事件名'的浏览器
		dom['on' + type] = fn;
	}
}
// =============> 以A框架与JQuery适配为例
A.g = function(id){
	// 通过JQ获取对象，返回第一个成员
	return $(id).get(0);
}
A.on = function(id, type, fn){
	// 如果传递参数是字符串则以id处理，否则以元素对象处理
	var dom = typeof id === 'string' ? $('#' + id) : $(id);
	dom.on(type, fn);
}

// 适配参数
function doSomeThing(obj){
	var _default = {
		name: ''
		//...
	};
	for(var i in _default){
		_default[i] = obj[i] || _default[i]
	}
	//如果obj有其他属性是默认属性没有的，根据需求进行扩展
}