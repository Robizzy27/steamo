angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('loadPage', {
    url: '/load',
    templateUrl: 'templates/loadPage.html',
    controller: 'loadPageCtrl'
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.home'
      2) Using $state.go programatically:
        $state.go('tabsController.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/home
      /page1/tab5/home
  */
  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab5': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.about', {
    url: '/about',
    views: {
      'tab2': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tabsController.gallery', {
    url: '/gallery',
    views: {
      'tab5': {
        templateUrl: 'templates/gallery.html',
        controller: 'galleryCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.booking'
      2) Using $state.go programatically:
        $state.go('tabsController.booking');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/booking
      /page1/tab4/booking
      /page1/tab5/booking
  */
  .state('tabsController.booking', {
    url: '/booking',
    views: {
      'tab1': {
        templateUrl: 'templates/booking.html',
        controller: 'bookingCtrl'
      },
      'tab4': {
        templateUrl: 'templates/booking.html',
        controller: 'bookingCtrl'
      },
      'tab5': {
        templateUrl: 'templates/booking.html',
        controller: 'bookingCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.services'
      2) Using $state.go programatically:
        $state.go('tabsController.services');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/services
      /page1/tab3/services
      /page1/tab4/services
      /page1/tab5/services
  */
  .state('tabsController.services', {
    url: '/services',
    views: {
      'tab1': {
        templateUrl: 'templates/services.html',
        controller: 'servicesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/services.html',
        controller: 'servicesCtrl'
      },
      'tab4': {
        templateUrl: 'templates/services.html',
        controller: 'servicesCtrl'
      },
      'tab5': {
        templateUrl: 'templates/services.html',
        controller: 'servicesCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.contact'
      2) Using $state.go programatically:
        $state.go('tabsController.contact');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/contact
      /page1/tab5/contact
      /page1/tab6/contact
  */
  .state('tabsController.contact', {
    url: '/contact',
    views: {
      'tab1': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      },
      'tab5': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      },
      'tab6': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.login'
      2) Using $state.go programatically:
        $state.go('tabsController.login');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/login
      /page1/tab5/login
  */
  .state('tabsController.login', {
    url: '/login',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'tab5': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.signup'
      2) Using $state.go programatically:
        $state.go('tabsController.signup');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/signup
      /page1/tab5/signup
  */
  .state('tabsController.signup', {
    url: '/signup',
    views: {
      'tab1': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      },
      'tab5': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')



});
