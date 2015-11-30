// Course Tests

console.log(MochaWeb);

if ( MochaWeb != null ) {
	MochaWeb.testOnly(function() {

		describe('Course Creation', function(){
			var title = "This is a title";
			var description = "This is a description";
			var courseId;

			before(function(){
				// I'm not sure this result is acutally the id ... but how would I test it? 
				courseId = Meteor.call('addCourse', title, description, function(error, result) {
					return result._id;
				});
				course = Meteor.findOne({_id: courseId});
			});

			it ('creates a course', function(){
				expect(course).to.be.an('object');
			});
					
			it ('adds title and description to the course', function(){
				expect(course.title).to.be.equal(title);
				expect(course.description).to.be.equal(description);
			});
					
			it ('sets the course duration and progress to 0', function(){
				expect(course.duration).to.be(0);
				expect(course.progress).to.be(0);
			});

			afterEach(function(){
				Meteor.call('deleteCourse', courseId);
			});
		});

		describe('Open course', function(){
			before(function(){
				courseId = Meteor.call('addCourse', title, description, function(error, result) {
					return result._id;
				});
				course = Meteor.findOne({_id: courseId});
			});
				
			it ('opens the course with its URL', function(){
				// How to work best with React components and their methods? 
				expect(buildURL()).to.have.string(courseId);
			});

			after(function(){
				Meteor.call('deleteCourse', courseId);
			});
		});
	)};
}
			
				




// 		describe('ProgressBar', function() {
// 			it('does something', function() {
// 				chai.assert.equal(true,true);
// 			});
// 		});

// 		describe('Course', function() {
// 			var courseId;
// 			before(function() {
// 				// Create course
// 				// courseId = get the course
// 			});
// 				it('creates a course', function() {
// 					//var courseId = Meteor.call('addCourse', 'testCourse', 'this is a test');
// 					var course = Meteor.call('getCourseById', courseId);
// 					chai.assert.isNotNull(course);
// 					chai.assert.equal(course.title, 'testCourse');
// 					//var deleted = Metor.call('deleteCourse', courseId);
// 					//chai.assert.equal(deleted, true);
// 				});
// 				after(function() {
// 					// Delete course
// 				});
// 		});
// 	});	
// }

