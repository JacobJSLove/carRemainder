import { vehicle, ClientCar } from '../src/main';

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
  const myCar = new ClientCar( carName );
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
