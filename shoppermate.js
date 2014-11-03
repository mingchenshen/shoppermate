$(document).ready(function(){
	$(".listinput").on('keypress', function(){
		if(event.which == 13){
		event.preventDefault();
		var item = $(this).val();
		console.log(item);
		$(this).val('');
		};
	});
})