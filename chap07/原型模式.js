// 图片轮播类
var LoopImages = function(imgArr, container){
	this.imagesArray = imgArr;		//轮播图片数组
	this.container = container;		//轮播图片容器
	this.createImage = function(){}	//创建轮播图片
	this.changeImage = function(){}	//切换下一张图片
}
// 上下滑动切换类
var SlideLoopImg = function(imgArr, container){
	// 构造函数继承图片轮播类
	LoopImages.call(this, imgArr, container);
	// 重写继承的切换下一张图片方法
	this.changeImage = function(){
		console.log('SlideLoopImg changeImage function');
	}
}
// 渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow){
	LoopImages.call(this, imgArr, container);
	// 切换箭头私有变量
	this.arrow = arrow;
	this.changeImage = function(){
		console.log('FadeLoopImg changeImage function');
	}
}
// 实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg([
		'1.png',
		'2.png',
		'3.png',
		'4.png'
	], 'slide', [
		'left.png',
		'right.png'
	]);
fadeImg.changeImage();

// 利用一种共享机制，对于每次创建一些简单而又有差异化的属性我们可以放在构造函数中
// 将一些消耗资源比较大的方法放在基类的原型中
// 避免不必要的消耗

// 更优解决方式
// 图片轮播类
var LoopImages = function(imgArr, container){
	this.imagesArray = imgArr;		//轮播图片数组
	this.container = container;		//轮播图片容器
}
LoopImages.prototype = {
	// 创建轮播图片
	createImage: function(){
		console.log('LoopImages createImage function');
	},
	// 切换下一张图片
	changeImage: function(){
		console.log('LoopImages changeImage function');
	}
}
// 上下滑动切换类
var SlideLoopImg = function(imgArr, container){
	// 构造函数继承图片轮播类
	LoopImages.call(this, imgArr, container);
}
SlideLoopImg.prototype = new LoopImages()
SlideLoopImg.prototype.changeImage = function(){
	console.log('SlideLoopImg changeImage function');
}
// 渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow){
	LoopImages.call(this, imgArr, container);
	// 切换箭头私有变量
	this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages()
FadeLoopImg.prototype.changeImage = function(){
	console.log('FadeLoopImg changeImage function');
}
// 测试用例：
console.log(fadeImg.container);
fadeImg.changeImage();

// 原型继承
/**
 * 基于已经存在的模板对象克隆出对象的模式
 * arguments[0], arguments[1], arguments[2]：参数1， 2， 3表示模板对象
 * 使用for in 对模板引用类型进行浅复制
 */
function prototypeExtend(){
	var F = function(){},	//缓存类
		args = arguments,
		i = 0,
		len = args.length;
	for(; i < len; i++){
		// 将遍历每个模板对象中的属性
		for(var j in args[i]){
			// 将这些属性复制到缓存类原型中
			F.prototype[j] = args[i][j];
		}
	}
	return new F();
}
var penguin = prototypeExtend({
	speed: 20,
	swim: function(){
		console.log('游泳速度 ' + this.speed);
	}
},{
	run: function(speed){
		console.log('奔跑速度 ' + speed);
	}
},{
	jump: function(){
		console.log('跳跃动作');
	}
})