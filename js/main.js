$('.signin')

	.on('click', function()	{
	$('.modal').fadeIn('300');

	});

$('.close')

	.on('click', function(){
	$('.modal').fadeOut('300');

	});

$('.submit')

	.on('click', function()	{
	$('.submit').addError('error');




});