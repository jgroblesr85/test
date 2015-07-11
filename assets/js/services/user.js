angular.module("NoteWrangler")
  .factory("User", function UserFactory($resource) {
    return $resource("/notes/users.php?id=:id", {id: "@id"}, null);
  });
