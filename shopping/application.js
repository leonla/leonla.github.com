$(document).ready(function(){


	$("#add").submit(function(){
		addItem();
		return false;
	});

	$("#recent").submit(function(){
		addItem1();
		return false;
	});

	$("#remove").click(function(){
			$('input:checkbox:checked').next().remove();
			$('input:checkbox:checked').next().remove();
			$('input:checkbox:checked').remove();

		});	

});

function addItem(){
	var it = $("#new").val();
	$("#list").prepend("<input type='checkbox' value='"+it + "' class='item'><span>"+ it +" </span> <br>");
	$("#new1").prepend(" <option value="+ it + " selected>"+it+"</option>");
};

function addItem1(){
	var it = $("#new1").val();
	$("#list").prepend("<input type='checkbox' value='"+it + "' class='item'> <span>"+ it +"</span> <br>");
	
};

function remove(){
	$(".item").click(function(){
		$(this).remove();
	});

};