var oLayer,data=[{name:"4月10日·软件学院学生节\n码上有戏，码戏有你，码戏团学生节，因你更精彩！",content:"啊，很好，决定了。\n来看【码戏团】吧！",url:"http://mp.weixin.qq.com/s?__biz=MjM5NDMyNzcwNQ==&mid=203849019&idx=1&sn=6295552c5ba954df07dbe710d0959045#rd"},{name:"4月6日·汽车系学生节\n车夜狂欢，深夜不寂寞",content:"让我想想，我知道了。\n来看【车夜狂欢】吧！",url:"http://mp.weixin.qq.com/s?__biz=MjM5Nzk2NTk0NA==&mid=216842811&idx=1&sn=32f541e085172bb8fdbf9ce69e42f585&scene=1&from=groupmessage&isappinstalled=0#rd"},{name:"4月12日·数学系学生节\n独树一帜，还你最真实的自我",content:"不用想也知道。\n来看【独树一帜】吧！",url:"http://create.maka.im/k/MH14P5A2?from=groupmessage&isappinstalled=0"},{name:"4月11日·精仪系学生节\n奇异秘境，没有主持人的大电影",content:"很困难，把你分到哪呢？\n嗯，来看【奇异秘境】吧！",url:"http://chuye.cloud7.com.cn/1880520?from=groupmessage&isappinstalled=0"}];collie.util.addEventListener(window,"load",function(){function a(a,b){return b>a?a:b}function b(){var a=collie.Timer.timeline();a.add(0,"transition",J,200,{set:["x","y"],to:[I,H]})}function c(){var a=collie.Timer.timeline();a.add(0,"transition",E,100,{set:["x","y"],to:[C,A]}),p=!0}function d(){var a=collie.Timer.timeline();a.add(0,"transition",E,100,{set:["x","y"],to:[D,A]}),p=!1}function e(){var a=collie.Timer.timeline();a.add(0,"transition",F,100,{set:["x","y"],to:[D,l.height/10-x]}),q=!1}function f(){var a=collie.Timer.timeline();a.add(0,"transition",K,100,{set:["x","y"],to:[I,A]}),r=!0}function g(){var a=collie.Timer.timeline();a.add(0,"transition",K,100,{set:["x","y"],to:[G,A]}),r=!1}function h(){new collie.DisplayObject({width:l.width,height:l.height,x:0,y:0,zIndex:4,opacity:.9,backgroundColor:"black"}).addTo(oLayer);var a=new collie.Text({x:50,y:l.height,width:l.width-100,fontSize:20,zIndex:5,fontColor:"#ffffff"}).addTo(oLayer);
j=i(),a.text(data[j].content+"\n\n\n\n\n\n\n\n\n\n"+data[j].name);var b=collie.Timer.timeline();b.add(0,"transition",a,2e3,{set:["x","y"],to:[50,200]});k=new collie.DisplayObject({width:200,height:50,x:(l.width-200)/2,y:l.height,zIndex:5,backgroundColor:"red",useEvent:!0,hitArea:[[0,0],[200,0],[200,50],[0,50]]}).addTo(oLayer);var c=new collie.Text({x:(l.width-120)/2,y:l.height,width:200,fontSize:30,zIndex:6,fontColor:"#ffffff"}).addTo(oLayer);c.text("go there!"),b.add(1900,"transition",k,100,{set:["x","y"],to:[(l.width-200)/2,l.height-100]}),b.add(1900,"transition",c,100,{set:["x","y"],to:[(l.width-120)/2,l.height-95]})}function i(){return Math.floor(4*Math.random())}l=(collie.util.queryString(),{width:document.body.clientWidth,height:document.body.clientHeight}),m=a(l.height,l.width)/10,n=230,o=150,p=!1,q=!0,r=!1,s=!1;oLayer=new collie.Layer({width:l.width,height:l.height});var t=null,u={},v={};oLayer.attach({mousedown:function(a){t=a.displayObject,a.displayObject&&(a.displayObject==y?(p&&d(),q&&e(),u={x:a.x,y:a.y},v={x:t.get("x"),y:t.get("y")}):a.displayObject==B?(p&&(d(),s=!0),f()):a.displayObject==J?(console.log("click!"),J.set({useEvent:!1}),h()):a.displayObject==k&&(console.log(j),window.location.href=data[j].url))},mouseup:function(a){if(null!==t)if(t==y){var d=t.get("x"),e=t.get("y");d>z-m&&z+m>d&&e>A-n*w&&A-o*w>e?(t.set({useEvent:!1}),B.set({useEvent:!1}),b()):p||c(),t=null,v=u={},oLayer.removeChild(a.displayObject),oLayer.addChild(a.displayObject)}else t==B&&(g(),s&&(c(),s=!1))},mousemove:function(a){if(t==y){var b=u.x-a.x,c=u.y-a.y,d=v.x-b,e=v.y-c,f=l.width-300*w,g=l.height-300*w;0-x>=d&&(d=0-x),d>=f-x&&(d=f-x),0-x>=e&&(e=0-x),e>=g-x&&(e=g-x),t.set({x:d,y:e})}}}),collie.ImageManager.add("hat","./images/hat.png"),collie.ImageManager.add("person","./images/person.png"),collie.ImageManager.add("noHatWord","./images/nohat.png"),collie.ImageManager.add("dragWord","./images/drag.png"),collie.ImageManager.add("hatWord","./images/hatWord.png"),collie.ImageManager.add("nohurt","./images/nohurt.png"),console.log(l.height),console.log(l.width);var w=a(l.width,l.height)/550,x=150*(1-w);console.log(w);var y=new collie.DisplayObject({width:300,height:300,x:(l.width-300)/2,y:l.height/10-x,angle:0,zIndex:1,useEvent:!0,backgroundImage:"hat",scaleX:w,scaleY:w,opacity:1,hitArea:[[15,280],[67,290],[124,293],[184,299],[198,295],[269,271],[210,266],[196,231],[177,213],[189,188],[157,144],[156,133],[181,117],[194,98],[181,89],[143,79],[148,111],[89,134],[88,142],[117,173],[90,186],[54,275],[17,277]],scale:w}).addTo(oLayer),z=(l.width-300)/2,A=l.height-430*w-x,B=new collie.DisplayObject({width:300,height:350,x:z,y:A,angle:0,zIndex:0,useEvent:!0,backgroundImage:"person",scaleX:w,scaleY:w,opacity:1,hitArea:[[11,426],[39,281],[98,200],[71,178],[60,139],[39,112],[62,84],[73,91],[114,45],[186,51],[224,92],[249,90],[259,115],[230,144],[207,191],[248,234],[279,326],[279,435],[24,425]],scale:w}).addTo(oLayer),C=z+230*w,D=l.width+10,E=new collie.DisplayObject({width:300,height:300,x:D,y:A,angle:0,zIndex:2,useEvent:!1,backgroundImage:"noHatWord",scaleX:w,scaleY:w,opacity:1,scale:w}).addTo(oLayer),F=new collie.DisplayObject({width:300,height:300,x:C,y:l.height/10-x,angle:0,zIndex:3,useEvent:!1,backgroundImage:"dragWord",scaleX:w,scaleY:w,opacity:1,scale:w}).addTo(oLayer),G=-x-300*w,H=A-n*w,I=-x,J=new collie.DisplayObject({width:300,height:300,x:G,y:H,angle:0,zIndex:3,useEvent:!0,backgroundImage:"hatWord",scaleX:w,scaleY:w,opacity:1,hitArea:[[18,181],[70,230],[134,242],[197,230],[222,203],[226,108],[190,27],[125,1],[50,11],[8,70],[7,136]],scale:w}).addTo(oLayer),K=new collie.DisplayObject({width:300,height:300,x:G,y:A,angle:0,zIndex:3,useEvent:!0,backgroundImage:"nohurt",scaleX:w,scaleY:w,opacity:1,scale:w}).addTo(oLayer);collie.Renderer.addLayer(oLayer),collie.Renderer.load(document.getElementById("container")),collie.Renderer.start();

});

