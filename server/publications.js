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

Meteor.publish('userData', function(userId){
	return Meteor.users.find({_id: userId}, {fields: {'username': 1}}); 
});




