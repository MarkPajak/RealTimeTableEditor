define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/comments/commentform.html', 
  'collections/comments/CommentCollection',
  'models/comment/CommentModel',
  'views/comments/commentView'
], function($, _, Backbone,commentformTemplate,CommentCollection,CommentModel,commentView ){

  var ProcedureListView = Backbone.View.extend({
  
  
			el : $("#commentPage"),
			initialize: function(options){
			
			
			if(options){
			
			this.locationX=options.location}
			
			console.log('initialise')
			this.render()		
			},
			
			events: {	
		
			"click #sendCommentButton":  "sendComment"

			},
			
		
			
			sendComment:function(ev,IdtimeStamp) {	
			ev.preventDefault();
				var commentModel=new CommentModel					
				var date = new Date()
				if(Commentform.message.value !=""){
				IdtimeStamp= IdtimeStamp||Math.round(+new Date()/1000);	
				commentModel.set({id:IdtimeStamp,
								name: Commentform.firstname.value,
								location: Commentform.location.value,
								phone: Commentform.telephone.value,
								email: Commentform.email.value,
								last_name: Commentform.lastname.value,
								comment: Commentform.message.value})
				commentModel.sync('create', commentModel,[]);
				 alert('thanks for your comment')}
				location.reload()
			
			
				
				},
		

							
		   render:function(options) {
		
					var self = this
		   if(options){
			
			this.locationX=options.location}
			
					function renderProcedures(collection){		
					
							self.comments.reset(collection.models) 					
							var Section =  _.template( commentformTemplate, {procedure:self.comments} );	
							self.$el.html(Section)
							$( document ).ready(function() {
							
							if(self.locationX=="BMAG"){
							
							Commentform.location.value="BMAG"}
							if(self.locationX=="MSHED"){
							Commentform.location.value="MSHED"}
							
							});
							//self.renderSteps()		
					}
			var Section =  _.template( commentformTemplate, {procedure:self.comments} );	
							self.$el.html(Section)
		
					this.comments=new CommentCollection()
					this.comments.fetch({ success : renderProcedures, dataType: "json" });
						
			},
			
			

  
  
  });

  return ProcedureListView;
  
});
