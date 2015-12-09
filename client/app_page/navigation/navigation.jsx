Navigation = React.createClass({

	getInitialState(){
		return {
			selectNavLink: 'active',
		}
	},

	componentDidMount(){
    	$(".button-collapse").sideNav();
    	$('.collapsible').collapsible();
    	$('.modal-trigger').leanModal();
	},

	handleLogout(){
		Meteor.logout(); 
		FlowRouter.go('/login');
	},

	// changeUsername(){
	// 	Meteor.call("changeUsername",'Q3SahWEobGRTBAD5c', 'Tina Egolf');
	// },

	// changePassword(){
	// 	var oldPassword;
	// 	var newPassword; 
	// 	Meteor.call('changeUserPassword', oldPassword, newPassword);
	// },

	render(){

		return (
		
			<nav className="top-nav blue-grey darken-4">
				<ul id="nav-links" className='right'>
					<a href="#" className="brand-logo">&#123; brain.bites &#125;</a>
				</ul>
				
				<a href="#" data-activates="slide-out" className="button-collapse hide-on-large-only">
					<i className="mdi-navigation-menu"></i>
				</a>

				<ul id="slide-out" className="side-nav fixed" >
					<li className="no-padding">
						<ul className="collapsible collapsible-accordion">
							<li> 
								<a className="collapsible-header" id="profile-box"> 
									<Profile userEmail={this.props.userEmail} />
								</a>
								<div className="collapsible-body">
									<ul>
										<li><a href="#modalAccountSettings">Account Settings</a></li>
										<li><a onClick={this.handleLogout}>Logout</a></li>
									</ul>
								</div>
							</li>
						</ul>
					</li>
				   	<li id="overview-nav-link" className="nav-menu"><a href="/overview/" ><i className="material-icons small">list</i>My Courses</a></li>
				   	<li id="explore-nav-link" className="nav-menu"><a href="/explore" ><i className="material-icons small">language</i>Explore Courses</a></li>
				</ul>

				<SettingsModal />
				
			</nav>
			
		);
	}
});

// <li className="nav-menu"><a href="#!"><i className="material-icons small">turned_in</i>References</a></li>


