// 原型式继承
function inheritObject(o){
	// 声明一个过渡函数对象
	function F(){}
	// 过渡函数的原型继承父对象
	F.prototype = o;
	// 返回过渡对象的一个实例，该实例的原型继承了父对象
	return new F()
}

var book = {
	name: 'js book',
	alikeBook: ['css book', 'html book']
}
var newBook = inheritObject(book);
newBook.name = 'ajax book';
newBook.alikeBook.push('xml book');

var ohterBook = inheritObject(book);
ohterBook.name = 'flash book';
ohterBook.alikeBook.push('as book');

console.log(newBook.name);
console.log(newBook.alikeBook);
console.log(ohterBook.name);
console.log(ohterBook.alikeBook);
console.log(book.name);
console.log(book.alikeBook);

//父类对象book中的值类型属性被复制
//引用类型属性被公用

//JavaScript值类型和引用类型有哪些 
// （1）值类型：数值、布尔值、null、undefined。 
// （2）引用类型：对象、数组、函数。