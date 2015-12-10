	Meteor.subscribe('courses');
	Meteor.subscribe('contentItems');
	Meteor.subscribe('userData'); 

	Accounts.onResetPasswordLink(function(token, done){
		FlowRouter.go('/reset-password/' + token); 
		// done();
	});

	Meteor.startup(function () {
		FlowRouter.initialize();
	});