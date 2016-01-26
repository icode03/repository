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