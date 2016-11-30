window.onload=function(){
	

function $(id){
	return document.getElementById(id)
}
 
function Stu(name, cha, math, eng){
	this.name = name;
	this.cha = cha;
	this.math = math;
	this.eng = eng;
	this.sum = cha + math + eng;
}

function Table(data){
	this.data = data;
}

var data= [ new Stu("小明",79,90,70),
			new Stu("小红",90,60,90),
			new Stu("小亮",60,100,70)
		  ];
		  
Table.prototype.sortNumberUp=function(th){
	this.data.sort(function(a,b){
		return a[th]-b[th];
	})
}
Table.prototype.sortNumberDown=function(th){
	this.data.sort(function(a,b){
		return b[th]-a[th];
	})
}




 
var table=new Table(data) 
var triangleUp=document.querySelectorAll(".triangleUp")
var triangleDown=document.querySelectorAll(".triangleDown")
var tbody=$("tbody")

//function addEvent(element,eventName,listener){
//	if(element.addEventListener){
//		element.addEventListener(eventName,listener,false)
//	}else if(element.attachEvent){
//		element.attachEvent("on"+eventName,listener,false)
//	}else{
//		element["on"+eventName]=listener
//	}
//}
function addEvent(element, eventName, listener) {
    if (element.addEventListener) {
        element.addEventListener(eventName, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, listener);
    } else {
        element["on" + eventName] = listener;
    }
}

function init(){
	table.render(tbody)
	for(var i = 0; i < triangleUp.length; i++){
		addEvent(triangleUp[i], 'click', function(){
			console.log(88)
			table.sortNumberUp(this.parentNode.id);
			table.render(tbody);
		})
	}
	for(var i = 0; i < triangleDown.length; i++){
		addEvent(triangleDown[i], 'click', function(){
			table.sortNumberDown(this.parentNode.id);
			table.render(tbody);
		})
	}
}



Table.prototype.render=function(tbody){
	tbody.innerHTML=""
	for (var i=0;i<3;i++) {
		var tr="<tr><td>"+this.data[i].name+"</td><td>"+this.data[i].cha+"</td><td>"+this.data[i].math+"</td><td>"+this.data[i].eng+"</td><td>"+this.data[i].sum+ "</td></tr>";
//		var tr = "<tr><td>" + this.data[i].name + "</td><td>" + this.data[i].cha + "</td><td>" + this.data[i].math +"</td><td>" + data[i].eng + "</td><td>" + data[i].sum + "</td></tr>";
		tbody.innerHTML+=tr;
	}
	
}
init()
}