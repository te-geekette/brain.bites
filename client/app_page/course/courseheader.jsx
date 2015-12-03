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

		var durationInHours = (this.props.course.duration/60).toFixed(1);  

		return (
			<div className={this.state.grid}> 	
				<div className={this.props.smallCard +" card light-blue darken-3"}>
					<div className="card-content text-cyan text-darken-4">
						<a  href={this.buildURL()}>
							<div className="row">
								<div className="card-title col s8">{this.props.course.title}</div>
								<div className="col s4">
									<div className={!this.props.hideComponentsClass + " chip"}>
										{durationInHours} hrs
										<i className=" small material-icons">query_builder</i>
									</div>
								</div>
							</div>
							<p>{this.props.course.description}</p>
						</a>
					</div>
					<div className="card-action" style={{'background':'white'}}>
						<div className="row action-row">
							
							<a href='#' className={!this.props.hideComponentsClass + " col s1"}>Edit</a>
							<a onClick={this.handleDelete} className={!this.props.hideComponentsClass + " col s1"}>Delete</a>
							<Progress progress={this.props.course.progress} colOffset={this.props.colOffset} />
							<div className={this.props.hideComponentsClass + " chip"}>
									{durationInHours} hrs
									<i className=" small material-icons">query_builder</i>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
});

// TODO:
// 1. Create a second Cartd-Action div and put display-hide options on both 
// 2. Pass a hide-toggel for these divs through the explorelist 
// 3. In the new card-action div: show the username of the creator and a "add to my courses button"
// >> 1. Change signup to include a username -- DONE
// >> 2. Build the add-to-my-courses feature 
