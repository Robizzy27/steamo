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
