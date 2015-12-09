Content = React.createClass({

	propTypes: {
		contentItem: React.PropTypes.object.isRequired
	},

	getInitialState(){
		var publishedContentState;
		var checkBox;
		var checkMark;

		switch(this.props.displayContent){
			case 'course':
				publishedContentState = false;
				checkBox = 'box'; 
				checkMark = 'check';
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
			checkMark: checkMark
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
							<label htmlFor="check-me" onClick={this.toggleChecked} >
								<span className={this.state.checkMark}></span>
								<span className={this.state.checkBox}></span>
							</label>
							
							
							<a href={this.props.contentItem.link} target="_blank" className ="content-title col s7 pull-s1">{this.props.contentItem.title}</a>
							
							<div className ="chip">
								{this.props.contentItem.duration} min
								<i className=" small material-icons">query_builder</i>
							</div>

						</div>
						<div className={this.state.publishedContentState +" card-action"}>
							<a style={{ "marginRight": "10px"}}>move</a>
							<a onClick={this.handleDelete} style={{ "marginRight": "0px"}}>delete</a>
						</div>
					</div>
				</div>
			</li>
		);
	}
});


