$(document).ready(function(){
	$('#campo').on('input', function(){
		$('#manda').prop('disabled', $(this).val().length < 3);
	});
});

$(document).ready(function() {
	$('.modal').on('hidden.bs.modal', function() {
		console.log('fechar modal')
			$(this).find('input:text').val('');
	});
});
		
$(document).ready(function(){
	$('#campo2').on('input', function(){
		$('#manda2').prop('disabled', $(this).val().length < 3);
	});
});

$(document).ready(function(){
	$('#campo3').on('input', function(){
		$('#manda3').prop('disabled', $(this).val().length < 3);
	});
});
		
$(document).ready(function(){
	$('#campo4').on('input', function(){
		$('#manda4').prop('disabled', $(this).val().length < 3);
	});
});

function funcao() {
	alert("Preenchido com sucesso");
}
