// 寄生式继承
// 声明基对象
var book = {
	name: 'js book',
	alikeBook: ['css book', 'html book']
}
function createBook(obj){
	// 通过原型继承方式创建对象
	var o = new inheritObject(obj);
	// 拓展新对象
	o.getName = function(){
		console.log(name);
	};
	// 返回拓展后的新对象
	return o;
}