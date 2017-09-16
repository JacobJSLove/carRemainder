'use strict';

export class vehicle {
	constructor() {
		this.ID = Math.floor( Math.random() * 10000 );
	}
}
export class ClientCar extends vehicle {
	constructor( name, ID ) {
		super( ID );
		this.name = name;
		this.brakes = 0;
		this.vehicleCondition = 0;
		this.brakesCondition = 1;
	}
	get vehicleDetails() {
		const carID = this.ID;
		return carID;
	}
	get condition() {
		return this.checkVehicleCondition();
	}
	checkBrakesCondition() {
		if ( this.brakes === 1 ) {
			alert( 'Brakes are in good condition' );
			this.brakesCondition = 1;
		} else {
			alert( 'Brakes are in bad condition' );
			this.brakesCondition = 0;
		}
	}
	repairBrakes() {
		console.log( 'New brakes are mounted' );
		this.brakes = 1;
	}
	checkVehicleCondition( brakesCondition ){
		let vehicle = this.brakesCondition;
		if ( vehicle === 0 ) {
			alert("test")
			return this.vehicleCondition = 'Poor';
		} else {
			alert("test")
			return this.vehicleCondition = 'Excellent';
		}
	}
}


