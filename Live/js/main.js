//configure the shortcut alias
require.config({
	paths:{
	jquery:'libs/jquery/jquery-min',
	jqueryUI: 'libs/jqueryUI/jquery-ui.min',
	underscore:'libs/underscore/underscore-min',
	backbone:'libs/backbone/backbone-min',	
	dropzone:'libs/dropzone/dropzone',	
	templates: '../templates'
	}
	})

require([

//load the app module and pass it to the definition function

"app"], function(App) {

App.initialize();
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".


	


});