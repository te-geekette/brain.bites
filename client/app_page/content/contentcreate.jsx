ContentCreate = React.createClass({

	clearContentForm(){
		ReactDOM.findDOMNode(this.refs.contentTitle).value = "";
		ReactDOM.findDOMNode(this.refs.contentLink).value = "";
		ReactDOM.findDOMNode(this.refs.contentDuration).value ="";
	},

	handleSubmit(event){
		event.preventDefault();

		var courseId = this.props.course._id;
		// var courseDuration = this.props.course.duration; 

		var title = ReactDOM.findDOMNode(this.refs.contentTitle).value.trim();
		var link = ReactDOM.findDOMNode(this.refs.contentLink).value.trim();
		var duration = parseFloat(ReactDOM.findDOMNode(this.refs.contentDuration).value);
		// var updatedCourseDuration = courseDuration + duration; 

		Meteor.call('addContent', title, link, duration, courseId);

		this.props.onClick();
		this.clearContentForm();
	},

	render(){
		return(
			<li className={this.props.displayClass}>
				<div id="content-create" className="row">
					<div className="card">
						<form>
							<div className="card-content">
								<div className ="content-title row">
									<div className="col s12">
										<label htmlFor="contentTitle">Give your content a descriptive headline</label>
										<input type="text" ref='contentTitle' required />
									</div>
								</div>
								<div className ="row">
									<div className="content-link col s9">
										<label htmlFor="contentLink">Enter the URL of your course content here</label>
										<input type="url" ref='contentLink' required />
									</div>
									
									<div className="col s3">
										<label htmlFor="contentLink">Duration (in min)</label>
										<input type="number" ref='contentDuration' />
									</div>
								
								</div>
							</div>
							
							<div className="card-action create-action">
								<a onClick={this.handleSubmit}>SAVE</a>
								<a className="createCancel" onClick={this.props.onClick}>CANCEL</a>
							</div>
						</form>
					</div>
				</div>
			</li>

		);
	}
});

// Delete button: <button id="delete-btn" className="waves-effect waves-light btn" type="button" onClick={}>Delete</button>

// ToDo: 
// Build the duration dropdown 
// Delete buttons 

/*
			<li id="content-create" className={this.props.displayClass}>
				<form onSubmit={this.handleSubmit}>
					<div id="content" className="row">
						
						<div className ="content-title col s6">
							<input type="text" ref='contentTitle' placeholder="Give your content a descriptive headline" required />
						</div>
						<div className ="content-duration col s4">
							<input type="number" ref='contentDuration' placeholder="0.5" required />
							<div>A Dropdown </div>
						</div>
					</div>
					<div id="content-link" className="row">
						<div className ="content-link col s6">
							<input type="url" ref='contentLink' placeholder="Enter the URL of your course content here" required />
						</div>
					</div>
					<div id='button-row' className="row">
						<button id="cancel-btn" className="waves-effect waves-light btn" type="button" onClick={this.props.onClick}>Cancel</button>
						<button id="save-btn" className="waves-effect waves-light btn" onClick={this.props.onClick}>Save</button>
					</div>
				</form>
			</li>
*/