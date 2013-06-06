$(document).ready(function(){
	$('.box').hover(function(){
		$('#head1').toggle();
		var myClass = $(this).attr("id");
		$("."+myClass).toggle();
	});


});