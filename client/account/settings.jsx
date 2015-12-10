SettingsModal = React.createClass({

	getInitialState(){
		return {
			confirmation: 'hidden',
			error: 'hidden'
		}
	},

	clearAccountForm(){
		var username = ReactDOM.findDOMNode(this.refs.updatedusername).value;
		var oldPassword = ReactDOM.findDOMNode(this.refs.oldpassword).value;
		var password = ReactDOM.findDOMNode(this.refs.updatedpassword).value;
		
		if(username){ ReactDOM.findDOMNode(this.refs.updatedusername).value = ""; }
		if(oldPassword){ ReactDOM.findDOMNode(this.refs.oldpassword).value = ""; }
		if(password){ ReactDOM.findDOMNode(this.refs.updatedpassword).value = ''; }
	},

	handleSubmit(e){
		e.preventDefault(); 
		var username = ReactDOM.findDOMNode(this.refs.updatedusername).value.trim();
		var oldPassword = ReactDOM.findDOMNode(this.refs.oldpassword).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.updatedpassword).value.trim();
		// var picture = ReactDOM.findDOMNode(this.refs.updatedicture).files;
		var userId = Meteor.userId();
		var that = this;
		
		if (username) {

			Meteor.call("changeUsername",userId, username, function(error){
				if(error){
					that.setState({error: ''}); 
					console.log(error.message);

				} else {
					that.clearAccountForm();
					that.setState({confirmation: ''});
				}
			});
			
		}

		if (password) {

			console.log(oldPassword, password);

			Accounts.changePassword(oldPassword, password, function(error){
				if(error){
					that.setState({error: ''}); 
					console.log(error.message);

				} else {
					that.clearAccountForm();
					that.setState({confirmation: ''});
				}

			});
		} 

		// if (picture) {
		// 	console.log(picture);
		// }
	},

	handleCancel(){
		this.clearAccountForm();
		this.setState({confirmation: 'hidden'});
		$('#modalAccountSettings').closeModal();
	},

	render(){
		return ( 
			<div id="modalAccountSettings" className="modal modal-fixed-footer">
				<form action="#">
					<div className="modal-content">
			      		<h5>Account Settings</h5>
			      		
			      		<p className="col s4 mobile-label">Update your username</p>
			      		<div className="row flex align-base">
			      			<p className="col s4 desktop-label">Update your username</p>
        					<input className="col m6 s12" type="text" id="updated-username" ref="updatedusername" placeholder="Choose a new username"/>
			      		</div>

			      		<p className="col s4 mobile-label">Update your password</p>
			      		<div className="row flex align-base">
			      			<p className="col s4 desktop-label">Update your password</p>
			      			<input className="col m6 s12" type="password" id="updated-password" ref="oldpassword" placeholder="Enter your current password"/>
			      		</div>
			      		<div className="row">
        					<input className="col m6 s12 push-m4" type="password" id="updated-password" ref="updatedpassword" placeholder="Choose a new password"/>
			      		</div>
			      	</div>
			      		
			    	
			    	<div className="modal-footer flex justify-right align-center">
			    		<p className={this.state.error + ' account-confirmation'}>Something went wrong. Please try again.</p>
			    		<p className={this.state.confirmation + ' account-confirmation'}>You succesfully updated your account.</p>
			    		<a onClick={this.handleSubmit} className="modal-action btn-flat save ">Save</a>
			    		<a onClick={this.handleCancel} className="modal-action btn-flat cancel ">Cancel</a>
			    	</div>
		    	</form>
	    	</div>
	    );
	}
}); 


// The componenent part for image upload ... I'll get there later
/*			<div className="row">
      			<p className="col s6">Update your profile picture</p>

				<div className="file-field input-field col s6">
						<div className="btn">
						<span>File</span>
						<input type="file" ref="updatedpicture" />
						</div>
						<div className="file-path-wrapper">
			        	<input className="file-path validate" type="text"/>
			      	</div>
			    </div>
      		</div>
 */

