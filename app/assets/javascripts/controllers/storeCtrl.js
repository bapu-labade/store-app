 var myApp = angular.module('gemStore',[]);

  myApp.controller('storeController', ['$scope','$http', function($scope,$http) {
    // $scope.products = gems;
    // loadPosts();

    $http({method: 'GET', url: './get-product-list.json'}).
      success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.products = data;
      console.log("Successfully loaded products...");
    }).error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log("Error while loading products...");
    });


  }]);


  myApp.controller('productTabs', ['$scope', function($scope){

    $scope.tab = 1;

    $scope.isSet = function(checkTab){
      return $scope.tab == checkTab;  
    }

    $scope.setTab = function(activeTab){
      $scope.tab = activeTab;
    }
  }]);


  myApp.controller('reviewController',['$scope', function($scope) {
    
    $scope.review = {};

    $scope.addReview = function(product) {
      product.reviews.push($scope.review);

      $scope.review = {};
    };

  }]);


  myApp.directive("productDescription", function() {
    return {
      restrict: 'A',
      templateUrl: "assets/product-descriptions.html"
    };
  });


  myApp.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "assets/product-reviews.html"
    };
  });

  myApp.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "assets/product-specs.html"
    };
  });


  // function loadPosts() {
  //   $http({method: 'GET', url: './get-product-list.json'}).
  //     success(function(data, status, headers, config) {
  //     // this callback will be called asynchronously
  //     // when the response is available
  //     $scope.products = data;
  //     console.log("Successfully loaded products...");
  //   }).error(function(data, status, headers, config) {
  //     // called asynchronously if an error occurs
  //     // or server returns response with an error status.
  //     console.log("Error while loading products...");
  //   });
  // }



  var gems = [{
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "assets/gem_01.jpg",
        "assets/gem_02.jpg",
        "assets/gem_03.jpg"
      ],
      reviews: []
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "assets/gem_03.jpg",
        "assets/gem_05.jpg",
        "assets/gem_06.jpg",
      ],
      reviews: []
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "assets/gem_01.jpg",
        "assets/gem_02.jpg",
        "assets/gem_03.jpg"
      ],
      reviews: []
    }];