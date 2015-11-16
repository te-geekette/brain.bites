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
// Add props to content create