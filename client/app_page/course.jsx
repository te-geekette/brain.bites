Course = React.createClass({

	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	render(){
		return(
				<ul>
					<li><CourseHeader course={this.props.course} hideComponentsClass={!this.props.hideComponentsClass}/></li>
					<ContentCreate course={this.props.course}  displayClass={this.props.displayClass} onClick={this.props.onClick} />
					{this.props.render()}
				</ul>
		);
	}
});

