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

// TODO:
// 1. Build an overlay-component to manage the profile: Edit passwort, upload picture