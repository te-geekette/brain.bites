CourseHeader = React.createClass({

	propTypes: {
		course: React.PropTypes.object.isRequired
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
						<div className="card light-blue lighten-2">
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
											<Progress duration={this.props.course.duration} />
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

// Test and practice functions to, will be removed later:
	// setDuration(){
	// 	Meteor.call('setCourseDuration', this.props.course._id, '18%');
	// },


