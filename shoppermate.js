function removeListItem(item){
	$(item).find('.btn-remove').on('click', function(){
		$(item).fadeOut(200, function(){
			$(this).remove();
		});
	});
};

function toggleCheck(item){
	$(item).on('click', function(){
		console.log(item);
		$(item).toggleClass('checked');
		$(item).find('.btn-check').toggleClass('fa fa-check');
	});
};

$(document).ready(function(){
	$(".list").sortable();

	//setting functionality
	$(".listinput").on('keypress', function(){
		if(event.which == 13){
			event.preventDefault();
			var item = $(this).val();
			if(jQuery.trim(item).length == 0){
				console.log('please enter text');
				$(this).val('');
			}else{
				$(".list").prepend("<div class='listitem'><div class='btn-check'></div>" + item + "<div class='btn-remove fa fa-times'></div></div>");
				var newitem = $(".list").find('div:first');
				newitem.animate({marginTop:'+=1.5em', padding:'+=7px +=0'});
				$(this).val('');
				//// setting functionality
				removeListItem(newitem);
				toggleCheck(newitem);
			};
		};
	});
	$('.clear').on('click', function(){
		$('.listitem').fadeOut(200, function(){
			$('this').remove();
		});
	});
});