angular.module('myApp')
    .controller('insertController', function ($scope, $state) {


        $scope.add = function () {
            var newObj = new Object();
            newObj.name = $scope.name;
            newObj.price = $scope.price;
            newObj.category = $scope.category;
            newObj.description = $scope.description;
            dataAccess.insert(newObj);
            $state.go('home');


        }
    });