class vehicle {
  constructor() {
    this.ID = Math.floor(Math.random()*10000);
  }
}

class clientCar extends vehicle {
  constructor(name, ID) {
    super(ID);
    this.name = name;
    this.brakes = 1;
    this.vehicleCondition = 0;
    this.brakes_Condition = 1;
  };
  get vehicleDetails() {
    const carID = this.name + ' z numerem klienta ' + this.ID;
    return carID;
  }
  get condition() {
    return this.vehicleCondition;
  };
  checkBrakesCondition() {
  	if ( this.brakes === 1 ) {
  		console.log('Brakes are in good condition');
      this.brakes_Condition = 1;
  	} else {
  		console.log('Brakes are in bad condition');
      this.brakes_Condition = 0;
  	}
  };
 repairBrakes() {
   	console.log('New brakes are mounted');
    this.brakes = 1;
  };
checkVehicleCondition(brakes_Condition){
	  let vehicle = this.brakes_Condition;
	  if (vehicle === 0 ) {
	    return this.vehicleCondition = "Car need repairs"
	  } else {
	    return this.vehicleCondition = "Car is in excellent condition"
	  }
	};
}

const myCar = new clientCar('BMW X5');
console.log(myCar.vehicleDetails);
myCar.checkBrakesCondition();
console.log(myCar.checkVehicleCondition());
myCar.repairBrakes();
myCar.checkBrakesCondition();
console.log(myCar.checkVehicleCondition());


