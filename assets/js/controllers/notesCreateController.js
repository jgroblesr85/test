angular.module("NoteWrangler")
    .controller("NotesCreateController", function($scope, Note, Category, User, $location){
      $scope.categories = Category.query();
      $scope.users = User.query();
      $scope.note = new Note();
      $scope.isSubmitting = false;

      $scope.saveNote= function(note) {
        $scope.isSubmitting = true;
        note.$save()
            .then(function(){
              $location.url('/notes');
            })
            .finally(function(){
              $scope.isSubmitting = false;
            });
      };
    });
