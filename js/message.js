!function(){ //MVC是一种组织代码的思想（形式），
  var view = document.querySelector('section.message') //只负责看得见的东西
  var model ={ //model 只负责跟数据相关的操作，不会出现DOM操作
    //获取数据
    fetch:function(){
      var query = new AV.Query('Message');
      return query.find() //promise对象
    ,
    //创建数据
    save:function(name,content){
      var TestObject = AV.Object.extend('Message');
      var message = new TestObject();
      return message.save({   //promise对象
      'name': name ,
      'content': content
      })
    },
    init:function(){
      //初始化
    var APP_ID = 'k45FdxQicDIEYV0U2MdW8fcr-gzGzoHsz'
    var APP_KEY = 'fcyUYlT22vN4CkMLacGvi0kC'
    AV.init({appId: APP_ID,appKey: APP_KEY});
  },
  }
  var controller = { //负责其他所有的操作
    view:null,
    model:null,
    init:function(view,model){
      this.view = view
      this.model = model
      this.form = view.querySelector('form')
      this.messageList = view.querySelector('#messageList')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    initAV:function(){
        //初始化
      var APP_ID = 'k45FdxQicDIEYV0U2MdW8fcr-gzGzoHsz'
      var APP_KEY = 'fcyUYlT22vN4CkMLacGvi0kC'
      AV.init({appId: APP_ID,appKey: APP_KEY});
    },
    loadMessages: function(){
      this.model.fetch().then(
        (message)=> { //获取数据
          let array = message.map((item)=>item.attributes)
          array.forEach((item)=>{
              let li = document.createElement('li')
              li.innerText = `${item.name}  :  ${item.content}`
              this.messageList.append(li)
          })
      })
    },
    bindEvents:function(){
      this.form.addEventListener('submit',(e)=>{
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage:function(){
      let myForm = this.form
      let content =  myForm.querySelector('input[name=content]').value
      let name =  myForm.querySelector('input[name=name]').value
      this.model.save(name,content).then(function(object){
          let li = document.createElement('li')
          let messageList = document.querySelector('#messageList')
          li.innerText = `${object.attributes.name} : ${object.attributes.content}`
          messageList.append(li)
          myForm.querySelector('input[name=content]').value = ''
      })
    }
  }
  controller.init(view,model)
}.call()
