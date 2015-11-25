Progress = React.createClass({

	render(){
		return(
			<div id="bar-1" className={this.props.colOffset + " col s6 bar-main-container light-blue accent-4"}>
    			<div className="wrap">
	      			<div className="bar-percentage" data-percentage={this.props.progress} >{this.props.progress}%</div>
	      			<div className="bar-container">
	        			<div className="bar" style={ {'width': this.props.progress + '%' } }></div>
	      			</div>
    			</div>
  			</div>
		);
	}
});
