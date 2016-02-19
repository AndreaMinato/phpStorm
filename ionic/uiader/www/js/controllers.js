angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope, $state, $http) {
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=Pordenone,it&appid=44db6a862fba0b067b1930da0d769e98&lang=it&units=metric'

        }).then(function (resp) {
            $scope.message = 'Fatta vecchio';
            $scope.x = resp.data;
           // console.log($scope.x.main);
        }, function (resp) {
            $scope.message = 'Eh niente...non va!';
        });


    })


    .
    controller('ChatsCtrl', function ($scope, $state, $http) {
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast?q=Pordenone,it&mode=json&appid=44db6a862fba0b067b1930da0d769e98&units=metric&lang=it'

        }).then(function (resp) {
            $scope.message = 'Fatta vecchio';
            $scope.list = resp.data.list;
            $scope.x = resp.data;
           // console.log($scope.x);
            console.log(Math.round($scope.list[0].dt/1000.0));
        }, function (resp) {
            $scope.message = 'Eh niente...non va!';
        });
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams) {
        $scope.time=$stateParams.id;

    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })


.filter('timestampToDate', function () {
    return function (timestamp) {
        var date = new Date(timestamp * 1000);
        var dateObject =('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) +  ' '+ date.getHours()+":00";
        return dateObject;
    };
});