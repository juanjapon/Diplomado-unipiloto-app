"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Mis productos";
        this.products = PRODUCTS;
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selected = product;
    };
    AppComponent.prototype.onSelectUser = function (user) {
        this.selectedUser = user;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/product.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var PRODUCTS = [
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
    }];
var USERS = [
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
    }];
//# sourceMappingURL=app.component.js.map