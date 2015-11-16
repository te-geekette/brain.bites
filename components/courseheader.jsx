CourseHeader = React.createClass({

	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	setDuration(){
		Meteor.call('setCourseDuration', this.props.course._id, 'I am so set!');
	},

	buildURL(){
		var courseURL = "/overview/" + this.props.course._id;
		return courseURL;
	},

	render(){
		return (
			<li> 
				<a className="row" href={this.buildURL()}>
					<div className="col s12">
						<div className="card cyan ligthen-5">
							<div className="card-content text-cyan text-darken-4">

								<div className="row">
									<div className="card-title col s12">{this.props.course.title}</div>
								</div>
								<div className="row">
									<div className="col s6">
										<div>{this.props.course.description}</div>
									</div>
									<div className="col s6">
	          								<p>Estimated Course Duration: {this.props.course.duration} </p> 
											<p>Course Progress:</p>
											<button type="button" onClick={this.setDuration}>Set me</button>
	        						</div>
								</div>
							</div>
						</div>
					</div>
				</a>
			</li>
			);
	},
});

//onClick={this.props.changeContent}

