$(function(){
	var input=$(".hidden-input");
	var todos=[];
	
	var m;
	
	
//	点击添加功能
	$(".show").on("touchend",function(){
		$(".hidden").show();
	})
	$(".head-nav3").on("touchend",function(){
		$(".hidden").show();
	})
//	添加todo
	$(".add").on("touchend",function(){
		var v=$.trim(input.val());
		if(!v){
			return;
		}
		
		var todo={
			name:v,
			state:0
		}		
		todos.push(todo)		
		localStorage.todo=JSON.stringify(todos)
		$("<div class='kuai1'><div class='thing-left'><ul class='circle'><li ></li></ul></div><div class='content'><h3 id='h3'>" + v +"</h3><h4>DUE TOMORROW</h4></div></div>").appendTo($(".kuai"))
		input.val("")
		$(".hidden").hide();

	})
	
//	本地存储
	if(localStorage.todo){
		todos=JSON.parse(localStorage.todo)	
		for(var i=0;i<todos.length;i++){			
			var c=(todos[i].state)?"line":""	;
			$("<div class='kuai1'><div class='thing-left'><ul class='circle'><li ></li></ul></div><div class='content'><h3 id='h3' class='"+ c +"'>" + todos[i].name +"</h3><h4>DUE TOMORROW</h4></div></div>").appendTo($(".kuai"))
			
		}
	}
	
	$(".thing").on("touchstart","h3",function(e){
		 m=e.originalEvent.changedTouches[0].clientX;	
		
	})
	$(".thing").on("touchend","h3",function(e){
		 var n=e.originalEvent.changedTouches[0].clientX;
		 
		 
		 if(n-m>=50){
		 	$(this).addClass("line");
		 	todos[$(this).index()].state=1;
		 	localStorage.todo=JSON.stringify(todos)
		 }
		 if(n-m<-50){
		 	$(this).removeClass("line");
		 	todos[$(this).index()].state=0;
		 	localStorage.todo=JSON.stringify(todos)
		 }
	})
})
