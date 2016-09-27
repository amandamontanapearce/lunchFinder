(function() {
    angular
        .module("myApp")
        .factory('resultsFactory', resultsFactory);
    resultsFactory.$inject = ['$http', '$q'];

    function resultsFactory($http, $q) {
        return {
            getDetails: function(placeId) {
                return $http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + '&key=AIzaSyAMIJM88Mp5gx-fg-6EG9UhDGsHWyWMoEw')
            }
        }
    }
})();
