//获取类名
function getClass(select, context) {
	var context = context ? context : document;

	if (document.getElementsByClassName) {
		return context.getElementsByClassName(select);
	} else {
		var all = context.getElementsByTagName('*');
		var arr = [];
		for (var i = 0; i < all.length; i++) {
			if (checkClass(all[i].className, select)) {
				arr.push(all[i]);
			}
		}
		return arr;
	}
}

function checkClass(className, select) {
	var arr = className.split(" ");
	for (var i in arr) {
		if (arr[i] == select)
			return true;
	}
	return false;
}

//获取内容
function setContext(obj, val) {
	if (val) {
		if (obj.innerText) {
			obj.innerText = val;
		} else {
			obj.textContent = val;
		}
	} else {
		if (obj.innerText) {
			return obj.innerText;
		} else {
			return obj.textContent;
		}
	}
}
//获取类名class，id名 div  [div]
function $(selector,context){
	if(typeof selector=="string"){
		var context=context||document
	    if(selector.charAt(0)=="."){
		    return getClass(selector.slice(1),context);
	    }else if(selector.charAt(0)=="#"){
		    return document.getElementById(selector.slice(1));
	    }else if(/^[a-z][a-z1-6]{0,8}/.test(selector)){
		    return context.getElementsByTagName(selector);
	    }
	    //放进来一个[div]
	    else if(/^[a-z][a-z1-6]{0,8}/.test(selector)){
		    return document.createElement(selector,slice(1,-1));
	    }
	}else if(typeof selector=="function"){
		window.onload=function(){
			selector();
		}
	}
}
/*
getStyle(one,"width")
功能  获取指定元素的某一指定样式
*/ 
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj,null)[attr]
	}
}
/*
 获取指定元素的子节点
 obj：指定的对象；
 type：获得字节点的类型
     思路

     1.获取所有的子节点。
     2.建立一个空数组。
     3.遍历所有的子节点。（判断）
           通过子节点的类型
     4.return
   有字符
*/
function getChild(Obj, type) {
	var child = Obj.childNodes;
	var type = type == undefined ? true : type;
	var arr = [];
	for (var i = 0; i < child.length; i++) {
		//传true 或者是不传
		if (type == true) {
			if (child[i].nodeType == 1) {
				arr.push(child[i])
			}
			//传flase	
		} else {
			if (child[i].nodeType == 1 || child[i].nodeType == 3 && !/^\s+$/.test(child[i].nodeValue))
				arr.push(child[i]);

		}
	}
	return arr;
}
/*
获取nextSibling下一个兄弟节点
getNext(obj)
  获得下一个兄弟节点
     思路
     1.判断是否有下一个兄弟节点

      有 就更新next=next.nextSibling
      判断next为null
      return
*/
function getNext(obj)
	{
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
    while(next.nodeType==8||next.nodeType==3){
    	  next=next.nextSibling;
    	  if(next==null){
    	  	return next;
    	  }  
    	 }
      return next;
     }

//获取第一个子元素
function firstChild(obj){   
  var child=obj.firstChild;
     if(child==null){
     	return false;
     }
     return child;
}



        
//上一个兄弟节点   

//
// insertAfter(obj.obj1)
// obj 大的
// obj1 小的
// 将obj插入到obj1后面
// 思路
//   将obj插入到obj1兄弟节点的前面
//   1.获取obj1的下一个兄弟节点
//   2.判断兄弟节点
//   true parent.inserBefore(obj.next);
//   false parent.appendChild(obj)
function insertAfter(obj,obj1){
    var next=obj1.nextSibling;
    var  father=obj1.parentNode;
    if(next)
    {    
    	 father.insertBefore(obj,next);
    }else{
         father.appendChild(obj);
    }
   
}

/*
appenBefor(obj,obj1)
功能
给父元素obj1的第一个子元素加一个
获取第一个子元素
   true parent.inserBefore(obj.fist);
   false parent.appendChild(obj)
*/
function insertBefore(obj,obj1){
	var next 

}