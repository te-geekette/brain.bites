CourseHeader = React.createClass({

	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	getInitialState(){
		return {
			grid: 'col s12 m6'
		}
	},

	buildURL(){
		var courseURL = "/overview/" + this.props.course._id;
		return courseURL;
	}, 

	handleDelete(){
		Meteor.call('deleteCourse', this.props.course._id);
	},

	render(){

		var durationInHours = (this.props.course.duration/60).toFixed(2);  

		return (
			<div className={this.state.grid}> 	
				<div className="card small light-blue darken-3">
					<div className="card-content text-cyan text-darken-4">
						<a  href={this.buildURL()}>
							<div className="row">
								<div className="card-title col s8">{this.props.course.title}</div>
								<div className="col s4 chip">{durationInHours} hours
									<i className="small material-icons">query_builder</i>
								</div>
							</div>
							<p>{this.props.course.description}</p>
							
						</a>
						<div className="card-action" style={{'background':'white'}}>
							<div className="row action-row">
								<a href='#' className="col s1">Edit</a>
								<a onClick={this.handleDelete} className="col s1">Delete</a>
								<Progress progress={this.props.course.progress} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
});

// TODO:
// 1. Make only headline and body clickable
// 2. Carve out a small area next to the headline that contains the delete (and edit) option 
// 3. Make sure the progress bar scales properly on mobile
// 4. Convert minutes into hours
// 5. Hide the delete and edit buttons when inside course (possible?)
// 6. Put everything into cards and make them align next to each other
/*
			<div className={this.state.grid}> 
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
	          								<p>Estimated Course Duration: {this.props.course.duration} min </p> 
											<p>Course Progress:</p>
											<Progress progress={this.props.course.progress} />
	        						</div>
								</div>
							</div>
						</div>
					</div>
				</a>
				<button className="card-title col s1" onClick={this.handleDelete}>delete</button>
			</div>
*/
