List = React.createClass({
	render(){
		return(
				<div className="row">
					<CourseHeaderCreate displayClass={this.props.displayClass} onClick={this.props.onClick} />
					{this.props.render()}
				</div>
		);
	}
});