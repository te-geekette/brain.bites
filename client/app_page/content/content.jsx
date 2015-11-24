Content = React.createClass({

	propTypes: {
		contentItem: React.PropTypes.object.isRequired
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
		const checkedClass = (this.props.contentItem.checked ? 'checked' : '');
		return(
			<li className={checkedClass}>
				<div id="content" className="row">
					<div className ="move col s1">Move</div>
					
					<input className ="checkbox col s1" style={{visibility: "visible", position: "inherit"}}
						type="checkbox"
						readOnly={true}
						checked={this.props.contentItem.checked}
						onClick={this.toggleChecked} />
					
					<a href={this.props.contentItem.link} target="_blank" className ="content-title col s6">{this.props.contentItem.title}</a>
					<div className ="content-duration col s2">{this.props.contentItem.duration}</div>
					<button className ="star col s2" onClick={this.handleDelete}>Delete</button> 
				</div>
			</li>
		);
	}
});


// TODO:
// 1. Icons & Button for 'Move', 'Edit', 'Star'
// 2. Turn the content into cards 
// 3. Style the elements of the cards
// 4. Make sure they react properly on mobile

