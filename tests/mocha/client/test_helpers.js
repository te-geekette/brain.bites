// var testSetup = function(callback){
// 	var email = 'test@test.de';
// 	var username = 'tester1';
// 	var password = "12345"; 
// 	var user;

// 	if(Meteor.user() === null) {

// 		Meteor.call('lookUpUser', email, function(error, result){
// 			user = result;

// 			if(user === null){

// 				console.log('The user needs to be created');
// 				Accounts.createUser({email: email, password: password, username: username}, function(error){
// 					if (error){
// 						console.log('singup has failed: ' + error.message)
// 					}
// 					console.log('The user will now be logged in');
// 					Meteor.loginWithPassword(email, password, callback); 
// 				}); 

// 			} else {
// 				console.log('The user exists, we are now logging in');
// 				Meteor.loginWithPassword(email, password, callback);
// 			}

// 		});

// 	} else {
// 		console.log('The pure callback is called');
// 		callback(); 
// 	}
// };