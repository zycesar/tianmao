$(function(){
//轮播==========================================================
  // 后背景a轮播
  var bjlb=$("a",$(".bjlb")[0]);
  var imgs = $("a", $(".box")[0]);
  var wind = $(".datu")[0];
  var ul=$("ul",wind)[0]
  var yuan1 = $("li",ul);
  var flag= true;
   //状态初始化
   bjlb[0].style.zIndex=1;
   imgs[0].style.zIndex = 1;
   yuan1[0].style.background = "red";
  //记录当前图片
   var num = 0;
   var t = setInterval(xunh, 3000)
  wind.onmouseover = function(){
    clearInterval(t)
  }
  wind.onmouseout = function(){
    t = setInterval(xunh, 3000)
  }
    function xunh(){
    //更新图片下标
    num++;
    //判断num是否超过
    if (num==imgs.length){
         num=0;
       }
    //所有的图片层级下去，当前的层级调高。zIndex
    for (var i = 0; i < imgs.length; i++){
          animate(imgs[i],{opacity:0});
          animate(bjlb[i],{opacity:0});
          yuan1[i].style.background = "#eee";
       }
          animate(imgs[num],{opacity:1},function(){flag=true;});
          animate(bjlb[num],{opacity:1});
          yuan1[num].style.background = "red"
  } 
  function xunh1(){
    num--; //更新图片下标
    if (num < 0){ //判断num是否超过
       num = imgs.length - 1;
    }
    //所有的图片层级下去，当前的层级调高。zIndex
    for (var i = 0; i < imgs.length; i++){
        animate(imgs[i],{opacity:0});
        animate(bjlb[i],{opacity:0});
        yuan1[i].style.background = "#eee";
    }
        animate(imgs[num],{opacity:1});
        animate(bjlb[num],{opacity:1},function(){flag=true;});
        yuan1[num].style.background = "red"
  }
  for (var i = 0; i < yuan1.length; i++){
        yuan1[i].index = i;
        yuan1[i].onclick = function() {
          for (var i = 0; i < imgs.length; i++){
              animate(imgs[i],{opacity:0});
              animate(bjlb[i],{opacity:0});
              yuan1[i].style.background = "#eee";
      }
              animate(imgs[this.index],{opacity:1});
              animate(bjlb[this.index],{opacity:1});
             yuan1[this.index].style.background = "red"
             num = this.index;//下标一至
    }
  }
      var xleft = $(".xiaoleft")[0];
      var xright = $(".xiaoright")[0];
      xright.onclick = function(){
          if(flag){
          flag=false;
          xunh();
          }
      }
      xleft.onclick = function(){
          if(flag){
          flag=false;
          xunh1();
          }
      }
//轮播end================================================ 
//选项卡-----------------------
     var leftwz=$(".d");
     var item=$(".item")[0];
     for(var i=0;i<leftwz.length;i++){
      leftwz[i].onmouseover=function(){
        item.style.display="block";
      }
       leftwz[i].onmouseout=function(){
        item.style.display="none";
      }
     }
// 右导航rightnav
    var rightnav=$(".rightnav")[0];
    var ch=document.documentElement.clientHeight;
    rightnav.style.height=ch+"px";
    var t=$(".t",rightnav);
    var backtop=$(".backtop",rightnav)[0];
    for(var i=0;i<t.length;i++){
      t[i].index=i;
      var an;
      var rightflag=true;
      t[i].onmouseover=function(){
        rightflag=false;
        an=$(".animate",t[i]);
        // animate(an[this.index],{});
        an[this.index].style.display="block";
        animate(an[this.index],{opacity:1,right:35},300)
      }
      t[i].onmouseout=function(){
        animate(an[this.index],{right:85,opacity:0,display:"none"},300)
      }
    }
// header选项卡==================================
    var mhy2=$(".mhy2")[0];
    var hd=$(".hd",mhy2);
    var af=$(".af",mhy2);
    for(var i=0;i<hd.length;i++){
      hd[i].index=i;
      hd[i].onmouseover=function(){
        af[this.index].style.display="block";
      }
      hd[i].onmouseout=function(){
        af[this.index].style.display="none";

      }
    }
// ==============================================
// 中心放大===========================================
    var zhonglei=$(".zhonglei")[0];
    var f=$(".f",zhonglei);
    for(var i=0;i<f.length;i++){
      f[i].onmouseover=function(){
          var fd=$("img",this)[0];
          animate(fd,{width:150,bottom:10})
      }
      f[i].onmouseout=function(){
          var fd=$("img",this)[0];
          animate(fd,{width:130,bottom:20})
      }
    }
// ==================================================
//楼层跳转 ----------------------------------------------
    var zuods9=$(".zuods9")[0];

    backtop.onclick=zuods9.onclick=function(){           
        animate(document.documentElement,{scrollTop:0}); 
        animate(document.body,{scrollTop:0});
    }
      var floors=$(".floor");
      var floorArr=[];
       for(var i=0;i<floors.length;i++){
          floorArr.push(floors[i].offsetTop);
       }
      var annius=$(".zuods")[0];
      var lis=$(".zzs",annius);
      var zuods1=$(".hot")
      //点击lis事件，动画效果
      for(var i=0;i<lis.length;i++){
          lis[i].index=i;     
          lis[i].onclick=function(){
          var flo=floorArr[this.index];
          animate(document.documentElement,{scrollTop:flo});
          animate(document.body,{scrollTop:flo});
         }  
      }
// 搜索框---滚动事件====================================
window.onscroll=function() {
   var search=$(".search")[0];//header Fixed 搜索框
   var ckh=document.documentElement.clientHeight;
   var heighth=document.documentElement.scrollTop||document.body.scrollTop;
   var floor=$(".rmpp")[0];
   var floors=floor.offsetTop;
   // console.log(floors);
   var fg=true;
   var zuods=$(".zuods")[0];//左边的导航
      if(heighth>=floors+300){    
      if(fg){   
        fg=false;
          animate(zuods,{left:0});
          animate(search,{top:0});
        }     
    }else{ 
     if(!fg){
        fg=true;
           animate(zuods,{left:-50});
           animate(search,{top:-50});
      }            
     } 
     // 按钮
   var annius=$(".zuods")[0];
    // 楼层滚动导航颜色改变
   var bj=$(".bj");
   // console.log(bj)
   var floorss=$(".floor"); 
       for(var i=0;i<floorss.length;i++){
            if(heighth>=floorss[i].offsetTop){
              for(var j=0;j<lis.length;j++){
                 // lis[j].style.background="";
                 bj[j].style.display="none";
                 }
               // lis[i].style.background="red";
               bj[i].style.display="block";
            }
         }
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      var scrolltop=obj.scrollTop;
      var boxx=$(".anzxu");          
      var newarr=[];
      for (var i = 0; i < boxx.length; i++) {
        newarr.push(boxx[i].offsetTop);      
      }
        for (var i = 0; i < boxx.length; i++) {
          var imgs=$("img",boxx[i]);
          if (ckh+scrolltop>newarr[i]+300) {
             for (var j = 0; j < imgs.length; j++) {
               imgs[j].src=imgs[j].getAttribute("aa");
             }
            } 
        }
}
// 滚轮事件end=======================================
// 中部显示
    var banan1=$(".banan1");
    var hyf=$(".hyf");
    for(var i=0;i<banan1.length;i++){
      banan1[i].index=i;
      banan1[i].onmouseover=function(){
        hyf[this.index].style.display="block";
      }
       banan1[i].onmouseout=function(){
        hyf[this.index].style.display="none";
      }
    }

})