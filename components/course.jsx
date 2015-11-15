Course = React.createClass({
	
	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	render(){
		return(
				<ul>
					<CourseHeader course={this.props.course}/>
					{this.props.render()}
					<ContentCreate />
				</ul>
		);
	}
});

// TODO: 
// Create a new route that exchanges the returned content to course.jsx 
// Add click event to courselist that triggers a new route with course_id
// Pass the course_id to cours.jsx in order to render the correct CourseHeader





			// <div>
			// 	<ul>
			// 		<CourseHeader />
			// 		{this.renderContent()}
			// 		<ContentCreate />
			// 	</ul>
			// 	<div className="fixed-action-btn" onClick={this.showContentCreate}>
		 //    		<a className="btn-floating btn-large red">
		 //      			<span className="large material-icons">add</span>
		 //    		</a>
		 //    	</div>
		 //    </div>