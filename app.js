$(document).ready(function(){
	$('#getUsers').on('click', function(){
		return $.ajax({
			method: 'GET',
			url: 'http://reqr.es/api/users?page=1',
			success: function(res){
				console.log(res);
				insertData(res.data);
			}
		})
	})

	var insertData = function(arr){
		for (var i = 0; i < arr.length; i++){
			$('#userInfo' + (i + 1)).html('<div>' +
				'UserInfo:' +
				'<li>' +
				'First Name: ' + arr[i].first_name +
				'</li>' +
				'<li>' +
				'Last Name: ' + arr[i].last_name +
				'</li>' +
				'<li><img src="' +
				arr[i].avatar +
				'"></li>' +
				'<hr>' +
				'</div>'
			);
			console.log('Added DOM object');
		};
	}

	$('#addUser').on('click', function(e){
		e.preventDefault();
		var userName = $('#name').val();
		var userJob = $('#job').val();
		console.log(userName);
		console.log(userJob);
		// debugger;
		return $.ajax({
			method: 'POST',
			url: 'http://reqr.es/api/users',
			data: {username: userName, job: userJob},
			success: function(res){
				console.log('successful POST');
				$('#recentUser').html(
					'<div>' +
					'<li>' +
					'Name: ' + res.username +
					'</li>' +
					'<li>' +
					'Job: ' + res.job +
					'</li>' +
					'<li>' +
					'ID: ' + res.id +
					'</li>' +
					'<li>' +
					'created at: ' + res.createdAt +
					'</div>'
				)
			},
			error: function(){
				console.log('nope. didn\'t fly');
			}
		})
	});


});