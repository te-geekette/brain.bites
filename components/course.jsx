Course = React.createClass({

	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	render(){
		return(
				<ul>
					<CourseHeader course={this.props.course}/>
					<ContentCreate course={this.props.course}  displayClass={this.props.displayClass} onClick={this.props.onClick} />
					{this.props.render()}
				</ul>
		);
	}
});

