Courses = new Mongo.Collection('courses');
ContentItems = new Mongo.Collection('contentItems');

if (Meteor.isClient) {

	Meteor.startup(function () {
		FlowRouter.initialize();
	});

}

if (Meteor.isServer) {
  	// Meteor.startup(function () {
   //  // code to run on server at startup
  	// });
}

Meteor.methods({

	addCourse(title, description){
		Courses.insert({
			title: title, 
			description: description,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username
		});
	}

});