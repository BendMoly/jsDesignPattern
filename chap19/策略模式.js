var Strategy = function(){
    // 内部算法对象
    var strategy = {
        method1: function(val){
            // do something
        },
        method2: function(val){
            // do something
        },
        method3: function(val){
            // do something
        },
        method4: function(val){
            // do something
        },
        method5: function(val){
            // do something
        }
    }
    // 调用接口
    return {
        goes: function(method, val){
            return strategy[method] && strategy[method](val);
        },
        addStrategy: function(type, fn){
            strategy[type] = fn;
        }
}()