RecoveryEmail = React.createClass({

	getInitialState(){
		return {
			confirmation: 'hidden',
			error: 'hidden',
			hideAfterSent: ''
		}
	},

	handleSubmit(e){
		e.preventDefault(); 
		var email = ReactDOM.findDOMNode(this.refs.recoveryemail).value.trim();

		Accounts.forgotPassword({email: email});

		this.setState({hideAfterSent: 'hidden'});
		this.setState({confirmation: ''});

	},

	showError(){
		this.setState({error: ''});
	},

	render(){
		return(
			<form id="recovery-email" action="action" onSubmit={this.handleSubmit}>
      			<div>
      				<p className="recovery-text" >Enter your email address here. You'll receive a recovery link which will allow you to reset your password.</p>
        			<input className={this.state.hideAfterSent} type="email" id="recovery-email-email" ref="recoveryemail" placeholder="Enter your email address"/>
        			<button className={this.state.hideAfterSent +' btn waves-effect waves-light blue darken-2'} type="submit" id="login-button">
       	 				<i className='material-icons right'>cloud</i>
       	 				Send recovery link
       	 			</button>
     			</div>
     			<p className={this.state.confirmation + " recovery-text"}> Thank you! We've sent you an email with the recovery link.</p>
   			</form> 
		);
	}
});
