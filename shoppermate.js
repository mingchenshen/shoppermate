function removeListItem(){
	$('.btn-remove').on('click', function(){
		$(this).closest('.listitem').remove();
	});
};

function toggleCheck(){
	$('.listitem').on('click', function(){
		$(this).toggleClass('checked');
		$(this).find('.btn-check').toggleClass('fa fa-check');
	});

};

$(document).ready(function(){
	//setting functionality
	removeListItem();
	toggleCheck();


	$(".listinput").on('keypress', function(){
		if(event.which == 13){
			event.preventDefault();
			var item = $(this).val();
			if(jQuery.trim(item).length == 0){
				console.log('please enter text');
				$(this).val('');
			}else{
				$(".list").prepend("<div class='listitem'><div class='btn-check'></div>" + item + "<div class='btn-remove fa fa-times'></div></div>");
				$(this).val('');
				//setting functionality
				removeListItem();
				toggleCheck();
			};
		};
	});
});
