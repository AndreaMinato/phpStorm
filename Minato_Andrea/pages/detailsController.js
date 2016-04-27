angular.module('myApp')
    .controller('detailsController', function($scope, $state, $stateParams, dataAccess){

        $scope.id = $stateParams.id;
        $scope.person = dataAccess.getById($stateParams.id);


        if($scope.person.sex=='M')
            $scope.person.sex='Maschio'
        if($scope.person.sex=='F')
            $scope.person.sex='Femmina'




    });