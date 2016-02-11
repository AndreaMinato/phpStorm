angular.module('routerApp')
    .controller('homeController', function ($scope, $state) {
        $scope.message = 'Ti trovi nella pagina home';

        $scope.goToContact = function () {
            $state.go('contact')
        }
    })