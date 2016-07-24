var backgroundButtons = ["background-color-picker-button", "guideline", "book-guideline", "math-guideline", "undo", "rendo", "full-screen"];
var pencilButtons     = ["text-color-picker-button", "size-picker", "undo", "rendo", "full-screen"];
var eraserButtons     = ["size-picker", "undo", "rendo", "full-screen"];
var shapeButtons      = ["text-color-picker-button", "size-picker", "trash", "undo", "rendo", "full-screen"];
var textButtons       = ["text-color-picker-button", "size-picker", "add-text", "text-menu", "trash", "undo", "rendo", "full-screen"];
var imageButtons      = ["trash", "undo", "rendo", "full-screen"];
var saveButtons       = ["download", "undo", "rendo", "full-screen"];

$(function() {
	makeVisible(backgroundButtons);
});

function clickOnLeftPanel(buttonId)
{
	var id = $(buttonId).attr('id');
	
	$('#top-panel .items').children().css({"display" : "none"});

	switch(id)
	{
		case 'background':
			makeVisible(backgroundButtons);
			break;
		case 'pencil':
			makeVisible(pencilButtons);
			break;
		case 'eraser':
			makeVisible(eraserButtons);
			break;
		case 'shape':
			makeVisible(shapeButtons);
			break;
		case 'text':
			makeVisible(textButtons);
			break;
		case 'image':
			makeVisible(imageButtons);
			break;
		case 'save':
			makeVisible(saveButtons);
			break;
		default:
			makeVisible(backgroundButtons);
			break;
	}
}

function makeVisible(array)
{	
	$.each(array, function(index, value) {
		$('#' + value).css({"display" : "inline-block"});
	});
}

$("#background-color-picker").on("change",function() {
	$("#whiteboard").css("background-image", 'none');
    $("#whiteboard").css("background-color", $("#background-color-picker").val());
});


$(".guideline").on("click",function() {
	
	var id = $(this).attr('id');
	var img;

	switch(id)
	{
		case 'guideline':
			img = "assets/img/patterns/guidelines.png";
			break;
		case 'book-guideline':
			img = "assets/img/patterns/booklines.png";
			break;
		case 'math-guideline':
			img = "assets/img/patterns/mathlines.png";
			break;
		default:
			img = "assets/img/patterns/guidelines.png";
			break;
	}
	
	$("#whiteboard").css("background-image", 'url(' + img + ')');
});
