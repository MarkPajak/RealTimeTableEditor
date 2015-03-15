define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/comments/commentList.html',
  'collections/comments/CommentCollection',
  'models/comment/CommentModel'
], function($, _, Backbone,sectionTemplate ,CommentCollection,CommentModel){

  var CommentListView = Backbone.View.extend({
  
  
			el : $("#commentPage"),
			initialize: function(options){
		
			
			if(options){
			
			this.locationX=options.location}
					
			
			this.procedureid=options.procedureid||0
			console.log('initialise')
			this.render(options)		
			},
			
			events: {
		
			"click .delete":  "deleteComment",
			"click #addSection":  "addComment",
			"click .comments .CommentFirstName":  "CommentFirstName",	
			"click .comments .CommentLastName":  "CommentLastName",	
			"click .comments .keywords":  "keywords",	
			"click .comments .Comment":  "Comment",					

			},
			
			editSection: function(ev){	
					if(window.PasswordUlocked==false) {return false}			
					var sectionId = $(ev.target).attr('sectionId')
					$('.'+sectionId).toggle(true)
					console.log($('.'+sectionId))		
					$(ev.target).removeClass('icon-pencil').addClass('icon-ok')			
			},
			
			okSection: function(ev){			
					var sectionId = $(ev.target).attr('sectionId')
					$('.'+sectionId).toggle(false)
					$(ev.target).removeClass('icon-ok').addClass('icon-pencil')
					
			},
			
			ScrollToSection: function(ev){
					var tosectionid=$(ev.target).attr('tosectionid')			
					var Scrollto = document.getElementById(tosectionid)
					
					$('html, body').animate({
						scrollTop: $(Scrollto).offset().top
					}, 2000);
			
			},

			keywords:function(ev) {
					if(window.PasswordUlocked==false) {return false}	
					var self=this
					var currentTatget = $(ev.target)
					var currentText=$(ev.target).text()					
					var CID=($(ev.target).attr('commentid'))	
					
					
					$('.keywords').blur(function(ev) {
					currentTatget.html(currentTatget.text())
									
								var NewText=currentTatget.text()
								if(NewText!=currentText){
								var stepToedit = self.comments.get({'id':CID})								
								stepToedit.set({'keywords':	NewText})					
								NewText=currentText
								console.log(stepToedit)
								stepToedit.sync('edit', stepToedit,[]);
								}
					})
		
			
			},
			Comment:function(ev) {
					if(window.PasswordUlocked==false) {return false}	
					var self=this
					var currentTatget = $(ev.target)
					var currentText=$(ev.target).text()					
					var CID=($(ev.target).attr('commentid'))	
					
					
					$('.Comment').blur(function(ev) {
					currentTatget.html(currentTatget.text())
									
								var NewText=currentTatget.text()
								if(NewText!=currentText){
								var stepToedit = self.comments.get({'id':CID})								
								stepToedit.set({'comment':	NewText})					
								NewText=currentText
								console.log(stepToedit)
								stepToedit.sync('edit', stepToedit,[]);
								}
					})
		
			
			},

			
			CommentFirstName:function(ev) {
					if(window.PasswordUlocked==false) {return false}	
					var self=this
					var currentTatget = $(ev.target)
					var currentText=$(ev.target).text()					
					var CID=($(ev.target).attr('commentid'))	
					
					
					$('.CommentFirstName').blur(function(ev) {
					currentTatget.html(currentTatget.text())
									
								var NewText=currentTatget.text()
								if(NewText!=currentText){
								var stepToedit = self.comments.get({'id':CID})								
								stepToedit.set({'name':	NewText})					
								NewText=currentText
								console.log(stepToedit)
								stepToedit.sync('edit', stepToedit,[]);
								}
					})
		
			
			},
			
			
					CommentLastName:function(ev) {
					if(window.PasswordUlocked==false) {return false}	
					var self=this
					var currentTatget = $(ev.target)
					var currentText=$(ev.target).text()					
					var CID=($(ev.target).attr('commentid'))	
					
					
					$('.CommentLastName').blur(function(ev) {
					currentTatget.html(currentTatget.text())
									
								var NewText=currentTatget.text()
								if(NewText!=currentText){
								var stepToedit = self.comments.get({'id':CID})								
								stepToedit.set({'last_name':	NewText})					
								NewText=currentText
								console.log(stepToedit)
								stepToedit.sync('edit', stepToedit,[]);
								}
					})
		
			
			},
			
			
				
					CommentTextedited:function(ev) {
					if(window.PasswordUlocked==false) {return false}	
					var self=this
					var currentTatget = $(ev.target)
					var currentText=$(ev.target).text()					
					var CID=($(ev.target).attr('commentid'))	
					
					$('.sectionText ').blur(function(ev) {
								currentTatget.html(currentTatget.text())	
								var NewText=currentTatget.text()
								if(NewText!=currentText){
								var stepToedit = self.comments.get({'id':CID})							
								stepToedit.set({'text':	NewText})	
					
								NewText=currentText
								stepToedit.sync('edit', stepToedit,[]);
								}
					})
		
			
			},
		
			addStep:function(ev,id) {
							if(window.PasswordUlocked==false) {return false}	
							var self=this
							if(ev){
							//new blank step
							var currentTatget = $(ev.target) 
							var currentText=$(ev.target).text()					
							var CID=($(ev.target).attr('commentid'))	
							var stepSection = document.getElementById("step_"+	CID	)
							//var StepID =  self.comments.get({'id':CID})
							var date = new Date()
							IdtimeStamp= Math.round(+new Date()/1000);	
							var stepModel={stepNumber:0,commentid:CID, id:IdtimeStamp,heading: "Step Heading",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookss."}
									
							this.steps.add(stepModel)							
							var stepToedit = self.steps.get({'id':IdtimeStamp})	
							stepToedit.set({'number':	0})								
							stepToedit.sync('create', stepToedit,[]);
							var Step=  _.template( stepTemplate, {steps:	self.steps,comments:self.comments} );	
							$(stepSection).html(Step)
							
					
							
							OPTIONShtml="";
							this.comments.each(function( section ) {
									if(section.get('id')!=CID) {						
									OPTIONShtml+='<option class="selectionOption" stepid=' + IdtimeStamp + ' commentid=' +CID + ' tocommentid=' + section.get('id') + '>' + section.get('heading') + '</option>';}
									})
							
							stepsectionOPTIONS=document.getElementById("StepSectionNumberOPTIONS_" + IdtimeStamp)
							$(stepsectionOPTIONS).html(OPTIONShtml)
							
							}
					else {	
							CID=id				
							this.steps=new StepCollection()
							this.steps.commentid=CID
							this.steps.fetch({ success : renderSteps, dataType: "json" });
										
					}	

					function renderSteps(collection){	
							self.steps.reset(collection.models) 			
							var Step=  _.template( stepTemplate, {steps:	self.steps,comments:self.comments} );	
							var stepSection = document.getElementById("step_"+	CID	)					
							$(stepSection).html(Step)
							self.addSectionNamesToSteps(self.steps)
								
							}	
							
				},
				
				

				
				addSectionNamesToSteps: function(steps){
				var self = this
				
				steps.each(function( step ) {			
						
						var sectionNumber = step.get('toSection')
						//var stepSection = document.getElementById("StepSectionNumber_"+	sectionNumber	)	
						
						console.log(self.comments)
						stepSectionmodel = self.comments.get({'sectionNumber':sectionNumber})
						console.log('stepSectionmodel',stepSectionmodel)	
						self.comments.fetch({ success : rendersectionHeadings, dataType: "json" });
						function rendersectionHeadings(collection){	
							self.comments.reset(collection.models) 	
							//$(stepSection).html('yup')
							
							self.comments.each(function( section) {			
							console.log(section.get('sectionNumber'))
							if(section.get('sectionNumber')==sectionNumber){
							stepsection=document.getElementById("StepSectionNumberLINK_"+ step.get('id'))
							
							  $( document ).ready(function() {
							  if($(stepsection).length!=-1){
							$(stepsection).html($(stepsection).html()+" (" + section.get('heading') +")")
						
								
							}
							})
							}
							});
							
							
							
							}
						
						
						
						
						});
				
				},
				
				
			
			addSection:function(ev,IdtimeStamp) {
		
					var sectionnumber=this.comments.length+1
					var sectionModel=new SectionModel					
					var date = new Date()
					IdtimeStamp= IdtimeStamp||Math.round(+new Date()/1000);	
					sectionModel.set({id:IdtimeStamp,sectionNumber:sectionnumber,heading: "Section Heading",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",procedureid:this.procedureid})
					sectionModel.sync('create', sectionModel,[]);
					
					this.render()
			
			},
			
			deleteComment:function(ev) {
					if(window.PasswordUlocked==false) {return false}	
					if (confirm('Can the world live without this comment?')) {
							var self=this
							var commentid=($(ev.target).attr('commentid'))
							var stepToedit = self.comments.get({'id':commentid})
									self.comments.remove(stepToedit)
					if(			stepToedit){					
									stepToedit.sync('delete', stepToedit,[])}
							
					}	
						this.render(this.locationX)
			},
			
			removeSection: function(ev) {
			
					if (confirm('Are you sure you want to delete this section')) {
					// Save it!

								var CID=($(ev.target).attr('commentid'))		 
								sectionToRemove = this.comments.get(CID)
								
								sectionToRemove.sync('delete', sectionToRemove,[]);
								//this.comments.remove(sectionToRemove )
								this.render()
								} else {
					// Do nothing!
						}
								
						
			},
		
							
		   render:function(options) {
	
					var self = this
		   
					function rendercomments(collection){			
							self.comments.reset(collection.models) 		

						
							if(options){
							
							var LocationFilter
							if(self.locationX=="BMAG"){
							LocationFilter="BMAG"}
							if(self.locationX=="MSHED"){
							LocationFilter="MSHED"}
							if(self.locationX!='*'){
							self.comments=self.comments.byLocation(LocationFilter)}
							}
							
							var Section =  _.template( sectionTemplate, {section:self.comments} );	
							self.$el.html(Section)
									if(!window.PasswordUlocked){
				window.PasswordUlocked=false
					$('.delete').toggle(false)
				}
							
						
					}
			
		
							
					this.comments=new CommentCollection()
					this.comments.fetch({ success : rendercomments, dataType: "json" });
						
			},
			
			
			renderSteps: function(){
						 var self = this
						 
						this.comments.each(function( section ) {
					
						self.addStep(null,section.get('id'))
						
						});
			
			
			}
  
  
  });

  return CommentListView;
  
});
