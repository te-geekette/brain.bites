CourseList = React.createClass({
	
	mixins: [ReactMeteorData],

	getInitialState(){
		return {
			displayState: 'hidden'
		}
	},

	getMeteorData(){
		return {
			courses: Courses.find({}, {sort: {createdAt: -1}}).fetch()
		}
	},

	renderCourses(){
		return this.data.courses.map((course) => {
			return <CourseHeader key={course._id} course={course} />;
		});

	},

	showCourseCreate(){
		this.setState({displayState: 'active'});
	},

	cancelCourseCreate(){
		this.setState({displayState: 'hidden'});
	},

	render(){

		return (
			<div>
				<ul>
					<CourseHeaderCreate className={this.state.displayState} onClick={this.cancelCourseCreate} />
					{this.renderCourses()}
				</ul>
				<div className="fixed-action-btn" onClick={this.showCourseCreate}>
	    			<a className="btn-floating btn-large red">
	      				<span className="large material-icons">add</span>
	    			</a>
	    		</div>
	    	</div>
			);
	}
});