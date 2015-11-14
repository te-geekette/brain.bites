CourseList = React.createClass({
	
	mixins: [ReactMeteorData],

	getInitialState(){
		return {
			displayState: 'hidden'
		}
	},

	getMeteorData(){
		return {
			courses: Courses.find({}).fetch()
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

	render(){
		return (
			<div>
				<ul>
					{this.renderCourses()}
					<CourseHeaderCreate className={this.state.displayState} />
				</ul>
				<div className="fixed-action-btn" onClick={this.showCourseCreate}>
	    			<a className="btn-floating btn-large red">
	      				<i className="large material-icons">add</i>
	    			</a>
	    		</div>
	    	</div>
			);
	}
});