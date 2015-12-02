Main = React.createClass({
	
	// INITIAL SETUP 
	mixins: [ReactMeteorData],

	getInitialState(){
		return {
			displayState: 'hidden',
			reducedHeaderState: true,
			reducedHeaderSize: 'small'
		}
	},

	getMeteorData(){
		var courseId = this.props.courseId;

		return {
			courses: Courses.find({}, {sort: {createdAt: -1}}).fetch(),
			contentItems: ContentItems.find({courseId: courseId}).fetch(),
			singleCourse: Courses.findOne({ _id: courseId}),
			userEmail: Meteor.user().emails[0].address
		}
	},

	// DEFINE WHICH CONTENT TO DISPLAY: Course Overview with list of courses, Single Course with content, Create Course or Create Content states
	renderCourses(){
		return this.data.courses.map((course) => {
			return <CourseHeader key={course._id} course={course} changeContent={this.changeDisplayContent} hideComponentsClass={this.state.reducedHeaderState} smallCard={this.state.reducedHeaderSize} colOffset="push-s2" />;
		});

	},
	renderContent(){

		return this.data.contentItems.map((contentItem) => {
			return <Content key={contentItem._id} contentItem={contentItem} />;
		});
		
	},

	showCreate(){
		this.setState({displayState: 'active'});
	},

	cancelCreate(){
		this.setState({displayState: 'hidden'});
	},

	// NOTE: This might not be the nicest way to work with nested components. I probably should have chosen a router that makes better use of nested components.
	content(){
		var isOverview = this.props.contentOverview === 'overview';
		return (isOverview ? 
			<List displayClass={this.state.displayState} onClick={this.cancelCreate} render={this.renderCourses}/> :
			<Course course={this.data.singleCourse} displayClass={this.state.displayState} onClick={this.cancelCreate} hideComponentsClass={this.state.reducedHeaderState} render={this.renderContent} />
		);
	},

	// DISPLAY THE PAGE
	render(){

		return (
			<div>
				<header>
					<Navigation userEmail={this.data.userEmail} />
				</header>
				<main>
					<div className='container'>
						{this.content()}
						<div className="fixed-action-btn" onClick={this.showCreate}>
	    					<a className="btn-floating btn-large light-blue darken-3">
	      						<span className="large material-icons">add</span>
	    					</a>
	    				</div>
					</div>
				</main>
			</div>
		);
	}
});