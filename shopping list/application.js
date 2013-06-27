$(document).ready(function(){

	remove();

	$("#add").submit(function(){
		addItem();
		remove();
		return false;
	});



});

function addItem(){
	var it = $("#new").val();
	$("#list").append("<li class='item'>"+ it +"</li>");
};


function remove(){
	$(".item").click(function(){
		$(this).remove();
	});

};