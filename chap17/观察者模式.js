// 将观察者放在闭包中，当页面加载时就立即执行
var Observer = (function(){
	// 防止消息队列暴漏而被篡改
	// 故将消息容器作为静态私有变量保存
	var __message = {};
	return {
		// 注册信息接口
		regist: function(type, fn){
			// 如果此消息不存在则应该创建一个该消息类型
			if (typeof __message[type] === 'undefined') {
				// 将动作推入到该消息对应的动作执行队列中
				__message[type] = [fn];
			}else{
				// 将动作方法推入到该消息对应的动作执行序列中
				__message[type].push(fn);
			}
			return this;
		},
		// 发布信息接口
		fire: function(type, args){
			// 如果该消息没有被注册，则返回
			if (!__message[type]) {
				return;
			}
			// 定义消息信息
			var events = {
				type: type,
				args: args || {}
			},
			i = 0,
			len = __message[type].length;
			// 遍历消息动作
			for(; i < len; i++){
				// 依次执行注册的消息对应的动作序列
				__message[type][i].call(this, events);
			}
		},
		// 移除信息接口
		remove: function(type, fn){
			// 如果消息动作队列存在
			if (__message[type] instanceof Array) {
				// 从最后一个消息动作遍历
				var i = __message[type].length - 1;
				for(; i >= 0; i--){
					// 如果存在该动作则在消息序列中移除相应动作
					__message[type][i] === fn && __message[type].splice(i, 1);
				}
			};
		}
	}
})()

function $(id){
	return document.getElementById(id);
}
// Engineer A
(function(){
	// 追加一则消息
	function addMsgItem(e){
		var text = e.args.text,
			ul = $('msg'),
			li = document.createElement('li'),
			span = document.createElement('button');
		li.innerHTML = text;
		// 关闭按钮
		span.onclick = function(){
			ul.removeChild(li);
			// 发布删除留言信息
			Observer.fire('removeCommentMessage', {
				num: -1
			});
		}
		// 添加删除按钮
		li.appendChild(span);
		// 添加留言节点
		ul.appendChild(li);
	}
	// 注册添加评论信息
	Observer.regist('addCommentMessage', addMsgItem);
})();

// Engineer B
(function(){
	// 更改用户消息数目
	function changeMsgNum(e){
		// 获取需要增加的用户消息数目
		var num = e.args.num;
		// 增加用户消息数目并写入页面中
		$('msg_num').innerHTML = parseInt($('msg_num').innerHTML) + num;
	}
	// 注册添加评论信息
	Observer
		.regist('addCommentMessage', changeMsgNum)
		.regist('removeCommentMessage', changeMsgNum);
})();

// Engineer C
(function(){
	// 用户点击提交按钮
	$('user_submit').onclick = function(){
		// 获取用户输入框中输入的信息
		var text = $('user_input');
		// 如果输入的信息为空则提交失败
		if (text.value === '') {
			return;
		}
		// 发布一则评论信息
		Observer.fire('addCommentMessage', {
			text: text.value,
			num: 1
		});
		text.value = '';
	}
})() 