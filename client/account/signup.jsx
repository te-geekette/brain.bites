Signup = React.createClass({

	handleSubmit(e){
		e.preventDefault(); 
		var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

		Accounts.createUser({email: email, password: password}); 
		
		// For whatever reason, this stopped working...
		FlowRouter.go('/overview');
	},

	render(){
		return(
			<form id="register-form" action="action" onSubmit={this.handleSubmit}>
      			<div>
        			<input type="email" id="account-email" ref="email"/>
        			<input type="password" id="account-password" ref="password" />
       	 			<button type="submit" id="create-account">Create account</button>
     			</div>
   			</form> 
		);
	}
});