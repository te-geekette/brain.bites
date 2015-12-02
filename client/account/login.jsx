Login = React.createClass({

	handleSubmit(e){
		e.preventDefault(); 
		var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

		Meteor.loginWithPassword(email, password); 
		
		// For whatever reason, this stopped working...
		FlowRouter.go('/overview');
	},

	render(){
		return(
			<form id="login-form" action="action" onSubmit={this.handleSubmit}>
      			<div>
      				
        			<input type="email" id="login-email" ref="email" placeholder="Email"/>
        			
        			<input type="password" id="login-password" ref="password" placeholder="Password" />
       	 			<button type="submit" id="login-button">Login</button>
     			</div>
   			</form> 
		);
	}
});