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
		var response = msg.data;
		console.log(response);

		for (var i = 0; i < response.length; i++) {
			$(".list").append(
				"<option id='" +
					response[i].id_topic +
					"'>" +
					response[i].name +
					"</option>"
			);
		}
	});
});

$("#sendform").click(function(e) {
	e.preventDefault();
	var $completText = $("#gameNews");
	var $url = $("#newsLink");

	var postData = {
		complete_text: $completText.val(),
		incomplete_text: $completText.val(),
		id_topic: 4,
		url: $url.val()
	};

	postDataJSON = JSON.stringify(postData);

	console.log(typeof postDataJSON);
	console.log(postDataJSON);
	$.ajax({
		type: "POST",
		url: "https://haveyouheard-game.herokuapp.com/add_news",
		dataType: "json; charset=UTF-8",
		headers: {
			"Access-Control-Allow-Origin": "*",
			Accept: "*/*"
		},
		data: postDataJSON,
		success: function() {
			alert("Obrigado por Contribuir!");
			console.log(postData);
		},
		error: function() {
			alert("Algo não deu certo, tente novamente!");
		}
	});
});
