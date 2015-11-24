Profile = React.createClass({

	render(){
		return (
			<div id="profile-component">
				<div id="profile-image">
					<img src="/images/profile.png" />
				</div>
				<div id="account" className="sidebar-brand">
					<AccountsUIWrapper />
				</div>
			</div>
		);
	}
});