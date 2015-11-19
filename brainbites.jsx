Courses = new Mongo.Collection('courses');
ContentItems = new Mongo.Collection('contentItems');


if (Meteor.isClient) {

	Meteor.subscribe('courses');
	Meteor.subscribe('contentItems');

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

  	Meteor.publish('contentItems', function(courseId){
  		return ContentItems.find({
  			$or: [
  				{owner: this.userId}
  			]
  		});
  	});
}

Meteor.methods({

	// COURSE METHODS

	addCourse(title, description){
		Courses.insert({
			title: title, 
			description: description,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username,
			duration: 0,
			progress: 0
		});
	},

	setCourseDuration(courseId, duration){
		Courses.update(courseId, { $inc: { duration: duration} });
	},

	setCourseProgress(courseId, completedTime){
    	var course= Courses.findOne(courseId);
    	if(course.duration) {
    		var progress= parseInt(completedTime / course.duration * 100) ;
    		Courses.update(courseId, { $inc: { progress: progress }});
    	}
    },

    deleteCourse(courseId){
    	Courses.remove(courseId);
    },

    // CONTENT METHODS

	addContent(title, link, duration, courseId) {
		ContentItems.insert({
			title: title,
			link: link,
			duration: duration,
			courseId: courseId,
			createdAt: new Date(),
			owner: Meteor.userId()
		});
	},

	setContentChecked(contentId, setChecked) {
        ContentItems.update(contentId, { $set: {checked: setChecked} });
    },

    // Problem: Something is weird here. It runs the calculation but with odd numbers ... 
    
    deleteContent(contentId, courseId, contentDuration, contentIsChecked){
    	Meteor.call('setCourseDuration', courseId, -contentDuration);
    	if(contentIsChecked) {
    		Meteor.call('setCourseProgress', courseId, -contentDuration);
    	}

    	ContentItems.remove(contentId);

    }

});