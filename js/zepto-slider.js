/**
 * Created with JetBrains PhpStorm.
 * Desc:
 * Author: chenjiajun
 * Date: 14-12-5
 * Time: 上午10:10
 */
(function(){
    $(function(){
        var slider = {
            content : $("#slider"),
            ul:$("#slider .slider-ul"),
            li:$("#slider .slider-ul li"),
            len:$("#slider .slider-ul li").length,
            speed:3000,
            index:0,
            tab:$("#slider .tab"),
            tabIndex:false,
            timer:null,
            init:function(){
                var _this = this;
                _this.initWH();
                _this.timer = setInterval(function(){
                    _this.moveLeft();
                },this.speed);
                _this.toggleTab();
            },
            bindEvent:function(){

            },
            initWH:function(){
                var _itemw = this.content.width();
                this.li.width(_itemw);
                this.ul.width(_itemw * this.len);
            },
            moveLeft:function(){
                var _itemw = this.content.width();
                if(this.index < this.len - 1){
                    this.index ++;
                }else{
                    this.index = 0;
                }

                var _marginLeft = -(this.index * _itemw);
                this.ul.animate({
                    marginLeft:_marginLeft
                });
                this.toggleTab();

            },
            toggleTab:function(){
                var _this = this;
                if(!_this.tabIndex){
                    _this.tabIndex = true;
                    for(var i = 0;i<_this.len;i++){
                        var span = $('<span></span>');
                        _this.tab.append(span);
                    }
                }
                $(_this.tab.find("span")).each(function(){
                    var _this = $(this);
                    if(_this.hasClass("active-tab")){
                       _this.removeClass("active-tab");
                    }
                });
                _this.tab.find("span").eq(_this.index).addClass("active-tab");
            }
        }
        slider.init();
    });

})();