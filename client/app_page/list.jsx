List = React.createClass({
	render(){
		return(
				<ul>
					<CourseHeaderCreate displayClass={this.props.displayClass} onClick={this.props.onClick} />
					{this.props.render()}
				</ul>
		);
	}
});