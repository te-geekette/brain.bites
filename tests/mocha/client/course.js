// Course Tests

if ( MochaWeb != null ) {
	MochaWeb.testOnly(function() {

		describe('Course Creation', function(){
			var title = "This is a title";
			var description = "This is a description";
			var email = 'test@test.de';
			var password = "12345"; 
			var courseId;
			var course;

			before(function(done){
				var isNoUser = Meteor.user() === null;
				var isNotLoggingIn = Meteor.loggingIn() === false;

				var callbackReturnCourse = function(error, result){
					courseId = result; 
					console.log(courseId);
					Meteor.call('returnCourse', courseId, function(error, result){
						course = result;
						console.log(course);
						done(); 
					});
					
				};

				var callbackCreateCourse = function(error, result){
					console.log('Is this called?');
					Meteor.call('addCourse', title, description, callbackReturnCourse);
				}; 

				if( isNotLoggingIn && isNoUser ){ 
					console.log('Log me in');
			 		Meteor.loginWithPassword(email, password, callbackCreateCourse);

				} else {
					console.log('Call without login');
					callbackCreateCourse();
				}
					
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

		describe('Show explore page', function(){

			var defProps, renderWithProps, component, el, $el; 

			beforeEach(function(){
				defProps = {
					displayContent: 'explore', 
					hideButton: 'hidden'
				};

				renderWithProps = function(props){
					component = renderComponent(Main, props);
					el = ReactDOM.findDOMNode(component);
					$el = $(el); // what is this? 
				};
			});
				
			it ('should be mounted in DOM', function(){
				renderWithProps(defProps);
				chai.expect($el.length).to.equal(1);
			});

			it ('add course button should be hidden', function(){
				renderWithProps(defProps); 
				chai.expect(component.props.hideButton).to.be.equal('hidden'); 
			});

		});
	});
}



