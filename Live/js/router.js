// Filename: router.js
define([
	'jquery',
	'underscore',
	'backbone',
	'views/comments/commentView',
'views/comments/commentListView',
], function($, _, Backbone,CommentView,CommentListView) {
  
	var AppRouter = Backbone.Router.extend({
    routes: {  
	  'comments/:location':'comments',
	'location/:location':'location',	  
      '*actions': 'list'
    }
	
	
	});
  
	var initialize = function(){
	    var app_router = new AppRouter;
		app_router.on('route:comments', function (location) {	
		var location=location||"0";  
        var commentListView = new CommentListView({location:location});		

    });
	
	app_router.on('route:location', function (location) {	
		var location=location||"0";  
       commentView=new CommentView({location:location})	

    });
	
	  app_router.on('route:list', function () {	
	
		commentView=new CommentView()

   });
	
   Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});