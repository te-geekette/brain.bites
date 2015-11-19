CourseHeader = React.createClass({

	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	buildURL(){
		var courseURL = "/overview/" + this.props.course._id;
		return courseURL;
	},

	handleDelete(){
		Meteor.call('deleteCourse', this.props.course._id);
	},

	render(){
		return (
			<li> 
				<a className="row" href={this.buildURL()}>
					<div className="col s12">
						<div className="card light-blue lighten-2">
							<div className="card-content text-cyan text-darken-4">

								<div className="row">
									<div className="card-title col s11">{this.props.course.title}</div>
								</div>
								<div className="row">
									<div className="col s6">
										<div>{this.props.course.description}</div>
									</div>
									<div className="col s6">
	          								<p>Estimated Course Duration: {this.props.course.duration} </p> 
											<p>Course Progress:</p>
											<Progress progress={this.props.course.progress} />
	        						</div>
								</div>
							</div>
						</div>
					</div>
				</a>
				<button className="card-title col s1" onClick={this.handleDelete}>delete</button>
			</li>
		);
	},
});

// Test and practice functions to, will be removed later:
	// setDuration(){
	// 	Meteor.call('setCourseDuration', this.props.course._id, '18%');
	// },


