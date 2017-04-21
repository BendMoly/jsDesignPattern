/**
 * 异步请求对象
 * 参数 data 请求数据
 * 参数 dealType 响应数据处理对象
 * 参数 dom 事件源
 */
var sendData = function(data, dealType, dom){
    var xhr = new XMLHttpRequest(),
        url = 'getData.php?mod=userInfo';
    xhr.onload = function(event){
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            dealData(xhr.responseText, dealType, dom)
        }else{
            console.log('err');
        }
    }
    for(var i in data){
        url += '&' + i + '=' + data[i];
    }
    xhr.open("get", url, true);
    xhr.send(null);
}

/**
 * 处理响应数据
 * 参数 data 响应数据
 * 参数 dealType 响应数据处理对象
 * 参数 dom 事件源
 */
var dealData = function(data, dealType, dom){
    var dataType = Object.prototype.toString.call(data);
    switch(dealType){
        case 'sug':
            if (dataType === '[object Array]') {
                return createSug(data, dom);
            }
            if (dataType === '[object Object]') {
                var newData = [];
                for(var i in data){
                    newData.push(data[i]);
                }
                return createSug(newData, dom);
            }
            return createSug([data], dom);
            break;
        case 'validate':
            return createValidataResult(data, dom);
            break;
    }
}

/**
 * 创建提示框组件
 * 参数 data 响应适配数据
 * 参数 dom 事件源
 */
var createSug = function(data, dom){
    var i = 0,
        len = data.length,
        html = '';
    for(; i < len; i++){
        html += '<li>' + data[i] + '</li>';
    }
    dom.parentNode.getElementsByTagName('ul')[0].innerHTML = html;
}
/**
 * 创建校验组件
 * 参数 data 响应适配数据
 * 参数 dom 事件源
 */
var createValidataResult = function(data, dom){
    dom.parentNode.getElementsByTagName('span')[0].innerHTMl = data;
}