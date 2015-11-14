CourseHeader = React.createClass({

	propTypes: {
		course: React.PropTypes.object.isRequired
	},

	// mixins: [ReactMeteorData],

	// getMeteorData(){

	// },

	// getInitialState(){
	// 	return {
	// 		title: "Course Title",
	// 		description: 'Course description',
	// 		editing: false
	// 	};
	// },

	render(){
		return (
			<li> 
				<div className="row">
					<div className="col s12">
						<div className="card cyan ligthen-5">
							<div className="card-content text-cyan text-darken-4">
								<div className="card-title">{this.props.course.title}</div>
								<div>{this.props.course.description}</div>
								<div>{this.props.course.length}</div> 	
								<p>And here is some content</p>
							</div>
						</div>
					</div>
				</div>
			</li>
			);
	},

	// handleChange() {
	// 	this.setState({title: title});
	// },

	// handleSubmit(){
	// 	event.preventDefault();
	// 	var title = ReactDOM.findDOMNode(this.refs.text).value.trim();
	// 	Meteor.call('addCourse', text);
	// },

	// enableEditing(){
	// 	this.setState({editing: true});
	// }

});

///
								// 	<ContentEditable 
									// 	tagName="div"
									// 	className="title-field"
									// 	onChange={this.handleChange}
									// 	text={this.state.title}
									// 	placeholder={true}
									// 	autofocus={true}
									// 	maxLength={200}
									// 	editing={this.state.editing}
									// />