	Meteor.subscribe('courses');
	Meteor.subscribe('contentItems');

	Meteor.startup(function () {
		FlowRouter.initialize();

	});