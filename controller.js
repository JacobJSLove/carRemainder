import { vehicle, ClientCar } from '../src/main';


var app = angular
.module('app', ["ui.router"])
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
  // $locationProvider.hashPrefix('');
})
.controller('homeController', function($scope){
const myCar = new ClientCar( 'BMW X5' );
console.log( myCar.vehicleDetails );
$scope.checkVechicle = myCar.checkVehicleCondition;
myCar.checkBrakesCondition();
  this.carName = myCar.name;
  this.carID = myCar.vehicleDetails;
  this.carCondition = myCar.vehicleCondition;
})
            




