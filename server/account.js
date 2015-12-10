Meteor.startup(function(){
	Accounts.urls.resetPassword = function(token) {
    	return Meteor.absoluteUrl('reset-password/' + token);
  	};
});

Meteor.methods({
	// USER MANAGEMENT 

	changeUsername(userId, newUsername){
		Accounts.setUsername(userId, newUsername);
	}
});