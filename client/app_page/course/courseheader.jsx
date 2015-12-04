CourseHeader = React.createClass({

	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	getInitialState(){
		return {
			grid: 'col s12 m6'
		}
	},

	buildURL(){
		var courseURL = "/overview/" + this.props.course._id;
		return courseURL;
	}, 

	handleDelete(){
		Meteor.call('deleteCourse', this.props.course._id);
	},

	addToCourses(){

		// Create a new course with the available props of the clicked course
		Meteor.call('addCourse', this.props.course.title, this.props.course.description, function(error, result){
			Session.set('courseId', result); 	
		});

		// Get the id of the newly created course. 
		var courseId = Session.get('courseId'); 
		console.log(courseId);

		// Find the content of the clicked course. 
		Meteor.call('findCourseContent', this.props.course._id, function(error, result){
			Session.set('contentList');
		});
		var courseContent = Session.get('contentList');
		console.log(courseContent);

		// Create new content with the props of content found for the original course
		courseContent.map((content) => {
			Meteor.call('addContent', content.title, content.link, content.duration, courseId);
		});
		
		FlowRouter.go('/overview');
	},

	render(){

		var durationInHours = (this.props.course.duration/60).toFixed(1);  

		return (
			<div className={this.state.grid}> 	
				<div className={this.props.smallCard +" card light-blue darken-3"}>
					<div className="card-content text-cyan text-darken-4">
						
							<div className="row">
								<a href={this.buildURL()} className="card-title col s8">{this.props.course.title}</a>
								<div className="col s4">

									<div className={!this.props.hideComponentsClass + " chip"}>
										{durationInHours} hrs
										<i className=" small material-icons">query_builder</i>
									</div>

									<a id="add-course-button" className={this.props.hideComponentsClass} onClick={this.addToCourses}>Add to my courses</a>

								</div>
							</div>
							
							<p>{this.props.course.description}</p>
							
						
					</div>
					<div className={!this.props.displayAction + " card-action"} style={{'background':'white'}}>
						<div className="row action-row">
							
							<a href={this.buildURL()} className={!this.props.hideComponentsClass + " col s1"}>Open</a>
							<a onClick={this.handleDelete} className={!this.props.hideComponentsClass + " col s1"}>Delete</a>
							<Progress progress={this.props.course.progress} colOffset={this.props.colOffset} />
							<div className={this.props.hideComponentsClass + " chip"}>
									{durationInHours} hrs
									<i className=" small material-icons">query_builder</i>
							</div>
						</div>
					</div>

					<div className={this.props.displayAction + " card-action"} style={{'background': 'white'}}>
						<div className="row action-row">
							

							<div className='chip col s6'>
								<img src="/images/profile.png" />
								{this.props.userName}
							</div>

							<div className="chip col s4 push-s2">
									{durationInHours} hrs
									<i className=" small material-icons">query_builder</i>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	},
});

// TODO:
// 1. Build the add-to-my-courses feature 
// 2. Styling for the addCourse button
