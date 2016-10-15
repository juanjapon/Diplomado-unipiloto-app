var array=[1,2,3,4,5];

//recorro de atras adelante
for (var i = array.length - 1; i >= 0; i--) {
	console.log(array[i]);
}

//recorre  adelante atras
for (var i = 0; i < array.length; i++) {
	console.log(array[i]);
}

//buscar variable
var elementoBuscado;
for (var i = 0; i < array.length; i++) {
	if(array[i]===elementoBuscado){
		console.log(array[i]);
	}
}