Navigation = React.createClass({

	getInitialState(){
		return{
			left: null
		}
	},

	handleMenuToggle(){
		this.setState(this.state.left ? {left: null} : {left: 0});
	},

	render(){
		return (
			<div>
				<nav className="top-nav blue-grey darken-1">
					<ul id="nav-links" className='right'>
						<li><AccountsUIWrapper /></li>
						<a href="#" className="brand-logo">Logo</a>
					</ul>
				</nav>

				<a href="#" onClick={this.handleMenuToggle} data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only">
					<i className="mdi-navigation-menu"></i>
				</a>

				<ul id="nav-mobile" className="side-nav fixed" style={ {'left': this.state.left} }>
					<li id="profile-box"><Profile /></li>
				   	<li className="nav-menu"><a href="/overview/"><i className="material-icons small">list</i>My Courses</a></li>
				   	<li className="nav-menu"><a href="#!"><i className="material-icons small">turned_in</i>References</a></li>
				   	<li className="nav-menu"><a href="#!"><i className="material-icons small">language</i>Explore Courses</a></li>
				</ul>
			</div>
		);
	}
});

			// <nav className="blue-grey darken-1">
			// 	<ul id="nav-links" className='right'>
			// 		<li><AccountsUIWrapper /></li>
			// 		<a href="#" className="brand-logo">Logo</a>
			// 	</ul>
			// 	<ul id="slide-out" className="side-nav fixed">
			// 		<li id="profile-box"><Profile /></li>
			// 	   	<li className="nav-menu"><a href="/overview/"><i className="material-icons small">list</i>My Courses</a></li>
			// 	   	<li className="nav-menu"><a href="#!"><i className="material-icons small">turned_in</i>References</a></li>
			// 	   	<li className="nav-menu"><a href="#!"><i className="material-icons small">language</i>Explore Courses</a></li>
			// 	</ul>
			// 	<ul id="slide-out" className="side-nav">
			// 		<li id="profile-box"><Profile /></li>
			// 	   	<li className="nav-menu"><a href="/overview/"><i className="material-icons small">list</i>My Courses</a></li>
			// 	   	<li className="nav-menu"><a href="#!"><i className="material-icons small">turned_in</i>References</a></li>
			// 	   	<li className="nav-menu"><a href="#!"><i className="material-icons small">language</i>Explore Courses</a></li>
			// 	</ul>

			// 	<a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
			// </nav>