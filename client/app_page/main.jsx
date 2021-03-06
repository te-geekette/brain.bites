Main = React.createClass({
	
	// INITIAL SETUP 
	mixins: [ReactMeteorData],

	getInitialState(){
		return {
			displayState: 'hidden',
		}
	},

	getMeteorData(){
		var courseId = this.props.courseId;

		return {
			courses: Courses.find({owner: Meteor.userId()}, {sort: {createdAt: -1}}).fetch(),
			publishedCourses: Courses.find({published: true}).fetch(),
			contentItems: ContentItems.find({courseId: courseId}).fetch(),
			singleCourse: Courses.findOne({ _id: courseId}),
			userEmail: Meteor.user().emails[0].address,
		}
	},

	// DEFINE WHICH CONTENT TO DISPLAY: 
	// Course Overview with list of courses, Single Course with content, Published Courses,  Create Course or Create Content states
	renderCourses(){
		return this.data.courses.map((course) => {
			return <CourseHeader 
						key={course._id} course={course} 
						displayContent={this.props.displayContent} />;
		});
	},

	renderPublishedCourses(){
		return this.data.publishedCourses.map((course) => {
			return <CourseHeader 
						key={course._id} 
						course={course} 
						displayContent={this.props.displayContent} />;
		});
	},

	renderContent(){
		return this.data.contentItems.map((contentItem) => {
			return <Content 
						key={contentItem._id} 
						contentItem={contentItem} 
						displayContent={this.props.displayContent} />;
		});	
	},

	showCreate(){
		this.setState({displayState: 'active'});
	},

	cancelCreate(){
		this.setState({displayState: 'hidden'});
	},

	content(){
		if (this.props.displayContent === 'overview') {
			return (<List 
						displayClass={this.state.displayState} 
						onClick={this.cancelCreate} 
						render={this.renderCourses}/>);

		} else if (this.props.displayContent === 'explore') {
			return (<ExploreList 
						render={this.renderPublishedCourses} />);

		} else {
			return (<Course 
						course={this.data.singleCourse} 
						displayContent={this.props.displayContent} 
						displayClass={this.state.displayState} 
						onClick={this.cancelCreate} 
						render={this.renderContent} />);
		}
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
						<div className={this.props.hideButton + " fixed-action-btn"} onClick={this.showCreate}>
	    					<a className="btn-floating btn-large light-blue darken-3">
	      						<span className="mdi-2x mdi-content-add"></span>
	    					</a>
	    				</div>
					</div>
				</main>
			</div>
		);
	}
});

// mdi-2x mdi-content-add




