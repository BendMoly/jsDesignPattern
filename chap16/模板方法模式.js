// 模板类 基础提示框 data 渲染数据
var Alert = function(data){
	// 如果没有数据则返回
	if (!data) {
		return;
	}
	// 设置内容
	this.content = data.content;
	// 创建提示框面板
	this.panel = document.createElement('div');
	// 创建提示内容组件
	this.contentNode = document.createElement('p');
	// 创建确定按钮组件
	this.confirmBtn = document.createElement('span');
	// 创建关闭按钮组件
	this.closeBtn = document.createElement('b');
	// 为提示框面板添加类
	this.panel.className = 'alert';
	// 为关闭按钮添加类
	this.closeBtn.className = 'a-close';
	// 为确定按钮添加类
	this.confirmBtn.className = 'a-confirm';
	// 为确定按钮添加文案
	this.confirmBtn.innerHTML = data.confirm || '确认';
	// 为提示内容添加文案
	this.contentNode.innerHTML = this.content;
	// 点击确定按钮执行方法，如果data有success方法则执行，反之执行空函数
	this.success = data.success || function(){};
	// 点击关闭按钮执行方法
	this.fail = data.fail || function(){}
}
Alert.prototype = {
	init: function(){
		this.panel.appendChild(this.closeBtn);
		this.panel.appendChild(this.contentNode);
		this.panel.appendChild(this.confirmBtn);

		document.body.appendChild(this.panel);

		this.bindEvent();
		this.show();
	},
	bindEvent: function(){
		var me = this;
		this.closeBtn.onclick = function(){
			me.fail();
			me.hide();
		}
		this.confirmBtn.onclick = function(){
			me.success();
			me.hide()
		}
	},
	hide: function(){
		this.panel.style.display = 'none';
	},
	show: function(){
		this.panel.style.display = 'block';
	}
}

// 右侧按钮提示框
var RightAlert = function(data){
	Alert.call(this, data);

	this.confirmBtn.className = this.confirmBtn.className + ' right';
}
RightAlert.prototype = new Alert();

// 标题提示框
var TitleAlert = function(data){
	Alert.call(this, data);
	this.title = data.title;
	this.titleNode = document.createElement('h3');
	this.titleNode.innerHTML = this.title;
}
TitleAlert.prototype = new Alert();
TitleAlert.prototype.init = function(){
	this.panel.insertBefore(this.titleNode, this.panel.firstChild);
	Alert.prototype.init.call(this);
}

// 带有取消按钮的弹出框
var CancelAlert = function(data){
	TitleAlert.call(this, data);
	this.cancel = data.cancel;
	this.cancelBtn = document.createElement('span');
	this.cancelBtn.className = 'cancel';
	this.cancelBtn.innerHTML = this.cancel || '取消';
}
CancelAlert.prototype = new Alert();
CancelAlert.prototype.init = function(){
	TitleAlert.prototype.init.call(this);

	this.panel.appendChild(this.cancelBtn)
}
CancelAlert.prototype.bindEvent = function(){
	var me = this;
	TitleAlert.prototype.bindEvent.call(this);

	this.cancelBtn.onclick = function(){
		me.fail();
		me.hide();
	}
}

new CancelAlert({
	'title': '提示标题',
	'content': '提示内容',
	'success': function(){
		alert('ok');
	},
	'fail': function(){
		alert("fail");
	}
}).init();

// 格式化字符串方法
function formateString(str, data){
	return str.replace(/\{#(\w+)#\}/g, function(match, key){
		return typeof data[key] === undefined ? '' : data[key];
	})
}
// 基本导航
var Nav = function(data){
	this.item = '<a href="{#href#}" title="{#title#}">{#name#}</a>';
	this.html = '';
	for(var i = 0, len = data.length; i < len; i++){
		this.html += formateString(this.item, data[i]);
	}
	return this.html;
}
// 带有消息提醒信息导航
var NumNav = function(data){
	var tpl = '<b>{#num#}</b>';
	for(var i = data.length - 1; i >= 0; i--){
		data[i].name += data[i].name + formateString(tpl, data[i]);
	}
	console.log(data);
	return Nav.call(this, data);
}
// 带有链接地址的导航
var LinkNav = function(data){
	var tpl = '<span>{#link#}</span>';
	for(var i =data.length - 1; i >= 0; i--){
		data[i].name += data[i].name + formateString(tpl, data[i]);
	}
	return Nav.call(this, data);
}

var nav = document.getElementById('content');
nav.innerHTML = NumNav([
		{
			'href': 'http://www.baidu.com',
			'title': '百度一下你就知道',
			'name': '百度',
			'num': '10'
		},
		{
			'href': 'http://www.taobao.com',
			'title': '淘宝一下你就知道',
			'name': '淘宝',
			'num': '2'
		},
		{
			'href': 'http://www.qq.com',
			'title': 'qq一下你就知道',
			'name': 'qq',
			'num': '3'
		}
	])