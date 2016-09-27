(function() {
    'use strict';

    function createMarkerArray(array) {
        let arraylength = array.length;
        var markerArray = [];
        for (var i = 0; i < arraylength; i++) {
            markerArray.push({
                id: array[i].id,
                coords: {
                    latitude: array[i].geometry.location.lat,
                    longitude: array[i].geometry.location.lng
                },
                options: {
                    labelClass: 'marker_labels',
                    labelAnchor: '12 60',
                    labelContent: array[i].name,
                    fontFamily: 'Lato, sans-serif'
                },
            });
        }
        return markerArray;
    }

    angular
        .module("myApp")
        .controller('resultsController', resultsController)
    resultsController.$inject = ['$scope', '$state', '$stateParams', 'uiGmapGoogleMapApi', '$location'];

    function resultsController($scope, $state, $stateParams, uiGmapGoogleMapApi, $location) {
        var places = $stateParams.places.results;
        $scope.markerArray = createMarkerArray(places);
        var firstLat = places[0].geometry.location.lat;
        var firstLng = places[0].geometry.location.lng;
        $scope.places = places;
        $scope.reload = function() {
            $location.path('/');
            window.location.reload();
        }

        angular.extend($scope, {
            map: {
                center: {
                    latitude: firstLat,
                    longitude: firstLng
                },
                zoom: 15,
            }
        });
    };
})();
