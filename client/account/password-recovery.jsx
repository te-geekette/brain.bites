RecoveryEmail = React.createClass({

	handleSubmit(e){
		e.preventDefault(); 
		var email = ReactDOM.findDOMNode(this.refs.recoveryemail).value.trim();

		Accounts.forgotPassword({email: email}, function(error){
			if (error){
				console.log("Reset link was not sent");
			}
			console.log('Message was sent');
		});
		

	},

	render(){
		return(
			<form id="recovery-email" action="action" onSubmit={this.handleSubmit}>
      			<div>
      				<p>Enter your email address here. You'll receive a recovery link which will allow you to reset your password.</p>
        			<input type="email" id="recovery-email-email" ref="recoveryemail" placeholder="Enter your email address"/>
        			<button className='btn waves-effect waves-light blue darken-2' type="submit" id="login-button">
       	 				<i className='material-icons right'>cloud</i>
       	 				Send recovery link
       	 			</button>
     			</div>
   			</form> 
		);
	}
});
