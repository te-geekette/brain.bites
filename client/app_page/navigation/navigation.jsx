Navigation = React.createClass({

	componentDidMount(){
    	$(".button-collapse").sideNav();
	},

	render(){

		return (
		
			<nav className="top-nav blue-grey darken-4">
				<ul id="nav-links" className='right'>
					<li><AccountsUIWrapper /></li>
					<a href="#" className="brand-logo">Logo</a>
				</ul>
				
				<a href="#" data-activates="slide-out" className="button-collapse hide-on-large-only">
					<i className="mdi-navigation-menu"></i>
				</a>

				<ul id="slide-out" className="side-nav fixed" >
					<li id="profile-box"><Profile /></li>
				   	<li className="nav-menu"><a href="/overview/"><i className="material-icons small">list</i>My Courses</a></li>
				   	<li className="nav-menu"><a href="#!"><i className="material-icons small">turned_in</i>References</a></li>
				   	<li className="nav-menu"><a href="#!"><i className="material-icons small">language</i>Explore Courses</a></li>
				</ul>
			</nav>
			
		);
	}
});

