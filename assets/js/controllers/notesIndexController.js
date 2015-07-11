angular.module("NoteWrangler")
    .controller("NotesIndexController", function($scope, Note){
        $scope.notes = Note.query();
        // Firebase
        //$scope.notes = Note();
        $scope.search = {};
        //window.s = $scope;
    });
