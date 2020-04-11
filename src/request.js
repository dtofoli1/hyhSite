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
				"<option value='" +
					response[i].id +
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
	var selectForm = document.getElementById("topicSelect");
	var selectedId = selectForm.options[selectForm.selectedIndex].value;

	var incompletText = $completText.val().replace(/ *\([^)]*\) */g, "___");
	var completText = $completText.val().replace(/[()]/g, "");

	var postData = {
		complete_text: completText,
		incomplete_text: incompletText,
		id_topic: selectedId,
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
