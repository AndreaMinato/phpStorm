angular.module('myApp')
    .controller('insertController', function($scope, $state, dataAccess){

        $('#myDate').datepicker({dateFormat: 'yy-mm-ddT00:00:00.000'});




        $scope.add=function(){
            $scope.newObj= new Object();
            $scope.newObj.name= $scope.person.name;
            $scope.newObj.surname= $scope.person.surname;
            $scope.newObj.tel= $scope.person.tel;
            $scope.newObj.email= $scope.person.email;
            $scope.newObj.address= $scope.person.address;
            $scope.newObj.birthday= $('#myDate').val();
            $scope.newObj.city= $scope.person.city;
            $scope.newObj.cityOfBirth= $scope.person.cityOfBirth;
            $scope.newObj.fiscalCode= $scope.person.fiscalCode;
            $scope.newObj.sex= $scope.person.sex;
            dataAccess.insert($scope.newObj);
            $state.go('home');
        }

    });