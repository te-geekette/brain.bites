CourseList = React.createClass({
	
	mixins: [ReactMeteorData],

	getInitialState(){
		return {
			displayState: 'hidden'
			// displayContent: this.props.contentOverview
		}
	},

	getMeteorData(){
		var courseId = this.props.courseId;

		return {
			courses: Courses.find({}, {sort: {createdAt: -1}}).fetch(),
			contentItems: ContentItems.find({}).fetch(),
			singleCourse: Courses.findOne({ _id: courseId})
		}
	},

	renderCourses(){
		return this.data.courses.map((course) => {
			return <CourseHeader key={course._id} course={course} changeContent={this.changeDisplayContent}  />;
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

	// changeDisplayContent(){
	// 	this.setState({displayContent: (this.state.displayContent === 'overview'? 'content': 'overview')});
	// },


	content(){
		var isOverview = this.props.contentOverview === 'overview';
		return (isOverview ? 
			<List className={this.state.displayState} onClick={this.cancelCreate} render={this.renderCourses}/> :
			<Course course={this.data.singleCourse} className={this.state.displayState} onClick={this.cancelCreate} render={this.renderContent} />
		);
	},

	render(){

		return (
			<div>
				{this.content()}
				<div className="fixed-action-btn" onClick={this.showCreate}>
	    			<a className="btn-floating btn-large red">
	      				<span className="large material-icons">add</span>
	    			</a>
	    		</div>
	    	</div>
			);
	}
});