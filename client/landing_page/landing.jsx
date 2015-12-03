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
			
			<div id="landing" className="container">
				<img src="/images/landing-cover.png" />
				<div className="row">
					<div id="landing-box" className="card medium col m6 push-m3">
						<div className="card-content">
							<div className="card-title">Welcome to brain.bites</div>
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
