/* global chai:false */
/* eslint no-console: 0 */

'use strict';
import { vehicle, ClientCar } from '../src/main';
const expect = chai.expect;

describe ( 'vehicle', () => {
	it( 'vehicle is a function', () => {
		expect( vehicle ).to.be.a( 'function' );
	} ) ;
	it( 'ClientCar is a function', () => {
		expect( ClientCar ).to.be.a( 'function' );
	} ) ;
} );
