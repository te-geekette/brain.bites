	Meteor.subscribe('courses');
	Meteor.subscribe('contentItems');

	Accounts.onResetPasswordLink(function(token, done){
		FlowRouter.go('/reset-password/' + token); 
		// done();
	});

	Meteor.startup(function () {
		FlowRouter.initialize();
	});