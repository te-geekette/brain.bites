ExploreList = React.createClass({
	render(){
		return(
			<div className="row">
				<div id="contentHeadline" className="col s12"><h4>explore published courses</h4></div>
				{this.props.render()}
			</div>
		
		);
	}
});