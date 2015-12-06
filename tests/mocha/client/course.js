// Course Tests

if ( MochaWeb != null ) {
	MochaWeb.testOnly(function() {

		describe('Course Creation', function(){
			var title = "This is a title";
			var description = "This is a description";
			var courseId;
			var course;

			before(function(done){

				var callbackCreateCourse = function(error, result){
					courseId = result; 

					Meteor.call('returnCourse', courseId, function(error, result){
						course = result;
					});

					done(); 
				};

				Meteor.call('addCourse', title, description, callbackCreateCourse); 	
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
				chai.expect(course.duration).to.equal(0);
				chai.expect(course.progress).to.equal(0);
				done();
			});

			afterEach(function(done){
				Meteor.call('deleteCourse', courseId);
				done();
			});
		});

		// describe('Open course', function(){

		// 	// 3. How do I build tests that require a complete flow, like Signin, create course, click on course?

		// 	// 4. How do I test if the correct component was rendered? I guess here comes the special React testing into the game. 

		// 	// 5. Can I access React methods here?  

		// 	before(function(done){
		// 		courseId = Meteor.call('addCourse', title, description, function(error, result) {
		// 			return result;
		// 		});
		// 		course = Meteor.call('returnCourse', courseId);
		// 		done();
		// 	});
				
		// 	it ('opens the course with its URL', function(done){
		// 		done();
		// 	});

		// 	after(function(done){
		// 		Meteor.call('deleteCourse', courseId);
		// 		done();
		// 	});
		// });
	});
}
	
// TODO: 
// 1. find out about stubbing the signup flow 
// 2. read about react meteor unit testing		
				


