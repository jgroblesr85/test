angular.module('NoteWrangler')
  .factory('Category', function CategoryFactory($resource){
    return $resource('/notes/categories.php?id:id',{id:"@id"}, {
      update : {
        method: "PUT"
      }
    });
  });
