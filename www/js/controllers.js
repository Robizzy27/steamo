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

.controller('loginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('WelcomeCtrl', function($scope, $state, $q, UserService, $ionicLoading) {
  // This is the success callback from the login method
  var fbLoginSuccess = function(response) {
    if (!response.authResponse){
      fbLoginError("Cannot find the authResponse");
      return;
    }

    var authResponse = response.authResponse;

    getFacebookProfileInfo(authResponse)
    .then(function(profileInfo) {
      // For the purpose of this app I will store user data on local storage
      UserService.setUser({
        authResponse: authResponse,
				userID: profileInfo.id,
				name: profileInfo.name,
				email: profileInfo.email,
        picture : "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
      });
      $ionicLoading.hide();
      $state.go('app.home');
    }, function(fail){
      // Fail get profile info
      console.log('profile info fail', fail);
    });
  };

  // This is the fail callback from the login method
  var fbLoginError = function(error){
    console.log('fbLoginError', error);
    $ionicLoading.hide();
  };

  // This method is to get the user profile info from the facebook api
  var getFacebookProfileInfo = function (authResponse) {
    var info = $q.defer();

    facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
      function (response) {
				console.log(response);
        info.resolve(response);
      },
      function (response) {
				console.log(response);
        info.reject(response);
      }
    );
    return info.promise;
  };

  //This method is executed when the user press the "Login with facebook" button
  $scope.facebookSignIn = function() {
    facebookConnectPlugin.getLoginStatus(function(success){
      if(success.status === 'connected'){
        // The user is logged in and has authenticated the app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed request, and the time the access token
        // and signed request each expire
        console.log('getLoginStatus', success.status);

    		// Check if user is saved
    		var user = UserService.getUser('facebook');

    		if(!user.userID){
					getFacebookProfileInfo(success.authResponse)
					.then(function(profileInfo) {
						// For the purpose of this app I will store user data on local storage
						UserService.setUser({
							authResponse: success.authResponse,
							userID: profileInfo.id,
							name: profileInfo.name,
							email: profileInfo.email,
							picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
						});

						$state.go('app.home');
					}, function(fail){
						// Fail get profile info
						console.log('profile info fail', fail);
					});
				}else{
					$state.go('app.home');
				}
      } else {
        // If (success.status === 'not_authorized') the user is logged in to Facebook,
				// but has not authenticated the app
        // Else the person is not logged into Facebook,
				// so we're not sure if they are logged into this app or not.

				console.log('getLoginStatus', success.status);

				$ionicLoading.show({
          template: 'Logging in...'
        });

				// Ask the permissions needed. More about
				// FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
        facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
      }
    });
  };
})

.controller('HomeCtrl', function($scope, UserService, $ionicActionSheet, $state, $ionicLoading){
	$scope.user = UserService.getUser();

	$scope.showLogOutMenu = function() {
		var hideSheet = $ionicActionSheet.show({
			destructiveText: 'Logout',
			titleText: 'Are you sure you want to logout? This app is awsome so I recommend you to stay.',
			cancelText: 'Cancel',
			cancel: function() {},
			buttonClicked: function(index) {
				return true;
			},
			destructiveButtonClicked: function(){
				$ionicLoading.show({
				  template: 'Logging out...'
				});

        // Facebook logout
        facebookConnectPlugin.logout(function(){
          $ionicLoading.hide();
          $state.go('welcome');
        },
        function(fail){
          $ionicLoading.hide();
        });
			}
		});
	};
})

// .controller('signupCtrl', function($scope) {
//
// })
