var routerApp = angular.module('myApp', ['ui.router']);



routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/homeView.html',
            controller: 'homeController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'pages/contactView.html',
            controller: 'contactController'
        })
        .state('details', {
            url: '/details/:id/',
            templateUrl: 'pages/detailsView.html',
            controller: 'detailsController'
        })
        .state('edit', {
            url: '/edit/:id',
            templateUrl: 'pages/editView.html',
            controller: 'editController'
        })
        .state('delete', {
            url: '/delete/:id',
            templateUrl: 'pages/deleteView.html',
            controller: 'deleteController'
        })
        .state('insert', {
            url: '/insert/',
            templateUrl: 'pages/insertView.html',
            controller: 'insertController'
        })
    ;
});

function check(){
    var ch=$('#input');
    var b=$('#mybtn');
    if(ch.val().length>1){
        b.addClass('btn-success');
    }
    else{
        b.removeClass('btn-success');
    }
}

function ok(){
    var b=$('#mybtn');
    var d=$('#contenuto');

    if(b.hasClass('btn-success'))
        d.addClass('comparsa');
    else
        d.removeClass('comparsa')
}

function data() {
    var temp = [
        {id: 1, name: 'prodotto 1', category: 'A', price: 123.4, description: 'prodotto A'},
        {id: 2, name: 'prodotto 2', category: 'B', price: 1.4, description: 'prodott B'},
        {id: 3, name: 'prodotto 3', category: 'C', price: 13.4, description: 'prodott C'},
        {id: 4, name: 'prodotto 4', category: 'D', price: 12.4, description: 'prodott D'},
        {id: 5, name: 'prodotto 5', category: 'E', price: 23.4, description: 'prodott E'},
        {id: 6, name: 'prodotto 6', category: 'F', price: 123, description: 'prodott F'},
        {id: 7, name: 'prodotto 7', category: 'G', price: 3.4, description: 'prodott G'},
        {id: 8, name: 'prodotto 8', category: 'H', price: 2.4, description: 'prodott H'},
        {id: 9, name: 'prodotto 9', category: 'I', price: 12, description: 'prodott I'},
        {id: 10, name: 'prodotto 10', category: 'J', price: 13, description: 'prodott J'},
    ];

    var result = new Object();

    result.getAll = function () {
        return temp;
    };

    result.getById = function (id) {
        for (var i = 0; i < temp.length; i++) {
            var x = temp[i];
            if (x.id == id)
                return x;
        }

        return null;
    };

    result.update = function (obj) {
        if (obj != null) {
            for (var i = 0; i < temp.length; i++) {
                var x = temp[i];
                if (x.id == obj.id) {
                    temp[i] = obj;
                    return;
                }
            }
        }
    };

    result.insert = function (obj) {
        if (obj != null) {
            if (temp.length == 0)
                obj.id = 1;
            else
                obj.id = temp[temp.length - 1].id + 1;
            temp.push(obj);
        }
    };

    result.delete = function (id) {
        for (var i = 0; i < temp.length; i++) {
            var x = temp[i];
            if (x.id == id) {
                temp.splice(i, 1);
                return;
            }
        }
    };

    return result;
}

var dataAccess = data();

var products = dataAccess.getAll();

var product = dataAccess.getById(1);









