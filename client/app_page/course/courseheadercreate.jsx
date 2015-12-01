CourseHeaderCreate = React.createClass({

	clearCourseForm(){
		ReactDOM.findDOMNode(this.refs.courseTitle).value = "";
		ReactDOM.findDOMNode(this.refs.courseDescription).value = "";
	},

	handleSubmit(event){
		event.preventDefault();

		var title = ReactDOM.findDOMNode(this.refs.courseTitle).value.trim();
		var description = ReactDOM.findDOMNode(this.refs.courseDescription).value.trim();

		Meteor.call('addCourse', title, description);

		this.props.onClick();
		this.clearCourseForm();

	},

	render(){
		return (
			<div className={this.props.displayClass +' col s12 m6'}> 	
				<div className="small card light-blue darken-3">
					<form>
						<div className="card-content text-cyan text-darken-4">
							<div id="course-create-title">
								<input type="text" ref='courseTitle' placeholder="Give your course a title" />
							</div>
							<div id="course-create-description">
								<input type="text" ref='courseDescription' placeholder="Describe your course" />
							</div>
							
						</div>
						<div className="card-action" style={{'background':'white'}}>
							<div id="createActions" className="row action-row">
								<a onClick={this.props.onClick} className="creatCancel col s2">Cancel</a>
								<a onClick={this.handleSubmit} className="createSave col s2">Save</a>
							</div>
						</div>
					</form>
				</div>
			</div>
			
		);
	},
});


/* 
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
									<button className="waves-effect waves-light btn" type="submit" onClick={this.props.onClick}>Save</button>
								</form>
								
							</div>
						</div>
					</div> 
*/






