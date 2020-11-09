!function(){
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    var view = View('.topNavBar nav > ul')
    let aTags = view.querySelectorAll('li >a')
    for (let i = 0; i < 3; i++) {
        aTags[i].onclick = function (x) {
            x.preventDefault()
            let a = x.currentTarget
            let href = a.getAttribute('href')
            let element = document.querySelector(href)
            let top = element.offsetTop
    
            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = targetTop - currentTop
            var t = Math.abs((s / 100) * 300)
            if (t > 500) { t = 600 }
            var coords = { y: currentTop };
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        }
    }
}.call()

/*initAv:function(){
    var APP_ID = 'k45FdxQicDIEYV0U2MdW8fcr-gzGzoHsz';
    var APP_KEY = 'fcyUYlT22vN4CkMLacGvi0kC';
    AV.init({appId: APP_ID,appKey: APP_KEY});
},*/