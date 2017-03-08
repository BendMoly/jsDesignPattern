/**
 * 多态，同一种方法多种调用方式
 */
function add(){
	// 获取参数
	var arg = arguments,
	// 获取参数长度
	len = arguments.length;
	switch(arg){
		// 如果没有参数
		case 0:
			return 10;
		// 如果只有一个参数
		case 1:
			return 10 + arg[0];
		// 如果有两个参数
		case 2:
			return arg[0] + arg[1];
	}
}