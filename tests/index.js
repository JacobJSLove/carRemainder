/* global chai:false */
/* eslint no-console: 0 */

'use strict';
import { vehicle, ClientCar } from '../src/main';
const expect = chai.expect;
const myCar = new ClientCar( 'BMW X5' );


describe ( 'vehicle', () => {
	it( 'vehicle is a function', () => {
		expect( vehicle ).to.be.a( 'function' );
	} ) ;
	it( 'ClientCar is a function', () => {
		expect( ClientCar ).to.be.a( 'function' );
	} ) ;
	it( 'Car name', () => {
		expect( myCar.name ).to.deep.equal('BMW X5');
	} ) ;
	it( 'Car ID ', () => {
		expect( myCar.vehicleDetails ).to.be.a('number');
	} ) ;
	it('checkBrakesCondition return brakes condition', () => {
		myCar.checkBrakesCondition()
       	let carB = myCar.brakes;
       	expect(carB).to.deep.equal(0);
  	 });
	it('get condition uses function checkVehicleCondition and set car condition value', () => {
		myCar.condition;
       	let carC = myCar.vehicleCondition;
       	expect(carC).to.deep.equal('Poor');
  	 });
	it('repairBrakes change value of brakes', () => {
		myCar.repairBrakes();
       	let carC = myCar.brakes;
       	expect(carC).to.deep.equal(1);
  	 });
	it('Car if fully repaired', () => {
		myCar.checkVehicleCondition()
       	let carC = myCar.vehicleCondition;
       	expect(carC).to.deep.equal('Excellent');
  	 });
} );
