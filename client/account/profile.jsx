Profile = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		var profileImageSource;

		if (Meteor.user().profile != undefined) {
			 profileImageSource = Meteor.user().profile.image; 
		} else {
			profileImageSource = "/images/profile.png"; 
		}

		return {
			// profilePics: ProfilePics.find(), 
			userPic: profileImageSource 
		}
	},

	render(){
		return (
			<div id="profile-component">
				<div id="profile-image">
					<img src={this.data.userPic} uploading="/images/profile.png" storing="/images/profile.png" store='profileStore' /> 
				</div>
				<div id="account" className="sidebar-brand">
					<div>{this.props.userEmail}</div>
					<i className="mdi-navigation-arrow-drop-down" />
				</div>
			</div>
		);
	}
});

//"/images/profile.png"
