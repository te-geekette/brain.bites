// Course Tests

if ( MochaWeb != null ) {
	MochaWeb.testOnly(function() {

		describe('Course Creation', function(){
			var title = "This is a title";
			var description = "This is a description";
			var courseId;
			var course;

			before(function(done){

				// 1. Where do I tell Mocha to sign-in to my app? Here? Each time? 

				// 2. I just don't get the result out of the Meteor.call.
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

			// 3. How do I build tests that require a complete flow, like Signin, create course, click on course?

			// 4. How do I test if the correct component was rendered? I guess here comes the special React testing into the game. 

			// 5. Can I access React methods here?  

			before(function(done){
				courseId = Meteor.call('addCourse', title, description, function(error, result) {
					return result;
				});
				course = Meteor.call('returnCourse', courseId);
				done();
			});
				
			it ('opens the course with its URL', function(done){
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

