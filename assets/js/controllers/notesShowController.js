angular.module("NoteWrangler")
    .controller("NotesShowController", function($scope, Note, $routeParams, $location){
        $scope.note = Note.get({ id: $routeParams.id });

        $scope.deleteNote = function(note) {

          if(!confirm('Sure?')){
            return false;
          } else {
            note.$remove()
                .then(function(){
                  $location.url('/notes');
                });
          }

        };
    });
