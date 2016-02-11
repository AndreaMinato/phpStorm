angular.module('myApp')
    .controller('detailsController', function ($scope, $state, $http, $stateParams) {
        $http({
            method: 'GET',
            url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/' + $stateParams.id + '.geojson'
        }).then(function (resp) {

            $scope.place = resp.data.properties.place;
            $scope.mag = resp.data.properties.mag;
            $scope.longitude = resp.data.properties.products.origin[0].properties.longitude;
            $scope.latitude = resp.data.properties.products.origin[0].properties.latitude;
            $scope.type = resp.data.properties.type;
            $scope.date = resp.data.properties.time;
        }, function (resp) {
            console.log('non    presi');
        })


    });