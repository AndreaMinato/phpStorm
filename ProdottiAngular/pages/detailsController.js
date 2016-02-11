angular.module('myApp')
    .controller('detailsController', function ($scope, $state, $stateParams) {
        $scope.id = $stateParams.id;
        var currentObj = dataAccess.getById($stateParams.id);
        $scope.name= currentObj.name;
        $scope.price= currentObj.price;
        $scope.category= currentObj.category;
        $scope.description= currentObj.description;


    });