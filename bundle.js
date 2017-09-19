/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

class vehicle {
	constructor() {
		this.ID = Math.floor( Math.random() * 10000 );
	}
}
/* unused harmony export vehicle */

class ClientCar extends vehicle {
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
/* harmony export (immutable) */ exports["a"] = ClientCar;




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_main__ = __webpack_require__(0);


var app = angular
.module('app', ['ui.router', 'LocalStorageModule'])
.config(function ($stateProvider ,$urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider){
 // $routeProvider.caseInsensitiveMatch = true; /* Students work like students */
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlRouterProvider.otherwise("templates/home");
  $stateProvider
    .state("home", {
      url: "/templates/home",
      templateUrl:"templates/home.html",
      controller:"homeController",
      controllerAs: "homeCtrl"
    })
    .state("config", {
      url: "/templates/config",
      templateUrl:"templates/config.html",
      controller:"configController",
      controllerAs: "configCtrl"
    })
  // $locationProvider.hashPrefix('');
})
// Future 
.config(['localStorageServiceProvider',function(localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('carRemainder');
}])

.factory('Car',function(){
function getCar (carName) { 
  const myCar = new __WEBPACK_IMPORTED_MODULE_0__src_main__["a" /* ClientCar */]( carName );
  return{
      name:myCar.name,
      id:myCar.vehicleDetails,
      brakes:myCar.brakes,
      condition:myCar.vehicleCondition,
      checkVehicle: function(){
      myCar.checkVehicleCondition();
      return this.carCondition = myCar.vehicleCondition;
    },
      checkBrakes: function(){
      myCar.checkBrakesCondition();
    },
      repairB: function(){
      myCar.repairBrakes();
      return this.brakes = myCar.brakes;
    },
  };
};

  const Car = getCar('BMW X5');
  return Car;
})
.controller('homeController', function(Car){
  this.yourClass = 'big'
  this.carName = Car.name;
  this.carID = Car.id;
  this.carCondition = Car.condition;
  this.checkV = Car.checkVehicle;
  this.checkB = Car.checkBrakes;

}) 
.controller('configController', function(Car){
  this.yourClass = 'big active';
  this.carName = Car.name;
  this.carID = Car.id;
  this.carCondition = Car.condition;
  this.checkV = Car.checkVehicle;
  this.checkB = Car.checkBrakes;
  this.brakes = Car.brakes;
  this.rBrakes = Car.repairB;
}) 


/***/ }
/******/ ]);