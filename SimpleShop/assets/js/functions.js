$(function() { 
    if(readCookie("themeColor") === null) {
        createCookie("themeColor", "green", 1);
        setBodyClass();
    }
});

/***********************
 NAVIGATION
***********************/
$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(event) {
        event.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
}); 

/***********************
 PRODUCT AS LIST OR GRID
***********************/

$(function() {

    var list = $('#product-as-list');
        grid = $('#product-as-grid');

    $(list).on('click', function(event){
        event.preventDefault();
        $('#products').children('.product').each(function () {           
            if( !$(this).hasClass('product-as-list')) {
                $(this).addClass('product-as-list'); 
            }                
        });
    });

    $(grid).on('click', function(event){
        event.preventDefault();
        $('#products').children('.product').each(function () {
            if( $(this).hasClass('product-as-list')) {
                $(this).removeClass('product-as-list');    
            }
        });
    });
});


/***********************
 DISPLAY FIRST PAGE
***********************/

$(function() {

    var defaultPage       = $('#page-default');
        withoutSliderPage = $('#page-without-slider');
        topSideBarPage    = $('#page-top-side-bar');

    $(defaultPage).on('click', function(event){
        event.preventDefault();
        $("#image-slider").removeClass('hidden');
        $("#image-slider").removeClass('float-right-slider');
        $("#image-slider").addClass('display-inline-block');
       
    });

    $(withoutSliderPage).on('click', function(event){
        event.preventDefault();
        $("#image-slider").removeClass('display-inline-block');
        $("#image-slider").addClass('hidden');
    });

     $(topSideBarPage).on('click', function(event){
        event.preventDefault();
        $("#image-slider").removeClass('hidden');
        $("#image-slider").addClass('float-right-slider');
        $(".right-col").addClass('float-right');
    });
});

/***********************
 SET THEME
***********************/

$('#page-colors li').click(function() { 
    var id = $(this).children('a').attr('id');
    id = id.replace("-page", "");
    createCookie("themeColor", id, 1);
    setBodyClass();
});

function setBodyClass() {
    $('body').removeClass();
    $('body').addClass(readCookie("themeColor"));
}

$(function() {     
    setBodyClass();
});

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

/***********************
 AUTORESIZE SELECT BOX
***********************
(function($, window){
  var arrowWidth = 15;

  $.fn.resizeselect = function(settings) {  
    return this.each(function() { 

      $(this).change(function(){
        var $this = $(this);

        // create test element
        var text = $this.find("option:selected").text();
        var $test = $("<span>").html(text);

        // add to body, get width, and get out
        $test.appendTo('body');
        var width = $test.width();
        $test.remove();

        // set select width
        $this.width(width + arrowWidth);

        // run on start
      }).change();

    });
  };

  // run by default
  $("select.resizeselect").resizeselect();                       

})(jQuery, window);*/


/***********************
 IMAGE SLIDER
***********************/
$(function () {
    
   
    var changeImgTime 	    = 3000;	
    var transitionSpeed	    = 300;
    
    var simpleSlideshow	    = $("#image-slider"),
        listItems 			= simpleSlideshow.children('li'),
        listLen				= listItems.length,
        currentItem			= 0,
		
        changeList = function () {
		
			listItems.eq(currentItem).fadeOut(transitionSpeed, function () {
				currentItem++ ;
				if (currentItem === listLen) {
					currentItem = 0;
				}
				listItems.eq(currentItem).fadeIn(transitionSpeed);
			});

        };
		
    setInterval(changeList, changeImgTime);
	
});


$(function() {
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.back-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('back-is-visible') : $back_to_top.removeClass('back-is-visible back-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('back-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

$(function() { 

	var configBtn = $('#config-open-btn');
	$(configBtn).on('click', function(event) {
        event.preventDefault();       
       	$('div.config').hasClass('config-open') ? $('div.config').removeClass('config-open') : $('div.config').addClass('config-open');       
    });
});


function switchElement(hideElem, showElem) {
    var hide = document.getElementById(hideElem);
    var show = document.getElementById(showElem);

    hide.className = "";
    hide.className = "hidden";
    show.className = "form";
    
}

 $('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });

$('.ratings-stars').hover(
    // Handles the mouseover
    function() {
        $(this).prevAll().andSelf().addClass('ratings-over');
        $(this).nextAll().removeClass('ratings-vote'); 
    },
    // Handles the mouseout
    function() {
        $(this).prevAll().andSelf().removeClass('ratings-over');
        set_votes($(this).parent());
    }
);



$('.ratings-stars').bind('click', function() {
    alert($(this).index() + 1);
});

/*Image gallery*/

$(document).ready(function() {
    
    var $item = $('div.item'),                      // gallery item
        $modalContainer = $('#modal-container'),    // modal container        
        $modalImage = $('#modal-container #img'),   // image from modal container
        $popup = $('#popup'),                       // popup
        $popupTitle = $('#popup .title'),           // popup title
        $popupClose = $('#modal-container .close'), // modal close button
        $popupContent = $('#popup .content'),       // popup content

        visible = 3, //Set the number of items that will be visible in gallery
        startIndex = 0, //Start index
        endIndex = $item.length - visible; //End index
    
    $('div#nextBtn').click(function(){
        if(startIndex < endIndex ){
          startIndex++;
          $item.animate({'left':'-=75px'});
        } 
    });
    
    $('div#prevBtn').click(function(){
        if(startIndex > 0){
          startIndex--;            
          $item.animate({'left':'+=75px'});
        }
    });

    $popupClose.on('click', function(event) {  
        event.preventDefault();               
        $modalContainer.hasClass('display-block') ? $modalContainer.removeClass('display-block') : $modalContainer.addClass('display-block');       
    });

    $('#image-gallery .item img').on('click', function(event) {
        var imageSource = $(this).attr('src');
        var imageTitle  = $(this).attr('title');
        var imageAlt    = $(this).attr('alt');

        $modalImage.attr('src', imageSource);
        $modalImage.attr('title', imageTitle);
        $modalImage.attr('alt', imageAlt);
        
        $popupTitle.html(imageTitle);
        
        $popup.height($(window).height() * 0.8);     // 80% of browser window height
        $popup.width($(window).width() * 0.7);       // 70% of browser window width
        
        $popupContent.height($popup.height() - 30);  // 30 = (height of popup header = 25) + (space between header and content = 5) 
        $popupContent.width($popup.width());

        $modalContainer.addClass('display-block'); 
    });

});