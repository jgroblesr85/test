angular.module("NoteWrangler")
  .factory("Note", function NoteFactory($resource) {
    return $resource("/notes/index.php/?id=:id", { id: "@id" }, {
      update: {
          method: 'PUT'
      }
    });
  });
