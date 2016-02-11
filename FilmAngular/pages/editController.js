angular.module('myApp')
    .controller('editController', function ($scope, $state, $stateParams) {
        $scope.id = $stateParams.id;
        var currentObj = dataAccess.getById($stateParams.id);
        $scope.name= currentObj.name;
        $scope.price= currentObj.price;
        $scope.category= currentObj.category;
        $scope.description= currentObj.description;

        $scope.save=function(){
            var newObj= new Object();
            newObj.id=$scope.id;
            newObj.name= $scope.name;
            newObj.price= $scope.price;
            newObj.category= $scope.category;
            newObj.description= $scope.description;
            dataAccess.update(newObj);
            $state.go('home');
        }


    });