Content = React.createClass({

	propTypes: {
		contentItem: React.PropTypes.object.isRequired
	},

	getInitialState(){
		var publishedContentState;
		var disabledInExplore;

		switch(this.props.displayContent){
			case 'overview':
				publishedContentState = false;
				break;
			case 'course':
				publishedContentState = false;
				break;
			case 'explore':
				publishedContentState = true;
				disabledInExplore = 'disabled';
				break;
			case 'exploreCourse':
				publishedContentState = true;
				disabledInExplore = 'disabled';
				break;
		}

		return {
			publishedContentState: publishedContentState,
			disabledInExplore: disabledInExplore
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
							
							<input type="checkbox" id="check-me" checked={this.props.contentItem.checked} disabled={this.state.disabledInExplore} />
							<label htmlFor="check-me" onClick={this.toggleChecked} >
								<span className="check"></span>
								<span className="box"></span>
							</label>
							
							
							<a href={this.props.contentItem.link} target="_blank" className ="content-title col s9">{this.props.contentItem.title}</a>
							
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


// TODO:
// 4. Make sure they react properly on mobile

	// <div id="check-awesome" className="form-group col s1">
