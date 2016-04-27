angular.module('myApp')
    .controller('editController', function ($scope, $state, $stateParams, dataAccess) {

        $('#myDate').datepicker({dateFormat: 'yy-mm-ddT00:00:00.000'});


        $scope.person = dataAccess.getById($stateParams.id);

        $scope.person.birthday = new Date($scope.person.birthday);



        $scope.save = function () {
            var newObj = new Object();
            newObj.id = $scope.person.id;
            newObj.name = $scope.person.name;
            newObj.surname = $scope.person.surname;
            newObj.tel = $scope.person.tel;
            newObj.email = $scope.person.email;
            newObj.birthday =  $('#myDate').val();
            newObj.address = $scope.person.address;
            newObj.city = $scope.person.city;
            newObj.cityOfBirth = $scope.person.cityOfBirth;
            newObj.fiscalCode = $scope.person.fiscalCode;
            newObj.sex = $scope.person.sex;
            dataAccess.update(newObj);
            console.log($scope.person.birthday);
            $state.go('home');
        }


    });