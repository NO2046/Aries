!function(){
    var view  = View('#mySlides')
    var controller = {
        //view:null,
        swiper:null,
        swiperOptions: {
            loop: true,
            pagination: {el: '.swiper-pagination',},
            navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',}
        },
        init:function(view){
            //this.view = view
            this.initSwiper() // 相当于 this.initSwiper.call(this)
        },
        initSwiper:function(){        //this.view......
            this.Swiper = new Swiper (view.querySelector('.swiper-container'),
            this.swiperOptions
            )   
        }
    }
    controller.init(view)
}.call()
