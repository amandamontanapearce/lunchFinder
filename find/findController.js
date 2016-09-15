(function(){
  'use strict';

 function addLocation(lat, lng) {
  let locationString = 'location=' + lat + ',' + lng;
  return locationString;
 }

 function addRadius(radius) {
   let radiusString = '&radius=' + radius;
   return radiusString;
 }

 function addType() {
   let typeString = '&type=restaurant';
   return typeString;
 }

 function addMinPrice(min) {
   if(min) {
     let minString = '&minprice=' + min;
     return minString;
   } else {
     return '';
   }
 }

 function addMaxPrice(max) {
   if(max) {
     let maxString = '&maxprice=' + max;
     return maxString;
   } else {
     return '';
   }
 }

 function addOpen(open) {
   if (open) {
     let openString = '&opennow';
     return openString;
   } else {
     return '';
   }
 }


  angular
    .module("myApp")
    .controller('findController', findController);
    findController.$inject = ['$scope', '$state', 'findFactory'];
    function findController($scope, $state, findFactory) {
      $scope.findLunch = function(input) {
        if(input.geolocation) {
          findFactory.getCoordinatesByGeolocation()
          .then( function(data) {
            let queryInput = '';
            let location = addLocation(data.data.location.lat, data.data.location.lng);
            let radius = addRadius(input.radius);
            let type = addType();
            let minPrice = addMinPrice(input.minPrice);
            let maxPrice = addMaxPrice(input.maxPrice);
            let open = addOpen(input.open);
            queryInput += (location + radius + type + minPrice + maxPrice + open);
            findFactory.getPlaces(queryInput)
            .then( function(data) {
              console.log(data);
            })
          })
        }else{
          console.log(input);
          findFactory.getCoordinatesByAddress(input.address)
          .then( function(data){
            console.log(data.data.results);
          })
        }
      }
    }
})();
