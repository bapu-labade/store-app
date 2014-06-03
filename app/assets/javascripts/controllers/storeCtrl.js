 
// var app = angular.module('gemStore', []);

// app.controller('storeController', ['$scope', function($scope) {
//    $scope.products = gems;
// }]);


var myApp = angular.module('gemStore',[]);

  myApp.controller('storeController', ['$scope', function($scope) {
    $scope.products = gems;
  }]);

  myApp.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "assets/templates/product-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });

// angular.module('gemStore', [])
//   .controller('StoreController', ['$scope', function($scope) {
//     $scope.products = gems;
//   }]);


  // .directive('myCustomer', function() {
  //   return {
  //     templateUrl: 'my-customer.html'
  //   };
  // });


//   function storeController($scope) {

// 	// function findPost(id){
// 	// 	$http({method: 'GET', url: './posts/'+id+'.json'}).
//  //      success(function(data, status, headers, config) {
//  //      // this callback will be called asynchronously
//  //      // when the response is available
//  //      $scope.post = data;
      
//  //    }).error(function(data, status, headers, config) {
//  //      // called asynchronously if an error occurs
//  //      // or server returns response with an error status.
//  //      console.log("Error while loading posts...");
//  //    });
// 	// }

//   // Make Ajax call to find post based on post id

// 	// findPost($routeParams.id);

// 	 $scope.products = gems;
// };


var gems = [{
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/gem_01.jpg",
        "images/gem_02.jpg",
        "images/gem_03.jpg"
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
        "images/gem_03.jpg",
        "images/gem_05.jpg",
        "images/gem_06.jpg",
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
        "images/gem_01.jpg",
        "images/gem_02.jpg",
        "images/gem_03.jpg"
      ],
      reviews: []
    }];