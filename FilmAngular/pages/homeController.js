angular.module('myApp')
    .controller('homeController', function ($scope, $state, $http) {
        $scope.message = 'Speta!';
        $scope.showSpinner = true;

        $http({
            method: 'GET',
            url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'
        }).then(function (resp) {
            $scope.list = resp.data.features;
            $scope.message = 'Ecco...Contento?';
            $scope.showSpinner = false;
        }, function (resp) {
            $scope.message = 'Eh niente...non va!';
            $scope.showSpinner = false;
        })


        function parseDate(input) {
            var parts = input.split('-');
            return new Date(parts[2], parts[1]-1, parts[0]);
        }


        angular.module('myApp').filter("myfilter", function() {
            return function(items, from, to) {
                var df = parseDate(from);
                var dt = parseDate(to);
                var result = [];
                for (var i=0; i<items.length; i++){
                    var tf = new Date(items[i].date1 * 1000),
                        tt = new Date(items[i].date2 * 1000);
                    if (tf > df && tt < dt)  {
                        result.push(items[i]);
                    }
                }
                return result;
            };
        });



        $('.data').datepicker();
    });

