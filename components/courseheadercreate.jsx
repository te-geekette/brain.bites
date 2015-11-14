CourseHeaderCreate = React.createClass({

	handleSubmit(event){
		event.preventDefault();

		var title = ReactDOM.findDOMNode(this.refs.courseTitle).value.trim();
		var description = ReactDOM.findDOMNode(this.refs.courseDescription).value.trim();

		Meteor.call('addCourse', title, description);

		this.props.className = 'hidden';

	},

	render(){
		return (
			<li className={this.props.className}>
				<div className="row">
					<div className="col s12">
						<div className="card cyan ligthen-5">
							<div className="card-content text-cyan text-darken-4">

								<form onSubmit={this.handleSubmit}>
									<div className="row card-title">
	        							<div className="input-field col s12">
	          								<input type="text" ref='courseTitle' placeholder="Give your course a title" />
	        							</div>
									</div>
									<div className="row">
	        							<div className="input-field col s6">
	          								<textarea className="materialize-textarea" type="text" ref='courseDescription' placeholder="Describe your course" />
	        							</div>
	        							<div className="col s6">
	          								<p>Estimated Course Duration:</p> 	
											<p>First Lessons:</p>
	        							</div>
									</div>
									<button className="waves-effect waves-light btn" type="button" onClick={this.props.onClick}>Cancel</button>
									<button className="waves-effect waves-light btn" type="submit" >Save</button>
								</form>

							</div>
						</div>
					</div>
				</div>
			</li>
		);
	},
});