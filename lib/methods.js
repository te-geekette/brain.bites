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
			completedContent: 0,
			progress: 0
		});
	},

	setCourseDuration(courseId, duration){
		Courses.update(courseId, { $inc: { duration: duration} });
	},

	setCourseProgress(courseId){
    	var course= Courses.findOne(courseId);
    	var progress = parseInt(course.completedContent / course.duration * 100); 

    	Courses.update(courseId, { $set: { progress: progress }});

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
		Meteor.call('setCourseDuration', courseId, duration);
		Meteor.call('setCourseProgress', courseId);
	},

	setContentChecked(contentId, setChecked, courseId, completedTime) {
        ContentItems.update(contentId, { $set: {checked: setChecked} });

        Courses.update(courseId, { $inc: { completedContent: completedTime }});

        Meteor.call('setCourseProgress', courseId);
    },

    deleteContent(contentId, courseId, contentDuration){
    	
    	var course = Courses.findOne(courseId);
    	var content = ContentItems.findOne(contentId);

    	var newDuration = course.duration + contentDuration; 

    	if (newDuration != 0) {

    		Meteor.call('setCourseDuration', courseId, contentDuration);

    		if (content.checked && course.completedContent > 0) {
				Courses.update(courseId, { $inc: { completedContent: contentDuration }});
			} 
		
    		Meteor.call('setCourseProgress', courseId);

    	} else { 
    		Meteor.call('setCourseDuration', courseId, contentDuration);
    		Courses.update(courseId, { $set: { completedContent: 0}});
    		Courses.update(courseId, { $set: { progress: 0 }});
    	}

		ContentItems.remove(contentId);
    }

});