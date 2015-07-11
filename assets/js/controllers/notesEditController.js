angular.module("NoteWrangler")
    .controller("NotesEditController", function($scope, Note,Category, User, $routeParams, $location){
      $scope.categories = Category.query();
      $scope.users = User.query();
      $scope.note = Note.get({ id: $routeParams.id });
      $scope.isSubmitting=false;

      $scope.saveNote = function(note) {
        $scope.isSubmitting=true;
        note.$update()
            .finally(function(){
              $scope.isSubmitting=false;
              $location.url('/notes/' + note.id);
            });
        // note.$update(function(){
        //     $location.url('/notes');
        // });
      };


    });
