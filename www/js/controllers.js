angular.module('app.controllers', [])

.controller('loadPageCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('aboutCtrl', function($scope) {

})

.controller('galleryCtrl', function($scope) {

})

.controller('bookingCtrl', function($scope) {
  $scope.vehiclepackages = [];

  var myFirebaseRef = new Firebase("https://steamo.firebaseio.com/vehiclepackages");

  myFirebaseRef.on('child_added', function(snapshot, prevChildKey) {
    $scope.vehiclepackages.push(snapshot.val());
  });

  $scope.features = true;
  $scope.rims = false;
  $scope.interior = false;
  $scope.trunk = false;
  $scope.dashboard = false;
  $scope.freshener = false;
  $scope.wax = false;
  $scope.exterior = false;
  $scope.engine = false;
  $scope.total_price = 0;

  $scope.recalculate = function(name, value){
    if(name=='rims'){
      if (value){
        $scope.total_price += 7.99
      }
      else {
        $scope.total_price -= 7.99
      }
    }
    if(name=='interior'){
      if (value){
        $scope.total_price += 7.99
      }
      else {
        $scope.total_price -= 7.99
      }
    }
    if(name=='trunk'){
      if (value){
        $scope.total_price += 4.99
      }
      else {
        $scope.total_price -= 4.99
      }
    }
    if(name=='dashboard'){
      if (value){
        $scope.total_price += 4.99
      }
      else {
        $scope.total_price -= 4.99
      }
    }
    if(name=='freshener'){
      if (value){
        $scope.total_price += 3.99
      }
      else {
        $scope.total_price -= 3.99
      }
    }
    if(name=='wax'){
      if (value){
        $scope.total_price += 24.99
      }
      else {
        $scope.total_price -= 24.99
      }
    }
    if(name=='exterior'){
      if (value){
        $scope.total_price += 6.99
      }
      else {
        $scope.total_price -= 6.99
      }
    }
    if(name=='engine'){
      if (value){
        $scope.total_price += 59.99
      }
      else {
        $scope.total_price -= 59.99
      }
    }
  }
})

.controller('servicesCtrl', function($scope) {
  $scope.services = [];

  var myFirebaseRef = new Firebase("https://steamo.firebaseio.com/services");

  myFirebaseRef.on('child_added', function(snapshot, prevChildKey) {
    $scope.services.push(snapshot.val());
  });
})

.controller('contactCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})
