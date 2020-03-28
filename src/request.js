$("#main").ready(function() {
	$.ajax({
		method: "GET",
		url: "https://haveyouheard-game.herokuapp.com/get_topics",
		mode: "no-cors",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json"
		}
	}).done(function(msg) {
		var response = JSON.parse(msg);
		console.log(response.data);

		for (var i = 0; i < response.data.length; i++) {
			$(".list").append("<option>" + response.data[i].name + "</option>");
		}
	});
});

$("#sendform").click(function() {
	var $completText = $("#gameNews");
	var $url = $("#newsLink");

	var postData = {
		complete_text: $completText.val(),
		incomplete_text: $completText.val(),
		id_topic: 4,
		url: $url.val()
	};
	console.log(postData);

	$.ajax({
		type: "POST",
		url: "https://haveyouheard-game.herokuapp.com/add_news",
		contentType: "text/html; charset=utf-8",
		headers: {
			"Access-Control-Allow-Origin": "*",
			Accept: "*/*"
		},
		data: {
			complete_text:
				"Livro do (‘menino do Acre’) entra na lista dos mais vendidos no Brasil",
			incomplete_text:
				"Livro do ________ entra na lista dos mais vendidos no Brasil",
			id_topic: 4,
			url:
				"https://brasil.estadao.com.br/noticias/geral,livro-do-menino-do-acre-entra-na-lista-dos-livros-mais-vendidos,70001924841"
		},
		success: function() {
			alert("Obrigado por Contribuir!");
			console.log(postData);
		},
		error: function() {
			alert("Algo não deu certo, tente novamente!");
		}
	});
});
