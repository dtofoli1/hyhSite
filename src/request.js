$("#main").ready(function() {
	$.ajax({
		method: "GET",
		url: "https://haveyouheard-game.herokuapp.com/get_topics",
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
	var formData = JSON.stringify($("#fullform").serialize());
	console.log(formData);
});
