(function() {
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
        let typeString = '&types=restaurant';
        return typeString;
    }

    function addMinPrice(min) {
        if (min) {
            let minString = '&minprice=' + min;
            return minString;
        } else {
            return '';
        }
    }

    function addMaxPrice(max) {
        if (max) {
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

    function concatQuery(str1, str2, str3, str4, str5, str6) {
        str1 += (str1 + str2 + str3 + str4 + str5);
        return str1;
    }

    angular
        .module("myApp")
        .controller('findController', findController);
    findController.$inject = ['$scope', '$state', 'findFactory'];

    function findController($scope, $state, findFactory) {
        $scope.findLunch = function(input) {
            let radius = addRadius(input.radius);
            let type = addType();
            let minPrice = addMinPrice(input.minPrice);
            let maxPrice = addMaxPrice(input.maxPrice);
            let open = addOpen(input.open);
            if (input.geolocation) {
                findFactory.getCoordinatesByGeolocation()
                    .then(function(data) {
                        let queryInput = '';
                        let userLat = data.data.location.lat;
                        let userLng = data.data.location.lng;
                        let location = addLocation(userLat, userLng);
                        queryInput = concatQuery(queryInput, location, radius, type, minPrice, maxPrice, open);
                        findFactory.getPlaces(queryInput)
                            .then(function(data) {
                                $state.go('results', {
                                    places: data.data,
                                });
                            })
                    })
            } else {
                findFactory.getCoordinatesByAddress(input.address)
                    .then(function(data) {
                        let queryInput = '';
                        let userLat = data.data.results[0].geometry.location.lat;
                        let userLng = data.data.results[0].geometry.location.lng;
                        let location = addLocation(userLat, userLng);
                        concatQuery(queryInput, location, radius, type, minPrice, maxPrice, open);
                        findFactory.getPlaces(queryInput)
                            .then(function(data) {
                                $state.go('results', {
                                    places: data.data,
                                });
                            })
                    })

            }
        }
    }
})();
