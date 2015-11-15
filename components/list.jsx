List = React.createClass({
	render(){
		return(
				<ul>
					<CourseHeaderCreate className={this.props.className} onClick={this.props.onClick} />
					{this.props.render()}
				</ul>
		);
	}
});