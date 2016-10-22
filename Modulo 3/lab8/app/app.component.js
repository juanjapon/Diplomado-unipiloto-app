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
var AIRPORT = 3900;
var APP = 1700;
var FESTIVES = 1900;
var UNITS = 50;
var DEFAULT = 4100;
var MIN = 52;
var Ride = (function () {
    function Ride() {
        this.airport = false;
        this.app = false;
        this.festives = false;
        this.numUnits = 0;
        this.total = DEFAULT;
    }
    return Ride;
}());
exports.Ride = Ride;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.run = function (ride) {
        this.ride.numUnits = ride.numUnits;
        if (ride.numUnits > MIN) {
            this.ride.total = this.ride.numUnits * UNITS;
        }
    };
    AppComponent.prototype.isFestive = function (ride) {
        if (!this.ride.festives) {
            this.ride.festives = true;
            this.ride.total = this.ride.total + FESTIVES;
        }
        else {
            this.ride.festives = false;
            this.ride.total = this.ride.total - FESTIVES;
        }
    };
    AppComponent.prototype.isAirport = function (ride) {
        if (!this.ride.airport) {
            this.ride.airport = true;
            this.ride.total = this.ride.total + AIRPORT;
        }
        else {
            this.ride.airport = false;
            this.ride.total = this.ride.total - AIRPORT;
        }
    };
    AppComponent.prototype.isApp = function (ride) {
        if (!this.ride.app) {
            this.ride.app = true;
            this.ride.total = this.ride.total + APP;
        }
        else {
            this.ride.app = false;
            this.ride.total = this.ride.total - APP;
        }
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
;
//# sourceMappingURL=app.component.js.map