angular.module("NoteWrangler", ['ngRoute', 'ngResource', 'ngGravatar', 'firebase'])
        .config(function(GravatarProvider){
          GravatarProvider.setSize(100);
        });
