

function a(){
	var myVar = 2;
	function b(){
		//var myVar;
		console.log(window.myVar);
	}
	console.log(window.myVar);
	b();
}
var myVar=1;
console.log(myVar);
a();
console.log(myVar);