function new_button()
{
	name=prompt("Введите название кнопки")
	var knopka = document.createElement (('v' == '\v') ? '<input name="myName">' : 'input'); 
	knopka.type = 'button'; 
	knopka.value = name; 
	knopka.style.cssText = 'color: red';
	document.getElementById ('myPlace').appendChild (knopka);
}
function new_label()
{
	name=prompt("Введите значение текстового поля")
	var text = document.createElement ('input'); 
	text.type="text";
	text.value = name; 
	text.style.cssText = 'color: green';
	document.getElementById ('myPlace').appendChild (text);
}
function new_select()
{
	kol=prompt("Введите количество элементов:")
	var list = document.createElement ('select'); 
	for(var i=0;i<kol;i++){
		name=prompt("Введите значение элемента списка:");
		list.options[i] = new Option(name);
		list.style.cssText = 'color: blue';
		document.getElementById ('myPlace').appendChild (list);
	}
}

function dop(){
	var tm = new Date();
	var data=("Текущая дата: "+tm.getDate()+".0"+tm.getMonth()+"."+tm.getFullYear());
	var time=("Текущее время: "+tm.getHours()+":"+tm.getMinutes());
	var advice=["Совет1","Совет2","Совет3","Совет4","Совет5",data,time]
	var number=parseInt(random(1,7));
	switch(number){
	case 1:alert(advice[0]);
		break;
	case 2:alert(advice[1]);
		break;
	case 3:alert(advice[2]);
		break;
	case 4:alert(advice[3]);
		break;
	case 5:alert(advice[4]);
		break;
	case 6:alert(advice[5]);
		break;
	case 7:alert(advice[6]);
		break;	
	}
	
	

}

function startTime()
{
	var tm=new Date();
	var data=("Текущая дата: "+tm.getDate()+".0"+tm.getMonth()+"."+tm.getFullYear());
	var h=tm.getHours();
	var m=tm.getMinutes();
	var s=tm.getSeconds();
	h=checkTime(h);
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('myTime').innerHTML="Текущее время: "+h+":"+m+":"+s+"<br>"+data;
	t=setTimeout('startTime()',500);
}
function checkTime(i)
{
	if (i<10)
	{
		i="0" + i;
	}
	return i;
}

function random(m,n){
	m=parseInt(m);
	n=parseInt(n);
	return Math.floor(Math.random()*(n-m+1)+m);
}

function del(){
	document.getElementById('myPlace').innerHTML="";
}
function del2(){
	document.getElementById('myPlace').innerHTML="";
}
function del3(){
	document.getElementById('myPlace').innerHTML="";
}