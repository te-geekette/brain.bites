Signup = React.createClass({

	handleSubmit(e){
		e.preventDefault(); 
		var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

		Accounts.createUser({email: email, password: password}, function(error){
			if (error){
				console.log('singup has failed ' + error.message)
			}
			FlowRouter.go('/overview');
		}); 
		
	},

	render(){
		return(
			<form id="register-form" action="action" onSubmit={this.handleSubmit}>
      			<div>
        			<input type="email" id="account-email" ref="email" placeholder="Your email address"/>
        			<input type="password" id="account-password" ref="password" placeholder="Set a password" />
       	 			<button className='btn waves-effect waves-light blue darken-2' type="submit" id="create-account">
       	 				Create account
       	 				<i className="material-icons right">send</i>
       	 			</button>
     			</div>
   			</form> 
		);
	}
});