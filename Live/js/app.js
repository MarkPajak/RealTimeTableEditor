//This is the main application module, and should always be lightweight.

//The backbone router loads dependencies from the urls in main.js


define([
  'jquery', 
  'underscore', 
  'backbone',
  'router'

], function($, _, Backbone, Router){
  var initialize = function(){

  
  
  Backbone.View.prototype.close = function () { //KILL ZOMBIE VIEWS!!!!

  this.undelegateEvents();
  this.$el.empty();
  this.unbind();
};
 


	

  
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
