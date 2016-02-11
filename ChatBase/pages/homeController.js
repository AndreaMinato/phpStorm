angular.module('myApp')
    .controller('homeController', function ($scope, $state, chatHub, $sce) {

        $scope.messages = [];
        $scope.private = [];
        $scope.mittente="AndreaMinato";
        $scope.destinatario="Damiano"


        chatHub.on('messageReceived', function (message) {
            var temp = message.indexOf(':');
            var m = {
                    mitt : message.substring(0,temp),
                    mess : $sce.trustAsHtml(message.substring(temp+1)),
                    when : new Date()
        }
            if(message.indexOf("script")>-1) {
                m.mitt = "Mona";
                m.mess = "Smettila";
            }
            $scope.$apply(function () {
                $scope.messages.unshift(m);
            });
        });

        chatHub.on('directMessageReceived', function (message) {
            var temp = message.indexOf(':');
            var m = {
                mitt : message.substring(0,temp),
                mess : $sce.trustAsHtml(message.substring(temp+1)),
                when : new Date()
            }
            if(message.indexOf("script")>-1) {
                m.mitt = "Mona";
                m.mess = "Smettila";
            }
            $scope.$apply(function () {
                $scope.private.unshift(m);
            });
        });


        chatHub.start();

        $scope.inviaMessaggio = function () {

            chatHub.sendPublic('Muahahahahahahaahahahahahahahahahaha', $scope.inviami,
                function () {
                    /*  console.log('messaggio inviato')*/
                });

        }

        $scope.inviaMessaggioPrivato = function (destinatario) {

            chatHub.sendPrivate($scope.mittente, $scope.destinatario, $scope.inviami,
                function () {
                    var m = {
                        mitt: $scope.mittente,
                        mess: $sce.trustAsHtml($scope.inviami),
                        when: new Date()
                    }
                    $scope.private.unshift(m);

                });
        }
    });