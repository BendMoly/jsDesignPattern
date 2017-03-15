// 篮球基类
var Basketball = function(){
	this.intro = '篮球盛产于美国';
}
Basketball.prototype = {
	getMember: function(){
		console.log('每个队伍需要5名队员');
	},
	getBallSize: function(){
		console.log('篮球很大');
	}
}
// 足球基类
var Football = function(){
	this.intro = '足球在世界范围内很流行';
}
Football.prototype = {
	getMember: function(){
		console.log('每个队伍需要11名队员');
	},
	getBallSize: function(){
		console.log('足球很大');
	}
}
// 网球基类
var Tennis = function(){
	this.intro = '每年有很多网球系列赛';
}
Tennis.prototype = {
	getMember: function(){
		console.log('每个队伍需要1名队员');
	},
	getBallSize: function(){
		console.log('网球很小');
	}
}
// 运动工厂
var SportFactory = function(name){
	switch(name){
		case 'NBA':
			return new Basketball();
		case 'wordCup':
			return new Football();
		case 'FrenchOpen':
			return new Tennis();
	}
}

//通过类实例化对象创建的造成如果这些类继承同一父类
//那么他们的父类原型上的方法是可以共用的


/**
 * 工厂模式
 */
function createBook(name, time, type){
	// 创建一个对象，并对对象拓展属性和方法
	var o = new Object();
	o.name = name;
	o.time = time;
	o.type = type;
	o.getName = function(){
		console.log(this.name);
	};
	return o;
}
var book1 = createBook('js book', 2014 'js');
var book2 = createBook('css book', 2013, 'css');

//通过创建一个新对象然后包装增强其属性和功能
//这种寄生方式创建的对象都是一个新的个体
//他们的方法不能被共用