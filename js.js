var fib = function (n) {
	var a=1, b=1, c;
	if (n===1 || n===2) {
		alert(1) ;
	}
	for (var i = 3; i <= n; i++) {
		c = a+b;
		a=b;
		b=c;
	}
	alert("Fib("+n+") = "+c);
}
fib(4);
fib(7);
fib(2);