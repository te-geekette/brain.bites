Landing = React.createClass({

	getInitialState(){
		return {
			route: '/login'
		}
	},

	toggleRoute(){
		var isLogin = this.state.route === '/login';
		if (isLogin) {
			this.setState({route: '/'});
		} else {
			this.setState({route: '/login'});
		}
	},

	renderContent(){
		var isSignup = this.props.loginOrSignup === 'Sign up';
		return (isSignup ? 
			<Signup /> : 
			<Login />
		);
	},

	render() {
		return (
			
			<div className="container">
				<div className="row">
					<div id="landing-box" className="card medium col m6 push-m3">
						<div className="card-content">
							<span className="card-title">Welcome to brain.bites</span>
							{this.renderContent()}
						</div>
						<div className="card-action">
							<a href={this.state.route} onClick={this.toggleRoute} >{this.props.loginButton}</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
