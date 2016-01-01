Profile = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		var profileImageSource;
		var testCase = Meteor.user().profile != undefined; // Necessary to satisfy the unit test login process

		if (testCase){
			var profileURL = Meteor.user().profile.image; 
			var imageID = profileURL.slice(22);
			var fileObj = ProfilePics.findOne({_id: imageID});

			var fileUploadTest = fileObj ? fileObj.isUploaded() : false;
			var fileStoreTest = fileObj ? fileObj.hasStored('profilepics') : false; 

			if (fileUploadTest && fileStoreTest) {
				profileImageSource = "/" + Meteor.user().profile.image; 
			} else {
				profileImageSource = "/images/profile.png"; 
			}

		} else {
			profileImageSource = "/images/profile.png"; 
		}

		return {
			userPic: profileImageSource 
		}
	},

	render(){
		return (
			<div id="profile-component">
				<div id="profile-image">
					<img src={this.data.userPic} /> 
				</div>
				<div id="account" className="sidebar-brand">
					<div>{this.props.userEmail}</div>
					<i className="mdi-navigation-arrow-drop-down" />
				</div>
			</div>
		);
	}
});

