jQuery(document).ready(function($){
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
});

$(".top").tooltip({
    placement: "top"
});

$('#show-more').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
});

$('#contacts-header').on('click', function(e) {
    e.preventDefault();
	var $contacts = $('#contacts');
	if($contacts.hasClass('minimised')) {
		$contacts.removeClass('minimised');
		$('#contacts-settings').removeClass('display-none');
	} else {
		$contacts.addClass('minimised');
		$('#contacts-settings').addClass('display-none');
	}
});


var typingTimer;               
var doneTypingInterval = 500;  
var $input = $('#contacts-search-input');

$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

$input.on('keydown', function () {
	$('#contact-search-loader').removeClass('display-none');
	$('#contacts-content-inner').addClass('display-none');	
	clearTimeout(typingTimer);
});

function doneTyping () {
	$('#contact-search-loader').addClass('display-none');
	$('#contacts-content-inner').removeClass('display-none');
}