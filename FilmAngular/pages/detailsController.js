angular.module('myApp')
    .controller('detailsController', function ($scope, $state, $http, $stateParams) {
        $http({
            method: 'GET',
            url: 'http://www.omdbapi.com/?i=' + $stateParams.id + '&plot=full&r=json'
        }).then(function (resp) {

            $scope.max = 10;

            $scope.titolo = resp.data.Title;
            $scope.anno = resp.data.Year;
            $scope.data = resp.data.Released;
            $scope.durata = resp.data.Runtime;
            $scope.genere = resp.data.Genre;
            $scope.autore = resp.data.Director;
            $scope.lingua = resp.data.Language;
            $scope.trama = resp.data.Plot;
            $scope.poster = resp.data.Poster;
            $scope.attori = resp.data.Actors;

            $scope.vote1=Math.round(resp.data.Metascore/10);
            $scope.vote2=Math.round(resp.data.imdbRating);
        }, function (resp) {
            console.log('non    presi');
        })

        $scope.vota= function (x){
            var array=[];
            for(var i=0;i<x;i++)
                array.push(i);
            return array;
        }

    });