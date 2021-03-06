Meteor.methods({

	// ACCOUNT MANAGEMENT 
	
	changeUserPassword(oldPassword, newPassword){
	 	Accounts.changePassword(oldPassword, newPassword); 
	},

	// COURSE METHODS

	addCourse(title, description){
		var courseId;
		courseId = Courses.insert({
				title: title, 
				description: description,
				createdAt: new Date(),
				owner: Meteor.userId(),
				username: Meteor.user().username,
				duration: 0,
				completedContent: 0,
				progress: 0,
				published: false
				});
		return courseId;
	},

	returnCourse(courseId){
		var course = Courses.findOne({_id: courseId}); 
		return course;
	},

	setCourseDuration(courseId, duration){
		Courses.update(courseId, { $inc: { duration: duration} });
	},

	setCourseProgress(courseId){
    	var course= Courses.findOne(courseId);
    	var progress = parseInt(course.completedContent / course.duration * 100); 

    	Courses.update(courseId, { $set: { progress: progress }});

    },

    setCourseAndContentPublished(courseId, courseContent, publishedState){
    	Courses.update(courseId, { $set: {published: publishedState} });

		courseContent.map((content) => {
    			ContentItems.update(content._id, { $set: {published: publishedState} }); 
    	});
    },

    deleteCourse(courseId){
    	Courses.remove(courseId);
    },

    // CONTENT METHODS

	addContent(title, link, contentDuration, courseId) {
		var duration = (contentDuration ? contentDuration : 0);
		var publishState; 
		var course; 

		Meteor.call('returnCourse', courseId, function(error, result){
			course = result; 
			publishState = course.published; 

			ContentItems.insert({
				title: title,
				link: link,
				duration: duration,
				courseId: courseId,
				published: publishState,
				createdAt: new Date(),
				owner: Meteor.userId()
			});
		}); 

		
		Meteor.call('setCourseDuration', courseId, duration);
		Meteor.call('setCourseProgress', courseId);
	},

	findCourseContent(courseId){
		var courseContent = ContentItems.find({courseId: courseId}).fetch();
		return courseContent;
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