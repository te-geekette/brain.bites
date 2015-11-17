Courses = new Mongo.Collection('courses');
ContentItems = new Mongo.Collection('contentItems');


if (Meteor.isClient) {

	Meteor.subscribe('courses');

	Meteor.startup(function () {
		FlowRouter.initialize();
	});

}

if (Meteor.isServer) {
  	Meteor.publish('courses', function(){
  		return Courses.find({
  			$or: [
  				{owner: this.userId}
  			]
  		});
  	});
}

Meteor.methods({

	addCourse(title, description){
		Courses.insert({
			title: title, 
			description: description,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username,
			duration: '12%'
		});
	},

	setCourseDuration(courseId, duration){
		Courses.update(courseId, { $set: { duration: duration} });
	}

});