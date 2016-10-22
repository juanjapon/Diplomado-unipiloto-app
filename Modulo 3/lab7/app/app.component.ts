import { Component } from '@angular/core';
export class Product {
 	id: number;
 	name: string;
 	description: string;
 	type: string;
 	price: number;
 	quantity: number;
 }

 export class User {
 	id: number;
 	name: string;
 	address: string;
 	phone: number;

 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'

})
export class AppComponent { 
	title: string = "Mis productos";
	products: Product[] = PRODUCTS;
	users: User[] = USERS;
	selected:Product;
	selectedUser:User; 


	onSelect(product:Product){
		this.selected=product;
	}
	onSelectUser(user:User){
		this.selectedUser=user;
	}
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
		id: 4,
		name: "Galax7 7",
		description: "Granada de mano",
		type: "smartphone",
		price: 500000,
		quantity: 10
}]

const USERS: User[] = [
    {
	id: 1,
 	name: "Carlos Perez",
 	address: "Calle 59 bis # 8-75",
 	phone: 3103811000
    },
    {
	id: 2,
 	name: "Raul Hernandez",
 	address: "Av 1 # 16-26",
 	phone: 3118232112
    },
    {
	id: 3,
 	name: "Gloria Niño",
 	address: "Av 1 E # 19-54",
 	phone: 3002552673
    },
    {
	id: 4,
 	name: "Juan Pedro Mendoza",
 	address: "transv 4 este # 61-05",
 	phone: 3124358180
	}]
    ;