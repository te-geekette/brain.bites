// Course Tests

if ( MochaWeb != null ) {
	MochaWeb.testOnly(function() {

		describe('Course Creation', function(){
			var title = "This is a title";
			var description = "This is a description";
			var courseId;
			var course;

			before(function(done){

				// I just don't get the result out of the Meteor.call.
				// It seems Sessions are the only way but it just isn't working. 
				// https://forums.meteor.com/t/react-using-session-vars-vs-props-to-communicate-between-components/11569
				Meteor.call('addCourse', title, description, function(error, result){
					Session.set('courseId', result); 	
				});

				Meteor.call('returnCourse', courseId, function(error, result){
					Session.set('course', result);
				}); 

				courseId = Session.get('courseId');
				course = Session.get('course');

				console.log(courseId, course); // courseId is returned now, but course is still undefined
				done();
			});

			it ('creates a course', function(done){

				chai.expect(course).to.be.an('object');
				done();
			});
					
			it ('adds title and description to the course', function(done){
				chai.expect(course.title).to.be.equal(title);
				chai.expect(course.description).to.be.equal(description);
				done();
			});
					
			it ('sets the course duration and progress to 0', function(done){
				chai.expect(course.duration).to.be(0);
				chai.expect(course.progress).to.be(0);
				done();
			});

			afterEach(function(done){
				Meteor.call('deleteCourse', courseId);
				done();
			});
		});

		describe('Open course', function(){
			before(function(done){
				courseId = Meteor.call('addCourse', title, description, function(error, result) {
					return result;
				});
				course = Meteor.call('returnCourse', courseId);
				done();
			});
				
			it ('opens the course with its URL', function(done){
				// How to work best with React components and their methods? 
				// chai.expect(buildURL()).to.have.string(courseId);
				done();
			});

			after(function(done){
				Meteor.call('deleteCourse', courseId);
				done();
			});
		});
	});
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

