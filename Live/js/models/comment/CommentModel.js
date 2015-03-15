define([
  'jquery',
  'underscore',
  'backbone',
], function($,_, Backbone) {

  var CommentModel =  Backbone.Model.extend({
  
    initialize : function(){

         // console.log( 'Before bind events how is our model?', this.toJSON() );

          this.bind("change", this.changeHandler)
          this.bind("change:site_name", this.nameChangeHandler)
          this.bind("change:age", this.ageChangeHandler)

        },
		
		/*
+-------------------+--------------+------+-----+---------+-------+
| Field             | Type         | Null | Key | Default | Extra |
+-------------------+--------------+------+-----+---------+-------+
| heading           | text         | YES  |     | NULL    |       |
| text              | text         | YES  |     | NULL    |       |
| id                | int(11)      | NO   | PRI | 0       |       |
| document          | varchar(255) | YES  |     | NULL    |       |
| sectionNumber     | int(11)      | YES  |     | NULL    |       |
| procedureid       | int(11)      | YES  |     | NULL    |       |
| comment           | text         | YES  |     | NULL    |       |
| name              | text         | YES  |     | NULL    |       |
| sourceid          | int(11)      | YES  |     | NULL    |       |
| keywords          | text         | YES  |     | NULL    |       |
| title             | text         | YES  |     | NULL    |       |
| type              | varchar(255) | YES  |     | NULL    |       |
| rating            | varchar(255) | YES  |     | NULL    |       |
| location          | varchar(255) | YES  |     | NULL    |       |
| method            | varchar(255) | YES  |     | NULL    |       |
| date              | varchar(255) | YES  |     | NULL    |       |
| response_required | varchar(255) | YES  |     | NULL    |       |
| e_news            | varchar(255) | YES  |     | NULL    |       |
| email             | varchar(255) | YES  |     | NULL    |       |
| phone             | varchar(255) | YES  |     | NULL    |       |
| enquiry_type      | varchar(255) | YES  |     | NULL    |       |
+-------------------+--------------+------+-----+---------+-------+


*/

 defaults: {
           
			comment:"Step Heading",
            name:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			date: '',
			e_news: '',
			response_required: '',
			method: '',
			location: '',
			rating: '',
			type: '',
			title: '',
			keywords: '',
			sourceid: '',			
			enquiry_type: '',
			e_news: '',
			phone: '',
			email: '',
			last_name: '',			
			response_required: ''
		   
           
        },
   
  sync: function (method, model, options) {

//with thanks to https://amitgharat.wordpress.com/2012/06/23/writing-your-first-application-using-backbone-js/

    if (method === 'create' ||method === 'edit' || method === 'update') {
		      return $.ajax({
			dataType: 'json',
	
			url: 'http://markpajak.co.uk/mark/comments/Scripts/php/comments/api.php',
			data: {
			id:(this.get('id')||'default'),
			name:this.get('name'),
			phone:this.get('phone'),
			procedureid:this.get('procedureid'),
			comment: (this.get('comment') || ''),
			email: (this.get('email') || ''),
			e_news: (this.get('e_news') || ''),
			enquiry_type: (this.get('enquiry_type') || ''),
			location: (this.get('location') || ''),
			response_required: (this.get('response_required') || ''),
			date: (this.get('date') || ''),
			type: (this.get('type') || ''),
			keywords: (this.get('keywords') || ''),
			last_name: (this.get('last_name') || ''),				
			action:method		  
						},
			success: function (data) {
			
			}
			});
				
			
    	}
	else
	{
	 return $.ajax({
			dataType: 'json',
			url: 'http://markpajak.co.uk/mark/comments/Scripts/php/comments/api.php',
			data: {
			 id:(this.get('id')||'default'),
			  heading:this.get('heading'),
			  text: (this.get('text') || ''),
			  action:'delete'
			},
			success: function (data) {
			//alert('model deleted')
		  	
			}
		      	});
	}
  }
    	})


  return CommentModel;

});
