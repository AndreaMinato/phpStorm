angular.module('myApp', [])
    .controller('mainController', function ($scope) {
        $scope.testo = 'Andrea';
        $scope.reset = function () {
            if (confirm('Vuoi svuotare davvero?'))
                $scope.testo = '';
        }

        $scope.deleteProd= function (product, index) {
            if(confirm("Vuoi cancellare davvero il prodotto " + product.name + "?"))
                $scope.products.splice(index, 1);

        }

        $scope.products = [
            {name: 'Prodotto1', description: "info 1", id: "1"},
            {name: 'Prodotto2', description: "info 2", id: "2"},
            {name: 'Prodotto3', description: "info 3", id: "3"},
            {name: 'Prodotto4', description: "info 4", id: "4"}
        ]
    });