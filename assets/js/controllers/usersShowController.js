angular.module('NoteWrangler')
       .controller('UsersShowController', function($scope, User, $routeParams, $location){
           $scope.user = User.get({ id: $routeParams.id });
       });
