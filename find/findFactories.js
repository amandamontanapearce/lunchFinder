(function() {
  'use strict';
  angular
    .module('myApp')
    .factory('findFactory', findFactory);
    findFactory.$inject = ['$http', '$q'];
    function findFactory($http, $q) {
      return {
      getCoordinatesByGeolocation: function() {
        return $http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyC6uNWzGSQ5doUmGTSOYVM9nTdVsmngbe4')
      },
      getCoordinatesByAddress: function(input) {
        return $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + input + '&key=AIzaSyBMJhOg9cfoNsLOM9PWKi59dKych9T5Au0')
      },
      getPlaces: function(input) {
        return $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + input + '&key=AIzaSyArlPqWtzQIg-45054N5YUvVynWWJupKC8')
      }
    }
  }
})();
