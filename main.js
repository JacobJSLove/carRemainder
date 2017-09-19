
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
		this.vehicleCondition = "Check!";
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
			this.brakes = 1;
		} else {
			alert( 'Brakes are in bad condition' );
			this.brakes = 0;
		}
	}
	repairBrakes() {
		alert( 'New brakes are mounted' );
		this.brakes = 1;
	}
	checkVehicleCondition( brakes ){
		let vehicle = this.brakes;
		if ( vehicle === 0 ) {
			this.vehicleCondition = 'Poor';
		} else {
			this.vehicleCondition = 'Excellent';
		}
	}
}

