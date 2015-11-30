List = React.createClass({
	render(){
		return(
			<div className="row">
				<div id="contentHeadline" className="col s12"><h4>my courses</h4></div>
				<CourseHeaderCreate displayClass={this.props.displayClass} onClick={this.props.onClick} />
				{this.props.render()}
			</div>
		
		);
	}
});