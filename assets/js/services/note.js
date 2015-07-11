// angular.module("NoteWrangler")
//   .factory("Note", function NoteFactory($resource) {
//     return $resource("/notes/index.php/?id=:id", { id: "@id" }, {
//       update: {
//           method: 'PUT'
//       }
//     });
//   });


// Firebase
// angular.module("NoteWrangler")
//   .factory("Note", function NoteFactory($firebaseArray) {
//
//     return function(){
//         //creating the snapshot of our data
//       var ref = new Firebase('https://grobles-notewrangler.firebaseio.com/notes');
//       // returned sync array
//       return $firebaseArray(ref);
//     };
//
//   });

angular.module("NoteWrangler")
  .factory("Note", function NoteFactory($resource) {
    return $resource("https://grobles-notewrangler.firebaseio.com/notes/:id.json", { id: "@id" }, {
      update: {
          method: 'PUT'
      }
    });
  });
