angular.module("NoteWrangler")
    .controller("NotesIndexController", function($scope, Note){
        $scope.notes = Note.query();
        $scope.search = {};
        window.s = $scope;
    });
