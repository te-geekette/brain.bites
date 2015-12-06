Meteor.publish('courses', function(){
	return Courses.find({
		$or: [
			{owner: this.userId},
			{published: true}
		]
	});
});

Meteor.publish('contentItems', function(courseId){
	return ContentItems.find({
		$or: [
			{owner: this.userId},
			{published: true}
		]
	});
});




