angular.module('NoteWrangler')
  .directive('title', function($timeout){
    return {
      link: function(scope,element,attrs) {
        $timeout(function(){
            $(element).tooltip();
        },100);

        scope.$on('$destroy', function(){
          $(element).tooltip('destroy');
        });
      }
    }
  });
