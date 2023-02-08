// $(document).ready(function () {
// 	$('button').click(function () {
// 		$.get('https://akademia108.pl/api/ajax/get-post.php')
// 			.done(function (data) {
// 				const pId = $('<p></p>').text(`Post ID: ${data.id}`);
// 				const pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
// 				const pTitle = $('<p></p>').text(`Title: ${data.title}`);
// 				const pBody = $('<p></p>').text(`Body: ${data.body}`);
// 				const hr = $('<hr></hr>');

// 				$('body').append(pId, pUserId, pTitle, pBody, hr);
// 			})
// 			.fail(function (error) {
// 				console.error(error);
// 			});
// 	});
// });
$(document).ready(function () {
	$('button').click(function () {
		$.getJSON('https://akademia108.pl/api/ajax/get-post.php')
			.done(function (data) {
				const pId = $('<p></p>').text(`Post ID: ${data.id}`);
				const pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
				const pTitle = $('<p></p>').text(`Title: ${data.title}`);
				const pBody = $('<p></p>').text(`Body: ${data.body}`);
				const hr = $('<hr></hr>');

				$('body').append(pId, pUserId, pTitle, pBody, hr);
			})
			.fail(function (error) {
				console.error(error);
			});
	});
});
