// 外观模式实现 
function addEvent(dom, type, fn){
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

// 获取事件对象
var getEvent = function(event){
	// 标准浏览器返回event，IE下window.event
	return event || window.event;
}
// 获取元素
var getTarget = function(event){
	var evt = getEvent(event);
	// 标准浏览器下event.target, IE下event.srcElement
	return event.target || event.srcElement;
}
// 阻止默认行为
var preventDefault = function(event){
	var evt = getEvent(event);
	// 标准浏览器
	if (event.preventDefault) {
		event.preventDefault();
	}else{
		//IE浏览器
		event.returnValue = false;
	}
}