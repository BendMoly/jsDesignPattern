var ResultState = function() {
    // 判断结果保存在内部状态中
    var States = {
            state0: function() {
                // do something
            },
            state1: function() {
                // do something
            },
            state2: function() {
                // do something
            },
            state3: function() {
                // do something
            },
            state4: function() {
                // do something
            }
        }
        // 获取某一种状态并执行其对应的方法
    function show(result) {
        States['state' + result] && States['state' + result]();
    }
    return {
        show: show
    }
}();
ResultState.show(3);

var MarryState = function() {
    // 内部状态私有变量
    var _currentState = {},
        states = {
            jump: function() {
                console.log('jump');
            },
            move: function() {
                console.log('move');
            },
            shoot: function() {
                console.log('shoot');
            }
        };
    // 动作控制类
    var Action = {
        changeState: function() {
            // 组合动作通过传递多个参数实现
            var arg = arguments;
            // 重置内部状态
            _currentState = {};
            if (arg.length) {
                for (var i = 0, len = arg.length; i < len; i++) {
                    _currentState[arg[i]] = true;
                }
            }
            return this;
        },
        goes: function() {
            for (var i in _currentState) {
                states[i] && states[i]();
            }
            return this;
        }
    }

    return {
        change: Action.changeState,
        goes: Aciton.goes
    }
}
var marry = new MarryState();
marry
    .change('jump', 'shoot')
    .goes()
    .goes()
    .change('shoot')
    .goes();