ContentCreate = React.createClass({

	handleSubmit(event){
		event.preventDefault();

		var courseId = this.props.course._id;
		// var courseDuration = this.props.course.duration; 

		var title = ReactDOM.findDOMNode(this.refs.contentTitle).value.trim();
		var link = ReactDOM.findDOMNode(this.refs.contentLink).value.trim();
		var duration = parseFloat(ReactDOM.findDOMNode(this.refs.contentDuration).value);
		// var updatedCourseDuration = courseDuration + duration; 

		Meteor.call('addContent', title, link, duration, courseId);
		Meteor.call('setCourseDuration', courseId, duration);

	},

	render(){
		return(
			<li id="content-create" className={this.props.displayClass}>
				<form onSubmit={this.handleSubmit}>
					<div id="content" className="row">
						<div className ="move col s1">Move</div>
						<div className ="checkbox col s1">
							<input 
								type="checkbox"
								readOnly={true}
	
								disabled />
						</div>
						<div className ="content-title col s6">
							<input type="text" ref='contentTitle' placeholder="Give your content a descriptive headline" required />
						</div>
						<div className ="content-duration col s4">
							<input type="number" ref='contentDuration' placeholder="0.5" />
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
		);
	}
});

// Delete button: <button id="delete-btn" className="waves-effect waves-light btn" type="button" onClick={}>Delete</button>

// ToDo: 
// Build the duration dropdown 
// Delete buttons 
