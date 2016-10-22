import { Component } from '@angular/core';
const AIRPORT:number=3900;
const APP:number=1700;
const FESTIVES:number=1900;
const UNITS:number=50;
const DEFAULT:number=4100;
const MIN:number=52;

export class Ride {
    airport:boolean=false;
    app:boolean=false;
    festives:boolean=false;
    numUnits:number=0;
    total:number=DEFAULT;
 }




@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'

})
export class AppComponent { 
	
    ride:Ride;
 
    run(ride:Ride){
        this.ride.numUnits=ride.numUnits;
        if(ride.numUnits>MIN){
            this.ride.total=this.ride.numUnits*UNITS;
        }
        
    }


	isFestive(ride:Ride){
        if(!this.ride.festives){
        this.ride.festives=true;
        this.ride.total=this.ride.total+FESTIVES;
        }
        else{
        this.ride.festives=false;
        this.ride.total=this.ride.total-FESTIVES;    
        }

	}
	isAirport(ride:Ride){
        if(!this.ride.airport){
        this.ride.airport=true;
        this.ride.total=this.ride.total+AIRPORT;
        }
        else{
        this.ride.airport=false;
        this.ride.total=this.ride.total-AIRPORT;
        }

	}
    isApp(ride:Ride){
        if(!this.ride.app){
        this.ride.app=true;
        this.ride.total=this.ride.total+APP;            
        }
        else {
        this.ride.app=false;
        this.ride.total=this.ride.total-APP;
        }

    }

}




    ;