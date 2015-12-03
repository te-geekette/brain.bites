Course = React.createClass({

	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	render(){
		return(
				<ul>
					<li id="courseHeader"><CourseHeader course={this.props.course} displayAction={this.state.publishedHeaderState} hideComponentsClass={!this.props.hideComponentsClass}/></li>
					<li id="contentHeadline"><h4>course content</h4></li>
					<ContentCreate course={this.props.course}  displayClass={this.props.displayClass} onClick={this.props.onClick} />
					{this.props.render()}
				</ul>
		);
	}
});

