// 新闻虚拟类 
var News = function(){
    // 子组件容器
    this.children = [];
    // 当前组件元素
    this.element = null;
}
News.prototype = {
    init: function(){
        throw new Error("请重写方法");
    },
    add: function(){
        throw new Error("请重写方法");
    },
    getElement: function(){
        throw new Error("请重写方法");
    }
}
// 容器类构造函数
var Container = function(id, parent){
    //构造函数继承父类
    News.call(this);
    // 模块id
    this.id = id;
    // 模块的父容器
    this.parent = parent;
    // 构建方法
    this.init();
}
// 寄生式继承父类原型方法
inheritPrototype(Container, News);
// 构建方法
Container.prototype.init = function(){
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container';
}
// 添加子元素方法
Container.prototype.add = function(child){
    // 在子元素容器中插入元素
    this.children.push(child);
    // 插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
}
// 获取当前元素方法
Container.prototype.getElement = function(){
    return this.element;
}
// 显示方法
Container.prototype.show = function(){
    this.parent.appendChild(this.element);
}

// 行成员集合类
var Item = function(classname){
    News.call(this);
    this.classname = classname || '';
    this.init();
}
inheritPrototype(Item, News);
Item.prototype.init = function(){
    this.element = document.createElement('li');
    this.element.className = this.classname;
}
Item.prototype.add = function(child){
    // 在子元素容器中插入元素
    this.children.push(child);
    // 插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
}
Item.prototype.getElement = function(){
    return this.element;
}

// 新闻组合体类
var NewsGroup = function(classname){
    News.call(this);
    this.classname = classname || '';
    this.init();
}
inheritPrototype(NewsGroup, News);
NewsGroup.prototype.init = function(){
    this.element = document.createElement('div');
    this.element.className = this.classname;
}
NewsGroup.prototype.add = function(child){
    // 在子元素容器中插入元素
    this.children.push(child);
    // 插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
}
NewsGroup.prototype.getElement = function(){
    return this.element;
}

// 图片新闻类
var ImageNews = function(url, href, classnam){
    News.call(this);
    this.url = url || '';
    this.href = href || '#';
    this.classname = classname || 'normal';
    this.init();
}
inheritPrototype(ImageNews, News);
ImageNews.prototype.init = function(){
    this.element = document.createElement('a');
    var img = new Image();
    img.src = this.url;
    this.element.appendChild(img);
    this.element.className = 'image-news' + this.classname;
    this.element.href = this.href;
}
ImageNews.prototype.add = function(){}
ImageNews.prototype.getElement = function(){
    return this.element;
}

// 基类新闻
var IconNews = function(text, href, type){
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || 'video';
    this.init();
}
inheritPrototype(IconNews, News);
IconNews.prototype.init = function(){
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'icon ' + this.type;
}
IconNews.prototype.add = function(){}
IconNews.prototype.getElement = function(){
    return this.element;
}
var EasyNews = function(text, href){
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.init();
}
inheritPrototype(EasyNews, News);
EasyNews.prototype.init = function(){
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'text';
}
EasyNews.prototype.add = function(){}
EasyNews.prototype.getElement = function(){
    return this.element;
}
var TypeNews = function(text, href, type, pos){
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || '';
    this.pos = pos || 'left';
    this.init();
}
inheritPrototype(TypeNews, News);
TypeNews.prototype.init = function(){
    this.element = document.createElement('a');
    if (this.pos === 'left') {
        this.element.innerHTML = '[' + this.type + ']' + this.text;
    }else{
        this.element.innerHTML = this.text + ' [' + this.type + ']';
    }
    this.element.href = this.href;
    this.element.className = 'text';
}
TypeNews.prototype.add = function(){}
TypeNews.prototype.getElement = function(){
    return this.element;
}

// 实例演示
// 在使用的过程中通过add方法像树级一样逐层创建新闻
var news1 = new Container('news', document.body);
news1.add(
    new Item('normal').add(
        new IconNews('PDD—一人我饮酒醉', '#', 'video')
    )
).add(
    new Item('normal').add(
        new IconNews('国足誓赢韩国', '#', 'live')
    )
).add(
    new Item('normal').add(
        new NewsGroup('has-img').add(
            new ImageNews('img/1.jpg', '#', 'small')
        ).add(
            new EasyNews('徐静蕾背后的男人', '#');
        )
    )
).add(
    new Item('normal').add(
        new TypeNews('广东蝉联18连冠', '#', 'CBA', 'left')
    )
).add(
    new Item('normal').add(
        new TypeNews('哈登证实没有本拉登血统', '#', 'NBA', 'right')
    )
)
