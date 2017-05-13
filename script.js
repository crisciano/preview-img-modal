/** jquery para o modal e img  */
jQuery(document).ready(function($) {

	$('.img').click(function(event) {
		// var
		var img = $(this).attr('data-img');	
		var posicao = $(this).attr('data-pos');	
		var min = 1;
		var max = $('.img').length;

		//efeito
		$('#img-get').attr('src', img);
		$('#img-get').attr('data-pos', posicao);
		$('#img-view').modal('show');

		// condicional 
		if ($(this).attr('data-pos') == min ){ $('.btn-pre').hide();}else{$('.btn-pre').show();}
		if ($(this).attr('data-pos') == max ){ $('.btn-pro').hide();}else{$('.btn-pro').show();}
	});

	$('.btn-pro, .btn-pre').click(function(event) {
		// var
		var min = 1;
		var max = $('.img').length;

		// condicional de var
		if ($(this).hasClass('btn-pro')) {var pos = $('#img-get').attr('data-pos'); pos++;} else 
		if ($(this).hasClass('btn-pre')) {var pos = $('#img-get').attr('data-pos'); pos--;}

		// var 
		var newSrc = $('.img[data-pos='+pos+']').attr('data-img');

		// efeito
		$('#img-get').attr('src', newSrc);
		$('#img-get').attr('data-pos', pos);
		
		// condicional 
		if ($('#img-get').attr('data-pos') == min ){ $('.btn-pre').hide();}else{$('.btn-pre').show();}
		if ($('#img-get').attr('data-pos') == max ){ $('.btn-pro').hide();}else{$('.btn-pro').show();}
	});
});