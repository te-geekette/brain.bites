	Meteor.subscribe('courses');
	Meteor.subscribe('contentItems');

	Accounts.onResetPasswordLink(function(token, done){
		Session.set("resetPassword", token);
		FlowRouter.go('/reset-password/' + token); 
		// done();
	});

	Accounts.emailTemplates.resetPassword.text(function(user, url){
     		url = url.replace('#/', '')
     		return "Click this link to reset your password: " + url
	}); 

	Meteor.startup(function () {
		FlowRouter.initialize();

		// if (Accounts._resetPasswordToken) {
  //   		Session.set('resetPassword', Accounts._resetPasswordToken);
  // 		}

  		
	});