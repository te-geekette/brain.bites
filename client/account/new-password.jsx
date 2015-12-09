RecoveryPassword = React.createClass({

	handleSubmit(e){
		e.preventDefault(); 
		var password = ReactDOM.findDOMNode(this.refs.recoverypassword).value.trim();

		Accounts.resetPassword(Session.get('resetPassword'), password, function(error){
			if (error){
				console.log ('something went wrong: ' + error.message);
			}
			FlowRouter.go('/login');
		}); 
	},

	render(){
		return(
			<form id="recovery-email" action="action" onSubmit={this.handleSubmit}>
      			<div>
      				<p>Enter your new password here and click "Reset password"</p>
        			<input type="password" id="recovery-email-password" ref="recoverypassword" placeholder="Enter a new password"/>
        			<button className='btn waves-effect waves-light blue darken-2' type="submit" id="login-button">
       	 				<i className='material-icons right'>cloud</i>
       	 				Reset password
       	 			</button>
     			</div>
   			</form> 
		);
	}
});

// Es fehlt der Part mit dem resetPassword token. Ich kehre wahrscheinlich zur password-recovery zurück allerdings mit Token
// irgendwo muss ein Helper liegen, der den Token erkennt und entscheidet, was gezeigt wird.  