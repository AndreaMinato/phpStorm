/**
 * Created by itsandrea on 18/01/16.
 */
angular.module('myApp', [])
    .controller('IndexController', function ($scope) {
       /* $scope.name = 'Andrea'
        $scope.reset = function () {
            $scope.name = ''
        };*/

        $scope.products = [
            {id: 1, name: 'a001', description: 'Prodotto 1', price: 5, cat:'prodotti'},
            {id: 2, name: 'a002', description: 'Prodotto 2', price: 54, cat:'prodotti'},
            {id: 3, name: 'a003', description: 'Prodotto 3', price: 23.4, cat:'prodotti'},
            {id: 4, name: 'a004', description: 'Prodotto 4', price: 12, cat:'prodotti'},
            {id: 5, name: 'a005', description: 'Prodotto 5', price: 1, cat:'prodotti'}
        ];


        $scope.cart = [];


        $scope.new = function (){
            $scope.products.push({id:000, name: $scope.name, description: $scope.desc, price: $scope.price, cat: $scope.cat});

        };

        $scope.add = function (product) {
            var found = false;
            $scope.cart.forEach(function (x) {
                if (x.id == product.id) {
                    product.qta += 1;
                    found = true;
                }
            })
            if(!found){
                product.qta = 1;
                $scope.cart.push(product);
            }

        };


        $scope.delete = function (index) {
            if (confirm('Veramende?'/* + product.description + '?' */)) {
                if($scope.cart[index].qta==1)
                    $scope.cart.splice(index, 1);
                else
                    $scope.cart[index].qta-=1;

            }

        };
    })