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
		if (this.props.landingContent === 'Sign up') {
			return (<Signup />);

		} else if (this.props.landingContent === 'Email recovery') {
			return (<RecoveryEmail />);

		} else if (this.props.landingContent === 'New password') {  // && Accounts._resetPasswordToken hat einen Token bereit gestellt
			return (<RecoveryPassword />);

		} else {
			return (<Login />);
		}

	},

	render() {
		return (
			
			<div id="landing" className="container">
				<img src="/images/landing-cover.png" />
				<div className="row">
					<div id="landing-box" className="card large col m6 push-m3">
						<div className="card-content">
							<div className="card-title">Welcome to &#123; brain.bites &#125;</div>
							<div className="landing-intro-text">With &#123; brain.bites &#125; you can create your own custom online courses and link lists based on the amazing (free) content you've found online. Create your own courses and lists, publish them and add other people's courses to your collection.</div>
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
