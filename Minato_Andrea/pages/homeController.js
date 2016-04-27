
angular.module('myApp')
    .controller('homeController', function($scope, $state, dataAccess){

        $scope.clearStorage = function(){
            localStorage.clear();
        };


        $scope.list = dataAccess.getAll();


        $scope.canc=function(id){
            dataAccess.delete(id);
        }



    });