angular.module('myApp')
    .controller('homeController', function ($scope, $state, $http) {
        $scope.message = 'Inserisci un titolo!';
/*
        $http({
            method: 'GET',
            url: 'http://www.omdbapi.com/?s=' + $scope.search + '&page=' + $scope.count

        }).then(function (resp) {

            $scope.list = resp.data.Search;
            $scope.tot = Math.ceil(resp.data.totalResults / 10);
            $scope.message = 'Beccateli vecchio';
        }, function (resp) {
            $scope.message = 'Eh niente...non va!';
        });

*/
        $scope.cerca = function () {
            $scope.count = 1;
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/?s=' + $scope.search + '&page=' + $scope.count


            }).then(function (resp) {

                console.log($http.url);
                $scope.list = resp.data.Search;
                $scope.tot = Math.ceil(resp.data.totalResults / 10);
                $scope.message = 'Beccateli vecchio';
            }, function (resp) {
                $scope.message = 'Eh niente...non va!';
            })
        };

        $scope.prev = function () {
            if ($scope.count > 1) {
                $scope.count -= 1;
                $http({
                    method: 'GET',
                    url: 'http://www.omdbapi.com/?s=' + $scope.search + '&page=' + $scope.count

                }).then(function (resp) {

                    $scope.list = resp.data.Search;
                    //$scope.tot = ceil(resp.data.totalResults/10);
                    $scope.message = 'Beccateli vecchio';
                }, function (resp) {
                    $scope.message = 'Eh niente...non va!';
                })
            }

        };

        $scope.next = function () {
            if ($scope.count < $scope.tot)
                $scope.count += 1;
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/?s=' + $scope.search + '&page=' + $scope.count

            }).then(function (resp) {

                $scope.list = resp.data.Search;
                //$scope.tot = ceil(resp.data.totalResults/10);
                $scope.message = 'Beccateli vecchio';
            }, function (resp) {
                $scope.message = 'Eh niente...non va!';
            })

        }
    });

