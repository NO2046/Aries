!function(){
    var view = View('#topNavBar')
    var controller = { /* -controller的所有属性都是对view的操作- */
        view: null,
        init: function(view){ /* -初始化view- */
            this.view = view //this 就是 controller
            this.bindEvents() //this 转成call 才能确定
        },
        bindEvents: function(){  /* -绑定view- */
            var view = this.view
            window.addEventListener('scroll',()=>{
                if (window.scrollY > 0) {
                    this.active() //箭头函数没有this，此this
                } else {          //此this为上下文中的this
                    this.deactive()
                }
            })
        },
        /*bindEvents: function(){
            var view = this.view
            window.addEventListener('scroll',function(){
                if (window.scrollY > 0) {
                    this.active() //如果不绑定，则this为用户触发的元素
                } else {
                    this.deactive()
                }
            }.bind(this)) //绑定this
        },*/
        active: function(){  /* -激活view- */
            this.view.classList.add('sticky')
        },
        deactive: function(){ /* -非激活view- */
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
    //controller.init.call(controller,view)
}.call()
