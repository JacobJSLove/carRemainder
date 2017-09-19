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
	it( 'Check Vehicle', () => {
	expect( myCar.checkVehicleCondition() ).to.deep.equal({myCar.vehicleCondition = 'Poor';});
	} ) ;
	// it( 'Car name', () => {
	// 	expect( myCar.name ).to.deep.equal('BMW X5');
	// } ) ;
	// it( 'Car name', () => {
	// 	expect( myCar.name ).to.deep.equal('BMW X5');
	// } ) ;
} );
