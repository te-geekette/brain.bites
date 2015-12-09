Login = React.createClass({

	handleSubmit(e){
		e.preventDefault(); 
		var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

		Meteor.loginWithPassword(email, password, function(error){
			if (error) {
				console.log("login has failed " + error.message)
			} 
			FlowRouter.go('/overview');
		}); 

	},

	render(){
		return(
			<form id="login-form" action="action" onSubmit={this.handleSubmit}>
      			<div>
      				
        			<input type="email" id="login-email" ref="email" placeholder="Enter your email address"/>
        			
        			<input type="password" id="login-password" ref="password" placeholder="Enter your password" />
       	 			<button className='btn waves-effect waves-light blue darken-2' type="submit" id="login-button">
       	 				<i className='material-icons right'>cloud</i>
       	 				Login
       	 			</button>
       	 			<a href='/password-recovery'>Forgot your password?</a>
     			</div>
   			</form> 
		);
	}
});