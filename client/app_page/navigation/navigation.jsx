Navigation = React.createClass({

	componentDidMount(){
    	$(".button-collapse").sideNav();
    	$('.collapsible').collapsible();
	},

	handleLogout(){
		Meteor.logout(); 
		FlowRouter.go('/login');
	},

	render(){

		return (
		
			<nav className="top-nav blue-grey darken-4">
				<ul id="nav-links" className='right'>
					<a href="#" className="brand-logo">Logo</a>
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
										<li><a onClick={this.handleLogout}>Logout</a></li>
									</ul>
								</div>
							</li>
						</ul>
					</li>
				   	<li className="nav-menu"><a href="/overview/"><i className="material-icons small">list</i>My Courses</a></li>
				   	<li className="nav-menu"><a href="/explore"><i className="material-icons small">language</i>Explore Courses</a></li>
				   	<li className="nav-menu"><a href="#!"><i className="material-icons small">turned_in</i>References</a></li>
				</ul>
			</nav>
			
		);
	}
});

