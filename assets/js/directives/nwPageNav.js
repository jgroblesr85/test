angular.module('NoteWrangler')
  .directive('nwPageNav', function(){
    return {
      replace:true,
      restrict:'E',
      templateUrl: "assets/templates/directives/nwPageNav.html",
      controller: function($scope){
        $scope.isPage = function(){

        };
      }
    };
  });
