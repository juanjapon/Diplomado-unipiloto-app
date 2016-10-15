function Carro(marca,tamaño,placa){
	this.marca=marca;
	//array de 2 campos que contiene el ancho y largo en metros 
	this.tamaño=tamaño;
	this.placa=placa;
}

var deportivo= new Carro("ferrari",[2,4],"xvy249");

Carro.prototype.habilidad="rapido";
Carro.prototype.mostrarDatos=function(){
return"marca: "+this.marca+"ancho: "+this.tamaño[0]+" largo: "+this.tamaño[1]+"placa: "+this.placa+"habilidad: "+this.habilidad;

};


console.log(deportivo.mostrarDatos);