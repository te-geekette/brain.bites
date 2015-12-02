Course = React.createClass({

	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	mixins: [SortableMixin],

	getInitialState(){
		return {
			items: this.props.contentItems
		};
	},

	renderContent(){

		return this.state.items.map((contentItem) => {
			return <Content key={contentItem._id} contentItem={contentItem} />;
		});
		
	},

	render(){
		return(
				<ul>
					<li id="courseHeader"><CourseHeader course={this.props.course} hideComponentsClass={!this.props.hideComponentsClass}/></li>
					<li id="contentHeadline"><h4>course content</h4></li>
					<ContentCreate course={this.props.course}  displayClass={this.props.displayClass} onClick={this.props.onClick} />
					{this.props.render()}
				</ul>
		);
	}
});

