/**
 * 继承单对象的extend方法
 */
// 单继承 属性复制
var extend = function(target, source){
	// 遍历源对象中的属性
	for(var property in source){
		// 将源对象的属性复制到目标对象中
		target[property] = source[property];
	}
	// 返回目标对象
	return target;
}

var book = {
	name: 'javascript',
	alike: ['html', 'css', 'js']
}
var anotherBook = {
	color: 'blue'
}
extend(anotherBook, book);
console.log(anotherBook.name);
console.log(anotherBook.alike);

// 多继承 属性复制
var mix = function(){
	var i = 1,						//从第二个参数起为被继承的对象
		len = arguments.length,		//获取参数长度
		target = arguments[0],		//第一个对象为目标对象
		arg;						//缓存参数对象
	for(; i < len; i++){
		// 缓存当前对象
		arg = arguments[i];
		// 遍历被继承对象中的属性
		for(var property in arg){
			// 将被继承对象中的属性复制到目标对象中
			target[property] = arg[property]；
		}
	}
	// 返回目标对象
	return target;
}

// 将其绑定到Object对象上
Object.prototype.mix = function(){
	var i = 1,						//从第二个参数起为被继承的对象
		len = arguments.length,		//获取参数长度
		arg;						//缓存参数对象
	for(; i < len; i++){
		// 缓存当前对象
		arg = arguments[i];
		// 遍历被继承对象中的属性
		for(var property in arg){
			// 将被继承对象中的属性复制到目标对象中
			target[property] = arg[property]；
		}
	}
}