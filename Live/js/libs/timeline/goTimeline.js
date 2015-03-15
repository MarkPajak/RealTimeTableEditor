var GlobalObjectDate;
var slideToSelect=1;

function gotimeline(ObjectDate,title,objectImage,caption,dateEnd) {

 

      
console.log('hide record close button');
 $("#closeRecordView").removeClass("hidden");
 $("#closeRecordView").addClass("appear");
GlobalObjectDate=ObjectDate;

if(GalleryApp==false){
maketimelinefirst(GlobalObjectDate);}
else
{
 $.getJSON('data/timeline.JSON', function (data) {
 $('html,body').animate({
          scrollTop: $('#MainSection').offset().top
        }, 1000);
var timeline_all=data;
var start_index = 0;


$("#timelineBackground").addClass("appear");
$("#timelineBackground").addClass("darkenbackground");
console.log("timeline button clicked");
createStoryJS(
{
 type:       'timeline',
  width:              '850',
            height:             '600',
            source:             timeline_all,
            embed_id:           'timeline-embed',               //OPTIONAL USE A DIFFERENT DIV ID FOR EMBED
            start_at_end:       true,                          //OPTIONAL START AT LATEST DATE
             start_at_slide: slideToSelect,                           //OPTIONAL START AT SPECIFIC SLIDE
            start_zoom_adjust:  '4',                     //OPTIONAL TWEAK THE DEFAULT ZOOM LEVEL
            hash_bookmark:      true,                           //OPTIONAL LOCATION BAR HASHES
           // font:               'Bevan-PotanoSans',             //OPTIONAL FONT
            debug:              false,                           //OPTIONAL DEBUG TO CONSOLE
 //           lang:               'fr',                           //OPTIONAL LANGUAGE
            maptype:            'watercolor',                   //OPTIONAL MAP STYLE
            css:                'styles/timeline.css',     //OPTIONAL PATH TO CSS
			//css:                'js/TimelineJS-master/build/css/themes/dark.css',     //OPTIONAL PATH TO CSS
            //js:                 'js/TimelineJS-master/build/js/timeline-min.js'    //OPTIONAL PATH TO JS
});

console.log("timeline loaded");
	 $('#closeRecordtrigger').css('left','400px');
//$('.slider-item').perfectScrollbar();

		
			});
}


function maketimelinefirst(dateofobject){


 $.getJSON('data/timeline.JSON', function (data) {
var timeline_dates=data.timeline.date;
var slideDate = dateofobject;
var timeline_all=data;
 caption=unescape(caption);
 title=unescape(title);
timeline_all.timeline.date.push({
            "startDate": dateofobject,
            "endDate": dateEnd,
            "headline": title,
            "text": " ",
	    "classname": " ",
            "asset": {
                "media": objectImage,
                "credit": "",
                "caption": caption,"time_thumbnail": objectImage,
            },
            "tag": "Period"
        });

//var timeline_dates = data_source.timeline.title;
var timeline_titles = timeline_all.timeline.date;
var start_index = 0;
var target_title = title; //set whatever date you want as your start date
for(x in timeline_titles) {
    var slide_title =  timeline_titles[x].headline ;
	
    if( slide_title != target_title) {start_index++};
}

start_index = 3;
$("#timelineBackground").addClass("appear");
$("#timelineBackground").addClass("darkenbackground");
console.log("timeline button clicked");
createStoryJS(
{
 type:       'timeline',
  width:              '850',
            height:             '600',
            source:             timeline_all,
            embed_id:           'timeline-embed',               //OPTIONAL USE A DIFFERENT DIV ID FOR EMBED
            start_at_end:       true,                          //OPTIONAL START AT LATEST DATE
             start_at_slide: slideToSelect,                           //OPTIONAL START AT SPECIFIC SLIDE
            start_zoom_adjust:  '4',                     //OPTIONAL TWEAK THE DEFAULT ZOOM LEVEL
            hash_bookmark:      true,                           //OPTIONAL LOCATION BAR HASHES
           // font:               'Bevan-PotanoSans',             //OPTIONAL FONT
            debug:              false,                           //OPTIONAL DEBUG TO CONSOLE
 //           lang:               'fr',                           //OPTIONAL LANGUAGE
            maptype:            'watercolor',                   //OPTIONAL MAP STYLE
            css:                'styles/timeline.css',     //OPTIONAL PATH TO CSS
			//css:                'js/TimelineJS-master/build/css/themes/dark.css',     //OPTIONAL PATH TO CSS
            //js:                 'js/TimelineJS-master/build/js/timeline-min.js'    //OPTIONAL PATH TO JS
});

console.log("timeline loaded");
//$('.slider-item').perfectScrollbar();
	 $('#closeRecordtrigger').css('left','400px');
		
			});
		
			};
	


 	
			};



