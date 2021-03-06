Content = React.createClass({

	propTypes: {
		contentItem: React.PropTypes.object.isRequired
	},

	getInitialState(){
		var publishedContentState;
		var checkBox;
		var checkMark;
		var checkAction;

		switch(this.props.displayContent){
			case 'course':
				publishedContentState = false;
				checkBox = 'box'; 
				checkMark = 'check';
				checkAction = this.toggleChecked;
				break;

			case 'exploreCourse':
				publishedContentState = true;
				checkBox = 'disabled-box'; 
				checkMark = 'hidden';
				break;
		}

		return {
			publishedContentState: publishedContentState,
			checkBox: checkBox,
			checkMark: checkMark,
			checkAction: checkAction
		}
	},

	toggleChecked(){
		var completedTime = this.props.contentItem.duration; 
		var courseId = this.props.contentItem.courseId;
		
		if (this.props.contentItem.checked) {
			completedTime = -completedTime;
		}

		Meteor.call('setContentChecked', this.props.contentItem._id, !this.props.contentItem.checked, courseId, completedTime);
	},

	handleDelete(){
		Meteor.call('deleteContent', this.props.contentItem._id, this.props.contentItem.courseId, -this.props.contentItem.duration);
	},

	render(){
		var checkedClass = (this.props.contentItem.checked ? 'checked' : '');

		return(
			<li className={checkedClass}>
				<div id="content" className="row">
					<div className="card">
						<div className="card-content">
							
							<input type="checkbox" id="check-me" checked={this.props.contentItem.checked} />
							<label htmlFor="check-me" onClick={this.state.checkAction} >
								<span className={this.state.checkMark}></span>
								<span className={this.state.checkBox}></span>
							</label>
							
							
							<a href={this.props.contentItem.link} target="_blank" className ="content-title col s7 pull-s1">{this.props.contentItem.title}</a>
							
							<div className ="chip">
								{this.props.contentItem.duration} min
								<i className="mdi-small mdi-action-query-builder"></i>
							</div>

						</div>
						<div className={this.state.publishedContentState +" card-action"}>
							<a onClick={this.handleDelete} style={{ "marginRight": "0px"}}>delete</a>
						</div>
					</div>
				</div>
			</li>
		);
	}
});

// find the class for mdi-action etc. to verify 
// find small class to adjust to work with mdi-action 


