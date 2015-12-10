CourseHeader = React.createClass({

	mixins: [ReactMeteorData],

	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	getMeteorData(){
		return {
			userName: Meteor.user().username,
			otherUsersName: Meteor.users.findOne({_id: this.props.course.owner}), 
		}
	},

	getInitialState(){
		var routeGroup;
		var overviewHeaderState; // Hides the action box for published courses
		var reducedHeaderSize; // small card for overviews and without "small" class for course views
		var courseHeaderState; // toggles some components in the overview and course views
		var colOffset; // adjusts the progress bar in the small card in overviews
		var courseTogglePublic; // show the "make public" switch only in course view of my courses
		var addCourseButton; // shows the add-course-button only if it's not your own course


		switch (this.props.displayContent) {
			case "overview": 
				routeGroup = "/overview/";
				overviewHeaderState = true; // true = display: none > for all components of the Explore-Header
				reducedHeaderSize = 'small';
				courseHeaderState = true;
				colOffset="push-s2"; 
				courseTogglePublic = true; 
				addCourseButton = true; 
				break;

			case 'course': 
				routeGroup = "#"; 
				overviewHeaderState = true;
				courseHeaderState = false;
				courseTogglePublic = false; 
				addCourseButton = true; 
				break; 

			case "explore": 
				routeGroup = "/explore/";
				overviewHeaderState = false;
				reducedHeaderSize = 'small';
				courseHeaderState = false;
				colOffset="push-s2"; 
				courseTogglePublic = true; 
				addCourseButton = (this.props.course.owner === Meteor.userId()) ? true : false; 
				break;

			case 'exploreCourse':
				routeGroup ="#"; 
				overviewHeaderState = false;
				courseHeaderState = false;
				courseTogglePublic = true; 
				addCourseButton = (this.props.course.owner === Meteor.userId()) ? true : false; 
				break;
		}

		return {
			routeGroup: routeGroup,
			overviewHeaderState: overviewHeaderState,
			reducedHeaderSize: reducedHeaderSize,
			courseHeaderState: courseHeaderState,
			colOffset: colOffset,
			courseTogglePublic: courseTogglePublic,
			courseTogglePublicState: this.props.course.published ? 'checked': false,
			addCourseButton: addCourseButton
		}
	},

	showCourseOwner(){

		if (this.props.course.owner === Meteor.userId()){
			return this.data.userName;
		} else {
			return this.data.otherUsersName.username; 
		}
	},

	buildURL(){ 
		var routeGroup = this.state.routeGroup; 
		var courseURL = routeGroup + ((routeGroup === '#') ? '' : this.props.course._id);
		return courseURL;
	}, 

	handleDelete(){
		Meteor.call('deleteCourse', this.props.course._id);
	},

	togglePublicState(){
		var newPublishedState = !this.props.course.published; 
		var courseId = this.props.course._id;
		var courseContent; 
		var newSwitchState = (this.state.courseTogglePublicState === "checked") ? false: 'checked'; 

		this.setState({ courseTogglePublicState: newSwitchState });
		
		Meteor.call('findCourseContent', courseId, function(error, result){
			courseContent = result; 
			Meteor.call('setCourseAndContentPublished', courseId , courseContent, newPublishedState);
		});  
	},

	addToCourses(){
		var oldCourseId = this.props.course._id;
		var newCourseId; 
		var courseContent;

		var callbackCreateContent = function(error, result){
			courseContent = result;

			courseContent.map((content) => {
			Meteor.call('addContent', content.title, content.link, content.duration, newCourseId);
			});
		};

		var callbackCreateCourse = function(error, result){
			newCourseId = result; 
			Meteor.call('findCourseContent', oldCourseId, callbackCreateContent);
		};

		// Create a new course with the available props and content of the clicked course
		Meteor.call('addCourse', this.props.course.title, this.props.course.description, callbackCreateCourse);

		FlowRouter.go('/overview');
	},

	render(){

		var durationInHours = (this.props.course.duration/60).toFixed(1);  

		return (
			<div className='col s12 m6'> 	
				<div className={this.state.reducedHeaderSize +" card light-blue darken-3"}>
					<div className="card-content text-cyan text-darken-4">
						
							<div className="row flex align-start">
								<a href={this.buildURL()} className="card-title col s8">{this.props.course.title}</a>
								<div className="col s4 flex justify-right">

									<div className={!this.state.courseHeaderState + " chip"}>
										{durationInHours} hrs
										<i className=" small material-icons">query_builder</i>
									</div>

									<a id="add-course-button" className={this.state.addCourseButton} onClick={this.addToCourses}>ADD TO MY COURSES</a>
									
									<div className={this.state.courseTogglePublic +" onoffswitch flex"}>
    									<input 
    										type="checkbox" 
    										name="onoffswitch" 
    										className="onoffswitch-checkbox" 
    										id="myonoffswitch" 
    										checked={this.state.courseTogglePublicState}
    										onChange={this.togglePublicState}
    										 
    										/>

	    								<label className="onoffswitch-label" htmlFor="myonoffswitch" >
	        								<span className="onoffswitch-inner"></span>
	        								<span className="onoffswitch-switch"></span>
	    								</label>
    									
									</div>

								</div>
							</div>
							
							<p>{this.props.course.description}</p>
							
						
					</div>
					<div className={!this.state.overviewHeaderState + " card-action"} style={{'background':'white'}}>
						<div className="row action-row">
							
							<a href={this.buildURL()} className={!this.state.courseHeaderState + " col s1"}>Open</a>
							<a onClick={this.handleDelete} className={!this.state.courseHeaderState + " col s1"}>Delete</a>
							<Progress progress={this.props.course.progress} colOffset={this.state.colOffset} />
							<div className={this.state.courseHeaderState + " chip"}>
									{durationInHours} hrs
									<i className=" small material-icons">query_builder</i>
							</div>
						</div>
					</div>

					<div className={this.state.overviewHeaderState + " card-action"} style={{'background': 'white'}}>
						<div className="row action-row">
							

							<div className='chip col s6'>
								<img src="/images/profile.png" />
								{this.showCourseOwner()}
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





