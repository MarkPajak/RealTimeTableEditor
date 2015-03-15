/**
 * RealTimeTableEditor  v2.0
 *
 * by Mark Pajak 
 * 
 * Licensed under the MIT license.
 */
define([
  'underscore',
  'backbone',
  'models/comment/CommentModel'
], function(_, Backbone, CommentModel){

  var CommentCollection = Backbone.Collection.extend({
      
      model: CommentModel,

	  byLocation: function(object_ID) {
	  
		filtered = this.filter(function(box) {		
		
		  return box.get("location") == object_ID;
		  });
		return new CommentCollection(filtered);
	  },

      initialize : function(models, options) {    },

	 url : function() {

	var SheetToJSONServiceURL = 'http://markpajak.co.uk/mark/comments/Scripts/php/comments/api.php' //dont forget to authorise

        return SheetToJSONServiceURL
      },


      parse : function(data) {

		return data
	       
      	 }

 
  });

  return CommentCollection;

});
