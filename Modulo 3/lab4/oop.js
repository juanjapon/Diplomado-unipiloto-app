function Carro(marca,tamaño,placa){
	this.marca=marca;
	//array de 2 campos que contiene el ancho y largo en metros 
	this.tamaño=tamaño;
	this.placa=placa;
}

var deportivo= new Carro("ferrari",[2,4],"xvy249");

Carro.prototype.habilidad="rapido";
Carro.prototype.mostrarDatos=function(){
console.log("marca: "+this.marca);
console.log("ancho: "+this.tamaño[0]+" largo: "+this.tamaño[1]);
console.log("placa: "+this.placa);
console.log("habilidad: "+this.habilidad);
};


deportivo.mostrarDatos;