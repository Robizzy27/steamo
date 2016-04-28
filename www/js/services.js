angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

// .service('BlankService', [function(){
//
// }]);

.service('LoginService', function($q) {
  return {
    loginUser: function(name, pw) {
      var deferred = $q.defer();
      var promise = deferred.promise;

      if (name == 'user' && pw == 'secret') {
        deferred.resolve('Welcome ' + name + '!');
      } else {
        deferred.reject('Wrong credentials.');
      }
      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      }
      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      }
      return promise;
    }
  }
});

// .service('UserService', function() {
//   // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
//   var setUser = function(user_data) {
//     window.localStorage.starter_facebook_user = JSON.stringify(user_data);
//   };
//
//   var getUser = function() {
//     return JSON.parse(window.localStorage.starter_facebook_user || '{}');
//   };
//
//   return {
//     getUser: getUser,
//     setUser: setUser
//   };
// });
